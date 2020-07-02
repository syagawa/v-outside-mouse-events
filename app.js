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

var setClickOutside = function setClickOutside(el, binding, vnode, oldVnode) {
  if (!existsCallback(binding)) {
    return;
  }

  var cb = binding.value;
  var evtname = "click";
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
  temp.cache = setClickOutside(el, binding, vnode, oldVnode);
};

var end = function end() {
  var cancel = temp.cache.cancel;

  if (typeof cancel === "function") {
    cancel();
  }

  delete temp.cache;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  bind: function bind(el, binding, vnode, oldVnode) {
    // console.info("bind", el, binding, vnode, oldVnode);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdWFwcC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vc3VhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9pbmRleC5qcyJdLCJuYW1lcyI6WyJleGlzdHNXaW5kb3ciLCJyZXMiLCJ3aW5kb3ciLCJleGlzdHNDYWxsYmFjayIsImJpbmRpbmciLCJ2YWx1ZSIsIm1ha2VSZW1vdmVFdmVudCIsImV2ZW50bmFtZSIsInJlbW92ZUV2ZW50IiwiaGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYWtlQWRkRXZlbnQiLCJhZGRFdmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYWtlSGFuZGxlciIsImVsIiwiY2IiLCJldnQiLCJ0Z3RfYXJlYSIsImxlbmd0aCIsImNsaWNrZWQiLCJwYXRoIiwiZXhpc3RzIiwiaSIsInAiLCJBcnJheSIsImoiLCJlbG0iLCIkZWwiLCJzZXRDbGlja091dHNpZGUiLCJ2bm9kZSIsIm9sZFZub2RlIiwiZXZ0bmFtZSIsImNsaWNrSGFuZGxlciIsIndvcmtpbmciLCJyZXNwb25zZSIsImFyZWFfbmFtZSIsImNhbmNlbCIsInRlbXAiLCJzdGFydCIsImNhY2hlIiwiZW5kIiwiYmluZCIsImluc2VydGVkIiwidXBkYXRlIiwiY29tcG9uZW50VXBkYXRlZCIsInVuYmluZCIsImdsb2JhbCIsImRpciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7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QWIsRUFBc0IwQixLQUF0QixFQUE2QkMsUUFBN0IsRUFBc0M7QUFDNUM7QUFDQVUsT0FBRztBQUNIRixTQUFLLENBQUN4QixFQUFELEVBQUtYLE9BQUwsRUFBYzBCLEtBQWQsRUFBcUJDLFFBQXJCLENBQUw7QUFDRCxHQWZZO0FBZ0JiYyxrQkFBZ0IsRUFBRSwwQkFBUzlCLEVBQVQsRUFBYVgsT0FBYixFQUFzQjBCLEtBQXRCLEVBQTZCQyxRQUE3QixFQUFzQyxDQUN0RDtBQUNELEdBbEJZO0FBbUJiZSxRQUFNLEVBQUUsZ0JBQVMvQixFQUFULEVBQWFYLE9BQWIsRUFBc0IwQixLQUF0QixFQUE2QkMsUUFBN0IsRUFBc0M7QUFDNUM7QUFDQVUsT0FBRztBQUNKO0FBdEJZLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDdklBO0FBQUE7QUFBQTs7QUFFQSxDQUFDLFVBQVNNLE1BQVQsRUFBZ0I7QUFDZixNQUFHQSxNQUFILEVBQVU7QUFDUkEsVUFBTSxDQUFDQyxHQUFQLEdBQWFBLHFEQUFiO0FBQ0Q7QUFDRixDQUpELEVBSUc5QyxNQUpILEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic3VhcHBcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wic3VhcHBcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJjb25zdCBleGlzdHNXaW5kb3cgPSBmdW5jdGlvbigpe1xuICBjb25zdCByZXMgPSB0eXBlb2Ygd2luZG93O1xuICBpZihyZXMgPT09IFwidW5kZWZpbmVkXCIpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5jb25zdCBleGlzdHNDYWxsYmFjayA9IGZ1bmN0aW9uKGJpbmRpbmcpIHtcbiAgaWYoIWJpbmRpbmcpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihiaW5kaW5nLnZhbHVlICYmIHR5cGVvZiBiaW5kaW5nLnZhbHVlID09PSBcImZ1bmN0aW9uXCIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IG1ha2VSZW1vdmVFdmVudCA9IGZ1bmN0aW9uKGV2ZW50bmFtZSl7XG4gIGNvbnN0IHJlbW92ZUV2ZW50ID0gZnVuY3Rpb24oaGFuZGxlcil7XG4gICAgaWYoZXhpc3RzV2luZG93KCkpe1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRuYW1lLCBoYW5kbGVyKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiByZW1vdmVFdmVudDtcbn07XG5cbmNvbnN0IG1ha2VBZGRFdmVudCA9IGZ1bmN0aW9uKGV2ZW50bmFtZSl7XG4gIGNvbnN0IGFkZEV2ZW50ID0gZnVuY3Rpb24oaGFuZGxlcil7XG4gICAgaWYoZXhpc3RzV2luZG93KCkpe1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRuYW1lLCBoYW5kbGVyKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBhZGRFdmVudDtcbn07XG5cbmNvbnN0IG1ha2VIYW5kbGVyID0gZnVuY3Rpb24oZWwsIGNiLCByZW1vdmVFdmVudCl7XG5cbiAgY29uc3QgaGFuZGxlciA9IGZ1bmN0aW9uKGV2dCl7XG4gICAgY29uc3QgdGd0X2FyZWEgPSBlbDtcbiAgICBpZighdGd0X2FyZWEgfHwgdGd0X2FyZWEubGVuZ3RoID09PSAwKXtcbiAgICAgIHJlbW92ZUV2ZW50KGhhbmRsZXIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjbGlja2VkID0gZXZ0LnBhdGg7XG4gICAgbGV0IGV4aXN0cyA9IGZhbHNlO1xuICAgIC8vIGxldCBjb3VudGVyID0gMDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2xpY2tlZC5sZW5ndGg7IGkrKyl7XG4gICAgICAvLyBjb3VudGVyKys7XG4gICAgICBjb25zdCBwID0gY2xpY2tlZFtpXTtcbiAgICAgIGlmKHRndF9hcmVhID09PSBwKXtcbiAgICAgICAgZXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmKHRndF9hcmVhIGluc3RhbmNlb2YgQXJyYXkpe1xuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgdGd0X2FyZWEubGVuZ3RoOyBqKyspe1xuICAgICAgICAgIC8vIGNvdW50ZXIrKztcbiAgICAgICAgICBjb25zdCBlbG0gPSB0Z3RfYXJlYVtqXTtcbiAgICAgICAgICBpZihlbG0gPT09IHApe1xuICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihlbG0uJGVsID09PSBwKXtcbiAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoZXhpc3RzKXtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICB9XG4gICAgaWYoIWV4aXN0cyl7XG4gICAgICBjYigpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gaGFuZGxlcjtcblxufTtcblxuY29uc3Qgc2V0Q2xpY2tPdXRzaWRlID0gZnVuY3Rpb24oZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSl7XG5cbiAgaWYoIWV4aXN0c0NhbGxiYWNrKGJpbmRpbmcpKXtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBjYiA9IGJpbmRpbmcudmFsdWU7XG5cbiAgY29uc3QgZXZ0bmFtZSA9IFwiY2xpY2tcIjtcbiAgY29uc3QgcmVtb3ZlRXZlbnQgPSBtYWtlUmVtb3ZlRXZlbnQoZXZ0bmFtZSk7XG4gIGNvbnN0IGFkZEV2ZW50ID0gbWFrZUFkZEV2ZW50KGV2dG5hbWUpO1xuXG4gIGNvbnN0IGNsaWNrSGFuZGxlciA9IG1ha2VIYW5kbGVyKGVsLCBjYiwgcmVtb3ZlRXZlbnQpO1xuXG4gIGxldCB3b3JraW5nID0gZmFsc2U7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSB7XG4gICAgYXJlYV9uYW1lOiBlbCxcbiAgICBjYW5jZWw6IGZ1bmN0aW9uKCl7XG4gICAgICByZW1vdmVFdmVudChjbGlja0hhbmRsZXIpO1xuICAgICAgd29ya2luZyA9IGZhbHNlO1xuICAgIH0sXG4gICAgZ2V0IHdvcmtpbmcoKXtcbiAgICAgIHJldHVybiB3b3JraW5nO1xuICAgIH1cbiAgfTtcblxuICBpZighZWwgfHwgIWNiKXtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICByZW1vdmVFdmVudChjbGlja0hhbmRsZXIpO1xuICBhZGRFdmVudChjbGlja0hhbmRsZXIpO1xuICB3b3JraW5nID0gdHJ1ZTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xuXG59O1xuXG5jb25zdCB0ZW1wID0ge307XG5cbmNvbnN0IHN0YXJ0ID0gZnVuY3Rpb24oZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSl7XG4gIHRlbXAuY2FjaGUgPSBzZXRDbGlja091dHNpZGUoZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSk7XG59O1xuXG5jb25zdCBlbmQgPSBmdW5jdGlvbigpe1xuICBjb25zdCBjYW5jZWwgPSB0ZW1wLmNhY2hlLmNhbmNlbDtcbiAgaWYodHlwZW9mIGNhbmNlbCA9PT0gXCJmdW5jdGlvblwiKXtcbiAgICBjYW5jZWwoKTtcbiAgfVxuICBkZWxldGUgdGVtcC5jYWNoZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYmluZDogZnVuY3Rpb24oZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSl7XG5cbiAgICAvLyBjb25zb2xlLmluZm8oXCJiaW5kXCIsIGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpO1xuICAgIHN0YXJ0KGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpO1xuXG4gIH0sXG4gIGluc2VydGVkOiBmdW5jdGlvbihlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKXtcbiAgICAvLyBjb25zb2xlLmluZm8oXCJpbnNlcnRlZFwiLCBlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKTtcblxuICB9LFxuICB1cGRhdGU6IGZ1bmN0aW9uKGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpe1xuICAgIC8vIGNvbnNvbGUuaW5mbyhcInVwZGF0ZVwiLCBlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKTtcbiAgICBlbmQoKTtcbiAgICBzdGFydChlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKTtcbiAgfSxcbiAgY29tcG9uZW50VXBkYXRlZDogZnVuY3Rpb24oZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSl7XG4gICAgLy8gY29uc29sZS5pbmZvKFwiY29tcG9uZW50VXBkYXRlZFwiLCBlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKTtcbiAgfSxcbiAgdW5iaW5kOiBmdW5jdGlvbihlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKXtcbiAgICAvLyBjb25zb2xlLmluZm8oXCJ1bmJpbmRcIiwgZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSk7XG4gICAgZW5kKCk7XG4gIH0sXG59OyIsImltcG9ydCBkaXIgZnJvbSBcIi4vZGlyZWN0aXZlLmpzXCI7XG5cbihmdW5jdGlvbihnbG9iYWwpe1xuICBpZihnbG9iYWwpe1xuICAgIGdsb2JhbC5kaXIgPSBkaXI7XG4gIH1cbn0pKHdpbmRvdyk7Il0sInNvdXJjZVJvb3QiOiIifQ==