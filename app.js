(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["v-outside-events"] = factory();
	else
		root["v-outside-events"] = factory();
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

var existsCallback = function existsCallback(binding) {
  if (!binding) {
    return false;
  }

  if (binding.value && typeof binding.value === "function") {
    return true;
  }

  return false;
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

var makeHandler = function makeHandler(el, cb, removeEvent) {
  var handler = function handler(evt) {
    var tgt_area = el;

    if (!tgt_area || tgt_area.length === 0) {
      removeEvent(handler);
      return;
    }

    var clicked = evt.path;
    var exists = false; // let counter = 0;

    for (var i = 0; i < clicked.length; i++) {
      // counter++;
      var p = clicked[i];

      if (tgt_area === p) {
        exists = true;
        break;
      }

      if (tgt_area instanceof Array) {
        for (var j = 0; j < tgt_area.length; j++) {
          // counter++;
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

  return handler;
};

var setOutside = function setOutside(evtname, el, binding, vnode, oldVnode) {
  if (!existsCallback(binding)) {
    return;
  }

  var cb = binding.value;
  var removeEvent = makeRemoveEvent(evtname);
  var addEvent = makeAddEvent(evtname);
  var clickHandler = makeHandler(el, cb, removeEvent);
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

var temp = {};

var start = function start(el, binding, vnode, oldVnode) {
  var evtname = detectEvent(binding);

  if (!evtname) {
    return;
  }

  temp.evtname = evtname;
  temp.cache = setOutside(temp.evtname, el, binding, vnode, oldVnode);
};

var end = function end() {
  var cancel = temp.cache.cancel;

  if (typeof cancel === "function") {
    cancel();
  }

  delete temp.cache;
};

var detectEvent = function detectEvent(binding) {
  if (!binding) {
    return;
  }

  var name = binding.name;
  var arr = name.split("-");
  var evtname = arr.pop();
  var evts = ["click", "mousedown", "mouseup", "mouseenter", "mouseover", "mousemove", "touchstart", "touchend"];
  var exists = evts.filter(function (elm) {
    return elm === evtname;
  });

  if (exists) {
    return evtname;
  }

  return;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  bind: function bind(el, binding, vnode, oldVnode) {
    console.info(this, arguments); // console.info("bind", el, binding, vnode, oldVnode);

    start(el, binding, vnode, oldVnode);
  },
  inserted: function inserted(el, binding, vnode, oldVnode) {// console.info("inserted", el, binding, vnode, oldVnode);
  },
  update: function update(el, binding, vnode, oldVnode) {
    // console.info("update", el, binding, vnode, oldVnode);
    end();
    start(el, binding, vnode, oldVnode);
  },
  componentUpdated: function componentUpdated(el, binding, vnode, oldVnode) {// console.info("componentUpdated", el, binding, vnode, oldVnode);
  },
  unbind: function unbind(el, binding, vnode, oldVnode) {
    // console.info("unbind", el, binding, vnode, oldVnode);
    end();
  }
});

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive.js */ "./directive.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  directive: _directive_js__WEBPACK_IMPORTED_MODULE_0__["default"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92LW91dHNpZGUtZXZlbnRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly92LW91dHNpZGUtZXZlbnRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Ytb3V0c2lkZS1ldmVudHMvLi9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vdi1vdXRzaWRlLWV2ZW50cy8uL2luZGV4LmpzIl0sIm5hbWVzIjpbImV4aXN0c1dpbmRvdyIsInJlcyIsIndpbmRvdyIsImV4aXN0c0NhbGxiYWNrIiwiYmluZGluZyIsInZhbHVlIiwibWFrZVJlbW92ZUV2ZW50IiwiZXZlbnRuYW1lIiwicmVtb3ZlRXZlbnQiLCJoYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1ha2VBZGRFdmVudCIsImFkZEV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1ha2VIYW5kbGVyIiwiZWwiLCJjYiIsImV2dCIsInRndF9hcmVhIiwibGVuZ3RoIiwiY2xpY2tlZCIsInBhdGgiLCJleGlzdHMiLCJpIiwicCIsIkFycmF5IiwiaiIsImVsbSIsIiRlbCIsInNldE91dHNpZGUiLCJldnRuYW1lIiwidm5vZGUiLCJvbGRWbm9kZSIsImNsaWNrSGFuZGxlciIsIndvcmtpbmciLCJyZXNwb25zZSIsImFyZWFfbmFtZSIsImNhbmNlbCIsInRlbXAiLCJzdGFydCIsImRldGVjdEV2ZW50IiwiY2FjaGUiLCJlbmQiLCJuYW1lIiwiYXJyIiwic3BsaXQiLCJwb3AiLCJldnRzIiwiZmlsdGVyIiwiYmluZCIsImNvbnNvbGUiLCJpbmZvIiwiYXJndW1lbnRzIiwiaW5zZXJ0ZWQiLCJ1cGRhdGUiLCJjb21wb25lbnRVcGRhdGVkIiwidW5iaW5kIiwiZGlyZWN0aXZlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7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QUFxQkMsUUFBckIsQ0FBTDtBQUNELEdBaEJZO0FBaUJidUIsa0JBQWdCLEVBQUUsMEJBQVN4QyxFQUFULEVBQWFYLE9BQWIsRUFBc0IyQixLQUF0QixFQUE2QkMsUUFBN0IsRUFBc0MsQ0FDdEQ7QUFDRCxHQW5CWTtBQW9CYndCLFFBQU0sRUFBRSxnQkFBU3pDLEVBQVQsRUFBYVgsT0FBYixFQUFzQjJCLEtBQXRCLEVBQTZCQyxRQUE3QixFQUFzQztBQUM1QztBQUNBVSxPQUFHO0FBQ0o7QUF2QlksQ0FBZixFOzs7Ozs7Ozs7Ozs7QUN6S0E7QUFBQTtBQUFBO0FBRWU7QUFDYmUsV0FBUyxFQUFFQSxxREFBU0E7QUFEUCxDQUFmLEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widi1vdXRzaWRlLWV2ZW50c1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ2LW91dHNpZGUtZXZlbnRzXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiY29uc3QgZXhpc3RzV2luZG93ID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgcmVzID0gdHlwZW9mIHdpbmRvdztcbiAgaWYocmVzID09PSBcInVuZGVmaW5lZFwiKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuY29uc3QgZXhpc3RzQ2FsbGJhY2sgPSBmdW5jdGlvbihiaW5kaW5nKSB7XG4gIGlmKCFiaW5kaW5nKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYoYmluZGluZy52YWx1ZSAmJiB0eXBlb2YgYmluZGluZy52YWx1ZSA9PT0gXCJmdW5jdGlvblwiKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBtYWtlUmVtb3ZlRXZlbnQgPSBmdW5jdGlvbihldmVudG5hbWUpe1xuICBjb25zdCByZW1vdmVFdmVudCA9IGZ1bmN0aW9uKGhhbmRsZXIpe1xuICAgIGlmKGV4aXN0c1dpbmRvdygpKXtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50bmFtZSwgaGFuZGxlcik7XG4gICAgfVxuICB9O1xuICByZXR1cm4gcmVtb3ZlRXZlbnQ7XG59O1xuXG5jb25zdCBtYWtlQWRkRXZlbnQgPSBmdW5jdGlvbihldmVudG5hbWUpe1xuICBjb25zdCBhZGRFdmVudCA9IGZ1bmN0aW9uKGhhbmRsZXIpe1xuICAgIGlmKGV4aXN0c1dpbmRvdygpKXtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50bmFtZSwgaGFuZGxlcik7XG4gICAgfVxuICB9O1xuICByZXR1cm4gYWRkRXZlbnQ7XG59O1xuXG5jb25zdCBtYWtlSGFuZGxlciA9IGZ1bmN0aW9uKGVsLCBjYiwgcmVtb3ZlRXZlbnQpe1xuXG4gIGNvbnN0IGhhbmRsZXIgPSBmdW5jdGlvbihldnQpe1xuICAgIGNvbnN0IHRndF9hcmVhID0gZWw7XG4gICAgaWYoIXRndF9hcmVhIHx8IHRndF9hcmVhLmxlbmd0aCA9PT0gMCl7XG4gICAgICByZW1vdmVFdmVudChoYW5kbGVyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY2xpY2tlZCA9IGV2dC5wYXRoO1xuICAgIGxldCBleGlzdHMgPSBmYWxzZTtcbiAgICAvLyBsZXQgY291bnRlciA9IDA7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGNsaWNrZWQubGVuZ3RoOyBpKyspe1xuICAgICAgLy8gY291bnRlcisrO1xuICAgICAgY29uc3QgcCA9IGNsaWNrZWRbaV07XG4gICAgICBpZih0Z3RfYXJlYSA9PT0gcCl7XG4gICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZih0Z3RfYXJlYSBpbnN0YW5jZW9mIEFycmF5KXtcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRndF9hcmVhLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICAvLyBjb3VudGVyKys7XG4gICAgICAgICAgY29uc3QgZWxtID0gdGd0X2FyZWFbal07XG4gICAgICAgICAgaWYoZWxtID09PSBwKXtcbiAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoZWxtLiRlbCA9PT0gcCl7XG4gICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKGV4aXN0cyl7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgfVxuICAgIGlmKCFleGlzdHMpe1xuICAgICAgY2IoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGhhbmRsZXI7XG5cbn07XG5cbmNvbnN0IHNldE91dHNpZGUgPSBmdW5jdGlvbihldnRuYW1lLCBlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKXtcblxuICBpZighZXhpc3RzQ2FsbGJhY2soYmluZGluZykpe1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGNiID0gYmluZGluZy52YWx1ZTtcblxuICBjb25zdCByZW1vdmVFdmVudCA9IG1ha2VSZW1vdmVFdmVudChldnRuYW1lKTtcbiAgY29uc3QgYWRkRXZlbnQgPSBtYWtlQWRkRXZlbnQoZXZ0bmFtZSk7XG5cbiAgY29uc3QgY2xpY2tIYW5kbGVyID0gbWFrZUhhbmRsZXIoZWwsIGNiLCByZW1vdmVFdmVudCk7XG5cbiAgbGV0IHdvcmtpbmcgPSBmYWxzZTtcblxuICBjb25zdCByZXNwb25zZSA9IHtcbiAgICBhcmVhX25hbWU6IGVsLFxuICAgIGNhbmNlbDogZnVuY3Rpb24oKXtcbiAgICAgIHJlbW92ZUV2ZW50KGNsaWNrSGFuZGxlcik7XG4gICAgICB3b3JraW5nID0gZmFsc2U7XG4gICAgfSxcbiAgICBnZXQgd29ya2luZygpe1xuICAgICAgcmV0dXJuIHdvcmtpbmc7XG4gICAgfVxuICB9O1xuXG4gIGlmKCFlbCB8fCAhY2Ipe1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50KGNsaWNrSGFuZGxlcik7XG4gIGFkZEV2ZW50KGNsaWNrSGFuZGxlcik7XG4gIHdvcmtpbmcgPSB0cnVlO1xuICByZXR1cm4gcmVzcG9uc2U7XG5cbn07XG5cbmNvbnN0IHRlbXAgPSB7fTtcblxuY29uc3Qgc3RhcnQgPSBmdW5jdGlvbihlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKXtcblxuICBjb25zdCBldnRuYW1lID0gZGV0ZWN0RXZlbnQoYmluZGluZyk7XG4gIGlmKCFldnRuYW1lKXtcbiAgICByZXR1cm47XG4gIH1cbiAgdGVtcC5ldnRuYW1lID0gZXZ0bmFtZTtcbiAgdGVtcC5jYWNoZSA9IHNldE91dHNpZGUodGVtcC5ldnRuYW1lLCBlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKTtcbn07XG5cbmNvbnN0IGVuZCA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGNhbmNlbCA9IHRlbXAuY2FjaGUuY2FuY2VsO1xuICBpZih0eXBlb2YgY2FuY2VsID09PSBcImZ1bmN0aW9uXCIpe1xuICAgIGNhbmNlbCgpO1xuICB9XG4gIGRlbGV0ZSB0ZW1wLmNhY2hlO1xufTtcblxuY29uc3QgZGV0ZWN0RXZlbnQgPSBmdW5jdGlvbihiaW5kaW5nKXtcblxuICBpZighYmluZGluZyl7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgbmFtZSA9IGJpbmRpbmcubmFtZTtcbiAgY29uc3QgYXJyID0gbmFtZS5zcGxpdChcIi1cIik7XG4gIGNvbnN0IGV2dG5hbWUgPSBhcnIucG9wKCk7XG4gIGNvbnN0IGV2dHMgPSBbXG4gICAgXCJjbGlja1wiLFxuICAgIFwibW91c2Vkb3duXCIsXG4gICAgXCJtb3VzZXVwXCIsXG4gICAgXCJtb3VzZWVudGVyXCIsXG4gICAgXCJtb3VzZW92ZXJcIixcbiAgICBcIm1vdXNlbW92ZVwiLFxuICAgIFwidG91Y2hzdGFydFwiLFxuICAgIFwidG91Y2hlbmRcIlxuICBdO1xuXG4gIGNvbnN0IGV4aXN0cyA9IGV2dHMuZmlsdGVyKGVsbSA9PiBlbG0gPT09IGV2dG5hbWUpO1xuICBpZihleGlzdHMpe1xuICAgIHJldHVybiBldnRuYW1lO1xuICB9XG4gIHJldHVybjtcbn07XG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGJpbmQ6IGZ1bmN0aW9uKGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpe1xuICAgIGNvbnNvbGUuaW5mbyh0aGlzLCBhcmd1bWVudHMpXG4gICAgLy8gY29uc29sZS5pbmZvKFwiYmluZFwiLCBlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKTtcblxuICAgIHN0YXJ0KGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpO1xuXG4gIH0sXG4gIGluc2VydGVkOiBmdW5jdGlvbihlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKXtcbiAgICAvLyBjb25zb2xlLmluZm8oXCJpbnNlcnRlZFwiLCBlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKTtcblxuICB9LFxuICB1cGRhdGU6IGZ1bmN0aW9uKGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpe1xuICAgIC8vIGNvbnNvbGUuaW5mbyhcInVwZGF0ZVwiLCBlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKTtcbiAgICBlbmQoKTtcbiAgICBzdGFydChlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKTtcbiAgfSxcbiAgY29tcG9uZW50VXBkYXRlZDogZnVuY3Rpb24oZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSl7XG4gICAgLy8gY29uc29sZS5pbmZvKFwiY29tcG9uZW50VXBkYXRlZFwiLCBlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKTtcbiAgfSxcbiAgdW5iaW5kOiBmdW5jdGlvbihlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKXtcbiAgICAvLyBjb25zb2xlLmluZm8oXCJ1bmJpbmRcIiwgZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSk7XG4gICAgZW5kKCk7XG4gIH0sXG59OyIsImltcG9ydCBkaXJlY3RpdmUgZnJvbSBcIi4vZGlyZWN0aXZlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGlyZWN0aXZlOiBkaXJlY3RpdmVcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==