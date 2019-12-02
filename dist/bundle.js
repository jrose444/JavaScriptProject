/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/*! exports provided: canvas, canvas2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas", function() { return canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas2", function() { return canvas2; });
var canvas = function canvas() {
  var svg = d3.select(".chart-area").append("svg").attr("width", 400).attr("height", 400);
  var circle = svg.append("circle").attr("cx", 200).attr("cy", 200).attr("r", 100).attr("fill", "blue");
};
var canvas2 = function canvas2() {
  var svg = d3.select(".row").append("svg").attr("width", 400).attr("height", 400);
  var circle = svg.append("circle").attr("cx", 300).attr("cy", 200).attr("r", 100).attr("fill", "blue");
};

/***/ }),

/***/ "./src/graph.js":
/*!**********************!*\
  !*** ./src/graph.js ***!
  \**********************/
/*! exports provided: graph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graph", function() { return graph; });
var graph = function graph() {
  var margin = {
    top: 10,
    right: 40,
    bottom: 30,
    left: 30
  },
      width = 450 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;
  var svg = d3.select(".chart-area").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  var x = d3.scaleLinear().domain([0, 100]) // This is the min and the max of the data: 0 to 100 if percentages
  .range([0, 400]); // This is the corresponding value I want in Pixel
  // Show the axis that corresponds to this scale

  svg.append('g').attr("transform", "translate(0," + height + ")").call(d3.axisBottom(x));
  var y = d3.scaleLinear().domain([100, 0]) // This is the min and the max of the data: 0 to 100 if percentages
  .range([0, 400]); // This is the corresponding value I want in Pixel

  svg.append("g").attr("transform", "translate(0, 60)").call(d3.axisLeft(y));
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/canvas.js");
/* harmony import */ var _graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graph */ "./src/graph.js");


document.addEventListener("DOMContentLoaded", function () {
  console.log('hello');
  Object(_graph__WEBPACK_IMPORTED_MODULE_1__["graph"])(); //   canvas();
  //   canvas2();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsImNpcmNsZSIsImNhbnZhczIiLCJncmFwaCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0IiwieCIsInNjYWxlTGluZWFyIiwiZG9tYWluIiwicmFuZ2UiLCJjYWxsIiwiYXhpc0JvdHRvbSIsInkiLCJheGlzTGVmdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNs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LEVBQUksR0FBSixDQUhDLENBQVYsQ0F6QnVCLENBNEJIOztBQUVwQmxCLEtBQUcsQ0FDQUcsTUFESCxDQUNVLEdBRFYsRUFFR0MsSUFGSCxDQUVRLFdBRlIsRUFFcUIsa0JBRnJCLEVBR0dlLElBSEgsQ0FHUWxCLEVBQUUsQ0FBQ3FCLFFBQUgsQ0FBWUQsQ0FBWixDQUhSO0FBS0gsQ0FuQ00sQzs7Ozs7Ozs7Ozs7O0FDQVA7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBRSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2xEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0FuQixzREFBSyxHQUY2QyxDQUdwRDtBQUNBO0FBQ0MsQ0FMRCxFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGNvbnN0IGNhbnZhcyA9ICgpID0+IHtcbiAgY29uc3Qgc3ZnID0gZDNcbiAgICAuc2VsZWN0KFwiLmNoYXJ0LWFyZWFcIilcbiAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCA0MDApXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgNDAwKTtcblxuICBjb25zdCBjaXJjbGUgPSBzdmdcbiAgICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgLmF0dHIoXCJjeFwiLCAyMDApXG4gICAgLmF0dHIoXCJjeVwiLCAyMDApXG4gICAgLmF0dHIoXCJyXCIsIDEwMClcbiAgICAuYXR0cihcImZpbGxcIiwgXCJibHVlXCIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhbnZhczIgPSAoKSA9PiB7XG4gIGNvbnN0IHN2ZyA9IGQzXG4gICAgLnNlbGVjdChcIi5yb3dcIilcbiAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCA0MDApXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgNDAwKTtcblxuICBjb25zdCBjaXJjbGUgPSBzdmdcbiAgICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgLmF0dHIoXCJjeFwiLCAzMDApXG4gICAgLmF0dHIoXCJjeVwiLCAyMDApXG4gICAgLmF0dHIoXCJyXCIsIDEwMClcbiAgICAuYXR0cihcImZpbGxcIiwgXCJibHVlXCIpO1xufTtcbiIsImV4cG9ydCBjb25zdCBncmFwaCA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBtYXJnaW4gPSB7IHRvcDogMTAsIHJpZ2h0OiA0MCwgYm90dG9tOiAzMCwgbGVmdDogMzAgfSxcbiAgICAgIHdpZHRoID0gNDUwIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQsXG4gICAgICBoZWlnaHQgPSA1MDAgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcbiAgICBcbiAgICBjb25zdCBzdmcgPSBkM1xuICAgICAgLnNlbGVjdChcIi5jaGFydC1hcmVhXCIpXG4gICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSlcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIik7XG5cblxuICAgIGNvbnN0IHggPSBkM1xuICAgICAgLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWzAsIDEwMF0pIC8vIFRoaXMgaXMgdGhlIG1pbiBhbmQgdGhlIG1heCBvZiB0aGUgZGF0YTogMCB0byAxMDAgaWYgcGVyY2VudGFnZXNcbiAgICAgIC5yYW5nZShbMCwgNDAwXSk7IC8vIFRoaXMgaXMgdGhlIGNvcnJlc3BvbmRpbmcgdmFsdWUgSSB3YW50IGluIFBpeGVsXG5cbiAgICAvLyBTaG93IHRoZSBheGlzIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhpcyBzY2FsZVxuICAgIHN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkpO1xuXG4gICAgY29uc3QgeSA9IGQzXG4gICAgICAuc2NhbGVMaW5lYXIoKVxuICAgICAgLmRvbWFpbihbMTAwLCAwXSkgLy8gVGhpcyBpcyB0aGUgbWluIGFuZCB0aGUgbWF4IG9mIHRoZSBkYXRhOiAwIHRvIDEwMCBpZiBwZXJjZW50YWdlc1xuICAgICAgLnJhbmdlKFswLCA0MDBdKTsgLy8gVGhpcyBpcyB0aGUgY29ycmVzcG9uZGluZyB2YWx1ZSBJIHdhbnQgaW4gUGl4ZWxcblxuICAgIHN2Z1xuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsIDYwKVwiKVxuICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeSkpO1xuXG59IiwiaW1wb3J0IHsgY2FudmFzLCBjYW52YXMyIH0gZnJvbSAnLi9jYW52YXMnXG5pbXBvcnQge2dyYXBofSBmcm9tICcuL2dyYXBoJ1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdoZWxsbycpO1xuICBncmFwaCgpXG4vLyAgIGNhbnZhcygpO1xuLy8gICBjYW52YXMyKCk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=