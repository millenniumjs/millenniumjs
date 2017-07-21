/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function makeElements(e){if("string"==typeof e)return document.createTextNode(e);var n=document.createElement(e.type);if(e.props&&Object.keys(e.props).forEach(function(t){n[t]=e.props[t]}),"string"==typeof e.children){var t=document.createTextNode(e);n.appendChild(t)}else if(e.children){var r=n.appendChild.bind(n);e.children.map(makeElements).forEach(r)}return n}function isDifferentNode(e,n){var t=(void 0===e?"undefined":_typeof(e))!==(void 0===n?"undefined":_typeof(n)),r="string"==typeof e&&e!==n,o=e.type!==n.type;return t||r||o}function updateElement(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(t)if(n){if(isDifferentNode(n,t)){var o=makeElements(n),l=e.childNodes[r];e.replaceChild(o,l)}else if(n.children)for(var i=n.children.length,a=t.children.length,c=0;c<i||c<a;c++)updateElement(e.childNodes[r],n.children[c],t.children[c],c)}else{var d=e.childNodes[r];e.removeChild(d)}else{var f=makeElements(n);e.appendChild(f)}}var vdom=function(e,n){for(var t=arguments.length,r=Array(t>2?t-2:0),o=2;o<t;o++)r[o-2]=arguments[o];return{type:e,props:n,children:r}},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},classCallCheck=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")},createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),Millennium=function(){function e(){classCallCheck(this,e),this.oldVNode=null}return createClass(e,[{key:"component",value:function(e,n){for(var t=arguments.length,r=Array(t>2?t-2:0),o=2;o<t;o++)r[o-2]=arguments[o];return vdom.apply(void 0,[e,n].concat(r))}},{key:"render",value:function(e,n){updateElement(n,e,this.oldVNode),this.oldVNode=e}}]),e}(),millennium=new Millennium;/* harmony default export */ __webpack_exports__["a"] = (millennium);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dist_millennium__ = __webpack_require__(0);


// let clock1 = millennium.component('div', null, new Date().toLocaleTimeString());
// millennium.render(document.getElementById('app'), clock1);

const tick = () => {



  const clock = __WEBPACK_IMPORTED_MODULE_0__dist_millennium__["a" /* default */].component(
    'div',
    null,
    new Date().toLocaleTimeString()
  )

  const p = __WEBPACK_IMPORTED_MODULE_0__dist_millennium__["a" /* default */].component(
    'p',
    {className: 'paragraph'},
    clock

);



__WEBPACK_IMPORTED_MODULE_0__dist_millennium__["a" /* default */].render(p, document.getElementById('app'));
}

setInterval(tick, 1000);


/***/ })
/******/ ]);