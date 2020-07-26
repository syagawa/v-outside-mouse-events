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

/***/ "./src/directive.js":
/*!**************************!*\
  !*** ./src/directive.js ***!
  \**************************/
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

    var array = evt.path;
    var exists = false; // let counter = 0;

    for (var i = 0; i < array.length; i++) {
      // counter++;
      var p = array[i];

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
  cache.push(temp);
};

var end = function end(el) {
  var _findTempByElement = findTempByElement(el),
      temp = _findTempByElement.temp,
      index = _findTempByElement.index;

  var cancel = temp.cancel;

  if (typeof cancel === "function") {
    cancel();
  }

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
    // console.info(this, arguments);
    // console.info("bind", el, binding, vnode, oldVnode);
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: aaa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aaa", function() { return aaa; });
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive.js */ "./src/directive.js");
 // export default  directive;

var aaa = _directive_js__WEBPACK_IMPORTED_MODULE_0__["default"];

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92LW91dHNpZGUtZXZlbnRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly92LW91dHNpZGUtZXZlbnRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Ytb3V0c2lkZS1ldmVudHMvLi9zcmMvZGlyZWN0aXZlLmpzIiwid2VicGFjazovL3Ytb3V0c2lkZS1ldmVudHMvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiZXhpc3RzV2luZG93IiwicmVzIiwid2luZG93IiwiZXhpc3RzQ2FsbGJhY2siLCJiaW5kaW5nIiwidmFsdWUiLCJtYWtlUmVtb3ZlRXZlbnQiLCJldmVudG5hbWUiLCJyZW1vdmVFdmVudCIsImhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWFrZUFkZEV2ZW50IiwiYWRkRXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibWFrZUhhbmRsZXIiLCJlbCIsImV2dCIsInRndF9hcmVhIiwibGVuZ3RoIiwiYXJyYXkiLCJwYXRoIiwiZXhpc3RzIiwiaSIsInAiLCJBcnJheSIsImoiLCJlbG0iLCIkZWwiLCJleGVjdXRlQ2FsbGJhY2siLCJzZXRPdXRzaWRlIiwiZXZ0bmFtZSIsInZub2RlIiwib2xkVm5vZGUiLCJjYiIsImNsaWNrSGFuZGxlciIsIndvcmtpbmciLCJyZXNwb25zZSIsImNhbmNlbCIsImNhY2hlIiwiZmluZFRlbXBCeUVsZW1lbnQiLCJpbmQiLCJmaW5kSW5kZXgiLCJpbmRleCIsInRlbXAiLCJ1cGRhdGVDYWxsYmFjayIsInN0YXJ0IiwiZGV0ZWN0RXZlbnQiLCJwdXNoIiwiZW5kIiwic3BsaWNlIiwibmFtZSIsImFyciIsInNwbGl0IiwicG9wIiwiZXZ0cyIsImZpbHRlciIsImJpbmQiLCJpbnNlcnRlZCIsInVwZGF0ZSIsImNvbXBvbmVudFVwZGF0ZWQiLCJ1bmJpbmQiLCJhYWEiLCJkaXJlY3RpdmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtB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QU8sQ0FBQ0MsS0FBYixDQUFkO0FBRUQsR0FoQlk7QUFpQmJzRCxrQkFBZ0IsRUFBRSwwQkFBUzVDLEVBQVQsRUFBYVgsT0FBYixFQUFzQjJCLEtBQXRCLEVBQTZCQyxRQUE3QixFQUFzQyxDQUN0RDtBQUNELEdBbkJZO0FBb0JiNEIsUUFBTSxFQUFFLGdCQUFTN0MsRUFBVCxFQUFhWCxPQUFiLEVBQXNCMkIsS0FBdEIsRUFBNkJDLFFBQTdCLEVBQXNDO0FBQzVDO0FBQ0FnQixPQUFHLENBQUNqQyxFQUFELENBQUg7QUFDRDtBQXZCWSxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ3ZNQTtBQUFBO0FBQUE7Q0FFQTs7QUFFTyxJQUFNOEMsR0FBRyxHQUFHQyxxREFBWixDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInYtb3V0c2lkZS1ldmVudHNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widi1vdXRzaWRlLWV2ZW50c1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImNvbnN0IGV4aXN0c1dpbmRvdyA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHJlcyA9IHR5cGVvZiB3aW5kb3c7XG4gIGlmKHJlcyA9PT0gXCJ1bmRlZmluZWRcIil7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbmNvbnN0IGV4aXN0c0NhbGxiYWNrID0gZnVuY3Rpb24oYmluZGluZykge1xuICBpZighYmluZGluZyl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKGJpbmRpbmcudmFsdWUgJiYgdHlwZW9mIGJpbmRpbmcudmFsdWUgPT09IFwiZnVuY3Rpb25cIil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgbWFrZVJlbW92ZUV2ZW50ID0gZnVuY3Rpb24oZXZlbnRuYW1lKXtcbiAgY29uc3QgcmVtb3ZlRXZlbnQgPSBmdW5jdGlvbihoYW5kbGVyKXtcbiAgICBpZihleGlzdHNXaW5kb3coKSl7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudG5hbWUsIGhhbmRsZXIpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHJlbW92ZUV2ZW50O1xufTtcblxuY29uc3QgbWFrZUFkZEV2ZW50ID0gZnVuY3Rpb24oZXZlbnRuYW1lKXtcbiAgY29uc3QgYWRkRXZlbnQgPSBmdW5jdGlvbihoYW5kbGVyKXtcbiAgICBpZihleGlzdHNXaW5kb3coKSl7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudG5hbWUsIGhhbmRsZXIpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGFkZEV2ZW50O1xufTtcblxuY29uc3QgbWFrZUhhbmRsZXIgPSBmdW5jdGlvbihlbCwgcmVtb3ZlRXZlbnQpe1xuXG4gIGNvbnN0IGhhbmRsZXIgPSBmdW5jdGlvbihldnQpe1xuICAgIGNvbnN0IHRndF9hcmVhID0gZWw7XG4gICAgaWYoIXRndF9hcmVhIHx8IHRndF9hcmVhLmxlbmd0aCA9PT0gMCl7XG4gICAgICByZW1vdmVFdmVudChoYW5kbGVyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYXJyYXkgPSBldnQucGF0aDtcbiAgICBsZXQgZXhpc3RzID0gZmFsc2U7XG4gICAgLy8gbGV0IGNvdW50ZXIgPSAwO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAvLyBjb3VudGVyKys7XG4gICAgICBjb25zdCBwID0gYXJyYXlbaV07XG4gICAgICBpZih0Z3RfYXJlYSA9PT0gcCl7XG4gICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZih0Z3RfYXJlYSBpbnN0YW5jZW9mIEFycmF5KXtcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRndF9hcmVhLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICAvLyBjb3VudGVyKys7XG4gICAgICAgICAgY29uc3QgZWxtID0gdGd0X2FyZWFbal07XG4gICAgICAgICAgaWYoZWxtID09PSBwKXtcbiAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoZWxtLiRlbCA9PT0gcCl7XG4gICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKGV4aXN0cyl7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgfVxuICAgIGlmKCFleGlzdHMpe1xuICAgICAgLy8gY2IoKTtcbiAgICAgIGV4ZWN1dGVDYWxsYmFjayhlbCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBoYW5kbGVyO1xuXG59O1xuXG5jb25zdCBzZXRPdXRzaWRlID0gZnVuY3Rpb24oZXZ0bmFtZSwgZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSl7XG5cbiAgaWYoIWV4aXN0c0NhbGxiYWNrKGJpbmRpbmcpKXtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBjYiA9IGJpbmRpbmcudmFsdWU7XG5cbiAgY29uc3QgcmVtb3ZlRXZlbnQgPSBtYWtlUmVtb3ZlRXZlbnQoZXZ0bmFtZSk7XG4gIGNvbnN0IGFkZEV2ZW50ID0gbWFrZUFkZEV2ZW50KGV2dG5hbWUpO1xuXG4gIGNvbnN0IGNsaWNrSGFuZGxlciA9IG1ha2VIYW5kbGVyKGVsLCByZW1vdmVFdmVudCk7XG5cbiAgbGV0IHdvcmtpbmcgPSBmYWxzZTtcblxuICBjb25zdCByZXNwb25zZSA9IHtcbiAgICBldnRuYW1lOiBldnRuYW1lLFxuICAgIGVsOiBlbCxcbiAgICBjYW5jZWw6IGZ1bmN0aW9uKCl7XG4gICAgICByZW1vdmVFdmVudChjbGlja0hhbmRsZXIpO1xuICAgICAgd29ya2luZyA9IGZhbHNlO1xuICAgIH0sXG4gICAgZ2V0IHdvcmtpbmcoKXtcbiAgICAgIHJldHVybiB3b3JraW5nO1xuICAgIH0sXG4gICAgY2I6IGNiXG4gIH07XG5cbiAgaWYoIWVsIHx8ICFjYil7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnQoY2xpY2tIYW5kbGVyKTtcbiAgYWRkRXZlbnQoY2xpY2tIYW5kbGVyKTtcbiAgd29ya2luZyA9IHRydWU7XG4gIHJldHVybiByZXNwb25zZTtcblxufTtcblxuY29uc3QgY2FjaGUgPSBbXTtcblxuY29uc3QgZmluZFRlbXBCeUVsZW1lbnQgPSBmdW5jdGlvbihlbCl7XG4gIGNvbnN0IGluZCA9IGNhY2hlLmZpbmRJbmRleChlbG0gPT4gZWxtLmVsID09PSBlbCk7XG4gIHJldHVybiB7XG4gICAgaW5kZXg6IGluZCxcbiAgICB0ZW1wOiBjYWNoZVtpbmRdXG4gIH07XG59O1xuXG5jb25zdCBleGVjdXRlQ2FsbGJhY2sgPSBmdW5jdGlvbihlbCl7XG4gIGNvbnN0IHRlbXAgPSBmaW5kVGVtcEJ5RWxlbWVudChlbCkudGVtcDtcbiAgaWYoIXRlbXApe1xuICAgIHJldHVybjtcbiAgfVxuICBpZih0ZW1wLmNiICYmIHR5cGVvZiB0ZW1wLmNiID09PSBcImZ1bmN0aW9uXCIpe1xuICAgIHRlbXAuY2IoKTtcbiAgfVxufTtcblxuY29uc3QgdXBkYXRlQ2FsbGJhY2sgPSBmdW5jdGlvbihlbCwgY2Ipe1xuICBpZihjYiAmJiB0eXBlb2YgY2IgPT09IFwiZnVuY3Rpb25cIil7XG4gICAgY29uc3QgdGVtcCA9IGZpbmRUZW1wQnlFbGVtZW50KGVsKS50ZW1wO1xuICAgIGlmKHRlbXApe1xuICAgICAgdGVtcC5jYiA9IGNiO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3Qgc3RhcnQgPSBmdW5jdGlvbihlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKXtcbiAgY29uc3QgZXZ0bmFtZSA9IGRldGVjdEV2ZW50KGJpbmRpbmcpO1xuICBpZighZXZ0bmFtZSl7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHRlbXAgPSBzZXRPdXRzaWRlKGV2dG5hbWUsIGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpO1xuICBjYWNoZS5wdXNoKHRlbXApO1xufTtcblxuY29uc3QgZW5kID0gZnVuY3Rpb24oZWwpe1xuICBjb25zdCB7IHRlbXAsIGluZGV4IH0gPSBmaW5kVGVtcEJ5RWxlbWVudChlbClcbiAgY29uc3QgY2FuY2VsID0gdGVtcC5jYW5jZWw7XG4gIGlmKHR5cGVvZiBjYW5jZWwgPT09IFwiZnVuY3Rpb25cIil7XG4gICAgY2FuY2VsKCk7XG4gIH1cbiAgY2FjaGUuc3BsaWNlKGluZGV4LCAxKTtcbn07XG5cbmNvbnN0IGRldGVjdEV2ZW50ID0gZnVuY3Rpb24oYmluZGluZyl7XG5cbiAgaWYoIWJpbmRpbmcpe1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBiaW5kaW5nLm5hbWU7XG4gIGNvbnN0IGFyciA9IG5hbWUuc3BsaXQoXCItXCIpO1xuICBjb25zdCBldnRuYW1lID0gYXJyLnBvcCgpO1xuICBjb25zdCBldnRzID0gW1xuICAgIFwiY2xpY2tcIixcbiAgICBcIm1vdXNlZG93blwiLFxuICAgIFwibW91c2V1cFwiLFxuICAgIFwibW91c2VlbnRlclwiLFxuICAgIFwibW91c2VvdmVyXCIsXG4gICAgXCJtb3VzZW1vdmVcIixcbiAgICBcInRvdWNoc3RhcnRcIixcbiAgICBcInRvdWNoZW5kXCJcbiAgXTtcblxuICBjb25zdCBleGlzdHMgPSBldnRzLmZpbHRlcihlbG0gPT4gZWxtID09PSBldnRuYW1lKTtcbiAgaWYoZXhpc3RzKXtcbiAgICByZXR1cm4gZXZ0bmFtZTtcbiAgfVxuICByZXR1cm47XG59O1xuXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBiaW5kOiBmdW5jdGlvbihlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKXtcbiAgICAvLyBjb25zb2xlLmluZm8odGhpcywgYXJndW1lbnRzKTtcbiAgICAvLyBjb25zb2xlLmluZm8oXCJiaW5kXCIsIGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpO1xuXG4gICAgc3RhcnQoZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSk7XG5cbiAgfSxcbiAgaW5zZXJ0ZWQ6IGZ1bmN0aW9uKGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpe1xuICAgIC8vIGNvbnNvbGUuaW5mbyhcImluc2VydGVkXCIsIGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpO1xuXG4gIH0sXG4gIHVwZGF0ZTogZnVuY3Rpb24oZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSl7XG4gICAgLy8gY29uc29sZS5pbmZvKFwidXBkYXRlXCIsIGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpO1xuICAgIHVwZGF0ZUNhbGxiYWNrKGVsLCBiaW5kaW5nLnZhbHVlKTtcblxuICB9LFxuICBjb21wb25lbnRVcGRhdGVkOiBmdW5jdGlvbihlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKXtcbiAgICAvLyBjb25zb2xlLmluZm8oXCJjb21wb25lbnRVcGRhdGVkXCIsIGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpO1xuICB9LFxuICB1bmJpbmQ6IGZ1bmN0aW9uKGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpe1xuICAgIC8vIGNvbnNvbGUuaW5mbyhcInVuYmluZFwiLCBlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKTtcbiAgICBlbmQoZWwpO1xuICB9LFxufTsiLCJpbXBvcnQgZGlyZWN0aXZlIGZyb20gXCIuL2RpcmVjdGl2ZS5qc1wiO1xuXG4vLyBleHBvcnQgZGVmYXVsdCAgZGlyZWN0aXZlO1xuXG5leHBvcnQgY29uc3QgYWFhID0gZGlyZWN0aXZlOyJdLCJzb3VyY2VSb290IjoiIn0=