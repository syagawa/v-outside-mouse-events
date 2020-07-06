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

var makeHandler = function makeHandler(el, removeEvent) {
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
      // cb();
      executeCallback(el);
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
  var clickHandler = makeHandler(el, removeEvent);
  var working = false;
  var response = {
    evtname: evtname,
    el: el,
    cancel: function cancel() {
      removeEvent(clickHandler);
      working = false;
    },

    get working() {
      return working;
    },

    cb: cb
  };

  if (!el || !cb) {
    return response;
  }

  removeEvent(clickHandler);
  addEvent(clickHandler);
  working = true;
  return response;
};

var cache = [];

var findTempByElement = function findTempByElement(el) {
  var ind = cache.findIndex(function (elm) {
    return elm.el === el;
  });
  return {
    index: ind,
    temp: cache[ind]
  };
};

var executeCallback = function executeCallback(el) {
  var temp = findTempByElement(el).temp;

  if (!temp) {
    return;
  }

  if (temp.cb && typeof temp.cb === "function") {
    temp.cb();
  }
};

var updateCallback = function updateCallback(el, cb) {
  if (cb && typeof cb === "function") {
    var temp = findTempByElement(el).temp;

    if (temp) {
      temp.cb = cb;
    }
  }
};

var start = function start(el, binding, vnode, oldVnode) {
  var evtname = detectEvent(binding);

  if (!evtname) {
    return;
  }

  var temp = setOutside(evtname, el, binding, vnode, oldVnode);
  console.info("instart", temp);
  cache.push(temp);
};

