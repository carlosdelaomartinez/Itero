/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _gameView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameView */ \"./src/gameView.js\");\n\n //need to be able to switch between foreground\n// need to be able to switch between background\n// need to be  abel to toggle which one is in view and is active\n// when they are not toggled they need to be moved to their perspective view\n//on toggle change the backdropp to a sunset mood\n// move the level around the character\n// generate gaps the rule is that the screen must be filled but the gaps \n// will be generated randomly with a set min width\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var gameCanvas = document.querySelector('canvas');\n  gameCanvas.width = _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].X_DIMS;\n  gameCanvas.height = _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Y_DIMS;\n  var context = gameCanvas.getContext('2d');\n  var game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  new _gameView__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game, context);\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar Game =\n/*#__PURE__*/\nfunction () {\n  function Game() {\n    _classCallCheck(this, Game);\n\n    this.minLengthRequirement = 100;\n    this.minHeight = 100;\n    this.optLength = 0;\n  }\n\n  _createClass(Game, [{\n    key: \"colorBackground\",\n    value: function colorBackground(ctx) {\n      ctx.fillStyle = \"#4CD8FA\";\n      ctx.fillRect(0, 0, Game.X_DIMS, Game.Y_DIMS);\n    }\n  }, {\n    key: \"loadPaths\",\n    value: function loadPaths(ctx) {\n      this.paths = this.generateLengthPojos(this.minLengthRequirement); // this.newPaths = this.generateLengthPojos(this.minLengthRequirement);\n\n      this.level = new _level__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n      this.level.renderRoads(this.paths[0], this.paths[1], this.paths[2], this.minLengthRequirement, this.minHeight, this.optLength); // console.log('these paths are new',this.newPaths)\n      // setInterval(() => {\n      //   if(this.newPaths[0].length === 1){\n      //     this.newPaths = this.generateLengthPojos(300);\n      //   }\n      //   this.paths[0].shift()\n      //   this.paths[1].shift()\n      //   this.paths[2].shift()\n      //   this.paths[0].push(this.newPaths[0].shift())\n      //   this.paths[1].push(this.newPaths[1].shift())\n      //   this.paths[2].push(this.newPaths[2].shift())\n      //   this.level.renderRoads(this.paths[0], this.paths[1], this.paths[2])\n      // }, 1);\n    } // want to be able to make pojos of a given length \n    // can be used for difficulty\n\n  }, {\n    key: \"generateLengthPojos\",\n    value: function generateLengthPojos(minLengthRequirement) {\n      var lengths = [[], [], []];\n\n      for (var i = 0; i < Game.X_DIMS;) {\n        var chosenPojo = Math.round(Math.random() * 2);\n\n        for (var j = 0; j < minLengthRequirement; j++) {\n          switch (chosenPojo) {\n            case 0:\n              lengths[0][i] = true;\n              lengths[1][i] = false;\n              lengths[2][i] = false;\n              break;\n\n            case 1:\n              lengths[0][i] = false;\n              lengths[1][i] = true;\n              lengths[2][i] = false;\n              break;\n\n            case 2:\n              lengths[0][i] = false;\n              lengths[1][i] = false;\n              lengths[2][i] = true;\n              break;\n          }\n\n          i++;\n        }\n      }\n\n      return lengths;\n    }\n  }]);\n\n  return Game;\n}();\n\n_defineProperty(Game, \"Y_DIMS\", 600);\n\n_defineProperty(Game, \"X_DIMS\", 1000);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/gameView.js":
/*!*************************!*\
  !*** ./src/gameView.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar GameView =\n/*#__PURE__*/\nfunction () {\n  function GameView(game, ctx) {\n    _classCallCheck(this, GameView);\n\n    this.game = game;\n    this.ctx = ctx;\n    this.draw(ctx);\n  }\n\n  _createClass(GameView, [{\n    key: \"draw\",\n    value: function draw(ctx) {\n      var _this = this;\n\n      setInterval(function () {\n        _this.ctx.clearRect(0, 0, _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].X_DIMS, _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Y_DIMS);\n\n        _this.game.colorBackground(ctx);\n\n        _this.game.loadPaths(ctx);\n      }, 500);\n    }\n  }]);\n\n  return GameView;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n//# sourceURL=webpack:///./src/gameView.js?");

/***/ }),

/***/ "./src/ground.js":
/*!***********************!*\
  !*** ./src/ground.js ***!
  \***********************/
/*! exports provided: Background, Middleground, Foreground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Background\", function() { return Background; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Middleground\", function() { return Middleground; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Foreground\", function() { return Foreground; });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Ground =\n/*#__PURE__*/\nfunction () {\n  function Ground(povToggled, ctx) {\n    _classCallCheck(this, Ground);\n\n    this.povToggled = povToggled;\n    this.ctx = ctx;\n    this.velX = 10;\n    this.velY = 0;\n  }\n\n  _createClass(Ground, [{\n    key: \"drawRoad\",\n    value: function drawRoad(lengthsObj, minLengthRequirement, height) {\n      var optLength = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n      console.log(lengthsObj);\n\n      for (var x = 0; x < _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].X_DIMS; x += minLengthRequirement) {\n        if (lengthsObj[x]) {\n          var tempX = x;\n          var tempY = this.roadRow;\n          this.ctx.beginPath();\n          this.ctx.fillStyle = this.color;\n          this.ctx.fillRect(tempX, this.roadRow, minLengthRequirement + optLength, height);\n          this.ctx.closePath();\n          tempX += this.velX;\n        }\n      }\n    }\n  }]);\n\n  return Ground;\n}();\n\nvar Background =\n/*#__PURE__*/\nfunction (_Ground) {\n  _inherits(Background, _Ground);\n\n  function Background(povToggled, ctx) {\n    var _this;\n\n    _classCallCheck(this, Background);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Background).call(this, povToggled, ctx));\n    _this.color = '#7cfc00';\n    _this.roadRow = 300;\n    return _this;\n  }\n\n  return Background;\n}(Ground);\nvar Middleground =\n/*#__PURE__*/\nfunction (_Ground2) {\n  _inherits(Middleground, _Ground2);\n\n  function Middleground(povToggled, ctx) {\n    var _this2;\n\n    _classCallCheck(this, Middleground);\n\n    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Middleground).call(this, povToggled, ctx));\n    _this2.color = '#565257';\n    _this2.roadRow = 400;\n    return _this2;\n  }\n\n  return Middleground;\n}(Ground);\nvar Foreground =\n/*#__PURE__*/\nfunction (_Ground3) {\n  _inherits(Foreground, _Ground3);\n\n  function Foreground(povToggled, ctx) {\n    var _this3;\n\n    _classCallCheck(this, Foreground);\n\n    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Foreground).call(this, povToggled, ctx));\n    _this3.color = '#EDC9AF';\n    _this3.roadRow = 500;\n    return _this3;\n  }\n\n  return Foreground;\n}(Ground);\n\n//# sourceURL=webpack:///./src/ground.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ground */ \"./src/ground.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Level =\n/*#__PURE__*/\nfunction () {\n  function Level(ctx) {\n    _classCallCheck(this, Level);\n\n    this.foreground = new _ground__WEBPACK_IMPORTED_MODULE_0__[\"Foreground\"](false, ctx);\n    this.middleground = new _ground__WEBPACK_IMPORTED_MODULE_0__[\"Middleground\"](true, ctx);\n    this.background = new _ground__WEBPACK_IMPORTED_MODULE_0__[\"Background\"](false, ctx);\n  }\n\n  _createClass(Level, [{\n    key: \"renderRoads\",\n    value: function renderRoads(fgToRender, mgToRender, bgToRender, minLengthRequirement, height, optLength) {\n      this.foreground.drawRoad(fgToRender, minLengthRequirement, height, optLength);\n      this.middleground.drawRoad(mgToRender, minLengthRequirement, height, optLength);\n      this.background.drawRoad(bgToRender, minLengthRequirement, height, optLength);\n    }\n  }, {\n    key: \"povChange\",\n    value: function povChange() {}\n  }]);\n\n  return Level;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Level);\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ })

/******/ });