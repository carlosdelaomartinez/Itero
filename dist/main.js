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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _gameView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameView */ \"./src/gameView.js\");\n\n //need to be able to switch between foreground\n// need to be able to switch between background\n// need to be  abel to toggle which one is in view and is active\n// when they are not toggled they need to be moved to their perspective view\n//on toggle change the backdropp to a sunset mood\n// move the level around the character\n// generate gaps the rule is that the screen must be filled but the gaps \n// will be generated randomly with a set min width\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var gameCanvas = document.querySelector('canvas');\n  gameCanvas.width = _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].X_DIMS;\n  gameCanvas.height = _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Y_DIMS;\n  var context = gameCanvas.getContext('2d');\n  var game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  new _gameView__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game, context).begin();\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/baseObject.js":
/*!***************************!*\
  !*** ./src/baseObject.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar BaseObject =\n/*#__PURE__*/\nfunction () {\n  function BaseObject() {\n    _classCallCheck(this, BaseObject);\n  }\n\n  _createClass(BaseObject, [{\n    key: \"move\",\n    value: function move(timeChange) {\n      var velocityChange = timeChange / Object.FRAME_RATE_TIME_CHANGE;\n      this.xpos = this.xpos + this.velX * velocityChange;\n      this.ypos = this.ypos + this.velY * velocityChange;\n    }\n  }]);\n\n  return BaseObject;\n}();\n\n_defineProperty(BaseObject, \"FRAME_RATE_TIME_CHANGE\", 1000 / 60);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BaseObject);\n\n//# sourceURL=webpack:///./src/baseObject.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar Game =\n/*#__PURE__*/\nfunction () {\n  function Game() {\n    _classCallCheck(this, Game);\n\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.level.pushStartRoads();\n    this.addPlayer();\n  }\n\n  _createClass(Game, [{\n    key: \"addPlayer\",\n    value: function addPlayer() {\n      Game.PeicesToDraw.player = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    }\n  }, {\n    key: \"colorBackground\",\n    value: function colorBackground(ctx) {\n      ctx.fillStyle = \"#4CD8FA\";\n      ctx.fillRect(0, 0, Game.X_DIMS, Game.Y_DIMS);\n    }\n  }, {\n    key: \"continueAddingRoads\",\n    value: function continueAddingRoads() {\n      this.level.pushMoreRoads(Game.X_DIMS);\n    }\n  }]);\n\n  return Game;\n}();\n\n_defineProperty(Game, \"Y_DIMS\", 600);\n\n_defineProperty(Game, \"X_DIMS\", 1000);\n\n_defineProperty(Game, \"PeicesToDraw\", {\n  paths: [],\n  player: ''\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/gameView.js":
/*!*************************!*\
  !*** ./src/gameView.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar GameView =\n/*#__PURE__*/\nfunction () {\n  function GameView(game, ctx) {\n    _classCallCheck(this, GameView);\n\n    this.game = game;\n    this.ctx = ctx;\n    this.draw(this.ctx);\n  }\n\n  _createClass(GameView, [{\n    key: \"draw\",\n    value: function draw(ctx, time) {\n      var _this = this;\n\n      for (var path in _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].PeicesToDraw.paths) {\n        if ((_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].PeicesToDraw.paths.indexOf(path) % 10 === 0 || _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].PeicesToDraw.paths[0]) && path.xpos === 0) {\n          debugger;\n          this.game.continueAddingRoads();\n        }\n      }\n\n      console.log(_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].PeicesToDraw.paths[1]); // console.log(Game.PeicesToDraw.length)\n\n      this.ctx.clearRect(0, 0, _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].X_DIMS, _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Y_DIMS);\n      this.game.colorBackground(ctx);\n      _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].PeicesToDraw.player.draw(ctx);\n      _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].PeicesToDraw.paths.forEach(function (obj) {\n        obj.draw(ctx);\n        obj.move.bind(_this, time);\n      });\n    }\n  }, {\n    key: \"begin\",\n    value: function begin() {\n      this.previousTime = 0;\n      requestAnimationFrame(this.animate.bind(this));\n    }\n  }, {\n    key: \"animate\",\n    value: function animate() {\n      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n      var timeShift = time - this.previousTime;\n      this.draw(this.ctx, timeShift);\n      this.previousTime = time;\n      requestAnimationFrame(this.animate.bind(this));\n    }\n  }]);\n\n  return GameView;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n//# sourceURL=webpack:///./src/gameView.js?");

/***/ }),

/***/ "./src/ground.js":
/*!***********************!*\
  !*** ./src/ground.js ***!
  \***********************/
/*! exports provided: Background, Middleground, Foreground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Background\", function() { return Background; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Middleground\", function() { return Middleground; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Foreground\", function() { return Foreground; });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _baseObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseObject */ \"./src/baseObject.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar Ground =\n/*#__PURE__*/\nfunction (_BaseObject) {\n  _inherits(Ground, _BaseObject);\n\n  function Ground(xpos, velX, velY, minWidth, optLength, height, povToggled) {\n    var _this;\n\n    var offset = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;\n    var ypos = arguments.length > 8 ? arguments[8] : undefined;\n\n    _classCallCheck(this, Ground);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Ground).call(this));\n    _this.minWidth = minWidth;\n    _this.povToggled = povToggled;\n    _this.offset = offset;\n    _this.xpos = xpos;\n    _this.ypos = ypos;\n    _this.velX = velX;\n    _this.velY = velY;\n    _this.optLength = optLength;\n    _this.height = height;\n    return _this;\n  }\n\n  _createClass(Ground, [{\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.beginPath();\n      ctx.fillStyle = this.color;\n      ctx.fillRect(this.xpos + this.offset, this.ypos, this.minWidth + this.optLength, this.height);\n      ctx.closePath();\n      this.xpos -= this.velX;\n      this.ypos -= this.velY;\n    }\n  }]);\n\n  return Ground;\n}(_baseObject__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\nvar Background =\n/*#__PURE__*/\nfunction (_Ground) {\n  _inherits(Background, _Ground);\n\n  function Background(ctx, xpos, velX, velY, minWidth, optLength, height, povToggled, offset) {\n    var _this2;\n\n    _classCallCheck(this, Background);\n\n    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Background).call(this, ctx, xpos, velX, velY, minWidth, optLength, height, povToggled, offset));\n    _this2.color = '#7cfc00';\n    _this2.ypos = 200; // + Math.round(Math.random() * 100 + 50)\n\n    return _this2;\n  }\n\n  return Background;\n}(Ground);\nvar Middleground =\n/*#__PURE__*/\nfunction (_Ground2) {\n  _inherits(Middleground, _Ground2);\n\n  function Middleground(xpos, velX, velY, minWidth, optLength, height, povToggled, offset) {\n    var _this3;\n\n    _classCallCheck(this, Middleground);\n\n    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Middleground).call(this, xpos, velX, velY, minWidth, optLength, height, povToggled, offset));\n    _this3.color = '#565257';\n    _this3.ypos = 300; // + Math.round(Math.random() * 100 + 50);\n\n    return _this3;\n  }\n\n  return Middleground;\n}(Ground);\nvar Foreground =\n/*#__PURE__*/\nfunction (_Ground3) {\n  _inherits(Foreground, _Ground3);\n\n  function Foreground(xpos, velX, velY, minWidth, optLength, height, povToggled, offset) {\n    var _this4;\n\n    _classCallCheck(this, Foreground);\n\n    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(Foreground).call(this, xpos, velX, velY, minWidth, optLength, height, povToggled, offset));\n    _this4.color = '#EDC9AF';\n    _this4.ypos = 400; // + (Math.round(Math.random() * 100 + 50));\n\n    return _this4;\n  }\n\n  return Foreground;\n}(Ground);\n\n//# sourceURL=webpack:///./src/ground.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _ground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ground */ \"./src/ground.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Level =\n/*#__PURE__*/\nfunction () {\n  function Level() {\n    _classCallCheck(this, Level);\n\n    this.minWidth = 300;\n    this.height = 25;\n    this.optLength = 0;\n    this.bgVel = {\n      x: 2,\n      y: 0\n    };\n    this.mgVel = {\n      x: 2,\n      y: 0\n    };\n    this.fgVel = {\n      x: 2,\n      y: 0\n    };\n  }\n\n  _createClass(Level, [{\n    key: \"pushMoreRoads\",\n    value: function pushMoreRoads(offset) {\n      this.paths = this.generateLengthPojos(this.minWidth);\n      this.generateRoads(this.paths[0], this.paths[1], this.paths[2], offset);\n    }\n  }, {\n    key: \"pushStartRoads\",\n    value: function pushStartRoads() {\n      this.paths = this.generateLengthPojos(this.minWidth);\n      this.generateRoads(this.paths[0], this.paths[1], this.paths[2]);\n    }\n  }, {\n    key: \"generateRoads\",\n    value: function generateRoads(fgToRender, mgToRender, bgToRender, offset) {\n      this.genRoad(_ground__WEBPACK_IMPORTED_MODULE_1__[\"Background\"], this.bgVel, bgToRender, false, offset);\n      this.genRoad(_ground__WEBPACK_IMPORTED_MODULE_1__[\"Middleground\"], this.mgVel, mgToRender, true, offset);\n      this.genRoad(_ground__WEBPACK_IMPORTED_MODULE_1__[\"Foreground\"], this.fgVel, fgToRender, false, offset);\n    }\n  }, {\n    key: \"genRoad\",\n    value: function genRoad(GroundClass, velOb, lengthsObj, povToggle, offset) {\n      for (var x = 0; x < _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].X_DIMS; x += this.minWidth) {\n        if (lengthsObj[x]) {\n          _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].PeicesToDraw.paths.push(new GroundClass(x, velOb.x, velOb.y, this.minWidth, this.optLength, this.height, povToggle, offset));\n        }\n      }\n    }\n  }, {\n    key: \"generateLengthPojos\",\n    value: function generateLengthPojos() {\n      var lengths = [[], [], []];\n\n      for (var i = 0; i < _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].X_DIMS;) {\n        var chosenPojo = Math.round(Math.random() * 2);\n\n        for (var j = 0; j < this.minWidth; j += this.minWidth) {\n          switch (chosenPojo) {\n            case 0:\n              lengths[0][i] = true;\n              lengths[1][i] = false;\n              lengths[2][i] = false;\n              break;\n\n            case 1:\n              lengths[0][i] = false;\n              lengths[1][i] = true;\n              lengths[2][i] = false;\n              break;\n\n            case 2:\n              lengths[0][i] = false;\n              lengths[1][i] = false;\n              lengths[2][i] = true;\n              break;\n          }\n\n          i++;\n        }\n      }\n\n      return lengths;\n    }\n  }, {\n    key: \"povChange\",\n    value: function povChange() {}\n  }]);\n\n  return Level;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Level);\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _baseObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseObject */ \"./src/baseObject.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar Player =\n/*#__PURE__*/\nfunction (_BaseObject) {\n  _inherits(Player, _BaseObject);\n\n  function Player() {\n    var _this;\n\n    _classCallCheck(this, Player);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Player).call(this));\n    _this.height = 10;\n    _this.width = 10;\n    _this.xpos = _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].X_DIMS / 2;\n    _this.ypos = _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Y_DIMS - _this.height;\n    ;\n    _this.velX = 0;\n    _this.velY = 10;\n\n    _this.handleKeys();\n\n    _this.checkForPlatformCollisions();\n\n    return _this;\n  }\n\n  _createClass(Player, [{\n    key: \"checkForPlatformCollisions\",\n    value: function checkForPlatformCollisions() {\n      setInterval(function () {\n        _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].PeicesToDraw.paths.forEach(function (ground) {\n          var player = _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].PeicesToDraw.player;\n          var ptop = player.ypos - player.height / 2;\n          var pbottom = player.ypos + player.height / 2;\n          var pright = player.xpos + player.width / 2;\n          var pleft = player.xpos - player.width / 2;\n          var gtop = ground.ypos - ground.height / 2;\n          var gbottom = ground.ypos + ground.height / 2;\n          var gright = ground.xpos + (ground.minWidth + ground.offset) / 2;\n          var gleft = ground.xpos - (ground.minWidth + ground.offset) / 2;\n\n          if (ptop === gbottom) {\n            player.ypos = gbottom;\n          }\n        });\n      }, 1);\n    }\n  }, {\n    key: \"handleKeys\",\n    value: function handleKeys() {\n      var _this2 = this;\n\n      document.addEventListener('keydown', function (e) {\n        console.log(e.keyCode);\n\n        switch (e.keyCode) {\n          case 65:\n            _this2.xpos += -50;\n            break;\n\n          case 68:\n            _this2.xpos += 50;\n            break;\n\n          case 87:\n            _this2.ypos += -100;\n            break;\n\n          case 83:\n            _this2.ypos += 50;\n            break;\n        }\n      });\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.beginPath();\n      ctx.fillStyle = 'red';\n      ctx.fillRect(this.xpos, this.ypos, this.width, this.height);\n      ctx.closePath();\n\n      if (this.ypos + this.velY > _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Y_DIMS - this.height) {\n        this.ypos = _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Y_DIMS - this.height;\n      } else {\n        this.ypos += this.velY;\n      }\n\n      this.xpos -= this.velX;\n    }\n  }]);\n\n  return Player;\n}(_baseObject__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ })

/******/ });