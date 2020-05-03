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
            return model.assignment.hidden() || model.assignment.reviewed() || model.assignment.settings.canClose();
          }),
          textMarkSubmitted: ko.pureComputed(function () {
            if (model.ui.menu.isCompleted()) {
              return model.user.groupId() ? "Problem closed" : "Assignment closed";
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
            return (model.assignment.reviewed() || model.assignment.settings.canClose()) && model.submission.submissionStatus().toLowerCase() === "submitted";
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
["startView", "start_view", _python__WEBPACK_IMPORTED_MODULE_1__["DisplayModes"].SPLIT, _python__WEBPACK_IMPORTED_MODULE_1__["DisplayModes"], "The Python editor mode to start in when the student starts the problem."], ["datasets", "datasets", "", "string", "The current list of datasets available on load as a comma-separated string."], ["disableTimeout", "disable_timeout", false, "bool", "If checked, then students code is allowed to run without timeouts (potentially allowing infinite loops)."], ["isParsons", "is_parsons", false, "bool", "If checked, then this is a parson's style question (jumbled)."], ["disableFeedback", "disable_feedback", false, "bool", "If checked, then no instructor scripts are run (e.g., on_run and on_eval)."], ["disableInstructorRun", "disable_instructor_run", false, "bool", "If checked, then the instructor on_run will not automatically run the students' code. This still runs the students' code."], ["disableStudentRun", "disable_student_run", false, "bool", "If checked, then the run button no longer run the students' code. This still runs the instructor's feedback on_run script."], ["disableTifa", "disable_tifa", false, "bool", "If checked, then do not automatically run Tifa (which can be slow)."], ["disableTrace", "disable_trace", false, "bool", "If checked, then the students code will not have its execution traced (no variables recorded, no coverage tracked)."], ["disableEdit", "can_edit", false, "bool", "If checked, then the students' file will not be editable at all."], ["enableBlocks", "can_blocks", true, "bool", "If checked, then the student cannot edit the block interface (although it is visible)."], ["canClose", "can_close", false, "bool", "If checked, then the student should mark their submission closed when they are done. There is no way to force a student to do so. Unlike Reviewed, this still submits the correctness."], ["onlyInteractive", "only_interactive", false, "bool", "If checked, the editors are hidden, the program is automatically run, and then the console enters Eval mode (interactive)."], ["onlyUploads", "only_uploads", false, "bool", "If unchecked, then the students' file will not be directly editable (they will have to upload submissions)."], // What menus/feedback to show and hide
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvYmxvY2tweS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2NvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jb3JnaXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jc3MvYmxvY2tweS5jc3MiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jc3MvYm9vdHN0cmFwX3JldGhlbWUuY3NzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZGlhbG9nLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL2Fic3RyYWN0X2VkaXRvci5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci9hc3NpZ25tZW50X3NldHRpbmdzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL21hcmtkb3duLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL3B5dGhvbi5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci90YWdzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL3RleHQuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lZGl0b3JzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL2NvbmZpZ3VyYXRpb25zLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL2V2YWwuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvaW5zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9vbl9jaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvb25fZXZhbC5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9vbl9ydW4uanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvb25fc2FtcGxlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL3J1bi5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9zYW1wbGUuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvc3R1ZGVudC5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2ZlZWRiYWNrLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZmlsZXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9oaXN0b3J5LmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvc2VydmVyLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvc2tfbW9kX2luc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvdHJhY2UuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovL2Jsb2NrcHkvZXh0ZXJuYWwgXCJrb1wiIl0sIm5hbWVzIjpbIkJsb2NrUHkiLCJjb25maWd1cmF0aW9uIiwiYXNzaWdubWVudCIsInN1Ym1pc3Npb24iLCJpbml0TW9kZWwiLCJ1bmRlZmluZWQiLCJzZXRBc3NpZ25tZW50IiwiaW5pdE1haW4iLCJpbml0VXRpbGl0aWVzIiwiaW5pdE1vZGVsTWV0aG9kcyIsInR1cm5PbkhhY2tzIiwiaW5pdEludGVyZmFjZSIsImFwcGx5TW9kZWwiLCJpbml0Q29tcG9uZW50cyIsIm1ha2VFeHRyYVN1YnNjcmlwdGlvbnMiLCJzdGFydCIsImtleSIsImRlZmF1bHRWYWx1ZSIsImluaXRpYWxDb25maWd1cmF0aW9uXyIsImxvY2FsU2V0dGluZ3NfIiwiaGFzIiwiZ2V0IiwiTG9jYWxTdG9yYWdlV3JhcHBlciIsIm1vZGVsIiwidXNlciIsImlkIiwia28iLCJvYnNlcnZhYmxlIiwibmFtZSIsInJvbGUiLCJnZXRTZXR0aW5nIiwiY291cnNlSWQiLCJncm91cElkIiwiaW5zdHJ1Y3Rpb25zIiwidXJsIiwidHlwZSIsInN0YXJ0aW5nQ29kZSIsIm9uUnVuIiwib25DaGFuZ2UiLCJvbkV2YWwiLCJleHRyYUluc3RydWN0b3JGaWxlcyIsIm9ic2VydmFibGVBcnJheSIsImV4dHJhU3RhcnRpbmdGaWxlcyIsImZvcmtlZElkIiwiZm9ya2VkVmVyc2lvbiIsIm93bmVySWQiLCJ2ZXJzaW9uIiwidGFncyIsInNhbXBsZVN1Ym1pc3Npb25zIiwicmV2aWV3ZWQiLCJoaWRkZW4iLCJpcFJhbmdlcyIsInNldHRpbmdzIiwibWFrZUFzc2lnbm1lbnRTZXR0aW5nc01vZGVsIiwiY29kZSIsImV4dHJhRmlsZXMiLCJlbmRwb2ludCIsInNjb3JlIiwiY29ycmVjdCIsInN1Ym1pc3Npb25TdGF0dXMiLCJncmFkaW5nU3RhdHVzIiwiZGlzcGxheSIsImZpbGVuYW1lIiwiaW5zdHJ1Y3RvciIsInRvU3RyaW5nIiwibXV0ZVByaW50ZXIiLCJweXRob25Nb2RlIiwiRGlzcGxheU1vZGVzIiwiU1BMSVQiLCJoaXN0b3J5TW9kZSIsImF1dG9TYXZlIiwiYmlnQ29uc29sZSIsInByZXZpb3VzQ29uc29sZUhlaWdodCIsImN1cnJlbnRDb25zb2xlSGVpZ2h0Iiwic2Vjb25kUm93U2Vjb25kUGFuZWwiLCJTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMiLCJGRUVEQkFDSyIsInRyYWNlRXhlY3V0aW9uIiwibG9hZGluZ0RhdGFzZXRzIiwiY2hhbmdlZEluc3RydWN0aW9ucyIsInRyaWdnZXJPbkNoYW5nZSIsImRpcnR5U3VibWlzc2lvbiIsImZ1bGxzY3JlZW4iLCJwYXNzY29kZSIsInN0YXR1cyIsImxvYWRBc3NpZ25tZW50IiwiU3RhdHVzU3RhdGUiLCJSRUFEWSIsImxvYWRBc3NpZ25tZW50TWVzc2FnZSIsImxvYWRIaXN0b3J5IiwibG9hZEhpc3RvcnlNZXNzYWdlIiwibG9hZEZpbGUiLCJsb2FkRmlsZU1lc3NhZ2UiLCJsb2FkRGF0YXNldCIsImxvYWREYXRhc2V0TWVzc2FnZSIsImxvZ0V2ZW50IiwibG9nRXZlbnRNZXNzYWdlIiwic2F2ZUltYWdlIiwic2F2ZUltYWdlTWVzc2FnZSIsInNhdmVGaWxlIiwic2F2ZUZpbGVNZXNzYWdlIiwic2F2ZUFzc2lnbm1lbnQiLCJzYXZlQXNzaWdubWVudE1lc3NhZ2UiLCJ1cGRhdGVTdWJtaXNzaW9uIiwidXBkYXRlU3VibWlzc2lvbk1lc3NhZ2UiLCJ1cGRhdGVTdWJtaXNzaW9uU3RhdHVzIiwidXBkYXRlU3VibWlzc2lvblN0YXR1c01lc3NhZ2UiLCJvbkV4ZWN1dGlvbiIsImV4ZWN1dGlvbiIsInJlcG9ydHMiLCJvdXRwdXQiLCJzdHVkZW50IiwiY3VycmVudFN0ZXAiLCJsYXN0U3RlcCIsImN1cnJlbnRMaW5lIiwibGFzdExpbmUiLCJjdXJyZW50VHJhY2VEYXRhIiwiY3VycmVudFRyYWNlU3RlcCIsInJlc3VsdHMiLCJnbG9iYWxzIiwiZmVlZGJhY2siLCJtZXNzYWdlIiwiY2F0ZWdvcnkiLCJsYWJlbCIsImxpbmVzRXJyb3IiLCJsaW5lc1VuY292ZXJlZCIsImNhbGxiYWNrcyIsInNlcnZlckNvbm5lY3RlZCIsImJsb2NrbHlQYXRoIiwiYXR0YWNobWVudFBvaW50IiwiY29udGFpbmVyIiwidXJscyIsImNvbnN0YW50cyIsImd1aSIsIm1ha2VJbnRlcmZhY2UiLCIkIiwiaHRtbCIsImFzc2lnbm1lbnRfaWQiLCJjb21wb25lbnRzIiwic2VydmVyIiwic2FtcGxlcyIsInN0YXJ0aW5nX2NvZGUiLCJsb2FkQ29uY2F0ZW5hdGVkRmlsZSIsImV4dHJhX3N0YXJ0aW5nX2ZpbGVzIiwibG9hZE5vU3VibWlzc2lvbiIsImdyYWRpbmdfc3RhdHVzIiwic3VibWlzc2lvbl9zdGF0dXMiLCJ1c2VyX2lkIiwiY291cnNlX2lkIiwiZXh0cmFfZmlsZXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlc2V0SW50ZXJmYWNlIiwiZmlsZVN5c3RlbSIsImRpc21vdW50RXh0cmFGaWxlcyIsIndhc1NlcnZlckNvbm5lY3RlZCIsImZvcmtlZF9pZCIsImZvcmtlZF92ZXJzaW9uIiwiaXBfcmFuZ2VzIiwib25fY2hhbmdlIiwibmV3RmlsZSIsIm9uX2V2YWwiLCJvbl9ydW4iLCJvd25lcl9pZCIsImxvYWRBc3NpZ25tZW50U2V0dGluZ3MiLCJsb2FkVGFncyIsImxvYWRTYW1wbGVTdWJtaXNzaW9ucyIsInNhbXBsZV9zdWJtaXNzaW9ucyIsImV4dHJhX2luc3RydWN0b3JfZmlsZXMiLCJsb2FkU3VibWlzc2lvbiIsImNvcmdpcyIsImxvYWREYXRhc2V0cyIsInNldFN0YXR1cyIsInNlbGYiLCJ1aSIsImlzR3JhZGVyIiwicHVyZUNvbXB1dGVkIiwiaXNDaGFuZ2VkIiwiY3VycmVudCIsInV0aWxpdGllcyIsIm1hcmtkb3duIiwicmVzZXQiLCJtZW51IiwidGV4dEZ1bGxzY3JlZW4iLCJjbGlja0Z1bGxzY3JlZW4iLCJjYW5NYXJrU3VibWl0dGVkIiwiY2FuQ2xvc2UiLCJ0ZXh0TWFya1N1Ym1pdHRlZCIsImlzQ29tcGxldGVkIiwiaXNTdWJtaXR0ZWQiLCJjbGlja01hcmtTdWJtaXR0ZWQiLCJhbGVydCIsImVuZ2luZSIsImRlbGF5ZWRSdW4iLCJ0b0xvd2VyQ2FzZSIsInNlY29uZFJvdyIsImlzRmVlZGJhY2tWaXNpYmxlIiwiaXNUcmFjZVZpc2libGUiLCJUUkFDRSIsImlzQ29uc29sZVNob3dWaXNpYmxlIiwic3dpdGNoTGFiZWwiLCJhZHZhbmNlU3RhdGUiLCJjdXJyZW50UGFuZWwiLCJOT05FIiwic2l6ZSIsImhpZGVFdmFsdWF0ZSIsIkFDVElWRSIsImJhZGdlIiwidHJhY2UiLCJsaW5lIiwic3RlcCIsInRyYWNlRGF0YSIsImZpcnN0IiwiYmFja3dhcmQiLCJwcmV2aW91cyIsIk1hdGgiLCJtYXgiLCJmb3J3YXJkIiwibmV4dCIsIm1pbiIsImxhc3QiLCJmaWxlcyIsInZpc2libGUiLCJoaWRlRmlsZXMiLCJoYXNDb250ZW50cyIsInBhdGgiLCJzb21lIiwiZmlsZSIsImxlbmd0aCIsImFkZCIsIm5ld0ZpbGVEaWFsb2ciLCJkZWxldGVGaWxlIiwiZXh0cmFTdHVkZW50RmlsZXMiLCJvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZSIsImRpc3BsYXlGaWxlbmFtZSIsInN0YXJ0c1dpdGgiLCJzbGljZSIsImVkaXRvcnMiLCJnZXRFZGl0b3IiLCJ2aWV3IiwiaGlkZUVkaXRvcnMiLCJtYXAiLCJzdWJzdHIiLCJtYWtlTW9kZWxGaWxlIiwiY29udGVudHMiLCJjYW5TYXZlIiwiY2FuRGVsZXRlIiwiVU5ERUxFVEFCTEVfRklMRVMiLCJpbmRleE9mIiwiY2FuUmVuYW1lIiwiVU5SRU5BTUFCTEVfRklMRVMiLCJ1cGxvYWQiLCJ1cGxvYWRGaWxlIiwiYmluZCIsImRvd25sb2FkIiwiZG93bmxvYWRGaWxlIiwiaW1wb3J0RGF0YXNldCIsIm9wZW5EaWFsb2ciLCJweXRob24iLCJjb2RlTWlycm9yIiwicHl0aG9uRWRpdG9yIiwiYm0iLCJ0ZXh0RWRpdG9yIiwic2V0T3B0aW9uIiwiZ2V0T3B0aW9uIiwidXBkYXRlTW9kZSIsIm5ld01vZGUiLCJvbGRQeXRob25Nb2RlIiwiaXNIaXN0b3J5QXZhaWxhYmxlIiwiaXNFbmRwb2ludENvbm5lY3RlZCIsInR1cm5PZmZIaXN0b3J5TW9kZSIsInVwZGF0ZUVkaXRvciIsInNldFJlYWRPbmx5IiwidHVybk9uSGlzdG9yeU1vZGUiLCJyZXNwb25zZSIsInN1Y2Nlc3MiLCJoaXN0b3J5IiwibG9hZCIsImRpYWxvZyIsIkVSUk9SX0xPQURJTkdfSElTVE9SWSIsInRvZ2dsZUhpc3RvcnlNb2RlIiwibW92ZVRvU3RhcnQiLCJtb3ZlUHJldmlvdXMiLCJtb3ZlTmV4dCIsIm1vc3RSZWNlbnQiLCJtb3ZlVG9Nb3N0UmVjZW50IiwidXNlIiwic2F2ZSIsImV4ZWN1dGUiLCJpc1J1bm5pbmciLCJydW4iLCJldmFsdWF0ZSIsIm1lc3NhZ2VzIiwiZm9yY2UiLCJldmVudCIsInRhcmdldCIsImZhZGVPdXQiLCJmYWRlSW4iLCJtYWtlRXh0cmFJbnRlcmZhY2VTdWJzY3JpcHRpb25zIiwiYXBwbHlCaW5kaW5ncyIsIm1haW4iLCJ0ZXh0IiwiRWFzeU1ERSIsInByb3RvdHlwZSIsIkJsb2NrUHlEaWFsb2ciLCJmaW5kIiwiQmxvY2tQeUZlZWRiYWNrIiwiQmxvY2tQeVRyYWNlIiwiQmxvY2tQeUNvbnNvbGUiLCJCbG9ja1B5RW5naW5lIiwiQmxvY2tQeUZpbGVTeXN0ZW0iLCJFZGl0b3JzIiwiYnlOYW1lIiwiQmxvY2tQeVNlcnZlciIsIkJsb2NrUHlDb3JnaXMiLCJCbG9ja1B5SGlzdG9yeSIsInN1YnNjcmliZSIsImNoYW5nZWQiLCJ1c2VyU3VwcGxpZWRQYXNzY29kZSIsInByb21wdCIsIlNUQVJUX0VWQUxfSFRNTCIsIkNPTlNPTEVfSFRNTCIsIk5FV19DT05TT0xFX0xJTkVfSFRNTCIsIkNvbnNvbGVMaW5lVHlwZSIsIlRFWFQiLCJIVE1MIiwiUExPVCIsIklNQUdFIiwiVFVSVExFIiwiRVZBTCIsIlNUQVJUX0VWQUwiLCJWQUxVRSIsIklOUFVUIiwiVEVTVF9DQVNFIiwiQ29uc29sZUxpbmUiLCJjb250ZW50Iiwib3JpZ2luIiwiU2siLCJjdXJyRmlsZW5hbWUiLCJleGVjdXRpb25CdWZmZXIiLCJpbmRleCIsImZmaSIsInJlbWFwVG9QeSIsInJlbW92ZSIsIkNvbnNvbGVMaW5lVHVydGxlIiwiYWRkQ2xhc3MiLCJ3aGVyZSIsInByZXBlbmQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiQ29uc29sZUxpbmVJbWFnZSIsImFwcGVuZCIsIkNvbnNvbGVMaW5lUGxvdCIsIkNvbnNvbGVMaW5lVGV4dCIsImVuY29kZWRUZXh0IiwiZW5jb2RlSFRNTCIsImxpbmVEYXRhIiwidG9vbHRpcCIsIkNvbnNvbGVMaW5lVmFsdWUiLCJDb25zb2xlTGluZUlucHV0IiwicHJvbXB0TWVzc2FnZSIsImlucHV0Rm9ybSIsImlucHV0QnRuIiwiaW5wdXRHcm91cCIsImlucHV0Qm94IiwiaW5wdXRNc2ciLCJtYWtlSW50ZXJhY3RpdmUiLCJpbnB1dCIsImJ1dHRvbiIsInJlc29sdmVPbkNsaWNrIiwic3VibWl0dGVkUHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwic3VibWl0Rm9ybSIsInVzZXJJbnB1dHRlZFZhbHVlIiwidmFsIiwicXVldWVkSW5wdXQiLCJwdXNoIiwicHJvcCIsImNsaWNrIiwia2V5dXAiLCJlIiwia2V5Q29kZSIsImZvY3VzIiwiQ29uc29sZUxpbmVFdmFsdWF0ZSIsIkNvbnNvbGVMaW5lU3RhcnRFdmFsdWF0ZSIsInRhZyIsInByaW50ZXJUYWciLCJNSU5JTVVNX1dJRFRIIiwiTUlOSU1VTV9IRUlHSFQiLCJERUZBVUxUX0hFSUdIVCIsImhlaWdodCIsImNsZWFyIiwicmVtb3ZlQWxsIiwibGluZUJ1ZmZlciIsInBsb3RCdWZmZXIiLCJlbXB0eSIsInR1cnRsZUxpbmUiLCJUdXJ0bGVHcmFwaGljcyIsImdldFR1cnRsZUxpbmUiLCJ3aWR0aCIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwiYXNzZXRzIiwibG9hZEFzc2V0IiwicmVuZGVyIiwiY3VycmVudFByaW50ZXJEaW1lbnNpb24iLCJzYXZlVHVydGxlT3V0cHV0IiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImltZyIsIkltYWdlIiwiZGF0YVVybCIsInRvRGF0YVVSTCIsInBhZ2UiLCJlYWNoIiwiYXR0ciIsInNob3ciLCJoaWRlIiwibGluZVRleHQiLCJmbHVzaCIsImNoYXJBdCIsInNwbGl0TGluZXMiLCJzcGxpdCIsImFkZENvbnRlbnQiLCJpIiwicGxvdHMiLCJpbWFnZURhdGEiLCJpbWFnZUJ1ZmZlciIsImltYWdlIiwidmFsdWUiLCJwcmludGVkVmFsdWUiLCJpbnB1dEJ1ZmZlciIsInN0YXJ0RXZhbHVhdGlvbiIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJfSU1QT1JURURfREFUQVNFVFMiLCJfSU1QT1JURURfQ09NUExFVEVfREFUQVNFVFMiLCJzZXRCdXR0b25Mb2FkZWQiLCJidG4iLCJyZW1vdmVDbGFzcyIsImxvYWRlZERhdGFzZXRzIiwic2lsZW50bHkiLCJlZGl0b3IiLCJpbXBvcnRzIiwiZGF0YXNldHMiLCJmb3JFYWNoIiwiQmxvY2tNaXJyb3JCbG9ja0VkaXRvciIsIkVYVFJBX1RPT0xTIiwiYXBwbHkiLCJzbHVnIiwid2hlbiIsImRvbmUiLCJmb3JjZUJsb2NrUmVmcmVzaCIsImJsb2NrRWRpdG9yIiwicmVtYWtlVG9vbGJveCIsImZhaWwiLCJhcmd1bWVudHMiLCJlcnJvciIsImFsd2F5cyIsImZpbmFsaXplU3Vic2NyaXB0aW9ucyIsInVybF9yZXRyaWV2YWxzIiwicm9vdCIsImltcG9ydERhdGFzZXRzIiwiZ2V0RGF0YXNldCIsImdldFNjcmlwdCIsImdldENvbXBsZXRlIiwiZ2V0U2t1bHB0IiwiYnVpbHRpbkZpbGVzIiwiZ2V0QmxvY2tseSIsInRleHRUb0Jsb2NrcyIsImhpZGRlbkltcG9ydHMiLCJnZXRKU09OIiwiYmxvY2tweSIsImRvY3VtZW50YXRpb24iLCJib2R5IiwiT2JqZWN0Iiwia2V5cyIsInNvcnQiLCJzbHVnZ2VkTmFtZSIsInRpdGxlTmFtZSIsImltZ1NyYyIsInRpdGxlIiwib3ZlcnZpZXciLCJhcHBlbmRUbyIsIkRJQUxPR19IVE1MIiwidGl0bGVUYWciLCJib2R5VGFnIiwiZm9vdGVyVGFnIiwib2theUJ1dHRvbiIsInllcyIsIm1vZGFsIiwiY2xvc2UiLCJvbmNsb3NlIiwiZHJhZ2dhYmxlIiwib24iLCJjb25maXJtIiwibm8iLCJ5ZXNUZXh0IiwiQVNTSUdOTUVOVF9WRVJTSU9OX0NIQU5HRUQiLCJFUlJPUl9MT0FESU5HX0FTU0lHTk1ORU5UIiwicmVhc29uIiwiU0NSRUVOU0hPVF9CTE9DS1MiLCJFUlJPUl9VUERBVElOR19TVUJNSVNTSU9OX1NUQVRVUyIsImZpbGVSZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZmlsZU5hbWUiLCJyZWFkQXNUZXh0Iiwic2x1Z2dpZnkiLCJyZXBsYWNlIiwiZXh0ZW5zaW9uIiwibWltZXR5cGUiLCJibG9iIiwiQmxvYiIsIndpbmRvdyIsIm5hdmlnYXRvciIsIm1zU2F2ZU9yT3BlbkJsb2IiLCJtc1NhdmVCbG9iIiwidGVtcG9yYXJ5RG93bmxvYWRMaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImFwcGVuZENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJBYnN0cmFjdEVkaXRvciIsImNoYW5nZUVkaXRvciIsIndhdGNoRmlsZSIsInVwZGF0ZWQiLCJvbkZpbGVVcGRhdGVkIiwiZGVsZXRlZCIsIm9uRmlsZURlbGV0ZWQiLCJuZXdGaWxlbmFtZSIsIm9sZEVkaXRvciIsImdldEZpbGUiLCJ0cmFja0N1cnJlbnRGaWxlIiwibmV3RWRpdG9yIiwic3RvcFdhdGNoaW5nRmlsZSIsInJlc3VsdCIsImhhbmRsZSIsInBhcnNlRmlsZW5hbWUiLCJBU1NJR05NRU5UX1NFVFRJTkdTIiwiZ2V0RG9jdW1lbnRhdGlvbiIsIm1ha2VTdGFydFZpZXdUYWIiLCJpY29uIiwibW9kZSIsIkFTU0lHTk1FTlRfU0VUVElOR1NfQk9PTEVBTl9DT01QT05FTlRTX0hUTUwiLCJmaWx0ZXIiLCJzZXR0aW5nIiwicHJldHR5TmFtZSIsIndvcmQiLCJ0b1VwcGVyQ2FzZSIsImpvaW4iLCJBU1NJR05NRU5UX1NFVFRJTkdTX0VESVRPUl9IVE1MIiwiQkxPQ0siLCJzYXZlQXNzaWdubWVudFNldHRpbmdzIiwiY2xpZW50TmFtZSIsInNlcnZlck5hbWUiLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJzdGFydF92aWV3IiwiZmllbGRUeXBlIiwiY29uZmlnVmFsdWUiLCJBc3NpZ25tZW50U2V0dGluZ3NWaWV3IiwiZGlydHkiLCJjdXJyZW50TGlzdGVuZXIiLCJ1cGRhdGVIYW5kbGUiLCJuZXdDb250ZW50cyIsIkFzc2lnbm1lbnRTZXR0aW5ncyIsImV4dGVuc2lvbnMiLCJjb25zdHJ1Y3RvciIsInRlbXBsYXRlIiwiTUFSS0RPV05fRURJVE9SX0hUTUwiLCJNYXJrZG93bkVkaXRvclZpZXciLCJtZGUiLCJlbGVtZW50IiwiYXV0b0Rvd25sb2FkRm9udEF3ZXNvbWUiLCJmb3JjZVN5bmMiLCJtaW5IZWlnaHQiLCJyZW5kZXJpbmdDb25maWciLCJjb2RlU3ludGF4SGlnaGxpZ2h0aW5nIiwiaW5kZW50V2l0aFRhYnMiLCJ0YWJTaXplIiwiY3VycmVudFN1YnNjcmlwdGlvbiIsImNvZGVtaXJyb3IiLCJzZXRUaW1lb3V0IiwicmVmcmVzaCIsImRpc3Bvc2UiLCJvZmYiLCJNYXJrZG93bkVkaXRvciIsIm1ha2VUYWIiLCJQWVRIT05fRURJVE9SX0hUTUwiLCJISVNUT1JZX1RPT0xCQVJfSFRNTCIsImNvbnZlcnRJcHluYlRvUHl0aG9uIiwiaXB5bmIiLCJpc1VzYWJsZSIsImNlbGwiLCJjZWxsX3R5cGUiLCJzb3VyY2UiLCJtYWtlUHl0aG9uIiwiY2VsbHMiLCJQeXRob25FZGl0b3JWaWV3IiwiQmxvY2tNaXJyb3IiLCJ0b29sYm94IiwicmVhZE9ubHkiLCJtYWtlU3Vic2NyaXB0aW9ucyIsImxpbmVFcnJvclN1YnNjcmlwdGlvbiIsImxpbmVVbmNvdmVyZWRTdWJzY3JpcHRpb24iLCJtYWtlUGVyQXNzaWdubWVudFN1YnNjcmlwdGlvbnMiLCJ3b3Jrc3BhY2UiLCJjb25maWd1cmVDb250ZXh0TWVudSIsIm9wdGlvbnMiLCJlbmFibGVkIiwiY2FsbGJhY2siLCJvbGRGaWxlbmFtZSIsImN1cnJlbnRCTUxpc3RlbmVyIiwiYWRkQ2hhbmdlTGlzdGVuZXIiLCJpc1BhcnNvbnMiLCJsaW5lcyIsInNldEhpZ2hsaWdodGVkTGluZXMiLCJkZWxldGVGaWxlTG9jYWxseV8iLCJzZXRDb2RlIiwiY2xlYXJIaWdobGlnaHRlZExpbmVzIiwiZ2V0Q29kZSIsInJlbW92ZUNoYW5nZUxpc3RlbmVyIiwiY2xlYXJMaW5lU3Vic2NyaXB0aW9ucyIsInNldE1vZGUiLCJlbmFibGVCbG9ja3MiLCJvbmx5VXBsb2FkcyIsImlzUmVhZE9ubHkiLCJlbmRzV2l0aCIsIlB5dGhvbkVkaXRvciIsIlRBR1NfRURJVE9SX0hUTUwiLCJUYWdzRWRpdG9yVmlldyIsIlRhZ3NFZGl0b3IiLCJURVhUX0VESVRPUl9IVE1MIiwiVGV4dEVkaXRvclZpZXciLCJDb2RlTWlycm9yIiwiZnJvbVRleHRBcmVhIiwic2hvd0N1cnNvcldoZW5TZWxlY3RpbmciLCJsaW5lTnVtYmVycyIsImZpcnN0TGluZU51bWJlciIsImluZGVudFVuaXQiLCJleHRyYUtleXMiLCJjbSIsImJsdXIiLCJzZXRWYWx1ZSIsImdldFZhbHVlIiwiVGV4dEVkaXRvciIsIkVkaXRvcnNFbnVtIiwiU1VCTUlTU0lPTiIsIkFTU0lHTk1FTlQiLCJJTlNUUlVDVElPTlMiLCJPTl9SVU4iLCJPTl9DSEFOR0UiLCJPTl9FVkFMIiwiU1RBUlRJTkdfQ09ERSIsIlNBTVBMRV9TVUJNSVNTSU9OUyIsIklOU1RSVUNUT1JfRklMRSIsIlNQRUNJQUxfTkFNRVNQQUNFUyIsIkFWQUlMQUJMRV9FRElUT1JTIiwiRURJVE9SU19IVE1MIiwicmVnaXN0ZXJlZF8iLCJleHRlbnNpb25zXyIsImJ5TmFtZV8iLCJyZWdpc3RlckVkaXRvciIsImluc3RhbmNlIiwiZXhpdCIsImVudGVyIiwic3BhY2UiLCJsYXN0SW5kZXhPZiIsImV4ZWN1dGlvbk1vZGVsIiwiY29uZmlndXJhdGlvbnMiLCJSdW5Db25maWd1cmF0aW9uIiwiZXZhbCIsIkV2YWxDb25maWd1cmF0aW9uIiwiT25SdW5Db25maWd1cmF0aW9uIiwiT25DaGFuZ2VDb25maWd1cmF0aW9uIiwiT25FdmFsQ29uZmlndXJhdGlvbiIsImNvbmZpZ3VyZSIsImdldFNrdWxwdE9wdGlvbnMiLCJvbkV4ZWN1dGlvbkJlZ2luIiwib25FeGVjdXRpb25FbmQiLCJyZXBvcnQiLCJyZXNldFN0dWRlbnRNb2RlbCIsInJlc2V0UmVwb3J0cyIsInJlc2V0RXhlY3V0aW9uQnVmZmVyIiwidGhlbiIsImZhaWx1cmUiLCJkaXNhYmxlRmVlZGJhY2siLCJzaG93RXJyb3JzIiwiZXhlY3V0aW9uRW5kXyIsImV2YWx1YXRpb25JbnB1dCIsInVzZXJJbnB1dCIsIm1pc2NldmFsIiwiYXN5bmNUb1Byb21pc2UiLCJpbXBvcnRNYWluV2l0aEJvZHkiLCJGSUxFTkFNRSIsInByb2dyYW1zIiwidHJpbSIsInNhdmVDb2RlIiwidmVyaWZ5Q29kZSIsInVwZGF0ZVBhcnNlIiwicnVuSW5zdHJ1Y3RvckNvZGUiLCJtb2R1bGUiLCJleGVjdXRpb25SZXBvcnRzIiwicHJlc2VudEZlZWRiYWNrIiwiJGQiLCJFTVBUWV9NT0RVTEUiLCJDb25maWd1cmF0aW9uIiwiaW5Ccm93c2VyIiwib3BlbkZpbGUiLCJyZXF1ZXN0c0dldCIsInRpbWVvdXQiLCJvcGVuVVJMIiwiX19mdXR1cmVfXyIsInB5dGhvbjMiLCJyZWFkIiwiaW1wb3J0RmlsZSIsImZpbGV3cml0ZSIsIndyaXRlRmlsZSIsInByaW50IiwiaW5wdXRmdW4iLCJpbnB1dGZ1blRha2VzUHJvbXB0IiwiaW1hZ2VQcm94eSIsImdldEltYWdlUHJveHkiLCJyZXRhaW5HbG9iYWxzIiwid2FybiIsIm1vY2tVcmxEYXRhIiwiYnVpbHRpbiIsIklPRXJyb3IiLCJoYXNPd25Qcm9wZXJ0eSIsImZpbGVEYXRhIiwicmVhZEZpbGUiLCJFcnJvciIsInBvcCIsImFmdGVyU2luZ2xlRXhlY3V0aW9uIiwicHJpbnRWYWx1ZSIsInJlbWFwVG9KcyIsIl8iLCIkciIsInJlamVjdCIsIngiLCJGQUlMRUQiLCJTdHVkZW50Q29uZmlndXJhdGlvbiIsIlVUSUxJVFlfTU9EVUxFX0NPREUiLCIkc2tfbW9kX2luc3RydWN0b3IiLCJJbnN0cnVjdG9yQ29uZmlndXJhdGlvbiIsImV4ZWNMaW1pdCIsImZvdW5kIiwic2VhcmNoRm9yRmlsZSIsIk9TRXJyb3IiLCJjbGVhclRpbWVvdXQiLCJXUkFQX0lOU1RSVUNUT1JfQ09ERSIsInN0dWRlbnRDb2RlIiwiaW5zdHJ1Y3RvckNvZGUiLCJxdWljayIsImlzU2FmZSIsInNhZmVDb2RlIiwiaW5kZW50ZWRDb2RlIiwiaW5kZW50IiwiZGlzYWJsZVRpZmEiLCJzdHVkZW50Q29kZVNhZmUiLCJldmFsdWF0aW9uIiwiZHVtbXlPdXRTYW5kYm94IiwibGluZU9mZnNldCIsIk5FV19MSU5FX1JFR0VYIiwiU1VDQ0VTUyIsIlNDT1JFIiwib2xkU2NvcmUiLCJISURFIiwic2Nyb2xsaW5nIiwic2Nyb2xsVG9Cb3R0b20iLCJ0cCRuYW1lIiwicHJlc2VudEludGVybmFsRXJyb3IiLCJ0aWZhQW5hbHlzaXMiLCJPblNhbXBsZUNvbmZpZ3VyYXRpb24iLCJCb29sZWFuIiwiZmluaXNoVHVydGxlcyIsImJlZ2luRXZhbCIsInBhcnNlciIsInZlcmlmaWVyIiwiU2FtcGxlQ29uZmlndXJhdGlvbiIsImV4ZWNMaW1pdEZ1bmN0aW9uIiwiZGlzYWJsZVRpbWVvdXQiLCJJbmZpbml0eSIsImlzRm9yYmlkZGVuIiwidmFyaWFibGVzIiwibG9jYWxzIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInBhcnNlR2xvYmFscyIsInByb3BlcnRpZXMiLCJtb2R1bGVzIiwiYXN0IiwidmlzaXRlZExpbmVzIiwiU2V0IiwidmlzaXRCb2R5Iiwibm9kZSIsImxpbmVubyIsInN0YXRlbWVudCIsIm9yZWxzZSIsImZpbmFsYm9keSIsIkFycmF5IiwiZnJvbSIsImFzdEZyb21QYXJzZSIsImNzdCIsImZsYWdzIiwiZ2V0TGluZXMiLCJwcmVzZW50UnVuRXJyb3IiLCJGRUVEQkFDS19IVE1MIiwiZmVlZGJhY2tNb2RlbCIsIm9mZnNldCIsInRvcCIsInZpc2liaWxpdHlCdWZmZXIiLCJ0b3BPZkVsZW1lbnQiLCJib3R0b21PZkVsZW1lbnQiLCJib3R0b21PZlNjcmVlbiIsInRvcE9mU2NyZWVuIiwiZXhlY3V0aW9uUmVzdWx0cyIsIk1FU1NBR0UiLCJDQVRFR09SWSIsIkxBQkVMIiwiREFUQSIsImhpZGVTY29yZSIsImZpbmRGaXJzdEVycm9yTGluZSIsInN0dWRlbnRSZXBvcnQiLCJ1bmNvdmVyZWRMaW5lcyIsInVwZGF0ZUZlZWRiYWNrIiwibm90aWZ5RmVlZGJhY2tVcGRhdGUiLCJtc2ciLCJhcmdzIiwidiIsImNvbnZlcnRTa3VscHRFcnJvciIsImZpbGVuYW1lRXhlY3V0ZWQiLCJ0cmFjZWJhY2siLCJmcmFtZSIsInNjb3BlIiwiZmVlZGJhY2tEYXRhIiwicG9zaXRpb24iLCJmcmllbmRseU5hbWUiLCJoaWRlSWZFbXB0eSIsIm5vdEluc3RydWN0b3IiLCJpbnN0cnVjdG9yRmlsZUNsYXNzIiwiaGlkZUlmTm90SW5zdHJ1Y3RvciIsIkZJTEVTX0hUTUwiLCJORVdfSU5TVFJVQ1RPUl9GSUxFX0RJQUxPR19IVE1MIiwiU1RBUlRJTkdfRklMRVMiLCJCQVNJQ19ORVdfRklMRVMiLCJJTlNUUlVDVE9SX0RJUkVDVE9SWSIsIlNUVURFTlRfRElSRUNUT1JZIiwiU2VhcmNoTW9kZXMiLCJFVkVSWVdIRVJFIiwiU1RBUlRfV0lUSF9JTlNUUlVDVE9SIiwiT05MWV9TVFVERU5UX0ZJTEVTIiwiREVMRVRBQkxFX1NJTVBMRV9GSUxFUyIsIkJsb2NrUHlGaWxlIiwib3duZXIiLCJtYWtlTW9ja01vZGVsRmlsZSIsImNvbmNhdGVuYXRlZEZpbGUiLCJtb2RlbEZpbGVMaXN0IiwibW9kZWxGaWxlcyIsImNyZWF0ZUNvbmNhdGVuYXRlZEZpbGUiLCJmaWxlc18iLCJtb3VudEZpbGVzIiwid2F0Y2hNb2RlbCIsIndhdGNoZXNfIiwidmlzaWJsaXR5IiwidG9nZ2xlIiwiZmlsZXN5c3RlbSIsImZpbGVBcnJheSIsImNoYW5nZXMiLCJjaGFuZ2UiLCJtb2RlbEZpbGUiLCJub3RpZnlXYXRjaGVzIiwib2JzZXJ2ZUluQXJyYXlfIiwiYXJyYXkiLCJjb2RlQnVuZGxlIiwiZXhpc3RpbmdGaWxlIiwib2JzZXJ2ZUZpbGVfIiwic3R1ZGVudFNlYXJjaCIsInNlYXJjaE1vZGUiLCJzcGVjaWFsRmlsZSIsInNlYXJjaEZvclNwZWNpYWxGaWxlc18iLCJzdHVkZW50VmVyc2lvbiIsInNlYXJjaEZvckZpbGVJbkxpc3RfIiwiZ2VuZXJhdGVkVmVyc2lvbiIsImRlZmF1bHRWZXJzaW9uIiwiZmlyc3REZWZpbmVkVmFsdWUiLCJpbnN0cnVjdG9yVmVyc2lvbiIsImhpZGRlblZlcnNpb24iLCJzdGFydGluZ1ZlcnNpb24iLCJtb2RlbExpc3QiLCJraW5kIiwiZmlsZXR5cGUiLCJuYW1lc3BhY2UiLCJleHRlbnNpb25SZWdleCIsImV4ZWMiLCJwcmVmaXgiLCJzdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsIkZPT1RFUl9IVE1MIiwiY3VycmVudElkIiwiZWRpdEV2ZW50cyIsInNlbGVjdG9yIiwiZWRpdElkIiwiZW50cnkiLCJmaWxlX3BhdGgiLCJldmVudF90eXBlIiwiUkVNQVBfRVZFTlRfVFlQRVMiLCJkaXNwbGF5ZWQiLCJwcmV0dHlQcmludERhdGVUaW1lIiwiY2xpZW50X3RpbWVzdGFtcCIsImRpc2FibGUiLCJvcHRpb24iLCJkaXNhYmxlZCIsImlzRWRpdEV2ZW50IiwiZXZ0IiwicGFyc2VJbnQiLCJtb250aE5hbWVzIiwid2Vla0RheXMiLCJpc1NhbWVEYXkiLCJzZWNvbmQiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsInRpbWVTdHJpbmciLCJub3ciLCJEYXRlIiwicGFzdCIsInRvTG9jYWxlVGltZVN0cmluZyIsImRheVN0ciIsImdldERheSIsIm1vbnRoU3RyIiwiZGF0ZSIsImdldEhpc3RvcnkiLCJyZXZlcnNlIiwicmVkdWNlIiwiY29tcGxldGUiLCJlbGVtIiwiY29tcGxldGVfc3RyIiwidGltZSIsIm5ld19saW5lIiwiaGlnaGxpZ2h0VGltZW91dCIsImJsb2NrIiwiaGxqcyIsImhpZ2hsaWdodEJsb2NrIiwiaXNGdWxsc2NyZWVuIiwicGFyZW50IiwicmVxdWVzdEZ1bGxzY3JlZW4iLCJlcnIiLCJjc3MiLCJleGl0RnVsbHNjcmVlbiIsIlRSQUNFX0hUTUwiLCJSRVRSWUlORyIsIk9GRkxJTkUiLCJzdG9yYWdlIiwicXVldWUiLCJnZXREZWZhdWx0IiwiTUFYX1FVRVVFX1NJWkUiLCJUSU1FUl9ERUxBWSIsIkZBSUxfREVMQVkiLCJ0aW1lcnMiLCJvdmVybGF5IiwiYmxvY2tpbmdBdHRlbXB0cyIsImNhY2hlZEZpbGVuYW1lcyIsImNyZWF0ZVN1YnNjcmlwdGlvbnMiLCJjaGVja0NhY2hlcyIsImNoZWNrSVAiLCJvbGRJUCIsImlwIiwic2V0IiwiX3Bvc3RMYXRlc3RSZXRyeSIsInB1c2hBbnlRdWV1ZWQiLCJfcG9zdFJldHJ5IiwiY3JlYXRlRmlsZVN1YnNjcmlwdGlvbiIsImNyZWF0ZUV2ZW50TG9ncyIsIm9uYmx1ciIsIm9uZm9jdXMiLCJjcmVhdGVTZXJ2ZXJEYXRhIiwibWljcm9zZWNvbmRzIiwiZ2V0VGltZSIsImdldFRpbWV6b25lT2Zmc2V0Iiwic2hvd092ZXJsYXkiLCJhdHRlbXB0IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImhpZGVPdmVybGF5IiwiX2VucXVldWVEYXRhIiwiY2FjaGUiLCJfZGVxdWV1ZURhdGEiLCJzcGxpY2UiLCJkZWxheSIsInBvc3RSZXF1ZXN0IiwicG9zdCIsInRleHRTdGF0dXMiLCJyZXF1ZXN0IiwiY2FjaGVkVGltZSIsIl9wb3N0QmxvY2tpbmciLCJhdHRlbXB0cyIsImVycm9yVGhyb3duIiwibG9hZEFzc2lnbm1lbnREYXRhXyIsIkVSUk9SX1NBVklOR19BU1NJR05NTkVOVCIsImRpcmVjdG9yeSIsIm5ld1N0YXR1cyIsInBvc3RTdGF0dXNDaGFuZ2UiLCJlcnJvckNhbGxiYWNrIiwibG9hZF9maWxlIiwiaGlkZGVuT3ZlcnJpZGUiLCJmb3JjZVVwZGF0ZSIsImdldFBuZ0Zyb21CbG9ja3MiLCJwbmdEYXRhIiwibW9kIiwibm9uZSIsIm5vbmUkIiwicHJpb3IiLCJ0aW1laXQiLCJmdW5jIiwicHlDaGVja0FyZ3MiLCJkaWZmZXJlbmNlIiwiZGVidWciLCJnZXRfb3V0cHV0IiwiaXRlbSIsInRvU2t1bHB0IiwibGlzdCIsInJlc2V0X291dHB1dCIsInF1ZXVlX2lucHV0IiwicHlDaGVja1R5cGUiLCJjaGVja1N0cmluZyIsImdldF9wcm9ncmFtIiwiZ2V0X2V2YWx1YXRpb24iLCJ0cmFjZV9saW5lcyIsImdldF9zdHVkZW50X2Vycm9yIiwidHVwbGUiLCJoYWRfZXhlY3V0aW9uX3RpbWVfZXJyb3IiLCJiYWNrdXBUaW1lIiwibGltaXRfZXhlY3V0aW9uX3RpbWUiLCJleGVjU3RhcnQiLCJ1bmxpbWl0X2V4ZWN1dGlvbl90aW1lIiwic3VwcHJlc3Nfc2Nyb2xsaW5nIiwiZ2V0X3Bsb3RzIiwib3V0cHV0cyIsImdyYXBoIiwicGxvdCIsIm5ld1Bsb3QiLCJ5IiwiU3R1ZGVudERhdGEiLCJidWlsZENsYXNzIiwiJGdibCIsIiRsb2MiLCJfX2luaXRfXyIsIm5ld0RpY3QiLCJkaWN0IiwiYWJzdHIiLCJzYXR0ciIsInN0ciIsIm9iamVjdFNldEl0ZW0iLCJ1bmZpeFJlc2VydmVkIiwiY2FsbF9mIiwia3dhIiwicHlDaGVja0FyZ3NMZW4iLCJjYWxsIiwia3dhcmdzIiwiYnVpbHRpbnMiLCJmdW5jdGlvbk5hbWUiLCJpbnB1dHMiLCJtcCRsb29rdXAiLCJ0cCRnZXRhdHRyIiwiZnVuY3Rpb25PYmplY3QiLCJ0cCRjYWxsIiwiY29fa3dhcmdzIiwiY29fbmFtZSIsImdldF9uYW1lc19ieV90eXBlIiwiZXhjbHVkZV9idWlsdGlucyIsImNoZWNrQm9vbCIsInByb3BlcnR5IiwiZ2V0X3ZhbHVlc19ieV90eXBlIiwiY2FsbHNpbU9yU3VzcGVuZCIsImdldF9zdHVkZW50X2RhdGEiLCJzZXRfaW5zdHJ1Y3Rpb25zIiwibmV3SW5zdHJ1Y3Rpb25zIiwiZ2V0X21vZGVsX2luZm8iLCJMT0NBTF9TVE9SQUdFX1JFRiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiX2RhdGEiLCJTdHJpbmciLCJnZXRJdGVtIiwiaXNfbmV3Iiwic2VydmVyX3RpbWUiLCJzdG9yZWRfdGltZSIsIklHTk9SRURfR0xPQkFMUyIsInBhcnNlZCIsInBhcnNlVmFsdWUiLCJfX25hbWVfXyIsImZ1bGxMZW5ndGgiLCJmdW5jX2NvZGUiLCJjb192YXJuYW1lcyIsInNxJGxlbmd0aCIsImJvb2wiLCJubWJlciIsInNrVHlwZSIsImludF8iLCJmbG9hdF8iLCJOdW1iZXIiLCJhcnJheUNvbnRhaW5zIiwibmVlZGxlIiwiaGF5c3RhY2siLCJhcnJheVVuaXF1ZSIsImEiLCJjb25jYXQiLCJqIiwiZXhwYW5kQXJyYXkiLCJhZGRBcnJheSIsInJlbW92ZUFycmF5IiwiY29weUFycmF5IiwiY2xvbmVOb2RlIiwiY2xvbmUiLCJub2RlVHlwZSIsImNyZWF0ZVRleHROb2RlIiwibm9kZVZhbHVlIiwiY2hpbGQiLCJmaXJzdENoaWxkIiwibmV4dFNpYmxpbmciLCJyYW5kb21JbnRlZ2VyIiwiZmxvb3IiLCJyYW5kb20iLCJCbG9ja2x5IiwiV29ya3NwYWNlU3ZnIiwic2h1ZmZsZSIsIm1ldHJpY3MiLCJnZXRNZXRyaWNzIiwidmlld1dpZHRoIiwidmlld0hlaWdodCIsImJsb2NrcyIsImdldFRvcEJsb2NrcyIsIm1heGltYWxfaW5jcmVhc2UiLCJnZXRSZWxhdGl2ZVRvU3VyZmFjZVhZIiwibW92ZUJ5IiwibW92ZUVsZW1lbnRzIiwibW92ZUNoZWNrIiwiaXNTa0J1aWx0aW4iLCJvYmoiLCJsbmciLCJpc0FzdE5vZGUiLCJtaXhlZFJlbWFwVG9QeSIsImsiLCJrdnMiLCJhcnIiLCJzdWJ2YWwiLCJhc3NrJCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxn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Q2pDLFdBQU8sSUFBSXp5QixFQUFFLENBQUM0WSxPQUFILENBQVdxVSxHQUFmLENBQW1Cd0YsR0FBRyxDQUFDL2xDLElBQXZCLENBQVA7QUFDSDtBQUNKLEM7Ozs7Ozs7Ozs7O0FDdlBELG9EOzs7Ozs7Ozs7OztBQ0FBLHNEIiwiZmlsZSI6ImJsb2NrcHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJqUXVlcnlcIiksIHJlcXVpcmUoXCJrb1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImJsb2NrcHlcIiwgW1wialF1ZXJ5XCIsIFwia29cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYmxvY2tweVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImpRdWVyeVwiKSwgcmVxdWlyZShcImtvXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJibG9ja3B5XCJdID0gZmFjdG9yeShyb290W1wialF1ZXJ5XCJdLCByb290W1wia29cIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfa25vY2tvdXRfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2Jsb2NrcHkuanNcIik7XG4iLCJpbXBvcnQgXCIuL2Nzcy9ibG9ja3B5LmNzc1wiO1xyXG5pbXBvcnQgXCIuL2Nzcy9ib290c3RyYXBfcmV0aGVtZS5jc3NcIjtcclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQge0xvY2FsU3RvcmFnZVdyYXBwZXJ9IGZyb20gXCJzdG9yYWdlLmpzXCI7XHJcbmltcG9ydCB7RWRpdG9yc0VudW19IGZyb20gXCJlZGl0b3JzLmpzXCI7XHJcbmltcG9ydCB7RGlzcGxheU1vZGVzfSBmcm9tIFwiZWRpdG9yL3B5dGhvbi5qc1wiO1xyXG5pbXBvcnQge1N0YXR1c1N0YXRlfSBmcm9tIFwic2VydmVyLmpzXCI7XHJcbmltcG9ydCB7bWFrZUludGVyZmFjZSwgbWFrZUV4dHJhSW50ZXJmYWNlU3Vic2NyaXB0aW9ucywgU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zfSBmcm9tIFwiaW50ZXJmYWNlLmpzXCI7XHJcbmltcG9ydCB7RWRpdG9yc30gZnJvbSBcImVkaXRvcnMuanNcIjtcclxuaW1wb3J0IHtcclxuICAgIEJsb2NrUHlGaWxlU3lzdGVtLFxyXG4gICAgbG9hZENvbmNhdGVuYXRlZEZpbGUsXHJcbiAgICBtYWtlTW9kZWxGaWxlLFxyXG4gICAgb2JzZXJ2ZUNvbmNhdGVuYXRlZEZpbGUsXHJcbiAgICBVTkRFTEVUQUJMRV9GSUxFUyxcclxuICAgIFVOUkVOQU1BQkxFX0ZJTEVTXHJcbn0gZnJvbSBcIi4vZmlsZXNcIjtcclxuaW1wb3J0IHt1cGxvYWRGaWxlLCBkb3dubG9hZEZpbGV9IGZyb20gXCIuL2VkaXRvci9hYnN0cmFjdF9lZGl0b3JcIjtcclxuaW1wb3J0IHtCbG9ja1B5RW5naW5lfSBmcm9tIFwiZW5naW5lLmpzXCI7XHJcbmltcG9ydCB7QmxvY2tQeVRyYWNlfSBmcm9tIFwiLi90cmFjZVwiO1xyXG5pbXBvcnQge0Jsb2NrUHlDb25zb2xlfSBmcm9tIFwiLi9jb25zb2xlXCI7XHJcbmltcG9ydCB7QmxvY2tQeUZlZWRiYWNrfSBmcm9tIFwiZmVlZGJhY2suanNcIjtcclxuaW1wb3J0IHtCbG9ja1B5U2VydmVyfSBmcm9tIFwiLi9zZXJ2ZXJcIjtcclxuaW1wb3J0IHtCbG9ja1B5RGlhbG9nfSBmcm9tIFwiLi9kaWFsb2dcIjtcclxuaW1wb3J0IHtsb2FkQXNzaWdubWVudFNldHRpbmdzLCBtYWtlQXNzaWdubWVudFNldHRpbmdzTW9kZWx9IGZyb20gXCIuL2VkaXRvci9hc3NpZ25tZW50X3NldHRpbmdzXCI7XHJcbmltcG9ydCB7QmxvY2tQeUNvcmdpcywgX0lNUE9SVEVEX0NPTVBMRVRFX0RBVEFTRVRTLCBfSU1QT1JURURfREFUQVNFVFN9IGZyb20gXCIuL2Nvcmdpc1wiO1xyXG5pbXBvcnQge0Jsb2NrUHlIaXN0b3J5fSBmcm9tIFwiLi9oaXN0b3J5XCI7XHJcblxyXG5leHBvcnQge19JTVBPUlRFRF9DT01QTEVURV9EQVRBU0VUUywgX0lNUE9SVEVEX0RBVEFTRVRTfTtcclxuXHJcbi8qKlxyXG4gKiBNYWpvciBlbnRyeSBwb2ludCBmb3IgY3JlYXRpbmcgYSBCbG9ja1B5IGluc3RhbmNlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmxvY2tQeSB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWd1cmF0aW9uIC0gVXNlciBsZXZlbCBzZXR0aW5ncyAoZS5nLiwgd2hhdCBlZGl0b3IgbW9kZSwgd2hldGhlciB0byBtdXRlIHNlbWFudGljIGVycm9ycywgZXRjLilcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBhc3NpZ25tZW50IC0gQXNzaWdubWVudCBsZXZlbCBzZXR0aW5ncyAoZGF0YSBhYm91dCB0aGUgbG9hZGVkIGFzc2lnbm1lbnQsIHVzZXIsIHN1Ym1pc3Npb24sIGV0Yy4pXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc3VibWlzc2lvbiAtIEluY2x1ZGVzIHRoZSBzb3VyY2UgY29kZSBvZiBhbnkgcHJvZ3JhbXMgdG8gYmUgbG9hZGVkXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb24sIGFzc2lnbm1lbnQsIHN1Ym1pc3Npb24pIHtcclxuICAgICAgICB0aGlzLmluaXRNb2RlbChjb25maWd1cmF0aW9uKTtcclxuICAgICAgICBpZiAoYXNzaWdubWVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXNzaWdubWVudChjb25maWd1cmF0aW9uLCBhc3NpZ25tZW50LCBzdWJtaXNzaW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbml0TWFpbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIEJsb2NrUHkgb2JqZWN0IGJ5IGluaXRpYWxpemluZyBpdHMgaW50ZXJmYWNlLFxyXG4gICAgICogbW9kZWwsIGFuZCBjb21wb25lbnRzLlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgaW5pdE1haW4oKSB7XHJcbiAgICAgICAgdGhpcy5pbml0VXRpbGl0aWVzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0TW9kZWxNZXRob2RzKCk7XHJcbiAgICAgICAgdGhpcy50dXJuT25IYWNrcygpO1xyXG4gICAgICAgIHRoaXMuaW5pdEludGVyZmFjZSgpO1xyXG4gICAgICAgIHRoaXMuYXBwbHlNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMuaW5pdENvbXBvbmVudHMoKTtcclxuICAgICAgICB0aGlzLm1ha2VFeHRyYVN1YnNjcmlwdGlvbnMoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0cmlldmVzIGEgZGVmYXVsdCB2YWx1ZSBvclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIHRoZSBrZXkgdG8gbG9vayB1cCBhIHZhbHVlIGZvclxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRWYWx1ZSAtIGlmIHRoZSBrZXkgaXMgbm90IGZvdW5kIGFueXdoZXJlLCB1c2UgdGhpcyB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBnZXRTZXR0aW5nKGtleSwgZGVmYXVsdFZhbHVlKSB7XHJcbiAgICAgICAgaWYgKGtleSBpbiB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uXykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9ba2V5XTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubG9jYWxTZXR0aW5nc18uaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxTZXR0aW5nc18uZ2V0KGtleSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgbW9kZWwgdG8gaXRzIGRlZmF1bHRzLlxyXG4gICAgICpcclxuICAgICAqIENhdGVnb3JpZXM6XHJcbiAgICAgKiAgICogdXNlcjogdmFsdWVzIGZvciB0aGUgY3VycmVudCB1c2VyIChzdG9yZWQgdG8gc2VydmVyKVxyXG4gICAgICogICAqIGFzc2lnbm1lbnQ6IHZhbHVlcyBmb3IgdGhlIGN1cnJlbnQgYXNzaWdubWVudCAoc3RvcmVkIHRvIHNlcnZlcilcclxuICAgICAqICAgKiBzdWJtaXNzaW9uOiB2YWx1ZXMgZm9yIHRoZSBjdXJyZW50IHN1Ym1pc3Npb24gKHN0b3JlZCB0byBzZXJ2ZXIpXHJcbiAgICAgKiAgICogZGlzcGxheTogZmxhZ3MgcmVsYXRlZCB0byBjdXJyZW50IHZpc2liaWxpdHkgKHN0b3JlZCB0byBsb2NhbFNldHRpbmdzKVxyXG4gICAgICogICAqIHN0YXR1czogbWVzc2FnZXMgcmVsYXRlZCB0byBjdXJyZW50IHN0YXR1cyAobm90IHN0b3JlZClcclxuICAgICAqICAgKiBleGVjdXRpb246IHZhbHVlcyByZWxhdGVkIHRvIGxhc3QgcnVuIChub3Qgc3RvcmVkKVxyXG4gICAgICogICAqIGNvbmZpZ3VyYXRpb246IGNvbnN0YW50IHZhbHVlcyByZWxhdGVkIHRvIHNldHVwIChub3Qgc3RvcmVkKVxyXG4gICAgICovXHJcbiAgICBpbml0TW9kZWwoY29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIC8vIENvbm5lY3QgdG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgIHRoaXMubG9jYWxTZXR0aW5nc18gPSBuZXcgTG9jYWxTdG9yYWdlV3JhcHBlcihcImxvY2FsU2V0dGluZ3NcIik7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl8gPSBjb25maWd1cmF0aW9uO1xyXG5cclxuICAgICAgICB0aGlzLm1vZGVsID0ge1xyXG4gICAgICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICAgICAgICBpZDoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1widXNlci5pZFwiXSksXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJ1c2VyLm5hbWVcIl0pLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIHlvdSBhcmUgYW4gT3duZXIgKGNhbiBtb2RpZnkgdGhlIGFzc2lnbm1lbnQpLCBHcmFkZXIgKGNhbiB2aWV3XHJcbiAgICAgICAgICAgICAgICAgKiB0aGUgYXNzaWdubWVudHMnIGluZm9ybWF0aW9uKSBvciBTdHVkZW50IChjYW4gbm90IHNlZSBhbnkgaW5zdHJ1Y3RvciBzdHVmZikuXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbH1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgcm9sZToga28ub2JzZXJ2YWJsZSh0aGlzLmdldFNldHRpbmcoXCJ1c2VyLnJvbGVcIiwgXCJvd25lclwiKSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEN1cnJlbnQgY291cnNlIGZvciB0aGlzIHVzZXJcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgY291cnNlSWQ6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcInVzZXIuY291cnNlX2lkXCJdKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogQ3VycmVudCBhc3NpZ25tZW50IGdyb3VwIHRoYXQgdGhpcyB1c2VyIGlzIGluc2lkZVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBncm91cElkOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJ1c2VyLmdyb3VwX2lkXCJdKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3NpZ25tZW50OiB7XHJcbiAgICAgICAgICAgICAgICBpZDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGtvLm9ic2VydmFibGUoXCJTY3JhdGNoIENhbnZhc1wiKSxcclxuICAgICAgICAgICAgICAgIGluc3RydWN0aW9uczoga28ub2JzZXJ2YWJsZShcIldlbGNvbWUgdG8gQmxvY2tQeS4gVHJ5IGVkaXRpbmcgYW5kIHJ1bm5pbmcgdGhlIGNvZGUgYmVsb3cuXCIpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBUaGUgaHVtYW4tZnJpZW5kbHkgVVJMIHRvIHVzZSBhcyBhIHNob3J0Y3V0IGZvciB0aGlzIGFzc2lnbm1lbnRcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdXJsOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogd2FybmluZyBtZXNzYWdlIGlmIG1hemVcclxuICAgICAgICAgICAgICAgIHR5cGU6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICBzdGFydGluZ0NvZGU6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQuc3RhcnRpbmdfY29kZVwiXSB8fCBcIlwiKSxcclxuICAgICAgICAgICAgICAgIG9uUnVuOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50Lm9uX3J1blwiXSB8fCBcIlwiKSxcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50Lm9uX2NoYW5nZVwiXSB8fCBudWxsKSxcclxuICAgICAgICAgICAgICAgIG9uRXZhbDoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5vbl9ldmFsXCJdIHx8IG51bGwpLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFJbnN0cnVjdG9yRmlsZXM6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICBleHRyYVN0YXJ0aW5nRmlsZXM6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICBmb3JrZWRJZDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIGZvcmtlZFZlcnNpb246IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBvd25lcklkOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgY291cnNlSWQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgdGFnczoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIHNhbXBsZVN1Ym1pc3Npb25zOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgcmV2aWV3ZWQ6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQucmV2aWV3ZWRcIl0pLFxyXG4gICAgICAgICAgICAgICAgcHVibGljOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LnB1YmxpY1wiXSksXHJcbiAgICAgICAgICAgICAgICBoaWRkZW46IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQuaGlkZGVuXCJdKSxcclxuICAgICAgICAgICAgICAgIGlwUmFuZ2VzOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LmlwX3Jhbmdlc1wiXSksXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczogbWFrZUFzc2lnbm1lbnRTZXR0aW5nc01vZGVsKGNvbmZpZ3VyYXRpb24pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Ym1pc3Npb246IHtcclxuICAgICAgICAgICAgICAgIGlkOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgY29kZToga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wic3VibWlzc2lvbi5jb2RlXCJdIHx8IFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFGaWxlczoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIHVybDoga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIGVuZHBvaW50OiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgc2NvcmU6IGtvLm9ic2VydmFibGUoMCksXHJcbiAgICAgICAgICAgICAgICBjb3JyZWN0OiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIC8vIGFzc2lnbm1lbnRJZCBpbmZlcnJlZCBmcm9tIGFzc2lnbm1lbnQuaWRcclxuICAgICAgICAgICAgICAgIC8vIGNvdXJzZUlkIGluZmVycmVkIGZyb20gdXNlci5jb3Vyc2VJZFxyXG4gICAgICAgICAgICAgICAgLy8gdXNlcklkIGluZmVycmVkIGZyb20gdXNlci5pZFxyXG4gICAgICAgICAgICAgICAgLy8gYXNzaWdubWVudFZlcnNpb24gaW5mZXJyZWQgZnJvbSBhc3NpZ25tZW50LnZlcnNpb25cclxuICAgICAgICAgICAgICAgIHZlcnNpb246IGtvLm9ic2VydmFibGUoMCksXHJcbiAgICAgICAgICAgICAgICBzdWJtaXNzaW9uU3RhdHVzOiBrby5vYnNlcnZhYmxlKFwiU3RhcnRlZFwiKSxcclxuICAgICAgICAgICAgICAgIGdyYWRpbmdTdGF0dXM6IGtvLm9ic2VydmFibGUoXCJOb3RSZWFkeVwiKSxcclxuICAgICAgICAgICAgICAgIG93bmVySWQ6IGtvLm9ic2VydmFibGUobnVsbClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGlzcGxheToge1xyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBDdXJyZW50bHkgdmlzaWJsZSBGaWxlLCBpZiBhcHBsaWNhYmxlXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBmaWxlbmFtZToga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdG8gYmUgcHJlc2VudGVkIHdpdGggdGhlIGluc3RydWN0b3Igc2V0dGluZ3MgYW5kIGZpbGVzXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbH1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rvcjoga28ub2JzZXJ2YWJsZSh0aGlzLmdldFNldHRpbmcoXCJkaXNwbGF5Lmluc3RydWN0b3JcIiwgXCJmYWxzZVwiKS50b1N0cmluZygpPT09XCJ0cnVlXCIpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBwcmV2ZW50IHRoZSBwcmludGVyIGZyb20gc2hvd2luZyB0aGluZ3NcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgbXV0ZVByaW50ZXI6IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiAoUHl0aG9uIFZpZXdzKSBUaGUgY3VycmVudCBlZGl0b3IgbW9kZS5cclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtEaXNwbGF5TW9kZXN9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHB5dGhvbk1vZGU6IGtvLm9ic2VydmFibGUodGhpcy5nZXRTZXR0aW5nKFwiZGlzcGxheS5weXRob24ubW9kZVwiLCBEaXNwbGF5TW9kZXMuU1BMSVQpKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgSGlzdG9yeSBtb2RlIGlzIGVuZ2FnZWQuXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbH1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgaGlzdG9yeU1vZGU6IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBiZSBhdXRvLXNhdmluZyBjaGFuZ2VzIGluIFB5dGhvbiBlZGl0b3JcclxuICAgICAgICAgICAgICAgICAqIElmIGFuIGludGVnZXIsIHNwZWNpZmllcyB0aGUgZGVsYXkgdGhhdCBzaG91bGQgYmUgdXNlZCAobWljcm9zZWNvbmRzKS5cclxuICAgICAgICAgICAgICAgICAqIFRoaXMgaXMgbmV2ZXIgb24gaW4gbm9uLVB5dGhvbiBlZGl0b3JzLlxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge2Jvb2x8aW50fVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBhdXRvU2F2ZToga28ub2JzZXJ2YWJsZSh0cnVlKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdGhlIGNvbnNvbGUgaXMgZnVsbCB3aWR0aCBhbmQgZmVlZGJhY2sgaXMgaGlkZGVuXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGJpZ0NvbnNvbGU6IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBUaGUgaGVpZ2h0IHRvIHVzZSBmb3IgdGhlIGNvbnNvbGUuXHJcbiAgICAgICAgICAgICAgICAgKiAgICBJZiBudWxsLCB0aGVuIGxldCB0aGUgaGVpZ2h0IHJlbWFpbiB1bmNoYW5nZWRcclxuICAgICAgICAgICAgICAgICAqICAgIElmIGEgbnVtYmVyLCB0aGVuIHRoZVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c0NvbnNvbGVIZWlnaHQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29uc29sZUhlaWdodDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hpY2ggcGFuZWwgdG8gc2hvdyBpbiB0aGUgc2Vjb25kIHJvdydzIHNlY29uZCBjb2x1bW5cclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHNlY29uZFJvd1NlY29uZFBhbmVsOiBrby5vYnNlcnZhYmxlKFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5GRUVEQkFDSyksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIGJlIHRyYWNpbmcgdGhlIGNvZGUgcmlnaHQgbm93XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHRyYWNlRXhlY3V0aW9uOiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogVGhlIGxpc3Qgb2YgcHJvbWlzZXMgdG8gc3RpbGwgcmVzb2x2ZSB3aGlsZSBsb2FkaW5nIGRhdGFzZXRzXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7QXJyYXk8UHJvbWlzZT59XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGxvYWRpbmdEYXRhc2V0czoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogVGhlIHRlbXBvcmFyeSBjaGFuZ2VkIHZhbHVlIG9mIHRoZSBpbnN0cnVjdGlvbnMgaGF2ZSBiZWVuIGNoYW5nZWQgZnJvbSB3aGF0IGlzIGluIHRoZSBhc3NpZ25tZW50XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGNoYW5nZWRJbnN0cnVjdGlvbnM6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEEgaG9sZGVyIGZvciB0aGUgdGltZXIgdG8gdHJpZ2dlciBvbi1jaGFuZ2VzXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHRyaWdnZXJPbkNoYW5nZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciB0aGUgY3VycmVudCBmZWVkYmFjayBhbmQgb3V0cHV0IGNvcnJlc3BvbmRzIHRvIHRoZSBjdXJyZW50IHN1Ym1pc3Npb24uXHJcbiAgICAgICAgICAgICAgICAgKiBUaGlzIHdvdWxkIGJlIGZhbHNlIGlmIHRoZXJlIGlzIG5vIGZlZWRiYWNrL291dHB1dCAoaS5lLiwgY29kZSBoYXMgbm90IGJlZW4gcnVuKSxcclxuICAgICAgICAgICAgICAgICAqIG9yIGlmIHRoZSB1c2VyIGhhcyBtb2RpZmllZCB0aGUgc3VibWlzc2lvbiBhZnRlciB0aGUgbGFzdCBydW4gKGUuZy4sIGJ5IGVkaXRpbmdcclxuICAgICAgICAgICAgICAgICAqIHRoZSB0ZXh0KS5cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgZGlydHlTdWJtaXNzaW9uOiBrby5vYnNlcnZhYmxlKHRydWUpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiAgV2hldGhlciBvciBub3QgdG8gbWFrZSB0aGUgQmxvY2tQeSBlbGVtZW50IGluIEZVTEwgU0NSRUVOIG1vZGUuIFNhZGx5LCBub3QgZnVsbHNjcmVlblxyXG4gICAgICAgICAgICAgICAgICogIHdpdGhpbiB0aGUgd2luZG93LCBidXQgRlVMTCBTQ1JFRU4uIFZlcnkgYWdncmVzc2l2ZS5cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgZnVsbHNjcmVlbjoga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFVzZXItc3VwcGxpZWQgcGFzc2NvZGUgdG8gY29tcGFyZSBvbiB0aGUgc2VydmVyIGFnYWluc3QgdGhlIGN1cnJlbnQgcGFzc2NvZGUuXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHBhc3Njb2RlOiBrby5vYnNlcnZhYmxlKFwiXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0YXR1czoge1xyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIGxvYWRBc3NpZ25tZW50OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIGxvYWRBc3NpZ25tZW50TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBsb2FkSGlzdG9yeToga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBsb2FkSGlzdG9yeU1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgbG9hZEZpbGU6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgbG9hZEZpbGVNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIGxvYWREYXRhc2V0OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIGxvYWREYXRhc2V0TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBsb2dFdmVudDoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBsb2dFdmVudE1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgc2F2ZUltYWdlOiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIHNhdmVJbWFnZU1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgc2F2ZUZpbGU6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgc2F2ZUZpbGVNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIHNhdmVBc3NpZ25tZW50OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIHNhdmVBc3NpZ25tZW50TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTdWJtaXNzaW9uOiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVN1Ym1pc3Npb25NZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIHVwZGF0ZVN1Ym1pc3Npb25TdGF0dXM6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlU3VibWlzc2lvblN0YXR1c01lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgb25FeGVjdXRpb246IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBleGVjdXRpb246IHtcclxuICAgICAgICAgICAgICAgIC8vIEluZm9ybWF0aW9uIGFib3V0IGluLXByb2dyZXNzIGV4ZWN1dGlvbnNcclxuICAgICAgICAgICAgICAgIHJlcG9ydHM6IHt9LFxyXG4gICAgICAgICAgICAgICAgLy8gbGlzdCBvZiBPdXRwdXQgb2JqZWN0c1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0OiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgLy8gSW5mb3JtYXRpb24gcmVsYXRlZCB0byBhIHN0dWRlbnQgcnVuXHJcbiAgICAgICAgICAgICAgICBzdHVkZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RyOiB0aGUgZmlsZW5hbWUgdGhhdCB3YXMgbGFzdCBleGVjdXRlZCBhbmQgaXMgYXNzb2NpYXRlZCB3aXRoIHRoZXNlIHJlc3VsdHNcclxuICAgICAgICAgICAgICAgICAgICBmaWxlbmFtZToga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRlZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0ZXA6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50ZWdlclxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RTdGVwOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGludGVnZXJcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TGluZToga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0TGluZToga28ub2JzZXJ2YWJsZSgwKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBhcnJheSBvZiBzaW1wbGUgb2JqZWN0c1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUcmFjZURhdGE6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50ZWdlclxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUcmFjZVN0ZXA6IGtvLm9ic2VydmFibGUoMCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWN0dWFsIGV4ZWN1dGlvbiByZXN1bHRzXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0czogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxzOiBrby5vYnNlcnZhYmxlKG51bGwpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbHM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gSW5mb3JtYXRpb24gcmVsYXRlZCB0byBmZWVkYmFjayBmcm9tIHRoZSBpbnN0cnVjdG9yIHJ1blxyXG4gICAgICAgICAgICAgICAgZmVlZGJhY2s6IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdHIgKG1hcmtkb3duKVxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJSZWFkeVwiKSxcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeToga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBoaWRkZW46IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVzRXJyb3I6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZXNVbmNvdmVyZWQ6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHJlc3VsdHMgb2YgdGhlIGxhc3QgZXhlY3V0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0czogbnVsbCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYXRpb246IHtcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogRnVuY3Rpb25zIHRvIGZpcmUgd2hlbiBjZXJ0YWluIGV2ZW50cyBvY2N1clxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgKiBXaGVuIHRoZSBzdHVkZW50IGdldHMgYSBzdWNjZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fW1wiY2FsbGJhY2suc3VjY2Vzc1wiXSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRoZSBzZXJ2ZXIgaXMgY29ubmVjdGVkLlxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge2Jvb2x9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHNlcnZlckNvbm5lY3RlZDoga28ub2JzZXJ2YWJsZSh0aGlzLmdldFNldHRpbmcoXCJzZXJ2ZXIuY29ubmVjdGVkXCIsIHRydWUpKSxcclxuICAgICAgICAgICAgICAgIC8vIHN0cmluZ1xyXG4gICAgICAgICAgICAgICAgYmxvY2tseVBhdGg6IHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fW1wiYmxvY2tseS5wYXRoXCJdLFxyXG4gICAgICAgICAgICAgICAgLy8gc3RyaW5nXHJcbiAgICAgICAgICAgICAgICBhdHRhY2htZW50UG9pbnQ6IHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fW1wiYXR0YWNobWVudC5wb2ludFwiXSxcclxuICAgICAgICAgICAgICAgIC8vIEpRdWVyeSBvYmplY3RcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIC8vIE1hcHMgY29kZXMgKCdsb2dfZXZlbnQnLCAnc2F2ZV9jb2RlJykgdG8gVVJMc1xyXG4gICAgICAgICAgICAgICAgdXJsczogdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9bXCJ1cmxzXCJdIHx8IHt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIGludGVyZmFjZVxyXG4gICAgICovXHJcbiAgICBpbml0SW50ZXJmYWNlKCkge1xyXG4gICAgICAgIGxldCBjb25zdGFudHMgPSB0aGlzLm1vZGVsLmNvbmZpZ3VyYXRpb247XHJcbiAgICAgICAgbGV0IGd1aSA9IG1ha2VJbnRlcmZhY2UodGhpcyk7XHJcbiAgICAgICAgY29uc3RhbnRzLmNvbnRhaW5lciA9ICQoY29uc3RhbnRzLmF0dGFjaG1lbnRQb2ludCkuaHRtbCgkKGd1aSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBsb2FkQXNzaWdubWVudChhc3NpZ25tZW50X2lkKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnNlcnZlci5sb2FkQXNzaWdubWVudChhc3NpZ25tZW50X2lkKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkVGFncyh0YWdzKSB7XHJcbiAgICAgICAgLy8gQWxyZWFkeSBhIEpTT04gbGlzdCByZXByZXNlbnRpbmcgdGFnc1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRTYW1wbGVTdWJtaXNzaW9ucyhzYW1wbGVzKSB7XHJcbiAgICAgICAgLy8gQWxyZWFkeSBhIEpTT04gbGlzdCByZXByZXNlbnRpbmcgc2FtcGxlc1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWROb1N1Ym1pc3Npb24oYXNzaWdubWVudCkge1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5jb2RlKGFzc2lnbm1lbnQuc3RhcnRpbmdfY29kZSk7XHJcbiAgICAgICAgbG9hZENvbmNhdGVuYXRlZEZpbGUoYXNzaWdubWVudC5leHRyYV9zdGFydGluZ19maWxlcywgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmV4dHJhRmlsZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRTdWJtaXNzaW9uKHN1Ym1pc3Npb24sIGFzc2lnbm1lbnQpIHtcclxuICAgICAgICBpZiAoIXN1Ym1pc3Npb24pIHtcclxuICAgICAgICAgICAgLy8gVE9ETzogU2NhcmllciBcIllvdSBhcmUgbm90IGxvZ2dlZCBpbiBtZXNzYWdlXCJcclxuICAgICAgICAgICAgdGhpcy5sb2FkTm9TdWJtaXNzaW9uKGFzc2lnbm1lbnQpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFRPRE86IFdoYXQgaWYgc3VibWlzc2lvbnMnIGFzc2lnbm1lbnQgdmVyc2lvbiBhbmQgdGhlIGFzc2lnbm1lbnRzJyB2ZXJzaW9uIGNvbmZsaWN0P1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5pZChzdWJtaXNzaW9uLmlkKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uY29kZShzdWJtaXNzaW9uLmNvZGUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5jb3JyZWN0KHN1Ym1pc3Npb24uY29ycmVjdCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLnNjb3JlKHN1Ym1pc3Npb24uc2NvcmUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5lbmRwb2ludChzdWJtaXNzaW9uLmVuZHBvaW50KTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24udXJsKHN1Ym1pc3Npb24udXJsKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24udmVyc2lvbihzdWJtaXNzaW9uLnZlcnNpb24pO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5ncmFkaW5nU3RhdHVzKHN1Ym1pc3Npb24uZ3JhZGluZ19zdGF0dXMpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5zdWJtaXNzaW9uU3RhdHVzKHN1Ym1pc3Npb24uc3VibWlzc2lvbl9zdGF0dXMpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5vd25lcklkKHN1Ym1pc3Npb24udXNlcl9pZCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC51c2VyLmNvdXJzZUlkKHN1Ym1pc3Npb24uY291cnNlX2lkKTtcclxuICAgICAgICBsb2FkQ29uY2F0ZW5hdGVkRmlsZShzdWJtaXNzaW9uLmV4dHJhX2ZpbGVzLCB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEFzc2lnbm1lbnREYXRhXyhkYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgdGhpcy5yZXNldEludGVyZmFjZSgpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5maWxlU3lzdGVtLmRpc21vdW50RXh0cmFGaWxlcygpO1xyXG4gICAgICAgIGxldCB3YXNTZXJ2ZXJDb25uZWN0ZWQgPSB0aGlzLm1vZGVsLmNvbmZpZ3VyYXRpb24uc2VydmVyQ29ubmVjdGVkKCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5jb25maWd1cmF0aW9uLnNlcnZlckNvbm5lY3RlZChmYWxzZSk7XHJcbiAgICAgICAgbGV0IGFzc2lnbm1lbnQgPSBkYXRhLmFzc2lnbm1lbnQ7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmlkKGFzc2lnbm1lbnQuaWQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC52ZXJzaW9uKGFzc2lnbm1lbnQudmVyc2lvbik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmNvdXJzZUlkKGFzc2lnbm1lbnQuY291cnNlX2lkKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuZm9ya2VkSWQoYXNzaWdubWVudC5mb3JrZWRfaWQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5mb3JrZWRWZXJzaW9uKGFzc2lnbm1lbnQuZm9ya2VkX3ZlcnNpb24pO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5oaWRkZW4oYXNzaWdubWVudC5oaWRkZW4pO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5yZXZpZXdlZChhc3NpZ25tZW50LnJldmlld2VkKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQucHVibGljKGFzc2lnbm1lbnQucHVibGljKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQudHlwZShhc3NpZ25tZW50LnR5cGUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC51cmwoYXNzaWdubWVudC51cmwpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5pcFJhbmdlcyhhc3NpZ25tZW50LmlwX3Jhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucyhhc3NpZ25tZW50Lmluc3RydWN0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm5hbWUoYXNzaWdubWVudC5uYW1lKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UoYXNzaWdubWVudC5vbl9jaGFuZ2UgfHwgbnVsbCk7XHJcbiAgICAgICAgaWYgKGFzc2lnbm1lbnQub25fY2hhbmdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cy5maWxlU3lzdGVtLm5ld0ZpbGUoXCIhb25fY2hhbmdlLnB5XCIsIGFzc2lnbm1lbnQub25fY2hhbmdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm9uRXZhbChhc3NpZ25tZW50Lm9uX2V2YWwgfHwgbnVsbCk7XHJcbiAgICAgICAgaWYgKGFzc2lnbm1lbnQub25fZXZhbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlKFwiIW9uX2V2YWwucHlcIiwgYXNzaWdubWVudC5vbl9ldmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm9uUnVuKGFzc2lnbm1lbnQub25fcnVuKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlKGFzc2lnbm1lbnQuc3RhcnRpbmdfY29kZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm93bmVySWQoYXNzaWdubWVudC5vd25lcl9pZCk7XHJcbiAgICAgICAgbG9hZEFzc2lnbm1lbnRTZXR0aW5ncyh0aGlzLm1vZGVsLCBhc3NpZ25tZW50LnNldHRpbmdzKTtcclxuICAgICAgICB0aGlzLmxvYWRUYWdzKGFzc2lnbm1lbnQudGFncyk7XHJcbiAgICAgICAgdGhpcy5sb2FkU2FtcGxlU3VibWlzc2lvbnMoYXNzaWdubWVudC5zYW1wbGVfc3VibWlzc2lvbnMpO1xyXG4gICAgICAgIGxvYWRDb25jYXRlbmF0ZWRGaWxlKGFzc2lnbm1lbnQuZXh0cmFfaW5zdHJ1Y3Rvcl9maWxlcywgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzKTtcclxuICAgICAgICBsb2FkQ29uY2F0ZW5hdGVkRmlsZShhc3NpZ25tZW50LmV4dHJhX3N0YXJ0aW5nX2ZpbGVzLCB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFTdGFydGluZ0ZpbGVzKTtcclxuICAgICAgICB0aGlzLmxvYWRTdWJtaXNzaW9uKGRhdGEuc3VibWlzc2lvbiwgYXNzaWdubWVudCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5kaXNwbGF5LmRpcnR5U3VibWlzc2lvbih0cnVlKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmRpc3BsYXkuY2hhbmdlZEluc3RydWN0aW9ucyhudWxsKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmNvbmZpZ3VyYXRpb24uc2VydmVyQ29ubmVjdGVkKHdhc1NlcnZlckNvbm5lY3RlZCk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmNvcmdpcy5sb2FkRGF0YXNldHModHJ1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5zZXJ2ZXIuc2V0U3RhdHVzKFwic2F2ZUZpbGVcIiwgU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRNb2RlbE1ldGhvZHMoKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBtb2RlbCA9IHRoaXMubW9kZWw7XHJcbiAgICAgICAgbW9kZWwudWkgPSB7XHJcbiAgICAgICAgICAgIHJvbGU6IHtcclxuICAgICAgICAgICAgICAgIGlzR3JhZGVyOiBrby5wdXJlQ29tcHV0ZWQoKCk9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnVzZXIucm9sZSgpID09PSBcIm93bmVyXCIgfHwgbW9kZWwudXNlci5yb2xlKCkgPT09IFwiZ3JhZGVyXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluc3RydWN0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgaXNDaGFuZ2VkOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LmNoYW5nZWRJbnN0cnVjdGlvbnMoKSAhPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnVpLmluc3RydWN0aW9ucy5pc0NoYW5nZWQoKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXRpbGl0aWVzLm1hcmtkb3duKG1vZGVsLmRpc3BsYXkuY2hhbmdlZEluc3RydWN0aW9ucygpKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXRpbGl0aWVzLm1hcmtkb3duKG1vZGVsLmFzc2lnbm1lbnQuaW5zdHJ1Y3Rpb25zKCkpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgcmVzZXQ6ICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5jaGFuZ2VkSW5zdHJ1Y3Rpb25zKG51bGwpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1lbnU6IHtcclxuICAgICAgICAgICAgICAgIHRleHRGdWxsc2NyZWVuOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAobW9kZWwuZGlzcGxheS5mdWxsc2NyZWVuKCkpID8gXCJmYS1jb21wcmVzcy1hcnJvd3MtYWx0XCIgOiBcImZhLWV4cGFuZC1hcnJvd3MtYWx0XCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBjbGlja0Z1bGxzY3JlZW46ICgpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuZnVsbHNjcmVlbighbW9kZWwuZGlzcGxheS5mdWxsc2NyZWVuKCkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNhbk1hcmtTdWJtaXR0ZWQ6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQuaGlkZGVuKCkgfHwgbW9kZWwuYXNzaWdubWVudC5yZXZpZXdlZCgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5jYW5DbG9zZSgpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgdGV4dE1hcmtTdWJtaXR0ZWQ6IGtvLnB1cmVDb21wdXRlZCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsLnVpLm1lbnUuaXNDb21wbGV0ZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9kZWwudXNlci5ncm91cElkKCkgPyBcIlByb2JsZW0gY2xvc2VkXCIgOiBcIkFzc2lnbm1lbnQgY2xvc2VkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlbC51aS5tZW51LmlzU3VibWl0dGVkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVvcGVuIGZvciBlZGl0aW5nXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlbC5kaXNwbGF5LmRpcnR5U3VibWlzc2lvbigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlJ1blwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbW9kZWwuYXNzaWdubWVudC5oaWRkZW4oKSAmJiBtb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3QoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiU3VibWl0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJTdWJtaXQgZWFybHlcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgY2xpY2tNYXJrU3VibWl0dGVkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsLnVpLm1lbnUuaXNDb21wbGV0ZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIllvdSBjYW5ub3QgcmVvcGVuIGNsb3NlZCBhc3NpZ25tZW50cy4gQ29udGFjdCBhIGdyYWRlciFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlbC51aS5tZW51LmlzU3VibWl0dGVkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnNlcnZlci51cGRhdGVTdWJtaXNzaW9uU3RhdHVzKFwiaW5Qcm9ncmVzc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGVsLmRpc3BsYXkuZGlydHlTdWJtaXNzaW9uKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmVuZ2luZS5kZWxheWVkUnVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnNlcnZlci51cGRhdGVTdWJtaXNzaW9uU3RhdHVzKFwiU3VibWl0dGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBpc1N1Ym1pdHRlZDoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgKG1vZGVsLmFzc2lnbm1lbnQucmV2aWV3ZWQoKSB8fCBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmNhbkNsb3NlKCkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3VibWlzc2lvbi5zdWJtaXNzaW9uU3RhdHVzKCkudG9Mb3dlckNhc2UoKSA9PT0gXCJzdWJtaXR0ZWRcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGlzQ29tcGxldGVkOiBrby5wdXJlQ29tcHV0ZWQoKCk9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN1Ym1pc3Npb24uc3VibWlzc2lvblN0YXR1cygpLnRvTG93ZXJDYXNlKCkgPT09IFwiY29tcGxldGVkXCJcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2Vjb25kUm93OiB7XHJcbiAgICAgICAgICAgICAgICBpc0ZlZWRiYWNrVmlzaWJsZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5zZWNvbmRSb3dTZWNvbmRQYW5lbCgpID09PSBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuRkVFREJBQ0tcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBpc1RyYWNlVmlzaWJsZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5zZWNvbmRSb3dTZWNvbmRQYW5lbCgpID09PSBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuVFJBQ0VcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBpc0NvbnNvbGVTaG93VmlzaWJsZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwudWkuc2Vjb25kUm93LmlzRmVlZGJhY2tWaXNpYmxlKCkgfHwgbW9kZWwudWkuc2Vjb25kUm93LmlzVHJhY2VWaXNpYmxlKClcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2hMYWJlbDoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAoKSAhPT0gbnVsbCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiVmlldyBUcmFjZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGFkdmFuY2VTdGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UGFuZWwgPSBtb2RlbC5kaXNwbGF5LnNlY29uZFJvd1NlY29uZFBhbmVsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLk5PTkUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhbmVsKFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5GRUVEQkFDSyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50UGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLlRSQUNFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYW5lbChTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuTk9ORSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYW5lbChTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuVFJBQ0UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYW5lbChTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuTk9ORSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29uc29sZToge1xyXG4gICAgICAgICAgICAgICAgc2l6ZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5zZWNvbmRSb3dTZWNvbmRQYW5lbCgpID09PSBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuTk9ORSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sLW1kLTEyXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbC1tZC02XCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBoaWRlRXZhbHVhdGU6IGtvLnB1cmVDb21wdXRlZCggKCk9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaGlkZUV2YWx1YXRlKCkgfHwgIW1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmdsb2JhbHMoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbigpID09PSBTdGF0dXNTdGF0ZS5BQ1RJVkVcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmVlZGJhY2s6IHtcclxuICAgICAgICAgICAgICAgIGJhZGdlOiBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC5leGVjdXRpb24uZmVlZGJhY2suY2F0ZWdvcnkoKSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1ub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmNhdGVnb3J5KCkudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm9uZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtbm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicnVudGltZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtcnVudGltZS1lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3ludGF4XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1zeW50YXgtZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVkaXRvclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtc3ludGF4LWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnRlcm5hbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtaW50ZXJuYWwtZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNlbWFudGljXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhbmFseXplclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtc2VtYW50aWMtZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZlZWRiYWNrXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnN0cnVjdG9yXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1mZWVkYmFjay1lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY29tcGxldGVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLXByb2JsZW0tY29tcGxldGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImluc3RydWN0aW9uc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtaW5zdHJ1Y3Rpb25zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJubyBlcnJvcnNcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLW5vLWVycm9yc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGtvLnB1cmVDb21wdXRlZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5jYXRlZ29yeSgpID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5jYXRlZ29yeSgpLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5vbmVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicnVudGltZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiUnVudGltZSBFcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3ludGF4XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJTeW50YXggRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVkaXRvclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiRWRpdG9yIEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnRlcm5hbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiSW50ZXJuYWwgRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNlbWFudGljXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhbmFseXplclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiQWxnb3JpdGhtIEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmZWVkYmFja1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW5zdHJ1Y3Rpb25zXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnN0cnVjdGlvbnNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImluc3RydWN0b3JcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkluY29ycmVjdCBBbnN3ZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNvbXBsZXRlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJDb21wbGV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm8gZXJyb3JzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJObyBlcnJvcnNcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0cmFjZToge1xyXG4gICAgICAgICAgICAgICAgaGFzOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhKCkgIT09IG51bGxcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBsaW5lOiBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGVwID0gbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0U3RlcCA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYWNlRGF0YSA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRyYWNlRGF0YSB8fCBzdGVwID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIk5vIHRyYWNlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGVwID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkJlZm9yZSBydW5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0ZXAgPT09IGxhc3RTdGVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkZpbmlzaGVkIHJ1blwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHdoeSBhcmUgdGhlc2UgbnVtYmVycyB3b25reT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiTGluZSBcIisodHJhY2VEYXRhW3N0ZXBdLmxpbmUtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBmaXJzdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAoMCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYmFja3dhcmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJldmlvdXMgPSBNYXRoLm1heCgwLCBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKCkgLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKHByZXZpb3VzKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmb3J3YXJkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHQgPSBNYXRoLm1pbihtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpLCBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKCkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKG5leHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxhc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGtvLnB1cmVDb21wdXRlZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0ZXAgPSBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhc3RTdGVwID0gbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHJhY2VEYXRhID0gbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdHJhY2VEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzdGVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBsYXN0U3RlcDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cmFjZURhdGFbc3RlcCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRyYWNlRGF0YVtzdGVwXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmlsZXM6IHtcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuaW5zdHJ1Y3RvcigpIHx8ICFtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVGaWxlcygpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaGFzQ29udGVudHM6IGZ1bmN0aW9uKHBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFuc3dlci5weVwiOiByZXR1cm4gbW9kZWwuc3VibWlzc2lvbi5jb2RlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhaW5zdHJ1Y3Rpb25zLm1kXCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIW9uX2NoYW5nZS5weVwiOiByZXR1cm4gbW9kZWwuYXNzaWdubWVudC5vbkNoYW5nZSgpICE9PSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIW9uX2V2YWwucHlcIjogcmV0dXJuIG1vZGVsLmFzc2lnbm1lbnQub25FdmFsKCkgIT09IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI/bW9ja191cmxzLmJsb2NrcHlcIjogcmV0dXJuIG1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMoKS5zb21lKGZpbGUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUuZmlsZW5hbWUoKSA9PT0gXCI/bW9ja191cmxzLmJsb2NrcHlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhdGFncy5ibG9ja3B5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50LnRhZ3MoKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhc2FtcGxlX3N1Ym1pc3Npb25zLmJsb2NrcHlcIjogcmV0dXJuIG1vZGVsLmFzc2lnbm1lbnQuc2FtcGxlU3VibWlzc2lvbnMoKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYWRkOiBmdW5jdGlvbihwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI/bW9ja191cmxzLmJsb2NrcHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIj90YWdzLmJsb2NrcHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIj9zZXR0aW5ncy5ibG9ja3B5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlKHBhdGgpOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiFvbl9jaGFuZ2UucHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlKHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIGZpeCBleHRyYWZpbGVzIGZvciBpbnN0cnVjdG9yIGFuZCBzdHVkZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhb25fZXZhbC5weVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuYXNzaWdubWVudC5vbkV2YWwoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlKHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnN0cnVjdG9yXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlRGlhbG9nKFwiaW5zdHJ1Y3RvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN0dWRlbnRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5maWxlU3lzdGVtLm5ld0ZpbGVEaWFsb2coXCJzdHVkZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3RhcnRpbmdcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5maWxlU3lzdGVtLm5ld0ZpbGVEaWFsb2coXCJzdGFydGluZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUocGF0aCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0uZGVsZXRlRmlsZShtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGV4dHJhU3R1ZGVudEZpbGVzOiBvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZShtb2RlbC5zdWJtaXNzaW9uLmV4dHJhRmlsZXMpLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFJbnN0cnVjdG9yRmlsZXM6IG9ic2VydmVDb25jYXRlbmF0ZWRGaWxlKG1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMpLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFTdGFydGluZ0ZpbGVzOiBvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZShtb2RlbC5hc3NpZ25tZW50LmV4dHJhU3RhcnRpbmdGaWxlcyksXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5RmlsZW5hbWU6IGZ1bmN0aW9uKHBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGF0aCA9PT0gXCI/bW9ja191cmxzLmJsb2NrcHlcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJVUkwgRGF0YVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGF0aC5zdGFydHNXaXRoKFwiJlwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGF0aC5zbGljZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlZGl0b3JzOiB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50OiBrby5wdXJlQ29tcHV0ZWQoICgpPT5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZWRpdG9ycy5nZXRFZGl0b3IobW9kZWwuZGlzcGxheS5maWxlbmFtZSgpKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHZpZXc6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaGlkZUVkaXRvcnMoKSA/IFwiTm9uZVwiIDpcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkgPyBtb2RlbC51aS5lZGl0b3JzLmN1cnJlbnQoKSA6IFwiTm9uZVwiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJYLUZpbGUuUmVzZXRcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJhbnN3ZXIucHlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3VibWlzc2lvbi5jb2RlKG1vZGVsLmFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyhtb2RlbC5hc3NpZ25tZW50LmV4dHJhU3RhcnRpbmdGaWxlcygpLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZW5hbWUgPSBmaWxlLmZpbGVuYW1lKCkuc3Vic3RyKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1ha2VNb2RlbEZpbGUoZmlsZW5hbWUsIGZpbGUuY29udGVudHMoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjYW5TYXZlOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAhbW9kZWwuZGlzcGxheS5hdXRvU2F2ZSgpKSxcclxuICAgICAgICAgICAgICAgIGNhbkRlbGV0ZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgKCFtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVGaWxlcygpIHx8IG1vZGVsLmRpc3BsYXkuaW5zdHJ1Y3RvcigpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIFVOREVMRVRBQkxFX0ZJTEVTLmluZGV4T2YobW9kZWwuZGlzcGxheS5maWxlbmFtZSgpKSA9PT0gLTEpLFxyXG4gICAgICAgICAgICAgICAgY2FuUmVuYW1lOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAoIW1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaGlkZUZpbGVzKCkgfHwgbW9kZWwuZGlzcGxheS5pbnN0cnVjdG9yKCkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgVU5SRU5BTUFCTEVfRklMRVMuaW5kZXhPZihtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkpID09PSAtMSksXHJcbiAgICAgICAgICAgICAgICB1cGxvYWQ6IHVwbG9hZEZpbGUuYmluZChzZWxmKSxcclxuICAgICAgICAgICAgICAgIGRvd25sb2FkOiBkb3dubG9hZEZpbGUuYmluZChzZWxmKSxcclxuICAgICAgICAgICAgICAgIGltcG9ydERhdGFzZXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuY29yZ2lzLm9wZW5EaWFsb2coKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBweXRob246IHtcclxuICAgICAgICAgICAgICAgICAgICBmdWxsc2NyZWVuOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2RlTWlycm9yID0gc2VsZi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS50ZXh0RWRpdG9yLmNvZGVNaXJyb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb2RlTWlycm9yLnNldE9wdGlvbihcImZ1bGxTY3JlZW5cIiwgIWNvZGVNaXJyb3IuZ2V0T3B0aW9uKFwiZnVsbFNjcmVlblwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVNb2RlOiAobmV3TW9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1WaWV3LkNoYW5nZVwiLCBcIlwiLCBcIlwiLCBuZXdNb2RlLCBtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUobmV3TW9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkgPT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5weXRob25FZGl0b3Iub2xkUHl0aG9uTW9kZSA9IG5ld01vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGlzSGlzdG9yeUF2YWlsYWJsZToga28ucHVyZUNvbXB1dGVkKCgpPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJsb2FkSGlzdG9yeVwiKSksXHJcbiAgICAgICAgICAgICAgICAgICAgdHVybk9mZkhpc3RvcnlNb2RlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5weXRob25FZGl0b3IudXBkYXRlRWRpdG9yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5weXRob25FZGl0b3Iuc2V0UmVhZE9ubHkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5Lmhpc3RvcnlNb2RlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHR1cm5Pbkhpc3RvcnlNb2RlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5zZXJ2ZXIubG9hZEhpc3RvcnkoKHJlc3BvbnNlKSA9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmhpc3RvcnkubG9hZChyZXNwb25zZS5oaXN0b3J5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5Lmhpc3RvcnlNb2RlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5weXRob25FZGl0b3Iuc2V0UmVhZE9ubHkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5kaWFsb2cuRVJST1JfTE9BRElOR19ISVNUT1JZKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlSGlzdG9yeU1vZGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsLmRpc3BsYXkuaGlzdG9yeU1vZGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwudWkuZWRpdG9ycy5weXRob24udHVybk9mZkhpc3RvcnlNb2RlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC51aS5lZGl0b3JzLnB5dGhvbi50dXJuT25IaXN0b3J5TW9kZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAoKT0+eyBzZWxmLmNvbXBvbmVudHMuaGlzdG9yeS5tb3ZlVG9TdGFydCgpOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91czogKCk9Pnsgc2VsZi5jb21wb25lbnRzLmhpc3RvcnkubW92ZVByZXZpb3VzKCk7IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6ICgpPT57IHNlbGYuY29tcG9uZW50cy5oaXN0b3J5Lm1vdmVOZXh0KCk7IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vc3RSZWNlbnQ6ICgpPT57IHNlbGYuY29tcG9uZW50cy5oaXN0b3J5Lm1vdmVUb01vc3RSZWNlbnQoKTsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlOiAoKT0+eyBzZWxmLmNvbXBvbmVudHMuaGlzdG9yeS51c2UoKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNhdmU6ICgpID0+IHNlbGYuY29tcG9uZW50cy5zZXJ2ZXIuc2F2ZUFzc2lnbm1lbnQoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBleGVjdXRlOiB7XHJcbiAgICAgICAgICAgICAgICBpc1J1bm5pbmc6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbigpID09PSBTdGF0dXNTdGF0ZS5BQ1RJVkVcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBydW46ICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmVuZ2luZS5kZWxheWVkUnVuKCksXHJcbiAgICAgICAgICAgICAgICBldmFsdWF0ZTogKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZW5naW5lLmV2YWx1YXRlKClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2VydmVyOiB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IChlbmRwb2ludCA9PlxyXG4gICAgICAgICAgICAgICAgICAgIFwic2VydmVyLXN0YXR1cy1cIiArIG1vZGVsLnN0YXR1c1tlbmRwb2ludF0oKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGlzRW5kcG9pbnRDb25uZWN0ZWQ6IChlbmRwb2ludCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5jb25maWd1cmF0aW9uLnNlcnZlckNvbm5lY3RlZCgpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuY29uZmlndXJhdGlvbi51cmxzICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5jb25maWd1cmF0aW9uLnVybHNbZW5kcG9pbnRdICE9PSB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlczoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvYWRBc3NpZ25tZW50TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLnNhdmVBc3NpZ25tZW50TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvYWRIaXN0b3J5TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvYWRGaWxlTWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLnNhdmVGaWxlTWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvYWREYXRhc2V0TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvZ0V2ZW50TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLnNhdmVJbWFnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLnVwZGF0ZVN1Ym1pc3Npb25NZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMudXBkYXRlU3VibWlzc2lvblN0YXR1c01lc3NhZ2UoKSB8fCBcIlwiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgZm9yY2U6IHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVTdWJtaXNzaW9uOiAoZGF0YSwgZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuc2VydmVyLnVwZGF0ZVN1Ym1pc3Npb24oc2VsZi5tb2RlbC5zdWJtaXNzaW9uLnNjb3JlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm1vZGVsLnN1Ym1pc3Npb24uY29ycmVjdCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkuZmFkZU91dCgxMDApLmZhZGVJbigxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIG1ha2VFeHRyYUludGVyZmFjZVN1YnNjcmlwdGlvbnMoc2VsZiwgbW9kZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHR1cm5PbkhhY2tzKCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJUT0RPXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwbHlzIHRoZSBLbm9ja291dEpTIGJpbmRpbmdzIHRvIHRoZSBtb2RlbCwgaW5zdGFudGlhdGluZyB0aGUgdmFsdWVzIGludG8gdGhlXHJcbiAgICAgKiBIVE1MLlxyXG4gICAgICovXHJcbiAgICBhcHBseU1vZGVsKCkge1xyXG4gICAgICAgIGtvLmFwcGx5QmluZGluZ3ModGhpcy5tb2RlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFV0aWxpdGllcygpIHtcclxuICAgICAgICBsZXQgbWFpbiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy51dGlsaXRpZXMgPSB7XHJcbiAgICAgICAgICAgIG1hcmtkb3duOiAodGV4dCkgPT4gdGV4dCA/IEVhc3lNREUucHJvdG90eXBlLm1hcmtkb3duKHRleHQpIDogXCI8cD48L3A+XCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRDb21wb25lbnRzKCkge1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSB0aGlzLm1vZGVsLmNvbmZpZ3VyYXRpb24uY29udGFpbmVyO1xyXG4gICAgICAgIGxldCBjb21wb25lbnRzID0gdGhpcy5jb21wb25lbnRzID0ge307XHJcbiAgICAgICAgbGV0IG1haW4gPSB0aGlzO1xyXG4gICAgICAgIC8vIEVhY2ggb2YgdGhlc2UgY29tcG9uZW50cyB3aWxsIHRha2UgdGhlIEJsb2NrUHkgaW5zdGFuY2UsIGFuZCBwb3NzaWJseSBhXHJcbiAgICAgICAgLy8gcmVmZXJlbmNlIHRvIHRoZSByZWxldmFudCBIVE1MIGxvY2F0aW9uIHdoZXJlIGl0IHdpbGwgYmUgZW1iZWRkZWQuXHJcbiAgICAgICAgY29tcG9uZW50cy5kaWFsb2cgPSBuZXcgQmxvY2tQeURpYWxvZyhtYWluLCBjb250YWluZXIuZmluZChcIi5ibG9ja3B5LWRpYWxvZ1wiKSk7XHJcbiAgICAgICAgY29tcG9uZW50cy5mZWVkYmFjayA9IG5ldyBCbG9ja1B5RmVlZGJhY2sobWFpbiwgY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1mZWVkYmFja1wiKSk7XHJcbiAgICAgICAgY29tcG9uZW50cy50cmFjZSA9IG5ldyBCbG9ja1B5VHJhY2UobWFpbik7XHJcbiAgICAgICAgY29tcG9uZW50cy5jb25zb2xlID0gbmV3IEJsb2NrUHlDb25zb2xlKG1haW4sIGNvbnRhaW5lci5maW5kKFwiLmJsb2NrcHktY29uc29sZVwiKSk7XHJcbiAgICAgICAgY29tcG9uZW50cy5lbmdpbmUgPSBuZXcgQmxvY2tQeUVuZ2luZShtYWluKTtcclxuICAgICAgICBjb21wb25lbnRzLmZpbGVTeXN0ZW0gPSBuZXcgQmxvY2tQeUZpbGVTeXN0ZW0obWFpbik7XHJcbiAgICAgICAgY29tcG9uZW50cy5lZGl0b3JzID0gbmV3IEVkaXRvcnMobWFpbiwgY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1lZGl0b3JcIikpO1xyXG4gICAgICAgIGNvbXBvbmVudHMucHl0aG9uRWRpdG9yID0gdGhpcy5jb21wb25lbnRzLmVkaXRvcnMuYnlOYW1lKFwicHl0aG9uXCIpO1xyXG4gICAgICAgIGNvbXBvbmVudHMuc2VydmVyID0gbmV3IEJsb2NrUHlTZXJ2ZXIobWFpbik7XHJcbiAgICAgICAgY29tcG9uZW50cy5jb3JnaXMgPSBuZXcgQmxvY2tQeUNvcmdpcyhtYWluKTtcclxuICAgICAgICBjb21wb25lbnRzLmhpc3RvcnkgPSBuZXcgQmxvY2tQeUhpc3RvcnkobWFpbiwgY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1oaXN0b3J5LXRvb2xiYXJcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VFeHRyYVN1YnNjcmlwdGlvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5kaXNwbGF5LmNoYW5nZWRJbnN0cnVjdGlvbnMuc3Vic2NyaWJlKChjaGFuZ2VkKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJYLUluc3RydWN0aW9ucy5DaGFuZ2VcIiwgXCJcIiwgXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkLCBcImluc3RydWN0aW9ucy5tZFwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoXCJhbnN3ZXIucHlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmVuZ2luZS5yZXNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcXVlc3RQYXNzY29kZSgpIHtcclxuICAgICAgICBsZXQgdXNlclN1cHBsaWVkUGFzc2NvZGUgPSBwcm9tcHQoXCJQbGVhc2UgZW50ZXIgdGhlIHBhc3Njb2RlLlwiKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmRpc3BsYXkucGFzc2NvZGUodXNlclN1cHBsaWVkUGFzc2NvZGUpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IHtlbmNvZGVIVE1MfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxuY29uc3QgU1RBUlRfRVZBTF9IVE1MID0gYFxuPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lIGZsb2F0LXJpZ2h0IGJsb2NrcHktYnRuLWV2YWxcIj5cbiAgICBFdmFsdWF0ZVxuPC9idXR0b24+YDtcblxuZXhwb3J0IGNvbnN0IENPTlNPTEVfSFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPSdjb2wtbWQtNiBibG9ja3B5LXBhbmVsIGJsb2NrcHktY29uc29sZSdcbiAgICAgICAgICByb2xlPVwicmVnaW9uXCIgYXJpYS1sYWJlbD1cIkNvbnNvbGVcIlxuICAgICAgICAgIGRhdGEtYmluZD1cImNsYXNzOiB1aS5jb25zb2xlLnNpemVcIj5cbiAgICAgICAgICBcbiAgICAgICAgPCEtLSBGZWVkYmFjay9UcmFjZSBWaXNpYmlsaXR5IENvbnRyb2wgLS0+XG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgIGNsYXNzPSdidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBmbG9hdC1yaWdodCBibG9ja3B5LXNob3ctZmVlZGJhY2snXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiB1aS5zZWNvbmRSb3cuaXNDb25zb2xlU2hvd1Zpc2libGUsIGNsaWNrOiB1aS5zZWNvbmRSb3cuYWR2YW5jZVN0YXRlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWV5ZSc+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICBcbiAgICAgICAgPHN0cm9uZz5Db25zb2xlOjwvc3Ryb25nPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz0nYmxvY2tweS1wcmludGVyIGJsb2NrcHktcHJpbnRlci1kZWZhdWx0Jz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICA8L2Rpdj5gO1xuXG5jb25zdCBORVdfQ09OU09MRV9MSU5FX0hUTUwgPSBcIjxkaXY+PC9kaXY+XCI7XG5cbi8qKlxuICpcbiAqIEBlbnVtXG4gKi9cbmV4cG9ydCBsZXQgQ29uc29sZUxpbmVUeXBlID0ge1xuICAgIFRFWFQ6IFwidGV4dFwiLFxuICAgIEhUTUw6IFwiaHRtbFwiLFxuICAgIFBMT1Q6IFwicGxvdFwiLFxuICAgIElNQUdFOiBcImltYWdlXCIsXG4gICAgVFVSVExFOiBcInR1cnRsZVwiLFxuICAgIEVWQUw6IFwiZXZhbFwiLFxuICAgIFNUQVJUX0VWQUw6IFwic3RhcnRfZXZhbFwiLFxuICAgIFZBTFVFOiBcInZhbHVlXCIsXG4gICAgSU5QVVQ6IFwiaW5wdXRcIixcbiAgICBURVNUX0NBU0U6IFwidGVzdF9jYXNlXCJcbn07XG5cbmNsYXNzIENvbnNvbGVMaW5lIHtcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0eXBlLCBjb250ZW50KSB7XG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIHRoaXMub3JpZ2luID0ge1xuICAgICAgICAgICAgZmlsZW5hbWU6IFNrLmN1cnJGaWxlbmFtZSxcbiAgICAgICAgICAgIHN0ZXA6IG1haW4uY29tcG9uZW50cy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXAsXG4gICAgICAgICAgICBsaW5lOiBtYWluLmNvbXBvbmVudHMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5saW5lXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaHRtbCA9ICQoXCI8ZGl2PjwvZGl2PlwiLCB7XG4gICAgICAgICAgICBcImNsYXNzXCI6ICBcImJsb2NrcHktcHJpbnRlci1vdXRwdXRcIixcbiAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0b29sdGlwXCIsXG4gICAgICAgICAgICBcImRhdGEtcGxhY2VtZW50XCI6IFwiYXV0b1wiLFxuICAgICAgICAgICAgXCJkYXRhLXN0ZXBcIjogdGhpcy5vcmlnaW4uc3RlcCxcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTdGVwIFwiICsgdGhpcy5vcmlnaW4uc3RlcCArIFwiLCBMaW5lIFwiICsgdGhpcy5vcmlnaW4ubGluZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gIW1haW4ubW9kZWwuZGlzcGxheS5tdXRlUHJpbnRlcigpO1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB9XG5cbiAgICB0b1NrdWxwdCgpIHtcbiAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkodGhpcy5jb250ZW50KTtcbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIHRoaXMuaHRtbC5yZW1vdmUoKTtcbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lVHVydGxlIGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIC8vIFRPRE86IENhcHR1cmUgdHVydGxlIGNvbW1hbmRzIGZvciB0cmFjaW5nIHB1cnBvc2VzXG4gICAgY29uc3RydWN0b3IobWFpbikge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuVFVSVExFKTtcbiAgICAgICAgdGhpcy5odG1sLmFkZENsYXNzKFwiYmxvY2tweS1jb25zb2xlLXR1cnRsZS1vdXRwdXRcIik7XG4gICAgfVxuXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHdoZXJlLnByZXBlbmQodGhpcy5odG1sKTtcbiAgICAgICAgICAgIHRoaXMuaHRtbFswXS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICAgICAgICAgICAgLy90aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZUltYWdlIGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIGNvbnRlbnQpIHtcbiAgICAgICAgc3VwZXIobWFpbiwgQ29uc29sZUxpbmVUeXBlLklNQUdFLCBjb250ZW50KTtcbiAgICAgICAgdGhpcy5odG1sLmFkZENsYXNzKFwiYmxvY2tweS1jb25zb2xlLWltYWdlLW91dHB1dFwiKTtcbiAgICB9XG5cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jb250ZW50KTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC5hcHBlbmQodGhpcy5jb250ZW50KTtcbiAgICAgICAgICAgIHdoZXJlLmFwcGVuZCh0aGlzLmh0bWwpO1xuICAgICAgICAgICAgLy90aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZVBsb3QgZXh0ZW5kcyBDb25zb2xlTGluZSB7XG4gICAgY29uc3RydWN0b3IobWFpbiwgY29udGVudCkge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuUExPVCwgY29udGVudCk7XG4gICAgICAgIHRoaXMuaHRtbC5hZGRDbGFzcyhcImJsb2NrcHktY29uc29sZS1wbG90LW91dHB1dFwiKTtcbiAgICB9XG5cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICAvL3RoaXMuaHRtbC50b29sdGlwKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lVGV4dCBleHRlbmRzIENvbnNvbGVMaW5lIHtcblxuICAgIGFkZENvbnRlbnQoY29udGVudCkge1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQgKyBjb250ZW50O1xuICAgIH1cblxuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICBsZXQgZW5jb2RlZFRleHQgPSBlbmNvZGVIVE1MKHRoaXMuY29udGVudCk7XG4gICAgICAgICAgICBsZXQgbGluZURhdGEgPSAkKFwiPHNhbXA+PC9zYW1wPlwiLCB7IFwiaHRtbFwiOiBlbmNvZGVkVGV4dCB9KTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC5hcHBlbmQobGluZURhdGEpO1xuICAgICAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICB0aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZVZhbHVlIGV4dGVuZHMgQ29uc29sZUxpbmUge1xuXG4gICAgY29uc3RydWN0b3IobWFpbiwgY29udGVudCkge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuVkFMVUUsIGNvbnRlbnQpO1xuICAgIH1cblxuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICBsZXQgZW5jb2RlZFRleHQgPSBlbmNvZGVIVE1MKHRoaXMuY29udGVudCk7XG4gICAgICAgICAgICBsZXQgbGluZURhdGEgPSAkKFwiPGNvZGU+PC9jb2RlPlwiLCB7IFwiaHRtbFwiOiBlbmNvZGVkVGV4dCB9KTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC5hcHBlbmQobGluZURhdGEpO1xuICAgICAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICB0aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZUlucHV0IGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIHByb21wdE1lc3NhZ2UpIHtcbiAgICAgICAgc3VwZXIobWFpbiwgQ29uc29sZUxpbmVUeXBlLklOUFVULCBwcm9tcHRNZXNzYWdlKTtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIElucHV0IGJveCBmb3IgcmVjZWl2aW5nIGlucHV0KCkgZnJvbSB0aGUgdXNlci5cbiAgICAgKlxuICAgICAqL1xuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICAvLyBQZXJmb3JtIGFueSBuZWNlc3NhcnkgY2xlYW5pbmdcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgLy8gSW5wdXQgZm9ybVxuICAgICAgICAgICAgbGV0IGlucHV0Rm9ybSA9ICQoXCI8aW5wdXQgdHlwZT0ndGV4dCcgLz5cIik7XG4gICAgICAgICAgICAvLyBFbnRlciBidXR0b25cbiAgICAgICAgICAgIGxldCBpbnB1dEJ0biA9ICQoXCI8YnV0dG9uPjwvYnV0dG9uPlwiLCB7XCJodG1sXCI6IFwiRW50ZXJcIn0pO1xuICAgICAgICAgICAgLy8gR3JvdXAgZm9ybSBhbmQgYnV0dG9uXG4gICAgICAgICAgICBsZXQgaW5wdXRHcm91cCA9ICQoXCI8ZGl2PjwvZGl2PlwiLCB7XCJjbGFzc1wiOiBcImJsb2NrcHktY29uc29sZS1pbnB1dFwifSk7XG4gICAgICAgICAgICBpbnB1dEdyb3VwLmFwcGVuZChpbnB1dEZvcm0pO1xuICAgICAgICAgICAgaW5wdXRHcm91cC5hcHBlbmQoaW5wdXRCdG4pO1xuICAgICAgICAgICAgLy8gUHJvbXB0IGJveCwgbmV3IGxpbmUsIGlucHV0IGdyb3VwXG4gICAgICAgICAgICBsZXQgaW5wdXRCb3ggPSAkKFwiPGRpdj48L2Rpdj5cIik7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZW50ICE9PSBcIlxcblwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVuY29kZWRUZXh0ID0gZW5jb2RlSFRNTCh0aGlzLmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dE1zZyA9ICQoXCI8c2FtcD48L3NhbXA+XCIsICB7XCJodG1sXCI6IGVuY29kZWRUZXh0fSk7XG4gICAgICAgICAgICAgICAgaW5wdXRCb3guYXBwZW5kKGlucHV0TXNnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0Qm94LmFwcGVuZCgkKFwiPGJyPlwiKSlcbiAgICAgICAgICAgICAgICAuYXBwZW5kKGlucHV0R3JvdXApO1xuICAgICAgICAgICAgLy8gUmVuZGVyXG4gICAgICAgICAgICB0aGlzLmh0bWwuYXBwZW5kKGlucHV0Qm94KTtcbiAgICAgICAgICAgIHdoZXJlLmFwcGVuZCh0aGlzLmh0bWwpO1xuICAgICAgICAgICAgLy8gTWFrZSBpdCBpbnRlcmFjdGl2ZVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFrZUludGVyYWN0aXZlKGlucHV0Rm9ybSwgaW5wdXRCdG4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH07XG5cbiAgICBtYWtlSW50ZXJhY3RpdmUoaW5wdXQsIGJ1dHRvbikge1xuICAgICAgICBsZXQgcmVzb2x2ZU9uQ2xpY2s7XG4gICAgICAgIGxldCBzdWJtaXR0ZWRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmVPbkNsaWNrID0gcmVzb2x2ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBzdWJtaXRGb3JtID0gKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHVzZXJJbnB1dHRlZFZhbHVlID0gaW5wdXQudmFsKCk7XG4gICAgICAgICAgICBTay5xdWV1ZWRJbnB1dC5wdXNoKHVzZXJJbnB1dHRlZFZhbHVlKTtcbiAgICAgICAgICAgIHJlc29sdmVPbkNsaWNrKHVzZXJJbnB1dHRlZFZhbHVlKTtcbiAgICAgICAgICAgIGlucHV0LnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgIGJ1dHRvbi5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9O1xuICAgICAgICBidXR0b24uY2xpY2soc3VibWl0Rm9ybSk7XG4gICAgICAgIGlucHV0LmtleXVwKChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgIHN1Ym1pdEZvcm0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgIHJldHVybiBzdWJtaXR0ZWRQcm9taXNlO1xuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVFdmFsdWF0ZSBleHRlbmRzIENvbnNvbGVMaW5lSW5wdXQge1xuICAgIGNvbnN0cnVjdG9yKG1haW4pIHtcbiAgICAgICAgc3VwZXIobWFpbiwgXCJFdmFsdWF0ZTpcIik7XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZVN0YXJ0RXZhbHVhdGUgZXh0ZW5kcyBDb25zb2xlTGluZSB7XG4gICAgY29uc3RydWN0b3IobWFpbikge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuU1RBUlRfRVZBTCk7XG4gICAgICAgIHRoaXMuaHRtbC5hcHBlbmQoJChTVEFSVF9FVkFMX0hUTUwpKTtcbiAgICAgICAgdGhpcy5odG1sLmNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC51aS5leGVjdXRlLmV2YWx1YXRlKCk7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmxvY2tQeUNvbnNvbGUge1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IGZvciBtYW5hZ2luZyB0aGUgY29uc29sZSwgd2l0aCBmZWF0dXJlcyBmb3IgdGhpbmdzIGxpa2UgcHJpbnRpbmcsIHBsb3R0aW5nLCBldmFsaW5nLCBpbnB1dGluZy5cbiAgICAgKiBUaGUgXCJwcmludGVyXCIgaXMgdGhlIHJlZ2lvbiB3aGVyZSB3ZSBwdXQgdGhpbmdzLCBhcyBvcHBvc2VkIHRvIHRoZSBjb25zb2xlIGFzIGEgd2hvbGUuXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWcgLSBUaGUgSFRNTCBvYmplY3QgdGhpcyBpcyBhdHRhY2hlZCB0by5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAobWFpbiwgdGFnKSB7XG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xuICAgICAgICB0aGlzLnByaW50ZXJUYWcgPSB0YWcuZmluZChcIi5ibG9ja3B5LXByaW50ZXJcIik7XG5cbiAgICAgICAgdGhpcy5NSU5JTVVNX1dJRFRIID0gMjAwO1xuICAgICAgICB0aGlzLk1JTklNVU1fSEVJR0hUID0gMjAwO1xuICAgICAgICB0aGlzLkRFRkFVTFRfSEVJR0hUID0gdGhpcy5wcmludGVyVGFnLmhlaWdodCgpOyAvLyBMZXQgQ1NTIGRlZmluZSB0aGlzXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnByZXZpb3VzQ29uc29sZUhlaWdodCh0aGlzLkRFRkFVTFRfSEVJR0hUKTtcblxuICAgICAgICB0aGlzLm91dHB1dCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ub3V0cHV0O1xuICAgICAgICB0aGlzLnNldHRpbmdzID0ge307XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcblxuICAgICAgICAvLyBUT0RPOiBJZiB0aGUgdXNlciBtb2RpZmllcyBhIGZpbGUsIHRoZW4gbWFrZSB0aGUgY29uc29sZSBsb29rIGZhZGVkIGEgbGl0dGxlXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlc2V0IHRoZSBzdGF0dXMgb2YgdGhlIHByaW50ZXIsIGluY2x1ZGluZyByZW1vdmluZyBhbnkgdGV4dCBpbiBpdCBhbmRcbiAgICAgKiBmaXhpbmcgaXRzIHNpemUuXG4gICAgICovXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMub3V0cHV0LnJlbW92ZUFsbCgpO1xuXG4gICAgICAgIHRoaXMubGluZUJ1ZmZlciA9IG51bGw7XG4gICAgICAgIHRoaXMucGxvdEJ1ZmZlciA9IG51bGw7XG4gICAgICAgIHRoaXMucHJpbnRlclRhZy5lbXB0eSgpO1xuICAgICAgICAvLyBJZiB0aGUgdXNlciBoYXNuJ3QgY2hhbmdlZCB0aGUgY29uc29sZSBzaXplLCB3ZSdsbCByZXNldCBpdFxuICAgICAgICBpZiAodGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHJldmlvdXNDb25zb2xlSGVpZ2h0KCkgPT09IHRoaXMucHJpbnRlclRhZy5oZWlnaHQoKSkge1xuICAgICAgICAgICAgdGhpcy5wcmludGVyVGFnLmhlaWdodCh0aGlzLkRFRkFVTFRfSEVJR0hUKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnByZXZpb3VzQ29uc29sZUhlaWdodCh0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50dXJ0bGVMaW5lID0gbnVsbDtcbiAgICAgICAgU2suVHVydGxlR3JhcGhpY3MgPSB7XG4gICAgICAgICAgICB0YXJnZXQ6IHRoaXMuZ2V0VHVydGxlTGluZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICAgIGFzc2V0czogdGhpcy5sb2FkQXNzZXQuYmluZCh0aGlzKVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBsb2FkQXNzZXQobmFtZSkge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICBnZXRUdXJ0bGVMaW5lKCkge1xuICAgICAgICBpZiAodGhpcy50dXJ0bGVMaW5lID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnR1cnRsZUxpbmUgPSBuZXcgQ29uc29sZUxpbmVUdXJ0bGUodGhpcy5tYWluKTtcbiAgICAgICAgICAgIHRoaXMudHVydGxlTGluZS5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSB1c2VyIGhhc24ndCBjaGFuZ2VkIHRoZSBjb25zb2xlIHNpemUsIHdlJ2xsIGRvIHNvXG4gICAgICAgICAgICBpZiAodGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHJldmlvdXNDb25zb2xlSGVpZ2h0KCkgPT09IHRoaXMucHJpbnRlclRhZy5oZWlnaHQoKSkge1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UHJpbnRlckRpbWVuc2lvbiA9IHRoaXMucHJpbnRlclRhZy53aWR0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpbnRlclRhZy5oZWlnaHQoY3VycmVudFByaW50ZXJEaW1lbnNpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnByZXZpb3VzQ29uc29sZUhlaWdodCh0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KCkpO1xuICAgICAgICAgICAgICAgIFNrLlR1cnRsZUdyYXBoaWNzLmhlaWdodCA9IGN1cnJlbnRQcmludGVyRGltZW5zaW9uLTQwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnR1cnRsZUxpbmUuaHRtbFswXTtcbiAgICB9XG5cbiAgICBmaW5pc2hUdXJ0bGVzKCkge1xuICAgICAgICBpZiAodGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3Muc2F2ZVR1cnRsZU91dHB1dCgpKSB7XG4gICAgICAgICAgICBsZXQgY2FudmFzID0gdGhpcy50dXJ0bGVMaW5lLmh0bWwuZmluZChcImNhbnZhc1wiKS5sYXN0KClbMF07XG4gICAgICAgICAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGxldCBkYXRhVXJsID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5zYXZlSW1hZ2UoXCJ0dXJ0bGVfb3V0cHV0XCIsIGRhdGFVcmwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVE9ETzogdHVydGxlcyBzaG91bGQgYmUgYmFzZWQgb24gdGhlIGN1cnJlbnQgd2lkdGhcbiAgICBuZXdUdXJ0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldFdpZHRoKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy5NSU5JTVVNX1dJRFRILCB0aGlzLnByaW50ZXJUYWcud2lkdGgoKS00MCk7XG4gICAgfVxuXG4gICAgZ2V0SGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy5NSU5JTVVNX0hFSUdIVCwgdGhpcy5wcmludGVyVGFnLmhlaWdodCgpKzQwKTtcbiAgICB9XG5cbiAgICBpc011dGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkubXV0ZVByaW50ZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGVhY2ggcHJpbnRlZCBlbGVtZW50IGluIHRoZSBwcmludGVyIGFuZCBtYWtlcyBpdCBoaWRkZW5cbiAgICAgKiBvciB2aXNpYmxlLCBkZXBlbmRpbmcgb24gd2hhdCBzdGVwIHdlJ3JlIG9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHN0ZXAgLSBUaGUgY3VycmVudCBzdGVwIG9mIHRoZSBleGVjdXRlZCBwcm9ncmFtIHRoYXQgd2UncmUgb247IGVhY2ggZWxlbWVudCBpbiB0aGUgcHJpbnRlciBtdXN0IGJlIG1hcmtlZCB3aXRoIGEgXCJkYXRhLXN0ZXBcIiBwcm9wZXJ0eSB0byByZXNvbHZlIHRoaXMuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHBhZ2UgLSBEZXByZWNhdGVkLCBub3Qgc3VyZSB3aGF0IHRoaXMgZXZlbiBkb2VzLlxuICAgICAqL1xuICAgIHN0ZXBQcmludGVyKHN0ZXAsIHBhZ2UpIHtcbiAgICAgICAgdGhpcy5wcmludGVyVGFnLmZpbmQoXCIuYmxvY2tweS1wcmludGVyLW91dHB1dFwiKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCQodGhpcykuYXR0cihcImRhdGEtc3RlcFwiKSA8PSBzdGVwKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQodGhpcykuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHJpbnQgYSBsaW5lIHRvIHRoZSBvbi1zY3JlZW4gcHJpbnRlci5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbGluZVRleHQgLSBBIGxpbmUgb2YgdGV4dCB0byBiZSBwcmludGVkIG91dC5cbiAgICAgKi9cbiAgICBwcmludChsaW5lVGV4dCkge1xuICAgICAgICAvLyBFbXB0eSBzdHJpbmdzIG1lYW5zIGRvIG5vdGhpbmcuXG4gICAgICAgIC8vIHByaW50KFwiXCIsIGVuZD1cIlwiKVxuICAgICAgICBpZiAoIWxpbmVUZXh0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZsdXNoID0gZmFsc2U7XG4gICAgICAgIGlmIChsaW5lVGV4dC5jaGFyQXQobGluZVRleHQubGVuZ3RoLTEpID09PSBcIlxcblwiKSB7XG4gICAgICAgICAgICBmbHVzaCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNwbGl0TGluZXMgPSBsaW5lVGV4dC5zcGxpdChcIlxcblwiKTtcbiAgICAgICAgaWYgKHRoaXMubGluZUJ1ZmZlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyID0gbmV3IENvbnNvbGVMaW5lVGV4dCh0aGlzLm1haW4sIENvbnNvbGVMaW5lVHlwZS5URVhULCBzcGxpdExpbmVzWzBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlci5hZGRDb250ZW50KHNwbGl0TGluZXNbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGk9MTsgaSA8IHNwbGl0TGluZXMubGVuZ3RoLTE7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5vdXRwdXQucHVzaCh0aGlzLmxpbmVCdWZmZXIpO1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyID0gbmV3IENvbnNvbGVMaW5lVGV4dCh0aGlzLm1haW4sIENvbnNvbGVMaW5lVHlwZS5URVhULCBzcGxpdExpbmVzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmx1c2gpIHtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0LnB1c2godGhpcy5saW5lQnVmZmVyKTtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICBwbG90KHBsb3RzKSB7XG4gICAgICAgIHRoaXMucGxvdEJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZVBsb3QodGhpcy5tYWluLCBwbG90cyk7XG4gICAgICAgIHRoaXMucGxvdEJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxvdEJ1ZmZlcjtcbiAgICB9XG5cbiAgICBwcmludFBJTEltYWdlKGltYWdlRGF0YSkge1xuICAgICAgICB0aGlzLmltYWdlQnVmZmVyID0gbmV3IENvbnNvbGVMaW5lSW1hZ2UodGhpcy5tYWluLCBpbWFnZURhdGEuaW1hZ2UpO1xuICAgICAgICB0aGlzLmltYWdlQnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZUJ1ZmZlcjtcbiAgICB9XG5cbiAgICBwcmludFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGxldCBwcmludGVkVmFsdWUgPSBuZXcgQ29uc29sZUxpbmVWYWx1ZSh0aGlzLm1haW4sIHZhbHVlKTtcbiAgICAgICAgcHJpbnRlZFZhbHVlLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICByZXR1cm4gcHJpbnRlZFZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIHJlZ2lzdGVycyBhIFByb21pc2UgZnJvbSB0aGUgSW5wdXQgYm94XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb21wdE1lc3NhZ2UgLSBNZXNzYWdlIHRvIGRpc3BsYXkgdG8gdGhlIHVzZXIuXG4gICAgICpcbiAgICAgKi9cbiAgICBpbnB1dChwcm9tcHRNZXNzYWdlKSB7XG4gICAgICAgIHRoaXMuaW5wdXRCdWZmZXIgPSBuZXcgQ29uc29sZUxpbmVJbnB1dCh0aGlzLm1haW4sIHByb21wdE1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dEJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICB9O1xuXG5cbiAgICBldmFsdWF0ZSgpIHtcbiAgICAgICAgdGhpcy5pbnB1dEJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZUV2YWx1YXRlKHRoaXMubWFpbik7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0QnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgIH1cblxuICAgIGJlZ2luRXZhbCgpIHtcbiAgICAgICAgbGV0IHN0YXJ0RXZhbHVhdGlvbiA9IG5ldyBDb25zb2xlTGluZVN0YXJ0RXZhbHVhdGUodGhpcy5tYWluKTtcbiAgICAgICAgcmV0dXJuIHN0YXJ0RXZhbHVhdGlvbi5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbmNvbmRpdGlvbmFsbHkgc2Nyb2xsIHRvIHRoZSBib3R0b20gb2YgdGhlIHdpbmRvdy5cbiAgICAgKlxuICAgICAqL1xuICAgIHNjcm9sbFRvQm90dG9tKCkge1xuICAgICAgICB0aGlzLnRhZy5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogdGhpcy50YWcucHJvcChcInNjcm9sbEhlaWdodFwiKSAtIHRoaXMudGFnLnByb3AoXCJjbGllbnRIZWlnaHRcIilcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9O1xuXG59IiwiaW1wb3J0IHtzbHVnfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxuLy8gVE9ETzogZWRpdG9yLmJtLmJsb2NrRWRpdG9yLmV4dHJhVG9vbHNbXVxuXG5leHBvcnQgbGV0IF9JTVBPUlRFRF9EQVRBU0VUUyA9IHt9O1xuZXhwb3J0IGxldCBfSU1QT1JURURfQ09NUExFVEVfREFUQVNFVFMgPSB7fTtcblxuLyoqXG4gKiBUaGlzIGlzIGEgdmVyeSBzaW1wbGlzdGljIGhlbHBlciBmdW5jdGlvbiB0aGF0IHdpbGwgdHJhbnNmb3JtXG4gKiBhIGdpdmVuIGJ1dHRvbiBpbnRvIGEgXCJMb2FkZWRcIiBzdGF0ZSAoZGlzYWJsZWQsIHByZXNzZWQgc3RhdGUsIGV0Yy4pLlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGJ0biAtIEFuIEhUTUwgZWxlbWVudCB0byBjaGFuZ2UgdGhlIHRleHQgb2YuXG4gKi9cbmxldCBzZXRCdXR0b25Mb2FkZWQgPSBmdW5jdGlvbiAoYnRuKSB7XG4gICAgYnRuLmFkZENsYXNzKFwiYWN0aXZlXCIpXG4gICAgICAgIC5hZGRDbGFzcyhcImJ0bi1zdWNjZXNzXCIpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcImJ0bi1wcmltYXJ5XCIpXG4gICAgICAgIC5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSlcbiAgICAgICAgLnRleHQoXCJMb2FkZWRcIilcbiAgICAgICAgLmF0dHIoXCJhcmlhLXByZXNzZWRcIiwgXCJ0cnVlXCIpO1xufTtcblxuXG4vKipcbiAqIE1vZHVsZSB0aGF0IGNvbm5lY3RzIHRvIHRoZSBDT1JHSVMgZGF0YXNldHMgYW5kIG1hbmFnZXMgaW50ZXJhY3Rpb25zXG4gKiB3aXRoIHRoZW0uIFRoaXMgaW5jbHVkZXMgbG9hZGluZyBpbiBkYXRhc2V0cyBhdCBsYXVuY2ggYW5kIG9uLXRoZS1mbHkuXG4gKiBOb3RlIHRoYXQgdGhpcyBoYXMgbm8gcHJlc2VuY2Ugb24gc2NyZWVuLCBzbyBpdCBkb2VzIG5vdCBoYXZlIGEgdGFnLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlDb3JnaXN9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJsb2NrUHlDb3JnaXMobWFpbikge1xuICAgIHRoaXMubWFpbiA9IG1haW47XG5cbiAgICB0aGlzLmxvYWRlZERhdGFzZXRzID0gW107XG4gICAgdGhpcy5sb2FkRGF0YXNldHMoKTtcbn1cblxuQmxvY2tQeUNvcmdpcy5wcm90b3R5cGUubG9hZERhdGFzZXRzID0gZnVuY3Rpb24gKHNpbGVudGx5KSB7XG4gICAgLy8gTG9hZCBpbiBlYWNoIHRoZSBkYXRhc2V0c1xuICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbCxcbiAgICAgICAgZWRpdG9yID0gdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLFxuICAgICAgICBzZXJ2ZXIgPSB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXI7XG4gICAgbGV0IGltcG9ydHMgPSBbXTtcbiAgICBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRhdGFzZXRzKCkuc3BsaXQoXCIsXCIpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgaWYgKG5hbWUgJiYgIShuYW1lIGluIEJsb2NrTWlycm9yQmxvY2tFZGl0b3IuRVhUUkFfVE9PTFMpKSB7XG4gICAgICAgICAgICBpbXBvcnRzLnB1c2guYXBwbHkoaW1wb3J0cywgdGhpcy5pbXBvcnREYXRhc2V0KHNsdWcobmFtZSksIG5hbWUsIHNpbGVudGx5KSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFdoZW4gZGF0YXNldHMgYXJlIGxvYWRlZCwgdXBkYXRlIHRoZSB0b29sYm94LlxuICAgICQud2hlbi5hcHBseSgkLCBpbXBvcnRzKS5kb25lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlRSSUdHRVJFRFwiKTtcbiAgICAgICAgZWRpdG9yLmJtLmZvcmNlQmxvY2tSZWZyZXNoKCk7XG4gICAgICAgIGVkaXRvci5ibS5ibG9ja0VkaXRvci5yZW1ha2VUb29sYm94KCk7XG4gICAgfSkuZmFpbChmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhhcmd1bWVudHMpO1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH0pLmFsd2F5cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlcnZlci5maW5hbGl6ZVN1YnNjcmlwdGlvbnMoKTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogTG9hZHMgdGhlIGRlZmluaXRpb25zIGZvciBhIGRhdGFzZXQgaW50byB0aGUgZW52aXJvbm1lbnQsIGluY2x1ZGluZ1xuICogdGhlIGRhdGFzZXQgKGFzIGEgSlMgZmlsZSksIHRoZSBza3VscHQgYmluZGluZ3MsIGFuZCB0aGUgYmxvY2tseVxuICogYmluZGluZ3MuIFRoaXMgcmVxdWlyZXMgYWNjZXNzIHRvIGEgQ09SR0lTIHNlcnZlciwgYW5kIG9jY3Vyc1xuICogYXN5bmNocm9ub3VzbHkuIFRoZSByZXF1ZXN0cyBhcmUgZmlyZWQgYW5kIHRoZWlyIGRlZmVycmVkIG9iamVjdHNcbiAqIGFyZSByZXR1cm5lZCAtIGNhbGxlcnMgY2FuIHVzZSB0aGlzIGluZm9ybWF0aW9uIHRvIHBlcmZvcm0gYW4gYWN0aW9uXG4gKiBvbiBjb21wbGV0aW9uIG9mIHRoZSBpbXBvcnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNsdWcgLSBUaGUgVVJMIHNhZmUgdmVyc2lvbiBvZiB0aGUgZGF0YXNldCBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIFRoZSB1c2VyLWZyaWVuZGx5IHZlcnNpb24gb2YgdGhlIGRhdGFzZXQgbmFtZS5cbiAqIEByZXR1cm5zIHtBcnJheS48RGVmZXJyZWQ+fSAtIFJldHVybnMgdGhlIGFzeW5jIHJlcXVlc3RzIGFzIGRlZmVycmVkIG9iamVjdHMuXG4gKi9cbkJsb2NrUHlDb3JnaXMucHJvdG90eXBlLmltcG9ydERhdGFzZXQgPSBmdW5jdGlvbiAoc2x1ZywgbmFtZSkge1xuICAgIGxldCB1cmxfcmV0cmlldmFscyA9IFtdO1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJpbXBvcnREYXRhc2V0c1wiKSkge1xuICAgICAgICBsZXQgcm9vdCA9IHRoaXMubWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLnVybHMuaW1wb3J0RGF0YXNldHMgKyBcImJsb2NrcHkvXCIgKyBzbHVnICsgXCIvXCIgKyBzbHVnO1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5sb2FkaW5nRGF0YXNldHMucHVzaChuYW1lKTtcbiAgICAgICAgLy8gQWN0dWFsbHkgZ2V0IGRhdGFcbiAgICAgICAgbGV0IGdldERhdGFzZXQgPSAkLmdldFNjcmlwdChyb290ICsgXCJfZGF0YXNldC5qc1wiKTtcbiAgICAgICAgLy8gTG9hZCBnZXRDb21wbGV0ZSBzaWxlbnRseSBpbiB0aGUgYmFja2dyb3VuZCBiZWNhdXNlIGl0cyBiaWcgOihcbiAgICAgICAgbGV0IGdldENvbXBsZXRlID0gJC5nZXRTY3JpcHQocm9vdCArIFwiX2NvbXBsZXRlLmpzXCIpO1xuICAgICAgICBsZXQgZ2V0U2t1bHB0ID0gJC5nZXQocm9vdCArIFwiX3NrdWxwdC5qc1wiLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgU2suYnVpbHRpbkZpbGVzW1wiZmlsZXNcIl1bXCJzcmMvbGliL1wiICsgc2x1ZyArIFwiL19faW5pdF9fLmpzXCJdID0gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBnZXRCbG9ja2x5ID0gJC5nZXRTY3JpcHQocm9vdCArIFwiX2Jsb2NrbHkuanNcIik7XG4gICAgICAgIC8vIE9uIGNvbXBsZXRpb24sIHVwZGF0ZSBtZW51cy5cbiAgICAgICAgJC53aGVuKGdldERhdGFzZXQsIGdldFNrdWxwdCwgZ2V0QmxvY2tseSkuZG9uZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRlZERhdGFzZXRzLnB1c2goc2x1Zyk7XG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0udGV4dFRvQmxvY2tzLmhpZGRlbkltcG9ydHMucHVzaChzbHVnKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS5mb3JjZUJsb2NrUmVmcmVzaCgpO1xuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLmJtLmJsb2NrRWRpdG9yLnJlbWFrZVRvb2xib3goKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmxvYWRpbmdEYXRhc2V0cy5yZW1vdmUobmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB1cmxfcmV0cmlldmFscy5wdXNoKGdldERhdGFzZXQsIGdldFNrdWxwdCwgZ2V0QmxvY2tseSk7XG4gICAgfVxuICAgIHJldHVybiB1cmxfcmV0cmlldmFscztcbn07XG5cbi8qKlxuICogT3BlbnMgYSBkaWFsb2cgYm94IHRvIHByZXNlbnQgdGhlIHVzZXIgd2l0aCB0aGUgZGF0YXNldHMgYXZhaWxhYmxlXG4gKiB0aHJvdWdoIHRoZSBDT1JHSVMgc2VydmVyLiBUaGlzIHJlcXVpcmVzIGEgY2FsbCwgc28gdGhpcyBtZXRob2RcbiAqIGNvbXBsZXRlcyBhc3luY2hyb25vdXNseS4gVGhlIGRpYWxvZyBpcyBjb21wb3NlZCBvZiBhIHRhYmxlIHdpdGhcbiAqIGJ1dHRvbnMgdG8gbG9hZCB0aGUgZGF0YXNldHMgKE1vcmUgdGhhbiBvbmUgZGF0YXNldCBjYW4gYmUgbG9hZGVkXG4gKiBmcm9tIHdpdGhpbiB0aGUgZGlhbG9nIGF0IGEgdGltZSkuXG4gKi9cbkJsb2NrUHlDb3JnaXMucHJvdG90eXBlLm9wZW5EaWFsb2cgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImltcG9ydERhdGFzZXRzXCIpKSB7XG4gICAgICAgIGxldCByb290ID0gdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24udXJscy5pbXBvcnREYXRhc2V0cztcbiAgICAgICAgJC5nZXRKU09OKHJvb3QgKyBcImluZGV4Lmpzb25cIiwgIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAvLyBNYWtlIHVwIHRoZSBCb2R5XG4gICAgICAgICAgICBsZXQgZGF0YXNldHMgPSBkYXRhLmJsb2NrcHk7XG4gICAgICAgICAgICBsZXQgZG9jdW1lbnRhdGlvbiA9IHJvb3QrXCJibG9ja3B5L2luZGV4Lmh0bWxcIjtcbiAgICAgICAgICAgIGxldCBzdGFydCA9ICQoYDxwPkRvY3VtZW50YXRpb24gaXMgYXZhaWxhYmxlIGF0IDxhIGhyZWY9JyR7ZG9jdW1lbnRhdGlvbn0nIHRhcmdldD1fYmxhbms+dXJsPC9hPjwvcD5gKTtcbiAgICAgICAgICAgIGxldCBib2R5ID0gJChcIjx0YWJsZT48L3RhYmxlPlwiLCB7XCJjbGFzc1wiOiBcInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLXNtIHRhYmxlLXN0cmlwZWRcIn0pO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoZGF0YXNldHMpLnNvcnQoKS5tYXAoKG5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc2x1Z2dlZE5hbWUgPSBzbHVnKGRhdGFzZXRzW25hbWVdLm5hbWUpO1xuICAgICAgICAgICAgICAgIGxldCB0aXRsZU5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgICAgIGxldCBidG4gPSAkKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uXCIgYXJpYS1wcmVzc2VkPVwiZmFsc2VcIiBhdXRvY29tcGxldGU9XCJvZmZcIj5Mb2FkPC9idXR0b24+Jyk7XG4gICAgICAgICAgICAgICAgbGV0IGltZ1NyYyA9IHJvb3QrXCIuLi9pbWFnZXMvZGF0YXNldHMvXCIrbmFtZStcIi1pY29uLnBuZ1wiO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvYWRlZERhdGFzZXRzLmluZGV4T2Yoc2x1Z2dlZE5hbWUpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0QnV0dG9uTG9hZGVkKGJ0bik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnRuLmNsaWNrKCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmltcG9ydERhdGFzZXQoc2x1Z2dlZE5hbWUsIFwiRGF0YSAtIFwiICsgZGF0YXNldHNbbmFtZV0udGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QnV0dG9uTG9hZGVkKGJ0bik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL2xldCBpbWcgPSBgPGltZyBzcmM9JyR7aW1nU3JjfScgY2xhc3M9XCJjb3JnaXMtaWNvblwiPmA7XG4gICAgICAgICAgICAgICAgJChcIjx0cj48L3RyPlwiKVxuICAgICAgICAgICAgICAgICAgICAvLy5hcHBlbmQoJChcIjx0ZD5cIiArIGltZyArIFwiPC90ZD5cIikpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJChcIjx0ZD5cIiArIGRhdGFzZXRzW25hbWVdLnRpdGxlICsgXCI8L3RkPlwiKSlcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkKFwiPHRkPlwiICsgZGF0YXNldHNbbmFtZV0ub3ZlcnZpZXcgKyBcIjwvdGQ+XCIpKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCQoXCI8dGQ+PC90ZD5cIikuYXBwZW5kKGJ0bikpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhib2R5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYm9keS5hcHBlbmRUbyhzdGFydCk7XG4gICAgICAgICAgICAvLyBTaG93IHRoZSBhY3R1YWwgZGlhbG9nXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2cuc2hvdyhcIkltcG9ydCBEYXRhc2V0c1wiLCBzdGFydCwgbnVsbCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1ODg1MTc1MjA3NzVcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiQzovVXNlcnMvYWNiYXJ0L1Byb2plY3RzL2Jsb2NrcHktZWR1L2Jsb2NrcHkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wicHVibGljUGF0aFwiOlwiLi4vXCIsXCJobXJcIjp0cnVlLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU4ODUxNzUyMDc0NVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJDOi9Vc2Vycy9hY2JhcnQvUHJvamVjdHMvYmxvY2tweS1lZHUvYmxvY2tweS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCIuLi9cIixcImhtclwiOnRydWUsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCIvLyBUT0RPOiBEeWFubWljYWxseSBwb3B1bGF0ZSBhcmlhLWxhYmVsbGVkYnkgaW4gdGhpcyBhbmQgb3RoZXIgcGxhY2VzXG5cbmV4cG9ydCBsZXQgRElBTE9HX0hUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz0nYmxvY2tweS1kaWFsb2cgbW9kYWwgaGlkZGVuJ1xuICAgICAgICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgICAgICBhcmlhLWxhYmVsPSdEaWFsb2cnXG4gICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgYXJpYS1tb2RhbD1cInRydWVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtZGlhbG9nIG1vZGFsLWxnJyByb2xlPVwiZG9jdW1lbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWNvbnRlbnQnIHJvbGU9J3JlZ2lvbicgYXJpYS1sYWJlbD0nRGlhbG9nIGNvbnRlbnQnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWhlYWRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz0nbW9kYWwtdGl0bGUnPkR5bmFtaWMgQ29udGVudDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nY2xvc2UnIGRhdGEtZGlzbWlzcz0nbW9kYWwnIGFyaWEtaGlkZGVuPSd0cnVlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWJvZHknIHN0eWxlPSdtYXgtd2lkdGg6MTAwJTsgbWF4LWhlaWdodDo0MDBweCc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtZm9vdGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLXdoaXRlIG1vZGVsLWNsb3NlJyBkYXRhLWRpc21pc3M9J21vZGFsJz5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tc3VjY2VzcyBtb2RhbC1va2F5JyBkYXRhLWRpc21pc3M9J21vZGFsJz5Pa2F5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuYDtcblxuLyoqXG4gKiBBIHV0aWxpdHkgb2JqZWN0IGZvciBxdWlja2x5IGFuZCBjb252ZW5pZW50bHkgZ2VuZXJhdGluZyBkaWFsb2cgYm94ZXMuXG4gKiBVbmZvcnR1bmF0ZWx5LCB0aGlzIGRvZXNuJ3QgZHluYW1pY2FsbHkgY3JlYXRlIG5ldyBib3hlczsgaXQgcmV1c2VzIHRoZSBzYW1lIG9uZVxuICogb3ZlciBhbmQgb3ZlciBhZ2Fpbi4gSXQgdHVybnMgb3V0IGR5bmFtaWNhbGx5IGdlbmVyYXRpbmcgbmV3IGRpYWxvZyBib3hlc1xuICogaXMgYSBwYWluISBTbyB3ZSBjYW4ndCBzdGFjayB0aGVtLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlEaWFsb2d9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhZyAtIFRoZSBIVE1MIG9iamVjdCB0aGlzIGlzIGF0dGFjaGVkIHRvLlxuICovXG5leHBvcnQgZnVuY3Rpb24gQmxvY2tQeURpYWxvZyhtYWluLCB0YWcpIHtcbiAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgIHRoaXMudGFnID0gdGFnO1xuXG4gICAgdGhpcy50aXRsZVRhZyA9IHRhZy5maW5kKFwiLm1vZGFsLXRpdGxlXCIpO1xuICAgIHRoaXMuYm9keVRhZyA9IHRhZy5maW5kKFwiLm1vZGFsLWJvZHlcIik7XG4gICAgdGhpcy5mb290ZXJUYWcgPSB0YWcuZmluZChcIi5tb2RhbC1mb290ZXJcIik7XG4gICAgdGhpcy5va2F5QnV0dG9uID0gdGFnLmZpbmQoXCIubW9kYWwtb2theVwiKTtcblxuICAgIHRoaXMueWVzID0gKCkgPT4ge307XG4gICAgdGhpcy5va2F5QnV0dG9uLmNsaWNrKCgpID0+IHtcbiAgICAgICAgdGhpcy55ZXMoKTtcbiAgICAgICAgdGhpcy50YWcubW9kYWwoXCJoaWRlXCIpO1xuICAgIH0pO1xufVxuXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnRhZy5tb2RhbChcImhpZGVcIik7XG59O1xuXG4vKipcbiAqIEEgc2ltcGxlIGV4dGVybmFsbHkgYXZhaWxhYmxlIGZ1bmN0aW9uIGZvciBwb3BwaW5nIHVwIGEgZGlhbG9nXG4gKiBtZXNzYWdlLiBUaGlzIG1lbnUgd2lsbCBiZSBkcmFnZ2FibGUgYnkgaXRzIHRpdGxlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0aXRsZSAtIFRoZSB0aXRsZSBvZiB0aGUgbWVzc2FnZSBkaWFsb2cuIENhbiBoYXZlIEhUTUwuXG4gKiBAcGFyYW0ge1N0cmluZ30gYm9keSAtIFRoZSBib2R5IG9mIHRoZSBtZXNzYWdlIGRpYWxvZy4gQ2FuIGhhdmUgSFRNTC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uY2xvc2UgLSBBIGZ1bmN0aW9uIHRvIGJlIHJ1biB3aGVuIHRoZSB1c2VyIGNsb3NlcyB0aGUgZGlhbG9nLlxuICovXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKHRpdGxlLCBib2R5LCBvbmNsb3NlKSB7XG4gICAgdGhpcy50aXRsZVRhZy5odG1sKHRpdGxlKTtcbiAgICB0aGlzLmJvZHlUYWcuaHRtbChib2R5KTtcbiAgICB0aGlzLnRhZy5tb2RhbChcInNob3dcIik7XG4gICAgdGhpcy5va2F5QnV0dG9uLmhpZGUoKTtcbiAgICB0aGlzLnRhZy5kcmFnZ2FibGUoe1xuICAgICAgICBcImhhbmRsZVwiOiBcIi5tb2RhbC10aXRsZVwiXG4gICAgfSk7XG5cbiAgICB0aGlzLnRhZy5vbihcImhpZGRlbi5icy5tb2RhbFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAob25jbG9zZSAhPT0gdW5kZWZpbmVkICYmIG9uY2xvc2UgIT09IG51bGwpIHtcbiAgICAgICAgICAgIG9uY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuQmxvY2tQeURpYWxvZy5wcm90b3R5cGUuY29uZmlybSA9IGZ1bmN0aW9uICh0aXRsZSwgYm9keSwgeWVzLCBubywgeWVzVGV4dCkge1xuICAgIGlmICh5ZXNUZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgeWVzVGV4dCA9IFwiT2theVwiO1xuICAgIH1cbiAgICB0aGlzLnNob3codGl0bGUsIGJvZHksIG5vKTtcbiAgICB0aGlzLnllcyA9IHllcztcbiAgICB0aGlzLm9rYXlCdXR0b24uc2hvdygpLmh0bWwoeWVzVGV4dCk7XG4gICAgLy8gVE9ETzogYWRkIG9rYXkgYnV0dG9uIGFuZCBjYW5jZWwgYnV0dG9uXG59O1xuXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5BU1NJR05NRU5UX1ZFUlNJT05fQ0hBTkdFRCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNvbmZpcm0oXCJBc3NpZ25tZW50IENoYW5nZWRcIiwgXCJZb3VyIGluc3RydWN0b3IgaGFzIG1hZGUgY2hhbmdlcyB0byB0aGlzIGFzc2lnbm1lbnQuIFdvdWxkIHlvdSBsaWtlIHRvIHJlbG9hZD8gQWxsIHlvdXIgd29yayBoYXMgYmVlbiBzYXZlZC5cIiwpO1xufTtcblxuQmxvY2tQeURpYWxvZy5wcm90b3R5cGUuRVJST1JfTE9BRElOR19BU1NJR05NTkVOVCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICB0aGlzLnNob3coXCJFcnJvciBMb2FkaW5nIEFzc2lnbm1lbnRcIiwgYEJsb2NrUHkgZW5jb3VudGVyZWQgYW4gZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgYXNzaWdubWVudC48YnI+XG5QbGVhc2UgcmVsb2FkIHRoZSBwYWdlIGFuZCB0cnkgYWdhaW4uPGJyPlJlc3BvbnNlIGZyb20gc2VydmVyIHdhczo8YnI+PHByZT4ke3JlYXNvbn08L3ByZT5gLCk7XG59O1xuXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5TQ1JFRU5TSE9UX0JMT0NLUyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUT0RPXG59O1xuXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5FUlJPUl9VUERBVElOR19TVUJNSVNTSU9OX1NUQVRVUyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNob3coXCJFcnJvciBVcGRhdGluZyBTdWJtaXNzaW9uIFN0YXR1c1wiLCBgQmxvY2tQeSBlbmNvdW50ZXJlZCBhbiBlcnJvciB3aGlsZSB1cGRhdGluZyB5b3VyIHN1Ym1pc3Npb24gc3RhdHVzLjxicj5cblBsZWFzZSByZWxvYWQgdGhlIHBhZ2UgYW5kIHRyeSBhZ2Fpbi5gKTtcbn07XG5cbkJsb2NrUHlEaWFsb2cucHJvdG90eXBlLkVSUk9SX0xPQURJTkdfSElTVE9SWSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNob3coXCJFcnJvciBMb2FkaW5nIEhpc3RvcnlcIiwgYEJsb2NrUHkgZW5jb3VudGVyZWQgYW4gZXJyb3Igd2hpbGUgbG9hZGluZyB5b3VyIGhpc3RvcnkuPGJyPlxuUGxlYXNlIHJlbG9hZCB0aGUgcGFnZSBhbmQgdHJ5IGFnYWluLmApO1xufTtcbiIsImltcG9ydCB7RWRpdG9yc30gZnJvbSBcIi4uL2VkaXRvcnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGxvYWRGaWxlKG1vZGVsLCBldmVudCkge1xyXG4gICAgbGV0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgbGV0IGZpbGVzID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xyXG4gICAgZmlsZVJlYWRlci5vbmxvYWQgPSAoZSA9PlxyXG4gICAgICAgIG1vZGVsLnVpLmVkaXRvcnMuY3VycmVudCgpLnVwbG9hZEZpbGUoZSlcclxuICAgICk7XHJcbiAgICBmaWxlUmVhZGVyLmZpbGVOYW1lID0gZmlsZXNbMF0ubmFtZTtcclxuICAgIGZpbGVSZWFkZXIucmVhZEFzVGV4dChmaWxlc1swXSk7XHJcbiAgICBldmVudC50YXJnZXQudmFsdWUgPSBcIlwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2x1Z2dpZnkodGV4dCkge1xyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvW15hLXowLTldL2dpLCBcIl9cIikudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRvd25sb2FkRmlsZShtb2RlbCwgZXZlbnQpIHtcclxuICAgIGxldCB7bmFtZSwgZXh0ZW5zaW9uLCBjb250ZW50cywgbWltZXR5cGV9ID0gbW9kZWwudWkuZWRpdG9ycy5jdXJyZW50KCkuZG93bmxvYWRGaWxlKCk7XHJcbiAgICAvLyBNYWtlIHNhZmVcclxuICAgIG5hbWUgPSBzbHVnZ2lmeShuYW1lKTtcclxuICAgIG5hbWUgPSBuYW1lICsgZXh0ZW5zaW9uO1xyXG4gICAgLy8gTWFrZSB0aGUgZGF0YSBkb3dubG9hZCBhcyBhIGZpbGVcclxuICAgIGxldCBibG9iID0gbmV3IEJsb2IoW2NvbnRlbnRzXSwge3R5cGU6IG1pbWV0eXBlfSk7XHJcbiAgICBpZiAod2luZG93Lm5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKSB7XHJcbiAgICAgICAgd2luZG93Lm5hdmlnYXRvci5tc1NhdmVCbG9iKGJsb2IsIG5hbWUpO1xyXG4gICAgfSBlbHNle1xyXG4gICAgICAgIGxldCB0ZW1wb3JhcnlEb3dubG9hZExpbmsgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgdGVtcG9yYXJ5RG93bmxvYWRMaW5rLmhyZWYgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICB0ZW1wb3JhcnlEb3dubG9hZExpbmsuZG93bmxvYWQgPSBuYW1lO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGVtcG9yYXJ5RG93bmxvYWRMaW5rKTtcclxuICAgICAgICB0ZW1wb3JhcnlEb3dubG9hZExpbmsuY2xpY2soKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRlbXBvcmFyeURvd25sb2FkTGluayk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBYnN0cmFjdEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xyXG5cclxuICAgICAgICB0aGlzLmZpbGVTeXN0ZW0gPSBtYWluLmNvbXBvbmVudHMuZmlsZVN5c3RlbTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZpbGUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUZpbGUoKSB7XHJcbiAgICAgICAgdGhpcy5maWxlU3lzdGVtLmRlbGV0ZUZpbGUodGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoXCJhbnN3ZXIucHlcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZWRpdG9ycy5jaGFuZ2VFZGl0b3IoXCJhbnN3ZXIucHlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25GaWxlRGVsZXRlZCgpIHtcclxuICAgICAgICAvLyBUT0RPOiBTd2l0Y2ggdG8gdGhlIHByZXZpb3VzIGZpbGUgaW5zdGVhZCBvZiBhIGRlZmF1bHQgZmlsZVxyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmZpbGVuYW1lKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmVkaXRvcnMuY2hhbmdlRWRpdG9yKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRmlsZVVwZGF0ZWQoZmlsZSkge1xyXG4gICAgICAgIGlmIChmaWxlLmZpbGVuYW1lID09PSB0aGlzLmZpbGVuYW1lKSB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5maWxlID0gZmlsZTtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZWRpdG9ycy5jaGFuZ2VFZGl0b3IodGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5maWxlU3lzdGVtLnN0b3BXYXRjaGluZ0ZpbGUodGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgIC8vdGhpcy50cmFja0N1cnJlbnRGaWxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRyYWNrQ3VycmVudEZpbGUoKSB7XHJcbiAgICAgICAgdGhpcy5maWxlU3lzdGVtLndhdGNoRmlsZSh0aGlzLmZpbGVuYW1lLCB7XHJcbiAgICAgICAgICAgIHVwZGF0ZWQ6IHRoaXMub25GaWxlVXBkYXRlZC5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBkZWxldGVkOiB0aGlzLm9uRmlsZURlbGV0ZWQuYmluZCh0aGlzKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gbmV3RmlsZW5hbWU7XHJcbiAgICAgICAgdGhpcy5maWxlID0gdGhpcy5maWxlU3lzdGVtLmdldEZpbGUobmV3RmlsZW5hbWUpO1xyXG4gICAgICAgIHRoaXMudHJhY2tDdXJyZW50RmlsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuZXdGaWxlbmFtZSAtIHRoZSBmaWxlbmFtZSB0aGF0IHRoZSBvdGhlciBlZGl0b3Igd2lsbCBiZSBzd2l0Y2hpbmcgdG9cclxuICAgICAqIEBwYXJhbSBvbGRFZGl0b3JcclxuICAgICAqIEBwYXJhbSBuZXdFZGl0b3JcclxuICAgICAqL1xyXG4gICAgZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpIHtcclxuICAgICAgICB0aGlzLmZpbGVTeXN0ZW0uc3RvcFdhdGNoaW5nRmlsZSh0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICB0aGlzLmZpbGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHVwbG9hZEZpbGUoZXZlbnQpIHtcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSBldmVudC50YXJnZXQuZmlsZU5hbWU7XHJcbiAgICAgICAgbGV0IGNvbnRlbnRzID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICB0aGlzLmZpbGUuaGFuZGxlKGNvbnRlbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICBkb3dubG9hZEZpbGUoKSB7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gRWRpdG9ycy5wYXJzZUZpbGVuYW1lKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5hbWU6IGZpbGVuYW1lLm5hbWUsXHJcbiAgICAgICAgICAgIGV4dGVuc2lvbjogZmlsZW5hbWUudHlwZSxcclxuICAgICAgICAgICAgY29udGVudHM6IHRoaXMuZmlsZS5oYW5kbGUoKSxcclxuICAgICAgICAgICAgbWltZXR5cGU6IFwidGV4dC9wbGFpblwiXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufSIsImltcG9ydCB7QWJzdHJhY3RFZGl0b3J9IGZyb20gXCIuL2Fic3RyYWN0X2VkaXRvclwiO1xyXG5pbXBvcnQge0Rpc3BsYXlNb2Rlc30gZnJvbSBcIi4vcHl0aG9uXCI7XHJcblxyXG5jb25zdCBBU1NJR05NRU5UX1NFVFRJTkdTID0gW1xyXG4gICAgW1widG9vbGJveFwiLCBcInRvb2xib3hcIiwgXCJub3JtYWxcIiwgXCJ0b29sYm94XCIsIFwiV2hpY2ggdmVyc2lvbiBvZiB0aGUgdG9vbGJveCB0byBwcmVzZW50IHRvIHRoZSB1c2VyLlwiXSxcclxuICAgIFtcInBhc3Njb2RlXCIsIFwicGFzc2NvZGVcIiwgXCJcIiwgXCJzdHJpbmdcIiwgXCJBIHN0cmluZyB0aGF0IHRoZSB1c2VyIG11c3QgZW50ZXIgdG8gYWNjZXNzIHRoZSBwcm9ibGVtLiBJZiBibGFuaywgdGhlbiBubyBwYXNzY29kZSBpcyBwcm9tcHRlZC5cIl0sXHJcbiAgICAvL1tcInRvb2xib3hMZXZlbFwiLCBcInRvb2xib3hfbGV2ZWxcIiwgXCJub3JtYWxcIiwgXCJ0b29sYm94XCIsIFwiSU5DT01QTEVURTogV2hhdCBsZXZlbCBvZiB0b29sYm94IHRvIHByZXNlbnQgdG8gdGhlIHVzZXIgKGhpZGluZyBhbmQgc2hvd2luZyBjYXRlZ29yaWVzKS5cIl0sXHJcbiAgICBbXCJzdGFydFZpZXdcIiwgXCJzdGFydF92aWV3XCIsIERpc3BsYXlNb2Rlcy5TUExJVCwgRGlzcGxheU1vZGVzLCBcIlRoZSBQeXRob24gZWRpdG9yIG1vZGUgdG8gc3RhcnQgaW4gd2hlbiB0aGUgc3R1ZGVudCBzdGFydHMgdGhlIHByb2JsZW0uXCJdLFxyXG4gICAgW1wiZGF0YXNldHNcIiwgXCJkYXRhc2V0c1wiLCBcIlwiLCBcInN0cmluZ1wiLCBcIlRoZSBjdXJyZW50IGxpc3Qgb2YgZGF0YXNldHMgYXZhaWxhYmxlIG9uIGxvYWQgYXMgYSBjb21tYS1zZXBhcmF0ZWQgc3RyaW5nLlwiXSxcclxuICAgIFtcImRpc2FibGVUaW1lb3V0XCIsIFwiZGlzYWJsZV90aW1lb3V0XCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHN0dWRlbnRzIGNvZGUgaXMgYWxsb3dlZCB0byBydW4gd2l0aG91dCB0aW1lb3V0cyAocG90ZW50aWFsbHkgYWxsb3dpbmcgaW5maW5pdGUgbG9vcHMpLlwiXSxcclxuICAgIFtcImlzUGFyc29uc1wiLCBcImlzX3BhcnNvbnNcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gdGhpcyBpcyBhIHBhcnNvbidzIHN0eWxlIHF1ZXN0aW9uIChqdW1ibGVkKS5cIl0sXHJcbiAgICBbXCJkaXNhYmxlRmVlZGJhY2tcIiwgXCJkaXNhYmxlX2ZlZWRiYWNrXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIG5vIGluc3RydWN0b3Igc2NyaXB0cyBhcmUgcnVuIChlLmcuLCBvbl9ydW4gYW5kIG9uX2V2YWwpLlwiXSxcclxuICAgIFtcImRpc2FibGVJbnN0cnVjdG9yUnVuXCIsIFwiZGlzYWJsZV9pbnN0cnVjdG9yX3J1blwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0aGUgaW5zdHJ1Y3RvciBvbl9ydW4gd2lsbCBub3QgYXV0b21hdGljYWxseSBydW4gdGhlIHN0dWRlbnRzJyBjb2RlLiBUaGlzIHN0aWxsIHJ1bnMgdGhlIHN0dWRlbnRzJyBjb2RlLlwiXSxcclxuICAgIFtcImRpc2FibGVTdHVkZW50UnVuXCIsIFwiZGlzYWJsZV9zdHVkZW50X3J1blwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0aGUgcnVuIGJ1dHRvbiBubyBsb25nZXIgcnVuIHRoZSBzdHVkZW50cycgY29kZS4gVGhpcyBzdGlsbCBydW5zIHRoZSBpbnN0cnVjdG9yJ3MgZmVlZGJhY2sgb25fcnVuIHNjcmlwdC5cIl0sXHJcbiAgICBbXCJkaXNhYmxlVGlmYVwiLCBcImRpc2FibGVfdGlmYVwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBkbyBub3QgYXV0b21hdGljYWxseSBydW4gVGlmYSAod2hpY2ggY2FuIGJlIHNsb3cpLlwiXSxcclxuICAgIFtcImRpc2FibGVUcmFjZVwiLCBcImRpc2FibGVfdHJhY2VcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gdGhlIHN0dWRlbnRzIGNvZGUgd2lsbCBub3QgaGF2ZSBpdHMgZXhlY3V0aW9uIHRyYWNlZCAobm8gdmFyaWFibGVzIHJlY29yZGVkLCBubyBjb3ZlcmFnZSB0cmFja2VkKS5cIl0sXHJcbiAgICBbXCJkaXNhYmxlRWRpdFwiLCBcImNhbl9lZGl0XCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHRoZSBzdHVkZW50cycgZmlsZSB3aWxsIG5vdCBiZSBlZGl0YWJsZSBhdCBhbGwuXCJdLFxyXG4gICAgW1wiZW5hYmxlQmxvY2tzXCIsIFwiY2FuX2Jsb2Nrc1wiLCB0cnVlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHRoZSBzdHVkZW50IGNhbm5vdCBlZGl0IHRoZSBibG9jayBpbnRlcmZhY2UgKGFsdGhvdWdoIGl0IGlzIHZpc2libGUpLlwiXSxcclxuICAgIFtcImNhbkNsb3NlXCIsIFwiY2FuX2Nsb3NlXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHRoZSBzdHVkZW50IHNob3VsZCBtYXJrIHRoZWlyIHN1Ym1pc3Npb24gY2xvc2VkIHdoZW4gdGhleSBhcmUgZG9uZS4gVGhlcmUgaXMgbm8gd2F5IHRvIGZvcmNlIGEgc3R1ZGVudCB0byBkbyBzby4gVW5saWtlIFJldmlld2VkLCB0aGlzIHN0aWxsIHN1Ym1pdHMgdGhlIGNvcnJlY3RuZXNzLlwiXSxcclxuICAgIFtcIm9ubHlJbnRlcmFjdGl2ZVwiLCBcIm9ubHlfaW50ZXJhY3RpdmVcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZSBlZGl0b3JzIGFyZSBoaWRkZW4sIHRoZSBwcm9ncmFtIGlzIGF1dG9tYXRpY2FsbHkgcnVuLCBhbmQgdGhlbiB0aGUgY29uc29sZSBlbnRlcnMgRXZhbCBtb2RlIChpbnRlcmFjdGl2ZSkuXCJdLFxyXG4gICAgW1wib25seVVwbG9hZHNcIiwgXCJvbmx5X3VwbG9hZHNcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIHVuY2hlY2tlZCwgdGhlbiB0aGUgc3R1ZGVudHMnIGZpbGUgd2lsbCBub3QgYmUgZGlyZWN0bHkgZWRpdGFibGUgKHRoZXkgd2lsbCBoYXZlIHRvIHVwbG9hZCBzdWJtaXNzaW9ucykuXCJdLFxyXG4gICAgLy8gV2hhdCBtZW51cy9mZWVkYmFjayB0byBzaG93IGFuZCBoaWRlXHJcbiAgICBbXCJoaWRlU3VibWlzc2lvblwiLCBcImhpZGVfc3VibWlzc2lvblwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBzdHVkZW50cyB3aWxsIG5vdCBiZSBhYmxlIHRvIHNlZSB0aGVpciBzdWJtaXNzaW9uJ3MgY29kZSBvciBoaXN0b3J5IG9uIENhbnZhcy5cIl0sXHJcbiAgICBbXCJoaWRlRmlsZXNcIiwgXCJoaWRlX2ZpbGVzXCIsIHRydWUsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gc3R1ZGVudHMgd2lsbCBub3Qgc2VlIHRoZSBWaWV3IEZpbGVzIHRvb2xiYXIuXCJdLFxyXG4gICAgW1wiaGlkZVF1ZXVlZElucHV0c1wiLCBcImhpZGVfcXVldWVkX2lucHV0c1wiLCB0cnVlLCBcImJvb2xcIiwgXCJJTkNPTVBMRVRFOiBJZiB1bmNoZWNrZWQsIHRoZW4gdGhlIHN0dWRlbnRzIGNhbiBhY2Nlc3MgdGhlIHF1ZXVlZCBpbnB1dHMgYm94IChtYWtlcyByZXBlYXRlZCBkZWJ1Z2dpbmcgZWFzaWVyIGZvciB0aGUgaW5wdXQgZnVuY3Rpb24pLlwiXSxcclxuICAgIFtcImhpZGVFZGl0b3JzXCIsIFwiaGlkZV9lZGl0b3JzXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIGFsbCBvZiB0aGUgZWRpdG9ycyBhcmUgaGlkZGVuLlwiXSxcclxuICAgIFtcImhpZGVBbGxcIiwgXCJoaWRlX2FsbFwiLCBmYWxzZSwgXCJib29sXCIsIFwiSU5DT01QTEVURTogSWYgY2hlY2tlZCwgdGhlbiB0aGUgZW50aXJlIGludGVyZmFjZSBpcyBoaWRkZW4uXCJdLFxyXG4gICAgW1wiaGlkZUV2YWx1YXRlXCIsIFwiaGlkZV9ldmFsdWF0ZVwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0aGUgRXZhbHVhdGUgYnV0dG9uIGlzIG5vdCBzaG93biBvbiB0aGUgY29uc29sZS5cIl0sXHJcbiAgICBbXCJoaWRlSW1wb3J0RGF0YXNldHNCdXR0b25cIiwgXCJoaWRlX2ltcG9ydF9kYXRhc2V0c19idXR0b25cIiwgdHJ1ZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBzdHVkZW50cyBjYW5ub3Qgc2VlIHRoZSBpbXBvcnQgZGF0YXNldHMgYnV0dG9uLlwiXSxcclxuICAgIC8vIFRPRE86IEZpeCB0aGlzIG9uZSB0byBiZSBzZXR0YWJsZVxyXG4gICAgW1wiaGlkZUltcG9ydFN0YXRlbWVudHNcIiwgXCJoaWRlX2ltcG9ydF9zdGF0ZW1lbnRzXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJTkNPTVBMRVRFOiBJZiBjaGVja2VkLCBjZXJ0YWluIGtpbmRzIG9mIGltcG9ydCBzdGF0ZW1lbnRzIChtYXRwbG90bGliLCB0dXJ0bGUsIGRhdGFzZXRzKSBhcmUgbm90IHNob3duIGluIHRoZSBibG9jayBpbnRlcmZhY2UuXCJdLFxyXG4gICAgW1wiaGlkZUNvdmVyYWdlQnV0dG9uXCIsIFwiaGlkZV9jb3ZlcmFnZV9idXR0b25cIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklOQ09NUExFVEU6IElmIGNoZWNrZWQsIHRoZSBjb3ZlcmFnZSBidXR0b24gaXMgbm90IHNob3duLlwiXSxcclxuICAgIFtcInNhdmVUdXJ0bGVPdXRwdXRcIiwgXCJzYXZlX3R1cnRsZV9vdXRwdXRcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gdHVydGxlIG91dHB1dCBpcyBzYXZlZCB3aGVuZXZlciB0aGUgcHJvZ3JhbSB1c2VzIGl0LlwiXSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIGdldERvY3VtZW50YXRpb24obmFtZSkge1xyXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgQVNTSUdOTUVOVF9TRVRUSU5HUy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChBU1NJR05NRU5UX1NFVFRJTkdTW2ldWzBdID09PSBuYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBBU1NJR05NRU5UX1NFVFRJTkdTW2ldWzRdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kIGZvciBmaWVsZFwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlU3RhcnRWaWV3VGFiKG5hbWUsIGljb24sIG1vZGUpIHtcclxuICAgIHJldHVybiBgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBibG9ja3B5LW1vZGUtc2V0LWJsb2Nrc1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IGFzc2lnbm1lbnQuc2V0dGluZ3Muc3RhcnRWaWV3KCkgPT09ICcke21vZGV9J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBhc3NpZ25tZW50LnNldHRpbmdzLnN0YXJ0Vmlldy5iaW5kKCRkYXRhLCAnJHttb2RlfScpXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLSR7aWNvbn0nPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYmxvY2tweS1zdGFydC12aWV3LXNldFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGNoZWNrZWQ+ICR7bmFtZX1cclxuICAgICAgICAgICAgPC9sYWJlbD5gO1xyXG59XHJcblxyXG5jb25zdCBBU1NJR05NRU5UX1NFVFRJTkdTX0JPT0xFQU5fQ09NUE9ORU5UU19IVE1MID0gQVNTSUdOTUVOVF9TRVRUSU5HU1xyXG4gICAgLy8gT25seSBoYW5kbGUgdGhlIHNpbXBsZSBib29sZWFucyB0aGlzIHdheVxyXG4gICAgLmZpbHRlcigoc2V0dGluZykgPT4gc2V0dGluZ1szXSA9PT0gXCJib29sXCIpXHJcbiAgICAubWFwKChzZXR0aW5nKSA9PiB7XHJcbiAgICAgICAgbGV0IHByZXR0eU5hbWUgPSBzZXR0aW5nWzFdLnNwbGl0KFwiX1wiKS5tYXAod29yZD0+KHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrd29yZC5zbGljZSgxKSkpLmpvaW4oXCIgXCIpO1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy0ke3NldHRpbmdbMF19XCI+JHtwcmV0dHlOYW1lfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy0ke3NldHRpbmdbMF19XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjaGVja2VkOiBhc3NpZ25tZW50LnNldHRpbmdzLiR7c2V0dGluZ1swXX1cIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTlcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtzZXR0aW5nWzRdfVxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgIH0pLmpvaW4oXCJcXG5cXG5cIik7XHJcblxyXG5leHBvcnQgY29uc3QgQVNTSUdOTUVOVF9TRVRUSU5HU19FRElUT1JfSFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJibG9ja3B5LXZpZXctc2V0dGluZ3NcIj5cclxuICAgIFxyXG4gICAgPGZvcm0+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5zZXR0aW5ncy5zYXZlXCI+U2F2ZSBjaGFuZ2VzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJibG9ja3B5LXNldHRpbmdzLW5hbWVcIiBjbGFzcz1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsIHRleHQtcmlnaHRcIj5OYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLW5hbWVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmFsdWU6IGFzc2lnbm1lbnQubmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBUaGUgc3R1ZGVudC1mYWNpbmcgbmFtZSBvZiB0aGUgYXNzaWdubWVudC4gQXNzaWdubWVudHMgd2l0aGluIGEgZ3JvdXAgYXJlIG9yZGVyZWQgYWxwaGFiZXRpY2FsbHlcclxuICAgICAgICAgICAgICAgICAgICBieSB0aGVpciBuYW1lLCBzbyB5b3UgbWF5IHdhbnQgdG8gdXNlIGEgbmFtaW5nIHNjaGVtZSBsaWtlIFwiIzQzLjUpIFdoYXRldmVyXCIuXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtdXJsXCIgY2xhc3M9XCJjb2wtc20tMiBjb2wtZm9ybS1sYWJlbCB0ZXh0LXJpZ2h0XCI+VVJMOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLXVybFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2YWx1ZTogYXNzaWdubWVudC51cmxcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVGhlIGNvdXJzZS11bmlxdWUgVVJMIHRoYXQgY2FuIGJlIHVzZWQgdG8gY29uc2lzdGVudGx5IHJlZmVyIHRvIHRoaXMgYXNzaWdubWVudC4gXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJibG9ja3B5LXNldHRpbmdzLXB1YmxpY1wiPlB1YmxpYzo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtcHVibGljXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjaGVja2VkOiBhc3NpZ25tZW50LnB1YmxpY1wiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBJZiBub3QgcHVibGljLCB1c2VycyBvdXRzaWRlIG9mIHRoZSBjb3Vyc2Ugd2lsbCBub3QgYmUgYWJsZSB0byBzZWUgdGhlIGFzc2lnbm1lbnQgaW4gY291cnNlIGxpc3RpbmdzLlxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1oaWRkZW5cIj5IaWRkZW46PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLWhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2hlY2tlZDogYXNzaWdubWVudC5oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTlcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSWYgaGlkZGVuLCBzdHVkZW50cyB3aWxsIG5vdCBiZSBhYmxlIHRvIHNlZSB0aGVpciBncmFkZSB3aGlsZSB3b3JraW5nIG9uIHRoZSBhc3NpZ25tZW50LlxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1yZXZpZXdlZFwiPlJldmlld2VkOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy1yZXZpZXdlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2hlY2tlZDogYXNzaWdubWVudC5yZXZpZXdlZFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBJZiByZXZpZXdlZCwgdGhlIGFzc2lnbm1lbnQgbmVlZCB0byBiZSBjb21tZW50ZWQgdXBvbiBhbmQgcmVncmFkZWQgYnkgdGhlIHN0YWZmIGFmdGVyIHN1Ym1pc3Npb24uXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJibG9ja3B5LXNldHRpbmdzLXJldmlld2VkXCI+U3RhcnRpbmcgVmlldzo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGJ0bi1ncm91cC10b2dnbGUgbXItMlwiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7bWFrZVN0YXJ0Vmlld1RhYihcIkJsb2Nrc1wiLCBcInRoLWxhcmdlXCIsIERpc3BsYXlNb2Rlcy5CTE9DSyl9XHJcbiAgICAgICAgICAgICAgICAgICAgJHttYWtlU3RhcnRWaWV3VGFiKFwiU3BsaXRcIiwgXCJjb2x1bW5zXCIsIERpc3BsYXlNb2Rlcy5TUExJVCl9XHJcbiAgICAgICAgICAgICAgICAgICAgJHttYWtlU3RhcnRWaWV3VGFiKFwiVGV4dFwiLCBcImFsaWduLWxlZnRcIiwgRGlzcGxheU1vZGVzLlRFWFQpfVxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS03XCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7Z2V0RG9jdW1lbnRhdGlvbihcInN0YXJ0Vmlld1wiKX1cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1pcC1yYW5nZXNcIiBjbGFzcz1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsIHRleHQtcmlnaHRcIj5JUCBSYW5nZXM6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtaXAtcmFuZ2VzXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZhbHVlOiBhc3NpZ25tZW50LmlwUmFuZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFByb3ZpZGUgYSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBJUCBBZGRyZXNzZXMgdGhhdCB3aWxsIGJlIGV4cGxpY2l0bHkgYWxsb3dlZC4gSWYgYmxhbmssXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbiBhbGwgYWRkcmVzc2VzIGFyZSBhbGxvd2VkLiBJZiBhbiBhZGRyZXNzIHN0YXJ0cyB3aXRoIDxjb2RlPl48L2NvZGU+IHRoZW4gaXQgaXQgaXMgZXhwbGljaXRseVxyXG4gICAgICAgICAgICAgICAgICAgIGJsYWNrbGlzdGVkLCBidXQgdGhhdCBjYW4gYmUgb3ZlcnJpZGRlbiBpbiB0dXJuIHdpdGggYSA8Y29kZT4hPC9jb2RlPi4gQWRkcmVzc2VzIGNhbiBhbHNvXHJcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZSBhIGJpdCBtYXNrIHRvIGFsbG93IGEgcmFuZ2Ugb2YgYWRkcmVzc2VzLlxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJibG9ja3B5LXNldHRpbmdzLXBhc3Njb2RlXCIgY2xhc3M9XCJjb2wtc20tMiBjb2wtZm9ybS1sYWJlbCB0ZXh0LXJpZ2h0XCI+UGFzc2NvZGU6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtcGFzc2NvZGVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmFsdWU6IGFzc2lnbm1lbnQuc2V0dGluZ3MucGFzc2NvZGVcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtnZXREb2N1bWVudGF0aW9uKFwicGFzc2NvZGVcIil9XHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtZGF0YXNldHNcIiBjbGFzcz1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsIHRleHQtcmlnaHRcIj5QcmVsb2FkZWQgRGF0YXNldHM6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtZGF0YXNldHNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmFsdWU6IGFzc2lnbm1lbnQuc2V0dGluZ3MuZGF0YXNldHNcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtnZXREb2N1bWVudGF0aW9uKFwiZGF0YXNldHNcIil9XHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtdG9vbGJveFwiIGNsYXNzPVwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWwgdGV4dC1yaWdodFwiPkJsb2NrIFRvb2xib3g6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy10b29sYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2YWx1ZTogYXNzaWdubWVudC5zZXR0aW5ncy50b29sYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm9ybWFsXCI+Tm9ybWFsIFRvb2xib3g8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjdFwiPkNUQFZUIFRvb2xib3g8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtaW5pbWFsXCI+TWluaW1hbCBTZXQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmdWxsXCI+QWxsIEJsb2Nrczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7Z2V0RG9jdW1lbnRhdGlvbihcInRvb2xib3hcIil9XHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICAke0FTU0lHTk1FTlRfU0VUVElOR1NfQk9PTEVBTl9DT01QT05FTlRTX0hUTUx9XHJcbiAgICA8L2Zvcm0+XHJcbiAgICBcclxuICAgIDwvZGl2PlxyXG5gO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVBc3NpZ25tZW50U2V0dGluZ3MobW9kZWwpIHtcclxuICAgIGxldCBzZXR0aW5ncyA9IHt9O1xyXG4gICAgQVNTSUdOTUVOVF9TRVRUSU5HUy5mb3JFYWNoKHNldHRpbmcgPT4ge1xyXG4gICAgICAgIGxldCBjbGllbnROYW1lID0gc2V0dGluZ1swXSwgc2VydmVyTmFtZSA9IHNldHRpbmdbMV0sIGRlZmF1bHRWYWx1ZSA9IHNldHRpbmdbMl07XHJcbiAgICAgICAgbGV0IHZhbHVlID0gbW9kZWwuYXNzaWdubWVudC5zZXR0aW5nc1tjbGllbnROYW1lXSgpO1xyXG4gICAgICAgIC8vIE9ubHkgc3RvcmUgdGhpcyBzZXR0aW5nIGlmIGl0cyBkaWZmZXJlbnQgZnJvbSB0aGUgZGVmYXVsdFxyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gZGVmYXVsdFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHNldHRpbmdzW3NlcnZlck5hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEFzc2lnbm1lbnRTZXR0aW5ncyhtb2RlbCwgc2V0dGluZ3MpIHtcclxuICAgIGlmIChzZXR0aW5ncykge1xyXG4gICAgICAgIHNldHRpbmdzID0gSlNPTi5wYXJzZShzZXR0aW5ncyk7XHJcbiAgICAgICAgQVNTSUdOTUVOVF9TRVRUSU5HUy5mb3JFYWNoKHNldHRpbmcgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY2xpZW50TmFtZSA9IHNldHRpbmdbMF0sIHNlcnZlck5hbWUgPSBzZXR0aW5nWzFdO1xyXG4gICAgICAgICAgICBpZiAoc2VydmVyTmFtZSBpbiBzZXR0aW5ncykge1xyXG4gICAgICAgICAgICAgICAgbW9kZWwuYXNzaWdubWVudC5zZXR0aW5nc1tjbGllbnROYW1lXShzZXR0aW5nc1tzZXJ2ZXJOYW1lXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzW2NsaWVudE5hbWVdKHNldHRpbmdbMl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChzZXR0aW5ncy5zdGFydF92aWV3KSB7XHJcbiAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZShzZXR0aW5ncy5zdGFydF92aWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlQXNzaWdubWVudFNldHRpbmdzTW9kZWwoY29uZmlndXJhdGlvbikge1xyXG4gICAgbGV0IHNldHRpbmdzID0ge307XHJcbiAgICBBU1NJR05NRU5UX1NFVFRJTkdTLmZvckVhY2goc2V0dGluZyA9PiB7XHJcbiAgICAgICAgbGV0IGNsaWVudE5hbWUgPSBzZXR0aW5nWzBdLCBzZXJ2ZXJOYW1lID0gc2V0dGluZ1sxXSwgZGVmYXVsdFZhbHVlID0gc2V0dGluZ1syXSxcclxuICAgICAgICAgICAgZmllbGRUeXBlID0gc2V0dGluZ1szXTtcclxuICAgICAgICBpZiAoY29uZmlndXJhdGlvbltzZXJ2ZXJOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNldHRpbmdzW2NsaWVudE5hbWVdID0ga28ub2JzZXJ2YWJsZShkZWZhdWx0VmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBjb25maWdWYWx1ZSA9IGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LnNldHRpbmdzLlwiK3NlcnZlck5hbWVdO1xyXG4gICAgICAgICAgICBpZiAoZmllbGRUeXBlID09PSBcImJvb2xcIikge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnVmFsdWUgPSBjb25maWdWYWx1ZS50b0xvd2VyQ2FzZSgpID09PSBcInRydWVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXR0aW5nc1tjbGllbnROYW1lXSA9IGtvLm9ic2VydmFibGUoY29uZmlnVmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZXR0aW5ncztcclxufVxyXG5cclxuY2xhc3MgQXNzaWdubWVudFNldHRpbmdzVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZyk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICBzdXBlci5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGUpO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICAvL1RPRE86IHRoaXMudXBkYXRlRWRpdG9yKHRoaXMuZmlsZS5oYW5kbGUoKSk7XHJcbiAgICAgICAgLy8gU3Vic2NyaWJlIHRvIHRoZSByZWxldmFudCBGaWxlXHJcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uID0gdGhpcy5maWxlLmhhbmRsZS5zdWJzY3JpYmUodGhpcy51cGRhdGVFZGl0b3IuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gTm90aWZ5IHJlbGV2YW50IGZpbGUgb2YgY2hhbmdlcyB0byBCTVxyXG4gICAgICAgIHRoaXMuY3VycmVudExpc3RlbmVyID0gdGhpcy51cGRhdGVIYW5kbGUuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgLy9UT0RPOiB0aGlzLmNvZGVNaXJyb3Iub24oXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUVkaXRvcihuZXdDb250ZW50cykge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gVE9ETzogRG8gdXBkYXRlXHJcblxyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhhbmRsZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy90aGlzLmZpbGUuaGFuZGxlKHRoaXMuY29kZU1pcnJvci52YWx1ZSgpKTtcclxuICAgICAgICAgICAgLy8gVE9ETzogVXBkYXRlXHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpIHtcclxuICAgICAgICAvLyBSZW1vdmUgc3Vic2NyaWJlclxyXG4gICAgICAgIC8vdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICAvLyBUT0RPOiB1cGRhdGVcclxuICAgICAgICAvL3RoaXMuY29kZU1pcnJvci5vZmYoXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgICAgIHN1cGVyLmV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBc3NpZ25tZW50U2V0dGluZ3MgPSB7XHJcbiAgICBuYW1lOiBcIkFzc2lnbm1lbnQgU2V0dGluZ3NcIixcclxuICAgIGV4dGVuc2lvbnM6IFtcIiFhc3NpZ25tZW50X3NldHRpbmdzLmJsb2NrcHlcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogQXNzaWdubWVudFNldHRpbmdzVmlldyxcclxuICAgIHRlbXBsYXRlOiBBU1NJR05NRU5UX1NFVFRJTkdTX0VESVRPUl9IVE1MXHJcbn07IiwiaW1wb3J0IHtBYnN0cmFjdEVkaXRvcn0gZnJvbSBcIi4vYWJzdHJhY3RfZWRpdG9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTUFSS0RPV05fRURJVE9SX0hUTUwgPSBgXHJcbiAgICA8dGV4dGFyZWEgY2xhc3M9XCJibG9ja3B5LWVkaXRvci1tYXJrZG93blwiPjwvdGV4dGFyZWE+ICAgIFxyXG5gO1xyXG5cclxuXHJcbmNsYXNzIE1hcmtkb3duRWRpdG9yVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZyk7XHJcbiAgICAgICAgdGhpcy5tZGUgPSBuZXcgRWFzeU1ERSh7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRhZy5maW5kKFwiLmJsb2NrcHktZWRpdG9yLW1hcmtkb3duXCIpWzBdLFxyXG4gICAgICAgICAgICBhdXRvRG93bmxvYWRGb250QXdlc29tZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvcmNlU3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiBcIjUwMHB4XCIsXHJcbiAgICAgICAgICAgIC8vIFRPRE86IGltYWdlVXBsb2FkRnVuY3Rpb25cclxuICAgICAgICAgICAgcmVuZGVyaW5nQ29uZmlnOiB7XHJcbiAgICAgICAgICAgICAgICBjb2RlU3ludGF4SGlnaGxpZ2h0aW5nOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbmRlbnRXaXRoVGFiczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRhYlNpemU6IDQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICBzdXBlci5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IodGhpcy5maWxlLmhhbmRsZSgpKTtcclxuICAgICAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIHJlbGV2YW50IEZpbGVcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24gPSB0aGlzLmZpbGUuaGFuZGxlLnN1YnNjcmliZSh0aGlzLnVwZGF0ZUVkaXRvci5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyBOb3RpZnkgcmVsZXZhbnQgZmlsZSBvZiBjaGFuZ2VzIHRvIEJNXHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGlzdGVuZXIgPSB0aGlzLnVwZGF0ZUhhbmRsZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubWRlLmNvZGVtaXJyb3Iub24oXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgICAgIGlmIChvbGRFZGl0b3IgIT09IHRoaXMpIHtcclxuICAgICAgICAgICAgLy8gRGVsYXkgc28gdGhhdCBldmVyeXRoaW5nIGlzIHJlbmRlcmVkXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5tZGUuY29kZW1pcnJvci5yZWZyZXNoLmJpbmQodGhpcy5tZGUuY29kZW1pcnJvciksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVFZGl0b3IobmV3Q29udGVudHMpIHtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWRlLnZhbHVlKG5ld0NvbnRlbnRzKTtcclxuICAgICAgICAgICAgdGhpcy5tZGUuY29kZW1pcnJvci5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSGFuZGxlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGUuaGFuZGxlKHRoaXMubWRlLnZhbHVlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHN1YnNjcmliZXJcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMubWRlLmNvZGVtaXJyb3Iub2ZmKFwiY2hhbmdlXCIsIHRoaXMuY3VycmVudExpc3RlbmVyKTtcclxuICAgICAgICBzdXBlci5leGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTWFya2Rvd25FZGl0b3IgPSB7XHJcbiAgICBuYW1lOiBcIk1hcmtkb3duXCIsXHJcbiAgICBleHRlbnNpb25zOiBbXCIubWRcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogTWFya2Rvd25FZGl0b3JWaWV3LFxyXG4gICAgdGVtcGxhdGU6IE1BUktET1dOX0VESVRPUl9IVE1MXHJcbn07IiwiLyoqXHJcbiAqIFRPRE86IHJlbmFtZSBmaWxlcywgbWFudWFsIHNhdmUsIHRhZ3MsIHNhbXBsZV9zdWJtaXNzaW9ucywgb25fZXZhbCwgbm9uLWJ1aWx0aW4gZmlsZXNcclxuICogVE9ETzogaW1wb3J0IGRhdGEsIGhpc3RvcnksIHJ1biwgdXJsX2RhdGEsIGFzc2lnbm1lbnRfc2V0dGluZ3MsIHBhcnNvbnNfbW9kZVxyXG4gKiBUT0RPOiBkZWxldGUgYmVjb21lcyBcImNsZWFyXCIgZm9yIGluc3RydWN0b3IgZmlsZXNcclxuICovXHJcblxyXG4vKipcclxuICpcclxuICogQGVudW0ge3N0cn1cclxuICovXHJcbmltcG9ydCB7QWJzdHJhY3RFZGl0b3IsIHNsdWdnaWZ5fSBmcm9tIFwiLi9hYnN0cmFjdF9lZGl0b3JcIjtcclxuaW1wb3J0IHtISVNUT1JZX1RPT0xCQVJfSFRNTH0gZnJvbSBcIi4uL2hpc3RvcnlcIjtcclxuXHJcbmV4cG9ydCBsZXQgRGlzcGxheU1vZGVzID0ge1xyXG4gICAgQkxPQ0s6IFwiYmxvY2tcIixcclxuICAgIFNQTElUOiBcInNwbGl0XCIsXHJcbiAgICBURVhUOiBcInRleHRcIlxyXG59O1xyXG5cclxuZnVuY3Rpb24gbWFrZVRhYihuYW1lLCBpY29uLCBtb2RlKSB7XHJcbiAgICByZXR1cm4gYDxsYWJlbCBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYmxvY2tweS1tb2RlLXNldC1ibG9ja3NcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBkaXNwbGF5LnB5dGhvbk1vZGUoKSA9PT0gJyR7bW9kZX0nfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLnVwZGF0ZU1vZGUuYmluZCgkZGF0YSwgJyR7bW9kZX0nKVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS0ke2ljb259Jz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktbW9kZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBjaGVja2VkPiAke25hbWV9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+YDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBZVEhPTl9FRElUT1JfSFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJibG9ja3B5LXB5dGhvbi10b29sYmFyIGNvbC1tZC0xMiBidG4tdG9vbGJhclwiXHJcbiAgICAgICAgIHJvbGU9XCJ0b29sYmFyXCIgYXJpYS1sYWJlbD1cIlB5dGhvbiBUb29sYmFyXCI+XHJcblxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiUnVuIEdyb3VwXCI+ICAgICAgICAgXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJsb2NrcHktcnVuXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5leGVjdXRlLnJ1bixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzczogeydibG9ja3B5LXJ1bi1ydW5uaW5nJzogdWkuZXhlY3V0ZS5pc1J1bm5pbmd9XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1wbGF5XCI+PC9zcGFuPiBSdW5cclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgYnRuLWdyb3VwLXRvZ2dsZSBtci0yXCIgZGF0YS10b2dnbGU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgIDwhLS0ga28gaWY6ICRyb290LmFzc2lnbm1lbnQuc2V0dGluZ3MuZW5hYmxlQmxvY2tzKCkgLS0+XHJcbiAgICAgICAgICAgICR7bWFrZVRhYihcIkJsb2Nrc1wiLCBcInRoLWxhcmdlXCIsIERpc3BsYXlNb2Rlcy5CTE9DSyl9XHJcbiAgICAgICAgICAgICR7bWFrZVRhYihcIlNwbGl0XCIsIFwiY29sdW1uc1wiLCBEaXNwbGF5TW9kZXMuU1BMSVQpfVxyXG4gICAgICAgICAgICAke21ha2VUYWIoXCJUZXh0XCIsIFwiYWxpZ24tbGVmdFwiLCBEaXNwbGF5TW9kZXMuVEVYVCl9XHJcbiAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxyXG4gICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJSZXNldCBHcm91cFwiPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5yZXNldFwiPlxyXG4gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLXN5bmNcIj48L3NwYW4+IFJlc2V0XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkltcG9ydCBHcm91cFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMuaW1wb3J0RGF0YXNldFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtY2xvdWQtZG93bmxvYWQtYWx0XCI+PC9zcGFuPiBJbXBvcnQgZGF0YXNldHNcclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLWZpbGUtdXBsb2FkXCI+PC9zcGFuPiBVcGxvYWRcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJibG9ja3B5LXRvb2xiYXItdXBsb2FkXCIgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiZXZlbnQ6IHtjaGFuZ2U6IHVpLmVkaXRvcnMudXBsb2FkfVwiPlxyXG4gICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGRyb3Bkb3duLXRvZ2dsZSBkcm9wZG93bi10b2dnbGUtc3BsaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZXRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+VG9nZ2xlIERyb3Bkb3duPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz0nZHJvcGRvd24taXRlbSBibG9ja3B5LXRvb2xiYXItZG93bmxvYWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLmRvd25sb2FkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1kb3dubG9hZCc+PC9zcGFuPiBEb3dubG9hZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJIaXN0b3J5IEdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLXByZXNzZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24udG9nZ2xlSGlzdG9yeU1vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZTogdWkuZWRpdG9ycy5weXRob24uaXNIaXN0b3J5QXZhaWxhYmxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjc3M6IHsgYWN0aXZlOiBkaXNwbGF5Lmhpc3RvcnlNb2RlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHI6IHsgJ2FyaWEtcHJlc3NlZCc6IGRpc3BsYXkuaGlzdG9yeU1vZGUgfVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtaGlzdG9yeVwiPjwvc3Bhbj4gSGlzdG9yeVxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPCEtLSBGdWxseSBmdW5jdGlvbmFsLCBidXQgYSBsaXR0bGUgdG9vLi4gSW52YXNpdmUgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJGdWxsc2NyZWVuIEdyb3VwXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogZGlzcGxheS5weXRob25Nb2RlKCkgPT09ICd0ZXh0J1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLmZ1bGxzY3JlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLWV4cGFuZC1hcnJvd3MtYWx0XCI+PC9zcGFuPiBGdWxsc2NyZWVuXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIC0tPlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIlNhdmUgR3JvdXBcIlxyXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5lZGl0b3JzLmNhblNhdmVcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1zYXZlXCI+PC9zcGFuPiBTYXZlXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiRGVsZXRlIEdyb3VwXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkuZWRpdG9ycy5jYW5EZWxldGVcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZmlsZXMuZGVsZXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS10cmFzaFwiPjwvc3Bhbj4gRGVsZXRlXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiUmVuYW1lIEdyb3VwXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkuZWRpdG9ycy5jYW5SZW5hbWVcIj5cclxuICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtZmlsZS1zaWduYXR1cmVcIj48L3NwYW4+IFJlbmFtZVxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAke0hJU1RPUllfVE9PTEJBUl9IVE1MfVxyXG5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiYmxvY2tweS1weXRob24tYmxvY2ttaXJyb3JcIlxyXG4gICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogdWkubWVudS5pc1N1Ym1pdHRlZFwiPlxyXG4gICAgPC9kaXY+XHJcbmA7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRJcHluYlRvUHl0aG9uKGNvZGUpIHtcclxuICAgIGxldCBpcHluYiA9IEpTT04ucGFyc2UoY29kZSk7XHJcbiAgICBsZXQgaXNVc2FibGUgPSBmdW5jdGlvbihjZWxsKSB7XHJcbiAgICAgICAgaWYgKGNlbGwuY2VsbF90eXBlID09PSBcImNvZGVcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gY2VsbC5zb3VyY2UubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgIWNlbGwuc291cmNlWzBdLnN0YXJ0c1dpdGgoXCIlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjZWxsLmNlbGxfdHlwZSA9PT0gXCJtYXJrZG93blwiIHx8XHJcbiAgICAgICAgICAgICAgICBjZWxsLmNlbGxfdHlwZSA9PT0gXCJyYXdcIjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgbGV0IG1ha2VQeXRob24gPSBmdW5jdGlvbihjZWxsKSB7XHJcbiAgICAgICAgaWYgKGNlbGwuY2VsbF90eXBlID09PSBcImNvZGVcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gY2VsbC5zb3VyY2Uuam9pbihcIlxcblwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNlbGwuY2VsbF90eXBlID09PSBcIm1hcmtkb3duXCIgfHxcclxuICAgICAgICAgICAgY2VsbC5jZWxsX3R5cGUgPT09IFwicmF3XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiJycnXCIrY2VsbC5zb3VyY2Uuam9pbihcIlxcblwiKStcIicnJ1wiO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gaXB5bmIuY2VsbHMuZmlsdGVyKGlzVXNhYmxlKS5tYXAobWFrZVB5dGhvbikuam9pbihcIlxcblwiKTtcclxufVxyXG5cclxuY2xhc3MgUHl0aG9uRWRpdG9yVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZy5maW5kKFwiLmJsb2NrcHktcHl0aG9uLWJsb2NrbWlycm9yXCIpKTtcclxuICAgICAgICB0aGlzLmJtID0gbmV3IEJsb2NrTWlycm9yKHtcclxuICAgICAgICAgICAgXCJjb250YWluZXJcIjogdGhpcy50YWdbMF0sXHJcbiAgICAgICAgICAgIFwicnVuXCI6IG1haW4uY29tcG9uZW50cy5lbmdpbmUucnVuLmJpbmQobWFpbi5jb21wb25lbnRzLmVuZ2luZSksXHJcbiAgICAgICAgICAgIFwic2tpcFNrdWxwdFwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImJsb2NrbHlNZWRpYVBhdGhcIjogbWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLmJsb2NrbHlQYXRoLFxyXG4gICAgICAgICAgICBcInRvb2xib3hcIjogbWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLnRvb2xib3goKVxyXG4gICAgICAgICAgICAvLydoZWlnaHQnOiAnMjAwMHB4J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlYWRPbmx5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tYWtlU3Vic2NyaXB0aW9ucygpO1xyXG4gICAgICAgIHRoaXMubGluZUVycm9yU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxpbmVVbmNvdmVyZWRTdWJzY3JpcHRpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMub2xkUHl0aG9uTW9kZSA9IHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYWtlUGVyQXNzaWdubWVudFN1YnNjcmlwdGlvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25maWd1cmVFeHRyYUJsb2NrbHkoKSB7XHJcbiAgICAgICAgdGhpcy5ibS5ibG9ja0VkaXRvci53b3Jrc3BhY2UuY29uZmlndXJlQ29udGV4dE1lbnUgPSAob3B0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICBvcHRpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiU2NyZWVuc2hvdFwiLFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5TQ1JFRU5TSE9UX0JMT0NLU1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICBsZXQgb2xkRmlsZW5hbWUgPSB0aGlzLmZpbGVuYW1lO1xyXG4gICAgICAgIHN1cGVyLmVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKG5ld0ZpbGVuYW1lICE9PSBcImFuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgIGlmIChvbGRGaWxlbmFtZSA9PT0gXCJhbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbGRQeXRob25Nb2RlID0gdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUoRGlzcGxheU1vZGVzLlRFWFQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUodGhpcy5vbGRQeXRob25Nb2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKHRoaXMuZmlsZS5oYW5kbGUoKSk7XHJcblxyXG4gICAgICAgIC8vIFN1YnNjcmliZSB0byB0aGUgcmVsZXZhbnQgRmlsZVxyXG4gICAgICAgIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbiA9IHRoaXMuZmlsZS5oYW5kbGUuc3Vic2NyaWJlKHRoaXMudXBkYXRlRWRpdG9yLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICAvLyBOb3RpZnkgcmVsZXZhbnQgZmlsZSBvZiBjaGFuZ2VzIHRvIEJNXHJcbiAgICAgICAgdGhpcy5jdXJyZW50Qk1MaXN0ZW5lciA9IHRoaXMudXBkYXRlSGFuZGxlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5ibS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLmN1cnJlbnRCTUxpc3RlbmVyKTtcclxuXHJcbiAgICAgICAgaWYgKG5ld0ZpbGVuYW1lICE9PSBcImFuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm0uaXNQYXJzb25zID0gKCkgPT4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ibS5pc1BhcnNvbnMgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5pc1BhcnNvbnM7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxpbmVFcnJvclN1YnNjcmlwdGlvbiA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subGluZXNFcnJvci5zdWJzY3JpYmUoKGxpbmVzKSA9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJtLnNldEhpZ2hsaWdodGVkTGluZXMobGluZXMsIFwiZWRpdG9yLWVycm9yLWxpbmVcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVVbmNvdmVyZWRTdWJzY3JpcHRpb24gPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmxpbmVzVW5jb3ZlcmVkLnN1YnNjcmliZSgobGluZXMpID0+XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJtLnNldEhpZ2hsaWdodGVkTGluZXMobGluZXMsIFwiZWRpdG9yLXVuY292ZXJlZC1saW5lXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy90aGlzLmJtLmJsb2NrRWRpdG9yLndvcmtzcGFjZS5yZW5kZXIoKTtcclxuICAgICAgICAvL3RoaXMuYm0ucmVmcmVzaCgpO1xyXG4gICAgICAgIC8vIFRPRE86IEZpZ3VyZSBvdXQgd2h5IHRoaXMgZG9lc24ndCBlbmQgdXAgbG9va2luZyByaWdodCAoZ28gdG8gYSBkaWZmZXJlbnQgZWRpdG9yLCBjb21lIGJhY2ssIGFuZCBpdCdsbCBiZSBzcXVpc2hlZClcclxuICAgICAgICAvL3RoaXMuYm0ucmVmcmVzaCgpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5ibS5yZWZyZXNoKCksIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUVkaXRvcihuZXdDb250ZW50cykge1xyXG4gICAgICAgIGlmIChuZXdDb250ZW50cyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpbGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIG5ld0NvbnRlbnRzID0gdGhpcy5maWxlLmhhbmRsZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gRG9lc24ndCBtYXR0ZXIsIGZpbGUgd2FzIGFscmVhZHkgc2h1dCBkb3duLlxyXG4gICAgICAgICAgICAgICAgbmV3Q29udGVudHMgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChuZXdDb250ZW50cyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAvLyBXZSdyZSBjbG9zaW5nIHRoaXMgZmlsZVxyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5maWxlU3lzdGVtLmRlbGV0ZUZpbGVMb2NhbGx5Xyh0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYm0uc2V0Q29kZShuZXdDb250ZW50cyk7XHJcbiAgICAgICAgICAgIC8vIERlbGF5IHNvIHRoYXQgZXZlcnl0aGluZyBpcyByZW5kZXJlZFxyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhhbmRsZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuYm0uY2xlYXJIaWdobGlnaHRlZExpbmVzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5oaXN0b3J5TW9kZSgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGUuaGFuZGxlKHRoaXMuYm0uZ2V0Q29kZSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHN1YnNjcmliZXJcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLmJtLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuY3VycmVudEJNTGlzdGVuZXIpO1xyXG4gICAgICAgIGlmICh0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5oaXN0b3J5TW9kZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC51aS5lZGl0b3JzLnB5dGhvbi50dXJuT2ZmSGlzdG9yeU1vZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbGVhckxpbmVTdWJzY3JpcHRpb25zKCk7XHJcbiAgICAgICAgc3VwZXIuZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckxpbmVTdWJzY3JpcHRpb25zKCkge1xyXG4gICAgICAgIHRoaXMuYm0uY2xlYXJIaWdobGlnaHRlZExpbmVzKCk7XHJcbiAgICAgICAgaWYgKHRoaXMubGluZUVycm9yU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGluZUVycm9yU3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5saW5lRXJyb3JTdWJzY3JpcHRpb24gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5saW5lVW5jb3ZlcmVkU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGluZVVuY292ZXJlZFN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubGluZVVuY292ZXJlZFN1YnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1ha2VTdWJzY3JpcHRpb25zKCkge1xyXG4gICAgICAgIHRoaXMuYm0uc2V0TW9kZSh0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5weXRob25Nb2RlKCkpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUuc3Vic2NyaWJlKG1vZGUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJtLnNldE1vZGUobW9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuZW5hYmxlQmxvY2tzLnN1YnNjcmliZShlbmFibGVkID0+IHtcclxuICAgICAgICAgICAgaWYgKCFlbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJtLnNldE1vZGUoRGlzcGxheU1vZGVzLlRFWFQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ibS5zZXRNb2RlKHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy50b29sYm94LnN1YnNjcmliZSh0b29sYm94ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ibS5jb25maWd1cmF0aW9uLnRvb2xib3ggPSB0b29sYm94O1xyXG4gICAgICAgICAgICB0aGlzLmJtLmJsb2NrRWRpdG9yLnJlbWFrZVRvb2xib3goKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlUGVyQXNzaWdubWVudFN1YnNjcmlwdGlvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3Mub25seVVwbG9hZHMuc3Vic2NyaWJlKChjaGFuZ2VkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNoYW5nZWQpO1xyXG4gICAgICAgICAgICBpZiAoIWNoYW5nZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UmVhZE9ubHkodGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuaGlzdG9yeU1vZGUoKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFJlYWRPbmx5KGNoYW5nZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UmVhZE9ubHkoaXNSZWFkT25seSkge1xyXG4gICAgICAgIHRoaXMucmVhZE9ubHkgPSBpc1JlYWRPbmx5O1xyXG4gICAgICAgIHRoaXMuYm0uc2V0UmVhZE9ubHkoaXNSZWFkT25seSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBsb2FkRmlsZShldmVudCkge1xyXG4gICAgICAgIGxldCBmaWxlbmFtZSA9IGV2ZW50LnRhcmdldC5maWxlTmFtZTtcclxuICAgICAgICBsZXQgY29kZSA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgaWYgKGZpbGVuYW1lLmVuZHNXaXRoKFwiLmlweW5iXCIpKSB7XHJcbiAgICAgICAgICAgIGNvZGUgPSBjb252ZXJ0SXB5bmJUb1B5dGhvbihjb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1GaWxlLlVwbG9hZFwiLCBcIlwiLCBcIlwiLCBjb2RlLCB0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICB0aGlzLmZpbGUuaGFuZGxlKGNvZGUpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmVuZ2luZS5ydW4oKTtcclxuICAgICAgICAvLyBUT0RPOiBSdW4gY29kZVxyXG4gICAgfVxyXG5cclxuICAgIGRvd25sb2FkRmlsZSgpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gc3VwZXIuZG93bmxvYWRGaWxlKCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5uYW1lID09PSBcImFuc3dlclwiICYmIHJlc3VsdC5leHRlbnNpb24gPT09IFwiLnB5XCIpIHtcclxuICAgICAgICAgICAgcmVzdWx0Lm5hbWUgPSBzbHVnZ2lmeSh0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5uYW1lKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQubWltZXR5cGUgPSBcInRleHQveC1weXRob25cIjtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJYLUZpbGUuRG93bmxvYWRcIiwgXCJcIiwgXCJcIiwgXCJcIiwgcmVzdWx0Lm5hbWUpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUHl0aG9uRWRpdG9yID0ge1xyXG4gICAgbmFtZTogXCJQeXRob25cIixcclxuICAgIGV4dGVuc2lvbnM6IFtcIi5weVwiXSxcclxuICAgIGNvbnN0cnVjdG9yOiBQeXRob25FZGl0b3JWaWV3LFxyXG4gICAgdGVtcGxhdGU6IFBZVEhPTl9FRElUT1JfSFRNTFxyXG59OyIsImltcG9ydCB7QWJzdHJhY3RFZGl0b3J9IGZyb20gXCIuL2Fic3RyYWN0X2VkaXRvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRBR1NfRURJVE9SX0hUTUwgPSBgXHJcbkNyZWF0ZSBuZXdcclxuSW1wb3J0IGJ5IG5hbWVcclxuRmluZCBieSBvd25lci9jb3Vyc2Uva2luZFxyXG5cclxuVGFnczpcclxuICAgIERhdGE6XHJcbiAgICAgICAgTmFtZVxyXG4gICAgICAgIEtpbmRcclxuICAgICAgICBMZXZlbFxyXG4gICAgICAgIFZlcnNpb25cclxuICAgICAgICBEZXNjcmlwdGlvblxyXG4gICAgQ29udHJvbHM6XHJcbiAgICAgICAgRWRpdFxyXG4gICAgICAgIFJlbW92ZVxyXG4gICAgICAgIERlbGV0ZSBcclxuYDtcclxuXHJcbmNsYXNzIFRhZ3NFZGl0b3JWaWV3IGV4dGVuZHMgQWJzdHJhY3RFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgc3VwZXIobWFpbiwgdGFnLmZpbmQoXCIuYmxvY2tweS1lZGl0b3ItdGFnc1wiKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUYWdzRWRpdG9yID0ge1xyXG4gICAgbmFtZTogXCJUYWdzXCIsXHJcbiAgICBleHRlbnNpb25zOiBbXCIhdGFncy5ibG9ja3B5XCJdLFxyXG4gICAgY29uc3RydWN0b3I6IFRhZ3NFZGl0b3JWaWV3LFxyXG4gICAgdGVtcGxhdGU6IFRBR1NfRURJVE9SX0hUTUxcclxufTsiLCJpbXBvcnQge0Fic3RyYWN0RWRpdG9yfSBmcm9tIFwiLi9hYnN0cmFjdF9lZGl0b3JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBURVhUX0VESVRPUl9IVE1MID0gYFxyXG4gICAgPGRpdj5cclxuICAgIDx0ZXh0YXJlYSBjbGFzcz1cImJsb2NrcHktZWRpdG9yLXRleHRcIj48L3RleHRhcmVhPlxyXG4gICAgPC9kaXY+XHJcbmA7XHJcblxyXG5jbGFzcyBUZXh0RWRpdG9yVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZyk7XHJcbiAgICAgICAgdGhpcy5jb2RlTWlycm9yID0gQ29kZU1pcnJvci5mcm9tVGV4dEFyZWEodGFnLmZpbmQoXCIuYmxvY2tweS1lZGl0b3ItdGV4dFwiKVswXSwge1xyXG4gICAgICAgICAgICBzaG93Q3Vyc29yV2hlblNlbGVjdGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgbGluZU51bWJlcnM6IHRydWUsXHJcbiAgICAgICAgICAgIGZpcnN0TGluZU51bWJlcjogMSxcclxuICAgICAgICAgICAgaW5kZW50VW5pdDogNCxcclxuICAgICAgICAgICAgdGFiU2l6ZTogNCxcclxuICAgICAgICAgICAgaW5kZW50V2l0aFRhYnM6IGZhbHNlLFxyXG4gICAgICAgICAgICBleHRyYUtleXM6IHtcclxuICAgICAgICAgICAgICAgIFwiVGFiXCI6IFwiaW5kZW50TW9yZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTaGlmdC1UYWJcIjogXCJpbmRlbnRMZXNzXCIsXHJcbiAgICAgICAgICAgICAgICBcIkVzY1wiOiBmdW5jdGlvbiAoY20pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY20uZ2V0T3B0aW9uKFwiZnVsbFNjcmVlblwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbS5zZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbS5kaXNwbGF5LmlucHV0LmJsdXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJGMTFcIjogZnVuY3Rpb24gKGNtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY20uc2V0T3B0aW9uKFwiZnVsbFNjcmVlblwiLCAhY20uZ2V0T3B0aW9uKFwiZnVsbFNjcmVlblwiKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcikge1xyXG4gICAgICAgIHN1cGVyLmVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcih0aGlzLmZpbGUuaGFuZGxlKCkpO1xyXG4gICAgICAgIC8vIFN1YnNjcmliZSB0byB0aGUgcmVsZXZhbnQgRmlsZVxyXG4gICAgICAgIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbiA9IHRoaXMuZmlsZS5oYW5kbGUuc3Vic2NyaWJlKHRoaXMudXBkYXRlRWRpdG9yLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIE5vdGlmeSByZWxldmFudCBmaWxlIG9mIGNoYW5nZXMgdG8gQk1cclxuICAgICAgICB0aGlzLmN1cnJlbnRMaXN0ZW5lciA9IHRoaXMudXBkYXRlSGFuZGxlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jb2RlTWlycm9yLm9uKFwiY2hhbmdlXCIsIHRoaXMuY3VycmVudExpc3RlbmVyKTtcclxuICAgICAgICBpZiAob2xkRWRpdG9yICE9PSB0aGlzKSB7XHJcbiAgICAgICAgICAgIC8vIERlbGF5IHNvIHRoYXQgZXZlcnl0aGluZyBpcyByZW5kZXJlZFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMuY29kZU1pcnJvci5yZWZyZXNoLmJpbmQodGhpcy5jb2RlTWlycm9yKSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFRPRE86IHVwZGF0ZSBkeW5hbWljYWxseSB3aGVuIGNoYW5naW5nIGluc3RydWN0b3Igc3RhdHVzXHJcbiAgICAgICAgdGhpcy5jb2RlTWlycm9yLnNldE9wdGlvbihcInJlYWRPbmx5XCIsIG5ld0ZpbGVuYW1lLnN0YXJ0c1dpdGgoXCImXCIpICYmICF0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5pbnN0cnVjdG9yKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUVkaXRvcihuZXdDb250ZW50cykge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jb2RlTWlycm9yLnNldFZhbHVlKG5ld0NvbnRlbnRzKTtcclxuICAgICAgICAgICAgdGhpcy5jb2RlTWlycm9yLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVIYW5kbGUoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZS5oYW5kbGUodGhpcy5jb2RlTWlycm9yLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHN1YnNjcmliZXJcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMuY29kZU1pcnJvci5vZmYoXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgICAgIHRoaXMuY29kZU1pcnJvci5zZXRPcHRpb24oXCJyZWFkT25seVwiLCBmYWxzZSk7XHJcbiAgICAgICAgc3VwZXIuZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRleHRFZGl0b3IgPSB7XHJcbiAgICBuYW1lOiBcIlRleHRcIixcclxuICAgIGV4dGVuc2lvbnM6IFtcIi50eHRcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogVGV4dEVkaXRvclZpZXcsXHJcbiAgICB0ZW1wbGF0ZTogVEVYVF9FRElUT1JfSFRNTFxyXG59OyIsIi8qKlxyXG4gKiBFZGl0b3JzIGFyZSBpbmZlcnJlZCBmcm9tIEZpbGVuYW1lcy5cclxuICpcclxuICogVGhlIGVkaXRvciBpcyBiYXNlZCBvbiB0aGUgZXh0ZW5zaW9uOlxyXG4gKiAgLmJsb2NrcHk6IFNwZWNpYWwgZWRpdG9yICh3aWxsIGJlIGNob3NlbiBieSBmaWxlbmFtZSlcclxuICogIC5weTogUHl0aG9uIEVkaXRvclxyXG4gKiAgLm1kOiBNYXJrZG93biBFZGl0b3JcclxuICogIC50eHQ6IFRleHQgRWRpdG9yIChhbHNvIHVzZWQgZm9yIG90aGVyIHR5cGVzKVxyXG4gKiAgLnBlbWw6IFBFTUwgRWRpdG9yXHJcbiAqICAucG5nLCAuZ2lmLCAuanBlZywgLmpwZywgLmJtcDogSW1hZ2UgRWRpdG9yXHJcbiAqICAuanNvbjogSlNPTiBFZGl0b3JcclxuICogIC55YW1sOiBZQU1MIEVkaXRvclxyXG4gKi9cclxuXHJcbmltcG9ydCB7UHl0aG9uRWRpdG9yfSBmcm9tIFwiLi9lZGl0b3IvcHl0aG9uXCI7XHJcbmltcG9ydCB7VGV4dEVkaXRvcn0gZnJvbSBcIi4vZWRpdG9yL3RleHRcIjtcclxuaW1wb3J0IHtBc3NpZ25tZW50U2V0dGluZ3N9IGZyb20gXCIuL2VkaXRvci9hc3NpZ25tZW50X3NldHRpbmdzXCI7XHJcbmltcG9ydCB7VGFnc0VkaXRvcn0gZnJvbSBcIi4vZWRpdG9yL3RhZ3NcIjtcclxuaW1wb3J0IHtNYXJrZG93bkVkaXRvcn0gZnJvbSBcIi4vZWRpdG9yL21hcmtkb3duXCI7XHJcblxyXG4vKipcclxuICogVGhlIGRpZmZlcmVudCBwb3NzaWJsZSBlZGl0b3JzIGF2YWlsYWJsZVxyXG4gKiBAZW51bSB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGxldCBFZGl0b3JzRW51bSA9IHtcclxuICAgIFNVQk1JU1NJT046IFwic3VibWlzc2lvblwiLFxyXG4gICAgQVNTSUdOTUVOVDogXCJhc3NpZ25tZW50XCIsXHJcbiAgICBJTlNUUlVDVElPTlM6IFwiaW5zdHJ1Y3Rpb25zXCIsXHJcbiAgICBPTl9SVU46IFwib25fcnVuXCIsXHJcbiAgICBPTl9DSEFOR0U6IFwib25fY2hhbmdlXCIsXHJcbiAgICBPTl9FVkFMOiBcIm9uX2V2YWxcIixcclxuICAgIFNUQVJUSU5HX0NPREU6IFwic3RhcnRpbmdfY29kZVwiLFxyXG4gICAgU0FNUExFX1NVQk1JU1NJT05TOiBcInNhbXBsZV9zdWJtaXNzaW9uc1wiLFxyXG4gICAgSU5TVFJVQ1RPUl9GSUxFOiBcImluc3RydWN0b3JfZmlsZVwiXHJcbn07XHJcblxyXG5jb25zdCBTUEVDSUFMX05BTUVTUEFDRVMgPSBbXCIhXCIsIFwiXlwiLCBcIj9cIiwgXCIkXCJdO1xyXG5cclxuY29uc3QgQVZBSUxBQkxFX0VESVRPUlMgPSBbXHJcbiAgICBUZXh0RWRpdG9yLCBQeXRob25FZGl0b3IsIEFzc2lnbm1lbnRTZXR0aW5ncywgVGFnc0VkaXRvciwgTWFya2Rvd25FZGl0b3JcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBFRElUT1JTX0hUTUwgPSBBVkFJTEFCTEVfRURJVE9SUy5tYXAoZWRpdG9yID0+XHJcbiAgICBgXHJcbjxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgYmxvY2tweS1wYW5lbCBibG9ja3B5LWVkaXRvclwiPlxyXG4gICAgPGRpdiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5lZGl0b3JzLnZpZXcoKS5uYW1lID09PSAnJHtlZGl0b3IubmFtZX0nXCI+XHJcbiAgICAke2VkaXRvci50ZW1wbGF0ZX0gICAgXHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbmBcclxuICAgIC8qXHJcbiAgICBgXHJcbjwhLS0ga28gaWY6IHVpLmVkaXRvcnMudmlldygpLm5hbWUgPT09ICcke2VkaXRvci5uYW1lfScgLS0+XHJcbiR7ZWRpdG9yLnRlbXBsYXRlfVxyXG48IS0tIC9rbyAtLT5gKi9cclxuKS5qb2luKFwiXFxuXCIpO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRvcnMge1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLnRhZyA9IHRhZztcclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJlZF8gPSBbXTtcclxuICAgICAgICB0aGlzLmV4dGVuc2lvbnNfID0ge307XHJcbiAgICAgICAgdGhpcy5ieU5hbWVfID0ge307XHJcbiAgICAgICAgQVZBSUxBQkxFX0VESVRPUlMuZm9yRWFjaChlZGl0b3IgPT4gdGhpcy5yZWdpc3RlckVkaXRvcihlZGl0b3IpKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5maWxlbmFtZS5zdWJzY3JpYmUodGhpcy5jaGFuZ2VFZGl0b3IsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRWRpdG9yKGRhdGEpIHtcclxuICAgICAgICBsZXQgZXh0ZW5zaW9ucyA9IGRhdGEuZXh0ZW5zaW9ucztcclxuICAgICAgICBsZXQgaW5zdGFuY2UgPSBuZXcgZGF0YS5jb25zdHJ1Y3Rvcih0aGlzLm1haW4sIHRoaXMudGFnKTtcclxuICAgICAgICBpbnN0YW5jZS5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJlZF8ucHVzaChpbnN0YW5jZSk7XHJcbiAgICAgICAgdGhpcy5ieU5hbWVfW2RhdGEubmFtZS50b0xvd2VyQ2FzZSgpXSA9IGluc3RhbmNlO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IGV4dGVuc2lvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5leHRlbnNpb25zX1tleHRlbnNpb25zW2ldXSA9IGluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBieU5hbWUobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJ5TmFtZV9bbmFtZS50b0xvd2VyQ2FzZSgpXTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VFZGl0b3IobmV3RmlsZW5hbWUpIHtcclxuICAgICAgICBsZXQgb2xkRWRpdG9yID0gdGhpcy5jdXJyZW50O1xyXG4gICAgICAgIGxldCBuZXdFZGl0b3IgPSB0aGlzLmdldEVkaXRvcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICBpZiAob2xkRWRpdG9yICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG9sZEVkaXRvci5leGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IsIG5ld0VkaXRvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IG5ld0VkaXRvcjtcclxuICAgICAgICB0aGlzLmN1cnJlbnQuZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHBhcnNlRmlsZW5hbWUocGF0aCkge1xyXG4gICAgICAgIGxldCBzcGFjZSA9IHBhdGguY2hhckF0KDApO1xyXG4gICAgICAgIGlmIChTUEVDSUFMX05BTUVTUEFDRVMuaW5kZXhPZihzcGFjZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cigxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzcGFjZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBuYW1lID0gcGF0aC5zdWJzdHIoMCwgcGF0aC5sYXN0SW5kZXhPZihcIi5cIikpO1xyXG4gICAgICAgIGxldCB0eXBlID0gcGF0aC5zdWJzdHIocGF0aC5sYXN0SW5kZXhPZihcIi5cIikpO1xyXG4gICAgICAgIHJldHVybiB7XCJzcGFjZVwiOiBzcGFjZSwgXCJuYW1lXCI6IG5hbWUsIFwidHlwZVwiOiB0eXBlfTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFZGl0b3IocGF0aCkge1xyXG4gICAgICAgIGxldCB7c3BhY2UsIG5hbWUsIHR5cGV9ID0gRWRpdG9ycy5wYXJzZUZpbGVuYW1lKHBhdGgpO1xyXG4gICAgICAgIGlmICh0eXBlID09PSBcIi5ibG9ja3B5XCIgJiYgcGF0aCBpbiB0aGlzLmV4dGVuc2lvbnNfKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbnNfW3BhdGhdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSBpbiB0aGlzLmV4dGVuc2lvbnNfKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbnNfW3R5cGVdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyZWRfWzBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge1N0YXR1c1N0YXRlfSBmcm9tIFwiLi9zZXJ2ZXJcIjtcbmltcG9ydCB7T25SdW5Db25maWd1cmF0aW9ufSBmcm9tIFwiLi9lbmdpbmUvb25fcnVuXCI7XG5pbXBvcnQge1J1bkNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9ydW5cIjtcbmltcG9ydCB7RXZhbENvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9ldmFsXCI7XG5pbXBvcnQge1NhbXBsZUNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9zYW1wbGVcIjtcbmltcG9ydCB7T25DaGFuZ2VDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9lbmdpbmUvb25fY2hhbmdlXCI7XG5pbXBvcnQge09uRXZhbENvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9vbl9ldmFsXCI7XG5pbXBvcnQge09uU2FtcGxlQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL29uX3NhbXBsZVwiO1xuXG4vKipcbiAqIEFuIG9iamVjdCBmb3IgZXhlY3V0aW5nIFB5dGhvbiBjb2RlIGFuZCBwYXNzaW5nIHRoZSByZXN1bHRzIGFsb25nIHRvIGludGVyZXN0ZWQgY29tcG9uZW50cy5cbiAqXG4gKiBJbnRlcmVzdGluZyBjb21wb25lbnRzOlxuICogIEV4ZWN1dGlvbiBCdWZmZXI6IFJlc3BvbnNpYmxlIGZvciBjb2xsZWN0aW5nIHRoZSB0cmFjZSBkdXJpbmcgcHJvZ3JhbSBleGVjdXRpb24uXG4gKiAgICAgICAgICAgICAgICAgICAgVGhpcyBwcmV2ZW50cyBLbm9ja291dGpzIGZyb20gdXBkYXRpbmcgdGhlIGVkaXRvciBkdXJpbmcgZXhlY3V0aW9uLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlFZGl0b3J9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhZyAtIFRoZSBIVE1MIG9iamVjdCB0aGlzIGlzIGF0dGFjaGVkIHRvLlxuICovXG5leHBvcnQgY2xhc3MgQmxvY2tQeUVuZ2luZSB7XG4gICAgY29uc3RydWN0b3IobWFpbikge1xuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgICAgICB0aGlzLmV4ZWN1dGlvbk1vZGVsID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbjtcblxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb25zID0ge1xuICAgICAgICAgICAgcnVuOiBuZXcgUnVuQ29uZmlndXJhdGlvbihtYWluKSxcbiAgICAgICAgICAgIGV2YWw6IG5ldyBFdmFsQ29uZmlndXJhdGlvbihtYWluKSxcbiAgICAgICAgICAgIG9uUnVuOiBuZXcgT25SdW5Db25maWd1cmF0aW9uKG1haW4pLFxuICAgICAgICAgICAgb25DaGFuZ2U6IG5ldyBPbkNoYW5nZUNvbmZpZ3VyYXRpb24obWFpbiksXG4gICAgICAgICAgICBvbkV2YWw6IG5ldyBPbkV2YWxDb25maWd1cmF0aW9uKG1haW4pXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUHJlY29uZmlndXJlIHNrdWxwdCBzbyB3ZSBjYW4gcGFyc2VcbiAgICAgICAgU2suY29uZmlndXJlKHRoaXMuY29uZmlndXJhdGlvbnMucnVuLmdldFNrdWxwdE9wdGlvbnMoKSk7XG5cbiAgICAgICAgLy8gS2VlcHMgdHJhY2sgb2YgdGhlIHRyYWNpbmcgd2hpbGUgdGhlIHByb2dyYW0gaXMgZXhlY3V0aW5nXG4gICAgICAgIHRoaXMuZXhlY3V0aW9uQnVmZmVyID0ge307XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmluYWJsZSBmdW5jdGlvbiB0byBiZSBydW4gd2hlbiBleGVjdXRpb24gaGFzIGZ1bGx5IGVuZGVkLFxuICAgICAgICAgKiB3aGV0aGVyIGl0IHN1Y2NlZWRzIG9yIGZhaWxzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbkV4ZWN1dGlvbkJlZ2luID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbkV4ZWN1dGlvbkVuZCA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgcmVwb3J0c1xuICAgICAqL1xuICAgIHJlc2V0UmVwb3J0cygpIHtcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMuZXhlY3V0aW9uTW9kZWwucmVwb3J0cztcbiAgICAgICAgcmVwb3J0W1widmVyaWZpZXJcIl0gPSB7fTtcbiAgICAgICAgcmVwb3J0W1wicGFyc2VyXCJdID0ge307XG4gICAgICAgIHJlcG9ydFtcInN0dWRlbnRcIl0gPSB7fTtcbiAgICAgICAgcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXSA9IHt9O1xuICAgICAgICByZXBvcnRbXCJtb2RlbFwiXSA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICB9O1xuXG4gICAgcmVzZXRTdHVkZW50TW9kZWwoKSB7XG4gICAgICAgIGxldCBzdHVkZW50ID0gdGhpcy5leGVjdXRpb25Nb2RlbC5zdHVkZW50O1xuICAgICAgICBzdHVkZW50LmN1cnJlbnRTdGVwKG51bGwpO1xuICAgICAgICBzdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAoMCk7XG4gICAgICAgIHN0dWRlbnQubGFzdFN0ZXAoMCk7XG4gICAgICAgIHN0dWRlbnQuY3VycmVudExpbmUobnVsbCk7XG4gICAgICAgIHN0dWRlbnQuY3VycmVudFRyYWNlRGF0YS5yZW1vdmVBbGwoKTtcbiAgICAgICAgc3R1ZGVudC5yZXN1bHRzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXNldEV4ZWN1dGlvbkJ1ZmZlcigpIHtcbiAgICAgICAgdGhpcy5leGVjdXRpb25CdWZmZXIgPSB7XG4gICAgICAgICAgICBcInRyYWNlXCI6IFtdLFxuICAgICAgICAgICAgXCJzdGVwXCI6IDAsXG4gICAgICAgICAgICBcImxpbmVcIjogMCxcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGFsbCBpbnRlcmZhY2UgYXNwZWN0cyBvZiB0aGUgcHJldmlvdXMgUnVuLlxuICAgICAqL1xuICAgIHJlc2V0KCkge1xuICAgICAgICAvLyBUT0RPOiBDbGVhciBvdXQgYW55IGNvdmVyYWdlL3RyYWNlL2Vycm9yIGhpZ2hsaWdodHMgaW4gZWRpdG9yc1xuICAgICAgICAvLyBSZXNldCBleGVjdXRpb24gaW4gbW9kZWxcbiAgICAgICAgdGhpcy5yZXNldFN0dWRlbnRNb2RlbCgpO1xuICAgICAgICAvLyBHZXQgcmVwb3J0cyByZWFkeVxuICAgICAgICB0aGlzLnJlc2V0UmVwb3J0cygpO1xuICAgICAgICAvLyBDbGVhciBvdXQgdGhlIGV4ZWN1dGlvbiBidWZmZXJcbiAgICAgICAgdGhpcy5yZXNldEV4ZWN1dGlvbkJ1ZmZlcigpO1xuICAgICAgICAvLyBDbGVhciBvdXQgdGhlIGNvbnNvbGUgb2YgcHJpbnRlZCBzdHVmZlxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLmNsZWFyKCk7XG4gICAgICAgIC8vIENsZWFyIG91dCBhbnkgb2xkIGZlZWRiYWNrXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgZGVsYXllZFJ1bigpIHtcbiAgICAgICAgc2V0VGltZW91dCh0aGlzLnJ1bi5iaW5kKHRoaXMpLCAxKTtcbiAgICB9XG5cbiAgICBydW4oKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbnMucnVuLnVzZSh0aGlzKTtcbiAgICAgICAgbGV0IGV4ZWN1dGlvbiA9IHRoaXMuZXhlY3V0ZSgpLnRoZW4oXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc3VjY2Vzcy5iaW5kKHRoaXMuY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZmFpbHVyZS5iaW5kKHRoaXMuY29uZmlndXJhdGlvbilcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kaXNhYmxlRmVlZGJhY2soKSkge1xuICAgICAgICAgICAgZXhlY3V0aW9uLnRoZW4odGhpcy5vblJ1bi5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV4ZWN1dGlvbi50aGVuKHRoaXMuY29uZmlndXJhdGlvbi5zaG93RXJyb3JzLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblJ1bigpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucy5vblJ1bi51c2UodGhpcyk7XG4gICAgICAgIHRoaXMuZXhlY3V0ZSgpLnRoZW4oXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc3VjY2Vzcy5iaW5kKHRoaXMuY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZmFpbHVyZS5iaW5kKHRoaXMuY29uZmlndXJhdGlvbilcbiAgICAgICAgKS50aGVuKHRoaXMuZXhlY3V0aW9uRW5kXy5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBldmFsdWF0ZSgpIHtcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5BQ1RJVkUpO1xuICAgICAgICBsZXQgZXZhbHVhdGlvbklucHV0ID0gdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5ldmFsdWF0ZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhldmFsdWF0aW9uSW5wdXQpO1xuICAgICAgICBldmFsdWF0aW9uSW5wdXQudGhlbigodXNlcklucHV0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSB0aGlzLmNvbmZpZ3VyYXRpb25zLmV2YWwudXNlKHRoaXMsIHVzZXJJbnB1dCk7XG4gICAgICAgICAgICBsZXQgZXhlY3V0aW9uID0gdGhpcy5leGVjdXRlKCkudGhlbihcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc3VjY2Vzcy5iaW5kKHRoaXMuY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmZhaWx1cmUuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kaXNhYmxlRmVlZGJhY2soKSkge1xuICAgICAgICAgICAgICAgIGV4ZWN1dGlvbi50aGVuKHRoaXMub25FdmFsLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleGVjdXRpb24udGhlbih0aGlzLmNvbmZpZ3VyYXRpb24uc2hvd0Vycm9ycy5iaW5kKHRoaXMuY29uZmlndXJhdGlvbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkV2YWwoKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbnMub25FdmFsLnVzZSh0aGlzKTtcbiAgICAgICAgdGhpcy5leGVjdXRlKCkudGhlbihcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zdWNjZXNzLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKSxcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5mYWlsdXJlLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKVxuICAgICAgICApLnRoZW4odGhpcy5ldmFsdWF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucy5vbkNoYW5nZS51c2UodGhpcyk7XG4gICAgfVxuXG4gICAgZXhlY3V0ZSgpIHtcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5BQ1RJVkUpO1xuICAgICAgICByZXR1cm4gU2subWlzY2V2YWwuYXN5bmNUb1Byb21pc2UoKCkgPT5cbiAgICAgICAgICAgIFNrLmltcG9ydE1haW5XaXRoQm9keSh0aGlzLmNvbmZpZ3VyYXRpb24uZmlsZW5hbWUsIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5jb2RlLCB0cnVlKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjdGl2YXRlZCB3aGVuZXZlciB0aGUgUHl0aG9uIGNvZGUgY2hhbmdlc1xuICAgICAqL1xuICAgIG9uX2NoYW5nZSgpIHtcbiAgICAgICAgbGV0IEZJTEVOQU1FID0gXCJvbl9jaGFuZ2VcIjtcbiAgICAgICAgLy8gU2tpcCBpZiB0aGUgaW5zdHJ1Y3RvciBoYXMgbm90IGRlZmluZWQgYW55dGhpbmdcbiAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwucHJvZ3JhbXNbRklMRU5BTUVdKCkudHJpbSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdGF0dXMoXCJjaGFuZ2luZ1wiKTtcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLnNhdmVDb2RlKCk7XG4gICAgICAgIC8vIE9uIHN0ZXAgZG9lcyBub3QgcGVyZm9ybSBwYXJzZSBhbmFseXNpcyBieSBkZWZhdWx0IG9yIHJ1biBzdHVkZW50IGNvZGVcbiAgICAgICAgbGV0IGVuZ2luZSA9IHRoaXM7XG4gICAgICAgIGxldCBmZWVkYmFjayA9IHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrO1xuICAgICAgICBlbmdpbmUucmVzZXRSZXBvcnRzKCk7XG4gICAgICAgIGVuZ2luZS52ZXJpZnlDb2RlKCk7XG4gICAgICAgIGVuZ2luZS51cGRhdGVQYXJzZSgpO1xuICAgICAgICBlbmdpbmUucnVuSW5zdHJ1Y3RvckNvZGUoRklMRU5BTUUsIHRydWUsIGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgICAgICAgICAgIGlmIChTay5leGVjdXRpb25SZXBvcnRzW1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0pIHtcbiAgICAgICAgICAgICAgICAvLyBTVUNDRVNTLCBTQ09SRSwgQ0FURUdPUlksIExBQkVMLCBNRVNTQUdFLCBEQVRBLCBISURFXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogb25seSBzaG93IHVuZGVyIGNlcnRhaW4gY2lyY3Vtc3RhbmNlc1xuICAgICAgICAgICAgICAgIGlmICghc3VjY2VzcyAmJlxuICAgICAgICAgICAgICAgICAgICAhKGNhdGVnb3J5ID09PSBcIkluc3RydWN0b3JcIiAmJiBsYWJlbCA9PT0gXCJObyBlcnJvcnNcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgZmVlZGJhY2sucHJlc2VudEZlZWRiYWNrKGNhdGVnb3J5LCBsYWJlbCwgbWVzc2FnZSwgbGluZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVuZ2luZS5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2sucHJlc2VudEZlZWRiYWNrKG1vZHVsZS4kZCk7XG4gICAgICAgICAgICAgICAgZW5naW5lLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0YXR1cyhcImNvbXBsZXRlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZW5naW5lLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJlbmdpbmVcIiwgXCJvbl9jaGFuZ2VcIik7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgd2lsbCBhdHRlbXB0IHRvIGNhbGwgdGhlIGRlZmluZWQgb25FeGVjdXRpb25FbmQsXG4gICAgICogYnV0IHdpbGwgZG8gbm90aGluZyBpZiB0aGVyZSBpcyBubyBmdW5jdGlvbiBkZWZpbmVkLlxuICAgICAqL1xuICAgIGV4ZWN1dGlvbkVuZF8oKSB7XG4gICAgICAgIGlmICh0aGlzLm9uRXhlY3V0aW9uRW5kICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLm9uRXhlY3V0aW9uRW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGV4ZWN1dGlvbkJlZ2luXygpIHtcbiAgICAgICAgaWYgKHRoaXMub25FeGVjdXRpb25CZWdpbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5vbkV4ZWN1dGlvbkJlZ2luKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuIiwiZXhwb3J0IGNvbnN0IEVNUFRZX01PRFVMRSA9IFwibGV0ICRidWlsdGlubW9kdWxlID0gZnVuY3Rpb24obW9kKXsgcmV0dXJuIG1vZDsgfVwiO1xyXG5cclxuLyoqXHJcbiAqIEEgY29udGFpbmVyIGZvciBob2xkaW5nIHNldHRpbmdzIG9mIGEgcGFydGljdWxhciBydW4gY29uZmlndXJhdGlvbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtYWluKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNvZGUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICAvLyBBY2Nlc3MgcG9pbnQgZm9yIGluc3RydWN0b3IgZGF0YVxyXG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xyXG4gICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHMgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgU2suY29uc29sZSA9IHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGU7XHJcbiAgICAgICAgU2sucXVldWVkSW5wdXQgPSBbXTtcclxuICAgICAgICBTay5jb25maWd1cmUodGhpcy5nZXRTa3VscHRPcHRpb25zKCkpO1xyXG4gICAgICAgIC8vIFNldCBvcGVuRmlsZSBhcyBtZWNoYW5pc20gdG8gcmVhZCBmaWxlc1xyXG4gICAgICAgIFNrLmluQnJvd3NlciA9IHRoaXMub3BlbkZpbGUuYmluZCh0aGlzKTtcclxuICAgICAgICAvLyBQcm94eSByZXF1ZXN0c1xyXG4gICAgICAgIFNrLnJlcXVlc3RzR2V0ID0gKHVybCwgZGF0YSwgdGltZW91dCkgPT4gdGhpcy5vcGVuVVJMKHVybCwgZGF0YSwgdGltZW91dCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2t1bHB0T3B0aW9ucygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBfX2Z1dHVyZV9fOiBTay5weXRob24zLFxyXG4gICAgICAgICAgICAvLyBpbXBvcnRcclxuICAgICAgICAgICAgcmVhZDogdGhpcy5pbXBvcnRGaWxlLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIC8vIG9wZW5cclxuICAgICAgICAgICAgLy9maWxlb3BlbjogdGhpcy5vcGVuRmlsZS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAvLyBmaWxlLndyaXRlXHJcbiAgICAgICAgICAgIGZpbGV3cml0ZTogdGhpcy53cml0ZUZpbGUuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgLy8gcHJpbnRcclxuICAgICAgICAgICAgb3V0cHV0OiB0aGlzLnByaW50LmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIC8vIGlucHV0XHJcbiAgICAgICAgICAgIGlucHV0ZnVuOiB0aGlzLmlucHV0LmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIGlucHV0ZnVuVGFrZXNQcm9tcHQ6IHRydWUsXHJcbiAgICAgICAgICAgIC8vIE1lZGlhIEltYWdlIFByb3h5IFVSTFxyXG4gICAgICAgICAgICBpbWFnZVByb3h5OiB0aGlzLmdldEltYWdlUHJveHkuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgLy8gV2hldGhlciBvciBub3QgdG8ga2VlcCB0aGUgZ2xvYmFsc1xyXG4gICAgICAgICAgICByZXRhaW5HbG9iYWxzOiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVzZWQgdG8gYWNjZXNzIFNrdWxwdCBidWlsdC1pbnMuIFRoaXMgaXMgcHJldHR5IGdlbmVyaWMsIHRha2VuXHJcbiAgICAgKiBhbG1vc3QgZGlyZWN0bHkgZnJvbSB0aGUgU2t1bHB0IGRvY3MuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lIC0gVGhlIHB5dGhvbiBmaWxlbmFtZSAoZS5nLiwgXCJvc1wiIG9yIFwicHByaW50XCIpIHRoYXQgd2lsbCBiZSBsb2FkZWQuXHJcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgSmF2YVNjcmlwdCBzb3VyY2UgY29kZSBvZiB0aGUgZmlsZSAod2VpcmQsIHJpZ2h0PylcclxuICAgICAqIEB0aHJvd3MgV2lsbCB0aHJvdyBhbiBlcnJvciBpZiB0aGUgZmlsZSBpc24ndCBmb3VuZC5cclxuICAgICAqL1xyXG4gICAgaW1wb3J0RmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgbWV0aG9kIVwiKTtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9O1xyXG5cclxuICAgIG9wZW5VUkwodXJsLCBkYXRhLCB0aW1lb3V0KSB7XHJcbiAgICAgICAgLy9yZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGxldCBtb2NrVXJsRGF0YSA9IHRoaXMubWFpbi5jb21wb25lbnRzLmZpbGVTeXN0ZW0uZ2V0RmlsZShcIj9tb2NrX3VybHMuYmxvY2tweVwiKTtcclxuICAgICAgICBpZiAobW9ja1VybERhdGEgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyAobmV3IFNrLmJ1aWx0aW4uSU9FcnJvcihcIkNhbm5vdCBhY2Nlc3MgdXJsOiBVUkwgRGF0YSB3YXMgbm90IG1hZGUgYXZhaWxhYmxlIGZvciB0aGlzIGFzc2lnbm1lbnRcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtb2NrVXJsRGF0YSA9IEpTT04ucGFyc2UobW9ja1VybERhdGEuaGFuZGxlKCkpO1xyXG4gICAgICAgIGZvciAobGV0IGZpbGVuYW1lIGluIG1vY2tVcmxEYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChtb2NrVXJsRGF0YS5oYXNPd25Qcm9wZXJ0eShmaWxlbmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaSA8IG1vY2tVcmxEYXRhW2ZpbGVuYW1lXS5sZW5ndGg7IGkrPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vY2tVcmxEYXRhW2ZpbGVuYW1lXVtpXSA9PT0gdXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWxlRGF0YSA9IHRoaXMubWFpbi5jb21wb25lbnRzLmZpbGVTeXN0ZW0ucmVhZEZpbGUoZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGZpbGVEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9yZWplY3QobmV3IFNrLmJ1aWx0aW4uSU9FcnJvcihcIkNhbm5vdCBhY2Nlc3MgdXJsOiBcIit1cmwrXCIgd2FzIG5vdCBtYWRlIGF2YWlsYWJsZSBmb3IgdGhpcyBhc3NpZ25tZW50XCIpKTtcclxuICAgICAgICB0aHJvdyAobmV3IFNrLmJ1aWx0aW4uSU9FcnJvcihcIkNhbm5vdCBhY2Nlc3MgdXJsOiBcIit1cmwrXCIgd2FzIG5vdCBtYWRlIGF2YWlsYWJsZSBmb3IgdGhpcyBhc3NpZ25tZW50XCIpKTtcclxuICAgICAgICAvL30pO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5GaWxlKCkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgbWV0aG9kIVwiKTtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9XHJcblxyXG4gICAgd3JpdGVGaWxlKCkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgbWV0aG9kIVwiKTtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLnByaW50KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dCgpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmltcGxlbWVudGVkIG1ldGhvZCFcIik7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpbnB1dE1vY2tGdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoU2sucXVldWVkSW5wdXQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBTay5xdWV1ZWRJbnB1dC5wb3AoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGdldEltYWdlUHJveHkoKSB7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgfVxyXG5cclxuICAgIHN0ZXAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxhc3RTdGVwKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpc0ZvcmJpZGRlbihmaWxlbmFtZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzdWNjZXNzKG1vZHVsZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0IHN1Y2Nlc3MgZXhlY3V0aW9uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZhaWx1cmUoZXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBYnN0cmFjdCBmYWlsdXJlIGV4ZWN1dGlvblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBkdW1teU91dFNhbmRib3goKSB7XHJcbiAgICAgICAgLy9Tay5idWlsdGluRmlsZXMuZmlsZXNbXCJzcmMvbGliL3BlZGFsL3NhbmRib3gvc2FuZGJveC5weVwiXSA9IFwiY2xhc3MgU2FuZGJveDogcGFzc1xcbmRlZiBydW4oKTogcGFzc1xcbmRlZiByZXNldCgpOiBwYXNzXFxuXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7U3R1ZGVudENvbmZpZ3VyYXRpb259IGZyb20gXCIuL3N0dWRlbnRcIjtcclxuaW1wb3J0IHtTdGF0dXNTdGF0ZX0gZnJvbSBcIi4uL3NlcnZlclwiO1xyXG5pbXBvcnQge0Jsb2NrUHlUcmFjZX0gZnJvbSBcIi4uL3RyYWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXZhbENvbmZpZ3VyYXRpb24gZXh0ZW5kcyBTdHVkZW50Q29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lLCBjb2RlKSB7XHJcbiAgICAgICAgLy8gVE9ETzogZml4IHRvIGJlIGN1cnJlbnRseSBhZGRlZCBsaW5lXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5tZXNzYWdlKFwiUnVubmluZy4uLlwiKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJhbnN3ZXJcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSBcIl8gPSBcIiArIGNvZGU7XHJcbiAgICAgICAgU2suYWZ0ZXJTaW5nbGVFeGVjdXRpb24gPSBudWxsO1xyXG5cclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuXHJcbiAgICAgICAgU2sucmV0YWluR2xvYmFscyA9IHRydWU7XHJcbiAgICAgICAgU2suZ2xvYmFscyA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uc3R1ZGVudC5nbG9iYWxzKCk7XHJcblxyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlgtRmlsZS5BZGRcIiwgXCJcIiwgXCJcIiwgY29kZSwgXCJldmFsdWF0aW9uc1wiKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJDb21waWxlXCIsIFwiXCIsIFwiXCIsIHRoaXMuY29kZSwgXCJldmFsdWF0aW9uc1wiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2Vzcyhtb2R1bGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkV2YWwgc3VjY2Vzc1wiKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJYLUV2YWx1YXRlLlByb2dyYW1cIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJldmFsdWF0aW9uc1wiKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuZ2xvYmFscyhTay5nbG9iYWxzKTtcclxuICAgICAgICBTay5nbG9iYWxzID0ge307XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSB0aGlzLmZpbGVuYW1lO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uc3R1ZGVudC5yZXN1bHRzID0gbW9kdWxlO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUucHJpbnRWYWx1ZShTay5mZmkucmVtYXBUb0pzKG1vZHVsZS4kZC5fLiRyKCkpKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAvL3RoaXMuc3RlcChtb2R1bGUuJGQsIG1vZHVsZS4kZCwtMSwgMCwgZmlsZW5hbWUgKyBcIi5weVwiKTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0U3RlcCgpO1xyXG4gICAgICAgICAgICByZXBvcnRbXCJzdHVkZW50XCJdID0ge1xyXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNlXCI6IHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZSxcclxuICAgICAgICAgICAgICAgIFwibGluZXNcIjogdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlLm1hcCh4ID0+IHgubGluZSksXHJcbiAgICAgICAgICAgICAgICBcInJlc3VsdHNcIjogbW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgXCJvdXRwdXRcIjogdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5vdXRwdXQsXHJcbiAgICAgICAgICAgICAgICBcImV2YWx1YXRpb25cIjogdGhpcy5jb2RlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmYWlsdXJlKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFdmFsIGZhaWx1cmVcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5GQUlMRUQpO1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiQ29tcGlsZS5FcnJvclwiLCBcIlwiLCBcIlwiLCBlcnJvci50b1N0cmluZygpLCBcImV2YWx1YXRpb25zXCIpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHJlcG9ydFtcInN0dWRlbnRcIl0gPSB7XHJcbiAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImVycm9yXCI6IGVycm9yLFxyXG4gICAgICAgICAgICAgICAgXCJldmFsdWF0aW9uXCI6IGZhbHNlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NvbmZpZ3VyYXRpb24sIEVNUFRZX01PRFVMRX0gZnJvbSBcIi4vY29uZmlndXJhdGlvbnMuanNcIjtcclxuaW1wb3J0IHskc2tfbW9kX2luc3RydWN0b3J9IGZyb20gXCIuLi9za19tb2RfaW5zdHJ1Y3RvclwiO1xyXG5cclxuY29uc3QgVVRJTElUWV9NT0RVTEVfQ09ERSA9IFwidmFyICRidWlsdGlubW9kdWxlID0gXCIgKyAkc2tfbW9kX2luc3RydWN0b3IudG9TdHJpbmcoKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnN0cnVjdG9yQ29uZmlndXJhdGlvbiBleHRlbmRzIENvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIC8vIEluc3RydWN0b3JzIGhhdmUgbm8gbGltaXRzXHJcbiAgICAgICAgU2suZXhlY0xpbWl0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIC8vIFN0ZXBwZXIhIEV4ZWN1dGVkIGFmdGVyIGV2ZXJ5IHN0YXRlbWVudC5cclxuICAgICAgICBTay5hZnRlclNpbmdsZUV4ZWN1dGlvbiA9IG51bGw7IC8vIDEwICoxMDAwXHJcbiAgICAgICAgLy8gTXV0ZSBldmVyeXRoaW5nXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkubXV0ZVByaW50ZXIodHJ1ZSk7XHJcbiAgICAgICAgLy8gRGlzYWJsZSBpbnB1dCBib3hcclxuICAgICAgICBTay5xdWV1ZWRJbnB1dCA9IFtdO1xyXG4gICAgICAgIC8vIFRPRE8gU2suaW5wdXRmdW4gPSBCbG9ja1B5RW5naW5lLmlucHV0TW9ja0Z1bmN0aW9uO1xyXG4gICAgICAgIC8vIFRPRE86IEFsbG93IGlucHV0IGZ1bmN0aW9uIHRvIGRpc2FibGUgdGhlIHRpbWVyLCBzb21laG93XHJcbiAgICAgICAgLy8gRW5hYmxlIHV0aWxpdHkgbW9kZVxyXG4gICAgICAgIFNrLmJ1aWx0aW5GaWxlcy5maWxlc1tcInNyYy9saWIvdXRpbGl0eS9fX2luaXRfXy5qc1wiXSA9IFVUSUxJVFlfTU9EVUxFX0NPREU7XHJcbiAgICAgICAgU2suYnVpbHRpbkZpbGVzLmZpbGVzW1wiLi9faW5zdHJ1Y3Rvci9fX2luaXRfXy5qc1wiXSA9IEVNUFRZX01PRFVMRTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBvcGVuRmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIGxldCBmb3VuZCA9IHRoaXMubWFpbi5jb21wb25lbnRzLmZpbGVTeXN0ZW0uc2VhcmNoRm9yRmlsZShmaWxlbmFtZSwgZmFsc2UpO1xyXG4gICAgICAgIGlmIChmb3VuZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBTay5idWlsdGluLk9TRXJyb3IoXCJGaWxlIG5vdCBmb3VuZDogXCIrZmlsZW5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmb3VuZC5jb250ZW50cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbXBvcnRGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgaWYgKGZpbGVuYW1lID09PSBcIi4vYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGVuYW1lID09PSBcIi4vX2luc3RydWN0b3Ivb25fcnVuLnB5XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uUnVuKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlbmFtZSA9PT0gXCIuL19pbnN0cnVjdG9yL29uX2V2YWwucHlcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25FdmFsKCkgfHwgXCJcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGVuYW1lID09PSBcIi4vX2luc3RydWN0b3IvX19pbml0X18uanNcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gRU1QVFlfTU9EVUxFO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoU2suYnVpbHRpbkZpbGVzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFNrLmJ1aWx0aW4uT1NFcnJvcihcIkJ1aWx0LWluIG1vZHVsZXMgbm90IGFjY2Vzc2libGUuXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoU2suYnVpbHRpbkZpbGVzW1wiZmlsZXNcIl1bZmlsZW5hbWVdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW5GaWxlc1tcImZpbGVzXCJdW2ZpbGVuYW1lXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgZm91bmQgPSB0aGlzLm1haW4uY29tcG9uZW50cy5maWxlU3lzdGVtLnNlYXJjaEZvckZpbGUoZmlsZW5hbWUsIGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKGZvdW5kID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBTay5idWlsdGluLk9TRXJyb3IoXCJGaWxlIG5vdCBmb3VuZDogJ1wiK2ZpbGVuYW1lICsgXCInXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kLmNvbnRlbnRzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlucHV0KHByb21wdE1lc3NhZ2UpIHtcclxuICAgICAgICByZXR1cm4gXCJBcHBsZVBpZVwiO1xyXG4gICAgICAgIHJldHVybiBTay5xdWV1ZWRJbnB1dC5wb3AoKTtcclxuICAgICAgICAvKnJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKFNrLnF1ZXVlZElucHV0LnBvcCgpKTtcclxuICAgICAgICB9KTsqL1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7SW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2luc3RydWN0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBPbkNoYW5nZUNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBJbnN0cnVjdG9yQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwib25fY2hhbmdlLnB5XCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UoKTtcclxuXHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnRyaWdnZXJPbkNoYW5nZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtJbnN0cnVjdG9yQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vaW5zdHJ1Y3RvclwiO1xyXG5pbXBvcnQge1N0YXR1c1N0YXRlfSBmcm9tIFwiLi4vc2VydmVyXCI7XHJcbmltcG9ydCB7TkVXX0xJTkVfUkVHRVh9IGZyb20gXCIuL29uX3J1blwiO1xyXG5pbXBvcnQge2luZGVudH0gZnJvbSBcIi4uL3V0aWxpdGllc1wiO1xyXG5cclxuLyoqXHJcbiAqIEByZXR1cm4ge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBjb25zdCBXUkFQX0lOU1RSVUNUT1JfQ09ERSA9IGZ1bmN0aW9uIChzdHVkZW50Q29kZSwgaW5zdHJ1Y3RvckNvZGUsIHF1aWNrLCBpc1NhZmUpIHtcclxuICAgIGxldCBzYWZlQ29kZSA9IEpTT04uc3RyaW5naWZ5KHN0dWRlbnRDb2RlKTtcclxuICAgIGxldCBpbmRlbnRlZENvZGUgPSBpbmRlbnQoaW5kZW50KGlzU2FmZSA/IHN0dWRlbnRDb2RlIDogXCJOb25lXCIpKTtcclxuXHJcbiAgICByZXR1cm4gYFxyXG5mcm9tIHBlZGFsLnJlcG9ydCBpbXBvcnQgKlxyXG5mcm9tIHBlZGFsLnNvdXJjZSBpbXBvcnQgc2V0X3NvdXJjZVxyXG5zZXRfc291cmNlKCR7c2FmZUNvZGV9KVxyXG5kZWYgcnVuX3N0dWRlbnQoKTpcclxuICAgICMgbGltaXRfZXhlY3V0aW9uX3RpbWUoKVxyXG4gICAgdHJ5OlxyXG4ke2luZGVudGVkQ29kZX1cclxuICAgIGV4Y2VwdCBFeGNlcHRpb24gYXMgZXJyb3I6XHJcbiAgICAgICAgIyB1bmxpbWl0X2V4ZWN1dGlvbl90aW1lKClcclxuICAgICAgICByZXR1cm4gZXJyb3JcclxuICAgICMgdW5saW1pdF9leGVjdXRpb25fdGltZSgpXHJcbiAgICByZXR1cm4gTm9uZVxyXG5mcm9tIHBlZGFsLnNhbmRib3ggaW1wb3J0IGNvbXBhdGliaWxpdHlcclxuZnJvbSB1dGlsaXR5IGltcG9ydCAqXHJcbnN0dWRlbnQgPSBnZXRfc3R1ZGVudF9kYXRhKClcclxuY29tcGF0aWJpbGl0eS5zZXRfc2FuZGJveChzdHVkZW50KVxyXG5lcnJvciwgcG9zaXRpb24gPSBnZXRfc3R1ZGVudF9lcnJvcigpXHJcbmNvbXBhdGliaWxpdHkucmFpc2VfZXhjZXB0aW9uKGVycm9yLCBwb3NpdGlvbilcclxuY29tcGF0aWJpbGl0eS5ydW5fc3R1ZGVudCA9IHJ1bl9zdHVkZW50XHJcbmNvbXBhdGliaWxpdHkuZ2V0X3Bsb3RzID0gZ2V0X3Bsb3RzXHJcbmNvbXBhdGliaWxpdHkuZ2V0X291dHB1dCA9IGdldF9vdXRwdXRcclxuY29tcGF0aWJpbGl0eS5yZXNldF9vdXRwdXQgPSByZXNldF9vdXRwdXRcclxuY29tcGF0aWJpbGl0eS50cmFjZV9saW5lcyA9IHRyYWNlX2xpbmVzXHJcbmRlZiBjYXB0dXJlX291dHB1dChmdW5jLCAqYXJncyk6XHJcbiAgIHJlc2V0X291dHB1dCgpXHJcbiAgIGZ1bmMoKmFyZ3MpXHJcbiAgIHJldHVybiBnZXRfb3V0cHV0KClcclxuY29tcGF0aWJpbGl0eS5jYXB0dXJlX291dHB1dCA9IGNhcHR1cmVfb3V0cHV0XHJcbiR7aW5zdHJ1Y3RvckNvZGV9XHJcbmZyb20gcGVkYWwucmVzb2x2ZXJzIGltcG9ydCBzaW1wbGVcclxuU1VDQ0VTUywgU0NPUkUsIENBVEVHT1JZLCBMQUJFTCwgTUVTU0FHRSwgREFUQSwgSElERSA9IHNpbXBsZS5yZXNvbHZlKClcclxuYDtcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBPbkV2YWxDb25maWd1cmF0aW9uIGV4dGVuZHMgSW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcIl9pbnN0cnVjdG9yLm9uX2V2YWxcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vbkV2YWwoKSB8fCBcIlwiO1xyXG5cclxuICAgICAgICBsZXQgZGlzYWJsZVRpZmEgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kaXNhYmxlVGlmYSgpO1xyXG5cclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGxldCBzdHVkZW50Q29kZVNhZmUgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHMuc3R1ZGVudC5ldmFsdWF0aW9uIHx8IFwiTm9uZVwiO1xyXG4gICAgICAgIHRoaXMuZHVtbXlPdXRTYW5kYm94KCk7XHJcbiAgICAgICAgbGV0IGluc3RydWN0b3JDb2RlID0gdGhpcy5jb2RlO1xyXG4gICAgICAgIGxldCBsaW5lT2Zmc2V0ID0gaW5zdHJ1Y3RvckNvZGUuc3BsaXQoTkVXX0xJTkVfUkVHRVgpLmxlbmd0aDtcclxuICAgICAgICBsZXQgaXNTYWZlID0gIXJlcG9ydFtcInBhcnNlclwiXS5lbXB0eSAmJiByZXBvcnRbXCJ2ZXJpZmllclwiXS5zdWNjZXNzO1xyXG4gICAgICAgIGluc3RydWN0b3JDb2RlID0gV1JBUF9JTlNUUlVDVE9SX0NPREUoc3R1ZGVudENvZGVTYWZlLCBpbnN0cnVjdG9yQ29kZSwgZGlzYWJsZVRpZmEsIGlzU2FmZSk7XHJcbiAgICAgICAgbGluZU9mZnNldCA9IGluc3RydWN0b3JDb2RlLnNwbGl0KE5FV19MSU5FX1JFR0VYKS5sZW5ndGggLSBsaW5lT2Zmc2V0O1xyXG4gICAgICAgIHJlcG9ydFtcImluc3RydWN0b3JcIl0gPSB7XHJcbiAgICAgICAgICAgIFwiY29tcGxpbWVudHNcIjogW10sXHJcbiAgICAgICAgICAgIFwiZmlsZW5hbWVcIjogXCIuL19pbnN0cnVjdG9yL29uX2V2YWwucHlcIixcclxuICAgICAgICAgICAgXCJjb2RlXCI6IGluc3RydWN0b3JDb2RlLFxyXG4gICAgICAgICAgICBcImxpbmVPZmZzZXRcIjogbGluZU9mZnNldFxyXG4gICAgICAgICAgICAvLydjb21wbGV0ZSc6IGZhbHNlIC8vIEFjdHVhbGx5LCBsZXQncyB1c2UgdW5kZWZpbmVkIGZvciBub3cuXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNvZGUgPSBpbnN0cnVjdG9yQ29kZTtcclxuXHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcblxyXG4gICAgICAgIC8vU2sucmV0YWluR2xvYmFscyA9IGZhbHNlO1xyXG4gICAgICAgIFNrLmdsb2JhbHMgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmluc3RydWN0b3IuZ2xvYmFscztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2Vzcyhtb2R1bGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9uRXZhbCBzdWNjZXNzXCIpO1xyXG4gICAgICAgIC8vIFRPRE86IEFjdHVhbGx5IHBhcnNlIHJlc3VsdHNcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmluc3RydWN0b3IuZ2xvYmFscyA9IFNrLmdsb2JhbHM7XHJcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBtb2R1bGUuJGQub25fZXZhbC4kZDtcclxuICAgICAgICBjb25zb2xlLmxvZyhtb2R1bGUuJGQpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRGZWVkYmFjayhyZXN1bHRzKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHNbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IHRydWU7XHJcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuU1VDQ0VTUyk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29ycmVjdChzdWNjZXNzIHx8IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3QoKSk7XHJcbiAgICAgICAgLy8gQ2Fubm90IGV4Y2VlZCAxIHBvaW50LCBjYW5ub3QgZ28gYmVsb3cgMCBwb2ludHNcclxuICAgICAgICBsZXQgc2NvcmUgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuU0NPUkUpO1xyXG4gICAgICAgIHNjb3JlID0gTWF0aC5tYXgoMC4wLCBNYXRoLm1pbigxLjAsIHNjb3JlKSk7XHJcbiAgICAgICAgbGV0IG9sZFNjb3JlID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uc2NvcmUoKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5zY29yZShNYXRoLm1heChvbGRTY29yZSwgc2NvcmUpKTtcclxuICAgICAgICAvLyBIaWRlIHN0YXR1c1xyXG4gICAgICAgIGxldCBoaWRlID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLkhJREUpO1xyXG4gICAgICAgIC8vIEFuZCBmaXJlIHRoZSByZXN1bHQhXHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLnVwZGF0ZVN1Ym1pc3Npb24oc2NvcmUsIHN1Y2Nlc3MsIGhpZGUsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICAvL2FmdGVyKG1vZHVsZSk7XHJcblxyXG4gICAgICAgIC8qaWYgKHN1Y2Nlc3MgJiYgdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzLnN1Y2Nlc3ModGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuaWQoKSk7XHJcbiAgICAgICAgfSovXHJcblxyXG4gICAgICAgIGlmICghU2suZXhlY3V0aW9uUmVwb3J0cy5pbnN0cnVjdG9yLnNjcm9sbGluZykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5zY3JvbGxUb0JvdHRvbSgpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmFpbHVyZShlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT25FdmFsIGZhaWx1cmVcIik7XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBpZiAoZXJyb3IudHAkbmFtZSA9PT0gXCJHcmFjZWZ1bEV4aXRcIikge1xyXG4gICAgICAgICAgICByZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuRkFJTEVEKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wiY29kZVwiXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5wcmVzZW50SW50ZXJuYWxFcnJvcihlcnJvciwgdGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgIC8vcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0gPSBmYWxzZTtcclxuICAgICAgICAgICAgLy9yZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wiZXJyb3JcIl0gPSBlcnJvcjtcclxuICAgICAgICAgICAgLy9UT0RPOiByZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wibGluZV9vZmZzZXRcIl0gPSBsaW5lT2Zmc2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1RPRE86IGFmdGVyKGVycm9yKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7aW5kZW50fSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XHJcbmltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCIuLi9zZXJ2ZXJcIjtcclxuaW1wb3J0IHtJbnN0cnVjdG9yQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vaW5zdHJ1Y3RvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5FV19MSU5FX1JFR0VYID0gL1xcclxcbnxcXHJ8XFxuLztcclxuLyoqXHJcbiAqIEByZXR1cm4ge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBjb25zdCBXUkFQX0lOU1RSVUNUT1JfQ09ERSA9IGZ1bmN0aW9uIChzdHVkZW50Q29kZSwgaW5zdHJ1Y3RvckNvZGUsIHF1aWNrLCBpc1NhZmUpIHtcclxuICAgIGxldCBzYWZlQ29kZSA9IEpTT04uc3RyaW5naWZ5KHN0dWRlbnRDb2RlKTtcclxuICAgIGxldCBpbmRlbnRlZENvZGUgPSBpbmRlbnQoaW5kZW50KGlzU2FmZSA/IHN0dWRlbnRDb2RlIDogXCJwYXNzXCIpKTtcclxuICAgIGxldCB0aWZhQW5hbHlzaXMgPSBcIlwiO1xyXG4gICAgaWYgKCFxdWljaykge1xyXG4gICAgICAgIHRpZmFBbmFseXNpcyA9IFwiZnJvbSBwZWRhbC50aWZhIGltcG9ydCB0aWZhX2FuYWx5c2lzXFxudGlmYV9hbmFseXNpcyhGYWxzZSlcIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiBBZGQgaW4gU2sucXVldWVkSW5wdXQgdG8gYmUgcGFzc2VkIGluXHJcblxyXG4gICAgcmV0dXJuIGBcclxuZnJvbSBwZWRhbC5yZXBvcnQgaW1wb3J0ICpcclxuZnJvbSBwZWRhbC5zb3VyY2UgaW1wb3J0IHNldF9zb3VyY2Vcclxuc2V0X3NvdXJjZSgke3NhZmVDb2RlfSwgXCJhbnN3ZXIucHlcIilcclxuJHt0aWZhQW5hbHlzaXN9XHJcbmZyb20gcGVkYWwuc2FuZGJveC5zYW5kYm94IGltcG9ydCBTYW5kYm94XHJcbmZyb20gcGVkYWwuc2FuZGJveCBpbXBvcnQgY29tcGF0aWJpbGl0eVxyXG5mcm9tIHV0aWxpdHkgaW1wb3J0ICpcclxuc3R1ZGVudCA9IE1BSU5fUkVQT1JUWydzYW5kYm94J11bJ3J1biddID0gU2FuZGJveCgpXHJcbiNzdHVkZW50LnJ1bihNQUlOX1JFUE9SVFsnc291cmNlJ11bJ2NvZGUnXSwgTUFJTl9SRVBPUlRbJ3NvdXJjZSddWydmaWxlbmFtZSddLCByZXBvcnRfZXhjZXB0aW9ucz1GYWxzZSlcclxuI2RlYnVnKHN0dWRlbnQpXHJcbnN0dWRlbnQucmVwb3J0X2V4Y2VwdGlvbnNfbW9kZSA9IFRydWVcclxuaWYgbm90IGdldF9tb2RlbF9pbmZvKCdhc3NpZ25tZW50LnNldHRpbmdzLmRpc2FibGVJbnN0cnVjdG9yUnVuJyk6XHJcbiAgICBjb21wYXRpYmlsaXR5LnJ1bl9zdHVkZW50KHJhaXNlX2V4Y2VwdGlvbnM9RmFsc2UpXHJcbiNsb2coc3R1ZGVudC5kYXRhKVxyXG4jc3R1ZGVudCA9IGdldF9zdHVkZW50X2RhdGEoKVxyXG4jZXJyb3IsIHBvc2l0aW9uID0gZ2V0X3N0dWRlbnRfZXJyb3IoKVxyXG4jY29tcGF0aWJpbGl0eS5yYWlzZV9leGNlcHRpb24oZXJyb3IsIHBvc2l0aW9uKVxyXG5ydW5fc3R1ZGVudCA9IGNvbXBhdGliaWxpdHkucnVuX3N0dWRlbnRcclxucmVzZXRfb3V0cHV0ID0gY29tcGF0aWJpbGl0eS5yZXNldF9vdXRwdXRcclxucXVldWVfaW5wdXQgPSBjb21wYXRpYmlsaXR5LnF1ZXVlX2lucHV0XHJcbmdldF9vdXRwdXQgPSBjb21wYXRpYmlsaXR5LmdldF9vdXRwdXRcclxuZ2V0X3Bsb3RzID0gY29tcGF0aWJpbGl0eS5nZXRfcGxvdHNcclxuY29tcGF0aWJpbGl0eS50cmFjZV9saW5lcyA9IHRyYWNlX2xpbmVzXHJcbmZyb20gcGVkYWwgaW1wb3J0IHF1ZXN0aW9uc1xyXG5xdWVzdGlvbnMuc2hvd19xdWVzdGlvbiA9IHNldF9pbnN0cnVjdGlvbnNcclxuIyBUT0RPOiBSZW1vdmUgdGhlIG5lZWQgZm9yIHRoaXMgaGFjayFcclxuZGVmIGNhcHR1cmVfb3V0cHV0KGZ1bmMsICphcmdzKTpcclxuICAgcmVzZXRfb3V0cHV0KClcclxuICAgc3R1ZGVudC5jYWxsKGZ1bmMuX19uYW1lX18sICphcmdzKVxyXG4gICByZXR1cm4gZ2V0X291dHB1dCgpXHJcbmNvbXBhdGliaWxpdHkuY2FwdHVyZV9vdXRwdXQgPSBjYXB0dXJlX291dHB1dFxyXG5cclxuZnJvbSBwZWRhbC5jYWl0LmNhaXRfYXBpIGltcG9ydCBwYXJzZV9wcm9ncmFtXHJcbiR7aW5zdHJ1Y3RvckNvZGV9XHJcbmZyb20gcGVkYWwucmVzb2x2ZXJzIGltcG9ydCBzaW1wbGVcclxuU1VDQ0VTUywgU0NPUkUsIENBVEVHT1JZLCBMQUJFTCwgTUVTU0FHRSwgREFUQSwgSElERSA9IHNpbXBsZS5yZXNvbHZlKClcclxuYDtcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBPblJ1bkNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBJbnN0cnVjdG9yQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwiX2luc3RydWN0b3Iub25fcnVuXCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25SdW4oKTtcclxuXHJcbiAgICAgICAgbGV0IGRpc2FibGVUaWZhID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuZGlzYWJsZVRpZmEoKTtcclxuXHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBsZXQgc3R1ZGVudENvZGVTYWZlID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZSgpO1xyXG4gICAgICAgIHRoaXMuZHVtbXlPdXRTYW5kYm94KCk7XHJcbiAgICAgICAgbGV0IGluc3RydWN0b3JDb2RlID0gdGhpcy5jb2RlO1xyXG4gICAgICAgIGxldCBsaW5lT2Zmc2V0ID0gaW5zdHJ1Y3RvckNvZGUuc3BsaXQoTkVXX0xJTkVfUkVHRVgpLmxlbmd0aDtcclxuICAgICAgICBsZXQgaXNTYWZlID0gIXJlcG9ydFtcInBhcnNlclwiXS5lbXB0eSAmJiByZXBvcnRbXCJ2ZXJpZmllclwiXS5zdWNjZXNzO1xyXG4gICAgICAgIGluc3RydWN0b3JDb2RlID0gV1JBUF9JTlNUUlVDVE9SX0NPREUoc3R1ZGVudENvZGVTYWZlLCBpbnN0cnVjdG9yQ29kZSwgZGlzYWJsZVRpZmEsIGlzU2FmZSk7XHJcbiAgICAgICAgbGluZU9mZnNldCA9IGluc3RydWN0b3JDb2RlLnNwbGl0KE5FV19MSU5FX1JFR0VYKS5sZW5ndGggLSBsaW5lT2Zmc2V0IC0gNDtcclxuICAgICAgICByZXBvcnRbXCJpbnN0cnVjdG9yXCJdID0ge1xyXG4gICAgICAgICAgICBcImNvbXBsaW1lbnRzXCI6IFtdLFxyXG4gICAgICAgICAgICBcImZpbGVuYW1lXCI6IFwiLi9faW5zdHJ1Y3Rvci9vbl9ydW4ucHlcIixcclxuICAgICAgICAgICAgXCJjb2RlXCI6IGluc3RydWN0b3JDb2RlLFxyXG4gICAgICAgICAgICBcImxpbmVPZmZzZXRcIjogbGluZU9mZnNldFxyXG4gICAgICAgICAgICAvLydjb21wbGV0ZSc6IGZhbHNlIC8vIEFjdHVhbGx5LCBsZXQncyB1c2UgdW5kZWZpbmVkIGZvciBub3cuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5jb2RlID0gaW5zdHJ1Y3RvckNvZGU7XHJcblxyXG4gICAgICAgIFNrLnJldGFpbkdsb2JhbHMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2Vzcyhtb2R1bGUpIHtcclxuICAgICAgICAvLyBUT0RPIExvZ2dpbmchISEhXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPblJ1biBzdWNjZXNzXCIpO1xyXG4gICAgICAgIC8vIFRPRE86IEFjdHVhbGx5IHBhcnNlIHJlc3VsdHNcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmluc3RydWN0b3IuZ2xvYmFscyA9IFNrLmdsb2JhbHM7XHJcbiAgICAgICAgU2suZ2xvYmFscyA9IHt9O1xyXG4gICAgICAgIGxldCByZXN1bHRzID0gbW9kdWxlLiRkLm9uX3J1bi4kZDtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5wcmVzZW50RmVlZGJhY2socmVzdWx0cyk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzW1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0gPSB0cnVlO1xyXG4gICAgICAgIGxldCBzdWNjZXNzID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLlNVQ0NFU1MpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3Qoc3VjY2VzcyB8fCB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb3JyZWN0KCkpO1xyXG4gICAgICAgIC8vIENhbm5vdCBleGNlZWQgMSBwb2ludCwgY2Fubm90IGdvIGJlbG93IDAgcG9pbnRzXHJcbiAgICAgICAgbGV0IHNjb3JlID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLlNDT1JFKTtcclxuICAgICAgICBzY29yZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEwMCwgc2NvcmUpKTtcclxuICAgICAgICBsZXQgb2xkU2NvcmUgPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5zY29yZSgpO1xyXG4gICAgICAgIHNjb3JlID0gTWF0aC5tYXgob2xkU2NvcmUsIHNjb3JlKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5zY29yZShzY29yZSk7XHJcbiAgICAgICAgLy8gSGlkZSBzdGF0dXNcclxuICAgICAgICBsZXQgaGlkZSA9IFNrLmZmaS5yZW1hcFRvSnMocmVzdWx0cy5ISURFKTtcclxuICAgICAgICAvLyBBbmQgZmlyZSB0aGUgcmVzdWx0IVxyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci51cGRhdGVTdWJtaXNzaW9uKHNjb3JlLCBzdWNjZXNzLCBoaWRlLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICAgICAgLy9hZnRlcihtb2R1bGUpO1xyXG5cclxuICAgICAgICAvKmlmIChzdWNjZXNzICYmIHRoaXMubWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLmNhbGxiYWNrcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLmNhbGxiYWNrcy5zdWNjZXNzKHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmlkKCkpO1xyXG4gICAgICAgIH0qL1xyXG5cclxuICAgICAgICBpZiAoIVNrLmV4ZWN1dGlvblJlcG9ydHMuaW5zdHJ1Y3Rvci5zY3JvbGxpbmcpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUuc2Nyb2xsVG9Cb3R0b20oKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZhaWx1cmUoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9uUnVuIGZhaWx1cmVcIik7XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBpZiAoZXJyb3IudHAkbmFtZSA9PT0gXCJHcmFjZWZ1bEV4aXRcIikge1xyXG4gICAgICAgICAgICByZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuRkFJTEVEKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wiY29kZVwiXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5wcmVzZW50SW50ZXJuYWxFcnJvcihlcnJvciwgdGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgIC8vcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0gPSBmYWxzZTtcclxuICAgICAgICAgICAgLy9yZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wiZXJyb3JcIl0gPSBlcnJvcjtcclxuICAgICAgICAgICAgLy9UT0RPOiByZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wibGluZV9vZmZzZXRcIl0gPSBsaW5lT2Zmc2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1RPRE86IGFmdGVyKGVycm9yKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7T25SdW5Db25maWd1cmF0aW9ufSBmcm9tIFwiLi9vbl9ydW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBPblNhbXBsZUNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBPblJ1bkNvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcIm9uX3J1bi5weVwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uUnVuKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtTdHVkZW50Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4vc3R1ZGVudFwiO1xyXG5pbXBvcnQge1N0YXR1c1N0YXRlfSBmcm9tIFwiLi4vc2VydmVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUnVuQ29uZmlndXJhdGlvbiBleHRlbmRzIFN0dWRlbnRDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLm1lc3NhZ2UoXCJSdW5uaW5nLi4uXCIpO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcImFuc3dlclwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIuc2F2ZUZpbGUoXCJhbnN3ZXIucHlcIiwgdGhpcy5jb2RlLCBudWxsKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJDb21waWxlXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiYW5zd2VyLnB5XCIpO1xyXG5cclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuXHJcbiAgICAgICAgZW5naW5lLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQYXJzZSgpO1xyXG5cclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHNbXCJ2ZXJpZmllclwiXSA9IHtcclxuICAgICAgICAgICAgXCJzdWNjZXNzXCI6IEJvb2xlYW4odGhpcy5jb2RlLnRyaW0oKSksXHJcbiAgICAgICAgICAgIFwiY29kZVwiOiB0aGlzLmNvZGVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBTay5yZXRhaW5HbG9iYWxzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Y2Nlc3MobW9kdWxlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSdW4gc3VjY2Vzc1wiKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJSdW4uUHJvZ3JhbVwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcImFuc3dlci5weVwiKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5kaXJ0eVN1Ym1pc3Npb24oZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUuZmluaXNoVHVydGxlcygpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uc3R1ZGVudC5nbG9iYWxzKFNrLmdsb2JhbHMpO1xyXG4gICAgICAgIFNrLmdsb2JhbHMgPSB7fTtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGxldCBmaWxlbmFtZSA9IHRoaXMuZmlsZW5hbWU7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LnJlc3VsdHMgPSBtb2R1bGU7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5oaWRlRXZhbHVhdGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLmJlZ2luRXZhbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0ZXAobW9kdWxlLiRkLCBtb2R1bGUuJGQsLTEsIDAsIGZpbGVuYW1lICsgXCIucHlcIik7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFN0ZXAoKTtcclxuICAgICAgICAgICAgcmVwb3J0W1wic3R1ZGVudFwiXSA9IHtcclxuICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFjZVwiOiB0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIudHJhY2UsXHJcbiAgICAgICAgICAgICAgICBcImxpbmVzXCI6IHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZS5tYXAoeCA9PiB4LmxpbmUpLFxyXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRzXCI6IG1vZHVsZSxcclxuICAgICAgICAgICAgICAgIFwib3V0cHV0XCI6IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ub3V0cHV0XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmYWlsdXJlKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSdW4gZmFpbHVyZVwiKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLkZBSUxFRCk7XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBpZiAocmVwb3J0LnBhcnNlci5zdWNjZXNzICYmIHJlcG9ydC52ZXJpZmllci5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIkNvbXBpbGUuRXJyb3JcIiwgXCJcIiwgXCJcIiwgZXJyb3IudG9TdHJpbmcoKSwgXCJhbnN3ZXIucHlcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiUnVuLlByb2dyYW1cIiwgXCJQcm9ncmFtRXJyb3JPdXRwdXRcIiwgXCJcIiwgZXJyb3IudG9TdHJpbmcoKSwgXCJhbnN3ZXIucHlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHJlcG9ydFtcInN0dWRlbnRcIl0gPSB7XHJcbiAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImVycm9yXCI6IGVycm9yLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtTdHVkZW50Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4vc3R1ZGVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNhbXBsZUNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBTdHVkZW50Q29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgLy8gVE9ETzogRml4IHRvIGJlIHRoZSBjdXJyZW50IHNhbXBsZSBzdWJtaXNzaW9uXHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwiYW5zd2VyLnB5XCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gXCJwcmludCgnTm90IHJlYWR5IHlldCEnKVwiO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImltcG9ydCB7Q29uZmlndXJhdGlvbiwgRU1QVFlfTU9EVUxFfSBmcm9tIFwiLi9jb25maWd1cmF0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0dWRlbnRDb25maWd1cmF0aW9uIGV4dGVuZHMgQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgLy8gTGltaXQgZXhlY3V0aW9uIHRvIDUgc2Vjb25kc1xyXG4gICAgICAgIGxldCBzZXR0aW5ncyA9IHRoaXMubWFpbi5tb2RlbC5zZXR0aW5ncztcclxuICAgICAgICBTay5leGVjTGltaXRGdW5jdGlvbiA9ICgpID0+XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRpc2FibGVUaW1lb3V0KCkgPyBJbmZpbml0eSA6IDMwMDA7XHJcbiAgICAgICAgU2suZXhlY0xpbWl0ID0gU2suZXhlY0xpbWl0RnVuY3Rpb24oKTtcclxuICAgICAgICAvLyBTdGVwcGVyISBFeGVjdXRlZCBhZnRlciBldmVyeSBzdGF0ZW1lbnQuXHJcbiAgICAgICAgU2suYWZ0ZXJTaW5nbGVFeGVjdXRpb24gPSB0aGlzLnN0ZXAuYmluZCh0aGlzKTtcclxuICAgICAgICAvLyBVbm11dGUgZXZlcnl0aGluZ1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lm11dGVQcmludGVyKGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy8gRnVuY3Rpb24gdG8gY2FsbCBhZnRlciBlYWNoIHN0ZXBcclxuICAgICAgICAvLyBhZnRlclNpbmdsZUV4ZWN1dGlvblxyXG5cclxuICAgICAgICBTay5idWlsdGluRmlsZXMuZmlsZXNbXCJzcmMvbGliL3V0aWxpdHkvX19pbml0X18uanNcIl0gPSBFTVBUWV9NT0RVTEU7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5GaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgbGV0IGZvdW5kID0gdGhpcy5tYWluLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5zZWFyY2hGb3JGaWxlKGZpbGVuYW1lLCB0cnVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhmaWxlbmFtZSwgZm91bmQpO1xyXG4gICAgICAgIGlmIChmb3VuZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBTay5idWlsdGluLk9TRXJyb3IoXCJGaWxlIG5vdCBmb3VuZDogXCIrZmlsZW5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmb3VuZC5jb250ZW50cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbXBvcnRGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNGb3JiaWRkZW4oZmlsZW5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IFwiRmlsZSBub3QgYWNjZXNzaWJsZTogJ1wiICsgZmlsZW5hbWUgKyBcIidcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGVuYW1lID09PSBcIi4vYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFNrLmJ1aWx0aW5GaWxlcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBTay5idWlsdGluLk9TRXJyb3IoXCJCdWlsdC1pbiBtb2R1bGVzIG5vdCBhY2Nlc3NpYmxlLlwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFNrLmJ1aWx0aW5GaWxlc1tcImZpbGVzXCJdW2ZpbGVuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBTay5idWlsdGluRmlsZXNbXCJmaWxlc1wiXVtmaWxlbmFtZV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGZvdW5kID0gdGhpcy5tYWluLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5zZWFyY2hGb3JGaWxlKGZpbGVuYW1lLCB0cnVlKTtcclxuICAgICAgICAgICAgaWYgKGZvdW5kID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBTay5idWlsdGluLk9TRXJyb3IoXCJGaWxlIG5vdCBmb3VuZDogJ1wiK2ZpbGVuYW1lICsgXCInXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kLmNvbnRlbnRzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQocHJvbXB0TWVzc2FnZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLmlucHV0KHByb21wdE1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRm9yYmlkZGVuKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGZpbGVuYW1lLnN0YXJ0c1dpdGgoXCJzcmMvbGliL3V0aWxpdHkvXCIpIHx8XHJcbiAgICAgICAgICAgIGZpbGVuYW1lLnN0YXJ0c1dpdGgoXCJzcmMvbGliL3BlZGFsL1wiKSB8fFxyXG4gICAgICAgICAgICBmaWxlbmFtZS5zdGFydHNXaXRoKFwiLi9faW5zdHJ1Y3Rvci9cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcIlN0ZXBzXCIgdGhlIGV4ZWN1dGlvbiBvZiB0aGUgY29kZSwgbWVhbnQgdG8gYmUgdXNlZCBhcyBhIGNhbGxiYWNrIHRvIHRoZSBTa3VscHRcclxuICAgICAqIGVudmlyb25tZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YXJpYWJsZXMgLSBIYXNoIHRoYXQgbWFwcyB0aGUgbmFtZXMgb2YgdmFyaWFibGVzIChTdHJpbmdzKSB0byB0aGVpciBTa3VscHQgcmVwcmVzZW50YXRpb24uXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbGluZU51bWJlciAtIFRoZSBjb3JyZXNwb25kaW5nIGxpbmUgbnVtYmVyIGluIHRoZSBzb3VyY2UgY29kZSB0aGF0IGlzIGJlaW5nIGV4ZWN1dGVkLlxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbk51bWJlciAtIFRoZSBjb3JyZXNwb25kaW5nIGNvbHVtbiBudW1iZXIgaW4gdGhlIHNvdXJjZSBjb2RlIHRoYXQgaXMgYmVpbmcgZXhlY3V0ZWQuXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpbmsgb2YgaXQgYXMgdGhlIFwiWFwiIHBvc2l0aW9uIHRvIHRoZSBsaW5lTnVtYmVyJ3MgXCJZXCIgcG9zaXRpb24uXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgcHl0aG9uIGZpbGUgYmVpbmcgZXhlY3V0ZWQgKGUuZy4sIFwiX19tYWluX18ucHlcIikuXHJcbiAgICAgKi9cclxuICAgIHN0ZXAodmFyaWFibGVzLCBsb2NhbHMsIGxpbmVOdW1iZXIsIGNvbHVtbk51bWJlciwgZmlsZW5hbWUpIHtcclxuICAgICAgICBpZiAoZmlsZW5hbWUgPT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRTdGVwID0gdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXA7XHJcbiAgICAgICAgICAgIGxldCBnbG9iYWxzID0gdGhpcy5tYWluLmNvbXBvbmVudHMudHJhY2UucGFyc2VHbG9iYWxzKHZhcmlhYmxlcyk7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IFRyYWNlIGxvY2FsIHZhcmlhYmxlcyBwcm9wZXJseVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGdsb2JhbHMsIGxvY2Fscyk7XHJcbiAgICAgICAgICAgIC8vbGV0IGxvY2FscyA9IHRoaXMubWFpbi5jb21wb25lbnRzLnRyYWNlLnBhcnNlR2xvYmFscyhsb2NhbHMpO1xyXG4gICAgICAgICAgICAvL09iamVjdC5hc3NpZ24oZ2xvYmFscywgbG9jYWxzKTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgXCJzdGVwXCI6IGN1cnJlbnRTdGVwLFxyXG4gICAgICAgICAgICAgICAgXCJmaWxlbmFtZVwiOiBmaWxlbmFtZSxcclxuICAgICAgICAgICAgICAgIC8vJ2Jsb2NrJzogaGlnaGxpZ2h0TWFwW2xpbmVOdW1iZXItMV0sXHJcbiAgICAgICAgICAgICAgICBcImxpbmVcIjogbGluZU51bWJlcixcclxuICAgICAgICAgICAgICAgIFwiY29sdW1uXCI6IGNvbHVtbk51bWJlcixcclxuICAgICAgICAgICAgICAgIFwicHJvcGVydGllc1wiOiBnbG9iYWxzLnByb3BlcnRpZXMsXHJcbiAgICAgICAgICAgICAgICBcIm1vZHVsZXNcIjogZ2xvYmFscy5tb2R1bGVzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIuc3RlcCA9IGN1cnJlbnRTdGVwICsgMTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLmxpbmUgPSBsaW5lTnVtYmVyO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgYXQgdGhlIGVuZCBvZiB0aGUgU2t1bHB0IGV4ZWN1dGlvbiB0byB0ZXJtaW5hdGUgdGhlIGV4ZWN1dGlvbkJ1ZmZlclxyXG4gICAgICogYW5kIGhhbmQgaXQgb2ZmIHRvIHRoZSBleGVjdXRpb24gdHJhY2UgaW4gdGhlIG1vZGVsLlxyXG4gICAgICovXHJcbiAgICBsYXN0U3RlcCgpIHtcclxuICAgICAgICBsZXQgZXhlY3V0aW9uID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbjtcclxuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZSk7XHJcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFN0ZXAodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXApO1xyXG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwKTtcclxuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5jdXJyZW50TGluZSh0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIubGluZSk7XHJcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQubGFzdExpbmUodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLmxpbmUpO1xyXG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXApO1xyXG4gICAgfTtcclxuXHJcbiAgICBnZXRMaW5lcyhhc3QpIHtcclxuICAgICAgICBsZXQgdmlzaXRlZExpbmVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgIGxldCB2aXNpdEJvZHkgPSAobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5saW5lbm8gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdmlzaXRlZExpbmVzLmFkZChub2RlLmxpbmVubyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vZGUuYm9keSkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5ib2R5LmZvckVhY2goKHN0YXRlbWVudCkgPT4gdmlzaXRCb2R5KHN0YXRlbWVudCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub2RlLm9yZWxzZSkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5vcmVsc2UuZm9yRWFjaCgoc3RhdGVtZW50KSA9PiB2aXNpdEJvZHkoc3RhdGVtZW50KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vZGUuZmluYWxib2R5KSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmZpbmFsYm9keS5mb3JFYWNoKChzdGF0ZW1lbnQpID0+IHZpc2l0Qm9keShzdGF0ZW1lbnQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmlzaXRCb2R5KGFzdCk7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odmlzaXRlZExpbmVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEVuc3VyZSB0aGF0IHRoZSBwYXJzZSBpbmZvcm1hdGlvbiBpcyB1cC10by1kYXRlXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVBhcnNlKCkge1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgLy8gSG9sZCBhbGwgdGhlIGFjdHVhbGx5IGRpc2NvdmVyZWQgbGluZXMgZnJvbSB0aGUgcGFyc2VcclxuICAgICAgICBsZXQgbGluZXMgPSBbXTtcclxuICAgICAgICAvLyBBdHRlbXB0IGEgcGFyc2VcclxuICAgICAgICBsZXQgYXN0O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJzZSA9IFNrLnBhcnNlKHRoaXMuZmlsZW5hbWUsIHRoaXMuY29kZSk7XHJcbiAgICAgICAgICAgIGFzdCA9IFNrLmFzdEZyb21QYXJzZShwYXJzZS5jc3QsIHRoaXMuZmlsZW5hbWUsIHBhcnNlLmZsYWdzKTtcclxuICAgICAgICAgICAgbGluZXMgPSB0aGlzLmdldExpbmVzKGFzdCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gUmVwb3J0IHRoZSBlcnJvclxyXG4gICAgICAgICAgICByZXBvcnRbXCJwYXJzZXJcIl0gPSB7XHJcbiAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImVycm9yXCI6IGVycm9yLFxyXG4gICAgICAgICAgICAgICAgXCJlbXB0eVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5lc1wiOiBsaW5lc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5maWxlbmFtZSwgdGhpcy5jb2RlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTdWNjZXNzZnVsIHBhcnNlXHJcbiAgICAgICAgcmVwb3J0W1wicGFyc2VyXCJdID0ge1xyXG4gICAgICAgICAgICBcInN1Y2Nlc3NcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJhc3RcIjogYXN0LFxyXG4gICAgICAgICAgICBcImVtcHR5XCI6IGFzdC5ib2R5Lmxlbmd0aCA9PT0gMCxcclxuICAgICAgICAgICAgXCJsaW5lc1wiOiBsaW5lc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0Vycm9ycygpIHtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGlmICghcmVwb3J0W1wic3R1ZGVudFwiXS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRSdW5FcnJvcihyZXBvcnQuc3R1ZGVudC5lcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGxldCBGRUVEQkFDS19IVE1MID0gYFxuXG48c3BhbiBjbGFzcz0nYmxvY2tweS1mbG9hdGluZy1mZWVkYmFjayB0ZXh0LW11dGVkLWxlc3MgcHVsbC1yaWdodCBwb3NpdGlvbi1zdGlja3kgc3RpY2t5LXRvcCdcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwicHJlc2VudGF0aW9uXCIgYXJpYS1sYWJlbD1cIk5ldyBGZWVkYmFjayBBbGVydFwiPlxuICAgIE5ldyBmZWVkYmFjayAmdWFycjtcbjwvc3Bhbj5cblxuPGRpdiBjbGFzcz0nYmxvY2tweS1mZWVkYmFjayBjb2wtbWQtNiBibG9ja3B5LXBhbmVsJ1xuICAgICAgICAgICAgcm9sZT1cInJlZ2lvblwiIGFyaWEtbGFiZWw9XCJGZWVkYmFja1wiXG4gICAgICAgICAgICBhcmlhLWxpdmU9XCJwb2xpdGVcIj5cblxuICAgIDwhLS0gRmVlZGJhY2svVHJhY2UgVmlzaWJpbGl0eSBDb250cm9sIC0tPlxuICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgY2xhc3M9J2J0biBidG4tc20gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGZsb2F0LXJpZ2h0J1xuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnNlY29uZFJvdy5hZHZhbmNlU3RhdGVcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1leWUnPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdWkuc2Vjb25kUm93LnN3aXRjaExhYmVsXCI+PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuXG4gICAgPCEtLSBBY3R1YWwgRmVlZGJhY2sgUmVnaW9uIC0tPiAgICBcbiAgICA8ZGl2PlxuICAgICAgICA8c3Ryb25nPkZlZWRiYWNrOiA8L3N0cm9uZz5cbiAgICAgICAgPHNwYW4gY2xhc3M9J2JhZGdlIGJsb2NrcHktZmVlZGJhY2stY2F0ZWdvcnkgZmVlZGJhY2stYmFkZ2UnXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHVpLmZlZWRiYWNrLmJhZGdlLFxuICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB1aS5mZWVkYmFjay5jYXRlZ29yeVwiPkZlZWRiYWNrIEtpbmQ8L3NwYW4+XG4gICAgICAgIDxzbWFsbCBkYXRhLWJpbmQ9XCJ0ZXh0OiBzdWJtaXNzaW9uLnNjb3JlKCkrJyUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiBkaXNwbGF5Lmluc3RydWN0b3IoKSAmJiBleGVjdXRpb24uZmVlZGJhY2subGFiZWwoKVwiXG4gICAgICAgICAgICBjbGFzcz1cInRleHQtbXV0ZWRcIj48L3NtYWxsPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICAgIDxzdHJvbmcgY2xhc3M9XCJibG9ja3B5LWZlZWRiYWNrLWxhYmVsXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cInRleHQ6IGV4ZWN1dGlvbi5mZWVkYmFjay5sYWJlbFwiPjwvc3Ryb25nPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2tweS1mZWVkYmFjay1tZXNzYWdlXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImh0bWw6IGV4ZWN1dGlvbi5mZWVkYmFjay5tZXNzYWdlXCI+PC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj4gICAgICAgICAgICBcbmA7XG5cbmV4cG9ydCBjbGFzcyBCbG9ja1B5RmVlZGJhY2sge1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IHRoYXQgbWFuYWdlcyB0aGUgZmVlZGJhY2sgYXJlYSwgd2hlcmUgdXNlcnMgYXJlIHRvbGQgdGhlIHN0YXRlIG9mIHRoZWlyXG4gICAgICogcHJvZ3JhbSdzIGV4ZWN1dGlvbiBhbmQgZ2l2ZW4gZ3VpZGFuY2UuIEFsc28gbWFuYWdlcyB0aGUgY3JlYXRpb24gb2YgdGhlIFRyYWNlIFRhYmxlLlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHRoaXMge0Jsb2NrUHlGZWVkYmFja31cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWcgLSBUaGUgSFRNTCBvYmplY3QgdGhpcyBpcyBhdHRhY2hlZCB0by5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XG5cbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjaztcblxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gdGhpcy50YWcuZmluZChcIi5ibG9ja3B5LWZlZWRiYWNrLWNhdGVnb3J5XCIpO1xuICAgICAgICB0aGlzLmxhYmVsID0gdGhpcy50YWcuZmluZChcIi5ibG9ja3B5LWZlZWRiYWNrLWxhYmVsXCIpO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLnRhZy5maW5kKFwiLmJsb2NrcHktZmVlZGJhY2stbWVzc2FnZVwiKTtcblxuICAgICAgICAvLyBUT0RPOiBJZiB0aGV5IGNoYW5nZSB0aGUgc3R1ZGVudCBleHRyYSBmaWxlcywgYWxzbyB1cGRhdGUgdGhlIGRpcnR5IGZsYWdcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuZGlydHlTdWJtaXNzaW9uKHRydWUpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTW92ZXMgdGhlIHNjcmVlbiAodGFrZXMgMSBzZWNvbmQpIHRvIG1ha2UgdGhlIEZlZWRiYWNrIGFyZWEgdmlzaWJsZS5cbiAgICAgKi9cbiAgICBzY3JvbGxJbnRvVmlldygpIHtcbiAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IHRoaXMudGFnLm9mZnNldCgpLnRvcFxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiB0aGUgZmVlZGJhY2sgYXJlYSBpcyBjdXJyZW50bHkgdmlzaWJsZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzRmVlZGJhY2tWaXNpYmxlKCkge1xuICAgICAgICBsZXQgdmlzaWJpbGl0eUJ1ZmZlciA9IDEwMDtcbiAgICAgICAgbGV0IHRvcE9mRWxlbWVudCA9IHRoaXMudGFnLm9mZnNldCgpLnRvcDtcbiAgICAgICAgLy9sZXQgYm90dG9tT2ZFbGVtZW50ID0gdGhpcy50YWcub2Zmc2V0KCkudG9wICsgdGhpcy50YWcub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgbGV0IGJvdHRvbU9mRWxlbWVudCA9IHRvcE9mRWxlbWVudCArIHZpc2liaWxpdHlCdWZmZXI7XG4gICAgICAgIGxldCBib3R0b21PZlNjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgICAgbGV0IHRvcE9mU2NyZWVuID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICAvL2JvdHRvbV9vZl9lbGVtZW50IC09IDQwOyAvLyBVc2VyIGZyaWVuZGx5IHBhZGRpbmdcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICh0b3BPZkVsZW1lbnQgPCBib3R0b21PZlNjcmVlbikgJiZcbiAgICAgICAgICAgICh0b3BPZlNjcmVlbiA8IGJvdHRvbU9mRWxlbWVudCkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYW55IG91dHB1dCBjdXJyZW50bHkgaW4gdGhlIGZlZWRiYWNrIGFyZWEuIEFsc28gcmVzZXRzIHRoZSBwcmludGVyIGFuZFxuICAgICAqIGFueSBoaWdobGlnaHRlZCBsaW5lcyBpbiB0aGUgZWRpdG9yLlxuICAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubWVzc2FnZShcIipSZWFkeSpcIik7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5jYXRlZ29yeShudWxsKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxhYmVsKG51bGwpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwuaGlkZGVuKGZhbHNlKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzRXJyb3IucmVtb3ZlQWxsKCk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc1VuY292ZXJlZC5yZW1vdmVBbGwoKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGZpbmRGaXJzdEVycm9yTGluZShmZWVkYmFja0RhdGEpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGZlZWRiYWNrRGF0YS5sZW5ndGgtMTsgaSA+PSAwOyBpLT0gMSkge1xuICAgICAgICAgICAgaWYgKFwicG9zaXRpb25cIiBpbiBmZWVkYmFja0RhdGFbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmVlZGJhY2tEYXRhW2ldLnBvc2l0aW9uLmxpbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIHVwZGF0ZVJlZ3VsYXJGZWVkYmFjaygpIHtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIG1vZGVsIHdpdGggdGhlc2UgbmV3IGV4ZWN1dGlvbiByZXN1bHRzXG4gICAgICogQHBhcmFtIGV4ZWN1dGlvblJlc3VsdHNcbiAgICAgKi9cbiAgICB1cGRhdGVGZWVkYmFjayhleGVjdXRpb25SZXN1bHRzKSB7XG4gICAgICAgIC8vIFBhcnNlIG91dCBkYXRhXG4gICAgICAgIGxldCBtZXNzYWdlID0gU2suZmZpLnJlbWFwVG9KcyhleGVjdXRpb25SZXN1bHRzLk1FU1NBR0UpO1xuICAgICAgICBsZXQgY2F0ZWdvcnkgPSBTay5mZmkucmVtYXBUb0pzKGV4ZWN1dGlvblJlc3VsdHMuQ0FURUdPUlkpO1xuICAgICAgICBsZXQgbGFiZWwgPSBTay5mZmkucmVtYXBUb0pzKGV4ZWN1dGlvblJlc3VsdHMuTEFCRUwpO1xuICAgICAgICBsZXQgaGlkZSA9IFNrLmZmaS5yZW1hcFRvSnMoZXhlY3V0aW9uUmVzdWx0cy5ISURFKTtcbiAgICAgICAgbGV0IGRhdGEgPSBTay5mZmkucmVtYXBUb0pzKGV4ZWN1dGlvblJlc3VsdHMuREFUQSk7XG5cbiAgICAgICAgLy8gT3ZlcnJpZGUgYmFzZWQgb24gYXNzaWdubWVudHMnIHNldHRpbmdzXG4gICAgICAgIGxldCBoaWRlU2NvcmUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5oaWRkZW4oKTtcbiAgICAgICAgaWYgKGhpZGVTY29yZSAmJiBjYXRlZ29yeS50b0xvd2VyQ2FzZSgpID09PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICAgIGNhdGVnb3J5ID0gXCJubyBlcnJvcnNcIjtcbiAgICAgICAgICAgIGxhYmVsID0gXCJObyBlcnJvcnNcIjtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBcIk5vIGVycm9ycyByZXBvcnRlZC5cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbWFwIHRvIGV4cGVjdGVkIEJsb2NrUHkgbGFiZWxzXG4gICAgICAgIGlmIChjYXRlZ29yeS50b0xvd2VyQ2FzZSgpID09PSBcImluc3RydWN0b3JcIiAmJiBsYWJlbC50b0xvd2VyQ2FzZSgpID09PSBcImV4cGxhaW5cIikge1xuICAgICAgICAgICAgbGFiZWwgPSBcIkluc3RydWN0b3IgRmVlZGJhY2tcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERvbid0IHByZXNlbnQgYSBsYWNrIG9mIGVycm9yIGFzIGJlaW5nIGluY29ycmVjdFxuICAgICAgICBpZiAoY2F0ZWdvcnkgPT09IFwiSW5zdHJ1Y3RvclwiICYmIGxhYmVsID09PSBcIk5vIGVycm9yc1wiKSB7XG4gICAgICAgICAgICBjYXRlZ29yeSA9IFwibm8gZXJyb3JzXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgbW9kZWwgYWNjb3JkaW5nbHlcbiAgICAgICAgbWVzc2FnZSA9IHRoaXMubWFpbi51dGlsaXRpZXMubWFya2Rvd24obWVzc2FnZSkucmVwbGFjZSgvPHByZT5cXG4vZywgXCI8cHJlPlxcblxcblwiKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLm1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5jYXRlZ29yeShjYXRlZ29yeSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5sYWJlbChsYWJlbCk7XG4gICAgICAgIC8vIFRPRE86IEluc3RlYWQgb2YgdHJhY2tpbmcgc3R1ZGVudCBmaWxlLCBsZXQncyB0cmFjayB0aGUgaW5zdHJ1Y3RvciBmaWxlXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIkludGVydmVudGlvblwiLCBjYXRlZ29yeSwgbGFiZWwsIG1lc3NhZ2UsIFwiYW5zd2VyLnB5XCIpO1xuXG4gICAgICAgIC8vIENsZWFyIG91dCBhbnkgcHJldmlvdXNseSBoaWdobGlnaHRlZCBsaW5lc1xuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0uY2xlYXJIaWdobGlnaHRlZExpbmVzKCk7XG5cbiAgICAgICAgLy8gRmluZCB0aGUgZmlyc3QgZXJyb3Igb24gYSBsaW5lIGFuZCByZXBvcnQgdGhhdFxuICAgICAgICBsZXQgbGluZSA9IEJsb2NrUHlGZWVkYmFjay5maW5kRmlyc3RFcnJvckxpbmUoZGF0YSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc0Vycm9yLnJlbW92ZUFsbCgpO1xuICAgICAgICBpZiAobGluZSAhPT0gbnVsbCAmJiBsaW5lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc0Vycm9yLnB1c2gobGluZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnZlcnQgdGhlIHNldCBvZiB0cmFjZWQgbGluZXNcbiAgICAgICAgbGV0IHN0dWRlbnRSZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHMuc3R1ZGVudDtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzVW5jb3ZlcmVkLnJlbW92ZUFsbCgpO1xuICAgICAgICBpZiAoc3R1ZGVudFJlcG9ydC5zdWNjZXNzKSB7XG4gICAgICAgICAgICBsZXQgdW5jb3ZlcmVkTGluZXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cy5wYXJzZXIubGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdHVkZW50UmVwb3J0LmxpbmVzLmluZGV4T2YobGluZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuY292ZXJlZExpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNVbmNvdmVyZWQodW5jb3ZlcmVkTGluZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJlc2VudCBhbnkgYWNjdW11bGF0ZWQgZmVlZGJhY2tcbiAgICAgKi9cbiAgICBwcmVzZW50RmVlZGJhY2soZXhlY3V0aW9uUmVzdWx0cykge1xuICAgICAgICB0aGlzLnVwZGF0ZUZlZWRiYWNrKGV4ZWN1dGlvblJlc3VsdHMpO1xuXG4gICAgICAgIC8vIFRPRE86IExvZ2dpbmdcbiAgICAgICAgLy90aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJmZWVkYmFja1wiLCBjYXRlZ29yeStcInxcIitsYWJlbCwgbWVzc2FnZSk7XG5cbiAgICAgICAgdGhpcy5ub3RpZnlGZWVkYmFja1VwZGF0ZSgpO1xuICAgIH07XG5cbiAgICBub3RpZnlGZWVkYmFja1VwZGF0ZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pc0ZlZWRiYWNrVmlzaWJsZSgpKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzRmVlZGJhY2tWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgIHRoaXMudGFnLmZpbmQoXCIuYmxvY2tweS1mbG9hdGluZy1mZWVkYmFja1wiKS5zaG93KCkuZmFkZU91dCg3MDAwKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwcmVzZW50UnVuRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgbGV0IG1lc3NhZ2UsIGxhYmVsLCBjYXRlZ29yeSwgbGluZW5vO1xuICAgICAgICBpZiAoZXJyb3IudHAkbmFtZSA9PT0gXCJTeW50YXhFcnJvclwiKSB7XG4gICAgICAgICAgICBjYXRlZ29yeSA9IFwic3ludGF4XCI7XG4gICAgICAgICAgICBsZXQgbGluZW5vID0gU2suZmZpLnJlbWFwVG9KcyhlcnJvci5saW5lbm8pO1xuICAgICAgICAgICAgbGV0IGxhYmVsID0gU2suZmZpLnJlbWFwVG9KcyhlcnJvci5tc2cpO1xuICAgICAgICAgICAgbGV0IHNvdXJjZSwgbWVzc2FnZSA9IFwiXCI7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHNvdXJjZSA9IGVycm9yLmFyZ3MudlszXVsyXTtcbiAgICAgICAgICAgICAgICBpZiAoc291cmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2UgPSBgPHByZT4ke3NvdXJjZX08L3ByZT5gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBzb3VyY2UgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxhYmVsID09PSBcImJhZCBpbnB1dFwiKSB7XG4gICAgICAgICAgICAgICAgbGFiZWwgPSBcIkJhZCBJbnB1dFwiO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgQmFkIGlucHV0IG9uIGxpbmUgJHtsaW5lbm99Ljxicj4ke3NvdXJjZX1gO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsYWJlbCA9PT0gXCJFT0YgaW4gbXVsdGktbGluZSBzdGF0ZW1lbnRcIikge1xuICAgICAgICAgICAgICAgIGxhYmVsID0gXCJFT0YgaW4gbXVsdGktbGluZSBzdGF0ZW1lbnRcIjtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYFVuZXhwZWN0ZWQgZW5kLW9mLWZpbGUgaW4gbXVsdGktbGluZSBzdGF0ZW1lbnQgb24gbGluZSAke2xpbmVub30uPGJyPiR7c291cmNlfWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxhYmVsID0gXCJTeW50YXggRXJyb3JcIjtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gbGFiZWwgKyBcIjxicj5cIiArIHNvdXJjZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhYmVsID0gZXJyb3IudHAkbmFtZTtcbiAgICAgICAgICAgIGNhdGVnb3J5ID0gXCJydW50aW1lXCI7XG4gICAgICAgICAgICBtZXNzYWdlID0gdGhpcy5jb252ZXJ0U2t1bHB0RXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5tZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwuY2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGFiZWwobGFiZWwpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNFcnJvci5yZW1vdmVBbGwoKTtcbiAgICAgICAgaWYgKGxpbmVubyAhPT0gdW5kZWZpbmVkICYmIGxpbmVubyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzRXJyb3IucHVzaChsaW5lbm8pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29udmVydFNrdWxwdEVycm9yKGVycm9yLCBmaWxlbmFtZUV4ZWN1dGVkKSB7XG4gICAgICAgIGxldCBuYW1lID0gZXJyb3IudHAkbmFtZTtcbiAgICAgICAgbGV0IGFyZ3MgPSBTay5mZmkucmVtYXBUb0pzKGVycm9yLmFyZ3MpO1xuICAgICAgICBsZXQgdG9wID0gYCR7bmFtZX06ICR7YXJnc1swXX1cXG48YnI+XFxuPGJyPmA7XG4gICAgICAgIGxldCB0cmFjZWJhY2sgPSBcIlwiO1xuICAgICAgICBpZiAoZXJyb3IudHJhY2ViYWNrICYmIGVycm9yLnRyYWNlYmFjay5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRyYWNlYmFjayA9IFwiVHJhY2ViYWNrOjxicj5cXG5cIiArIGVycm9yLnRyYWNlYmFjay5tYXAoZnJhbWUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsaW5lbm8gPSBmcmFtZS5saW5lbm87XG4gICAgICAgICAgICAgICAgaWYgKGZyYW1lLmZpbGVuYW1lLnNsaWNlKDAsIC0zKSA9PT0gZmlsZW5hbWVFeGVjdXRlZCkge1xuICAgICAgICAgICAgICAgICAgICBsaW5lbm8gLT0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzLmluc3RydWN0b3IubGluZU9mZnNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGZpbGUgPSBgRmlsZSA8Y29kZSBjbGFzcz1cImZpbGVuYW1lXCI+XCIke2ZyYW1lLmZpbGVuYW1lfVwiPC9jb2RlPiwgYDtcbiAgICAgICAgICAgICAgICBsZXQgbGluZSA9IGBvbiBsaW5lIDxjb2RlIGNsYXNzPVwibGluZW5vXCI+JHtsaW5lbm99PC9jb2RlPiwgYDtcbiAgICAgICAgICAgICAgICBsZXQgc2NvcGUgPSAoZnJhbWUuc2NvcGUgIT09IFwiPG1vZHVsZT5cIiAmJlxuICAgICAgICAgICAgICAgIGZyYW1lLnNjb3BlICE9PSB1bmRlZmluZWQpID8gYGluIHNjb3BlICR7ZnJhbWUuc2NvcGV9YCA6IFwiXCI7XG4gICAgICAgICAgICAgICAgbGV0IHNvdXJjZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgaWYgKGZyYW1lLnNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZSA9IGBcXG48cHJlPjxjb2RlPiR7ZnJhbWUuc291cmNlfTwvY29kZT48L3ByZT5gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsZSArIGxpbmUgKyBzY29wZSArIHNvdXJjZTtcbiAgICAgICAgICAgIH0pLmpvaW4oXCJcXG48YnI+XCIpO1xuICAgICAgICAgICAgdHJhY2ViYWNrID0gYCR7dHJhY2ViYWNrfWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvcCtcIlxcblwiK3RyYWNlYmFjaztcbiAgICB9XG5cbiAgICBwcmVzZW50SW50ZXJuYWxFcnJvcihlcnJvciwgZmlsZW5hbWVFeGVjdXRlZCkge1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmNhdGVnb3J5KFwiaW50ZXJuYWxcIik7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subGFiZWwoXCJJbnRlcm5hbCBFcnJvclwiKTtcblxuICAgICAgICBsZXQgbWVzc2FnZSA9IFwiRXJyb3IgaW4gaW5zdHJ1Y3RvciBmZWVkYmFjay4gUGxlYXNlIHNob3cgdGhlIGZvbGxvd2luZyB0byBhbiBpbnN0cnVjdG9yOjxicj5cXG5cIjtcbiAgICAgICAgbWVzc2FnZSArPSB0aGlzLmNvbnZlcnRTa3VscHRFcnJvcihlcnJvciwgZmlsZW5hbWVFeGVjdXRlZCk7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgICB0aGlzLm5vdGlmeUZlZWRiYWNrVXBkYXRlKCk7XG4gICAgfVxufSIsImltcG9ydCB7Zmlyc3REZWZpbmVkVmFsdWV9IGZyb20gXCJ1dGlsaXRpZXMuanNcIjtcclxuXHJcbi8vICR7bWFrZVRhYihcIj9tb2NrX3VybHMuYmxvY2tweVwiLCBcIlVSTCBEYXRhXCIsIHRydWUpfVxyXG5cclxuY29uc3QgbWFrZVRhYiA9IGZ1bmN0aW9uKGZpbGVuYW1lLCBmcmllbmRseU5hbWUsIGhpZGVJZkVtcHR5LCBub3RJbnN0cnVjdG9yKSB7XHJcbiAgICBpZiAoZnJpZW5kbHlOYW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBmcmllbmRseU5hbWUgPSBmaWxlbmFtZTtcclxuICAgIH1cclxuICAgIGxldCBpbnN0cnVjdG9yRmlsZUNsYXNzID0gXCJcIjtcclxuICAgIGxldCBoaWRlSWZOb3RJbnN0cnVjdG9yID0gXCJ0cnVlXCI7XHJcbiAgICBpZiAoIW5vdEluc3RydWN0b3IpIHtcclxuICAgICAgICBpbnN0cnVjdG9yRmlsZUNsYXNzID0gXCJibG9ja3B5LWZpbGUtaW5zdHJ1Y3RvclwiO1xyXG4gICAgICAgIGhpZGVJZk5vdEluc3RydWN0b3IgPSBcImRpc3BsYXkuaW5zdHJ1Y3RvcigpXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gJHtpbnN0cnVjdG9yRmlsZUNsYXNzfVwiPlxyXG4gICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidGFiXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBkaXNwbGF5LmZpbGVuYW1lKCkgPT09ICcke2ZpbGVuYW1lfSd9LFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6IGRpc3BsYXkuZmlsZW5hbWUuYmluZCgkZGF0YSwgJyR7ZmlsZW5hbWV9JyksXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiAoISR7aGlkZUlmRW1wdHl9IHx8IHVpLmZpbGVzLmhhc0NvbnRlbnRzKCcke2ZpbGVuYW1lfScpKSAmJiAke2hpZGVJZk5vdEluc3RydWN0b3J9XCI+XHJcbiAgICAgICAgICAgICR7ZnJpZW5kbHlOYW1lfTwvYT5cclxuICAgIDwvbGk+YDtcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgRklMRVNfSFRNTCA9IGBcclxuPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBibG9ja3B5LXBhbmVsIGJsb2NrcHktZmlsZXNcIlxyXG4gICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkuZmlsZXMudmlzaWJsZVwiPlxyXG48dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIiByb2xlPVwidGFibGlzdFwiPlxyXG5cclxuICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgPHN0cm9uZz5WaWV3OiA8L3N0cm9uZz5cclxuICAgIDwvbGk+XHJcblxyXG4gICAgJHttYWtlVGFiKFwiYW5zd2VyLnB5XCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0cnVlKX1cclxuICAgICR7bWFrZVRhYihcIiFpbnN0cnVjdGlvbnMubWRcIiwgXCJJbnN0cnVjdGlvbnNcIil9XHJcbiAgICAke21ha2VUYWIoXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCIsIFwiU2V0dGluZ3NcIil9XHJcbiAgICAke21ha2VUYWIoXCJec3RhcnRpbmdfY29kZS5weVwiLCBcIlN0YXJ0aW5nIENvZGVcIil9XHJcbiAgICAke21ha2VUYWIoXCIhb25fcnVuLnB5XCIsIFwiT24gUnVuXCIpfVxyXG4gICAgJHttYWtlVGFiKFwiIW9uX2NoYW5nZS5weVwiLCBcIk9uIENoYW5nZVwiLCB0cnVlKX1cclxuICAgICR7bWFrZVRhYihcIiFvbl9ldmFsLnB5XCIsIFwiT24gRXZhbFwiLCB0cnVlKX1cclxuICAgICR7bWFrZVRhYihcIiFzYW1wbGVfc3VibWlzc2lvbnMuYmxvY2tweVwiLCBcIlNhbXBsZSBTdWJtaXNzaW9uc1wiLCB0cnVlKX1cclxuICAgICR7bWFrZVRhYihcIiF0YWdzLmJsb2NrcHlcIiwgXCJUYWdzXCIsIHRydWUpfVxyXG4gICAgXHJcbiAgICA8IS0tIGtvIGZvcmVhY2g6IGFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMgLS0+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIlxyXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHsnYmxvY2tweS1maWxlLWluc3RydWN0b3InOiAhZmlsZW5hbWUoKS5zdGFydHNXaXRoKCcmJyl9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU6IGZpbGVuYW1lKCkuc3RhcnRzV2l0aCgnJicpIHx8ICRyb290LmRpc3BsYXkuaW5zdHJ1Y3RvcigpIFwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0YWJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiAkcm9vdC5kaXNwbGF5LmZpbGVuYW1lKCkgPT09IGZpbGVuYW1lKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZWRpdGFibGU6IGZpbGVuYW1lKCkuc3RhcnRzV2l0aCgnJicpfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiAkcm9vdC5kaXNwbGF5LmZpbGVuYW1lLmJpbmQoJGRhdGEsIGZpbGVuYW1lKCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJHJvb3QudWkuZmlsZXMuZGlzcGxheUZpbGVuYW1lKGZpbGVuYW1lKCkpXCI+XHJcbiAgICAgICAgICAgIDwvYT4gICAgICAgIFxyXG4gICAgICAgIDwvbGk+XHJcbiAgICA8IS0tIC9rbyAtLT5cclxuICAgIDwhLS0ga28gZm9yZWFjaDogYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMgLS0+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gYmxvY2tweS1maWxlLWluc3RydWN0b3JcIlxyXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiAkcm9vdC5kaXNwbGF5Lmluc3RydWN0b3IoKVwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0YWJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiAkcm9vdC5kaXNwbGF5LmZpbGVuYW1lKCkgPT09IGZpbGVuYW1lKCl9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICRyb290LmRpc3BsYXkuZmlsZW5hbWUuYmluZCgkZGF0YSwgZmlsZW5hbWUoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBmaWxlbmFtZVwiPlxyXG4gICAgICAgICAgICA8L2E+ICAgICAgICBcclxuICAgICAgICA8L2xpPlxyXG4gICAgPCEtLSAva28gLS0+XHJcbiAgICBcclxuICAgIDwhLS0ga28gZm9yZWFjaDogc3VibWlzc2lvbi5leHRyYUZpbGVzIC0tPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRhYlwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6ICRyb290LmRpc3BsYXkuZmlsZW5hbWUoKSA9PT0gZmlsZW5hbWUoKX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogJHJvb3QuZGlzcGxheS5maWxlbmFtZS5iaW5kKCRkYXRhLCBmaWxlbmFtZSgpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICRyb290LnVpLmZpbGVzLmRpc3BsYXlGaWxlbmFtZShmaWxlbmFtZSgpKVwiPlxyXG4gICAgICAgICAgICA8L2E+ICAgICAgICBcclxuICAgICAgICA8L2xpPlxyXG4gICAgPCEtLSAva28gLS0+XHJcbiAgXHJcbiAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbSBkcm9wZG93blwiPlxyXG4gICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXCIgaHJlZj1cIiNcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJcclxuICAgICAgICAgcm9sZT1cImJ1dHRvblwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+QWRkIE5ldzwvYT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbSBibG9ja3B5LWZpbGUtaW5zdHJ1Y3RvclwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogdWkuZmlsZXMuaGFzQ29udGVudHMoJz9tb2NrX3VybHMuYmxvY2tweScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogdWkuZmlsZXMuYWRkLmJpbmQoJGRhdGEsICc/bW9ja191cmxzLmJsb2NrcHknKVwiPlVSTCBEYXRhPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gYmxvY2tweS1maWxlLWluc3RydWN0b3JcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IHVpLmZpbGVzLmhhc0NvbnRlbnRzKCc/dGFncy5ibG9ja3B5JylcIj5UYWdzPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gYmxvY2tweS1maWxlLWluc3RydWN0b3JcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IHVpLmZpbGVzLmhhc0NvbnRlbnRzKCc/c2FtcGxlX3N1Ym1pc3Npb25zLmJsb2NrcHknKVwiPlNhbXBsZSBTdWJtaXNzaW9uczwvYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtIGJsb2NrcHktZmlsZS1pbnN0cnVjdG9yXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiBhc3NpZ25tZW50Lm9uQ2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogdWkuZmlsZXMuYWRkLmJpbmQoJGRhdGEsICchb25fY2hhbmdlLnB5JylcIj5PbiBDaGFuZ2U8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbSBibG9ja3B5LWZpbGUtaW5zdHJ1Y3RvclwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogYXNzaWdubWVudC5vbkV2YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiB1aS5maWxlcy5hZGQuYmluZCgkZGF0YSwgJyFvbl9ldmFsLnB5JylcIj5PbiBFdmFsPC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gYmxvY2tweS1maWxlLWluc3RydWN0b3JcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZmlsZXMuYWRkLmJpbmQoJGRhdGEsICdzdGFydGluZycpXCI+U3RhcnRpbmcgRmlsZTwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtIGJsb2NrcHktZmlsZS1pbnN0cnVjdG9yXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmZpbGVzLmFkZC5iaW5kKCRkYXRhLCAnaW5zdHJ1Y3RvcicpXCI+SW5zdHJ1Y3RvciBGaWxlPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZmlsZXMuYWRkLmJpbmQoJGRhdGEsICdzdHVkZW50JylcIj5TdHVkZW50IEZpbGU8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2xpPlxyXG4gIFxyXG48L3VsPlxyXG48L2Rpdj5cclxuYDtcclxuXHJcbmNvbnN0IE5FV19JTlNUUlVDVE9SX0ZJTEVfRElBTE9HX0hUTUwgPSBgXHJcbjxmb3JtPlxyXG48ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgIDwhLS0gRmlsZW5hbWUgLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctZmlsZW5hbWVcIj5GaWxlbmFtZTo8L2xhYmVsPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgYmxvY2tweS1pbnN0cnVjdG9yLWZpbGUtZGlhbG9nLWZpbGVuYW1lXCJcclxuICAgICAgICAgICAgaWQ9XCJibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctZmlsZW5hbWVcIj4gICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS0gRmlsZXR5cGUgLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgdGV4dC1yaWdodCBtdC0yXCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cImJsb2NrcHktaW5zdHJ1Y3Rvci1maWxlLWRpYWxvZy1maWxldHlwZVwiPkZpbGV0eXBlOiA8L2xhYmVsPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctZmlsZXR5cGVcIlxyXG4gICAgICAgICAgICBpZD1cImJsb2NrcHktaW5zdHJ1Y3Rvci1maWxlLWRpYWxvZy1maWxldHlwZVwiPjwvc3Bhbj4gICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS0gSW5hY2Nlc3NpYmxlIHRvIHN0dWRlbnQ/IC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHQgbXQtMlwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctbmFtZXNwYWNlXCI+TmFtZXNwYWNlOiA8L2xhYmVsPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj5cclxuICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIGJsb2NrcHktaW5zdHJ1Y3Rvci1maWxlLWRpYWxvZy1uYW1lc3BhY2VcIlxyXG4gICAgICAgICAgICBpZD1cImJsb2NrcHktaW5zdHJ1Y3Rvci1maWxlLWRpYWxvZy1uYW1lc3BhY2VcIj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiFcIj5Db21wbGV0ZWx5IGluYWNjZXNzaWJsZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiP1wiPkhpZGRlbiBmcm9tIHN0dWRlbnQsIGFjY2Vzc2libGUgcHJvZ3JhbWF0aWNhbGx5PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCImXCI+VmlzaWJsZSB0byBzdHVkZW50LCBidXQgbm90IGVkaXRhYmxlPC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvZm9ybT5cclxuYDtcclxuXHJcbi8qKlxyXG4gKiBGaWxlbmFtZXMgbGl2ZSBpbiBvbmUgb2YgZml2ZSBwb3NzaWJsZSBuYW1lc3BhY2VzOlxyXG4gKiAgSW5zdHJ1Y3RvciAoISk6IEludmlzaWJsZSB0byB0aGUgc3R1ZGVudCB1bmRlciBhbGwgY2lyY3Vtc3RhbmNlc1xyXG4gKiAgU3RhcnQgU3BhY2UgKF4pOiBVc2VkIHRvIHJlc2V0IHRoZSBzdHVkZW50IG5hbWVzcGFjZVxyXG4gKiAgU3R1ZGVudCBTcGFjZSAoKTogVmlzaWJsZSB0byB0aGUgc3R1ZGVudCB3aGVuIGRpc3BsYXkuaGlkZUZpbGVzIGlzIG5vdCB0cnVlLCBhYmxlIHRvIGJlIGVkaXRlZFxyXG4gKiAgSGlkZGVuIFNwYWNlICg/KTogTm90IGRpcmVjdGx5IHZpc2libGUgdG8gdGhlIHN0dWRlbnQsIGJ1dCBhY2Nlc3NpYmxlIHByb2dyYW1tYXRpY2FsbHlcclxuICogIFJlYWQtb25seSBTcGFjZSAoJik6IEFuIGluc3RydWN0b3IgZmlsZSB0eXBlIHZpc2libGUgdG8gdGhlIHN0dWRlbnQsIGJ1dCBpcyB1bmVkaXRhYmxlIGJ5IHRoZW1cclxuICogIFNlY3JldCBTcGFjZSAoJCk6IE5vdCB2aXNpYmxlIGZyb20gdGhlIG1lbnUgYXQgYWxsLCBzb21lIG90aGVyIG1lY2hhbmlzbSBjb250cm9scyBpdFxyXG4gKiAgR2VuZXJhdGVkIFNwYWNlICgqKTogVmlzaWJsZSB0byB0aGUgc3R1ZGVudCwgYnV0IGRlc3Ryb3llZCBhZnRlciBFbmdpbmUuQ2xlYXIuIENhbiBzaGFkb3cgYW4gYWN0dWFsIGZpbGUuXHJcbiAqICBDb25jYXRlbmF0ZWQgU3BhY2UgKCMpOiBVc2VkIHdoZW4gYnVuZGxpbmcgYSBzcGFjZSBmb3IgdGhlIHNlcnZlci5cclxuICovXHJcblxyXG5leHBvcnQgbGV0IFNUQVJUSU5HX0ZJTEVTID0gW1xyXG4gICAgLy8gU3VibWlzc2lvblxyXG4gICAgXCJhbnN3ZXIucHlcIixcclxuICAgIC8vIEluc3RydWN0b3IgZmlsZXNcclxuICAgIFwiIWluc3RydWN0aW9ucy5tZFwiLFxyXG4gICAgXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCIsXHJcbiAgICBcIl5zdGFydGluZ19jb2RlLnB5XCIsXHJcbiAgICBcIiFvbl9ydW4ucHlcIixcclxuICAgIFwiJHNldHRpbmdzLmJsb2NrcHlcIixcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBCQVNJQ19ORVdfRklMRVMgPSBbXHJcbiAgICBcIiFvbl9jaGFuZ2UucHlcIixcclxuICAgIFwiIW9uX2V2YWwucHlcIixcclxuICAgIFwiP21vY2tfdXJscy5ibG9ja3B5XCIsXHJcbiAgICBcIiF0YWdzLmJsb2NrcHlcIixcclxuICAgIFwiIXNhbXBsZV9zdWJtaXNzaW9ucy5ibG9ja3B5XCJcclxuXTtcclxuXHJcbmNvbnN0IElOU1RSVUNUT1JfRElSRUNUT1JZID0gXCJfaW5zdHJ1Y3Rvci9cIjtcclxuY29uc3QgU1RVREVOVF9ESVJFQ1RPUlkgPSBcIl9zdHVkZW50L1wiO1xyXG5cclxuY29uc3QgU2VhcmNoTW9kZXMgPSB7XHJcbiAgICBFVkVSWVdIRVJFOiBcIkVWRVJZV0hFUkVcIixcclxuICAgIFNUQVJUX1dJVEhfSU5TVFJVQ1RPUjogXCJTVEFSVF9XSVRIX0lOU1RSVUNUT1JcIixcclxuICAgIE9OTFlfU1RVREVOVF9GSUxFUzogXCJPTkxZX1NUVURFTlRfRklMRVNcIlxyXG59O1xyXG5cclxuY29uc3QgREVMRVRBQkxFX1NJTVBMRV9GSUxFUyA9IFtcIiFvbl9jaGFuZ2UucHlcIiwgXCIhb25fZXZhbC5weVwiXTtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkRFTEVUQUJMRV9GSUxFUyA9IFtcImFuc3dlci5weVwiLCBcIiFpbnN0cnVjdGlvbnMubWRcIiwgXCIhYXNzaWdubWVudF9zZXR0aW5ncy5weVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJec3RhcnRpbmdfY29kZS5weVwiLCBcIiFvbl9ydW4ucHlcIiwgXCIkc2V0dGluZ3MuYmxvY2tweVwiXTtcclxuXHJcbmV4cG9ydCBjb25zdCBVTlJFTkFNQUJMRV9GSUxFUyA9IFtcImFuc3dlci5weVwiLCBcIiFpbnN0cnVjdGlvbnMubWRcIiwgXCIhYXNzaWdubWVudF9zZXR0aW5ncy5weVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJec3RhcnRpbmdfY29kZS5weVwiLCBcIiFvbl9ydW4ucHlcIiwgXCIkc2V0dGluZ3MuYmxvY2tweVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIhb25fY2hhbmdlLnB5XCIsIFwiIW9uX2V2YWwucHlcIiwgXCI/bW9ja191cmxzLmJsb2NrcHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIXRhZ3MuYmxvY2tweVwiLCBcIiFzYW1wbGVfc3VibWlzc2lvbnMuYmxvY2tweVwiXTtcclxuXHJcbmNsYXNzIEJsb2NrUHlGaWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIGZpbGVuYW1lLCBjb250ZW50cykge1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IGZpbGVuYW1lO1xyXG4gICAgICAgIHRoaXMuY29udGVudHMgPSBjb250ZW50cyB8fCBcIlwiO1xyXG4gICAgICAgIHRoaXMub3duZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VNb2RlbEZpbGUoZmlsZW5hbWUsIGNvbnRlbnRzKSB7XHJcbiAgICByZXR1cm4ge1wiZmlsZW5hbWVcIjoga28ub2JzZXJ2YWJsZShmaWxlbmFtZSksIGNvbnRlbnRzOiBrby5vYnNlcnZhYmxlKGNvbnRlbnRzIHx8IFwiXCIpfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZU1vY2tNb2RlbEZpbGUoZmlsZW5hbWUsIGNvbnRlbnRzKSB7XHJcbiAgICByZXR1cm4geyBmaWxlbmFtZTogKCkgPT4gZmlsZW5hbWUsIGNvbnRlbnRzOiAoKSA9PiBjb250ZW50cyB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZENvbmNhdGVuYXRlZEZpbGUoY29uY2F0ZW5hdGVkRmlsZSwgbW9kZWxGaWxlTGlzdCkge1xyXG4gICAgaWYgKGNvbmNhdGVuYXRlZEZpbGUpIHtcclxuICAgICAgICBsZXQgZmlsZXMgPSBKU09OLnBhcnNlKGNvbmNhdGVuYXRlZEZpbGUpO1xyXG4gICAgICAgIGxldCBtb2RlbEZpbGVzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgZmlsZW5hbWUgaW4gZmlsZXMpIHtcclxuICAgICAgICAgICAgaWYgKGZpbGVzLmhhc093blByb3BlcnR5KGZpbGVuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgbW9kZWxGaWxlcy5wdXNoKG1ha2VNb2RlbEZpbGUoZmlsZW5hbWUsIGZpbGVzW2ZpbGVuYW1lXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vZmlsZXMgPSBmaWxlcy5tYXAoZmlsZSA9PiBtYWtlTW9kZWxGaWxlKGZpbGUuZmlsZW5hbWUsIGZpbGUuY29udGVudHMpKTtcclxuICAgICAgICBtb2RlbEZpbGVMaXN0KG1vZGVsRmlsZXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBtb2RlbEZpbGVMaXN0KFtdKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbmNhdGVuYXRlZEZpbGUobW9kZWxGaWxlTGlzdCkge1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG1vZGVsRmlsZUxpc3QoKS5tYXAoZmlsZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZmlsZW5hbWU6IGZpbGUuZmlsZW5hbWUoKSxcclxuICAgICAgICAgICAgY29udGVudHM6IGZpbGUuY29udGVudHMoKVxyXG4gICAgICAgIH07XHJcbiAgICB9KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZShtb2RlbEZpbGVMaXN0KSB7XHJcbiAgICByZXR1cm4ga28ucHVyZUNvbXB1dGVkKCgpID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0ge307XHJcbiAgICAgICAgbW9kZWxGaWxlTGlzdCgpLmZvckVhY2goZmlsZSA9PlxyXG4gICAgICAgICAgICByZXN1bHRbZmlsZS5maWxlbmFtZSgpXSA9IGZpbGUuY29udGVudHMoKSk7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFic3RyYWN0cyBhd2F5IGRhdGFiYXNlIGxvZ2ljXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmxvY2tQeUZpbGVTeXN0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IobWFpbikge1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XHJcbiAgICAgICAgdGhpcy5maWxlc18gPSB7fTtcclxuICAgICAgICB0aGlzLm1vdW50RmlsZXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy53YXRjaE1vZGVsKCk7XHJcbiAgICAgICAgdGhpcy53YXRjaGVzXyA9IHt9O1xyXG5cclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5pbnN0cnVjdG9yLnN1YnNjcmliZSgodmlzaWJsaXR5KT0+IHtcclxuICAgICAgICAgICAgJChcIi5ibG9ja3B5LWZpbGUtaW5zdHJ1Y3RvclwiKS50b2dnbGUodmlzaWJsaXR5KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB3YXRjaEZpbGUoZmlsZW5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKCEoZmlsZW5hbWUgaW4gdGhpcy53YXRjaGVzXykpIHtcclxuICAgICAgICAgICAgdGhpcy53YXRjaGVzX1tmaWxlbmFtZV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53YXRjaGVzX1tmaWxlbmFtZV0ucHVzaChjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcFdhdGNoaW5nRmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLndhdGNoZXNfW2ZpbGVuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICB3YXRjaE1vZGVsKCkge1xyXG4gICAgICAgIGxldCBmaWxlc3lzdGVtID0gdGhpcztcclxuICAgICAgICBbdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyxcclxuICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFTdGFydGluZ0ZpbGVzLFxyXG4gICAgICAgICB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYUluc3RydWN0b3JGaWxlc10uZm9yRWFjaChmaWxlQXJyYXkgPT5cclxuICAgICAgICAgICAgZmlsZUFycmF5LnN1YnNjcmliZShmdW5jdGlvbihjaGFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VzLmZvckVhY2goZnVuY3Rpb24gKGNoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtb2RlbEZpbGUgPSBjaGFuZ2UudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYW5nZS5zdGF0dXMgPT09IFwiYWRkZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUcmFjayBuZXcgZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZSA9IGZpbGVzeXN0ZW0ubmV3RmlsZShtb2RlbEZpbGUuZmlsZW5hbWUoKSwgbW9kZWxGaWxlLmNvbnRlbnRzKCksIG1vZGVsRmlsZS5jb250ZW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVzeXN0ZW0ubm90aWZ5V2F0Y2hlcyhmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoYW5nZS5zdGF0dXMgPT09IFwiZGVsZXRlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBmaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVzeXN0ZW0uZGVsZXRlRmlsZUxvY2FsbHlfKG1vZGVsRmlsZS5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMsIFwiYXJyYXlDaGFuZ2VcIilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFuc3dlci5weVxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gZmlyc3QgZWxlbWVudCBvZiBzdWJtaXNzaW9uLmNvZGUpXHJcbiAgICAvLyAhb25fcnVuLnB5LCAhb25fY2hhbmdlLnB5LCAhb25fZXZhbC5weVxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gcmVsZXZhbnQgYXNzaWdubWVudC48d2hhdGV2ZXI+XHJcbiAgICAvLyBec3RhcnRpbmdfY29kZS5weVxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gZmlyc3QgZWxlbWVudCBvZiBhc3NpZ25tZW50LnN0YXJ0aW5nQ29kZVxyXG4gICAgLy8gXndoYXRldmVyXHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byByZXN0IG9mIHRoZSBlbGVtZW50cyBvZiBhc3NpZ25tZW50LnN0YXJ0aW5nQ29kZVxyXG4gICAgLy8gIXdoYXRldmVyIG9yID93aGF0ZXZlclxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gZWxlbWVudHMgb2YgYXNzaWdubWVudC5leHRyYUZpbGVzXHJcbiAgICAvLyBPdGhlcndpc2U6XHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byByZXN0IG9mIHRoZSBlbGVtZW50cyBvZiBzdWJtaXNzaW9uLmNvZGVcclxuICAgIC8qKlxyXG4gICAgICogTmV3IHNwZWNpYWwgZmlsZXMgbmVlZCB0byBiZSByZWdpc3RlcmVkIGhlcmVcclxuICAgICAqIEBwYXJhbSBmaWxlIHtCbG9ja1B5RmlsZX1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIG9ic2VydmVGaWxlXyhmaWxlKSB7XHJcbiAgICAgICAgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIhb25fcnVuLnB5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vblJ1bjtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIW9uX2NoYW5nZS5weVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiFvbl9ldmFsLnB5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vbkV2YWw7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiFpbnN0cnVjdGlvbnMubWRcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucztcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiXnN0YXJ0aW5nX2NvZGUucHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnN0YXJ0aW5nQ29kZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiP21vY2tfdXJscy5ibG9ja3B5XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlSW5BcnJheV8oZmlsZSwgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIhdGFncy5ibG9ja3B5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC50YWdzO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncztcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiJHNldHRpbmdzLmJsb2NrcHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZS5zdGFydHNXaXRoKFwiXlwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVJbkFycmF5XyhmaWxlLCB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZS5zdGFydHNXaXRoKFwiIVwiKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgZmlsZS5maWxlbmFtZS5zdGFydHNXaXRoKFwiP1wiKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgZmlsZS5maWxlbmFtZS5zdGFydHNXaXRoKFwiJlwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVJbkFycmF5XyhmaWxlLCB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYUluc3RydWN0b3JGaWxlcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlSW5BcnJheV8oZmlsZSwgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9ic2VydmVJbkFycmF5XyhmaWxlLCBhcnJheSkge1xyXG4gICAgICAgIGZpbGUub3duZXIgPSBhcnJheTtcclxuICAgICAgICBsZXQgY29kZUJ1bmRsZSA9IGZpbGUub3duZXIoKTtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBjb2RlQnVuZGxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2RlQnVuZGxlW2ldLmZpbGVuYW1lKCkgPT09IGZpbGUuZmlsZW5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gY29kZUJ1bmRsZVtpXS5jb250ZW50cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmlsZS5oYW5kbGUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IG5ld0ZpbGUgPSBtYWtlTW9kZWxGaWxlKGZpbGUuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IG5ld0ZpbGUuY29udGVudHM7XHJcbiAgICAgICAgICAgIGFycmF5LnB1c2gobmV3RmlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdW50RmlsZXMoKSB7XHJcbiAgICAgICAgdGhpcy5uZXdGaWxlKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubmV3RmlsZShcIl5zdGFydGluZ19jb2RlLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubmV3RmlsZShcIiFvbl9ydW4ucHlcIik7XHJcbiAgICAgICAgdGhpcy5uZXdGaWxlKFwiIWluc3RydWN0aW9ucy5tZFwiKTtcclxuICAgICAgICB0aGlzLm5ld0ZpbGUoXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc21vdW50RXh0cmFGaWxlcygpIHtcclxuICAgICAgICBmb3IgKGxldCBuYW1lIGluIHRoaXMuZmlsZXNfKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpbGVzXy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKFVOREVMRVRBQkxFX0ZJTEVTLmluZGV4T2YobmFtZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuZmlsZXNfW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLndhdGNoZXNfW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFRPRE86IFNob3VsZG4ndCB3ZSBub3RpZnkgdGhlIFVJIHRoYXQgdGhlIGZpbGUgd2FzIGRlbGV0ZWQ/XHJcbiAgICB9XHJcblxyXG4gICAgbmV3RmlsZShmaWxlbmFtZSwgY29udGVudHMsIG1vZGVsRmlsZSkge1xyXG4gICAgICAgIGlmIChmaWxlbmFtZSBpbiB0aGlzLmZpbGVzXykge1xyXG4gICAgICAgICAgICAvLyBGaWxlIGFscmVhZHkgZXhpc3RzISBKdXN0IHVwZGF0ZSBpdHMgaGFuZGxlXHJcbiAgICAgICAgICAgIGxldCBleGlzdGluZ0ZpbGUgPSB0aGlzLmZpbGVzX1tmaWxlbmFtZV07XHJcbiAgICAgICAgICAgIGlmIChtb2RlbEZpbGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlRmlsZV8oZXhpc3RpbmdGaWxlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGV4aXN0aW5nRmlsZS5oYW5kbGUgPSBtb2RlbEZpbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXhpc3RpbmdGaWxlLmhhbmRsZShjb250ZW50cyB8fCBcIlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nRmlsZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBGaWxlIGRvZXMgbm90IGV4aXN0XHJcbiAgICAgICAgICAgIGxldCBuZXdGaWxlID0gbmV3IEJsb2NrUHlGaWxlKHRoaXMubWFpbiwgZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGVzX1tmaWxlbmFtZV0gPSBuZXdGaWxlO1xyXG4gICAgICAgICAgICBpZiAobW9kZWxGaWxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZUZpbGVfKG5ld0ZpbGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3RmlsZS5oYW5kbGUgPSBtb2RlbEZpbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbnRlbnRzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIG5ld0ZpbGUuaGFuZGxlKGNvbnRlbnRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3RmlsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd3JpdGVGaWxlKGZpbGVuYW1lLCBjb250ZW50cykge1xyXG4gICAgICAgIGNvbnRlbnRzID0gY29udGVudHMgfHwgXCJcIjtcclxuICAgICAgICB0aGlzLmZpbGVzX1tmaWxlbmFtZV0uaGFuZGxlKGNvbnRlbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICByZWFkRmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVzX1tmaWxlbmFtZV0uaGFuZGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVzX1tmaWxlbmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGZpbGVuYW1lXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbnxvYmplY3R9IFRoZSBpbmZvIGFib3V0IHRoZSBmaWxlLCBvciBmYWxzZSBpZiBpdCBjb3VsZCBub3QgYmUgZGVsZXRlZFxyXG4gICAgICovXHJcbiAgICBkZWxldGVGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgaWYgKERFTEVUQUJMRV9TSU1QTEVfRklMRVMuaW5kZXhPZihmaWxlbmFtZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGxldCBmaWxlID0gdGhpcy5kZWxldGVGaWxlTG9jYWxseV8oZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZShudWxsKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZpbGVzX1tmaWxlbmFtZV0ub3duZXIgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFRyaWdnZXJzIGEgY2FsbGJhY2sgdG8gZXZlbnR1YWxseSBjYWxsIGRlbGV0ZUZpbGVMb2NhbGx5X1xyXG4gICAgICAgICAgICBsZXQgZm91bmQgPSB0aGlzLmZpbGVzX1tmaWxlbmFtZV0ub3duZXIucmVtb3ZlKG1vZGVsRmlsZSA9PiBtb2RlbEZpbGUuZmlsZW5hbWUgPT09IGZpbGVuYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZvdW5kIHx8IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVGaWxlTG9jYWxseV8oZmlsZW5hbWUpIHtcclxuICAgICAgICBsZXQgZmlsZSA9IHRoaXMuZmlsZXNfW2ZpbGVuYW1lXTtcclxuICAgICAgICBkZWxldGUgdGhpcy5maWxlc19bZmlsZW5hbWVdO1xyXG4gICAgICAgIGlmIChmaWxlbmFtZSBpbiB0aGlzLndhdGNoZXNfKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlc19bZmlsZW5hbWVdLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2suZGVsZXRlZCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZpbGU7XHJcbiAgICB9XHJcblxyXG4gICAgbm90aWZ5V2F0Y2hlcyhmaWxlKSB7XHJcbiAgICAgICAgaWYgKGZpbGUuZmlsZW5hbWUgaW4gdGhpcy53YXRjaGVzXykge1xyXG4gICAgICAgICAgICB0aGlzLndhdGNoZXNfW2ZpbGUuZmlsZW5hbWVdLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2sudXBkYXRlZChmaWxlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaEZvckZpbGUobmFtZSwgc3R1ZGVudFNlYXJjaCkge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgZmlsZXMuKlxyXG4gICAgICAgIF9pbnN0cnVjdG9yL2ZpbGVzLipcclxuICAgICAgICBfc3R1ZGVudC9maWxlcy4qXHJcblxyXG4gICAgICAgIElmIGEgc3R1ZGVudCBzZWFyY2hlcyBmb3IgYSBmaWxlLCBpdCBjaGVja3MgdGhlIFwiP1wiLCBcIiZcIiwgXCIqXCIsIFwiXCIgbmFtZXNwYWNlc1xyXG4gICAgICAgICAgICBpbXBvcnQgaGVscGVyID0+IFwiLi9oZWxwZXIucHlcIlxyXG4gICAgICAgICAgICBvcGVuKFwiZXh0ZXJuYWwuanNvblwiKSA9PiBcImV4dGVybmFsLmpzb25cIlxyXG4gICAgICAgIElmIGFuIGluc3RydWN0b3Igc2VhcmNoZXMgZm9yIGEgZmlsZSwgaXQgY2hlY2tzIFwiIVwiLCBcIl5cIiwgXCI/XCIsIFwiJlwiLCBcIipcIiwgXCJcIiBuYW1lc3BhY2VzXHJcbiAgICAgICAgICAgIFRvIGV4cGxpY2l0bHkgc2VhcmNoIGluc3RydWN0b3IgbmFtZXNwYWNlcyBmaXJzdFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0IF9pbnN0cnVjdG9yLmhlbHBlciA9PiBcIi4vaW5zdHJ1Y3Rvci9oZWxwZXIucHlcIlxyXG4gICAgICAgICAgICAgICAgb3BlbihcIl9pbnN0cnVjdG9yL2V4dGVybmFsLmpzb25cIikgPT4gXCJfaW5zdHJ1Y3Rvci9leHRlcm5hbC5qc29uXCJcclxuICAgICAgICAgICAgdG8gYWxsb3cgc3R1ZGVudCBmaWxlcyB0byBvdmVycmlkZTpcclxuICAgICAgICAgICAgICAgIGltcG9ydCBoZWxwZXIgPT4gXCIuL2hlbHBlci5weVwiXHJcbiAgICAgICAgICAgICAgICBvcGVuKFwiZXh0ZXJuYWwuanNvblwiKSA9PiBcImV4dGVybmFsLmpzb25cIlxyXG4gICAgICAgICAgICB0byBvbmx5IGNoZWNrIHN0dWRlbnQgZmlsZXMsIHByZXBlbmQgd2l0aCBfc3R1ZGVudFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8vIENob3Agb2ZmIHN0YXJ0aW5nIFwiLi9cIlxyXG4gICAgICAgIGlmIChuYW1lLnN0YXJ0c1dpdGgoXCIuL1wiKSkge1xyXG4gICAgICAgICAgICBuYW1lID0gbmFtZS5zbGljZSgyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHNlYXJjaE1vZGUgPSBTZWFyY2hNb2Rlcy5FVkVSWVdIRVJFO1xyXG4gICAgICAgIC8vIFNob3VsZCB0aGUgc2VhcmNoIGJlIHN0YXJ0IHdpdGggaW5zdHJ1Y3RvciBzaWRlP1xyXG4gICAgICAgIGlmIChuYW1lLnN0YXJ0c1dpdGgoSU5TVFJVQ1RPUl9ESVJFQ1RPUlkpKSB7XHJcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lLnNsaWNlKElOU1RSVUNUT1JfRElSRUNUT1JZLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHNlYXJjaE1vZGUgPSBTZWFyY2hNb2Rlcy5TVEFSVF9XSVRIX0lOU1RSVUNUT1I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFNob3VsZCB0aGUgc2VhcmNoIGJlIGxpbWl0ZWQgdG8gdGhlIHN0dWRlbnQgbW9kZT9cclxuICAgICAgICBpZiAobmFtZS5zdGFydHNXaXRoKFNUVURFTlRfRElSRUNUT1JZKSkge1xyXG4gICAgICAgICAgICBuYW1lID0gbmFtZS5zbGljZShTVFVERU5UX0RJUkVDVE9SWS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBzZWFyY2hNb2RlID0gU2VhcmNoTW9kZXMuT05MWV9TVFVERU5UX0ZJTEVTO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc3R1ZGVudFNlYXJjaCkge1xyXG4gICAgICAgICAgICBzZWFyY2hNb2RlID0gU2VhcmNoTW9kZXMuT05MWV9TVFVERU5UX0ZJTEVTO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTaG9ydGN1dCBmb3IgaW5zdHJ1Y3RvciB2ZXJzaW9uc1xyXG4gICAgICAgIGxldCBleHRyYVN0dWRlbnRGaWxlcyA9IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmV4dHJhRmlsZXMoKTtcclxuICAgICAgICBsZXQgZXh0cmFJbnN0cnVjdG9yRmlsZXMgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYUluc3RydWN0b3JGaWxlcygpO1xyXG4gICAgICAgIGxldCBleHRyYVN0YXJ0aW5nRmlsZXMgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMoKTtcclxuICAgICAgICAvLyBDaGVjayBzcGVjaWFsIGZpbGVzIChUT0RPOiBob3cgd291bGQgYW4gaW5zdHJ1Y3RvciBhY2Nlc3MgXCIuL19pbnN0cnVjdG9yL2Fuc3dlci5weVwiP1xyXG4gICAgICAgIGxldCBzcGVjaWFsRmlsZSA9IHRoaXMuc2VhcmNoRm9yU3BlY2lhbEZpbGVzXyhuYW1lLCBzZWFyY2hNb2RlKTtcclxuICAgICAgICBpZiAoc3BlY2lhbEZpbGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3BlY2lhbEZpbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFN0YXJ0IGxvb2tpbmcgdGhyb3VnaCBwb3NzaWJsZSBmaWxlc1xyXG4gICAgICAgIGxldCBzdHVkZW50VmVyc2lvbiA9IHRoaXMuc2VhcmNoRm9yRmlsZUluTGlzdF8oZXh0cmFTdHVkZW50RmlsZXMsIG5hbWUpO1xyXG4gICAgICAgIGxldCBnZW5lcmF0ZWRWZXJzaW9uID0gdGhpcy5zZWFyY2hGb3JGaWxlSW5MaXN0XyhleHRyYVN0dWRlbnRGaWxlcywgXCIqXCIrbmFtZSk7XHJcbiAgICAgICAgbGV0IGRlZmF1bHRWZXJzaW9uID0gdGhpcy5zZWFyY2hGb3JGaWxlSW5MaXN0XyhleHRyYUluc3RydWN0b3JGaWxlcywgXCImXCIrbmFtZSk7XHJcbiAgICAgICAgaWYgKHNlYXJjaE1vZGUgPT09IFNlYXJjaE1vZGVzLk9OTFlfU1RVREVOVF9GSUxFUykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmlyc3REZWZpbmVkVmFsdWUoZGVmYXVsdFZlcnNpb24sIHN0dWRlbnRWZXJzaW9uLCBnZW5lcmF0ZWRWZXJzaW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGluc3RydWN0b3JWZXJzaW9uID0gdGhpcy5zZWFyY2hGb3JGaWxlSW5MaXN0XyhleHRyYUluc3RydWN0b3JGaWxlcywgXCIhXCIrbmFtZSk7XHJcbiAgICAgICAgbGV0IGhpZGRlblZlcnNpb24gPSB0aGlzLnNlYXJjaEZvckZpbGVJbkxpc3RfKGV4dHJhSW5zdHJ1Y3RvckZpbGVzLCBcIj9cIituYW1lKTtcclxuICAgICAgICBsZXQgc3RhcnRpbmdWZXJzaW9uID0gdGhpcy5zZWFyY2hGb3JGaWxlSW5MaXN0XyhleHRyYVN0YXJ0aW5nRmlsZXMsIFwiXlwiK25hbWUpO1xyXG4gICAgICAgIGlmIChzZWFyY2hNb2RlID09PSBTZWFyY2hNb2Rlcy5TVEFSVF9XSVRIX0lOU1RSVUNUT1IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpcnN0RGVmaW5lZFZhbHVlKGluc3RydWN0b3JWZXJzaW9uLCBoaWRkZW5WZXJzaW9uLCBzdGFydGluZ1ZlcnNpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmVyc2lvbiwgc3R1ZGVudFZlcnNpb24sIGdlbmVyYXRlZFZlcnNpb24pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2VhcmNoTW9kZSA9PT0gU2VhcmNoTW9kZXMuRVZFUllXSEVSRSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmlyc3REZWZpbmVkVmFsdWUoZGVmYXVsdFZlcnNpb24sIHN0dWRlbnRWZXJzaW9uLCBnZW5lcmF0ZWRWZXJzaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3RvclZlcnNpb24sIGhpZGRlblZlcnNpb24sIHN0YXJ0aW5nVmVyc2lvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaEZvckZpbGVJbkxpc3RfKG1vZGVsTGlzdCwgZmlsZW5hbWUpIHtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBtb2RlbExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG1vZGVsTGlzdFtpXS5maWxlbmFtZSgpID09PSBmaWxlbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vZGVsTGlzdFtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaEZvclNwZWNpYWxGaWxlc18oZmlsZW5hbWUsIHNlYXJjaE1vZGUpIHtcclxuICAgICAgICBpZiAoc2VhcmNoTW9kZSA9PT0gU2VhcmNoTW9kZXMuT05MWV9TVFVERU5UX0ZJTEVTKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWxlbmFtZSA9PT0gXCJhbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ha2VNb2NrTW9kZWxGaWxlKFwiX2luc3RydWN0b3IvYW5zd2VyLnB5XCIsIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoIChmaWxlbmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYW5zd2VyLnB5XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFrZU1vY2tNb2RlbEZpbGUoXCJfaW5zdHJ1Y3Rvci9hbnN3ZXIucHlcIiwgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZSgpKTtcclxuICAgICAgICAgICAgY2FzZSBcIm9uX3J1bi5weVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ha2VNb2NrTW9kZWxGaWxlKFwiX2luc3RydWN0b3Ivb25fcnVuLnB5XCIsIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uUnVuKCkpO1xyXG4gICAgICAgICAgICBjYXNlIFwib25fY2hhbmdlLnB5XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFrZU1vY2tNb2RlbEZpbGUoXCJfaW5zdHJ1Y3Rvci9vbl9jaGFuZ2UucHlcIiwgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UoKSk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJvbl9ldmFsLnB5XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFrZU1vY2tNb2RlbEZpbGUoXCJfaW5zdHJ1Y3Rvci9vbl9ldmFsLm1kXCIsIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uRXZhbCgpKTtcclxuICAgICAgICAgICAgY2FzZSBcImluc3RydWN0aW9ucy5tZFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ha2VNb2NrTW9kZWxGaWxlKFwiX2luc3RydWN0b3IvaW5zdHJ1Y3Rpb25zLm1kXCIsIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucygpKTtcclxuICAgICAgICAgICAgY2FzZSBcInN0YXJ0aW5nX2NvZGUucHlcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBtYWtlTW9ja01vZGVsRmlsZShcIl9pbnN0cnVjdG9yL3N0YXJ0aW5nX2NvZGUucHlcIiwgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIG5ld0ZpbGVEaWFsb2coa2luZCkge1xyXG4gICAgICAgIGxldCBib2R5ID0gJChORVdfSU5TVFJVQ1RPUl9GSUxFX0RJQUxPR19IVE1MKTtcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSBib2R5LmZpbmQoXCIuYmxvY2tweS1pbnN0cnVjdG9yLWZpbGUtZGlhbG9nLWZpbGVuYW1lXCIpO1xyXG4gICAgICAgIGxldCBmaWxldHlwZSA9IGJvZHkuZmluZChcIi5ibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctZmlsZXR5cGVcIik7XHJcbiAgICAgICAgbGV0IG5hbWVzcGFjZSA9IGJvZHkuZmluZChcIi5ibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctbmFtZXNwYWNlXCIpO1xyXG4gICAgICAgIGxldCBleHRlbnNpb25SZWdleCA9IC8oPzpcXC4oW14uXSspKT8kLztcclxuICAgICAgICBmaWxlbmFtZS5vbihcImlucHV0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGV4dGVuc2lvbiA9IGV4dGVuc2lvblJlZ2V4LmV4ZWMoZmlsZW5hbWUudmFsKCkpWzFdO1xyXG4gICAgICAgICAgICBleHRlbnNpb24gPSBleHRlbnNpb24gPT09IHVuZGVmaW5lZCA/IFwiTm8gZXh0ZW5zaW9uXCIgOiBleHRlbnNpb247XHJcbiAgICAgICAgICAgIC8vVE9ETzogdGhpcy5tYWluLmNvbXBvbmVudHMuZWRpdG9ycy5nZXRFZGl0b3JGcm9tRXh0ZW5zaW9uKGV4dGVuc2lvbik7XHJcbiAgICAgICAgICAgIGZpbGV0eXBlLnRleHQoZXh0ZW5zaW9uKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgeWVzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcHJlZml4ID0gXCJcIjtcclxuICAgICAgICAgICAgaWYgKGtpbmQgPT09IFwiaW5zdHJ1Y3RvclwiKSB7XHJcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBuYW1lc3BhY2UudmFsKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2luZCA9PT0gXCJzdGFydGluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIl5cIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGZpbGVuYW1lLnZhbCgpKSB7XHJcbiAgICAgICAgICAgICAgICBmaWxlbmFtZSA9IHByZWZpeCtmaWxlbmFtZS52YWwoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV3RmlsZShmaWxlbmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGJvZHkuc3VibWl0KChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgeWVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5jb25maXJtKFwiTWFrZSBOZXcgRmlsZVwiLCBib2R5LCB5ZXMsICgpPT57fSwgXCJBZGRcIik7XHJcbiAgICB9XHJcbn0iLCIvL1RPRE86IE1vdmUgZ2V0IGxpbmsgZG93biB0byBmb290ZXIsIHJlbW92ZSB2ZXJ0aWNhbCBiYXIgZnJvbSBxdWljay1tZW51XHJcbmV4cG9ydCBsZXQgRk9PVEVSX0hUTUwgPSBgXHJcbjxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgYmxvY2tweS1wYW5lbCBibG9ja3B5LXN0YXR1c1wiPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ2xvYWRBc3NpZ25tZW50JylcIj5Mb2FkIEFzc2lnbm1lbnQ8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ3NhdmVBc3NpZ25tZW50JylcIj5TYXZlIEFzc2lnbm1lbnQ8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ2xvYWRGaWxlJylcIj5Mb2FkIEZpbGU8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ3NhdmVGaWxlJylcIj5TYXZlIEZpbGU8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ2xvYWREYXRhc2V0JylcIj5Mb2FkIERhdGFzZXQ8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ2xvZ0V2ZW50JylcIj5Mb2cgRXZlbnQ8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ3VwZGF0ZVN1Ym1pc3Npb24nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiB1aS5zZXJ2ZXIuZm9yY2UudXBkYXRlU3VibWlzc2lvblwiPlVwZGF0ZSBTdWJtaXNzaW9uPC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdvbkV4ZWN1dGlvbicpXCI+RXhlY3V0aW9uPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2XHJcbiAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdWkuc2VydmVyLm1lc3NhZ2VzXCI+PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxzcGFuPlVzZXI6IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHVzZXIuaWRcIj48L3NwYW4+ICg8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1c2VyLm5hbWVcIj48L3NwYW4+LCA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1c2VyLnJvbGVcIj48L3NwYW4+KTwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuPkNvdXJzZTogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdXNlci5jb3Vyc2VJZFwiPjwvc3Bhbj48L3NwYW4+LFxyXG4gICAgICAgIDxzcGFuPkdyb3VwOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1c2VyLmdyb3VwSWRcIj48L3NwYW4+PC9zcGFuPixcclxuICAgICAgICA8c3Bhbj5Bc3NpZ25tZW50OiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiBhc3NpZ25tZW50LmlkXCI+PC9zcGFuPjwvc3Bhbj4sXHJcbiAgICAgICAgPHNwYW4+QXNzaWdubWVudCBWZXJzaW9uOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiBhc3NpZ25tZW50LnZlcnNpb25cIj48L3NwYW4+PC9zcGFuPixcclxuICAgICAgICA8c3Bhbj5TdWJtaXNzaW9uOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiBzdWJtaXNzaW9uLmlkXCI+PC9zcGFuPjwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuPlN1Ym1pc3Npb24gVmVyc2lvbjogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogc3VibWlzc2lvbi52ZXJzaW9uXCI+PC9zcGFuPjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuYDsiLCIvLyBUT0RPOiBTaG91bGQgZGlzYWJsZSBidXR0b25zIGlmIHdlIGNhbid0IGFjdGl2YXRlIHRoZW0uXG5cbmV4cG9ydCBjb25zdCBISVNUT1JZX1RPT0xCQVJfSFRNTCA9IGBcbjxkaXYgY2xhc3M9XCJibG9ja3B5LWhpc3RvcnktdG9vbGJhciBjb2wtbWQtMTJcIiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBkaXNwbGF5Lmhpc3RvcnlNb2RlXCI+XG5cbiAgICA8Zm9ybSBjbGFzcz1cImZvcm0taW5saW5lXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJibG9ja3B5LWhpc3Rvcnktc3RhcnQgYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBtci0yXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24uaGlzdG9yeS5zdGFydFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1zdGVwLWJhY2t3YXJkJz48L3NwYW4+IFN0YXJ0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBtci0yXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24uaGlzdG9yeS5wcmV2aW91c1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1iYWNrd2FyZCc+PC9zcGFuPiBQcmV2aW91c1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPHNlbGVjdCBjbGFzcz1cImJsb2NrcHktaGlzdG9yeS1zZWxlY3RvciBmb3JtLWNvbnRyb2wgY3VzdG9tLXNlbGVjdCBtci0yXCIgYXJpYS10aXRsZT1cIkhpc3RvcnkgU2VsZWN0b3JcIj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IG1yLTJcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi5oaXN0b3J5LnVzZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1maWxlLWltcG9ydCc+PC9zcGFuPiBVc2VcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IG1yLTJcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi5oaXN0b3J5Lm5leHRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZm9yd2FyZCc+PC9zcGFuPiBOZXh0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLmhpc3RvcnkubW9zdFJlY2VudFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1zdGVwLWZvcndhcmQnPjwvc3Bhbj4gTW9zdCBSZWNlbnRcbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9mb3JtPlxuPC9kaXY+XG5gO1xuXG4vKipcbiAqIEFuIG9iamVjdCBmb3IgZGlzcGxheWluZyB0aGUgdXNlcidzIGNvZGluZyBsb2dzICh0aGVpciBoaXN0b3J5KS5cbiAqIEEgbGlnaHR3ZWlnaHQgY29tcG9uZW50LCBpdHMgb25seSBqb2IgaXMgdG8gb3BlbiBhIGRpYWxvZy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEB0aGlzIHtCbG9ja1B5SGlzdG9yeX1cbiAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICovXG5leHBvcnQgY2xhc3MgQmxvY2tQeUhpc3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgICAgICB0aGlzLnRhZyA9IHRhZztcbiAgICAgICAgdGhpcy5jdXJyZW50SWQgPSBudWxsO1xuICAgICAgICB0aGlzLmhpc3RvcnkgPSBbXTtcbiAgICAgICAgdGhpcy5lZGl0RXZlbnRzID0gW107XG4gICAgfVxuXG4gICAgbG9hZChoaXN0b3J5KSB7XG4gICAgICAgIHRoaXMuaGlzdG9yeSA9IGhpc3Rvcnk7XG4gICAgICAgIHRoaXMuZWRpdEV2ZW50cyA9IFtdO1xuICAgICAgICB0aGlzLnNlbGVjdG9yID0gJChcIi5ibG9ja3B5LWhpc3Rvcnktc2VsZWN0b3JcIikuZW1wdHkoKTtcbiAgICAgICAgbGV0IGVkaXRJZCA9IDA7XG4gICAgICAgIGhpc3RvcnlcbiAgICAgICAgICAgIC5maWx0ZXIoKGVudHJ5KSA9PiAoXG4gICAgICAgICAgICAgICAgIWVudHJ5LmZpbGVfcGF0aC5zdGFydHNXaXRoKFwiX2luc3RydWN0b3IuXCIpICYmXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LmV2ZW50X3R5cGUgIT09IFwiQ29tcGlsZVwiICYmXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LmV2ZW50X3R5cGUgIT09IFwiSW50ZXJ2ZW50aW9uXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgKCF0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5oaWRkZW4oKSB8fCBlbnRyeS5ldmVudF90eXBlICE9PSBcIlgtU3VibWlzc2lvbi5MTVNcIilcbiAgICAgICAgICAgICkpXG4gICAgICAgICAgICAuZm9yRWFjaCgoZW50cnksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGV2ZW50X3R5cGUgPSBSRU1BUF9FVkVOVF9UWVBFU1tlbnRyeS5ldmVudF90eXBlXSB8fCBlbnRyeS5ldmVudF90eXBlO1xuICAgICAgICAgICAgICAgIGxldCBkaXNwbGF5ZWQgPSBwcmV0dHlQcmludERhdGVUaW1lKGVudHJ5LmNsaWVudF90aW1lc3RhbXApICtcIiAtIFwiK2V2ZW50X3R5cGU7XG4gICAgICAgICAgICAgICAgbGV0IGRpc2FibGUgPSAoZW50cnkuZXZlbnRfdHlwZSAhPT0gXCJGaWxlLkVkaXRcIik7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9ICQoXCI8b3B0aW9uPjwvb3B0aW9uPlwiLCB7dGV4dDogZGlzcGxheWVkLCBkaXNhYmxlZDogZGlzYWJsZX0pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRWRpdEV2ZW50KGVudHJ5KSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb24uYXR0cihcInZhbHVlXCIsIGVkaXRJZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdEV2ZW50cy5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgZWRpdElkICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0b3IuYXBwZW5kKG9wdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci52YWwoTWF0aC5tYXgoMCwgZWRpdElkLTEpKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci5jaGFuZ2UoKGV2dCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbW92ZVRvU3RhcnQoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IudmFsKDApO1xuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcigpO1xuICAgIH1cblxuICAgIG1vdmVQcmV2aW91cygpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRJZCA9IHBhcnNlSW50KHRoaXMuc2VsZWN0b3IudmFsKCksIDEwKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci52YWwoTWF0aC5tYXgoMCwgY3VycmVudElkLTEpKTtcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IoKTtcbiAgICB9XG5cbiAgICBtb3ZlTmV4dCgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRJZCA9IHBhcnNlSW50KHRoaXMuc2VsZWN0b3IudmFsKCksIDEwKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci52YWwoTWF0aC5taW4odGhpcy5lZGl0RXZlbnRzLmxlbmd0aC0xLCBjdXJyZW50SWQrMSkpO1xuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcigpO1xuICAgIH1cblxuICAgIG1vdmVUb01vc3RSZWNlbnQoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IudmFsKHRoaXMuZWRpdEV2ZW50cy5sZW5ndGgtMSk7XG4gICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlRWRpdG9yKCkge1xuICAgICAgICBpZiAodGhpcy5lZGl0RXZlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRJZCA9IHBhcnNlSW50KHRoaXMuc2VsZWN0b3IudmFsKCksIDEwKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS5zZXRDb2RlKHRoaXMuZWRpdEV2ZW50c1tjdXJyZW50SWRdLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlKCkge1xuICAgICAgICBpZiAodGhpcy5lZGl0RXZlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRJZCA9IHBhcnNlSW50KHRoaXMuc2VsZWN0b3IudmFsKCksIDEwKTtcbiAgICAgICAgICAgIGxldCBjb2RlID0gdGhpcy5lZGl0RXZlbnRzW2N1cnJlbnRJZF0ubWVzc2FnZTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC51aS5lZGl0b3JzLnB5dGhvbi50dXJuT2ZmSGlzdG9yeU1vZGUoKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5maWxlLmhhbmRsZShjb2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzRWRpdEV2ZW50KGVudHJ5KSB7XG4gICAgICAgIHJldHVybiAoKGVudHJ5LmV2ZW50X3R5cGUgPT09IFwiRmlsZS5FZGl0XCIgfHxcbiAgICAgICAgICAgICAgICAgZW50cnkuZXZlbnRfdHlwZSA9PT0gXCJGaWxlLkNyZWF0ZVwiKSAmJlxuICAgICAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkgPT09IGVudHJ5LmZpbGVfcGF0aCk7XG4gICAgfVxuXG59XG5cbmNvbnN0IFJFTUFQX0VWRU5UX1RZUEVTID0ge1xuICAgIFwiU2Vzc2lvbi5TdGFydFwiOiBcIkJlZ2FuIHNlc3Npb25cIixcbiAgICBcIlgtSVAuQ2hhbmdlXCI6IFwiQ2hhbmdlZCBJUCBhZGRyZXNzXCIsXG4gICAgXCJGaWxlLkVkaXRcIjogXCJFZGl0ZWQgY29kZVwiLFxuICAgIFwiRmlsZS5DcmVhdGVcIjogXCJTdGFydGVkIGFzc2lnbm1lbnRcIixcbiAgICBcIlJ1bi5Qcm9ncmFtXCI6IFwiUmFuIHByb2dyYW1cIixcbiAgICBcIkNvbXBpbGUuRXJyb3JcIjogXCJTeW50YXggZXJyb3JcIixcbiAgICBcIlgtU3VibWlzc2lvbi5MTVNcIjogXCJVcGRhdGVkIGdyYWRlXCJcbn07XG5cbmNvbnN0IG1vbnRoTmFtZXMgPSBbXG4gICAgXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIixcbiAgICBcIkFwclwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsXG4gICAgXCJBdWdcIiwgXCJTZXB0XCIsIFwiT2N0XCIsXG4gICAgXCJOb3ZcIiwgXCJEZWNcIlxuXTtcbmNvbnN0IHdlZWtEYXlzID0gW1xuICAgIFwiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsXG4gICAgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIixcbiAgICBcIlNhdFwiXG5dO1xuXG5mdW5jdGlvbiBpc1NhbWVEYXkoZmlyc3QsIHNlY29uZCkge1xuICAgIHJldHVybiBmaXJzdC5nZXREYXRlKCkgPT09IHNlY29uZC5nZXREYXRlKCkgJiZcbiAgICAgICAgZmlyc3QuZ2V0TW9udGgoKSA9PT0gc2Vjb25kLmdldE1vbnRoKCkgJiZcbiAgICAgICAgZmlyc3QuZ2V0RnVsbFllYXIoKSA9PT0gc2Vjb25kLmdldEZ1bGxZZWFyKCk7XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIHBhcnNlIGEgZGF0ZS90aW1lIHN0cmluZyBhbmQgcmV3cml0ZSBpdCBhcyBzb21ldGhpbmdcbiAqIG1vcmUgaHVtYW4gcmVhZGFibGUuXG4gKiBAcGFyYW0ge1N0cmluZ30gdGltZVN0cmluZyAtIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGltZSAoXCJZWVlZTU1ERCBISE1NU1NcIilcbiAqIEByZXR1cm5zIHtTdHJpbmd9IC0gQSBodW1hbi1yZWFkYWJsZSB0aW1lIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gcHJldHR5UHJpbnREYXRlVGltZSh0aW1lU3RyaW5nKSB7XG4gICAgLypsZXQgeWVhciA9IHRpbWVTdHJpbmcuc2xpY2UoMCwgNCksXG4gICAgICAgIG1vbnRoID0gcGFyc2VJbnQodGltZVN0cmluZy5zbGljZSg0LCA2KSwgMTApLTEsXG4gICAgICAgIGRheSA9IHRpbWVTdHJpbmcuc2xpY2UoNiwgOCksXG4gICAgICAgIGhvdXIgPSB0aW1lU3RyaW5nLnNsaWNlKDksIDExKSxcbiAgICAgICAgbWludXRlcyA9IHRpbWVTdHJpbmcuc2xpY2UoMTEsIDEzKSxcbiAgICAgICAgc2Vjb25kcyA9IHRpbWVTdHJpbmcuc2xpY2UoMTMsIDE1KTsqL1xuICAgIC8vIFRPRE86IEhhbmRsZSB0aW1lem9uZXMgY29ycmVjdGx5XG4gICAgaWYgKHRpbWVTdHJpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gXCJVbmRlZmluZWQgVGltZVwiO1xuICAgIH1cbiAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgcGFzdCA9IG5ldyBEYXRlKHBhcnNlSW50KHRpbWVTdHJpbmcsIDEwKSk7XG4gICAgaWYgKGlzU2FtZURheShub3csIHBhc3QpKSB7XG4gICAgICAgIHJldHVybiBcIlRvZGF5IGF0IFwiK3Bhc3QudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGRheVN0ciA9IHdlZWtEYXlzW3Bhc3QuZ2V0RGF5KCldO1xuICAgICAgICBsZXQgbW9udGhTdHIgPSBtb250aE5hbWVzW3Bhc3QuZ2V0TW9udGgoKV07XG4gICAgICAgIGxldCBkYXRlID0gZGF5U3RyICsgXCIsIFwiICsgbW9udGhTdHIgKyBcIiBcIiArIHBhc3QuZ2V0RGF0ZSgpO1xuICAgICAgICBpZiAobm93LmdldEZ1bGxZZWFyKCkgPT09IHBhc3QuZ2V0RnVsbFllYXIoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUgKyBcIiBhdCBcIitwYXN0LnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUgKyBcIiwgXCIrcGFzdC5nZXRGdWxsWWVhcigpICsgXCIgYXQgXCIrcGFzdC50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKipcbiAqIE9wZW5zIHRoZSBoaXN0b3J5IGRpYWxvZyBib3guIFRoaXMgcmVxdWlyZXMgYSB0cmlwIHRvIHRoZSBzZXJ2ZXIgYW5kXG4gKiBvY2N1cnMgYXN5bmNocm9ub3VzbHkuIFRoZSB1c2VycycgY29kZSBpcyBzaG93biBpbiBwcmVmb3JtYXR0ZWQgdGV4dFxuICogdGFncyAobm8gY29kZSBoaWdobGlnaHRpbmcgY3VycmVudGx5KSBhbG9uZyB3aXRoIHRoZSB0aW1lc3RhbXAuXG4gKi9cbkJsb2NrUHlIaXN0b3J5LnByb3RvdHlwZS5vcGVuRGlhbG9nID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRpYWxvZyA9IHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZztcbiAgICB2YXIgYm9keSA9IFwiPHByZT5hID0gMDwvcHJlPlwiO1xuICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5nZXRIaXN0b3J5KGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGJvZHkgPSBkYXRhLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKGNvbXBsZXRlLCBlbGVtKSB7IFxuICAgICAgICAgICAgdmFyIGNvbXBsZXRlX3N0ciA9IHByZXR0eVByaW50RGF0ZVRpbWUoZWxlbS50aW1lKTtcbiAgICAgICAgICAgIHZhciBuZXdfbGluZSA9IFwiPGI+XCIrY29tcGxldGVfc3RyK1wiPC9iPjxicj48cHJlPlwiK2VsZW0uY29kZStcIjwvcHJlPlwiO1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBsZXRlK1wiXFxuXCIrbmV3X2xpbmU7XG4gICAgICAgIH0sIFwiXCIpO1xuICAgICAgICBkaWFsb2cuc2hvdyhcIldvcmsgSGlzdG9yeVwiLCBib2R5LCBmdW5jdGlvbigpIHt9KTtcbiAgICB9KTtcbn07IiwiaW1wb3J0IHtUUkFDRV9IVE1MfSBmcm9tIFwidHJhY2UuanNcIjtcbmltcG9ydCB7RElBTE9HX0hUTUx9IGZyb20gXCJkaWFsb2cuanNcIjtcbmltcG9ydCB7RkVFREJBQ0tfSFRNTH0gZnJvbSBcImZlZWRiYWNrLmpzXCI7XG5pbXBvcnQge0ZJTEVTX0hUTUx9IGZyb20gXCJmaWxlcy5qc1wiO1xuaW1wb3J0IHtGT09URVJfSFRNTH0gZnJvbSBcImZvb3Rlci5qc1wiO1xuaW1wb3J0IHtFRElUT1JTX0hUTUx9IGZyb20gXCJlZGl0b3JzLmpzXCI7XG5pbXBvcnQge0NPTlNPTEVfSFRNTH0gZnJvbSBcImNvbnNvbGUuanNcIjtcblxuLyoqXG4gKiBAZW51bSB7c3RyfVxuICovXG5leHBvcnQgbGV0IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucyA9IHtcbiAgICBGRUVEQkFDSzogXCJmZWVkYmFja1wiLFxuICAgIFRSQUNFOiBcInRyYWNlXCIsXG4gICAgTk9ORTogXCJub25lXCJcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRXh0cmFJbnRlcmZhY2VTdWJzY3JpcHRpb25zKHNlbGYsIG1vZGVsKSB7XG4gICAgbGV0IGhpZ2hsaWdodFRpbWVvdXQgPSBudWxsO1xuICAgIG1vZGVsLnVpLmluc3RydWN0aW9ucy5jdXJyZW50LnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmIChoaWdobGlnaHRUaW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlnaGxpZ2h0VGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgICAgaGlnaGxpZ2h0VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbW9kZWwuY29uZmlndXJhdGlvbi5jb250YWluZXIuZmluZChcIi5ibG9ja3B5LWluc3RydWN0aW9ucyBwcmUgY29kZVwiKS5tYXAoIChpLCBibG9jaykgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5obGpzLmhpZ2hsaWdodEJsb2NrKGJsb2NrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCA0MDApO1xuICAgIH0pO1xuICAgIG1vZGVsLmRpc3BsYXkuZnVsbHNjcmVlbi5zdWJzY3JpYmUoKGlzRnVsbHNjcmVlbikgPT4ge1xuICAgICAgICBzZWxmLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1EaXNwbGF5LkZ1bGxzY3JlZW4uUmVxdWVzdFwiLCBcIlwiLCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRnVsbHNjcmVlbi50b1N0cmluZygpLCBcIlwiKTtcbiAgICAgICAgaWYgKGlzRnVsbHNjcmVlbikge1xuICAgICAgICAgICAgLy8gTk9URTogbmF2aWdhdGlvblVJIGNvdWxkIGFsbG93IHVzIHRvIGZvcmNlIGNvbnRyb2xzIHRvIHNob3dcbiAgICAgICAgICAgIG1vZGVsLmNvbmZpZ3VyYXRpb24uY29udGFpbmVyLnBhcmVudCgpWzBdLnJlcXVlc3RGdWxsc2NyZWVuKCkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGBFcnJvciBhdHRlbXB0aW5nIHRvIGVuYWJsZSBmdWxsLXNjcmVlbiBtb2RlOiAke2Vyci5tZXNzYWdlfSAoJHtlcnIubmFtZX0pYDtcbiAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1EaXNwbGF5LkZ1bGxzY3JlZW4uRXJyb3JcIiwgXCJcIiwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UsICBcIlwiKTtcbiAgICAgICAgICAgICAgICBhbGVydChtZXNzYWdlKTtcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJYLURpc3BsYXkuRnVsbHNjcmVlbi5TdWNjZXNzXCIsIFwiXCIsIFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LmZ1bGxzY3JlZW4odHJ1ZSk7XG4gICAgICAgICAgICAgICAgbW9kZWwuY29uZmlndXJhdGlvbi5jb250YWluZXIuY3NzKFwib3ZlcmZsb3cteVwiLCBcImF1dG9cIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlgtRGlzcGxheS5GdWxsc2NyZWVuLkV4aXRcIiwgXCJcIiwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRnVsbHNjcmVlbi50b1N0cmluZygpLCBcIlwiKTtcbiAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LmZ1bGxzY3JlZW4oZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLy8gVE9ETzogR2V0IHNoYXJlYWJsZSBsaW5rIGJ1dHRvblxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUludGVyZmFjZShtYWluKSB7XG4gICAgcmV0dXJuIGBcbjxkaXYgY2xhc3M9J2Jsb2NrcHktY29udGVudCBjb250YWluZXItZmx1aWQnPlxuXG4gICAgPCEtLSBEaWFsb2cgLS0+XG4gICAgJHtESUFMT0dfSFRNTH1cbiAgICBcbiAgICA8IS0tIEhpZGRlbiBDYXB0dXJlIENhbnZhcyAtLT5cbiAgICA8Y2FudmFzIGlkPSdjYXB0dXJlLWNhbnZhcycgY2xhc3M9J2Qtbm9uZScgcm9sZT1cInByZXNlbnRhdGlvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvY2FudmFzPlxuICAgIFxuICAgIDwhLS0gUm93IDE6IEhlYWRlciBhbmQgUXVpY2sgTWVudSAtLT5cbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxuICAgICAgICAgXG4gICAgICAgICA8IS0tIERlc2NyaXB0aW9uIC0tPlxuICAgICAgICAgPGRpdiBjbGFzcz0nY29sLW1kLTEwIGJsb2NrcHktcGFuZWwgYmxvY2tweS1oZWFkZXInXG4gICAgICAgICAgICAgICByb2xlPSdoZWFkaW5nJyBhcmlhLWxhYmVsPSdBc3NpZ25tZW50IERlc2NyaXB0aW9uJz5cbiAgICAgICAgIFxuICAgICAgICAgICAgPCEtLSBBc3NpZ25tZW50IE5hbWUgLS0+XG4gICAgICAgICAgICA8c3BhbiByb2xlPSdoZWFkaW5nJyBhcmlhLWxldmVsPScxJ1xuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJibG9ja3B5LW5hbWVcIj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPkJsb2NrUHk6IDwvc3Ryb25nPiBcbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9J3RleHQ6IGFzc2lnbm1lbnQubmFtZSc+PC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8IS0tIFJlc2V0IEluc3RydWN0aW9ucyBCdXR0b24gLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2tweS1pbnN0cnVjdGlvbnMtcmVzZXRcIlxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLmluc3RydWN0aW9ucy5pc0NoYW5nZWRcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImZsb2F0LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmluc3RydWN0aW9ucy5yZXNldFwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgUmVzZXQgaW5zdHJ1Y3Rpb25zPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwhLS0gSW5zdHJ1Y3Rpb25zIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nYmxvY2tweS1pbnN0cnVjdGlvbnMnXG4gICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImh0bWw6IHVpLmluc3RydWN0aW9ucy5jdXJyZW50XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtbWQtMiBibG9ja3B5LXBhbmVsIGJsb2NrcHktcXVpY2stbWVudSdcbiAgICAgICAgICAgICByb2xlPSdtZW51YmFyJyBhcmlhLWxhYmVsPSdRdWljayBNZW51JyB0aXRsZT1cIlF1aWNrIE1lbnVcIj5cbiAgICAgICAgICAgIDwhLS0gR2V0IFNoYXJlYWJsZSBMaW5rIC0tPlxuICAgICAgICAgICAgPCEtLTxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJ0bi1zbVwiPlxuICAgICAgICAgICAgICAgIEdldCBzaGFyZWFibGUgbGluazwvYnV0dG9uPi0tPlxuICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidmlzaWJsZTogdWkubWVudS5pc1N1Ym1pdHRlZFwiPlxuICAgICAgICAgICAgICAgIFlvdXIgc3VibWlzc2lvbiBpcyByZWFkeSB0byBiZSByZXZpZXdlZCE8L3NwYW4+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBidG4tc21cIlxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLm1lbnUuY2FuTWFya1N1Ym1pdHRlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHVpLm1lbnUudGV4dE1hcmtTdWJtaXR0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogdWkubWVudS5jbGlja01hcmtTdWJtaXR0ZWRcIj48L2J1dHRvbj5cbiAgICAgICAgICAgIDwhLS0gVmlldyBhcyBpbnN0cnVjdG9yIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIlxuICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5yb2xlLmlzR3JhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiXCIgaWQ9XCJibG9ja3B5LWFzLWluc3RydWN0b3JcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjaGVja2VkOiBkaXNwbGF5Lmluc3RydWN0b3JcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1hcy1pbnN0cnVjdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgIFZpZXcgYXMgaW5zdHJ1Y3RvclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJ0bi1zbVwiXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLm1lbnUuY2xpY2tGdWxsc2NyZWVuXCJcbiAgICAgICAgICAgID48c3BhbiBjbGFzcz0nZmFzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsYXNzOiB1aS5tZW51LnRleHRGdWxsc2NyZWVuXCJcbiAgICAgICAgICAgID48L3NwYW4+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgXG4gICAgPC9kaXY+XG4gICAgXG4gICAgPCEtLSBSb3cgMjogQ29uc29sZSBhbmQgRmVlZGJhY2sgLS0+XG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cbiAgICBcbiAgICAgICAgPCEtLSBDb25zb2xlIC0tPlxuICAgICAgICAke0NPTlNPTEVfSFRNTH1cbiAgICAgICAgIFxuICAgICAgICA8IS0tIEZlZWRiYWNrIC0tPlxuICAgICAgICA8IS0tIGtvIGlmOiB1aS5zZWNvbmRSb3cuaXNGZWVkYmFja1Zpc2libGUgLS0+XG4gICAgICAgICR7RkVFREJBQ0tfSFRNTH1cbiAgICAgICAgPCEtLSAva28gLS0+XG4gICAgICAgIFxuICAgICAgICA8IS0tIFRyYWNlIC0tPlxuICAgICAgICA8IS0tIGtvIGlmOiB1aS5zZWNvbmRSb3cuaXNUcmFjZVZpc2libGUgLS0+XG4gICAgICAgICR7VFJBQ0VfSFRNTH1cbiAgICAgICAgPCEtLSAva28gLS0+XG4gICAgICAgICBcbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8IS0tIFJvdyAzOiBGaWxlIE5hdmlnYXRpb24gLS0+XG4gICAgPCEtLSBrbyBpZjogdWkuZmlsZXMudmlzaWJsZSAtLT5cbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxuICAgICAgICAke0ZJTEVTX0hUTUx9XG4gICAgPC9kaXY+XG4gICAgPCEtLSAva28gLS0+XG4gICAgXG4gICAgPCEtLSBWaWV3IFJvdyAtLT5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICR7RURJVE9SU19IVE1MfVxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSBGb290ZXIgUm93IC0tPiAgICBcbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICR7Rk9PVEVSX0hUTUx9XG4gICAgPC9kaXY+XG4gICAgXG48L2Rpdj5cbiAgICBgO1xufTsiLCJpbXBvcnQge0xvY2FsU3RvcmFnZVdyYXBwZXJ9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7bG9hZEFzc2lnbm1lbnRTZXR0aW5ncywgc2F2ZUFzc2lnbm1lbnRTZXR0aW5nc30gZnJvbSBcIi4vZWRpdG9yL2Fzc2lnbm1lbnRfc2V0dGluZ3NcIjtcblxuLyoqXG4gKlxuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGxldCBTdGF0dXNTdGF0ZSA9IHtcbiAgICBSRUFEWTogXCJyZWFkeVwiLFxuICAgIEFDVElWRTogXCJhY3RpdmVcIixcbiAgICBSRVRSWUlORzogXCJyZXRyeWluZ1wiLFxuICAgIEZBSUxFRDogXCJmYWlsZWRcIixcbiAgICBPRkZMSU5FOiBcIm9mZmxpbmVcIlxufTtcblxuLyoqXG4gKiBPYmplY3QgZm9yIGNvbW11bmljYXRpbmcgd2l0aCB0aGUgZXh0ZXJuYWwgc2VydmVycy4gVGhpcyBpbmNsdWRlcyBmdW5jdGlvbmFsaXR5IGZvclxuICogc2F2aW5nIGFuZCBsb2FkaW5nIGZpbGVzLCBsb2dnaW5nIGV2ZW50cywgc2F2aW5nIGNvbXBsZXRpb25zLCBhbmQgcmV0cmlldmluZyBoaXN0b3J5LlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlTZXJ2ZXJ9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJsb2NrUHlTZXJ2ZXIobWFpbikge1xuICAgIHRoaXMubWFpbiA9IG1haW47XG5cbiAgICAvLyBTYXZlIFVSTHMgbG9jYWxseSBmb3IgcXVpY2tlciBhY2Nlc3NcbiAgICB0aGlzLnVybHMgPSBtYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24udXJscztcblxuICAgIC8vIEFkZCB0aGUgTG9jYWxTdG9yYWdlIGNvbm5lY3Rpb25cbiAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgTG9jYWxTdG9yYWdlV3JhcHBlcihcIkJMT0NLUFlcIik7XG5cbiAgICAvLyBGYXVsdFJlc2lzdGFudENhY2hlXG4gICAgdGhpcy5xdWV1ZSA9IHtcbiAgICAgICAgXCJsb2dFdmVudFwiOiBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZS5nZXREZWZhdWx0KFwibG9nRXZlbnRcIiwgXCJbXVwiKSksXG4gICAgICAgIFwidXBkYXRlU3VibWlzc2lvblwiOiBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZS5nZXREZWZhdWx0KFwidXBkYXRlU3VibWlzc2lvblwiLCBcIltdXCIpKVxuICAgIH07XG4gICAgdGhpcy5NQVhfUVVFVUVfU0laRSA9IHtcbiAgICAgICAgXCJsb2dFdmVudFwiOiAyMDAsXG4gICAgICAgIFwidXBkYXRlU3VibWlzc2lvblwiOiA1MFxuICAgIH07XG5cbiAgICB0aGlzLlRJTUVSX0RFTEFZID0gMTAwMDtcbiAgICB0aGlzLkZBSUxfREVMQVkgPSAyMDAwO1xuXG4gICAgdGhpcy50aW1lcnMgPSB7fTtcblxuICAgIHRoaXMub3ZlcmxheSA9IG51bGw7XG4gICAgdGhpcy5ibG9ja2luZ0F0dGVtcHRzID0gMDtcblxuICAgIHRoaXMuY2FjaGVkRmlsZW5hbWVzID0gW107XG4gICAgdGhpcy5jcmVhdGVTdWJzY3JpcHRpb25zKCk7XG4gICAgdGhpcy5jaGVja0NhY2hlcygpO1xufVxuXG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIHRoZSBJUCBhZGRyZXNzIGhhcyBjaGFuZ2VkLCBsb2dnaW5nIGFuIGV2ZW50IGlmIHRoYXQgb2NjdXJzLlxuICogQHBhcmFtIHJlc3BvbnNlXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNoZWNrSVAgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICBpZiAodGhpcy5zdG9yYWdlLmhhcyhcIklQXCIpKSB7XG4gICAgICAgICAgICBsZXQgb2xkSVAgPSB0aGlzLnN0b3JhZ2UuZ2V0KFwiSVBcIik7XG4gICAgICAgICAgICBpZiAob2xkSVAgIT09IHJlc3BvbnNlLmlwKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIFwib2xkXCI6IG9sZElQLFxuICAgICAgICAgICAgICAgICAgICBcIm5ld1wiOiByZXNwb25zZS5pcFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMubG9nRXZlbnQoXCJYLUlQLkNoYW5nZVwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldChcIklQXCIsIHJlc3BvbnNlLmlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoXCJJUFwiLCByZXNwb25zZS5pcCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlcmUgaGF2ZSBiZWVuIHByZXZpb3VzIGZhaWx1cmVzIGNhY2hlZCwgYW5kIGlmIHNvIHJldHJpZXMgdGhlbS5cbiAqIFRPRE86IHVwZGF0ZVxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5jaGVja0NhY2hlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5zdG9yYWdlLmhhcyhcInNhdmVBc3NpZ25tZW50XCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2UuZ2V0KFwic2F2ZUFzc2lnbm1lbnRcIikpO1xuICAgICAgICB0aGlzLl9wb3N0TGF0ZXN0UmV0cnkoZGF0YSwgXCJhc3NpZ25tZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNhdmVBc3NpZ25tZW50XCIsIHRoaXMuVElNRVJfREVMQVkpO1xuICAgIH1cbiAgICB0aGlzLmNhY2hlZEZpbGVuYW1lcy5mb3JFYWNoKChmaWxlbmFtZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdG9yYWdlLmhhcyhcInNhdmVGaWxlXCIgKyBmaWxlbmFtZSkpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2UuZ2V0KFwic2F2ZUZpbGVcIiArIGZpbGVuYW1lKSk7XG4gICAgICAgICAgICB0aGlzLl9wb3N0TGF0ZXN0UmV0cnkoZGF0YSwgZmlsZW5hbWUsIFwic2F2ZUZpbGVcIiwgdGhpcy5USU1FUl9ERUxBWSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgc2VydmVyID0gdGhpcztcbiAgICBPYmplY3Qua2V5cyh0aGlzLnF1ZXVlKS5mb3JFYWNoKGZ1bmN0aW9uIChlbmRwb2ludCkge1xuICAgICAgICAoZnVuY3Rpb24gcHVzaEFueVF1ZXVlZChyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VydmVyLnF1ZXVlW2VuZHBvaW50XS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKHNlcnZlci5xdWV1ZVtlbmRwb2ludF0ucG9wKCkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gc2VydmVyLnVybHNbZW5kcG9pbnRdO1xuICAgICAgICAgICAgICAgICAgICBzZXJ2ZXIuX3Bvc3RSZXRyeShkYXRhLCBlbmRwb2ludCwgMTAwMCwgcHVzaEFueVF1ZXVlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSh7XCJzdWNjZXNzXCI6IHRydWV9KTtcbiAgICB9KTtcbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24gPSBmdW5jdGlvbiAobW9kZWwsIGZpbGVuYW1lKSB7XG4gICAgbW9kZWwuc3Vic2NyaWJlKChjb250ZW50cykgPT5cbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuYXV0b1NhdmUoKSA/IHRoaXMuc2F2ZUZpbGUoZmlsZW5hbWUsIGNvbnRlbnRzKSA6IGZhbHNlLCB0aGlzKTtcbiAgICB0aGlzLmNhY2hlZEZpbGVuYW1lcy5wdXNoKGZpbGVuYW1lKTtcbn07XG5cbi8qKlxuICogVE9ETzogZml4XG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNyZWF0ZVN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IG1vZGVsID0gdGhpcy5tYWluLm1vZGVsO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC5zdWJtaXNzaW9uLmNvZGUsIFwiYW5zd2VyLnB5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC5hc3NpZ25tZW50Lm9uUnVuLCBcIiFvbl9ydW4ucHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLmFzc2lnbm1lbnQub25FdmFsLCBcIiFvbl9ldmFsLnB5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlLCBcIiFvbl9jaGFuZ2UucHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLmFzc2lnbm1lbnQuaW5zdHJ1Y3Rpb25zLCBcIiFpbnN0cnVjdGlvbnMubWRcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLmFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlLCBcIl5zdGFydGluZ19jb2RlLnB5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC51aS5maWxlcy5leHRyYVN0dWRlbnRGaWxlcywgXCIjZXh0cmFfc3R1ZGVudF9maWxlcy5ibG9ja3B5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC51aS5maWxlcy5leHRyYVN0YXJ0aW5nRmlsZXMsIFwiI2V4dHJhX3N0YXJ0aW5nX2ZpbGVzLmJsb2NrcHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLnVpLmZpbGVzLmV4dHJhSW5zdHJ1Y3RvckZpbGVzLCBcIiNleHRyYV9pbnN0cnVjdG9yX2ZpbGVzLmJsb2NrcHlcIik7XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5jcmVhdGVFdmVudExvZ3MgPSBmdW5jdGlvbigpIHtcbiAgICB3aW5kb3cub25ibHVyID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmxvZ0V2ZW50KFwiU2Vzc2lvbi5FbmRcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gICAgfTtcbiAgICB3aW5kb3cub25mb2N1cyA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5sb2dFdmVudChcIlNlc3Npb24uU3RhcnRcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gICAgfTtcblxuICAgIC8vIFRPRE86IEFkZCBpbiBiZWFjb24/XG59O1xuXG4vKipcbiAqXG4gKiBTb21lIHN1YnNjcmlwdGlvbnMgaGF2ZSB0byBoYXBwZW4gYWZ0ZXIgb3RoZXIgdGhpbmdzIGhhdmUgYmVlbiBsb2FkZWQuXG4gKiBSaWdodCBub3cgdGhpcyBpcyBqdXN0IGFmdGVyIENPUkdJUyBsaWJyYXJpZXMgaGF2ZSBiZWVuIGxvYWRlZCwgYnV0IG1heWJlXG4gKiB3ZSdsbCBhZGQgbW9yZSBsYXRlciBhbmQgdGhpcyB3aWxsIG5lZWQgdG8gYmUgcmVmYWN0b3JlZC5cbiAqXG4gKiBUT0RPOiBmaXhcbiAqXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmZpbmFsaXplU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvL3RoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRhdGFzZXRzLnN1YnNjcmliZSh0aGlzLnNhdmVBc3NpZ25tZW50LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIHRoZSBkZWZhdWx0IHBheWxvYWQgZm9yIGFueSBjb21tdW5pY2F0aW9uIHdpdGggdGhlIHNlcnZlciBBUElcbiAqIEByZXR1cm5zIHt7YXNzaWdubWVudF9pZDogKiwgY291cnNlX2lkOiAqLCBncm91cF9pZDogKiwgdXNlcl9pZDogKiwgdGltZXpvbmU6ICosIHZlcnNpb246ICosIHRpbWVzdGFtcDogKn19XG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNyZWF0ZVNlcnZlckRhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGFzc2lnbm1lbnQgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudDtcbiAgICBsZXQgdXNlciA9IHRoaXMubWFpbi5tb2RlbC51c2VyO1xuICAgIGxldCBzdWJtaXNzaW9uID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb247XG4gICAgbGV0IGRpc3BsYXkgPSB0aGlzLm1haW4ubW9kZWwuZGlzcGxheTtcbiAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgbWljcm9zZWNvbmRzID0gbm93LmdldFRpbWUoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBcImFzc2lnbm1lbnRfaWRcIjogYXNzaWdubWVudC5pZCgpLFxuICAgICAgICBcImFzc2lnbm1lbnRfZ3JvdXBfaWRcIjogdXNlci5ncm91cElkKCksXG4gICAgICAgIFwiY291cnNlX2lkXCI6IHVzZXIuY291cnNlSWQoKSxcbiAgICAgICAgXCJzdWJtaXNzaW9uX2lkXCI6IHN1Ym1pc3Npb24uaWQoKSxcbiAgICAgICAgXCJ1c2VyX2lkXCI6IHVzZXIuaWQoKSxcbiAgICAgICAgXCJ2ZXJzaW9uXCI6IGFzc2lnbm1lbnQudmVyc2lvbigpLFxuICAgICAgICBcInRpbWVzdGFtcFwiOiBtaWNyb3NlY29uZHMsXG4gICAgICAgIFwidGltZXpvbmVcIjogbm93LmdldFRpbWV6b25lT2Zmc2V0KCksXG4gICAgICAgIFwicGFzc2NvZGVcIjogZGlzcGxheS5wYXNzY29kZSgpXG4gICAgfTtcbn07XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgc3RhdHVzIGFuZCBtZXNzYWdlIGZvciB0aGUgcmVsZXZhbnQgZW5kcG9pbnQuXG4gKiBAcGFyYW0gZW5kcG9pbnQge3N0cmluZ30gb25lIG9mIHRoZSBVUkwgZW5kcG9pbnRzXG4gKiBAcGFyYW0gc3RhdHVzIHtTdGF0dXNTdGF0ZX1cbiAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmc/fVxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5zZXRTdGF0dXMgPSBmdW5jdGlvbiAoZW5kcG9pbnQsIHN0YXR1cywgbWVzc2FnZSkge1xuICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXNbZW5kcG9pbnRdKHN0YXR1cyk7XG4gICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1c1tlbmRwb2ludCArIFwiTWVzc2FnZVwiXShtZXNzYWdlIHx8IFwiXCIpO1xufTtcblxuLyoqXG4gKiBSZW5kZXJzIGFuIG92ZXJsYXkgb24gdGhlIHNjcmVlbiB0aGF0IGJsb2NrcyBvcGVyYXRpb24gdW50aWwgdGhlIHN5c3RlbSBpcyByZWFkeS5cbiAqIFRoZSBvdmVybGF5IGdldHMgcHJvZ3Jlc3NpdmVseSBkYXJrZXIgdG8gaW5kaWNhdGUgcmVwZWF0ZWQgZmFpbHVyZXMuXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnNob3dPdmVybGF5ID0gZnVuY3Rpb24gKGF0dGVtcHQpIHtcbiAgICB0aGlzLmJsb2NraW5nQXR0ZW1wdHMgKz0gMTtcbiAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJibG9ja3B5LW92ZXJsYXlcIikubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheSA9ICQoJzxkaXYgY2xhc3M9XCJibG9ja3B5LW92ZXJsYXlcIj4gPC9kaXY+Jyk7XG4gICAgICAgIHRoaXMub3ZlcmxheS5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KTtcbiAgICB9XG4gICAgc3dpdGNoIChhdHRlbXB0KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiIzk4OFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIiM2NTVcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgdGhpcy5vdmVybGF5LmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCIjMzMzXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcImJsYWNrXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufTtcblxuLyoqXG4gKiBVbmRvIGEgbGV2ZWwgb2Ygb3ZlcmxheTsgaWYgdGhpcyB3YXMgdGhlIGxhc3QgbGV2ZWwsIHJlbW92ZXMgaXQgZnJvbSB0aGUgc2NyZWVuLlxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5oaWRlT3ZlcmxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJsb2NraW5nQXR0ZW1wdHMgLT0gMTtcbiAgICBpZiAodGhpcy5ibG9ja2luZ0F0dGVtcHRzIDw9IDApIHtcbiAgICAgICAgdGhpcy5vdmVybGF5LnJlbW92ZSgpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLl9lbnF1ZXVlRGF0YSA9IGZ1bmN0aW9uIChjYWNoZSwgZGF0YSkge1xuICAgIC8vIEVuc3VyZSB3ZSBoYXZlIG5vdCBvdmVyZmlsbGVkIHRoZSBxdWV1ZVxuICAgIGxldCBsZW5ndGggPSB0aGlzLnF1ZXVlW2NhY2hlXS5sZW5ndGg7XG4gICAgbGV0IG1heCA9IHRoaXMuTUFYX1FVRVVFX1NJWkVbY2FjaGVdO1xuICAgIGlmIChsZW5ndGggPiBtYXgpIHtcbiAgICAgICAgdGhpcy5xdWV1ZVtjYWNoZV0gPSB0aGlzLnF1ZXVlW2NhY2hlXS5zbGljZShsZW5ndGggLSBtYXgsIG1heCk7XG4gICAgfVxuICAgIC8vIE9ubHkgYWRkIHRoZSBlbGVtZW50IGlmIGl0J3MgbmV3XG4gICAgbGV0IGtleSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIGxldCBpbmRleCA9IHRoaXMucXVldWVbY2FjaGVdLmluZGV4T2Yoa2V5KTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRoaXMucXVldWVbY2FjaGVdLnB1c2goa2V5KTtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChjYWNoZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5xdWV1ZVtjYWNoZV0pKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fZGVxdWV1ZURhdGEgPSBmdW5jdGlvbiAoY2FjaGUsIGRhdGEpIHtcbiAgICBsZXQga2V5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5xdWV1ZVtjYWNoZV0uaW5kZXhPZihrZXkpO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIHRoaXMucXVldWVbY2FjaGVdLnNwbGljZShpbmRleCk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoY2FjaGUsIEpTT04uc3RyaW5naWZ5KHRoaXMucXVldWVbY2FjaGVdKSk7XG4gICAgfVxufTtcblxuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fcG9zdFJldHJ5ID0gZnVuY3Rpb24gKGRhdGEsIGVuZHBvaW50LCBkZWxheSwgY2FsbGJhY2spIHtcbiAgICAvLyBUcmlnZ2VyIHJlcXVlc3RcbiAgICBsZXQgcG9zdFJlcXVlc3QgPSAoKSA9PiB7XG4gICAgICAgIC8vIE1ha2UgYSBiYWNrdXAgb2YgdGhlIGN1cnJlbnQgcG9zdFxuICAgICAgICB0aGlzLl9lbnF1ZXVlRGF0YShlbmRwb2ludCwgZGF0YSk7XG4gICAgICAgICQucG9zdCh0aGlzLnVybHNbZW5kcG9pbnRdLCBkYXRhKVxuICAgICAgICAgICAgLmRvbmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVxdWV1ZURhdGEoZW5kcG9pbnQsIGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5SRUFEWSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5GQUlMRUQsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrSVAocmVzcG9uc2UuaXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBJZiBzZXJ2ZXIgcmVxdWVzdCBpcyB0aGUgbGF0ZXN0IG9uZSwgdGhlbiBsZXQncyB0cnkgaXQgYWdhaW4gaW4gYSBiaXRcbiAgICAgICAgICAgIC5mYWlsKChlcnJvciwgdGV4dFN0YXR1cykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5SRVRSWUlORywgdGV4dFN0YXR1cy50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wb3N0UmV0cnkoZGF0YSwgZW5kcG9pbnQsIGRlbGF5ICsgdGhpcy5GQUlMX0RFTEFZLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuICAgIGlmIChkZWxheSA9PT0gbnVsbCkge1xuICAgICAgICBwb3N0UmVxdWVzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQocG9zdFJlcXVlc3QsIGRlbGF5KTtcbiAgICB9XG59O1xuXG4vKipcbiAqIE1ha2UgYSBBSkFYIHJlcXVlc3QgdGhhdCwgdXBvbiBmYWlsdXJlLCB3aWxsIGNoZWNrIHRvIHNlZSBpZiB0aGlzIHdhcyB0aGVcbiAqIGxhdGVzdCBhdHRlbXB0IGZvciB0aGlzIGBjYWNoZWAgbWFya2VyLiBJZiBzbywgaXQgd2lsbCBhdHRlbXB0IGFnYWluIHVudGlsXG4gKiBzdWNjZXNzZnVsOyBvdGhlcndpc2UsIGl0IGdpdmVzIHVwIHRoZSByZXF1ZXN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIEFKQVgtcmVhZHkgZGF0YSB0byBiZSBwb3N0ZWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZSAtIFRoZSB1bmlxdWUgbmFtZSBnaXZlbiB0byB0aGUgcmVsZXZhbnQgdGltZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBlbmRwb2ludCAtIFRoZSB1bmlxdWUgbmFtZSBnaXZlbiB0byB0aGUgcmVsZXZhbnQgY2FjaGUgZW50cnlcbiAqIEBwYXJhbSB7SW50ZWdlcn0gZGVsYXkgLSBUaGUgY3VycmVudCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHdhaXQgYmVmb3JlXG4gdHJ5aW5nIHRoZSByZXF1ZXN0IGFnYWluLlxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fcG9zdExhdGVzdFJldHJ5ID0gZnVuY3Rpb24gKGRhdGEsIGZpbGVuYW1lLCBlbmRwb2ludCwgZGVsYXkpIHtcbiAgICBsZXQgY2FjaGUgPSBlbmRwb2ludCArIGZpbGVuYW1lO1xuICAgIGxldCByZXF1ZXN0ID0gKCkgPT4ge1xuICAgICAgICAvLyBNYWtlIGEgYmFja3VwIG9mIHRoZSBjdXJyZW50IHBvc3RcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChjYWNoZSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICBsZXQgdGltZSA9IHRoaXMuc3RvcmFnZS5nZXRUaW1lKGNhY2hlKTtcbiAgICAgICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgICAgICAkLnBvc3QodGhpcy51cmxzW2VuZHBvaW50XSwgZGF0YSlcbiAgICAgICAgICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tJUChyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHNlcnZlciByZXF1ZXN0IGlzIHRoZSBsYXRlc3Qgb25lLCBjbGVhciBpdCBmcm9tIHRoZSBjYWNoZVxuICAgICAgICAgICAgICAgICAgICBsZXQgY2FjaGVkVGltZSA9IHRoaXMuc3RvcmFnZS5nZXRUaW1lKGNhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWUgPj0gY2FjaGVkVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnJlbW92ZShjYWNoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFQURZKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGNvbm5lY3RlZCBidXQgZmFpbGVkLCBkb24ndCB0cnkgYWdhaW4gYnV0IGxldCB0aGUgdXNlciBrbm93IHdoeS5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLkZBSUxFRCwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UncmUgdGhlIGxhdGVzdCBvbmUsIGNsZWFyIGl0IGZyb20gdGhlIGNhY2hlXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FjaGVkVGltZSA9IHRoaXMuc3RvcmFnZS5nZXRUaW1lKGNhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aW1lID49IGNhY2hlZFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2UucmVtb3ZlKGNhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmFpbCgoZXJyb3IsIHRleHRTdGF0dXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuUkVUUllJTkcsIHRleHRTdGF0dXMudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgLy8gSWYgc2VydmVyIHJlcXVlc3QgaXMgdGhlIGxhdGVzdCBvbmUsIHRoZW4gbGV0J3MgdHJ5IGl0IGFnYWluIGluIGEgYml0XG4gICAgICAgICAgICAgICAgbGV0IGNhY2hlZFRpbWUgPSB0aGlzLnN0b3JhZ2UuZ2V0VGltZShjYWNoZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWUgPj0gY2FjaGVkVGltZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wb3N0TGF0ZXN0UmV0cnkoZGF0YSwgZmlsZW5hbWUsIGVuZHBvaW50LCBkZWxheSArIHRoaXMuRkFJTF9ERUxBWSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcnNbY2FjaGVdKTtcbiAgICBpZiAoZGVsYXkgPT09IG51bGwpIHtcbiAgICAgICAgcmVxdWVzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGltZXJzW2NhY2hlXSA9IHNldFRpbWVvdXQocmVxdWVzdCwgZGVsYXkpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLl9wb3N0QmxvY2tpbmcgPSBmdW5jdGlvbiAoZW5kcG9pbnQsIGRhdGEsIGF0dGVtcHRzLCBzdWNjZXNzLCBmYWlsdXJlKSB7XG4gICAgdGhpcy5zaG93T3ZlcmxheShhdHRlbXB0cyk7XG4gICAgJC5wb3N0KHRoaXMudXJsc1tlbmRwb2ludF0sIGRhdGEpXG4gICAgICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFQURZKTtcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzcG9uc2UpO1xuICAgICAgICAgICAgdGhpcy5jaGVja0lQKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZhaWwoKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuRkFJTEVELCB0ZXh0U3RhdHVzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGlmIChmYWlsdXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZhaWx1cmUoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFVFJZSU5HLCB0ZXh0U3RhdHVzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wb3N0QmxvY2tpbmcoZW5kcG9pbnQsIGRhdGEsIGF0dGVtcHRzIC0gMSwgc3VjY2VzcywgZmFpbHVyZSk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcy5GQUlMX0RFTEFZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59O1xuXG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmxvYWRBc3NpZ25tZW50ID0gZnVuY3Rpb24gKGFzc2lnbm1lbnRfaWQpIHtcbiAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgaWYgKG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwibG9hZEFzc2lnbm1lbnRcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImFzc2lnbm1lbnRfaWRcIl0gPSBhc3NpZ25tZW50X2lkO1xuICAgICAgICB0aGlzLl9wb3N0QmxvY2tpbmcoXCJsb2FkQXNzaWdubWVudFwiLCBkYXRhLCA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluLmxvYWRBc3NpZ25tZW50RGF0YV8ocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKFwibG9hZEFzc2lnbm1lbnRcIiwgU3RhdHVzU3RhdGUuRkFJTEVELCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLkVSUk9SX0xPQURJTkdfQVNTSUdOTU5FTlQocmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5FUlJPUl9MT0FESU5HX0FTU0lHTk1ORU5UKHRleHRTdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJsb2FkQXNzaWdubWVudFwiLCBTdGF0dXNTdGF0ZS5PRkZMSU5FKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5zYXZlQXNzaWdubWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgaWYgKG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwic2F2ZUFzc2lnbm1lbnRcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImhpZGRlblwiXSA9IG1vZGVsLmFzc2lnbm1lbnQuaGlkZGVuKCk7XG4gICAgICAgIGRhdGFbXCJyZXZpZXdlZFwiXSA9IG1vZGVsLmFzc2lnbm1lbnQucmV2aWV3ZWQoKTtcbiAgICAgICAgZGF0YVtcInB1YmxpY1wiXSA9IG1vZGVsLmFzc2lnbm1lbnQucHVibGljKCk7XG4gICAgICAgIGRhdGFbXCJ1cmxcIl0gPSBtb2RlbC5hc3NpZ25tZW50LnVybCgpO1xuICAgICAgICBkYXRhW1wiaXBfcmFuZ2VzXCJdID0gbW9kZWwuYXNzaWdubWVudC5pcFJhbmdlcygpO1xuICAgICAgICBkYXRhW1wibmFtZVwiXSA9IG1vZGVsLmFzc2lnbm1lbnQubmFtZSgpO1xuICAgICAgICBkYXRhW1wic2V0dGluZ3NcIl0gPSBzYXZlQXNzaWdubWVudFNldHRpbmdzKG1vZGVsKTtcblxuICAgICAgICB0aGlzLl9wb3N0QmxvY2tpbmcoXCJzYXZlQXNzaWdubWVudFwiLCBkYXRhLCAzLCAoKSA9PiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLkVSUk9SX1NBVklOR19BU1NJR05NTkVOVCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJzYXZlQXNzaWdubWVudFwiLCBTdGF0dXNTdGF0ZS5PRkZMSU5FLCBcIlNlcnZlciBpcyBub3QgY29ubmVjdGVkISAoU2F2ZSBBc3NpZ25tZW50KVwiKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5sb2FkSGlzdG9yeSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJsb2FkSGlzdG9yeVwiKSkge1xuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyhcImxvYWRIaXN0b3J5XCIsIGRhdGEsIDIsIGNhbGxiYWNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLkVSUk9SX0xPQURJTkdfSElTVE9SWSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUubG9nRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnRfdHlwZSwgY2F0ZWdvcnksIGxhYmVsLCBtZXNzYWdlLCBmaWxlX3BhdGgpIHtcbiAgICBpZiAodGhpcy5tYWluLm1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwibG9nRXZlbnRcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImV2ZW50X3R5cGVcIl0gPSBldmVudF90eXBlO1xuICAgICAgICBkYXRhW1wiY2F0ZWdvcnlcIl0gPSBjYXRlZ29yeTtcbiAgICAgICAgZGF0YVtcImxhYmVsXCJdID0gbGFiZWw7XG4gICAgICAgIGRhdGFbXCJtZXNzYWdlXCJdID0gbWVzc2FnZTtcbiAgICAgICAgZGF0YVtcImZpbGVfcGF0aFwiXSA9IGZpbGVfcGF0aDtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJsb2dFdmVudFwiLCBTdGF0dXNTdGF0ZS5BQ1RJVkUpO1xuICAgICAgICAvLyBUcmlnZ2VyIHJlcXVlc3RcbiAgICAgICAgdGhpcy5fcG9zdFJldHJ5KGRhdGEsIFwibG9nRXZlbnRcIiwgMCwgKCkgPT4ge1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcImxvZ0V2ZW50XCIsIFN0YXR1c1N0YXRlLk9GRkxJTkUpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnNhdmVJbWFnZSA9IGZ1bmN0aW9uIChkaXJlY3RvcnksIGltYWdlKSB7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcInNhdmVJbWFnZVwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wiZGlyZWN0b3J5XCJdID0gZGlyZWN0b3J5O1xuICAgICAgICBkYXRhW1wiaW1hZ2VcIl0gPSBpbWFnZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJzYXZlSW1hZ2VcIiwgU3RhdHVzU3RhdGUuQUNUSVZFKTtcbiAgICAgICAgLy8gVHJpZ2dlciByZXF1ZXN0XG4gICAgICAgIHRoaXMuX3Bvc3RMYXRlc3RSZXRyeShkYXRhLCBcInR1cnRsZV9vdXRwdXRcIiwgXCJzYXZlSW1hZ2VcIiwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJzYXZlSW1hZ2VcIiwgU3RhdHVzU3RhdGUuT0ZGTElORSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUudXBkYXRlU3VibWlzc2lvblN0YXR1cyA9IGZ1bmN0aW9uKG5ld1N0YXR1cykge1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJ1cGRhdGVTdWJtaXNzaW9uU3RhdHVzXCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJzdGF0dXNcIl0gPSBuZXdTdGF0dXM7XG4gICAgICAgIGxldCBwb3N0U3RhdHVzQ2hhbmdlID0gKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5zdWJtaXNzaW9uU3RhdHVzKG5ld1N0YXR1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyhcInVwZGF0ZVN1Ym1pc3Npb25TdGF0dXNcIiwgZGF0YSwgMiwgcG9zdFN0YXR1c0NoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5FUlJPUl9VUERBVElOR19TVUJNSVNTSU9OX1NUQVRVUygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIHRvIGxvYWQgZmlsZXMgYW5kIHdlYiByZXNvdXJjZXMuXG4gKlxuICogREVQUkVDQVRFRFxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5sb2FkRmlsZSA9IGZ1bmN0aW9uIChmaWxlbmFtZSwgdHlwZSwgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICB2YXIgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgdmFyIHNlcnZlciA9IHRoaXM7XG4gICAgaWYgKG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwibG9hZF9maWxlXCIpKSB7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJmaWxlbmFtZVwiXSA9IGZpbGVuYW1lO1xuICAgICAgICBkYXRhW1widHlwZVwiXSA9IHR5cGU7XG4gICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyh0aGlzLnVybHMubG9hZF9maWxlLCBkYXRhLCA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjayhyZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmVyLnNldFN0YXR1cyhcImxvYWRGaWxlXCIsIFN0YXR1c1N0YXRlLkZBSUxFRCwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2soXCJTZXJ2ZXIgZmFpbHVyZSEgUmVwb3J0IHRvIGluc3RydWN0b3JcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvckNhbGxiYWNrKFwiTm8gZmlsZSBzZXJ2ZXIgYXZhaWxhYmxlLlwiKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJsb2FkRmlsZVwiLCBTdGF0dXNTdGF0ZS5PRkZMSU5FLCBcIlNlcnZlciBpcyBub3QgY29ubmVjdGVkISAoTG9hZCBGaWxlKVwiKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5zYXZlRmlsZSA9IGZ1bmN0aW9uIChmaWxlbmFtZSwgY29udGVudHMsIGRlbGF5KSB7XG4gICAgaWYgKGRlbGF5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGVsYXkgPSB0aGlzLlRJTUVSX0RFTEFZO1xuICAgIH1cbiAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgaWYgKG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwic2F2ZUZpbGVcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImZpbGVuYW1lXCJdID0gZmlsZW5hbWU7XG4gICAgICAgIGRhdGFbXCJjb2RlXCJdID0gY29udGVudHM7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwic2F2ZUZpbGVcIiwgU3RhdHVzU3RhdGUuQUNUSVZFKTtcbiAgICAgICAgdGhpcy5fcG9zdExhdGVzdFJldHJ5KGRhdGEsIGZpbGVuYW1lLCBcInNhdmVGaWxlXCIsIGRlbGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcInNhdmVGaWxlXCIsIFN0YXR1c1N0YXRlLk9GRkxJTkUpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnVwZGF0ZVN1Ym1pc3Npb24gPSBmdW5jdGlvbiAoc2NvcmUsIGNvcnJlY3QsIGhpZGRlbk92ZXJyaWRlLCBmb3JjZVVwZGF0ZSkge1xuICAgIGxldCBjYWxsYmFjayA9IHRoaXMubWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLmNhbGxiYWNrcy5zdWNjZXNzO1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJ1cGRhdGVTdWJtaXNzaW9uXCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJzY29yZVwiXSA9IHNjb3JlO1xuICAgICAgICBkYXRhW1wiY29ycmVjdFwiXSA9IGNvcnJlY3Q7XG4gICAgICAgIGRhdGFbXCJoaWRkZW5fb3ZlcnJpZGVcIl0gPSBoaWRkZW5PdmVycmlkZTtcbiAgICAgICAgZGF0YVtcImZvcmNlX3VwZGF0ZVwiXSA9IGZvcmNlVXBkYXRlO1xuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0uYmxvY2tFZGl0b3IuZ2V0UG5nRnJvbUJsb2NrcygocG5nRGF0YSwgaW1nKSA9PiB7XG4gICAgICAgICAgICBkYXRhW1wiaW1hZ2VcIl0gPSBwbmdEYXRhO1xuICAgICAgICAgICAgaWYgKGltZy5yZW1vdmUpIHtcbiAgICAgICAgICAgICAgICBpbWcucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9wb3N0UmV0cnkoZGF0YSwgXCJ1cGRhdGVTdWJtaXNzaW9uXCIsIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhcInVwZGF0ZVN1Ym1pc3Npb25cIiwgU3RhdHVzU3RhdGUuUkVBRFkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJ1cGRhdGVTdWJtaXNzaW9uXCIsIFN0YXR1c1N0YXRlLkZBSUxFRCwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoaWRkZW5PdmVycmlkZSAmJiBjb3JyZWN0ICYmIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhW1wiYXNzaWdubWVudF9pZFwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTsiLCIvKipcbiAqIFNrdWxwdCBNb2R1bGUgZm9yIGhvbGRpbmcgdGhlIEluc3RydWN0b3IgQVBJLlxuICpcbiAqIFRoaXMgbW9kdWxlIGlzIGxvYWRlZCBpbiBieSBnZXR0aW5nIHRoZSBmdW5jdGlvbnMnIHNvdXJjZSBjb2RlIGZyb20gdG9TdHJpbmcuXG4gKiBJc24ndCB0aGF0IGNyYXp5P1xuICpcbiAqXG4gKi9cbmV4cG9ydCBsZXQgJHNrX21vZF9pbnN0cnVjdG9yID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gTWFpbiBtb2R1bGUgb2JqZWN0IHRoYXQgZ2V0cyByZXR1cm5lZCBhdCB0aGUgZW5kLlxuICAgIGxldCBtb2QgPSB7fTtcbiAgICBsZXQgbm9uZSA9IFNrLmJ1aWx0aW4ubm9uZS5ub25lJDtcbiAgICBcbiAgICBsZXQgcHJpb3IgPSBudWxsO1xuICAgIG1vZC50aW1laXQgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcInRpbWVpdFwiLCBhcmd1bWVudHMsIDEsIDEpO1xuICAgICAgICBsZXQgZGlmZmVyZW5jZTtcbiAgICAgICAgaWYgKHByaW9yID09PSBudWxsKSB7XG4gICAgICAgICAgICBkaWZmZXJlbmNlID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpZmZlcmVuY2UgPSBEYXRlLm5vdygpIC0gcHJpb3I7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coU2suZmZpLnJlbWFwVG9KcyhuYW1lKSwgZGlmZmVyZW5jZS8xMDAwKTtcbiAgICAgICAgcHJpb3IgPSBEYXRlLm5vdygpO1xuICAgIH0pO1xuICAgIFxuICAgIC8qKlxuICAgICAqIExvZ3MgZmVlZGJhY2sgdG8gamF2YXNjcmlwdCBjb25zb2xlXG4gICAgICovXG4gICAgbW9kLmxvZyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwibG9nXCIsIGFyZ3VtZW50cywgMSwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFNrLmZmaS5yZW1hcFRvSnMobWVzc2FnZSkpO1xuICAgIH0pO1xuICAgIFxuICAgIC8qKlxuICAgICAqIExvZ3MgZGVidWcgdG8gamF2YXNjcmlwdCBjb25zb2xlXG4gICAgICovXG4gICAgbW9kLmRlYnVnID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJsb2dcIiwgYXJndW1lbnRzLCAxLCAxKTtcbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGNvdmVydHMgdGhlIG91dHB1dCBpbiB0aGUgc3R1ZGVudCByZXBvcnQgdG8gYSBweXRob24gXG4gICAgICogbGlzdCBhbmQgcmV0dXJucyBpdC5cbiAgICAqKi9cbiAgICBtb2QuZ2V0X291dHB1dCA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfb3V0cHV0XCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIGlmIChTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBsZXQgb3V0cHV0ID0gU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl1bXCJvdXRwdXRcIl0oKTtcbiAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dC5tYXAoZnVuY3Rpb24oaXRlbSkgeyByZXR1cm4gaXRlbS50b1NrdWxwdCgpOyB9KTtcbiAgICAgICAgICAgIHJldHVybiBTay5idWlsdGluLmxpc3Qob3V0cHV0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5saXN0KFtdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gcmVzZXRzIHRoZSBvdXRwdXQsIHBhcnRpY3VsYXJseSB1c2VmdWwgaWYgdGhlIHN0dWRlbnRcbiAgICAgKiBjb2RlIGlzIGdvaW5nIHRvIGJlIHJlcnVuLlxuICAgICAqL1xuICAgIG1vZC5yZXNldF9vdXRwdXQgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwicmVzZXRfb3V0cHV0XCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIGlmIChTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5vdXRwdXQucmVtb3ZlQWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4ubm9uZS5ub25lJDtcbiAgICB9KTtcbiAgICBcbiAgICBtb2QucXVldWVfaW5wdXQgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwicXVldWVfaW5wdXRcIiwgYXJndW1lbnRzLCAxLCBJbmZpbml0eSk7XG4gICAgICAgIGxldCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICBmb3IgKGxldCBpID0gYXJncy5sZW5ndGgtMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGxldCBpbnB1dCA9IGFyZ3NbaV07XG4gICAgICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tUeXBlKFwiaW5wdXRcIiwgXCJzdHJpbmdcIiwgU2suYnVpbHRpbi5jaGVja1N0cmluZyhpbnB1dCkpO1xuICAgICAgICAgICAgU2sucXVldWVkSW5wdXQucHVzaChTay5mZmkucmVtYXBUb0pzKGlucHV0KSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBieSBpbnN0cnVjdG9ycyB0byBnZXQgdGhlIHN0dWRlbnRzJyBjb2RlIGFzIGEgc3RyaW5nLlxuICAgICoqL1xuICAgIG1vZC5nZXRfcHJvZ3JhbSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfcHJvZ3JhbVwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICByZXR1cm4gU2suZmZpLnJlbWFwVG9QeShTay5leGVjdXRpb25SZXBvcnRzW1widmVyaWZpZXJcIl0uY29kZSk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBieSBpbnN0cnVjdG9ycyB0byBnZXQgdGhlIHN0dWRlbnRzJyBjb2RlIGFzIGEgc3RyaW5nLlxuICAgICoqL1xuICAgIG1vZC5nZXRfZXZhbHVhdGlvbiA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfZXZhbHVhdGlvblwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICByZXR1cm4gU2suZmZpLnJlbWFwVG9QeShTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5ldmFsdWF0aW9uIHx8IFwiXCIpO1xuICAgIH0pO1xuICAgIFxuICAgIG1vZC50cmFjZV9saW5lcyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBsZXQgbGluZXMgPSBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5saW5lcztcbiAgICAgICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KGxpbmVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5saXN0KFtdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgbW9kLmdldF9zdHVkZW50X2Vycm9yID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9zdHVkZW50X2Vycm9yXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIGlmIChTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5zdWNjZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4udHVwbGUoW25vbmUsIG5vbmVdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBlcnJvciA9IFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLmVycm9yLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0ge307XG4gICAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IudHJhY2ViYWNrICYmIGVycm9yLnRyYWNlYmFjay5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25bXCJsaW5lXCJdID0gZXJyb3IudHJhY2ViYWNrWzBdLmxpbmVubztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9zaXRpb24gPSBTay5mZmkucmVtYXBUb1B5KHBvc2l0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi50dXBsZShbZXJyb3IsIHBvc2l0aW9uXSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIFxuICAgIG1vZC5oYWRfZXhlY3V0aW9uX3RpbWVfZXJyb3IgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiaGFkX2V4ZWN1dGlvbl90aW1lX2Vycm9yXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIHJldHVybiAhU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uc3VjY2VzcyAmJiBcbiAgICAgICAgICAgICAgICBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5lcnJvciAmJlxuICAgICAgICAgICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLmVycm9yLnRwJG5hbWUgPT09IFwiVGltZUxpbWl0RXJyb3JcIjtcbiAgICB9KTtcbiAgICBcbiAgICBsZXQgYmFja3VwVGltZSA9IHVuZGVmaW5lZDtcbiAgICBtb2QubGltaXRfZXhlY3V0aW9uX3RpbWUgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwibGltaXRfZXhlY3V0aW9uX3RpbWVcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgYmFja3VwVGltZSA9IFNrLmV4ZWNMaW1pdDtcbiAgICAgICAgaWYgKFNrLmV4ZWNMaW1pdEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICBTay5leGVjTGltaXQgPSBTay5leGVjTGltaXRGdW5jdGlvbigpO1xuICAgICAgICAgICAgU2suZXhlY1N0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIG1vZC51bmxpbWl0X2V4ZWN1dGlvbl90aW1lID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcInVubGltaXRfZXhlY3V0aW9uX3RpbWVcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgU2suZXhlY0xpbWl0ID0gYmFja3VwVGltZTtcbiAgICAgICAgU2suZXhlY1N0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB9KTtcbiAgICBcbiAgICBtb2Quc3VwcHJlc3Nfc2Nyb2xsaW5nID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcInN1cHByZXNzX3Njcm9sbGluZ1wiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBTay5leGVjdXRpb25SZXBvcnRzLmluc3RydWN0b3Iuc2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIFxuICAgIC8qXG4gICAgZGVmIGhpc3Qoc2VsZiwgZGF0YSwgKiprd2FyZ3MpOlxuICAgICAgICBsYWJlbCA9IGt3YXJncy5nZXQoJ2xhYmVsJywgTm9uZSlcbiAgICAgICAgc2VsZi5hY3RpdmVfcGxvdFsnZGF0YSddLmFwcGVuZCh7J3R5cGUnOiAnSGlzdG9ncmFtJywgJ3ZhbHVlcyc6IGRhdGEsICdsYWJlbCc6IGxhYmVsfSlcbiAgICBkZWYgcGxvdChzZWxmLCB4cywgeXM9Tm9uZSwgKiprd2FyZ3MpOlxuICAgICAgICBsYWJlbCA9IGt3YXJncy5nZXQoJ2xhYmVsJywgTm9uZSlcbiAgICAgICAgaWYgeXMgPT0gTm9uZTpcbiAgICAgICAgICAgIHNlbGYuYWN0aXZlX3Bsb3RbJ2RhdGEnXS5hcHBlbmQoeyd0eXBlJzogJ0xpbmUnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3gnOiByYW5nZShsZW4oeHMpKSwgJ3knOiB4cywgJ2xhYmVsJzogbGFiZWx9KVxuICAgICAgICBlbHNlOlxuICAgICAgICAgICAgc2VsZi5hY3RpdmVfcGxvdFsnZGF0YSddLmFwcGVuZCh7J3R5cGUnOiAnTGluZScsICd4JzogeHMsICd5JzogeXMsICdsYWJlbCc6IGxhYmVsfSlcbiAgICBkZWYgc2NhdHRlcihzZWxmLCB4cywgeXMsICoqa3dhcmdzKTpcbiAgICAgICAgbGFiZWwgPSBrd2FyZ3MuZ2V0KCdsYWJlbCcsIE5vbmUpXG4gICAgICAgIHNlbGYuYWN0aXZlX3Bsb3RbJ2RhdGEnXS5hcHBlbmQoeyd0eXBlJzogJ1NjYXR0ZXInLCAneCc6IHhzLCAneSc6IHlzLCAnbGFiZWwnOiBsYWJlbH0pXG4gICAgKi9cbiAgICBtb2QuZ2V0X3Bsb3RzID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9wbG90c1wiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBpZiAoU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uc3VjY2Vzcykge1xuICAgICAgICAgICAgbGV0IG91dHB1dHMgPSBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXVtcIm91dHB1dFwiXSgpO1xuICAgICAgICAgICAgb3V0cHV0cyA9IG91dHB1dHMuZmlsdGVyKGZ1bmN0aW9uKG91dHB1dCkgeyBcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0LnR5cGUgPT09IFwicGxvdFwiO1xuICAgICAgICAgICAgfSkubWFwKGZ1bmN0aW9uKGdyYXBoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcImRhdGFcIjogZ3JhcGguY29udGVudC5tYXAoZnVuY3Rpb24ocGxvdCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3UGxvdCA9IHsgXCJ0eXBlXCI6IHBsb3QudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJcIiB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAocGxvdC50eXBlID09PSBcImxpbmVcIiB8fCBwbG90LnR5cGUgPT09IFwic2NhdHRlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQbG90W1wieFwiXSA9IHBsb3QuZGF0YS5tYXAoZnVuY3Rpb24odikgeyByZXR1cm4gdi54OyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bsb3RbXCJ5XCJdID0gcGxvdC5kYXRhLm1hcChmdW5jdGlvbih2KSB7IHJldHVybiB2Lnk7IH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsb3QudHlwZSA9PT0gXCJoaXN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bsb3RbXCJ2YWx1ZXNcIl0gPSBwbG90LmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ld1Bsb3Q7XG4gICAgICAgICAgICAgICAgfSksIFxuICAgICAgICAgICAgICAgIFwieGxhYmVsXCI6IFwiXCIsIFwieWxhYmVsXCI6IFwiXCIsIFxuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJcIiwgXCJsZWdlbmRcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gU2suZmZpLnJlbWFwVG9QeShvdXRwdXRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KFtdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgXG4gICAgLy8gUHJvdmlkZXMgYHN0dWRlbnRgIGFzIGFuIG9iamVjdCB3aXRoIGFsbCB0aGUgZGF0YSB0aGF0IHRoZSBzdHVkZW50IGRlY2xhcmVkLlxuICAgIG1vZC5TdHVkZW50RGF0YSA9IFNrLm1pc2NldmFsLmJ1aWxkQ2xhc3MobW9kLCBmdW5jdGlvbigkZ2JsLCAkbG9jKSB7XG4gICAgICAgICRsb2MuX19pbml0X18gPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKHNlbGYpIHtcbiAgICAgICAgICAgIC8vc2VsZi5kYXRhID0gU2suYnVpbHRpbi5kaWN0KCk7XG4gICAgICAgICAgICBsZXQgbmV3RGljdCA9IFNrLmJ1aWx0aW4uZGljdCgpO1xuICAgICAgICAgICAgU2suYWJzdHIuc2F0dHIoc2VsZiwgU2suYnVpbHRpbi5zdHIoXCJkYXRhXCIpLCBuZXdEaWN0LCB0cnVlKTtcbiAgICAgICAgICAgIHNlbGYubW9kdWxlID0gU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0ucmVzdWx0cztcbiAgICAgICAgICAgIGlmIChzZWxmLm1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5tb2R1bGUgPSBzZWxmLm1vZHVsZS4kZDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gc2VsZi5tb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNrLmFic3RyLm9iamVjdFNldEl0ZW0obmV3RGljdCwgU2suZmZpLnJlbWFwVG9QeShTay51bmZpeFJlc2VydmVkKGtleSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm1vZHVsZVtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5tb2R1bGUgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBjYWxsX2YgPSBmdW5jdGlvbihrd2EpIHtcbiAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3NMZW4oXCJjYWxsXCIsIGFyZ3VtZW50cy5sZW5ndGgsIDEsIEluZmluaXR5LCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgICAgIHZhciBrd2FyZ3MgPSBuZXcgU2suYnVpbHRpbnMuZGljdChrd2EpO1xuXG4gICAgICAgICAgICB2YXIgc2VsZiA9IGFyZ3NbMF07XG4gICAgICAgICAgICB2YXIgZnVuY3Rpb25OYW1lID0gYXJnc1sxXTtcbiAgICAgICAgICAgIGFyZ3MgPSBhcmdzLnNsaWNlKDIpO1xuXG4gICAgICAgICAgICB2YXIgaW5wdXRzID0ga3dhcmdzLm1wJGxvb2t1cChuZXcgU2suYnVpbHRpbi5zdHIoXCJpbnB1dHNcIikpO1xuICAgICAgICAgICAgaWYgKGlucHV0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRzID0gU2suZmZpLnJlbWFwVG9KcyhpbnB1dHMpO1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dHMuY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0cy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNrLnF1ZXVlZElucHV0LnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFNrLnF1ZXVlZElucHV0LnB1c2goaW5wdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGRhdGEgPSBzZWxmLnRwJGdldGF0dHIobmV3IFNrLmJ1aWx0aW4uc3RyKFwiZGF0YVwiKSk7XG4gICAgICAgICAgICB2YXIgZnVuY3Rpb25PYmplY3QgPSBkYXRhLm1wJGxvb2t1cChmdW5jdGlvbk5hbWUpO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGZ1bmN0aW9uT2JqZWN0LnRwJGNhbGwoYXJncyk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuICAgICAgICBjYWxsX2YuY29fa3dhcmdzID0gdHJ1ZTtcbiAgICAgICAgLy9jYWxsX2YuY29fdmFybmFtZXMgPSBbXCJzZWxmXCIsIFwiZnVuY3Rpb25cIl07XG4gICAgICAgIGNhbGxfZi5jb19uYW1lPSBuZXcgU2suYnVpbHRpbi5zdHIoXCJjYWxsXCIpO1xuICAgICAgICAkbG9jW1wiY2FsbF8kcm4kXCJdID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhjYWxsX2YpO1xuXG4gICAgICAgICRsb2NbXCJfX3JlcHJfX1wiXSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oc2VsZikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLnN0cihcIlwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGxvYy5nZXRfbmFtZXNfYnlfdHlwZSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oc2VsZiwgdHlwZSwgZXhjbHVkZV9idWlsdGlucykge1xuICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9uYW1lc19ieV90eXBlXCIsIGFyZ3VtZW50cywgMiwgMyk7XG4gICAgICAgICAgICBpZiAoZXhjbHVkZV9idWlsdGlucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZXhjbHVkZV9idWlsdGlucyA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja1R5cGUoXCJleGNsdWRlX2J1aWx0aW5zXCIsIFwiYm9vbGVhblwiLCBTay5idWlsdGluLmNoZWNrQm9vbChleGNsdWRlX2J1aWx0aW5zKSk7XG4gICAgICAgICAgICAgICAgZXhjbHVkZV9idWlsdGlucyA9IFNrLmZmaS5yZW1hcFRvSnMoZXhjbHVkZV9idWlsdGlucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiBzZWxmLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLm1vZHVsZS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlW3Byb3BlcnR5XS50cCRuYW1lID09PSB0eXBlLnRwJG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXhjbHVkZV9idWlsdGlucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhjbHVkZV9idWlsdGlucyAmJiBwcm9wZXJ0eS5zdGFydHNXaXRoKFwiX19cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKFNrLmZmaS5yZW1hcFRvUHkoU2sudW5maXhSZXNlcnZlZChwcm9wZXJ0eSkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBTay5idWlsdGluLmxpc3QocmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICRsb2MuZ2V0X3ZhbHVlc19ieV90eXBlID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihzZWxmLCB0eXBlLCBleGNsdWRlX2J1aWx0aW5zKSB7XG4gICAgICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X3ZhbHVlc19ieV90eXBlXCIsIGFyZ3VtZW50cywgMiwgMyk7XG4gICAgICAgICAgICBpZiAoZXhjbHVkZV9idWlsdGlucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZXhjbHVkZV9idWlsdGlucyA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja1R5cGUoXCJleGNsdWRlX2J1aWx0aW5zXCIsIFwiYm9vbGVhblwiLCBTay5idWlsdGluLmNoZWNrQm9vbChleGNsdWRlX2J1aWx0aW5zKSk7XG4gICAgICAgICAgICAgICAgZXhjbHVkZV9idWlsdGlucyA9IFNrLmZmaS5yZW1hcFRvSnMoZXhjbHVkZV9idWlsdGlucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiBzZWxmLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLm1vZHVsZS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlW3Byb3BlcnR5XS50cCRuYW1lID09PSB0eXBlLnRwJG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGNsdWRlX2J1aWx0aW5zICYmIHByb3BlcnR5LnN0YXJ0c1dpdGgoXCJfX1wiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goc2VsZi5tb2R1bGVbcHJvcGVydHldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBTay5idWlsdGluLmxpc3QocmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgfSwgXCJTdHVkZW50RGF0YVwiKTtcbiAgICBtb2Quc3R1ZGVudCA9IFNrLm1pc2NldmFsLmNhbGxzaW1PclN1c3BlbmQobW9kLlN0dWRlbnREYXRhKTtcbiAgICBcbiAgICBtb2QuZ2V0X3N0dWRlbnRfZGF0YSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfc3R1ZGVudF9kYXRhXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIHJldHVybiBtb2Quc3R1ZGVudDtcbiAgICB9KTtcblxuICAgIG1vZC5zZXRfaW5zdHJ1Y3Rpb25zID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihuZXdJbnN0cnVjdGlvbnMpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcInNldF9pbnN0cnVjdGlvbnNcIiwgYXJndW1lbnRzLCAxLCAyKTtcbiAgICAgICAgbmV3SW5zdHJ1Y3Rpb25zID0gU2suZmZpLnJlbWFwVG9KcyhuZXdJbnN0cnVjdGlvbnMpO1xuICAgICAgICBTay5leGVjdXRpb25SZXBvcnRzW1wibW9kZWxcIl0uZGlzcGxheS5jaGFuZ2VkSW5zdHJ1Y3Rpb25zKG5ld0luc3RydWN0aW9ucyk7XG4gICAgfSk7XG5cbiAgICBtb2QuZ2V0X21vZGVsX2luZm8gPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKGtleXMpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9tb2RlbF9pbmZvXCIsIGFyZ3VtZW50cywgMSwgMSk7XG4gICAgICAgIGxldCBtb2RlbCA9IFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJtb2RlbFwiXTtcbiAgICAgICAga2V5cyA9IFNrLmZmaS5yZW1hcFRvSnMoa2V5cykuc3BsaXQoXCIuXCIpO1xuICAgICAgICBmb3IgKHZhciBpPTA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBtb2RlbCA9IG1vZGVsW2tleXNbaV1dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KG1vZGVsKCkpO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBtb2Q7XG59O1xuIiwibGV0IExPQ0FMX1NUT1JBR0VfUkVGO1xudHJ5IHtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRiA9IGxvY2FsU3RvcmFnZTtcbiAgICBsZXQgbW9kID0gXCJCTE9DS1BZX0xPQ0FMU1RPUkFHRV9URVNUXCI7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYuc2V0SXRlbShtb2QsIG1vZCk7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYucmVtb3ZlSXRlbShtb2QpO1xufSBjYXRjaChlKSB7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYgPSB7XG4gICAgICAgIF9kYXRhICAgICAgIDoge30sXG4gICAgICAgIHNldEl0ZW0gICAgIDogZnVuY3Rpb24oaWQsIHZhbCkgeyByZXR1cm4gdGhpcy5fZGF0YVtpZF0gPSBTdHJpbmcodmFsKTsgfSxcbiAgICAgICAgZ2V0SXRlbSAgICAgOiBmdW5jdGlvbihpZCkgeyByZXR1cm4gdGhpcy5fZGF0YS5oYXNPd25Qcm9wZXJ0eShpZCkgPyB0aGlzLl9kYXRhW2lkXSA6IHVuZGVmaW5lZDsgfSxcbiAgICAgICAgcmVtb3ZlSXRlbSAgOiBmdW5jdGlvbihpZCkgeyByZXR1cm4gZGVsZXRlIHRoaXMuX2RhdGFbaWRdOyB9LFxuICAgICAgICBjbGVhciAgICAgICA6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fZGF0YSA9IHt9OyB9XG4gICAgfTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgb2JqZWN0IGZvciBpbnRlcmZhY2luZyB3aXRoIHRoZSBMb2NhbFN0b3JhZ2UuIFRoZSBMb2NhbFN0b3JhZ2VcbiAqIGJyb3dzZXIgQVBJIGFsbG93cyBmb3Igb2ZmbGluZSBzdG9yYWdlLiBUaGF0IEFQSSBpcyB2ZXJ5IHVuc29waGlzdGljYXRlZCxcbiAqIGFuZCBpcyBlc3NlbnRpYWxseSBhIGxhbWUga2V5LXZhbHVlIHN0b3JlLiBUaGlzIG9iamVjdCBzaXRzIG9uIHRvcFxuICogYW5kIHByb3ZpZGVzIGEgbnVtYmVyIG9mIHVzZWZ1bCB1dGlsaXRpZXMsIGluY2x1ZGluZyBydWRpbWVudGFyeWNhY2hlXG4gKiBjYWNoZSBleHBpcmF0aW9uLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0xvY2FsU3RvcmFnZVdyYXBwZXJ9XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlIC0gQSBuYW1lc3BhY2UgdG8gdXNlIGluIGdyb3VwaW5nIGFjY2VzcyB0byBsb2NhbHN0b3JhZ2UuIFRoaXMga2VlcHMgYWNjZXNzIGNsZWFuIGFuZCBvcmdhbml6ZWQsIHdoaWxlIGFsc28gbWFraW5nIGl0IHBvc3NpYmxlIHRvIGhhdmUgbXVsdGlwbGUgTG9jYWxTdG9yYWdlIGNvbm5lY3Rpb25zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gTG9jYWxTdG9yYWdlV3JhcHBlcihuYW1lc3BhY2UpIHtcbiAgICB0aGlzLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbn1cbi8qKlxuICogQSBtZXRob2QgZm9yIGFkZGluZyBhIGtleS92YWx1ZSBwYWlyIHRvIExvY2FsU3RvcmFnZS5cbiAqIE5vdGUgdGhhdCBib3RoIHBhcmFtZXRlcnMgbXVzdCBiZSBzdHJpbmdzIChKU09OLnN0cmluZ2lmeSBpcyB5b3VyIGZyaWVuZCkuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBuYW1lIG9mIHRoZSBrZXkuXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgLSBUaGUgdmFsdWUuXG4gKi9cbkxvY2FsU3RvcmFnZVdyYXBwZXIucHJvdG90eXBlLnNldCA9ICBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYuc2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdmFsdWVcIiwgdmFsdWUpO1xuICAgIExPQ0FMX1NUT1JBR0VfUkVGLnNldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3RpbWVzdGFtcFwiLCAkLm5vdygpKTtcbn07XG5cbi8qKlxuICogQSBtZXRob2QgZm9yIHJlbW92aW5nIGEga2V5IGZyb20gTG9jYWxTdG9yYWdlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUgbmFtZSBvZiB0aGUga2V5IHRvIHJlbW92ZS5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYucmVtb3ZlSXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdmFsdWVcIik7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYucmVtb3ZlSXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdGltZXN0YW1wXCIpO1xufTtcblxuLyoqXG4gKiBBIG1ldGhvZCBmb3IgcmV0cmlldmluZyB0aGUgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBrZXkuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBuYW1lIG9mIHRoZSBrZXkgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZvci5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIExPQ0FMX1NUT1JBR0VfUkVGLmdldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3ZhbHVlXCIpO1xufTtcblxuLyoqXG4gKiBBIG1ldGhvZCBmb3IgcmV0cmlldmluZyB0aGUgdGltZSBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIGtleS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIGtleSB0byByZXRyaWV2ZSB0aGUgdGltZSBmb3IuXG4gKiBAcmV0dXJucyB7SW50ZWdlcn0gLSBUaGUgdGltZXN0YW1wIChsb2NhbCBlcG9jaCkgd2hlbiB0aGUga2V5IHdhcyBsYXN0IHNldC5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuZ2V0VGltZSA9IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBwYXJzZUludChMT0NBTF9TVE9SQUdFX1JFRi5nZXRJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl90aW1lc3RhbXBcIikpO1xufTtcblxuLyoqXG4gKiBBIG1ldGhvZCBmb3IgcmV0cmlldmluZyB0aGUgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBrZXkuXG4gKiBJZiB0aGUga2V5IGRvZXMgbm90IGV4aXN0LCB0aGVuIHRoZSBkZWZhdWx0IHZhbHVlIGlzIHVzZWQgaW5zdGVhZC5cbiAqIFRoaXMgZGVmYXVsdCB3aWxsIGJlIHNldC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIGtleSB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZm9yLlxuICogQHBhcmFtIHtTdHJpbmd9IGRlZmF1bHRWYWx1ZSAtIFRoZSBkZWZhdWx0IHZhbHVlIHRvIHVzZS4gTXVzdCBiZSBhIHN0cmluZy5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuZ2V0RGVmYXVsdCA9IGZ1bmN0aW9uKGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaGFzKGtleSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXQoa2V5LCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cbn07XG5cbi8qKlxuICogQSB0ZXN0IGZvciB3aGV0aGVyIHRoZSBnaXZlbiBrZXkgaXMgaW4gTG9jYWxTdG9yYWdlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUga2V5IHRvIHRlc3QgZXhpc3RlbmNlIGZvci5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIExPQ0FMX1NUT1JBR0VfUkVGLmdldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3ZhbHVlXCIpICE9PSBudWxsO1xufTtcblxuLyoqXG4gKiBBIHRlc3QgZm9yIHdoZXRoZXIgdGhlIHNlcnZlciBoYXMgdGhlIG5ld2VyIHZlcnNpb24uIFRoaXMgZnVuY3Rpb25cbiAqIGFzc3VtZXMgdGhhdCB0aGUgc2VydmVyIHRyaXAgdGFrZXMgYWJvdXQgNSBzZWNvbmRzLiBUaGlzIG1ldGhvZFxuICogaXMgbGFyZ2VseSBkZXByZWNhdGVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUga2V5IHRvIGNoZWNrLlxuICogQHBhcmFtIHtJbnRlZ2VyfSBzZXJ2ZXJfdGltZSAtIFRoZSBzZXJ2ZXIncyB0aW1lIGFzIGFuIGVwb2NoIChpbiBtaWxsaXNlY29uZHMpXG4gKi9cbkxvY2FsU3RvcmFnZVdyYXBwZXIucHJvdG90eXBlLmlzX25ldyA9IGZ1bmN0aW9uKGtleSwgc2VydmVyX3RpbWUpIHtcbiAgICB2YXIgc3RvcmVkX3RpbWUgPSBMT0NBTF9TVE9SQUdFX1JFRi5nZXRJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl90aW1lc3RhbXBcIik7XG4gICAgcmV0dXJuIChzZXJ2ZXJfdGltZSA+PSBzdG9yZWRfdGltZSs1MDAwKTtcbn07XG4iLCJleHBvcnQgY29uc3QgVFJBQ0VfSFRNTCA9IGBcclxuXHJcbjxkaXYgY2xhc3M9XCJibG9ja3B5LXRyYWNlIGNvbC1tZC02IGJsb2NrcHktcGFuZWxcIlxyXG4gICAgICAgICAgICByb2xlPVwicmVnaW9uXCIgYXJpYS1sYWJlbD1cIlRyYWNlXCI+XHJcbiAgICBcclxuICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPlxyXG4gICAgICAgIDxzdHJvbmc+VHJhY2U6IDwvc3Ryb25nPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwhLS0gRmVlZGJhY2svVHJhY2UgVmlzaWJpbGl0eSBDb250cm9sIC0tPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9J2J0biBidG4tc20gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGZsb2F0LXJpZ2h0IGJsb2NrcHktaGlkZS10cmFjZSdcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5zZWNvbmRSb3cuYWR2YW5jZVN0YXRlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZXllJz48L3NwYW4+IEhpZGUgVHJhY2VcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zIGJsb2NrcHktdHJhY2UtY29udHJvbHNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tb3V0bGluZS1zZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkudHJhY2UuZmlyc3RcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtc3RlcC1iYWNrd2FyZCc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5J1xyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnRyYWNlLmJhY2t3YXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWJhY2t3YXJkJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj5TdGVwOjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9J3RleHQ6IGV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIC8gPHNwYW4gZGF0YS1iaW5kPSd0ZXh0OiBleGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tb3V0bGluZS1zZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkudHJhY2UuZm9yd2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1mb3J3YXJkJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tb3V0bGluZS1zZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkudHJhY2UubGFzdFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1zdGVwLWZvcndhcmQnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPSd0ZXh0OiB1aS50cmFjZS5saW5lJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICA8dGFibGUgY2xhc3M9J3RhYmxlIHRhYmxlLXNtIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWQgdGFibGUtaG92ZXInPlxyXG4gICAgICAgIDxjYXB0aW9uPkN1cnJlbnQgdmFyaWFibGVzIGF0IHRoaXMgc3RlcDwvY2FwdGlvbj5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj48dGg+TmFtZTwvdGg+PHRoPlR5cGU8L3RoPjx0aD5WYWx1ZTwvdGg+PC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keSBkYXRhLWJpbmQ9XCJmb3JlYWNoOiB1aS50cmFjZS5kYXRhKCkucHJvcGVydGllc1wiPlxyXG4gICAgICAgICAgICA8dHIgZGF0YS1iaW5kPVwidmlzaWJsZTogbmFtZSAhPSAnX19maWxlX18nICYmIG5hbWUgIT0gJ19fcGF0aF9fJ1wiPlxyXG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtYmluZD1cInRleHQ6IG5hbWVcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtYmluZD1cInRleHQ6IHR5cGVcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjb2RlIGRhdGEtYmluZD1cInRleHQ6IHZhbHVlXCI+PC9jb2RlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0ga28gaWY6IHR5cGUgPT0gXCJMaXN0XCIgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGRhdGEtYmluZD1cImNsaWNrOiAvLyRyb290LnZpZXdFeGFjdFZhbHVlKHR5cGUsIGV4YWN0X3ZhbHVlKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLW5ldy13aW5kb3cnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICA8L3RhYmxlPlxyXG4gICAgXHJcbjwvZGl2PlxyXG5gO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJsb2NrUHlUcmFjZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLnRhZyA9IHRhZztcclxuXHJcbiAgICAgICAgdGhpcy5JR05PUkVEX0dMT0JBTFMgPSBbXCJfX25hbWVfX1wiLCBcIl9fZG9jX19cIiwgXCJfX3BhY2thZ2VfX1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NtZXRob2RcIiwgXCJwcm9wZXJ0eVwiLCBcInN0YXRpY21ldGhvZFwiXTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy50cmFjZS5jbGljayh0aGlzLmJ1aWxkVHJhY2VUYWJsZS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnN1bWUgYSBzZXQgb2YgdmFyaWFibGVzIHRyYWNlZCBmcm9tIHRoZSBleGVjdXRpb24gYW5kIHBhcnNlIG91dCBhbnlcclxuICAgICAqIGdsb2JhbCB2YXJpYWJsZXMgYW5kIG1vZHVsZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhcmlhYmxlcyAtIGEgbWFwcGluZyBvZiB2YXJpYWJsZSBuYW1lcyB0byB0aGVpciBTa3VwdCB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcGFyc2VHbG9iYWxzKHZhcmlhYmxlcykge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgICBsZXQgbW9kdWxlcyA9IFtdO1xyXG4gICAgICAgIGlmICghdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkudHJhY2VFeGVjdXRpb24oKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiB2YXJpYWJsZXMpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHZhcmlhYmxlc1twcm9wZXJ0eV07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5JR05PUkVEX0dMT0JBTFMuaW5kZXhPZihwcm9wZXJ0eSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eS5yZXBsYWNlKFwiXyRydyRcIiwgXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCJfJHJuJFwiLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFyc2VkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZCA9IEJsb2NrUHlUcmFjZS5wYXJzZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZCA9IHtcIm5hbWVcIjogcHJvcGVydHksIFwidHlwZVwiOiBcIlVua25vd25cIiwgXCJ2YWx1ZVwiOiB2YWx1ZS50b1N0cmluZygpfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXJzZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUuY29uc3RydWN0b3IgPT09IFNrLmJ1aWx0aW4ubW9kdWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZXMucHVzaCh2YWx1ZS4kZC5fX25hbWVfXy52KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcInByb3BlcnRpZXNcIjogcmVzdWx0LCBcIm1vZHVsZXNcIjogbW9kdWxlc307XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBhIFNrdWxwdCB2YWx1ZSBpbnRvIGEgbW9yZSBlYXNpbHkgcHJpbnRhYmxlIG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSAtIHRoZSBza3VscHQgdmFsdWVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHBhcnNlVmFsdWUocHJvcGVydHksIHZhbHVlLCBmdWxsTGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJVbmtub3duXCIsXHJcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiVW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoICh2YWx1ZS5jb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4uZnVuYzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkZ1bmN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodmFsdWUuZnVuY19jb2RlLmNvX3Zhcm5hbWVzICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgQXJndW1lbnRzOiBcIit2YWx1ZS5mdW5jX2NvZGUuY29fdmFybmFtZXMuam9pbihcIiwgXCIpIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIE5vIGFyZ3VtZW50c1wiKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLm1vZHVsZTogcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5zdHI6XHJcbiAgICAgICAgICAgICAgICBpZiAoZnVsbExlbmd0aCB8fCB2YWx1ZS52Lmxlbmd0aCA8PSAzMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJTdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiU3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJbXCIrdmFsdWUuc3EkbGVuZ3RoKCkrXCIgY2hhcmFjdGVycyBub3Qgc2hvd25dXCJcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4ubm9uZTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIk5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiTm9uZVwiXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4uYm9vbDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkJvb2xlYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLm5tYmVyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW50XCIgPT09IHZhbHVlLnNrVHlwZSA/IFwiSW50ZWdlclwiOiBcIkZsb2F0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5pbnRfOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiSW50ZWdlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4uZmxvYXRfOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRmxvYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLnR1cGxlOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVHVwbGVcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLmxpc3Q6XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUudi5sZW5ndGggPD0gMjApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiTGlzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJleGFjdF92YWx1ZVwiOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJMaXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJbLi4uIFwiK3ZhbHVlLnYubGVuZ3RoK1wiIGVsZW1lbnRzIC4uLl1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJleGFjdF92YWx1ZVwiOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5kaWN0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRGljdGlvbmFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIE51bWJlcjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiB2YWx1ZSAlIDEgPT09IDAgPyBcIkludGVnZXJcIiA6IFwiRmxvYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFN0cmluZzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgQm9vbGVhbjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkJvb2xlYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6ICh2YWx1ZSA/IFwiVHJ1ZVwiOiBcIkZhbHNlXCIpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHZhbHVlLnRwJG5hbWUgPT09IHVuZGVmaW5lZCA/IHZhbHVlIDogdmFsdWUudHAkbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyID09PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyBUT0RPOiB2aWV3RXhhY3RWYWx1ZSIsIi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGUgZWxlbWVudCBpcyBpbiB0aGUgbGlzdC5cbiAqIEBwYXJhbSB7YW55dGhpbmd9IG5lZWRsZSAtIFRoZSBlbGVtZW50IHRvIGxvb2sgZm9yLlxuICogQHBhcmFtIHtBcnJheX0gaGF5c3RhY2sgLSBUaGUgbGlzdCB0byBzZWFyY2guXG4gKiBAcmV0dXJuIHtCb29sZWFufSBXaGV0aGVyIHRoZSBlbGVtZW50IGV4aXN0c1xuICovXG5mdW5jdGlvbiBhcnJheUNvbnRhaW5zKG5lZWRsZSwgaGF5c3RhY2spIHtcbiAgICByZXR1cm4gaGF5c3RhY2suaW5kZXhPZihuZWVkbGUpID4gLTE7XG59XG5cbi8qKlxuICogUmVtb3ZlIGR1cGxpY2F0ZSB2YWx1ZXMgZnJvbSBhbiBhcnJheSwgcHJlc2VydmluZyBvcmRlci5cbiAqIENyZWF0ZXMgYSBuZXcgYXJyYXksIHNvIGlzIG5vbi1kZXN0cnVjdGl2ZS5cbiAqIENvdXJ0ZXN5OlxuICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTU4NDM3MC9ob3ctdG8tbWVyZ2UtdHdvLWFycmF5cy1pbi1qYXZhc2NyaXB0LWFuZC1kZS1kdXBsaWNhdGUtaXRlbXNcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSAtIFRoZSBhcnJheSB0byB1bmlxdWlmeS4gRWxlbWVudHMgY29tcGFyZWQgd2l0aCA9PT0uXG4gKi9cbmZ1bmN0aW9uIGFycmF5VW5pcXVlKGFycmF5KSB7XG4gICAgdmFyIGEgPSBhcnJheS5jb25jYXQoKTtcbiAgICBmb3IodmFyIGk9MDsgaTxhLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGZvcih2YXIgaj1pKzE7IGo8YS5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgaWYoYVtpXSA9PT0gYVtqXSkge2Euc3BsaWNlKGotLSwgMSk7fVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG59XG5cbi8qKlxuICogQSBoZWxwZXIgZnVuY3Rpb24gZm9yIGV4dGVuZGluZyBhbiBhcnJheSBiYXNlZFxuICogb24gYW4gXCJhZGRBcnJheVwiIGFuZCBcInJlbW92ZUFycmF5XCIuIEFueSBlbGVtZW50XG4gKiBmb3VuZCBpbiByZW1vdmVBcnJheSBpcyByZW1vdmVkIGZyb20gdGhlIGZpcnN0IGFycmF5XG4gKiBhbmQgYWxsIHRoZSBlbGVtZW50cyBvZiBhZGRBcnJheSBhcmUgYWRkZWQuXG4gKiBBbnkgZHVwbGljYXRlIGl0ZW1zIGFyZSByZW1vdmVkLlxuICogQ3JlYXRlcyBhIG5ldyBhcnJheSwgc28gaXMgbm9uLWRlc3RydWN0aXZlLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IC0gdGhlIGFycmF5IHRvIG1hbmlwdWxhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFkZEFycmF5IC0gdGhlIGVsZW1lbnRzIHRvIGFkZCB0byB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IHJlbW92ZUFycmF5IC0gdGhlIGVsZW1lbnRzIHRvIHJlbW92ZSBmcm9tIHRoZSBhcnJheVxuICogQHJldHVybiB7QXJyYXl9IFRoZSBtb2RpZmllZCBhcnJheVxuICovXG5mdW5jdGlvbiBleHBhbmRBcnJheShhcnJheSwgYWRkQXJyYXksIHJlbW92ZUFycmF5KSB7XG4gICAgdmFyIGNvcHlBcnJheSA9IGFycmF5LmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVBcnJheS5pbmRleE9mKGl0ZW0pID09PSAtMTtcbiAgICB9KTtcbiAgICByZXR1cm4gYXJyYXlVbmlxdWUoY29weUFycmF5LmNvbmNhdChhZGRBcnJheSkpO1xufVxuXG4vKipcbiAqIERlZXBseSBjbG9uZXMgYSBub2RlXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgQSBub2RlIHRvIGNsb25lXG4gKiBAcmV0dXJuIHtOb2RlfSBBIGNsb25lIG9mIHRoZSBnaXZlbiBub2RlIGFuZCBhbGwgaXRzIGNoaWxkcmVuXG4gKi9cbmZ1bmN0aW9uIGNsb25lTm9kZShub2RlKSB7XG4gICAgLy8gSWYgdGhlIG5vZGUgaXMgYSB0ZXh0IG5vZGUsIHRoZW4gcmUtY3JlYXRlIGl0IHJhdGhlciB0aGFuIGNsb25lIGl0XG4gICAgdmFyIGNsb25lID0gbm9kZS5ub2RlVHlwZSA9PSAzID8gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobm9kZS5ub2RlVmFsdWUpIDogbm9kZS5jbG9uZU5vZGUoZmFsc2UpO1xuIFxuICAgIC8vIFJlY3Vyc2UgICAgIFxuICAgIHZhciBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICB3aGlsZShjaGlsZCkge1xuICAgICAgICBjbG9uZS5hcHBlbmRDaGlsZChjbG9uZU5vZGUoY2hpbGQpKTtcbiAgICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICB9XG4gICAgIFxuICAgIHJldHVybiBjbG9uZTtcbn1cblxuLyoqXG4gKiBJbmRlbnRzIHRoZSBnaXZlbiBzdHJpbmcgYnkgNCBzcGFjZXMuIFRoaXMgY29ycmVjdGx5IGhhbmRsZXMgbXVsdGktbGluZSBzdHJpbmdzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nIHRvIGJlIG1hbmlwdWxhdGVkLlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIHN0cmluZyB3aXRoIGZvdXIgc3BhY2VzIGFkZGVkIGF0IHRoZSBzdGFydCBvZiBldmVyeSBuZXcgbGluZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluZGVudChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL14oPz0uKS9nbSwgXCIgICAgXCIpO1xufVxuXG4vKipcbiAqIFR1cm5zIHNwYWNlcyBpbnRvIHVuZGVyc2NvcmVzIGluIHRoZSBzdHJpbmcsIG1ha2VzIGl0IGxvd2VyY2FzZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgLSB0aGUgc3RyaW5nIHRvIGJlIG1hbmlwdWxhdGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2x1ZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccy9nLCBcIl9cIikudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIFtgbWluYCwgYG1heGBdLlxuICogXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIC0gVGhlIGxvd2VzdCBwb3NzaWJsZSBpbnRlZ2VyLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heCAtIFRoZSBoaWdoZXN0IHBvc3NpYmxlIGludGVnZXIgKGluY2x1c2l2ZSkuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBBIHJhbmRvbSBpbnRlZ2VyLlxuICovXG5mdW5jdGlvbiByYW5kb21JbnRlZ2VyKG1pbixtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKihtYXgtbWluKzEpK21pbik7XG59XG5cbi8qKlxuICogRW5jb2RlcyBzb21lIHRleHQgc28gdGhhdCBpdCBjYW4gYmUgc2FmZWx5IHdyaXR0ZW4gaW50byBhbiBIVE1MIGJveC5cbiAqIFRoaXMgaW5jbHVkZXMgcmVwbGFjaW5nIHNwZWNpYWwgSFRNTCBjaGFyYWN0ZXJzICgmLCA8LCA+LCBldGMuKS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHRleHQgdG8gYmUgY29udmVydGVkLlxuICogQHJldHVybiB7c3RyaW5nfSBUaGUgSFRNTC1zYWZlIHRleHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVIVE1MKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvJi9nLCBcIiZhbXA7XCIpXG4gICAgICAgIC5yZXBsYWNlKC88L2csIFwiJmx0O1wiKVxuICAgICAgICAucmVwbGFjZSgvPi9nLCBcIiZndDtcIilcbiAgICAgICAgLnJlcGxhY2UoL1wiL2csIFwiJnF1b3Q7XCIpXG4gICAgICAgIC5yZXBsYWNlKC8nL2csIFwiJmFwb3M7XCIpO1xufVxuXG4vKipcbiAqIFNodWZmbGUgdGhlIGJsb2NrcyBpbiB0aGUgd29ya3NwYWNlXG4gKi9cbmlmICh0eXBlb2YgQmxvY2tseSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIEJsb2NrbHkuV29ya3NwYWNlU3ZnLnByb3RvdHlwZS5zaHVmZmxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtZXRyaWNzID0gdGhpcy5nZXRNZXRyaWNzKCk7XG4gICAgICAgIHZhciB3aWR0aCA9IG1ldHJpY3Mudmlld1dpZHRoIC8gMixcbiAgICAgICAgICAgIGhlaWdodCA9IG1ldHJpY3Mudmlld0hlaWdodDtcbiAgICAgICAgdmFyIGJsb2NrcyA9IHRoaXMuZ2V0VG9wQmxvY2tzKGZhbHNlKTtcbiAgICAgICAgdmFyIHkgPSA1LCB4ID0gMCxcbiAgICAgICAgICAgIG1heGltYWxfaW5jcmVhc2UgPSBoZWlnaHQvYmxvY2tzLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibG9ja3MubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgLy8gR2V0IGEgYmxvY2tcbiAgICAgICAgICAgIHZhciBibG9jayA9IGJsb2Nrc1tpXTtcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0aWVzID0gYmxvY2suZ2V0UmVsYXRpdmVUb1N1cmZhY2VYWSgpO1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgIHggPSA1O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB4ID0gLXByb3BlcnRpZXMueCtyYW5kb21JbnRlZ2VyKDEwLCB3aWR0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBibG9jay5tb3ZlQnkoeCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgLXByb3BlcnRpZXMueSt5KTtcbiAgICAgICAgICAgIHkgPSB5ICsgcmFuZG9tSW50ZWdlcig1LCBtYXhpbWFsX2luY3JlYXNlKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8qKlxuICogTW92ZSBlbGVtZW50cyBmcm9tIG9uZSBhcnJheSB0byBhbm90aGVyIGJhc2VkIG9uIGEgY29uZGl0aW9uYWwgY2hlY2suXG4gKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zMTg4Nzk2Ny9qYXZhc2NyaXB0LW1vdmUtb2JqZWN0cy1mcm9tLW9uZS1hcnJheS10by1hbm90aGVyLWJlc3QtYXBwcm9hY2hcbiAqL1xuZnVuY3Rpb24gbW92ZUVsZW1lbnRzKHNvdXJjZSwgdGFyZ2V0LCBtb3ZlQ2hlY2spIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNvdXJjZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHNvdXJjZVtpXTtcbiAgICAgICAgaWYgKG1vdmVDaGVjayhlbGVtZW50KSkge1xuICAgICAgICAgICAgc291cmNlLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIHRhcmdldC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICB9XG4gICAgfSBcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3REZWZpbmVkVmFsdWUoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50c1tpXSAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjaGVja3MgaWYgdGhlIGdpdmVuIG9iamVjdCBpcyBvbmUgb2YgdGhlIFNrLmJ1aWx0aW4gb2JqZWN0c1xuICogVE9ETzogbWFrZSB0aGlzIHNvIHdlIGRvbid0IGhhdmUgdG8gZXhwbGljaXRseSBwdXQgb3V0IGV2ZXJ5IG9wdGlvblxuICogICAgICAgICAgb25lIHBvc3NpYmxlIHRoaW5nIHdlIGNvdWxkIGRvIGlzIGdldCBhIHN0cmluZyB2ZXJzaW9uIG9mIHRoZSBcbiAqICAgICAgICAgIG9mIHRoZSBjb25zdHJ1Y3RvciBhbmQgbG9vayBmb3IgdGhlIHN1YnN0cmluZyBcInJldHVybiBuZXcgU2suYnVpbHRpblwiXG4gKiAgICAgICAgICBCdXQgSSBkb24ndCBrbm93IGhvdyByZWxpYWJsZSB0aGF0IGlzLiAgUmF0aGVyLCBpdCdzIGtpbmQgb2YgaGFja2lzaC5cbiAqICAgICAgICAgIFNob3VsZCB0ZWhvcmV0aWNhbGx5IGJlbG9uZyBpbiBTay5mZmlcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogLSB0aGUgb2JqZWN0IHRvIGJlIGV4YW1pbmVkXG4gKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBvYmplY3QgaXMgb25lIG9mIHRoZSBTay5idWlsdGluIHR5cGVzXG4qKi9cbmZ1bmN0aW9uIGlzU2tCdWlsdGluKG9iail7XG4gICAgcmV0dXJuIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmRpY3QpIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmxpc3QpIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLnR1cGxlKSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5ib29sKSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5pbnRfKSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5mbG9hdF8pIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLnN0cikgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4ubG5nKTtcbiAgICAvL3ZhciBjb25zX3N0ciA9IG9iai5jb25zdHJ1Y3RvciArIFwiXCI7XG4gICAgLy9yZXR1cm4gY29uc19zdHIuaW5kZXhPZihcInJldHVybiBuZXcgU2suYnVpbHRpblwiKSAhPT0gLTE7XG59XG5cbmZ1bmN0aW9uIGlzQXN0Tm9kZShvYmope1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBPYmplY3QgJiYgXCJfYXN0bmFtZVwiIGluIG9iajtcbn1cblxuLyoqXG4gKiBTaG91bGQgdGhlb3JldGljYWxseSBiZWxvbmcgaW4gU2suZmZpLCBidXQgSSBwdXQgaXQgaGVyZSBpbnN0ZWFkIHRvIG5vdCBtZXNzIHVwIHRoZSBza3VscHQgZmlsZXNcbiAqIGxpa2UgdGhlIG5vcm1hbCBTay5mZmkucmVtYXBUb1B5LCBpdCBkb2Vzbid0IHdvcmsgZm9yIGZ1bmN0aW9ucyBvciBtb3JlIGNvbXBsZXggb2JqZWN0cywgYnV0IGl0IGhhbmRsZXNcbiAqIGNhc2VzIHdoZXJlIHRoZSB0eXBlcyBpbiBvYmogYXJlIGEgbWl4IG9mIHB5dGhvbiBTSU1QTEUgb2JqZWN0cyBhbmQgU0lNUExFIG5vcm1hbCBqYXZhc2NyaXB0IG9iamVjdHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogLSB0aGUgb2JqZWN0IHRvIGJlIGNvbnZlcnRlZFxuICogQHJldHVybiB7U2suYnVpbHRpbi4/Pz99IC0gcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBweXRob24gb2JqZWN0LCBkcm9wcGluZyBhbGwgZnVuY3Rpb25zIGFuZCB0aGluZ3MgaXQgY2FuJ3QgY29udmVydFxuKiovXG5mdW5jdGlvbiBtaXhlZFJlbWFwVG9QeShvYmope1xuICAgIHZhciBrO1xuICAgIHZhciBrdnM7XG4gICAgdmFyIGk7XG4gICAgdmFyIGFycjtcbiAgICAvL0BUT0RPOiBzaG91bGQgdGhlb3JldGljYWxseSBjaGVjayBpZiB0aGUgb2JqZWN0IGlzIGEgcHlob24gZGljdCBvciBhcnJheSB3aXRoIGpzIG9iamVjdHNcbiAgICBpZiAoaXNTa0J1aWx0aW4ob2JqKSl7XG4gICAgICAgIC8vb2JqZWN0IGlzIGFscmVhZHkgcHl0aG9uIHJlYWR5XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiKSB7XG4gICAgICAgIC8vb2JqZWN0IGlzIGFjdHVhbGx5IGEgamF2YXNjcmlwdCBhcnJheVxuICAgICAgICBhcnIgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG9iai5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgLy9mb3IgZWFjaCBvYmplY3QsIGNvbnZlcnQgaXQgdG8gYSBweXRob24gb2JqZWN0IGlmIGl0IGlzbid0IG9uZSBhbHJlYWR5XG4gICAgICAgICAgICB2YXIgc3VidmFsID0gb2JqW2ldO1xuICAgICAgICAgICAgaWYoIWlzU2tCdWlsdGluKHN1YnZhbCkpe1xuICAgICAgICAgICAgICAgIGFyci5wdXNoKG1peGVkUmVtYXBUb1B5KHN1YnZhbCkpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2goc3VidmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4ubGlzdChhcnIpO1xuICAgIH0gZWxzZSBpZiAob2JqID09PSBudWxsKSB7Ly9udWxsIG9iamVjdFxuICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5ub25lLm5vbmUkO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBpZighaXNTa0J1aWx0aW4ob2JqKSl7XG4gICAgICAgICAgICAvL2Fzc3VtaW5nIGl0J3MgYSBzdGFuZGFyZCBkaWN0aW9uYXJ5XG4gICAgICAgICAgICBrdnMgPSBbXTsvL1NrLmJ1aWx0aW4uZGljdCB1c2VzIGFuIGFycmF5IG9mIGtleS12YWx1ZSxrZXktdmFsdWUuLi5cbiAgICAgICAgICAgIGZvciAoayBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICAvL2NvbnZlcnQgdGhlIGtleSBpZiBpdCBuZWVkcyB0byBiZSBjb252ZXJ0ZWRcbiAgICAgICAgICAgICAgICBrdnMucHVzaChtaXhlZFJlbWFwVG9QeShrKSk7XG4gICAgICAgICAgICAgICAgLy9jb3ZlcnQgY29ycmVzcG9uZGluZyB2YWx1ZSBpZiBpdCBuZWVkcyB0byBiZSBjb252ZXJ0ZWRcbiAgICAgICAgICAgICAgICBrdnMucHVzaChtaXhlZFJlbWFwVG9QeShvYmpba10pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vY3JlYXRlIHRoZSBuZXcgZGljdGlvbmFyeVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLmRpY3Qoa3ZzKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5zdHIob2JqKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4uYXNzayQob2JqKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5ib29sKG9iaik7XG4gICAgfSBlbHNlIGlmKHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4uc3RyKG9iai5uYW1lKTtcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2tub2Nrb3V0X187Il0sInNvdXJjZVJvb3QiOiIifQ==