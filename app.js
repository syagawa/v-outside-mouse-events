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
  var evts = ["click", "mousedown", "mouseup", "touchstart", "touchend"];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdWFwcC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vc3VhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9pbmRleC5qcyJdLCJuYW1lcyI6WyJleGlzdHNXaW5kb3ciLCJyZXMiLCJ3aW5kb3ciLCJleGlzdHNDYWxsYmFjayIsImJpbmRpbmciLCJ2YWx1ZSIsIm1ha2VSZW1vdmVFdmVudCIsImV2ZW50bmFtZSIsInJlbW92ZUV2ZW50IiwiaGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYWtlQWRkRXZlbnQiLCJhZGRFdmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYWtlSGFuZGxlciIsImVsIiwiY2IiLCJldnQiLCJ0Z3RfYXJlYSIsImxlbmd0aCIsImNsaWNrZWQiLCJwYXRoIiwiZXhpc3RzIiwiaSIsInAiLCJBcnJheSIsImoiLCJlbG0iLCIkZWwiLCJzZXRPdXRzaWRlIiwiZXZ0bmFtZSIsInZub2RlIiwib2xkVm5vZGUiLCJjbGlja0hhbmRsZXIiLCJ3b3JraW5nIiwicmVzcG9uc2UiLCJhcmVhX25hbWUiLCJjYW5jZWwiLCJ0ZW1wIiwic3RhcnQiLCJkZXRlY3RFdmVudCIsImNhY2hlIiwiZW5kIiwibmFtZSIsImFyciIsInNwbGl0IiwicG9wIiwiZXZ0cyIsImZpbHRlciIsImJpbmQiLCJjb25zb2xlIiwiaW5mbyIsImFyZ3VtZW50cyIsImluc2VydGVkIiwidXBkYXRlIiwiY29tcG9uZW50VXBkYXRlZCIsInVuYmluZCIsImdsb2JhbCIsImRpciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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LEVBQXNCMkIsS0FBdEIsRUFBNkJDLFFBQTdCLEVBQXNDLENBQ3REO0FBQ0QsR0FuQlk7QUFvQmJ3QixRQUFNLEVBQUUsZ0JBQVN6QyxFQUFULEVBQWFYLE9BQWIsRUFBc0IyQixLQUF0QixFQUE2QkMsUUFBN0IsRUFBc0M7QUFDNUM7QUFDQVUsT0FBRztBQUNKO0FBdkJZLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDdEtBO0FBQUE7QUFBQTs7QUFFQSxDQUFDLFVBQVNlLE1BQVQsRUFBZ0I7QUFDZixNQUFHQSxNQUFILEVBQVU7QUFDUkEsVUFBTSxDQUFDQyxHQUFQLEdBQWFBLHFEQUFiO0FBQ0Q7QUFDRixDQUpELEVBSUd4RCxNQUpILEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic3VhcHBcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wic3VhcHBcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJjb25zdCBleGlzdHNXaW5kb3cgPSBmdW5jdGlvbigpe1xuICBjb25zdCByZXMgPSB0eXBlb2Ygd2luZG93O1xuICBpZihyZXMgPT09IFwidW5kZWZpbmVkXCIpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5jb25zdCBleGlzdHNDYWxsYmFjayA9IGZ1bmN0aW9uKGJpbmRpbmcpIHtcbiAgaWYoIWJpbmRpbmcpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihiaW5kaW5nLnZhbHVlICYmIHR5cGVvZiBiaW5kaW5nLnZhbHVlID09PSBcImZ1bmN0aW9uXCIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IG1ha2VSZW1vdmVFdmVudCA9IGZ1bmN0aW9uKGV2ZW50bmFtZSl7XG4gIGNvbnN0IHJlbW92ZUV2ZW50ID0gZnVuY3Rpb24oaGFuZGxlcil7XG4gICAgaWYoZXhpc3RzV2luZG93KCkpe1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRuYW1lLCBoYW5kbGVyKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiByZW1vdmVFdmVudDtcbn07XG5cbmNvbnN0IG1ha2VBZGRFdmVudCA9IGZ1bmN0aW9uKGV2ZW50bmFtZSl7XG4gIGNvbnN0IGFkZEV2ZW50ID0gZnVuY3Rpb24oaGFuZGxlcil7XG4gICAgaWYoZXhpc3RzV2luZG93KCkpe1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRuYW1lLCBoYW5kbGVyKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBhZGRFdmVudDtcbn07XG5cbmNvbnN0IG1ha2VIYW5kbGVyID0gZnVuY3Rpb24oZWwsIGNiLCByZW1vdmVFdmVudCl7XG5cbiAgY29uc3QgaGFuZGxlciA9IGZ1bmN0aW9uKGV2dCl7XG4gICAgY29uc3QgdGd0X2FyZWEgPSBlbDtcbiAgICBpZighdGd0X2FyZWEgfHwgdGd0X2FyZWEubGVuZ3RoID09PSAwKXtcbiAgICAgIHJlbW92ZUV2ZW50KGhhbmRsZXIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjbGlja2VkID0gZXZ0LnBhdGg7XG4gICAgbGV0IGV4aXN0cyA9IGZhbHNlO1xuICAgIC8vIGxldCBjb3VudGVyID0gMDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2xpY2tlZC5sZW5ndGg7IGkrKyl7XG4gICAgICAvLyBjb3VudGVyKys7XG4gICAgICBjb25zdCBwID0gY2xpY2tlZFtpXTtcbiAgICAgIGlmKHRndF9hcmVhID09PSBwKXtcbiAgICAgICAgZXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmKHRndF9hcmVhIGluc3RhbmNlb2YgQXJyYXkpe1xuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgdGd0X2FyZWEubGVuZ3RoOyBqKyspe1xuICAgICAgICAgIC8vIGNvdW50ZXIrKztcbiAgICAgICAgICBjb25zdCBlbG0gPSB0Z3RfYXJlYVtqXTtcbiAgICAgICAgICBpZihlbG0gPT09IHApe1xuICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihlbG0uJGVsID09PSBwKXtcbiAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoZXhpc3RzKXtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICB9XG4gICAgaWYoIWV4aXN0cyl7XG4gICAgICBjYigpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gaGFuZGxlcjtcblxufTtcblxuY29uc3Qgc2V0T3V0c2lkZSA9IGZ1bmN0aW9uKGV2dG5hbWUsIGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpe1xuXG4gIGlmKCFleGlzdHNDYWxsYmFjayhiaW5kaW5nKSl7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgY2IgPSBiaW5kaW5nLnZhbHVlO1xuXG4gIGNvbnN0IHJlbW92ZUV2ZW50ID0gbWFrZVJlbW92ZUV2ZW50KGV2dG5hbWUpO1xuICBjb25zdCBhZGRFdmVudCA9IG1ha2VBZGRFdmVudChldnRuYW1lKTtcblxuICBjb25zdCBjbGlja0hhbmRsZXIgPSBtYWtlSGFuZGxlcihlbCwgY2IsIHJlbW92ZUV2ZW50KTtcblxuICBsZXQgd29ya2luZyA9IGZhbHNlO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0ge1xuICAgIGFyZWFfbmFtZTogZWwsXG4gICAgY2FuY2VsOiBmdW5jdGlvbigpe1xuICAgICAgcmVtb3ZlRXZlbnQoY2xpY2tIYW5kbGVyKTtcbiAgICAgIHdvcmtpbmcgPSBmYWxzZTtcbiAgICB9LFxuICAgIGdldCB3b3JraW5nKCl7XG4gICAgICByZXR1cm4gd29ya2luZztcbiAgICB9XG4gIH07XG5cbiAgaWYoIWVsIHx8ICFjYil7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnQoY2xpY2tIYW5kbGVyKTtcbiAgYWRkRXZlbnQoY2xpY2tIYW5kbGVyKTtcbiAgd29ya2luZyA9IHRydWU7XG4gIHJldHVybiByZXNwb25zZTtcblxufTtcblxuY29uc3QgdGVtcCA9IHt9O1xuXG5jb25zdCBzdGFydCA9IGZ1bmN0aW9uKGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpe1xuXG4gIGNvbnN0IGV2dG5hbWUgPSBkZXRlY3RFdmVudChiaW5kaW5nKTtcbiAgaWYoIWV2dG5hbWUpe1xuICAgIHJldHVybjtcbiAgfVxuICB0ZW1wLmV2dG5hbWUgPSBldnRuYW1lO1xuICB0ZW1wLmNhY2hlID0gc2V0T3V0c2lkZSh0ZW1wLmV2dG5hbWUsIGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpO1xufTtcblxuY29uc3QgZW5kID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgY2FuY2VsID0gdGVtcC5jYWNoZS5jYW5jZWw7XG4gIGlmKHR5cGVvZiBjYW5jZWwgPT09IFwiZnVuY3Rpb25cIil7XG4gICAgY2FuY2VsKCk7XG4gIH1cbiAgZGVsZXRlIHRlbXAuY2FjaGU7XG59O1xuXG5jb25zdCBkZXRlY3RFdmVudCA9IGZ1bmN0aW9uKGJpbmRpbmcpe1xuXG4gIGlmKCFiaW5kaW5nKXtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBuYW1lID0gYmluZGluZy5uYW1lO1xuICBjb25zdCBhcnIgPSBuYW1lLnNwbGl0KFwiLVwiKTtcbiAgY29uc3QgZXZ0bmFtZSA9IGFyci5wb3AoKTtcbiAgY29uc3QgZXZ0cyA9IFtcbiAgICBcImNsaWNrXCIsXG4gICAgXCJtb3VzZWRvd25cIixcbiAgICBcIm1vdXNldXBcIixcbiAgICBcInRvdWNoc3RhcnRcIixcbiAgICBcInRvdWNoZW5kXCJcbiAgXTtcblxuICBjb25zdCBleGlzdHMgPSBldnRzLmZpbHRlcihlbG0gPT4gZWxtID09PSBldnRuYW1lKTtcbiAgaWYoZXhpc3RzKXtcbiAgICByZXR1cm4gZXZ0bmFtZTtcbiAgfVxuICByZXR1cm47XG59O1xuXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBiaW5kOiBmdW5jdGlvbihlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKXtcbiAgICBjb25zb2xlLmluZm8odGhpcywgYXJndW1lbnRzKVxuICAgIC8vIGNvbnNvbGUuaW5mbyhcImJpbmRcIiwgZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSk7XG5cbiAgICBzdGFydChlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKTtcblxuICB9LFxuICBpbnNlcnRlZDogZnVuY3Rpb24oZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSl7XG4gICAgLy8gY29uc29sZS5pbmZvKFwiaW5zZXJ0ZWRcIiwgZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSk7XG5cbiAgfSxcbiAgdXBkYXRlOiBmdW5jdGlvbihlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKXtcbiAgICAvLyBjb25zb2xlLmluZm8oXCJ1cGRhdGVcIiwgZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSk7XG4gICAgZW5kKCk7XG4gICAgc3RhcnQoZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSk7XG4gIH0sXG4gIGNvbXBvbmVudFVwZGF0ZWQ6IGZ1bmN0aW9uKGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpe1xuICAgIC8vIGNvbnNvbGUuaW5mbyhcImNvbXBvbmVudFVwZGF0ZWRcIiwgZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSk7XG4gIH0sXG4gIHVuYmluZDogZnVuY3Rpb24oZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSl7XG4gICAgLy8gY29uc29sZS5pbmZvKFwidW5iaW5kXCIsIGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpO1xuICAgIGVuZCgpO1xuICB9LFxufTsiLCJpbXBvcnQgZGlyIGZyb20gXCIuL2RpcmVjdGl2ZS5qc1wiO1xuXG4oZnVuY3Rpb24oZ2xvYmFsKXtcbiAgaWYoZ2xvYmFsKXtcbiAgICBnbG9iYWwuZGlyID0gZGlyO1xuICB9XG59KSh3aW5kb3cpOyJdLCJzb3VyY2VSb290IjoiIn0=