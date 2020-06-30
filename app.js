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

var makeRemoveEvent = function makeRemoveEvent(eventname) {
  var removeEvent = function removeEvent(handler) {
    if (existsWindow()) {
      window.removeEventListener(eventname, handler);
    }
  };

  return removeEvent;
};

var makeAddEvent = function makeAddEvent(eventname) {
  var addEvent = function addEvent(handler) {
    if (existsWindow()) {
      window.addEventListener(eventname, handler);
    }
  };

  return addEvent;
};

var setClickOutside = function setClickOutside(el, binding, vnode, oldVnode) {
  var cb = binding.value;
  var evtname = "click";
  var removeEvent = makeRemoveEvent(evtname);
  var addEvent = makeAddEvent(evtname);

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
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive.js */ "./directive.js");


(function (global) {
  if (global) {
    global.dir = _directive_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  }
})(window);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdWFwcC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vc3VhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9pbmRleC5qcyJdLCJuYW1lcyI6WyJleGlzdHNXaW5kb3ciLCJyZXMiLCJ3aW5kb3ciLCJtYWtlUmVtb3ZlRXZlbnQiLCJldmVudG5hbWUiLCJyZW1vdmVFdmVudCIsImhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWFrZUFkZEV2ZW50IiwiYWRkRXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0Q2xpY2tPdXRzaWRlIiwiZWwiLCJiaW5kaW5nIiwidm5vZGUiLCJvbGRWbm9kZSIsImNiIiwidmFsdWUiLCJldnRuYW1lIiwiY2xpY2tIYW5kbGVyIiwiZXZ0IiwidGd0X2FyZWEiLCJsZW5ndGgiLCJjbGlja2VkIiwicGF0aCIsImV4aXN0cyIsImNvdW50ZXIiLCJpIiwicCIsIkFycmF5IiwiaiIsImVsbSIsIiRlbCIsIndvcmtpbmciLCJyZXNwb25zZSIsImFyZWFfbmFtZSIsImNhbmNlbCIsImJpbmQiLCJpbnNlcnRlZCIsInVwZGF0ZSIsImNvbXBvbmVudFVwZGF0ZWQiLCJ1bmJpbmQiLCJnbG9iYWwiLCJkaXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNB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QU0sRUFBRSxnQkFBUzNCLEVBQVQsRUFBYUMsT0FBYixFQUFzQkMsS0FBdEIsRUFBNkJDLFFBQTdCLEVBQXNDLENBQzdDLENBVlk7QUFXYnlCLGtCQUFnQixFQUFFLDBCQUFTNUIsRUFBVCxFQUFhQyxPQUFiLEVBQXNCQyxLQUF0QixFQUE2QkMsUUFBN0IsRUFBc0MsQ0FDdkQsQ0FaWTtBQWFiMEIsUUFBTSxFQUFFLGdCQUFTN0IsRUFBVCxFQUFhQyxPQUFiLEVBQXNCQyxLQUF0QixFQUE2QkMsUUFBN0IsRUFBc0MsQ0FDN0M7QUFkWSxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ3ZHQTtBQUFBO0FBQUE7O0FBRUEsQ0FBQyxVQUFTMkIsTUFBVCxFQUFnQjtBQUNmLE1BQUdBLE1BQUgsRUFBVTtBQUNSQSxVQUFNLENBQUNDLEdBQVAsR0FBYUEscURBQWI7QUFDRDtBQUNGLENBSkQsRUFJR3pDLE1BSkgsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJzdWFwcFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJzdWFwcFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImNvbnN0IGV4aXN0c1dpbmRvdyA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHJlcyA9IHR5cGVvZiB3aW5kb3c7XG4gIGlmKHJlcyA9PT0gXCJ1bmRlZmluZWRcIil7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgbWFrZVJlbW92ZUV2ZW50ID0gZnVuY3Rpb24oZXZlbnRuYW1lKXtcbiAgY29uc3QgcmVtb3ZlRXZlbnQgPSBmdW5jdGlvbihoYW5kbGVyKXtcbiAgICBpZihleGlzdHNXaW5kb3coKSl7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudG5hbWUsIGhhbmRsZXIpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHJlbW92ZUV2ZW50O1xufTtcblxuY29uc3QgbWFrZUFkZEV2ZW50ID0gZnVuY3Rpb24oZXZlbnRuYW1lKXtcbiAgY29uc3QgYWRkRXZlbnQgPSBmdW5jdGlvbihoYW5kbGVyKXtcbiAgICBpZihleGlzdHNXaW5kb3coKSl7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudG5hbWUsIGhhbmRsZXIpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGFkZEV2ZW50O1xufTtcblxuXG5jb25zdCBzZXRDbGlja091dHNpZGUgPSBmdW5jdGlvbihlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKXtcblxuICBjb25zdCBjYiA9IGJpbmRpbmcudmFsdWU7XG5cbiAgY29uc3QgZXZ0bmFtZSA9IFwiY2xpY2tcIjtcbiAgY29uc3QgcmVtb3ZlRXZlbnQgPSBtYWtlUmVtb3ZlRXZlbnQoZXZ0bmFtZSk7XG4gIGNvbnN0IGFkZEV2ZW50ID0gbWFrZUFkZEV2ZW50KGV2dG5hbWUpO1xuXG4gIGNvbnN0IGNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uKGV2dCl7XG4gICAgY29uc3QgdGd0X2FyZWEgPSBlbDtcbiAgICBpZighdGd0X2FyZWEgfHwgdGd0X2FyZWEubGVuZ3RoID09PSAwKXtcbiAgICAgIHJlbW92ZUV2ZW50KGNsaWNrSGFuZGxlcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNsaWNrZWQgPSBldnQucGF0aDtcbiAgICBsZXQgZXhpc3RzID0gZmFsc2U7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjbGlja2VkLmxlbmd0aDsgaSsrKXtcbiAgICAgIGNvdW50ZXIrKztcbiAgICAgIGNvbnN0IHAgPSBjbGlja2VkW2ldO1xuICAgICAgaWYodGd0X2FyZWEgPT09IHApe1xuICAgICAgICBleGlzdHMgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYodGd0X2FyZWEgaW5zdGFuY2VvZiBBcnJheSl7XG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB0Z3RfYXJlYS5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgY291bnRlcisrO1xuICAgICAgICAgIGNvbnN0IGVsbSA9IHRndF9hcmVhW2pdO1xuICAgICAgICAgIGlmKGVsbSA9PT0gcCl7XG4gICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGVsbS4kZWwgPT09IHApe1xuICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihleGlzdHMpe1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgIH1cbiAgICBpZighZXhpc3RzKXtcbiAgICAgIGNiKCk7XG4gICAgfVxuICB9O1xuXG4gIGxldCB3b3JraW5nID0gZmFsc2U7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSB7XG4gICAgYXJlYV9uYW1lOiBlbCxcbiAgICBjYW5jZWw6IGZ1bmN0aW9uKCl7XG4gICAgICByZW1vdmVFdmVudChjbGlja0hhbmRsZXIpO1xuICAgICAgd29ya2luZyA9IGZhbHNlO1xuICAgIH0sXG4gICAgZ2V0IHdvcmtpbmcoKXtcbiAgICAgIHJldHVybiB3b3JraW5nO1xuICAgIH1cbiAgfTtcblxuICBpZighZWwgfHwgIWNiKXtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuXG4gIHJlbW92ZUV2ZW50KGNsaWNrSGFuZGxlcik7XG4gIGFkZEV2ZW50KGNsaWNrSGFuZGxlcik7XG4gIHdvcmtpbmcgPSB0cnVlO1xuICByZXR1cm4gcmVzcG9uc2U7XG5cbn07XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBiaW5kOiBmdW5jdGlvbihlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKXtcblxuICAgIGNvbnN0IHJlcyA9IHNldENsaWNrT3V0c2lkZShlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKTtcblxuICB9LFxuICBpbnNlcnRlZDogZnVuY3Rpb24oZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSl7XG5cbiAgfSxcbiAgdXBkYXRlOiBmdW5jdGlvbihlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKXtcbiAgfSxcbiAgY29tcG9uZW50VXBkYXRlZDogZnVuY3Rpb24oZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSl7XG4gIH0sXG4gIHVuYmluZDogZnVuY3Rpb24oZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSl7XG4gIH0sXG59OyIsImltcG9ydCBkaXIgZnJvbSBcIi4vZGlyZWN0aXZlLmpzXCI7XG5cbihmdW5jdGlvbihnbG9iYWwpe1xuICBpZihnbG9iYWwpe1xuICAgIGdsb2JhbC5kaXIgPSBkaXI7XG4gIH1cbn0pKHdpbmRvdyk7Il0sInNvdXJjZVJvb3QiOiIifQ==