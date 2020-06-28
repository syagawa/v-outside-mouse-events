(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["suapp"] = factory();
	else
		root["suapp"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./directive.js":
/*!**********************!*\
  !*** ./directive.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var existsWindow = function existsWindow() {
  var res = typeof window === "undefined" ? "undefined" : _typeof(window);

  if (res === "undefined") {
    return false;
  }

  return true;
};

var setClickOutside = function setClickOutside(el, binding, vnode, oldVnode) {
  var cb = binding.value;

  var removeEvent = function removeEvent(handler) {
    if (existsWindow()) {
      window.removeEventListener("click", handler);
    }
  };

  var addEvent = function addEvent(handler) {
    if (existsWindow()) {
      window.addEventListener("click", handler);
    }
  };

  var clickHandler = function clickHandler(evt) {
    var tgt_area = el;

    if (!tgt_area || tgt_area.length === 0) {
      removeEvent(clickHandler);
      return;
    }

    var clicked = evt.path;
    var exists = false;
    var counter = 0;

    for (var i = 0; i < clicked.length; i++) {
      counter++;
      var p = clicked[i];

      if (tgt_area === p) {
        exists = true;
        break;
      }

      if (tgt_area instanceof Array) {
        for (var j = 0; j < tgt_area.length; j++) {
          counter++;
          var elm = tgt_area[j];

          if (elm === p) {
            exists = true;
            break;
          }

          if (elm.$el === p) {
            exists = true;
            break;
          }
        }
      }

      if (exists) {
        break;
      }
    }

    if (!exists) {
      cb();
    }
  };

  var working = false;
  var response = {
    area_name: el,
    cancel: function cancel() {
      removeEvent(clickHandler);
      working = false;
    },

    get working() {
      return working;
    }

  };

  if (!el || !cb) {
    return response;
  }

  removeEvent(clickHandler);
  addEvent(clickHandler);
  working = true;
  return response;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  bind: function bind(el, binding, vnode, oldVnode) {
    var res = setClickOutside(el, binding, vnode, oldVnode);
  },
  inserted: function inserted(el, binding, vnode, oldVnode) {},
  update: function update(el, binding, vnode, oldVnode) {},
  componentUpdated: function componentUpdated(el, binding, vnode, oldVnode) {},
  unbind: function unbind(el, binding, vnode, oldVnode) {}
});

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ref_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ref.js */ "./ref.js");
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directive.js */ "./directive.js");



(function (global) {
  if (global) {
    global.ref = _ref_js__WEBPACK_IMPORTED_MODULE_0__["default"];
    global.dir = _directive_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
})(window);

/***/ }),

