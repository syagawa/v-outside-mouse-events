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

var directive = _directive_js__WEBPACK_IMPORTED_MODULE_0__.default; // import directive from "./directive.js";
// export default directive;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92LW91dHNpZGUtZXZlbnRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly92LW91dHNpZGUtZXZlbnRzLy4vc3JjL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly92LW91dHNpZGUtZXZlbnRzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Ytb3V0c2lkZS1ldmVudHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdi1vdXRzaWRlLWV2ZW50cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdi1vdXRzaWRlLWV2ZW50cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Ytb3V0c2lkZS1ldmVudHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly92LW91dHNpZGUtZXZlbnRzL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJleGlzdHNXaW5kb3ciLCJyZXMiLCJ3aW5kb3ciLCJleGlzdHNDYWxsYmFjayIsImJpbmRpbmciLCJ2YWx1ZSIsIm1ha2VSZW1vdmVFdmVudCIsImV2ZW50bmFtZSIsInJlbW92ZUV2ZW50IiwiaGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYWtlQWRkRXZlbnQiLCJhZGRFdmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJleGlzdHNJblBhcmVudHMiLCJldnQiLCJ0Z3RfYXJlYSIsImFycmF5IiwicGF0aCIsImNvbXBvc2VkUGF0aCIsImNvbnNvbGUiLCJpbmZvIiwiZXhpc3RzIiwibGVuZ3RoIiwiaSIsInAiLCJBcnJheSIsImoiLCJlbG0iLCIkZWwiLCJwYXJlbnQiLCJ0YXJnZXQiLCJwYXJlbnRFbGVtZW50IiwibWFrZUhhbmRsZXIiLCJlbCIsImV4ZWN1dGVDYWxsYmFjayIsInNldE91dHNpZGUiLCJldnRuYW1lIiwidm5vZGUiLCJvbGRWbm9kZSIsImNiIiwiY2xpY2tIYW5kbGVyIiwid29ya2luZyIsInJlc3BvbnNlIiwiY2FuY2VsIiwiY2FjaGUiLCJmaW5kVGVtcEJ5RWxlbWVudCIsImluZCIsImZpbmRJbmRleCIsImluZGV4IiwidGVtcCIsInVwZGF0ZUNhbGxiYWNrIiwic3RhcnQiLCJkZXRlY3RFdmVudCIsInB1c2giLCJlbmQiLCJzcGxpY2UiLCJuYW1lIiwiYXJyIiwic3BsaXQiLCJwb3AiLCJldnRzIiwiZmlsdGVyIiwiYmluZCIsImluc2VydGVkIiwidXBkYXRlIiwiY29tcG9uZW50VXBkYXRlZCIsInVuYmluZCIsImRpcmVjdGl2ZSIsImQiLCJzZXRPdXRzaWRlRXZlbnQiLCJ0eXBlIiwiZGVmYXVsdF90eXBlIiwic3RyIiwiaW5zdGFsbCIsIlZ1ZSIsIm9wdGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7O0FDVkEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBVTtBQUM3QixNQUFNQyxHQUFHLFVBQVVDLE1BQVYseUNBQVVBLE1BQVYsQ0FBVDs7QUFDQSxNQUFHRCxHQUFHLEtBQUssV0FBWCxFQUF1QjtBQUNyQixXQUFPLEtBQVA7QUFDRDs7QUFDRCxTQUFPLElBQVA7QUFDRCxDQU5EOztBQU9BLElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBU0MsT0FBVCxFQUFrQjtBQUN2QyxNQUFHLENBQUNBLE9BQUosRUFBWTtBQUNWLFdBQU8sS0FBUDtBQUNEOztBQUNELE1BQUdBLE9BQU8sQ0FBQ0MsS0FBUixJQUFpQixPQUFPRCxPQUFPLENBQUNDLEtBQWYsS0FBeUIsVUFBN0MsRUFBd0Q7QUFDdEQsV0FBTyxJQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxLQUFQO0FBQ0QsQ0FSRDs7QUFVQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQVNDLFNBQVQsRUFBbUI7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LElBQUosRUFBUztBQUNQRSxPQUFHLElBQUlELFlBQVA7QUFDRCxHQUZELE1BRUs7QUFDSEMsT0FBRyxJQUFJRixJQUFQO0FBQ0Q7O0FBQ0QsU0FBTztBQUNMRyxXQUFPLEVBQUUsaUJBQVNDLEdBQVQsRUFBY0MsT0FBZCxFQUFzQjtBQUM3QkQsU0FBRyxDQUFDUCxTQUFKLENBQWNLLEdBQWQsRUFBbUJMLFNBQW5CO0FBQ0Q7QUFISSxHQUFQO0FBS0QsQ0FiTSxDOzs7Ozs7VUNUUDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widi1vdXRzaWRlLWV2ZW50c1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ2LW91dHNpZGUtZXZlbnRzXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiY29uc3QgZXhpc3RzV2luZG93ID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgcmVzID0gdHlwZW9mIHdpbmRvdztcbiAgaWYocmVzID09PSBcInVuZGVmaW5lZFwiKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuY29uc3QgZXhpc3RzQ2FsbGJhY2sgPSBmdW5jdGlvbihiaW5kaW5nKSB7XG4gIGlmKCFiaW5kaW5nKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYoYmluZGluZy52YWx1ZSAmJiB0eXBlb2YgYmluZGluZy52YWx1ZSA9PT0gXCJmdW5jdGlvblwiKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBtYWtlUmVtb3ZlRXZlbnQgPSBmdW5jdGlvbihldmVudG5hbWUpe1xuICBjb25zdCByZW1vdmVFdmVudCA9IGZ1bmN0aW9uKGhhbmRsZXIpe1xuICAgIGlmKGV4aXN0c1dpbmRvdygpKXtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50bmFtZSwgaGFuZGxlcik7XG4gICAgfVxuICB9O1xuICByZXR1cm4gcmVtb3ZlRXZlbnQ7XG59O1xuXG5jb25zdCBtYWtlQWRkRXZlbnQgPSBmdW5jdGlvbihldmVudG5hbWUpe1xuICBjb25zdCBhZGRFdmVudCA9IGZ1bmN0aW9uKGhhbmRsZXIpe1xuICAgIGlmKGV4aXN0c1dpbmRvdygpKXtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50bmFtZSwgaGFuZGxlcik7XG4gICAgfVxuICB9O1xuICByZXR1cm4gYWRkRXZlbnQ7XG59O1xuXG5jb25zdCBleGlzdHNJblBhcmVudHMgPSBmdW5jdGlvbihldnQsIHRndF9hcmVhKXtcblxuICBjb25zdCBhcnJheSA9IGV2dC5wYXRoIHx8IChldnQuY29tcG9zZWRQYXRoICYmIGV2dC5jb21wb3NlZFBhdGgoKSk7XG5cbiAgY29uc29sZS5pbmZvKGV2dCk7XG5cbiAgbGV0IGV4aXN0cyA9IGZhbHNlO1xuICBpZihhcnJheSAmJiBhcnJheS5sZW5ndGgpe1xuICAgIC8vIGxldCBjb3VudGVyID0gMDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgLy8gY291bnRlcisrO1xuICAgICAgY29uc3QgcCA9IGFycmF5W2ldO1xuICAgICAgaWYodGd0X2FyZWEgPT09IHApe1xuICAgICAgICBleGlzdHMgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYodGd0X2FyZWEgaW5zdGFuY2VvZiBBcnJheSl7XG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB0Z3RfYXJlYS5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgLy8gY291bnRlcisrO1xuICAgICAgICAgIGNvbnN0IGVsbSA9IHRndF9hcmVhW2pdO1xuICAgICAgICAgIGlmKGVsbSA9PT0gcCl7XG4gICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGVsbS4kZWwgPT09IHApe1xuICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYoZXhpc3RzKXtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9ZWxzZXtcbiAgICBsZXQgcGFyZW50ID0gZXZ0LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgIHdoaWxlKCFleGlzdHMpe1xuICAgICAgaWYocGFyZW50ID09PSB0Z3RfYXJlYSl7XG4gICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICBpZighcGFyZW50KXtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICAvLyBjb25zdCBwYXJlbnQgPSBcblxuICAgIH1cblxuICB9XG4gIHJldHVybiBleGlzdHM7XG59O1xuXG5jb25zdCBtYWtlSGFuZGxlciA9IGZ1bmN0aW9uKGVsLCByZW1vdmVFdmVudCl7XG5cbiAgY29uc3QgaGFuZGxlciA9IGZ1bmN0aW9uKGV2dCl7XG4gICAgY29uc3QgdGd0X2FyZWEgPSBlbDtcbiAgICBpZighdGd0X2FyZWEgfHwgdGd0X2FyZWEubGVuZ3RoID09PSAwKXtcbiAgICAgIHJlbW92ZUV2ZW50KGhhbmRsZXIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBleGlzdHMgPSBleGlzdHNJblBhcmVudHMoZXZ0LCB0Z3RfYXJlYSk7XG5cbiAgICBpZighZXhpc3RzKXtcbiAgICAgIGV4ZWN1dGVDYWxsYmFjayhlbCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBoYW5kbGVyO1xuXG59O1xuXG5jb25zdCBzZXRPdXRzaWRlID0gZnVuY3Rpb24oZXZ0bmFtZSwgZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSl7XG5cbiAgaWYoIWV4aXN0c0NhbGxiYWNrKGJpbmRpbmcpKXtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBjYiA9IGJpbmRpbmcudmFsdWU7XG5cbiAgY29uc3QgcmVtb3ZlRXZlbnQgPSBtYWtlUmVtb3ZlRXZlbnQoZXZ0bmFtZSk7XG4gIGNvbnN0IGFkZEV2ZW50ID0gbWFrZUFkZEV2ZW50KGV2dG5hbWUpO1xuXG4gIGNvbnN0IGNsaWNrSGFuZGxlciA9IG1ha2VIYW5kbGVyKGVsLCByZW1vdmVFdmVudCk7XG5cbiAgbGV0IHdvcmtpbmcgPSBmYWxzZTtcblxuICBjb25zdCByZXNwb25zZSA9IHtcbiAgICBldnRuYW1lOiBldnRuYW1lLFxuICAgIGVsOiBlbCxcbiAgICBjYW5jZWw6IGZ1bmN0aW9uKCl7XG4gICAgICByZW1vdmVFdmVudChjbGlja0hhbmRsZXIpO1xuICAgICAgd29ya2luZyA9IGZhbHNlO1xuICAgIH0sXG4gICAgZ2V0IHdvcmtpbmcoKXtcbiAgICAgIHJldHVybiB3b3JraW5nO1xuICAgIH0sXG4gICAgY2I6IGNiXG4gIH07XG5cbiAgaWYoIWVsIHx8ICFjYil7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnQoY2xpY2tIYW5kbGVyKTtcbiAgYWRkRXZlbnQoY2xpY2tIYW5kbGVyKTtcbiAgd29ya2luZyA9IHRydWU7XG4gIHJldHVybiByZXNwb25zZTtcblxufTtcblxuY29uc3QgY2FjaGUgPSBbXTtcblxuY29uc3QgZmluZFRlbXBCeUVsZW1lbnQgPSBmdW5jdGlvbihlbCl7XG4gIGNvbnN0IGluZCA9IGNhY2hlLmZpbmRJbmRleChlbG0gPT4gZWxtLmVsID09PSBlbCk7XG4gIHJldHVybiB7XG4gICAgaW5kZXg6IGluZCxcbiAgICB0ZW1wOiBjYWNoZVtpbmRdXG4gIH07XG59O1xuXG5jb25zdCBleGVjdXRlQ2FsbGJhY2sgPSBmdW5jdGlvbihlbCl7XG4gIGNvbnN0IHRlbXAgPSBmaW5kVGVtcEJ5RWxlbWVudChlbCkudGVtcDtcbiAgaWYoIXRlbXApe1xuICAgIHJldHVybjtcbiAgfVxuICBpZih0ZW1wLmNiICYmIHR5cGVvZiB0ZW1wLmNiID09PSBcImZ1bmN0aW9uXCIpe1xuICAgIHRlbXAuY2IoKTtcbiAgfVxufTtcblxuY29uc3QgdXBkYXRlQ2FsbGJhY2sgPSBmdW5jdGlvbihlbCwgY2Ipe1xuICBpZihjYiAmJiB0eXBlb2YgY2IgPT09IFwiZnVuY3Rpb25cIil7XG4gICAgY29uc3QgdGVtcCA9IGZpbmRUZW1wQnlFbGVtZW50KGVsKS50ZW1wO1xuICAgIGlmKHRlbXApe1xuICAgICAgdGVtcC5jYiA9IGNiO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3Qgc3RhcnQgPSBmdW5jdGlvbihlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKXtcbiAgY29uc3QgZXZ0bmFtZSA9IGRldGVjdEV2ZW50KGJpbmRpbmcpO1xuICBpZighZXZ0bmFtZSl7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHRlbXAgPSBzZXRPdXRzaWRlKGV2dG5hbWUsIGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpO1xuICBjYWNoZS5wdXNoKHRlbXApO1xufTtcblxuY29uc3QgZW5kID0gZnVuY3Rpb24oZWwpe1xuICBjb25zdCB7IHRlbXAsIGluZGV4IH0gPSBmaW5kVGVtcEJ5RWxlbWVudChlbClcbiAgY29uc3QgY2FuY2VsID0gdGVtcC5jYW5jZWw7XG4gIGlmKHR5cGVvZiBjYW5jZWwgPT09IFwiZnVuY3Rpb25cIil7XG4gICAgY2FuY2VsKCk7XG4gIH1cbiAgY2FjaGUuc3BsaWNlKGluZGV4LCAxKTtcbn07XG5cbmNvbnN0IGRldGVjdEV2ZW50ID0gZnVuY3Rpb24oYmluZGluZyl7XG5cbiAgaWYoIWJpbmRpbmcpe1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBiaW5kaW5nLm5hbWU7XG4gIGNvbnN0IGFyciA9IG5hbWUuc3BsaXQoXCItXCIpO1xuICBjb25zdCBldnRuYW1lID0gYXJyLnBvcCgpO1xuICBjb25zdCBldnRzID0gW1xuICAgIFwiY2xpY2tcIixcbiAgICBcIm1vdXNlZG93blwiLFxuICAgIFwibW91c2V1cFwiLFxuICAgIFwibW91c2VvdmVyXCIsXG4gICAgXCJtb3VzZW1vdmVcIixcbiAgICBcInRvdWNoc3RhcnRcIixcbiAgICBcInRvdWNoZW5kXCIsXG4gICAgLy8gXCJtb3VzZWxlYXZlXCIsXG4gICAgLy8gXCJtb3VzZW91dFwiLFxuICAgIC8vIFwibW91c2VlbnRlclwiLFxuICBdO1xuXG4gIGNvbnN0IGV4aXN0cyA9IGV2dHMuZmlsdGVyKGVsbSA9PiBlbG0gPT09IGV2dG5hbWUpO1xuICBpZihleGlzdHMpe1xuICAgIHJldHVybiBldnRuYW1lO1xuICB9XG4gIHJldHVybjtcbn07XG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGJpbmQ6IGZ1bmN0aW9uKGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpe1xuICAgIC8vIGNvbnNvbGUuaW5mbyh0aGlzLCBhcmd1bWVudHMpO1xuICAgIC8vIGNvbnNvbGUuaW5mbyhcImJpbmRcIiwgZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSk7XG5cbiAgICBzdGFydChlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKTtcblxuICB9LFxuICBpbnNlcnRlZDogZnVuY3Rpb24oZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSl7XG4gICAgLy8gY29uc29sZS5pbmZvKFwiaW5zZXJ0ZWRcIiwgZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSk7XG5cbiAgfSxcbiAgdXBkYXRlOiBmdW5jdGlvbihlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKXtcbiAgICAvLyBjb25zb2xlLmluZm8oXCJ1cGRhdGVcIiwgZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSk7XG4gICAgdXBkYXRlQ2FsbGJhY2soZWwsIGJpbmRpbmcudmFsdWUpO1xuXG4gIH0sXG4gIGNvbXBvbmVudFVwZGF0ZWQ6IGZ1bmN0aW9uKGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpe1xuICAgIC8vIGNvbnNvbGUuaW5mbyhcImNvbXBvbmVudFVwZGF0ZWRcIiwgZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSk7XG4gIH0sXG4gIHVuYmluZDogZnVuY3Rpb24oZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSl7XG4gICAgLy8gY29uc29sZS5pbmZvKFwidW5iaW5kXCIsIGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpO1xuICAgIGVuZChlbCk7XG4gIH0sXG59OyIsImltcG9ydCBkIGZyb20gXCIuL2RpcmVjdGl2ZS5qc1wiO1xuXG4vLyBleHBvcnQgZGVmYXVsdCAgZGlyZWN0aXZlO1xuXG5leHBvcnQgY29uc3QgZGlyZWN0aXZlID0gZDtcblxuLy8gaW1wb3J0IGRpcmVjdGl2ZSBmcm9tIFwiLi9kaXJlY3RpdmUuanNcIjtcbi8vIGV4cG9ydCBkZWZhdWx0IGRpcmVjdGl2ZTtcblxuZXhwb3J0IGNvbnN0IHNldE91dHNpZGVFdmVudCA9IGZ1bmN0aW9uKHR5cGUpe1xuICBjb25zdCBkZWZhdWx0X3R5cGUgPSBcImNsaWNrXCI7XG4gIGxldCBzdHIgPSBcIm91dHNpZGUtXCI7XG4gIGlmKCF0eXBlKXtcbiAgICBzdHIgKz0gZGVmYXVsdF90eXBlO1xuICB9ZWxzZXtcbiAgICBzdHIgKz0gdHlwZTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGluc3RhbGwgOmZ1bmN0aW9uKFZ1ZSwgb3B0aW9ucyl7XG4gICAgICBWdWUuZGlyZWN0aXZlKHN0ciwgZGlyZWN0aXZlKTtcbiAgICB9XG4gIH07XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5yZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==