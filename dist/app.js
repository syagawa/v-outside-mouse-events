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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive.js */ "./src/directive.js");

/* harmony default export */ __webpack_exports__["default"] = (_directive_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92LW91dHNpZGUtZXZlbnRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly92LW91dHNpZGUtZXZlbnRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Ytb3V0c2lkZS1ldmVudHMvLi9zcmMvZGlyZWN0aXZlLmpzIiwid2VicGFjazovL3Ytb3V0c2lkZS1ldmVudHMvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiZXhpc3RzV2luZG93IiwicmVzIiwid2luZG93IiwiZXhpc3RzQ2FsbGJhY2siLCJiaW5kaW5nIiwidmFsdWUiLCJtYWtlUmVtb3ZlRXZlbnQiLCJldmVudG5hbWUiLCJyZW1vdmVFdmVudCIsImhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWFrZUFkZEV2ZW50IiwiYWRkRXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibWFrZUhhbmRsZXIiLCJlbCIsImV2dCIsInRndF9hcmVhIiwibGVuZ3RoIiwiYXJyYXkiLCJwYXRoIiwiZXhpc3RzIiwiaSIsInAiLCJBcnJheSIsImoiLCJlbG0iLCIkZWwiLCJleGVjdXRlQ2FsbGJhY2siLCJzZXRPdXRzaWRlIiwiZXZ0bmFtZSIsInZub2RlIiwib2xkVm5vZGUiLCJjYiIsImNsaWNrSGFuZGxlciIsIndvcmtpbmciLCJyZXNwb25zZSIsImNhbmNlbCIsImNhY2hlIiwiZmluZFRlbXBCeUVsZW1lbnQiLCJpbmQiLCJmaW5kSW5kZXgiLCJpbmRleCIsInRlbXAiLCJ1cGRhdGVDYWxsYmFjayIsInN0YXJ0IiwiZGV0ZWN0RXZlbnQiLCJjb25zb2xlIiwiaW5mbyIsInB1c2giLCJlbmQiLCJzcGxpY2UiLCJuYW1lIiwiYXJyIiwic3BsaXQiLCJwb3AiLCJldnRzIiwiZmlsdGVyIiwiYmluZCIsImFyZ3VtZW50cyIsImluc2VydGVkIiwidXBkYXRlIiwiY29tcG9uZW50VXBkYXRlZCIsInVuYmluZCIsImRpcmVjdGl2ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBVTtBQUM3QixNQUFNQyxHQUFHLFVBQVVDLE1BQVYseUNBQVVBLE1BQVYsQ0FBVDs7QUFDQSxNQUFHRCxHQUFHLEtBQUssV0FBWCxFQUF1QjtBQUNyQixXQUFPLEtBQVA7QUFDRDs7QUFDRCxTQUFPLElBQVA7QUFDRCxDQU5EOztBQU9BLElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBU0MsT0FBVCxFQUFrQjtBQUN2QyxNQUFHLENBQUNBLE9BQUosRUFBWTtBQUNWLFdBQU8sS0FBUDtBQUNEOztBQUNELE1BQUdBLE9BQU8sQ0FBQ0MsS0FBUixJQUFpQixPQUFPRCxPQUFPLENBQUNDLEtBQWYsS0FBeUIsVUFBN0MsRUFBd0Q7QUFDdEQsV0FBTyxJQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxLQUFQO0FBQ0QsQ0FSRDs7QUFVQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQVNDLFNBQVQsRUFBbUI7QUFDekMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBU0MsT0FBVCxFQUFpQjtBQUNuQyxRQUFHVCxZQUFZLEVBQWYsRUFBa0I7QUFDaEJFLFlBQU0sQ0FBQ1EsbUJBQVAsQ0FBMkJILFNBQTNCLEVBQXNDRSxPQUF0QztBQUNEO0FBQ0YsR0FKRDs7QUFLQSxTQUFPRCxXQUFQO0FBQ0QsQ0FQRDs7QUFTQSxJQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFTSixTQUFULEVBQW1CO0FBQ3RDLE1BQU1LLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQVNILE9BQVQsRUFBaUI7QUFDaEMsUUFBR1QsWUFBWSxFQUFmLEVBQWtCO0FBQ2hCRSxZQUFNLENBQUNXLGdCQUFQLENBQXdCTixTQUF4QixFQUFtQ0UsT0FBbkM7QUFDRDtBQUNGLEdBSkQ7O0FBS0EsU0FBT0csUUFBUDtBQUNELENBUEQ7O0FBU0EsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBU0MsRUFBVCxFQUFhUCxXQUFiLEVBQXlCO0FBRTNDLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQVNPLEdBQVQsRUFBYTtBQUMzQixRQUFNQyxRQUFRLEdBQUdGLEVBQWpCOztBQUNBLFFBQUcsQ0FBQ0UsUUFBRCxJQUFhQSxRQUFRLENBQUNDLE1BQVQsS0FBb0IsQ0FBcEMsRUFBc0M7QUFDcENWLGlCQUFXLENBQUNDLE9BQUQsQ0FBWDtBQUNBO0FBQ0Q7O0FBQ0QsUUFBTVUsS0FBSyxHQUFHSCxHQUFHLENBQUNJLElBQWxCO0FBQ0EsUUFBSUMsTUFBTSxHQUFHLEtBQWIsQ0FQMkIsQ0FRM0I7O0FBQ0EsU0FBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdILEtBQUssQ0FBQ0QsTUFBekIsRUFBaUNJLENBQUMsRUFBbEMsRUFBcUM7QUFDbkM7QUFDQSxVQUFNQyxDQUFDLEdBQUdKLEtBQUssQ0FBQ0csQ0FBRCxDQUFmOztBQUNBLFVBQUdMLFFBQVEsS0FBS00sQ0FBaEIsRUFBa0I7QUFDaEJGLGNBQU0sR0FBRyxJQUFUO0FBQ0E7QUFDRDs7QUFFRCxVQUFHSixRQUFRLFlBQVlPLEtBQXZCLEVBQTZCO0FBQzNCLGFBQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHUixRQUFRLENBQUNDLE1BQTVCLEVBQW9DTyxDQUFDLEVBQXJDLEVBQXdDO0FBQ3RDO0FBQ0EsY0FBTUMsR0FBRyxHQUFHVCxRQUFRLENBQUNRLENBQUQsQ0FBcEI7O0FBQ0EsY0FBR0MsR0FBRyxLQUFLSCxDQUFYLEVBQWE7QUFDWEYsa0JBQU0sR0FBRyxJQUFUO0FBQ0E7QUFDRDs7QUFDRCxjQUFHSyxHQUFHLENBQUNDLEdBQUosS0FBWUosQ0FBZixFQUFpQjtBQUNmRixrQkFBTSxHQUFHLElBQVQ7QUFDQTtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxVQUFHQSxNQUFILEVBQVU7QUFDUjtBQUNEO0FBRUY7O0FBQ0QsUUFBRyxDQUFDQSxNQUFKLEVBQVc7QUFDVDtBQUNBTyxxQkFBZSxDQUFDYixFQUFELENBQWY7QUFDRDtBQUNGLEdBekNEOztBQTJDQSxTQUFPTixPQUFQO0FBRUQsQ0EvQ0Q7O0FBaURBLElBQU1vQixVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFTQyxPQUFULEVBQWtCZixFQUFsQixFQUFzQlgsT0FBdEIsRUFBK0IyQixLQUEvQixFQUFzQ0MsUUFBdEMsRUFBK0M7QUFFaEUsTUFBRyxDQUFDN0IsY0FBYyxDQUFDQyxPQUFELENBQWxCLEVBQTRCO0FBQzFCO0FBQ0Q7O0FBRUQsTUFBTTZCLEVBQUUsR0FBRzdCLE9BQU8sQ0FBQ0MsS0FBbkI7QUFFQSxNQUFNRyxXQUFXLEdBQUdGLGVBQWUsQ0FBQ3dCLE9BQUQsQ0FBbkM7QUFDQSxNQUFNbEIsUUFBUSxHQUFHRCxZQUFZLENBQUNtQixPQUFELENBQTdCO0FBRUEsTUFBTUksWUFBWSxHQUFHcEIsV0FBVyxDQUFDQyxFQUFELEVBQUtQLFdBQUwsQ0FBaEM7QUFFQSxNQUFJMkIsT0FBTyxHQUFHLEtBQWQ7QUFFQSxNQUFNQyxRQUFRLEdBQUc7QUFDZk4sV0FBTyxFQUFFQSxPQURNO0FBRWZmLE1BQUUsRUFBRUEsRUFGVztBQUdmc0IsVUFBTSxFQUFFLGtCQUFVO0FBQ2hCN0IsaUJBQVcsQ0FBQzBCLFlBQUQsQ0FBWDtBQUNBQyxhQUFPLEdBQUcsS0FBVjtBQUNELEtBTmM7O0FBT2YsUUFBSUEsT0FBSixHQUFhO0FBQ1gsYUFBT0EsT0FBUDtBQUNELEtBVGM7O0FBVWZGLE1BQUUsRUFBRUE7QUFWVyxHQUFqQjs7QUFhQSxNQUFHLENBQUNsQixFQUFELElBQU8sQ0FBQ2tCLEVBQVgsRUFBYztBQUNaLFdBQU9HLFFBQVA7QUFDRDs7QUFFRDVCLGFBQVcsQ0FBQzBCLFlBQUQsQ0FBWDtBQUNBdEIsVUFBUSxDQUFDc0IsWUFBRCxDQUFSO0FBQ0FDLFNBQU8sR0FBRyxJQUFWO0FBQ0EsU0FBT0MsUUFBUDtBQUVELENBckNEOztBQXVDQSxJQUFNRSxLQUFLLEdBQUcsRUFBZDs7QUFFQSxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQVN4QixFQUFULEVBQVk7QUFDcEMsTUFBTXlCLEdBQUcsR0FBR0YsS0FBSyxDQUFDRyxTQUFOLENBQWdCLFVBQUFmLEdBQUc7QUFBQSxXQUFJQSxHQUFHLENBQUNYLEVBQUosS0FBV0EsRUFBZjtBQUFBLEdBQW5CLENBQVo7QUFDQSxTQUFPO0FBQ0wyQixTQUFLLEVBQUVGLEdBREY7QUFFTEcsUUFBSSxFQUFFTCxLQUFLLENBQUNFLEdBQUQ7QUFGTixHQUFQO0FBSUQsQ0FORDs7QUFRQSxJQUFNWixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQVNiLEVBQVQsRUFBWTtBQUNsQyxNQUFNNEIsSUFBSSxHQUFHSixpQkFBaUIsQ0FBQ3hCLEVBQUQsQ0FBakIsQ0FBc0I0QixJQUFuQzs7QUFDQSxNQUFHLENBQUNBLElBQUosRUFBUztBQUNQO0FBQ0Q7O0FBQ0QsTUFBR0EsSUFBSSxDQUFDVixFQUFMLElBQVcsT0FBT1UsSUFBSSxDQUFDVixFQUFaLEtBQW1CLFVBQWpDLEVBQTRDO0FBQzFDVSxRQUFJLENBQUNWLEVBQUw7QUFDRDtBQUNGLENBUkQ7O0FBVUEsSUFBTVcsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFTN0IsRUFBVCxFQUFha0IsRUFBYixFQUFnQjtBQUNyQyxNQUFHQSxFQUFFLElBQUksT0FBT0EsRUFBUCxLQUFjLFVBQXZCLEVBQWtDO0FBQ2hDLFFBQU1VLElBQUksR0FBR0osaUJBQWlCLENBQUN4QixFQUFELENBQWpCLENBQXNCNEIsSUFBbkM7O0FBQ0EsUUFBR0EsSUFBSCxFQUFRO0FBQ05BLFVBQUksQ0FBQ1YsRUFBTCxHQUFVQSxFQUFWO0FBQ0Q7QUFDRjtBQUNGLENBUEQ7O0FBU0EsSUFBTVksS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBUzlCLEVBQVQsRUFBYVgsT0FBYixFQUFzQjJCLEtBQXRCLEVBQTZCQyxRQUE3QixFQUFzQztBQUVsRCxNQUFNRixPQUFPLEdBQUdnQixXQUFXLENBQUMxQyxPQUFELENBQTNCOztBQUNBLE1BQUcsQ0FBQzBCLE9BQUosRUFBWTtBQUNWO0FBQ0Q7O0FBRUQsTUFBTWEsSUFBSSxHQUFHZCxVQUFVLENBQUNDLE9BQUQsRUFBVWYsRUFBVixFQUFjWCxPQUFkLEVBQXVCMkIsS0FBdkIsRUFBOEJDLFFBQTlCLENBQXZCO0FBQ0FlLFNBQU8sQ0FBQ0MsSUFBUixDQUFhLFNBQWIsRUFBd0JMLElBQXhCO0FBQ0FMLE9BQUssQ0FBQ1csSUFBTixDQUFXTixJQUFYO0FBQ0QsQ0FWRDs7QUFZQSxJQUFNTyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFTbkMsRUFBVCxFQUFZO0FBQUEsMkJBQ0V3QixpQkFBaUIsQ0FBQ3hCLEVBQUQsQ0FEbkI7QUFBQSxNQUNkNEIsSUFEYyxzQkFDZEEsSUFEYztBQUFBLE1BQ1JELEtBRFEsc0JBQ1JBLEtBRFE7O0FBRXRCLE1BQU1MLE1BQU0sR0FBR00sSUFBSSxDQUFDTixNQUFwQjs7QUFDQSxNQUFHLE9BQU9BLE1BQVAsS0FBa0IsVUFBckIsRUFBZ0M7QUFDOUJBLFVBQU07QUFDUDs7QUFDREMsT0FBSyxDQUFDYSxNQUFOLENBQWFULEtBQWIsRUFBb0IsQ0FBcEI7QUFDRCxDQVBEOztBQVNBLElBQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQVMxQyxPQUFULEVBQWlCO0FBRW5DLE1BQUcsQ0FBQ0EsT0FBSixFQUFZO0FBQ1Y7QUFDRDs7QUFFRCxNQUFNZ0QsSUFBSSxHQUFHaEQsT0FBTyxDQUFDZ0QsSUFBckI7QUFDQSxNQUFNQyxHQUFHLEdBQUdELElBQUksQ0FBQ0UsS0FBTCxDQUFXLEdBQVgsQ0FBWjtBQUNBLE1BQU14QixPQUFPLEdBQUd1QixHQUFHLENBQUNFLEdBQUosRUFBaEI7QUFDQSxNQUFNQyxJQUFJLEdBQUcsQ0FDWCxPQURXLEVBRVgsV0FGVyxFQUdYLFNBSFcsRUFJWCxZQUpXLEVBS1gsV0FMVyxFQU1YLFdBTlcsRUFPWCxZQVBXLEVBUVgsVUFSVyxDQUFiO0FBV0EsTUFBTW5DLE1BQU0sR0FBR21DLElBQUksQ0FBQ0MsTUFBTCxDQUFZLFVBQUEvQixHQUFHO0FBQUEsV0FBSUEsR0FBRyxLQUFLSSxPQUFaO0FBQUEsR0FBZixDQUFmOztBQUNBLE1BQUdULE1BQUgsRUFBVTtBQUNSLFdBQU9TLE9BQVA7QUFDRDs7QUFDRDtBQUNELENBekJEOztBQTZCZTtBQUNiNEIsTUFBSSxFQUFFLGNBQVMzQyxFQUFULEVBQWFYLE9BQWIsRUFBc0IyQixLQUF0QixFQUE2QkMsUUFBN0IsRUFBc0M7QUFDMUNlLFdBQU8sQ0FBQ0MsSUFBUixDQUFhLElBQWIsRUFBbUJXLFNBQW5CLEVBRDBDLENBRTFDOztBQUVBZCxTQUFLLENBQUM5QixFQUFELEVBQUtYLE9BQUwsRUFBYzJCLEtBQWQsRUFBcUJDLFFBQXJCLENBQUw7QUFFRCxHQVBZO0FBUWI0QixVQUFRLEVBQUUsa0JBQVM3QyxFQUFULEVBQWFYLE9BQWIsRUFBc0IyQixLQUF0QixFQUE2QkMsUUFBN0IsRUFBc0MsQ0FDOUM7QUFFRCxHQVhZO0FBWWI2QixRQUFNLEVBQUUsZ0JBQVM5QyxFQUFULEVBQWFYLE9BQWIsRUFBc0IyQixLQUF0QixFQUE2QkMsUUFBN0IsRUFBc0M7QUFDNUM7QUFDQVksa0JBQWMsQ0FBQzdCLEVBQUQsRUFBS1gsT0FBTyxDQUFDQyxLQUFiLENBQWQ7QUFFRCxHQWhCWTtBQWlCYnlELGtCQUFnQixFQUFFLDBCQUFTL0MsRUFBVCxFQUFhWCxPQUFiLEVBQXNCMkIsS0FBdEIsRUFBNkJDLFFBQTdCLEVBQXNDLENBQ3REO0FBQ0QsR0FuQlk7QUFvQmIrQixRQUFNLEVBQUUsZ0JBQVNoRCxFQUFULEVBQWFYLE9BQWIsRUFBc0IyQixLQUF0QixFQUE2QkMsUUFBN0IsRUFBc0M7QUFDNUM7QUFDQWtCLE9BQUcsQ0FBQ25DLEVBQUQsQ0FBSDtBQUNEO0FBdkJZLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDMU1BO0FBQUE7QUFBQTtBQUVlaUQsb0hBQWYsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ2LW91dHNpZGUtZXZlbnRzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInYtb3V0c2lkZS1ldmVudHNcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJjb25zdCBleGlzdHNXaW5kb3cgPSBmdW5jdGlvbigpe1xuICBjb25zdCByZXMgPSB0eXBlb2Ygd2luZG93O1xuICBpZihyZXMgPT09IFwidW5kZWZpbmVkXCIpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5jb25zdCBleGlzdHNDYWxsYmFjayA9IGZ1bmN0aW9uKGJpbmRpbmcpIHtcbiAgaWYoIWJpbmRpbmcpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihiaW5kaW5nLnZhbHVlICYmIHR5cGVvZiBiaW5kaW5nLnZhbHVlID09PSBcImZ1bmN0aW9uXCIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IG1ha2VSZW1vdmVFdmVudCA9IGZ1bmN0aW9uKGV2ZW50bmFtZSl7XG4gIGNvbnN0IHJlbW92ZUV2ZW50ID0gZnVuY3Rpb24oaGFuZGxlcil7XG4gICAgaWYoZXhpc3RzV2luZG93KCkpe1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRuYW1lLCBoYW5kbGVyKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiByZW1vdmVFdmVudDtcbn07XG5cbmNvbnN0IG1ha2VBZGRFdmVudCA9IGZ1bmN0aW9uKGV2ZW50bmFtZSl7XG4gIGNvbnN0IGFkZEV2ZW50ID0gZnVuY3Rpb24oaGFuZGxlcil7XG4gICAgaWYoZXhpc3RzV2luZG93KCkpe1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRuYW1lLCBoYW5kbGVyKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBhZGRFdmVudDtcbn07XG5cbmNvbnN0IG1ha2VIYW5kbGVyID0gZnVuY3Rpb24oZWwsIHJlbW92ZUV2ZW50KXtcblxuICBjb25zdCBoYW5kbGVyID0gZnVuY3Rpb24oZXZ0KXtcbiAgICBjb25zdCB0Z3RfYXJlYSA9IGVsO1xuICAgIGlmKCF0Z3RfYXJlYSB8fCB0Z3RfYXJlYS5sZW5ndGggPT09IDApe1xuICAgICAgcmVtb3ZlRXZlbnQoaGFuZGxlcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGFycmF5ID0gZXZ0LnBhdGg7XG4gICAgbGV0IGV4aXN0cyA9IGZhbHNlO1xuICAgIC8vIGxldCBjb3VudGVyID0gMDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgLy8gY291bnRlcisrO1xuICAgICAgY29uc3QgcCA9IGFycmF5W2ldO1xuICAgICAgaWYodGd0X2FyZWEgPT09IHApe1xuICAgICAgICBleGlzdHMgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYodGd0X2FyZWEgaW5zdGFuY2VvZiBBcnJheSl7XG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB0Z3RfYXJlYS5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgLy8gY291bnRlcisrO1xuICAgICAgICAgIGNvbnN0IGVsbSA9IHRndF9hcmVhW2pdO1xuICAgICAgICAgIGlmKGVsbSA9PT0gcCl7XG4gICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGVsbS4kZWwgPT09IHApe1xuICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihleGlzdHMpe1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgIH1cbiAgICBpZighZXhpc3RzKXtcbiAgICAgIC8vIGNiKCk7XG4gICAgICBleGVjdXRlQ2FsbGJhY2soZWwpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gaGFuZGxlcjtcblxufTtcblxuY29uc3Qgc2V0T3V0c2lkZSA9IGZ1bmN0aW9uKGV2dG5hbWUsIGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpe1xuXG4gIGlmKCFleGlzdHNDYWxsYmFjayhiaW5kaW5nKSl7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgY2IgPSBiaW5kaW5nLnZhbHVlO1xuXG4gIGNvbnN0IHJlbW92ZUV2ZW50ID0gbWFrZVJlbW92ZUV2ZW50KGV2dG5hbWUpO1xuICBjb25zdCBhZGRFdmVudCA9IG1ha2VBZGRFdmVudChldnRuYW1lKTtcblxuICBjb25zdCBjbGlja0hhbmRsZXIgPSBtYWtlSGFuZGxlcihlbCwgcmVtb3ZlRXZlbnQpO1xuXG4gIGxldCB3b3JraW5nID0gZmFsc2U7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSB7XG4gICAgZXZ0bmFtZTogZXZ0bmFtZSxcbiAgICBlbDogZWwsXG4gICAgY2FuY2VsOiBmdW5jdGlvbigpe1xuICAgICAgcmVtb3ZlRXZlbnQoY2xpY2tIYW5kbGVyKTtcbiAgICAgIHdvcmtpbmcgPSBmYWxzZTtcbiAgICB9LFxuICAgIGdldCB3b3JraW5nKCl7XG4gICAgICByZXR1cm4gd29ya2luZztcbiAgICB9LFxuICAgIGNiOiBjYlxuICB9O1xuXG4gIGlmKCFlbCB8fCAhY2Ipe1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50KGNsaWNrSGFuZGxlcik7XG4gIGFkZEV2ZW50KGNsaWNrSGFuZGxlcik7XG4gIHdvcmtpbmcgPSB0cnVlO1xuICByZXR1cm4gcmVzcG9uc2U7XG5cbn07XG5cbmNvbnN0IGNhY2hlID0gW107XG5cbmNvbnN0IGZpbmRUZW1wQnlFbGVtZW50ID0gZnVuY3Rpb24oZWwpe1xuICBjb25zdCBpbmQgPSBjYWNoZS5maW5kSW5kZXgoZWxtID0+IGVsbS5lbCA9PT0gZWwpO1xuICByZXR1cm4ge1xuICAgIGluZGV4OiBpbmQsXG4gICAgdGVtcDogY2FjaGVbaW5kXVxuICB9O1xufTtcblxuY29uc3QgZXhlY3V0ZUNhbGxiYWNrID0gZnVuY3Rpb24oZWwpe1xuICBjb25zdCB0ZW1wID0gZmluZFRlbXBCeUVsZW1lbnQoZWwpLnRlbXA7XG4gIGlmKCF0ZW1wKXtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYodGVtcC5jYiAmJiB0eXBlb2YgdGVtcC5jYiA9PT0gXCJmdW5jdGlvblwiKXtcbiAgICB0ZW1wLmNiKCk7XG4gIH1cbn07XG5cbmNvbnN0IHVwZGF0ZUNhbGxiYWNrID0gZnVuY3Rpb24oZWwsIGNiKXtcbiAgaWYoY2IgJiYgdHlwZW9mIGNiID09PSBcImZ1bmN0aW9uXCIpe1xuICAgIGNvbnN0IHRlbXAgPSBmaW5kVGVtcEJ5RWxlbWVudChlbCkudGVtcDtcbiAgICBpZih0ZW1wKXtcbiAgICAgIHRlbXAuY2IgPSBjYjtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHN0YXJ0ID0gZnVuY3Rpb24oZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSl7XG5cbiAgY29uc3QgZXZ0bmFtZSA9IGRldGVjdEV2ZW50KGJpbmRpbmcpO1xuICBpZighZXZ0bmFtZSl7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgdGVtcCA9IHNldE91dHNpZGUoZXZ0bmFtZSwgZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSk7XG4gIGNvbnNvbGUuaW5mbyhcImluc3RhcnRcIiwgdGVtcCk7XG4gIGNhY2hlLnB1c2godGVtcCk7XG59O1xuXG5jb25zdCBlbmQgPSBmdW5jdGlvbihlbCl7XG4gIGNvbnN0IHsgdGVtcCwgaW5kZXggfSA9IGZpbmRUZW1wQnlFbGVtZW50KGVsKVxuICBjb25zdCBjYW5jZWwgPSB0ZW1wLmNhbmNlbDtcbiAgaWYodHlwZW9mIGNhbmNlbCA9PT0gXCJmdW5jdGlvblwiKXtcbiAgICBjYW5jZWwoKTtcbiAgfVxuICBjYWNoZS5zcGxpY2UoaW5kZXgsIDEpO1xufTtcblxuY29uc3QgZGV0ZWN0RXZlbnQgPSBmdW5jdGlvbihiaW5kaW5nKXtcblxuICBpZighYmluZGluZyl7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgbmFtZSA9IGJpbmRpbmcubmFtZTtcbiAgY29uc3QgYXJyID0gbmFtZS5zcGxpdChcIi1cIik7XG4gIGNvbnN0IGV2dG5hbWUgPSBhcnIucG9wKCk7XG4gIGNvbnN0IGV2dHMgPSBbXG4gICAgXCJjbGlja1wiLFxuICAgIFwibW91c2Vkb3duXCIsXG4gICAgXCJtb3VzZXVwXCIsXG4gICAgXCJtb3VzZWVudGVyXCIsXG4gICAgXCJtb3VzZW92ZXJcIixcbiAgICBcIm1vdXNlbW92ZVwiLFxuICAgIFwidG91Y2hzdGFydFwiLFxuICAgIFwidG91Y2hlbmRcIlxuICBdO1xuXG4gIGNvbnN0IGV4aXN0cyA9IGV2dHMuZmlsdGVyKGVsbSA9PiBlbG0gPT09IGV2dG5hbWUpO1xuICBpZihleGlzdHMpe1xuICAgIHJldHVybiBldnRuYW1lO1xuICB9XG4gIHJldHVybjtcbn07XG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGJpbmQ6IGZ1bmN0aW9uKGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpe1xuICAgIGNvbnNvbGUuaW5mbyh0aGlzLCBhcmd1bWVudHMpXG4gICAgLy8gY29uc29sZS5pbmZvKFwiYmluZFwiLCBlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKTtcblxuICAgIHN0YXJ0KGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpO1xuXG4gIH0sXG4gIGluc2VydGVkOiBmdW5jdGlvbihlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKXtcbiAgICAvLyBjb25zb2xlLmluZm8oXCJpbnNlcnRlZFwiLCBlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKTtcblxuICB9LFxuICB1cGRhdGU6IGZ1bmN0aW9uKGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpe1xuICAgIC8vIGNvbnNvbGUuaW5mbyhcInVwZGF0ZVwiLCBlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKTtcbiAgICB1cGRhdGVDYWxsYmFjayhlbCwgYmluZGluZy52YWx1ZSk7XG5cbiAgfSxcbiAgY29tcG9uZW50VXBkYXRlZDogZnVuY3Rpb24oZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSl7XG4gICAgLy8gY29uc29sZS5pbmZvKFwiY29tcG9uZW50VXBkYXRlZFwiLCBlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKTtcbiAgfSxcbiAgdW5iaW5kOiBmdW5jdGlvbihlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKXtcbiAgICAvLyBjb25zb2xlLmluZm8oXCJ1bmJpbmRcIiwgZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSk7XG4gICAgZW5kKGVsKTtcbiAgfSxcbn07IiwiaW1wb3J0IGRpcmVjdGl2ZSBmcm9tIFwiLi9kaXJlY3RpdmUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGlyZWN0aXZlOyJdLCJzb3VyY2VSb290IjoiIn0=