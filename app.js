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
/*!**********************!*\
  !*** multi ./ref.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./ref.js */"./ref.js");


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdWFwcC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vc3VhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9yZWYuanMiXSwibmFtZXMiOlsiZXhpc3RzV2luZG93IiwicmVzIiwid2luZG93Iiwic2V0Q2xpY2tPdXRzaWRlIiwidiIsImFyZWFfbmFtZSIsImNiIiwicmVtb3ZlRXZlbnQiLCJoYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsaWNrSGFuZGxlciIsImV2dCIsInRndF9hcmVhIiwiJHJlZnMiLCJsZW5ndGgiLCJjbGlja2VkIiwicGF0aCIsImV4aXN0cyIsImNvdW50ZXIiLCJpIiwicCIsIkFycmF5IiwiaiIsImVsbSIsIiRlbCIsIndvcmtpbmciLCJyZXNwb25zZSIsInZ1ZU9iaiIsImNhbGxiYWNrIiwiY2FuY2VsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNB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QSxPQUFKLEdBQWE7QUFDWCxhQUFPQSxPQUFQO0FBQ0Q7O0FBVmMsR0FBakI7O0FBYUEsTUFBRyxDQUFDdkIsQ0FBRCxJQUFNLENBQUNDLFNBQVAsSUFBb0IsQ0FBQ0MsRUFBeEIsRUFBMkI7QUFDekIsV0FBT3NCLFFBQVA7QUFDRDs7QUFFRHJCLGFBQVcsQ0FBQ0ssWUFBRCxDQUFYO0FBQ0FGLFVBQVEsQ0FBQ0UsWUFBRCxDQUFSO0FBQ0FlLFNBQU8sR0FBRyxJQUFWO0FBQ0EsU0FBT0MsUUFBUDtBQUVELENBN0VEOztBQStFZTtBQUNiekIsaUJBQWUsRUFBRUE7QUFESixDQUFmLEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic3VhcHBcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wic3VhcHBcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJjb25zdCBleGlzdHNXaW5kb3cgPSBmdW5jdGlvbigpe1xuICBjb25zdCByZXMgPSB0eXBlb2Ygd2luZG93O1xuICBpZihyZXMgPT09IFwidW5kZWZpbmVkXCIpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IHNldENsaWNrT3V0c2lkZSA9IGZ1bmN0aW9uKHYsIGFyZWFfbmFtZSwgY2Ipe1xuICBjb25zdCByZW1vdmVFdmVudCA9IGZ1bmN0aW9uKGhhbmRsZXIpe1xuICAgIGlmKGV4aXN0c1dpbmRvdygpKXtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlcik7XG4gICAgfVxuICB9O1xuICBjb25zdCBhZGRFdmVudCA9IGZ1bmN0aW9uKGhhbmRsZXIpe1xuICAgIGlmKGV4aXN0c1dpbmRvdygpKXtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlcik7XG4gICAgfVxuICB9O1xuICBjb25zdCBjbGlja0hhbmRsZXIgPSBmdW5jdGlvbihldnQpe1xuICAgIGNvbnN0IHRndF9hcmVhID0gdi4kcmVmc1thcmVhX25hbWVdO1xuICAgIGlmKCF0Z3RfYXJlYSB8fCB0Z3RfYXJlYS5sZW5ndGggPT09IDApe1xuICAgICAgcmVtb3ZlRXZlbnQoY2xpY2tIYW5kbGVyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY2xpY2tlZCA9IGV2dC5wYXRoO1xuICAgIGxldCBleGlzdHMgPSBmYWxzZTtcbiAgICBsZXQgY291bnRlciA9IDA7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGNsaWNrZWQubGVuZ3RoOyBpKyspe1xuICAgICAgY291bnRlcisrO1xuICAgICAgY29uc3QgcCA9IGNsaWNrZWRbaV07XG4gICAgICBpZih0Z3RfYXJlYSA9PT0gcCl7XG4gICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZih0Z3RfYXJlYSBpbnN0YW5jZW9mIEFycmF5KXtcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRndF9hcmVhLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgICAgY29uc3QgZWxtID0gdGd0X2FyZWFbal07XG4gICAgICAgICAgaWYoZWxtID09PSBwKXtcbiAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoZWxtLiRlbCA9PT0gcCl7XG4gICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKGV4aXN0cyl7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgfVxuICAgIGlmKCFleGlzdHMpe1xuICAgICAgY2IoKTtcbiAgICB9XG4gIH07XG5cbiAgbGV0IHdvcmtpbmcgPSBmYWxzZTtcblxuICBjb25zdCByZXNwb25zZSA9IHtcbiAgICB2dWVPYmo6IHYsXG4gICAgYXJlYV9uYW1lOiBhcmVhX25hbWUsXG4gICAgY2FsbGJhY2s6IGNiLFxuICAgIGNhbmNlbDogZnVuY3Rpb24oKXtcbiAgICAgIHJlbW92ZUV2ZW50KGNsaWNrSGFuZGxlcik7XG4gICAgICB3b3JraW5nID0gZmFsc2U7XG4gICAgfSxcbiAgICBnZXQgd29ya2luZygpe1xuICAgICAgcmV0dXJuIHdvcmtpbmc7XG4gICAgfVxuICB9O1xuXG4gIGlmKCF2IHx8ICFhcmVhX25hbWUgfHwgIWNiKXtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICByZW1vdmVFdmVudChjbGlja0hhbmRsZXIpO1xuICBhZGRFdmVudChjbGlja0hhbmRsZXIpO1xuICB3b3JraW5nID0gdHJ1ZTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNldENsaWNrT3V0c2lkZTogc2V0Q2xpY2tPdXRzaWRlXG59OyJdLCJzb3VyY2VSb290IjoiIn0=