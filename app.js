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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive.js */ "./directive.js");

/* harmony default export */ __webpack_exports__["default"] = (_directive_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92LW91dHNpZGUtZXZlbnRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly92LW91dHNpZGUtZXZlbnRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Ytb3V0c2lkZS1ldmVudHMvLi9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vdi1vdXRzaWRlLWV2ZW50cy8uL2luZGV4LmpzIl0sIm5hbWVzIjpbImV4aXN0c1dpbmRvdyIsInJlcyIsIndpbmRvdyIsImV4aXN0c0NhbGxiYWNrIiwiYmluZGluZyIsInZhbHVlIiwibWFrZVJlbW92ZUV2ZW50IiwiZXZlbnRuYW1lIiwicmVtb3ZlRXZlbnQiLCJoYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1ha2VBZGRFdmVudCIsImFkZEV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1ha2VIYW5kbGVyIiwiZWwiLCJldnQiLCJ0Z3RfYXJlYSIsImxlbmd0aCIsImFycmF5IiwicGF0aCIsImV4aXN0cyIsImkiLCJwIiwiQXJyYXkiLCJqIiwiZWxtIiwiJGVsIiwiZXhlY3V0ZUNhbGxiYWNrIiwic2V0T3V0c2lkZSIsImV2dG5hbWUiLCJ2bm9kZSIsIm9sZFZub2RlIiwiY2IiLCJjbGlja0hhbmRsZXIiLCJ3b3JraW5nIiwicmVzcG9uc2UiLCJjYW5jZWwiLCJjYWNoZSIsImZpbmRUZW1wQnlFbGVtZW50IiwiaW5kIiwiZmluZEluZGV4IiwiaW5kZXgiLCJ0ZW1wIiwidXBkYXRlQ2FsbGJhY2siLCJzdGFydCIsImRldGVjdEV2ZW50IiwiY29uc29sZSIsImluZm8iLCJwdXNoIiwiZW5kIiwic3BsaWNlIiwibmFtZSIsImFyciIsInNwbGl0IiwicG9wIiwiZXZ0cyIsImZpbHRlciIsImJpbmQiLCJhcmd1bWVudHMiLCJpbnNlcnRlZCIsInVwZGF0ZSIsImNvbXBvbmVudFVwZGF0ZWQiLCJ1bmJpbmQiLCJkaXJlY3RpdmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQVU7QUFDN0IsTUFBTUMsR0FBRyxVQUFVQyxNQUFWLHlDQUFVQSxNQUFWLENBQVQ7O0FBQ0EsTUFBR0QsR0FBRyxLQUFLLFdBQVgsRUFBdUI7QUFDckIsV0FBTyxLQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxJQUFQO0FBQ0QsQ0FORDs7QUFPQSxJQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQVNDLE9BQVQsRUFBa0I7QUFDdkMsTUFBRyxDQUFDQSxPQUFKLEVBQVk7QUFDVixXQUFPLEtBQVA7QUFDRDs7QUFDRCxNQUFHQSxPQUFPLENBQUNDLEtBQVIsSUFBaUIsT0FBT0QsT0FBTyxDQUFDQyxLQUFmLEtBQXlCLFVBQTdDLEVBQXdEO0FBQ3RELFdBQU8sSUFBUDtBQUNEOztBQUNELFNBQU8sS0FBUDtBQUNELENBUkQ7O0FBVUEsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFTQyxTQUFULEVBQW1CO0FBQ3pDLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQVNDLE9BQVQsRUFBaUI7QUFDbkMsUUFBR1QsWUFBWSxFQUFmLEVBQWtCO0FBQ2hCRSxZQUFNLENBQUNRLG1CQUFQLENBQTJCSCxTQUEzQixFQUFzQ0UsT0FBdEM7QUFDRDtBQUNGLEdBSkQ7O0FBS0EsU0FBT0QsV0FBUDtBQUNELENBUEQ7O0FBU0EsSUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBU0osU0FBVCxFQUFtQjtBQUN0QyxNQUFNSyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFTSCxPQUFULEVBQWlCO0FBQ2hDLFFBQUdULFlBQVksRUFBZixFQUFrQjtBQUNoQkUsWUFBTSxDQUFDVyxnQkFBUCxDQUF3Qk4sU0FBeEIsRUFBbUNFLE9BQW5DO0FBQ0Q7QUFDRixHQUpEOztBQUtBLFNBQU9HLFFBQVA7QUFDRCxDQVBEOztBQVNBLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQVNDLEVBQVQsRUFBYVAsV0FBYixFQUF5QjtBQUUzQyxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFTTyxHQUFULEVBQWE7QUFDM0IsUUFBTUMsUUFBUSxHQUFHRixFQUFqQjs7QUFDQSxRQUFHLENBQUNFLFFBQUQsSUFBYUEsUUFBUSxDQUFDQyxNQUFULEtBQW9CLENBQXBDLEVBQXNDO0FBQ3BDVixpQkFBVyxDQUFDQyxPQUFELENBQVg7QUFDQTtBQUNEOztBQUNELFFBQU1VLEtBQUssR0FBR0gsR0FBRyxDQUFDSSxJQUFsQjtBQUNBLFFBQUlDLE1BQU0sR0FBRyxLQUFiLENBUDJCLENBUTNCOztBQUNBLFNBQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHSCxLQUFLLENBQUNELE1BQXpCLEVBQWlDSSxDQUFDLEVBQWxDLEVBQXFDO0FBQ25DO0FBQ0EsVUFBTUMsQ0FBQyxHQUFHSixLQUFLLENBQUNHLENBQUQsQ0FBZjs7QUFDQSxVQUFHTCxRQUFRLEtBQUtNLENBQWhCLEVBQWtCO0FBQ2hCRixjQUFNLEdBQUcsSUFBVDtBQUNBO0FBQ0Q7O0FBRUQsVUFBR0osUUFBUSxZQUFZTyxLQUF2QixFQUE2QjtBQUMzQixhQUFJLElBQUlDLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR1IsUUFBUSxDQUFDQyxNQUE1QixFQUFvQ08sQ0FBQyxFQUFyQyxFQUF3QztBQUN0QztBQUNBLGNBQU1DLEdBQUcsR0FBR1QsUUFBUSxDQUFDUSxDQUFELENBQXBCOztBQUNBLGNBQUdDLEdBQUcsS0FBS0gsQ0FBWCxFQUFhO0FBQ1hGLGtCQUFNLEdBQUcsSUFBVDtBQUNBO0FBQ0Q7O0FBQ0QsY0FBR0ssR0FBRyxDQUFDQyxHQUFKLEtBQVlKLENBQWYsRUFBaUI7QUFDZkYsa0JBQU0sR0FBRyxJQUFUO0FBQ0E7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsVUFBR0EsTUFBSCxFQUFVO0FBQ1I7QUFDRDtBQUVGOztBQUNELFFBQUcsQ0FBQ0EsTUFBSixFQUFXO0FBQ1Q7QUFDQU8scUJBQWUsQ0FBQ2IsRUFBRCxDQUFmO0FBQ0Q7QUFDRixHQXpDRDs7QUEyQ0EsU0FBT04sT0FBUDtBQUVELENBL0NEOztBQWlEQSxJQUFNb0IsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBU0MsT0FBVCxFQUFrQmYsRUFBbEIsRUFBc0JYLE9BQXRCLEVBQStCMkIsS0FBL0IsRUFBc0NDLFFBQXRDLEVBQStDO0FBRWhFLE1BQUcsQ0FBQzdCLGNBQWMsQ0FBQ0MsT0FBRCxDQUFsQixFQUE0QjtBQUMxQjtBQUNEOztBQUVELE1BQU02QixFQUFFLEdBQUc3QixPQUFPLENBQUNDLEtBQW5CO0FBRUEsTUFBTUcsV0FBVyxHQUFHRixlQUFlLENBQUN3QixPQUFELENBQW5DO0FBQ0EsTUFBTWxCLFFBQVEsR0FBR0QsWUFBWSxDQUFDbUIsT0FBRCxDQUE3QjtBQUVBLE1BQU1JLFlBQVksR0FBR3BCLFdBQVcsQ0FBQ0MsRUFBRCxFQUFLUCxXQUFMLENBQWhDO0FBRUEsTUFBSTJCLE9BQU8sR0FBRyxLQUFkO0FBRUEsTUFBTUMsUUFBUSxHQUFHO0FBQ2ZOLFdBQU8sRUFBRUEsT0FETTtBQUVmZixNQUFFLEVBQUVBLEVBRlc7QUFHZnNCLFVBQU0sRUFBRSxrQkFBVTtBQUNoQjdCLGlCQUFXLENBQUMwQixZQUFELENBQVg7QUFDQUMsYUFBTyxHQUFHLEtBQVY7QUFDRCxLQU5jOztBQU9mLFFBQUlBLE9BQUosR0FBYTtBQUNYLGFBQU9BLE9BQVA7QUFDRCxLQVRjOztBQVVmRixNQUFFLEVBQUVBO0FBVlcsR0FBakI7O0FBYUEsTUFBRyxDQUFDbEIsRUFBRCxJQUFPLENBQUNrQixFQUFYLEVBQWM7QUFDWixXQUFPRyxRQUFQO0FBQ0Q7O0FBRUQ1QixhQUFXLENBQUMwQixZQUFELENBQVg7QUFDQXRCLFVBQVEsQ0FBQ3NCLFlBQUQsQ0FBUjtBQUNBQyxTQUFPLEdBQUcsSUFBVjtBQUNBLFNBQU9DLFFBQVA7QUFFRCxDQXJDRDs7QUF1Q0EsSUFBTUUsS0FBSyxHQUFHLEVBQWQ7O0FBRUEsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFTeEIsRUFBVCxFQUFZO0FBQ3BDLE1BQU15QixHQUFHLEdBQUdGLEtBQUssQ0FBQ0csU0FBTixDQUFnQixVQUFBZixHQUFHO0FBQUEsV0FBSUEsR0FBRyxDQUFDWCxFQUFKLEtBQVdBLEVBQWY7QUFBQSxHQUFuQixDQUFaO0FBQ0EsU0FBTztBQUNMMkIsU0FBSyxFQUFFRixHQURGO0FBRUxHLFFBQUksRUFBRUwsS0FBSyxDQUFDRSxHQUFEO0FBRk4sR0FBUDtBQUlELENBTkQ7O0FBUUEsSUFBTVosZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFTYixFQUFULEVBQVk7QUFDbEMsTUFBTTRCLElBQUksR0FBR0osaUJBQWlCLENBQUN4QixFQUFELENBQWpCLENBQXNCNEIsSUFBbkM7O0FBQ0EsTUFBRyxDQUFDQSxJQUFKLEVBQVM7QUFDUDtBQUNEOztBQUNELE1BQUdBLElBQUksQ0FBQ1YsRUFBTCxJQUFXLE9BQU9VLElBQUksQ0FBQ1YsRUFBWixLQUFtQixVQUFqQyxFQUE0QztBQUMxQ1UsUUFBSSxDQUFDVixFQUFMO0FBQ0Q7QUFDRixDQVJEOztBQVVBLElBQU1XLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBUzdCLEVBQVQsRUFBYWtCLEVBQWIsRUFBZ0I7QUFDckMsTUFBR0EsRUFBRSxJQUFJLE9BQU9BLEVBQVAsS0FBYyxVQUF2QixFQUFrQztBQUNoQyxRQUFNVSxJQUFJLEdBQUdKLGlCQUFpQixDQUFDeEIsRUFBRCxDQUFqQixDQUFzQjRCLElBQW5DOztBQUNBLFFBQUdBLElBQUgsRUFBUTtBQUNOQSxVQUFJLENBQUNWLEVBQUwsR0FBVUEsRUFBVjtBQUNEO0FBQ0Y7QUFDRixDQVBEOztBQVNBLElBQU1ZLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQVM5QixFQUFULEVBQWFYLE9BQWIsRUFBc0IyQixLQUF0QixFQUE2QkMsUUFBN0IsRUFBc0M7QUFFbEQsTUFBTUYsT0FBTyxHQUFHZ0IsV0FBVyxDQUFDMUMsT0FBRCxDQUEzQjs7QUFDQSxNQUFHLENBQUMwQixPQUFKLEVBQVk7QUFDVjtBQUNEOztBQUVELE1BQU1hLElBQUksR0FBR2QsVUFBVSxDQUFDQyxPQUFELEVBQVVmLEVBQVYsRUFBY1gsT0FBZCxFQUF1QjJCLEtBQXZCLEVBQThCQyxRQUE5QixDQUF2QjtBQUNBZSxTQUFPLENBQUNDLElBQVIsQ0FBYSxTQUFiLEVBQXdCTCxJQUF4QjtBQUNBTCxPQUFLLENBQUNXLElBQU4sQ0FBV04sSUFBWDtBQUNELENBVkQ7O0FBWUEsSUFBTU8sR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBU25DLEVBQVQsRUFBWTtBQUFBLDJCQUNFd0IsaUJBQWlCLENBQUN4QixFQUFELENBRG5CO0FBQUEsTUFDZDRCLElBRGMsc0JBQ2RBLElBRGM7QUFBQSxNQUNSRCxLQURRLHNCQUNSQSxLQURROztBQUV0QixNQUFNTCxNQUFNLEdBQUdNLElBQUksQ0FBQ04sTUFBcEI7O0FBQ0EsTUFBRyxPQUFPQSxNQUFQLEtBQWtCLFVBQXJCLEVBQWdDO0FBQzlCQSxVQUFNO0FBQ1A7O0FBQ0RDLE9BQUssQ0FBQ2EsTUFBTixDQUFhVCxLQUFiLEVBQW9CLENBQXBCO0FBQ0QsQ0FQRDs7QUFTQSxJQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFTMUMsT0FBVCxFQUFpQjtBQUVuQyxNQUFHLENBQUNBLE9BQUosRUFBWTtBQUNWO0FBQ0Q7O0FBRUQsTUFBTWdELElBQUksR0FBR2hELE9BQU8sQ0FBQ2dELElBQXJCO0FBQ0EsTUFBTUMsR0FBRyxHQUFHRCxJQUFJLENBQUNFLEtBQUwsQ0FBVyxHQUFYLENBQVo7QUFDQSxNQUFNeEIsT0FBTyxHQUFHdUIsR0FBRyxDQUFDRSxHQUFKLEVBQWhCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLENBQ1gsT0FEVyxFQUVYLFdBRlcsRUFHWCxTQUhXLEVBSVgsWUFKVyxFQUtYLFdBTFcsRUFNWCxXQU5XLEVBT1gsWUFQVyxFQVFYLFVBUlcsQ0FBYjtBQVdBLE1BQU1uQyxNQUFNLEdBQUdtQyxJQUFJLENBQUNDLE1BQUwsQ0FBWSxVQUFBL0IsR0FBRztBQUFBLFdBQUlBLEdBQUcsS0FBS0ksT0FBWjtBQUFBLEdBQWYsQ0FBZjs7QUFDQSxNQUFHVCxNQUFILEVBQVU7QUFDUixXQUFPUyxPQUFQO0FBQ0Q7O0FBQ0Q7QUFDRCxDQXpCRDs7QUE2QmU7QUFDYjRCLE1BQUksRUFBRSxjQUFTM0MsRUFBVCxFQUFhWCxPQUFiLEVBQXNCMkIsS0FBdEIsRUFBNkJDLFFBQTdCLEVBQXNDO0FBQzFDZSxXQUFPLENBQUNDLElBQVIsQ0FBYSxJQUFiLEVBQW1CVyxTQUFuQixFQUQwQyxDQUUxQzs7QUFFQWQsU0FBSyxDQUFDOUIsRUFBRCxFQUFLWCxPQUFMLEVBQWMyQixLQUFkLEVBQXFCQyxRQUFyQixDQUFMO0FBRUQsR0FQWTtBQVFiNEIsVUFBUSxFQUFFLGtCQUFTN0MsRUFBVCxFQUFhWCxPQUFiLEVBQXNCMkIsS0FBdEIsRUFBNkJDLFFBQTdCLEVBQXNDLENBQzlDO0FBRUQsR0FYWTtBQVliNkIsUUFBTSxFQUFFLGdCQUFTOUMsRUFBVCxFQUFhWCxPQUFiLEVBQXNCMkIsS0FBdEIsRUFBNkJDLFFBQTdCLEVBQXNDO0FBQzVDO0FBQ0FZLGtCQUFjLENBQUM3QixFQUFELEVBQUtYLE9BQU8sQ0FBQ0MsS0FBYixDQUFkO0FBRUQsR0FoQlk7QUFpQmJ5RCxrQkFBZ0IsRUFBRSwwQkFBUy9DLEVBQVQsRUFBYVgsT0FBYixFQUFzQjJCLEtBQXRCLEVBQTZCQyxRQUE3QixFQUFzQyxDQUN0RDtBQUNELEdBbkJZO0FBb0JiK0IsUUFBTSxFQUFFLGdCQUFTaEQsRUFBVCxFQUFhWCxPQUFiLEVBQXNCMkIsS0FBdEIsRUFBNkJDLFFBQTdCLEVBQXNDO0FBQzVDO0FBQ0FrQixPQUFHLENBQUNuQyxFQUFELENBQUg7QUFDRDtBQXZCWSxDQUFmLEU7Ozs7Ozs7Ozs7OztBQzFNQTtBQUFBO0FBQUE7QUFFZWlELG9IQUFmLEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widi1vdXRzaWRlLWV2ZW50c1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ2LW91dHNpZGUtZXZlbnRzXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiY29uc3QgZXhpc3RzV2luZG93ID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgcmVzID0gdHlwZW9mIHdpbmRvdztcbiAgaWYocmVzID09PSBcInVuZGVmaW5lZFwiKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuY29uc3QgZXhpc3RzQ2FsbGJhY2sgPSBmdW5jdGlvbihiaW5kaW5nKSB7XG4gIGlmKCFiaW5kaW5nKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYoYmluZGluZy52YWx1ZSAmJiB0eXBlb2YgYmluZGluZy52YWx1ZSA9PT0gXCJmdW5jdGlvblwiKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBtYWtlUmVtb3ZlRXZlbnQgPSBmdW5jdGlvbihldmVudG5hbWUpe1xuICBjb25zdCByZW1vdmVFdmVudCA9IGZ1bmN0aW9uKGhhbmRsZXIpe1xuICAgIGlmKGV4aXN0c1dpbmRvdygpKXtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50bmFtZSwgaGFuZGxlcik7XG4gICAgfVxuICB9O1xuICByZXR1cm4gcmVtb3ZlRXZlbnQ7XG59O1xuXG5jb25zdCBtYWtlQWRkRXZlbnQgPSBmdW5jdGlvbihldmVudG5hbWUpe1xuICBjb25zdCBhZGRFdmVudCA9IGZ1bmN0aW9uKGhhbmRsZXIpe1xuICAgIGlmKGV4aXN0c1dpbmRvdygpKXtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50bmFtZSwgaGFuZGxlcik7XG4gICAgfVxuICB9O1xuICByZXR1cm4gYWRkRXZlbnQ7XG59O1xuXG5jb25zdCBtYWtlSGFuZGxlciA9IGZ1bmN0aW9uKGVsLCByZW1vdmVFdmVudCl7XG5cbiAgY29uc3QgaGFuZGxlciA9IGZ1bmN0aW9uKGV2dCl7XG4gICAgY29uc3QgdGd0X2FyZWEgPSBlbDtcbiAgICBpZighdGd0X2FyZWEgfHwgdGd0X2FyZWEubGVuZ3RoID09PSAwKXtcbiAgICAgIHJlbW92ZUV2ZW50KGhhbmRsZXIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBhcnJheSA9IGV2dC5wYXRoO1xuICAgIGxldCBleGlzdHMgPSBmYWxzZTtcbiAgICAvLyBsZXQgY291bnRlciA9IDA7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgIC8vIGNvdW50ZXIrKztcbiAgICAgIGNvbnN0IHAgPSBhcnJheVtpXTtcbiAgICAgIGlmKHRndF9hcmVhID09PSBwKXtcbiAgICAgICAgZXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmKHRndF9hcmVhIGluc3RhbmNlb2YgQXJyYXkpe1xuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgdGd0X2FyZWEubGVuZ3RoOyBqKyspe1xuICAgICAgICAgIC8vIGNvdW50ZXIrKztcbiAgICAgICAgICBjb25zdCBlbG0gPSB0Z3RfYXJlYVtqXTtcbiAgICAgICAgICBpZihlbG0gPT09IHApe1xuICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihlbG0uJGVsID09PSBwKXtcbiAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoZXhpc3RzKXtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICB9XG4gICAgaWYoIWV4aXN0cyl7XG4gICAgICAvLyBjYigpO1xuICAgICAgZXhlY3V0ZUNhbGxiYWNrKGVsKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGhhbmRsZXI7XG5cbn07XG5cbmNvbnN0IHNldE91dHNpZGUgPSBmdW5jdGlvbihldnRuYW1lLCBlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKXtcblxuICBpZighZXhpc3RzQ2FsbGJhY2soYmluZGluZykpe1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGNiID0gYmluZGluZy52YWx1ZTtcblxuICBjb25zdCByZW1vdmVFdmVudCA9IG1ha2VSZW1vdmVFdmVudChldnRuYW1lKTtcbiAgY29uc3QgYWRkRXZlbnQgPSBtYWtlQWRkRXZlbnQoZXZ0bmFtZSk7XG5cbiAgY29uc3QgY2xpY2tIYW5kbGVyID0gbWFrZUhhbmRsZXIoZWwsIHJlbW92ZUV2ZW50KTtcblxuICBsZXQgd29ya2luZyA9IGZhbHNlO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0ge1xuICAgIGV2dG5hbWU6IGV2dG5hbWUsXG4gICAgZWw6IGVsLFxuICAgIGNhbmNlbDogZnVuY3Rpb24oKXtcbiAgICAgIHJlbW92ZUV2ZW50KGNsaWNrSGFuZGxlcik7XG4gICAgICB3b3JraW5nID0gZmFsc2U7XG4gICAgfSxcbiAgICBnZXQgd29ya2luZygpe1xuICAgICAgcmV0dXJuIHdvcmtpbmc7XG4gICAgfSxcbiAgICBjYjogY2JcbiAgfTtcblxuICBpZighZWwgfHwgIWNiKXtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICByZW1vdmVFdmVudChjbGlja0hhbmRsZXIpO1xuICBhZGRFdmVudChjbGlja0hhbmRsZXIpO1xuICB3b3JraW5nID0gdHJ1ZTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xuXG59O1xuXG5jb25zdCBjYWNoZSA9IFtdO1xuXG5jb25zdCBmaW5kVGVtcEJ5RWxlbWVudCA9IGZ1bmN0aW9uKGVsKXtcbiAgY29uc3QgaW5kID0gY2FjaGUuZmluZEluZGV4KGVsbSA9PiBlbG0uZWwgPT09IGVsKTtcbiAgcmV0dXJuIHtcbiAgICBpbmRleDogaW5kLFxuICAgIHRlbXA6IGNhY2hlW2luZF1cbiAgfTtcbn07XG5cbmNvbnN0IGV4ZWN1dGVDYWxsYmFjayA9IGZ1bmN0aW9uKGVsKXtcbiAgY29uc3QgdGVtcCA9IGZpbmRUZW1wQnlFbGVtZW50KGVsKS50ZW1wO1xuICBpZighdGVtcCl7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmKHRlbXAuY2IgJiYgdHlwZW9mIHRlbXAuY2IgPT09IFwiZnVuY3Rpb25cIil7XG4gICAgdGVtcC5jYigpO1xuICB9XG59O1xuXG5jb25zdCB1cGRhdGVDYWxsYmFjayA9IGZ1bmN0aW9uKGVsLCBjYil7XG4gIGlmKGNiICYmIHR5cGVvZiBjYiA9PT0gXCJmdW5jdGlvblwiKXtcbiAgICBjb25zdCB0ZW1wID0gZmluZFRlbXBCeUVsZW1lbnQoZWwpLnRlbXA7XG4gICAgaWYodGVtcCl7XG4gICAgICB0ZW1wLmNiID0gY2I7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBzdGFydCA9IGZ1bmN0aW9uKGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpe1xuXG4gIGNvbnN0IGV2dG5hbWUgPSBkZXRlY3RFdmVudChiaW5kaW5nKTtcbiAgaWYoIWV2dG5hbWUpe1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHRlbXAgPSBzZXRPdXRzaWRlKGV2dG5hbWUsIGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpO1xuICBjb25zb2xlLmluZm8oXCJpbnN0YXJ0XCIsIHRlbXApO1xuICBjYWNoZS5wdXNoKHRlbXApO1xufTtcblxuY29uc3QgZW5kID0gZnVuY3Rpb24oZWwpe1xuICBjb25zdCB7IHRlbXAsIGluZGV4IH0gPSBmaW5kVGVtcEJ5RWxlbWVudChlbClcbiAgY29uc3QgY2FuY2VsID0gdGVtcC5jYW5jZWw7XG4gIGlmKHR5cGVvZiBjYW5jZWwgPT09IFwiZnVuY3Rpb25cIil7XG4gICAgY2FuY2VsKCk7XG4gIH1cbiAgY2FjaGUuc3BsaWNlKGluZGV4LCAxKTtcbn07XG5cbmNvbnN0IGRldGVjdEV2ZW50ID0gZnVuY3Rpb24oYmluZGluZyl7XG5cbiAgaWYoIWJpbmRpbmcpe1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBiaW5kaW5nLm5hbWU7XG4gIGNvbnN0IGFyciA9IG5hbWUuc3BsaXQoXCItXCIpO1xuICBjb25zdCBldnRuYW1lID0gYXJyLnBvcCgpO1xuICBjb25zdCBldnRzID0gW1xuICAgIFwiY2xpY2tcIixcbiAgICBcIm1vdXNlZG93blwiLFxuICAgIFwibW91c2V1cFwiLFxuICAgIFwibW91c2VlbnRlclwiLFxuICAgIFwibW91c2VvdmVyXCIsXG4gICAgXCJtb3VzZW1vdmVcIixcbiAgICBcInRvdWNoc3RhcnRcIixcbiAgICBcInRvdWNoZW5kXCJcbiAgXTtcblxuICBjb25zdCBleGlzdHMgPSBldnRzLmZpbHRlcihlbG0gPT4gZWxtID09PSBldnRuYW1lKTtcbiAgaWYoZXhpc3RzKXtcbiAgICByZXR1cm4gZXZ0bmFtZTtcbiAgfVxuICByZXR1cm47XG59O1xuXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBiaW5kOiBmdW5jdGlvbihlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKXtcbiAgICBjb25zb2xlLmluZm8odGhpcywgYXJndW1lbnRzKVxuICAgIC8vIGNvbnNvbGUuaW5mbyhcImJpbmRcIiwgZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSk7XG5cbiAgICBzdGFydChlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKTtcblxuICB9LFxuICBpbnNlcnRlZDogZnVuY3Rpb24oZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSl7XG4gICAgLy8gY29uc29sZS5pbmZvKFwiaW5zZXJ0ZWRcIiwgZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSk7XG5cbiAgfSxcbiAgdXBkYXRlOiBmdW5jdGlvbihlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKXtcbiAgICAvLyBjb25zb2xlLmluZm8oXCJ1cGRhdGVcIiwgZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSk7XG4gICAgdXBkYXRlQ2FsbGJhY2soZWwsIGJpbmRpbmcudmFsdWUpO1xuXG4gIH0sXG4gIGNvbXBvbmVudFVwZGF0ZWQ6IGZ1bmN0aW9uKGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpe1xuICAgIC8vIGNvbnNvbGUuaW5mbyhcImNvbXBvbmVudFVwZGF0ZWRcIiwgZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSk7XG4gIH0sXG4gIHVuYmluZDogZnVuY3Rpb24oZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSl7XG4gICAgLy8gY29uc29sZS5pbmZvKFwidW5iaW5kXCIsIGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpO1xuICAgIGVuZChlbCk7XG4gIH0sXG59OyIsImltcG9ydCBkaXJlY3RpdmUgZnJvbSBcIi4vZGlyZWN0aXZlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRpcmVjdGl2ZTsiXSwic291cmNlUm9vdCI6IiJ9