var end = function end(el) {
  var _findTempByElement = findTempByElement(el),
      temp = _findTempByElement.temp,
      index = _findTempByElement.index;

  var cancel = temp.cancel;

  if (typeof cancel === "function") {
    cancel();
  } // delete temp.cache;


  cache.splice(index, 1);
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
    updateCallback(el, binding.value);
  },
  componentUpdated: function componentUpdated(el, binding, vnode, oldVnode) {// console.info("componentUpdated", el, binding, vnode, oldVnode);
  },
  unbind: function unbind(el, binding, vnode, oldVnode) {
    // console.info("unbind", el, binding, vnode, oldVnode);
    end(el);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92LW91dHNpZGUtZXZlbnRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly92LW91dHNpZGUtZXZlbnRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Ytb3V0c2lkZS1ldmVudHMvLi9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vdi1vdXRzaWRlLWV2ZW50cy8uL2luZGV4LmpzIl0sIm5hbWVzIjpbImV4aXN0c1dpbmRvdyIsInJlcyIsIndpbmRvdyIsImV4aXN0c0NhbGxiYWNrIiwiYmluZGluZyIsInZhbHVlIiwibWFrZVJlbW92ZUV2ZW50IiwiZXZlbnRuYW1lIiwicmVtb3ZlRXZlbnQiLCJoYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1ha2VBZGRFdmVudCIsImFkZEV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1ha2VIYW5kbGVyIiwiZWwiLCJldnQiLCJ0Z3RfYXJlYSIsImxlbmd0aCIsImNsaWNrZWQiLCJwYXRoIiwiZXhpc3RzIiwiaSIsInAiLCJBcnJheSIsImoiLCJlbG0iLCIkZWwiLCJleGVjdXRlQ2FsbGJhY2siLCJzZXRPdXRzaWRlIiwiZXZ0bmFtZSIsInZub2RlIiwib2xkVm5vZGUiLCJjYiIsImNsaWNrSGFuZGxlciIsIndvcmtpbmciLCJyZXNwb25zZSIsImNhbmNlbCIsImNhY2hlIiwiZmluZFRlbXBCeUVsZW1lbnQiLCJpbmQiLCJmaW5kSW5kZXgiLCJpbmRleCIsInRlbXAiLCJ1cGRhdGVDYWxsYmFjayIsInN0YXJ0IiwiZGV0ZWN0RXZlbnQiLCJjb25zb2xlIiwiaW5mbyIsInB1c2giLCJlbmQiLCJzcGxpY2UiLCJuYW1lIiwiYXJyIiwic3BsaXQiLCJwb3AiLCJldnRzIiwiZmlsdGVyIiwiYmluZCIsImFyZ3VtZW50cyIsImluc2VydGVkIiwidXBkYXRlIiwiY29tcG9uZW50VXBkYXRlZCIsInVuYmluZCIsImRpcmVjdGl2ZSJdLCJtYXBwaW5ncyI6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QztBQUVELEdBWFk7QUFZYjZCLFFBQU0sRUFBRSxnQkFBUzlDLEVBQVQsRUFBYVgsT0FBYixFQUFzQjJCLEtBQXRCLEVBQTZCQyxRQUE3QixFQUFzQztBQUM1QztBQUNBWSxrQkFBYyxDQUFDN0IsRUFBRCxFQUFLWCxPQUFPLENBQUNDLEtBQWIsQ0FBZDtBQUVELEdBaEJZO0FBaUJieUQsa0JBQWdCLEVBQUUsMEJBQVMvQyxFQUFULEVBQWFYLE9BQWIsRUFBc0IyQixLQUF0QixFQUE2QkMsUUFBN0IsRUFBc0MsQ0FDdEQ7QUFDRCxHQW5CWTtBQW9CYitCLFFBQU0sRUFBRSxnQkFBU2hELEVBQVQsRUFBYVgsT0FBYixFQUFzQjJCLEtBQXRCLEVBQTZCQyxRQUE3QixFQUFzQztBQUM1QztBQUNBa0IsT0FBRyxDQUFDbkMsRUFBRCxDQUFIO0FBQ0Q7QUF2QlksQ0FBZixFOzs7Ozs7Ozs7Ozs7QUMzTUE7QUFBQTtBQUFBO0FBRWU7QUFDYmlELFdBQVMsRUFBRUEscURBQVNBO0FBRFAsQ0FBZixFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInYtb3V0c2lkZS1ldmVudHNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widi1vdXRzaWRlLWV2ZW50c1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImNvbnN0IGV4aXN0c1dpbmRvdyA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHJlcyA9IHR5cGVvZiB3aW5kb3c7XG4gIGlmKHJlcyA9PT0gXCJ1bmRlZmluZWRcIil7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbmNvbnN0IGV4aXN0c0NhbGxiYWNrID0gZnVuY3Rpb24oYmluZGluZykge1xuICBpZighYmluZGluZyl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKGJpbmRpbmcudmFsdWUgJiYgdHlwZW9mIGJpbmRpbmcudmFsdWUgPT09IFwiZnVuY3Rpb25cIil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgbWFrZVJlbW92ZUV2ZW50ID0gZnVuY3Rpb24oZXZlbnRuYW1lKXtcbiAgY29uc3QgcmVtb3ZlRXZlbnQgPSBmdW5jdGlvbihoYW5kbGVyKXtcbiAgICBpZihleGlzdHNXaW5kb3coKSl7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudG5hbWUsIGhhbmRsZXIpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHJlbW92ZUV2ZW50O1xufTtcblxuY29uc3QgbWFrZUFkZEV2ZW50ID0gZnVuY3Rpb24oZXZlbnRuYW1lKXtcbiAgY29uc3QgYWRkRXZlbnQgPSBmdW5jdGlvbihoYW5kbGVyKXtcbiAgICBpZihleGlzdHNXaW5kb3coKSl7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudG5hbWUsIGhhbmRsZXIpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGFkZEV2ZW50O1xufTtcblxuY29uc3QgbWFrZUhhbmRsZXIgPSBmdW5jdGlvbihlbCwgcmVtb3ZlRXZlbnQpe1xuXG4gIGNvbnN0IGhhbmRsZXIgPSBmdW5jdGlvbihldnQpe1xuICAgIGNvbnN0IHRndF9hcmVhID0gZWw7XG4gICAgaWYoIXRndF9hcmVhIHx8IHRndF9hcmVhLmxlbmd0aCA9PT0gMCl7XG4gICAgICByZW1vdmVFdmVudChoYW5kbGVyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY2xpY2tlZCA9IGV2dC5wYXRoO1xuICAgIGxldCBleGlzdHMgPSBmYWxzZTtcbiAgICAvLyBsZXQgY291bnRlciA9IDA7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGNsaWNrZWQubGVuZ3RoOyBpKyspe1xuICAgICAgLy8gY291bnRlcisrO1xuICAgICAgY29uc3QgcCA9IGNsaWNrZWRbaV07XG4gICAgICBpZih0Z3RfYXJlYSA9PT0gcCl7XG4gICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZih0Z3RfYXJlYSBpbnN0YW5jZW9mIEFycmF5KXtcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRndF9hcmVhLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICAvLyBjb3VudGVyKys7XG4gICAgICAgICAgY29uc3QgZWxtID0gdGd0X2FyZWFbal07XG4gICAgICAgICAgaWYoZWxtID09PSBwKXtcbiAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoZWxtLiRlbCA9PT0gcCl7XG4gICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKGV4aXN0cyl7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgfVxuICAgIGlmKCFleGlzdHMpe1xuICAgICAgLy8gY2IoKTtcbiAgICAgIGV4ZWN1dGVDYWxsYmFjayhlbCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBoYW5kbGVyO1xuXG59O1xuXG5jb25zdCBzZXRPdXRzaWRlID0gZnVuY3Rpb24oZXZ0bmFtZSwgZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSl7XG5cbiAgaWYoIWV4aXN0c0NhbGxiYWNrKGJpbmRpbmcpKXtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBjYiA9IGJpbmRpbmcudmFsdWU7XG5cbiAgY29uc3QgcmVtb3ZlRXZlbnQgPSBtYWtlUmVtb3ZlRXZlbnQoZXZ0bmFtZSk7XG4gIGNvbnN0IGFkZEV2ZW50ID0gbWFrZUFkZEV2ZW50KGV2dG5hbWUpO1xuXG4gIGNvbnN0IGNsaWNrSGFuZGxlciA9IG1ha2VIYW5kbGVyKGVsLCByZW1vdmVFdmVudCk7XG5cbiAgbGV0IHdvcmtpbmcgPSBmYWxzZTtcblxuICBjb25zdCByZXNwb25zZSA9IHtcbiAgICBldnRuYW1lOiBldnRuYW1lLFxuICAgIGVsOiBlbCxcbiAgICBjYW5jZWw6IGZ1bmN0aW9uKCl7XG4gICAgICByZW1vdmVFdmVudChjbGlja0hhbmRsZXIpO1xuICAgICAgd29ya2luZyA9IGZhbHNlO1xuICAgIH0sXG4gICAgZ2V0IHdvcmtpbmcoKXtcbiAgICAgIHJldHVybiB3b3JraW5nO1xuICAgIH0sXG4gICAgY2I6IGNiXG4gIH07XG5cbiAgaWYoIWVsIHx8ICFjYil7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnQoY2xpY2tIYW5kbGVyKTtcbiAgYWRkRXZlbnQoY2xpY2tIYW5kbGVyKTtcbiAgd29ya2luZyA9IHRydWU7XG4gIHJldHVybiByZXNwb25zZTtcblxufTtcblxuY29uc3QgY2FjaGUgPSBbXTtcblxuY29uc3QgZmluZFRlbXBCeUVsZW1lbnQgPSBmdW5jdGlvbihlbCl7XG4gIGNvbnN0IGluZCA9IGNhY2hlLmZpbmRJbmRleChlbG0gPT4gZWxtLmVsID09PSBlbCk7XG4gIHJldHVybiB7XG4gICAgaW5kZXg6IGluZCxcbiAgICB0ZW1wOiBjYWNoZVtpbmRdXG4gIH07XG59O1xuXG5jb25zdCBleGVjdXRlQ2FsbGJhY2sgPSBmdW5jdGlvbihlbCl7XG4gIGNvbnN0IHRlbXAgPSBmaW5kVGVtcEJ5RWxlbWVudChlbCkudGVtcDtcbiAgaWYoIXRlbXApe1xuICAgIHJldHVybjtcbiAgfVxuICBpZih0ZW1wLmNiICYmIHR5cGVvZiB0ZW1wLmNiID09PSBcImZ1bmN0aW9uXCIpe1xuICAgIHRlbXAuY2IoKTtcbiAgfVxufTtcblxuY29uc3QgdXBkYXRlQ2FsbGJhY2sgPSBmdW5jdGlvbihlbCwgY2Ipe1xuICBpZihjYiAmJiB0eXBlb2YgY2IgPT09IFwiZnVuY3Rpb25cIil7XG4gICAgY29uc3QgdGVtcCA9IGZpbmRUZW1wQnlFbGVtZW50KGVsKS50ZW1wO1xuICAgIGlmKHRlbXApe1xuICAgICAgdGVtcC5jYiA9IGNiO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3Qgc3RhcnQgPSBmdW5jdGlvbihlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKXtcblxuICBjb25zdCBldnRuYW1lID0gZGV0ZWN0RXZlbnQoYmluZGluZyk7XG4gIGlmKCFldnRuYW1lKXtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB0ZW1wID0gc2V0T3V0c2lkZShldnRuYW1lLCBlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKTtcbiAgY29uc29sZS5pbmZvKFwiaW5zdGFydFwiLCB0ZW1wKTtcbiAgY2FjaGUucHVzaCh0ZW1wKTtcbn07XG5cbmNvbnN0IGVuZCA9IGZ1bmN0aW9uKGVsKXtcbiAgY29uc3QgeyB0ZW1wLCBpbmRleCB9ID0gZmluZFRlbXBCeUVsZW1lbnQoZWwpXG4gIGNvbnN0IGNhbmNlbCA9IHRlbXAuY2FuY2VsO1xuICBpZih0eXBlb2YgY2FuY2VsID09PSBcImZ1bmN0aW9uXCIpe1xuICAgIGNhbmNlbCgpO1xuICB9XG4gIC8vIGRlbGV0ZSB0ZW1wLmNhY2hlO1xuICBjYWNoZS5zcGxpY2UoaW5kZXgsIDEpO1xufTtcblxuY29uc3QgZGV0ZWN0RXZlbnQgPSBmdW5jdGlvbihiaW5kaW5nKXtcblxuICBpZighYmluZGluZyl7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgbmFtZSA9IGJpbmRpbmcubmFtZTtcbiAgY29uc3QgYXJyID0gbmFtZS5zcGxpdChcIi1cIik7XG4gIGNvbnN0IGV2dG5hbWUgPSBhcnIucG9wKCk7XG4gIGNvbnN0IGV2dHMgPSBbXG4gICAgXCJjbGlja1wiLFxuICAgIFwibW91c2Vkb3duXCIsXG4gICAgXCJtb3VzZXVwXCIsXG4gICAgXCJtb3VzZWVudGVyXCIsXG4gICAgXCJtb3VzZW92ZXJcIixcbiAgICBcIm1vdXNlbW92ZVwiLFxuICAgIFwidG91Y2hzdGFydFwiLFxuICAgIFwidG91Y2hlbmRcIlxuICBdO1xuXG4gIGNvbnN0IGV4aXN0cyA9IGV2dHMuZmlsdGVyKGVsbSA9PiBlbG0gPT09IGV2dG5hbWUpO1xuICBpZihleGlzdHMpe1xuICAgIHJldHVybiBldnRuYW1lO1xuICB9XG4gIHJldHVybjtcbn07XG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGJpbmQ6IGZ1bmN0aW9uKGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpe1xuICAgIGNvbnNvbGUuaW5mbyh0aGlzLCBhcmd1bWVudHMpXG4gICAgLy8gY29uc29sZS5pbmZvKFwiYmluZFwiLCBlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKTtcblxuICAgIHN0YXJ0KGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpO1xuXG4gIH0sXG4gIGluc2VydGVkOiBmdW5jdGlvbihlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKXtcbiAgICAvLyBjb25zb2xlLmluZm8oXCJpbnNlcnRlZFwiLCBlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKTtcblxuICB9LFxuICB1cGRhdGU6IGZ1bmN0aW9uKGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpe1xuICAgIC8vIGNvbnNvbGUuaW5mbyhcInVwZGF0ZVwiLCBlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKTtcbiAgICB1cGRhdGVDYWxsYmFjayhlbCwgYmluZGluZy52YWx1ZSk7XG5cbiAgfSxcbiAgY29tcG9uZW50VXBkYXRlZDogZnVuY3Rpb24oZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSl7XG4gICAgLy8gY29uc29sZS5pbmZvKFwiY29tcG9uZW50VXBkYXRlZFwiLCBlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKTtcbiAgfSxcbiAgdW5iaW5kOiBmdW5jdGlvbihlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKXtcbiAgICAvLyBjb25zb2xlLmluZm8oXCJ1bmJpbmRcIiwgZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSk7XG4gICAgZW5kKGVsKTtcbiAgfSxcbn07IiwiaW1wb3J0IGRpcmVjdGl2ZSBmcm9tIFwiLi9kaXJlY3RpdmUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkaXJlY3RpdmU6IGRpcmVjdGl2ZVxufTsiXSwic291cmNlUm9vdCI6IiJ9