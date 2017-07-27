function makeElements(e){if("string"==typeof e)return document.createTextNode(e);var n=document.createElement(e.type);if(e.props&&Object.keys(e.props).forEach(function(t){n[t]=e.props[t]}),"string"==typeof e.children){var t=document.createTextNode(e);n.appendChild(t)}else if(e.children){var o=n.appendChild.bind(n);e.children.map(makeElements).forEach(o)}return n}function isDifferentNode(e,n){var t=(void 0===e?"undefined":_typeof(e))!==(void 0===n?"undefined":_typeof(n)),o=e.type!==n.type;return t||o}function addProp(e,n,t){"className"===n?e.setAttribute("class",t):e.setAttribute(n,t)}function removeProp(e,n){"className"===n?e.removeAttribute("class"):e.removeAttribute(n)}function diffProps(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=Object.assign({},n,t);Object.keys(o).forEach(function(o){diffProp(e,o,n[o],t[o])})}function diffTextNodes(e,n,t){if(t)if(n){if(n!==t){var o=document.createTextNode(n),r=e.childNodes[0];e.replaceChild(o,r)}}else{var i=e.childNodes[0];e.removeChild(i)}else{var l=document.createTextNode(n);e.appendChild(l)}}function diffElement(e,n,t){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(t)if(n){if(isDifferentNode(n,t)){var r=makeElements(n),i=e.childNodes[o];e.replaceChild(r,i)}else if("string"==typeof n)diffTextNodes(e,n,t);else if(n.type&&(diffProps(e.childNodes[o],n.props,t.props),n.children))for(var l=n.children.length,d=t.children.length,f=0;f<l||f<d;f++)diffElement(e.childNodes[o],n.children[f],t.children[f],f)}else{var c=e.childNodes[o];e.removeChild(c)}else{var a=makeElements(n);e.appendChild(a)}}var vdom=function(e,n){for(var t=arguments.length,o=Array(t>2?t-2:0),r=2;r<t;r++)o[r-2]=arguments[r];return{type:e,props:n||{},children:o}},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},classCallCheck=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")},createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),diffProp=function(e,n,t,o){o?t?t!==o&&addProp(e,n,t):removeProp(e,n):addProp(e,n,t)},Millennium=function(){function e(){classCallCheck(this,e),this.oldVNode=null}return createClass(e,[{key:"component",value:function(e,n){for(var t=arguments.length,o=Array(t>2?t-2:0),r=2;r<t;r++)o[r-2]=arguments[r];return vdom.apply(void 0,[e,n].concat(o))}},{key:"render",value:function(e,n){diffElement(n,e,this.oldVNode),this.oldVNode=e}}]),e}(),millennium=new Millennium;export default millennium;
