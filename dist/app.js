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
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/directive.js":
/*!**************************!*\
  !*** ./src/directive.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
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

var existsInParents = function existsInParents(evt, tgt_area) {
  var array = evt.path || evt.composedPath && evt.composedPath();
  console.info(evt);
  var exists = false;

  if (array && array.length) {
    // let counter = 0;
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
  } else {
    var parent = evt.target.parentElement;

    while (!exists) {
      if (parent === tgt_area) {
        exists = true;
        break;
      }

      parent = parent.parentElement;

      if (!parent) {
        break;
      } // const parent = 

    }
  }

  return exists;
};

var makeHandler = function makeHandler(el, removeEvent) {
  var handler = function handler(evt) {
    var tgt_area = el;

    if (!tgt_area || tgt_area.length === 0) {
      removeEvent(handler);
      return;
    }

    var exists = existsInParents(evt, tgt_area);

    if (!exists) {
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
  var evts = ["click", "mousedown", "mouseup", "mouseover", "mousemove", "touchstart", "touchend" // "mouseleave",
  // "mouseout",
  // "mouseenter",
  ];
  var exists = evts.filter(function (elm) {
    return elm === evtname;
  });

  if (exists) {
    return evtname;
  }

  return;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "directive": () => /* binding */ directive,
/* harmony export */   "setOutsideEvent": () => /* binding */ setOutsideEvent
/* harmony export */ });
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive.js */ "./src/directive.js");
 // export default  directive;