/***/ "./ref.js":
/*!****************!*\
  !*** ./ref.js ***!
  \****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var existsWindow = function existsWindow() {
  var res = typeof window === "undefined" ? "undefined" : _typeof(window);

  if (res === "undefined") {
    return false;
  }

  return true;
};

var setClickOutside = function setClickOutside(v, area_name, cb) {
  var removeEvent = function removeEvent(handler) {
    if (existsWindow()) {
      window.removeEventListener("click", handler);
    }
  };

  var addEvent = function addEvent(handler) {
    if (existsWindow()) {
      window.addEventListener("click", handler);
    }
  };

  var clickHandler = function clickHandler(evt) {
    var tgt_area = v.$refs[area_name];

    if (!tgt_area || tgt_area.length === 0) {
      removeEvent(clickHandler);
      return;
    }

    var clicked = evt.path;
    var exists = false;
    var counter = 0;

    for (var i = 0; i < clicked.length; i++) {
      counter++;
      var p = clicked[i];

      if (tgt_area === p) {
        exists = true;
        break;
      }

      if (tgt_area instanceof Array) {
        for (var j = 0; j < tgt_area.length; j++) {
          counter++;
          var elm = tgt_area[j];

          if (elm === p) {
            exists = true;
            break;
          }

          if (elm.$el === p) {
            exists = true;
            break;
          }
        }
      }

      if (exists) {
        break;
      }
    }

    if (!exists) {
      cb();
    }
  };

  var working = false;
  var response = {
    vueObj: v,
    area_name: area_name,
    callback: cb,
    cancel: function cancel() {
      removeEvent(clickHandler);
      working = false;
    },

    get working() {
      return working;
    }

  };

  if (!v || !area_name || !cb) {
    return response;
  }

  removeEvent(clickHandler);
  addEvent(clickHandler);
  working = true;
  return response;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  setClickOutside: setClickOutside
});

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./index.js */"./index.js");


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdWFwcC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vc3VhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdWFwcC8uL3JlZi5qcyJdLCJuYW1lcyI6WyJleGlzdHNXaW5kb3ciLCJyZXMiLCJ3aW5kb3ciLCJzZXRDbGlja091dHNpZGUiLCJlbCIsImJpbmRpbmciLCJ2bm9kZSIsIm9sZFZub2RlIiwiY2IiLCJ2YWx1ZSIsInJlbW92ZUV2ZW50IiwiaGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGlja0hhbmRsZXIiLCJldnQiLCJ0Z3RfYXJlYSIsImxlbmd0aCIsImNsaWNrZWQiLCJwYXRoIiwiZXhpc3RzIiwiY291bnRlciIsImkiLCJwIiwiQXJyYXkiLCJqIiwiZWxtIiwiJGVsIiwid29ya2luZyIsInJlc3BvbnNlIiwiYXJlYV9uYW1lIiwiY2FuY2VsIiwiYmluZCIsImluc2VydGVkIiwidXBkYXRlIiwiY29tcG9uZW50VXBkYXRlZCIsInVuYmluZCIsImdsb2JhbCIsInJlZiIsImRpciIsInYiLCIkcmVmcyIsInZ1ZU9iaiIsImNhbGxiYWNrIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVB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LENBQUNLLFlBQUQsQ0FBWDtBQUNBYyxhQUFPLEdBQUcsS0FBVjtBQUNELEtBUGM7O0FBUWYsUUFBSUEsT0FBSixHQUFhO0FBQ1gsYUFBT0EsT0FBUDtBQUNEOztBQVZjLEdBQWpCOztBQWFBLE1BQUcsQ0FBQ1ksQ0FBRCxJQUFNLENBQUNWLFNBQVAsSUFBb0IsQ0FBQ3ZCLEVBQXhCLEVBQTJCO0FBQ3pCLFdBQU9zQixRQUFQO0FBQ0Q7O0FBRURwQixhQUFXLENBQUNLLFlBQUQsQ0FBWDtBQUNBRixVQUFRLENBQUNFLFlBQUQsQ0FBUjtBQUNBYyxTQUFPLEdBQUcsSUFBVjtBQUNBLFNBQU9DLFFBQVA7QUFFRCxDQTdFRDs7QUErRWU7QUFDYjNCLGlCQUFlLEVBQUVBO0FBREosQ0FBZixFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInN1YXBwXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInN1YXBwXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiY29uc3QgZXhpc3RzV2luZG93ID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgcmVzID0gdHlwZW9mIHdpbmRvdztcbiAgaWYocmVzID09PSBcInVuZGVmaW5lZFwiKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5jb25zdCBzZXRDbGlja091dHNpZGUgPSBmdW5jdGlvbihlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKXtcblxuICBjb25zdCBjYiA9IGJpbmRpbmcudmFsdWU7XG5cbiAgY29uc3QgcmVtb3ZlRXZlbnQgPSBmdW5jdGlvbihoYW5kbGVyKXtcbiAgICBpZihleGlzdHNXaW5kb3coKSl7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZXIpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgYWRkRXZlbnQgPSBmdW5jdGlvbihoYW5kbGVyKXtcbiAgICBpZihleGlzdHNXaW5kb3coKSl7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZXIpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24oZXZ0KXtcbiAgICBjb25zdCB0Z3RfYXJlYSA9IGVsO1xuICAgIGlmKCF0Z3RfYXJlYSB8fCB0Z3RfYXJlYS5sZW5ndGggPT09IDApe1xuICAgICAgcmVtb3ZlRXZlbnQoY2xpY2tIYW5kbGVyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY2xpY2tlZCA9IGV2dC5wYXRoO1xuICAgIGxldCBleGlzdHMgPSBmYWxzZTtcbiAgICBsZXQgY291bnRlciA9IDA7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGNsaWNrZWQubGVuZ3RoOyBpKyspe1xuICAgICAgY291bnRlcisrO1xuICAgICAgY29uc3QgcCA9IGNsaWNrZWRbaV07XG4gICAgICBpZih0Z3RfYXJlYSA9PT0gcCl7XG4gICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZih0Z3RfYXJlYSBpbnN0YW5jZW9mIEFycmF5KXtcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRndF9hcmVhLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgICAgY29uc3QgZWxtID0gdGd0X2FyZWFbal07XG4gICAgICAgICAgaWYoZWxtID09PSBwKXtcbiAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoZWxtLiRlbCA9PT0gcCl7XG4gICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKGV4aXN0cyl7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgfVxuICAgIGlmKCFleGlzdHMpe1xuICAgICAgY2IoKTtcbiAgICB9XG4gIH07XG5cbiAgbGV0IHdvcmtpbmcgPSBmYWxzZTtcblxuICBjb25zdCByZXNwb25zZSA9IHtcbiAgICBhcmVhX25hbWU6IGVsLFxuICAgIGNhbmNlbDogZnVuY3Rpb24oKXtcbiAgICAgIHJlbW92ZUV2ZW50KGNsaWNrSGFuZGxlcik7XG4gICAgICB3b3JraW5nID0gZmFsc2U7XG4gICAgfSxcbiAgICBnZXQgd29ya2luZygpe1xuICAgICAgcmV0dXJuIHdvcmtpbmc7XG4gICAgfVxuICB9O1xuXG4gIGlmKCFlbCB8fCAhY2Ipe1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG5cbiAgcmVtb3ZlRXZlbnQoY2xpY2tIYW5kbGVyKTtcbiAgYWRkRXZlbnQoY2xpY2tIYW5kbGVyKTtcbiAgd29ya2luZyA9IHRydWU7XG4gIHJldHVybiByZXNwb25zZTtcblxufTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGJpbmQ6IGZ1bmN0aW9uKGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpe1xuXG4gICAgY29uc3QgcmVzID0gc2V0Q2xpY2tPdXRzaWRlKGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpO1xuXG4gIH0sXG4gIGluc2VydGVkOiBmdW5jdGlvbihlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKXtcblxuICB9LFxuICB1cGRhdGU6IGZ1bmN0aW9uKGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpe1xuICB9LFxuICBjb21wb25lbnRVcGRhdGVkOiBmdW5jdGlvbihlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKXtcbiAgfSxcbiAgdW5iaW5kOiBmdW5jdGlvbihlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKXtcbiAgfSxcbn07IiwiaW1wb3J0IHJlZiBmcm9tIFwiLi9yZWYuanNcIjtcbmltcG9ydCBkaXIgZnJvbSBcIi4vZGlyZWN0aXZlLmpzXCI7XG5cbihmdW5jdGlvbihnbG9iYWwpe1xuICBpZihnbG9iYWwpe1xuICAgIGdsb2JhbC5yZWYgPSByZWY7XG4gICAgZ2xvYmFsLmRpciA9IGRpcjtcbiAgfVxufSkod2luZG93KTsiLCJjb25zdCBleGlzdHNXaW5kb3cgPSBmdW5jdGlvbigpe1xuICBjb25zdCByZXMgPSB0eXBlb2Ygd2luZG93O1xuICBpZihyZXMgPT09IFwidW5kZWZpbmVkXCIpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IHNldENsaWNrT3V0c2lkZSA9IGZ1bmN0aW9uKHYsIGFyZWFfbmFtZSwgY2Ipe1xuICBjb25zdCByZW1vdmVFdmVudCA9IGZ1bmN0aW9uKGhhbmRsZXIpe1xuICAgIGlmKGV4aXN0c1dpbmRvdygpKXtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlcik7XG4gICAgfVxuICB9O1xuICBjb25zdCBhZGRFdmVudCA9IGZ1bmN0aW9uKGhhbmRsZXIpe1xuICAgIGlmKGV4aXN0c1dpbmRvdygpKXtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlcik7XG4gICAgfVxuICB9O1xuICBjb25zdCBjbGlja0hhbmRsZXIgPSBmdW5jdGlvbihldnQpe1xuICAgIGNvbnN0IHRndF9hcmVhID0gdi4kcmVmc1thcmVhX25hbWVdO1xuICAgIGlmKCF0Z3RfYXJlYSB8fCB0Z3RfYXJlYS5sZW5ndGggPT09IDApe1xuICAgICAgcmVtb3ZlRXZlbnQoY2xpY2tIYW5kbGVyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY2xpY2tlZCA9IGV2dC5wYXRoO1xuICAgIGxldCBleGlzdHMgPSBmYWxzZTtcbiAgICBsZXQgY291bnRlciA9IDA7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGNsaWNrZWQubGVuZ3RoOyBpKyspe1xuICAgICAgY291bnRlcisrO1xuICAgICAgY29uc3QgcCA9IGNsaWNrZWRbaV07XG4gICAgICBpZih0Z3RfYXJlYSA9PT0gcCl7XG4gICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZih0Z3RfYXJlYSBpbnN0YW5jZW9mIEFycmF5KXtcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRndF9hcmVhLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgICAgY29uc3QgZWxtID0gdGd0X2FyZWFbal07XG4gICAgICAgICAgaWYoZWxtID09PSBwKXtcbiAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoZWxtLiRlbCA9PT0gcCl7XG4gICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKGV4aXN0cyl7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgfVxuICAgIGlmKCFleGlzdHMpe1xuICAgICAgY2IoKTtcbiAgICB9XG4gIH07XG5cbiAgbGV0IHdvcmtpbmcgPSBmYWxzZTtcblxuICBjb25zdCByZXNwb25zZSA9IHtcbiAgICB2dWVPYmo6IHYsXG4gICAgYXJlYV9uYW1lOiBhcmVhX25hbWUsXG4gICAgY2FsbGJhY2s6IGNiLFxuICAgIGNhbmNlbDogZnVuY3Rpb24oKXtcbiAgICAgIHJlbW92ZUV2ZW50KGNsaWNrSGFuZGxlcik7XG4gICAgICB3b3JraW5nID0gZmFsc2U7XG4gICAgfSxcbiAgICBnZXQgd29ya2luZygpe1xuICAgICAgcmV0dXJuIHdvcmtpbmc7XG4gICAgfVxuICB9O1xuXG4gIGlmKCF2IHx8ICFhcmVhX25hbWUgfHwgIWNiKXtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICByZW1vdmVFdmVudChjbGlja0hhbmRsZXIpO1xuICBhZGRFdmVudChjbGlja0hhbmRsZXIpO1xuICB3b3JraW5nID0gdHJ1ZTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNldENsaWNrT3V0c2lkZTogc2V0Q2xpY2tPdXRzaWRlXG59OyJdLCJzb3VyY2VSb290IjoiIn0=