var directive = _directive_js__WEBPACK_IMPORTED_MODULE_0__.default;
var setOutsideEvent = function setOutsideEvent(type) {
  var default_type = "click";
  var str = "outside-";

  if (!type) {
    str += default_type;
  } else {
    str += type;
  }

  return {
    install: function install(Vue, options) {
      Vue.directive(str, directive);
    }
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.js");
/******/ })()
.default;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92LW91dHNpZGUtZXZlbnRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly92LW91dHNpZGUtZXZlbnRzLy4vc3JjL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly92LW91dHNpZGUtZXZlbnRzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Ytb3V0c2lkZS1ldmVudHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdi1vdXRzaWRlLWV2ZW50cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdi1vdXRzaWRlLWV2ZW50cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Ytb3V0c2lkZS1ldmVudHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly92LW91dHNpZGUtZXZlbnRzL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJleGlzdHNXaW5kb3ciLCJyZXMiLCJ3aW5kb3ciLCJleGlzdHNDYWxsYmFjayIsImJpbmRpbmciLCJ2YWx1ZSIsIm1ha2VSZW1vdmVFdmVudCIsImV2ZW50bmFtZSIsInJlbW92ZUV2ZW50IiwiaGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYWtlQWRkRXZlbnQiLCJhZGRFdmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJleGlzdHNJblBhcmVudHMiLCJldnQiLCJ0Z3RfYXJlYSIsImFycmF5IiwicGF0aCIsImNvbXBvc2VkUGF0aCIsImNvbnNvbGUiLCJpbmZvIiwiZXhpc3RzIiwibGVuZ3RoIiwiaSIsInAiLCJBcnJheSIsImoiLCJlbG0iLCIkZWwiLCJwYXJlbnQiLCJ0YXJnZXQiLCJwYXJlbnRFbGVtZW50IiwibWFrZUhhbmRsZXIiLCJlbCIsImV4ZWN1dGVDYWxsYmFjayIsInNldE91dHNpZGUiLCJldnRuYW1lIiwidm5vZGUiLCJvbGRWbm9kZSIsImNiIiwiY2xpY2tIYW5kbGVyIiwid29ya2luZyIsInJlc3BvbnNlIiwiY2FuY2VsIiwiY2FjaGUiLCJmaW5kVGVtcEJ5RWxlbWVudCIsImluZCIsImZpbmRJbmRleCIsImluZGV4IiwidGVtcCIsInVwZGF0ZUNhbGxiYWNrIiwic3RhcnQiLCJkZXRlY3RFdmVudCIsInB1c2giLCJlbmQiLCJzcGxpY2UiLCJuYW1lIiwiYXJyIiwic3BsaXQiLCJwb3AiLCJldnRzIiwiZmlsdGVyIiwiYmluZCIsImluc2VydGVkIiwidXBkYXRlIiwiY29tcG9uZW50VXBkYXRlZCIsInVuYmluZCIsImRpcmVjdGl2ZSIsImQiLCJzZXRPdXRzaWRlRXZlbnQiLCJ0eXBlIiwiZGVmYXVsdF90eXBlIiwic3RyIiwiaW5zdGFsbCIsIlZ1ZSIsIm9wdGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7O0FDVkEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBVTtBQUM3QixNQUFNQyxHQUFHLFVBQVVDLE1BQVYseUNBQVVBLE1BQVYsQ0FBVDs7QUFDQSxNQUFHRCxHQUFHLEtBQUssV0FBWCxFQUF1QjtBQUNyQixXQUFPLEtBQVA7QUFDRDs7QUFDRCxTQUFPLElBQVA7QUFDRCxDQU5EOztBQU9BLElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBU0MsT0FBVCxFQUFrQjtBQUN2QyxNQUFHLENBQUNBLE9BQUosRUFBWTtBQUNWLFdBQU8sS0FBUDtBQUNEOztBQUNELE1BQUdBLE9BQU8sQ0FBQ0MsS0FBUixJQUFpQixPQUFPRCxPQUFPLENBQUNDLEtBQWYsS0FBeUIsVUFBN0MsRUFBd0Q7QUFDdEQsV0FBTyxJQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxLQUFQO0FBQ0QsQ0FSRDs7QUFVQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQVNDLFNBQVQsRUFBbUI7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Q1BFLE9BQUcsSUFBSUQsWUFBUDtBQUNELEdBRkQsTUFFSztBQUNIQyxPQUFHLElBQUlGLElBQVA7QUFDRDs7QUFDRCxTQUFPO0FBQ0xHLFdBQU8sRUFBRSxpQkFBU0MsR0FBVCxFQUFjQyxPQUFkLEVBQXNCO0FBQzdCRCxTQUFHLENBQUNQLFNBQUosQ0FBY0ssR0FBZCxFQUFtQkwsU0FBbkI7QUFDRDtBQUhJLEdBQVA7QUFLRCxDQWJNLEM7Ozs7OztVQ05QO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ2LW91dHNpZGUtZXZlbnRzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInYtb3V0c2lkZS1ldmVudHNcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJjb25zdCBleGlzdHNXaW5kb3cgPSBmdW5jdGlvbigpe1xuICBjb25zdCByZXMgPSB0eXBlb2Ygd2luZG93O1xuICBpZihyZXMgPT09IFwidW5kZWZpbmVkXCIpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5jb25zdCBleGlzdHNDYWxsYmFjayA9IGZ1bmN0aW9uKGJpbmRpbmcpIHtcbiAgaWYoIWJpbmRpbmcpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihiaW5kaW5nLnZhbHVlICYmIHR5cGVvZiBiaW5kaW5nLnZhbHVlID09PSBcImZ1bmN0aW9uXCIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IG1ha2VSZW1vdmVFdmVudCA9IGZ1bmN0aW9uKGV2ZW50bmFtZSl7XG4gIGNvbnN0IHJlbW92ZUV2ZW50ID0gZnVuY3Rpb24oaGFuZGxlcil7XG4gICAgaWYoZXhpc3RzV2luZG93KCkpe1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRuYW1lLCBoYW5kbGVyKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiByZW1vdmVFdmVudDtcbn07XG5cbmNvbnN0IG1ha2VBZGRFdmVudCA9IGZ1bmN0aW9uKGV2ZW50bmFtZSl7XG4gIGNvbnN0IGFkZEV2ZW50ID0gZnVuY3Rpb24oaGFuZGxlcil7XG4gICAgaWYoZXhpc3RzV2luZG93KCkpe1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRuYW1lLCBoYW5kbGVyKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBhZGRFdmVudDtcbn07XG5cbmNvbnN0IGV4aXN0c0luUGFyZW50cyA9IGZ1bmN0aW9uKGV2dCwgdGd0X2FyZWEpe1xuXG4gIGNvbnN0IGFycmF5ID0gZXZ0LnBhdGggfHwgKGV2dC5jb21wb3NlZFBhdGggJiYgZXZ0LmNvbXBvc2VkUGF0aCgpKTtcblxuICBjb25zb2xlLmluZm8oZXZ0KTtcblxuICBsZXQgZXhpc3RzID0gZmFsc2U7XG4gIGlmKGFycmF5ICYmIGFycmF5Lmxlbmd0aCl7XG4gICAgLy8gbGV0IGNvdW50ZXIgPSAwO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAvLyBjb3VudGVyKys7XG4gICAgICBjb25zdCBwID0gYXJyYXlbaV07XG4gICAgICBpZih0Z3RfYXJlYSA9PT0gcCl7XG4gICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZih0Z3RfYXJlYSBpbnN0YW5jZW9mIEFycmF5KXtcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRndF9hcmVhLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICAvLyBjb3VudGVyKys7XG4gICAgICAgICAgY29uc3QgZWxtID0gdGd0X2FyZWFbal07XG4gICAgICAgICAgaWYoZWxtID09PSBwKXtcbiAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoZWxtLiRlbCA9PT0gcCl7XG4gICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihleGlzdHMpe1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1lbHNle1xuICAgIGxldCBwYXJlbnQgPSBldnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgd2hpbGUoIWV4aXN0cyl7XG4gICAgICBpZihwYXJlbnQgPT09IHRndF9hcmVhKXtcbiAgICAgICAgZXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcbiAgICAgIGlmKCFwYXJlbnQpe1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIC8vIGNvbnN0IHBhcmVudCA9IFxuXG4gICAgfVxuXG4gIH1cbiAgcmV0dXJuIGV4aXN0cztcbn07XG5cbmNvbnN0IG1ha2VIYW5kbGVyID0gZnVuY3Rpb24oZWwsIHJlbW92ZUV2ZW50KXtcblxuICBjb25zdCBoYW5kbGVyID0gZnVuY3Rpb24oZXZ0KXtcbiAgICBjb25zdCB0Z3RfYXJlYSA9IGVsO1xuICAgIGlmKCF0Z3RfYXJlYSB8fCB0Z3RfYXJlYS5sZW5ndGggPT09IDApe1xuICAgICAgcmVtb3ZlRXZlbnQoaGFuZGxlcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGV4aXN0cyA9IGV4aXN0c0luUGFyZW50cyhldnQsIHRndF9hcmVhKTtcblxuICAgIGlmKCFleGlzdHMpe1xuICAgICAgZXhlY3V0ZUNhbGxiYWNrKGVsKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGhhbmRsZXI7XG5cbn07XG5cbmNvbnN0IHNldE91dHNpZGUgPSBmdW5jdGlvbihldnRuYW1lLCBlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKXtcblxuICBpZighZXhpc3RzQ2FsbGJhY2soYmluZGluZykpe1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGNiID0gYmluZGluZy52YWx1ZTtcblxuICBjb25zdCByZW1vdmVFdmVudCA9IG1ha2VSZW1vdmVFdmVudChldnRuYW1lKTtcbiAgY29uc3QgYWRkRXZlbnQgPSBtYWtlQWRkRXZlbnQoZXZ0bmFtZSk7XG5cbiAgY29uc3QgY2xpY2tIYW5kbGVyID0gbWFrZUhhbmRsZXIoZWwsIHJlbW92ZUV2ZW50KTtcblxuICBsZXQgd29ya2luZyA9IGZhbHNlO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0ge1xuICAgIGV2dG5hbWU6IGV2dG5hbWUsXG4gICAgZWw6IGVsLFxuICAgIGNhbmNlbDogZnVuY3Rpb24oKXtcbiAgICAgIHJlbW92ZUV2ZW50KGNsaWNrSGFuZGxlcik7XG4gICAgICB3b3JraW5nID0gZmFsc2U7XG4gICAgfSxcbiAgICBnZXQgd29ya2luZygpe1xuICAgICAgcmV0dXJuIHdvcmtpbmc7XG4gICAgfSxcbiAgICBjYjogY2JcbiAgfTtcblxuICBpZighZWwgfHwgIWNiKXtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICByZW1vdmVFdmVudChjbGlja0hhbmRsZXIpO1xuICBhZGRFdmVudChjbGlja0hhbmRsZXIpO1xuICB3b3JraW5nID0gdHJ1ZTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xuXG59O1xuXG5jb25zdCBjYWNoZSA9IFtdO1xuXG5jb25zdCBmaW5kVGVtcEJ5RWxlbWVudCA9IGZ1bmN0aW9uKGVsKXtcbiAgY29uc3QgaW5kID0gY2FjaGUuZmluZEluZGV4KGVsbSA9PiBlbG0uZWwgPT09IGVsKTtcbiAgcmV0dXJuIHtcbiAgICBpbmRleDogaW5kLFxuICAgIHRlbXA6IGNhY2hlW2luZF1cbiAgfTtcbn07XG5cbmNvbnN0IGV4ZWN1dGVDYWxsYmFjayA9IGZ1bmN0aW9uKGVsKXtcbiAgY29uc3QgdGVtcCA9IGZpbmRUZW1wQnlFbGVtZW50KGVsKS50ZW1wO1xuICBpZighdGVtcCl7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmKHRlbXAuY2IgJiYgdHlwZW9mIHRlbXAuY2IgPT09IFwiZnVuY3Rpb25cIil7XG4gICAgdGVtcC5jYigpO1xuICB9XG59O1xuXG5jb25zdCB1cGRhdGVDYWxsYmFjayA9IGZ1bmN0aW9uKGVsLCBjYil7XG4gIGlmKGNiICYmIHR5cGVvZiBjYiA9PT0gXCJmdW5jdGlvblwiKXtcbiAgICBjb25zdCB0ZW1wID0gZmluZFRlbXBCeUVsZW1lbnQoZWwpLnRlbXA7XG4gICAgaWYodGVtcCl7XG4gICAgICB0ZW1wLmNiID0gY2I7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBzdGFydCA9IGZ1bmN0aW9uKGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpe1xuICBjb25zdCBldnRuYW1lID0gZGV0ZWN0RXZlbnQoYmluZGluZyk7XG4gIGlmKCFldnRuYW1lKXtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgdGVtcCA9IHNldE91dHNpZGUoZXZ0bmFtZSwgZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSk7XG4gIGNhY2hlLnB1c2godGVtcCk7XG59O1xuXG5jb25zdCBlbmQgPSBmdW5jdGlvbihlbCl7XG4gIGNvbnN0IHsgdGVtcCwgaW5kZXggfSA9IGZpbmRUZW1wQnlFbGVtZW50KGVsKVxuICBjb25zdCBjYW5jZWwgPSB0ZW1wLmNhbmNlbDtcbiAgaWYodHlwZW9mIGNhbmNlbCA9PT0gXCJmdW5jdGlvblwiKXtcbiAgICBjYW5jZWwoKTtcbiAgfVxuICBjYWNoZS5zcGxpY2UoaW5kZXgsIDEpO1xufTtcblxuY29uc3QgZGV0ZWN0RXZlbnQgPSBmdW5jdGlvbihiaW5kaW5nKXtcblxuICBpZighYmluZGluZyl7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgbmFtZSA9IGJpbmRpbmcubmFtZTtcbiAgY29uc3QgYXJyID0gbmFtZS5zcGxpdChcIi1cIik7XG4gIGNvbnN0IGV2dG5hbWUgPSBhcnIucG9wKCk7XG4gIGNvbnN0IGV2dHMgPSBbXG4gICAgXCJjbGlja1wiLFxuICAgIFwibW91c2Vkb3duXCIsXG4gICAgXCJtb3VzZXVwXCIsXG4gICAgXCJtb3VzZW92ZXJcIixcbiAgICBcIm1vdXNlbW92ZVwiLFxuICAgIFwidG91Y2hzdGFydFwiLFxuICAgIFwidG91Y2hlbmRcIixcbiAgICAvLyBcIm1vdXNlbGVhdmVcIixcbiAgICAvLyBcIm1vdXNlb3V0XCIsXG4gICAgLy8gXCJtb3VzZWVudGVyXCIsXG4gIF07XG5cbiAgY29uc3QgZXhpc3RzID0gZXZ0cy5maWx0ZXIoZWxtID0+IGVsbSA9PT0gZXZ0bmFtZSk7XG4gIGlmKGV4aXN0cyl7XG4gICAgcmV0dXJuIGV2dG5hbWU7XG4gIH1cbiAgcmV0dXJuO1xufTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYmluZDogZnVuY3Rpb24oZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSl7XG4gICAgLy8gY29uc29sZS5pbmZvKHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgLy8gY29uc29sZS5pbmZvKFwiYmluZFwiLCBlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKTtcblxuICAgIHN0YXJ0KGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpO1xuXG4gIH0sXG4gIGluc2VydGVkOiBmdW5jdGlvbihlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKXtcbiAgICAvLyBjb25zb2xlLmluZm8oXCJpbnNlcnRlZFwiLCBlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKTtcblxuICB9LFxuICB1cGRhdGU6IGZ1bmN0aW9uKGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpe1xuICAgIC8vIGNvbnNvbGUuaW5mbyhcInVwZGF0ZVwiLCBlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKTtcbiAgICB1cGRhdGVDYWxsYmFjayhlbCwgYmluZGluZy52YWx1ZSk7XG5cbiAgfSxcbiAgY29tcG9uZW50VXBkYXRlZDogZnVuY3Rpb24oZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSl7XG4gICAgLy8gY29uc29sZS5pbmZvKFwiY29tcG9uZW50VXBkYXRlZFwiLCBlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKTtcbiAgfSxcbiAgdW5iaW5kOiBmdW5jdGlvbihlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKXtcbiAgICAvLyBjb25zb2xlLmluZm8oXCJ1bmJpbmRcIiwgZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSk7XG4gICAgZW5kKGVsKTtcbiAgfSxcbn07IiwiaW1wb3J0IGQgZnJvbSBcIi4vZGlyZWN0aXZlLmpzXCI7XG5cbi8vIGV4cG9ydCBkZWZhdWx0ICBkaXJlY3RpdmU7XG5cbmV4cG9ydCBjb25zdCBkaXJlY3RpdmUgPSBkO1xuXG5leHBvcnQgY29uc3Qgc2V0T3V0c2lkZUV2ZW50ID0gZnVuY3Rpb24odHlwZSl7XG4gIGNvbnN0IGRlZmF1bHRfdHlwZSA9IFwiY2xpY2tcIjtcbiAgbGV0IHN0ciA9IFwib3V0c2lkZS1cIjtcbiAgaWYoIXR5cGUpe1xuICAgIHN0ciArPSBkZWZhdWx0X3R5cGU7XG4gIH1lbHNle1xuICAgIHN0ciArPSB0eXBlO1xuICB9XG4gIHJldHVybiB7XG4gICAgaW5zdGFsbCA6ZnVuY3Rpb24oVnVlLCBvcHRpb25zKXtcbiAgICAgIFZ1ZS5kaXJlY3RpdmUoc3RyLCBkaXJlY3RpdmUpO1xuICAgIH1cbiAgfTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9