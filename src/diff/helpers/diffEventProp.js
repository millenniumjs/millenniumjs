import addEventListener from './addEventListener';
import removeEventListener from './removeEventListener';

/**
 * Diff the EventProps
 * @module src/diff/helpers/diffEventProp
 *
 * @param {object} element - Element for diff
 * @param {string} eventName - Prop name/Event name
 * @param {function} newCallBack -New callBack function
 * @param {function} oldCallBack - Old callBack function
 *
 */

export default function diffEventProp(element, eventName, newCallBack, oldCallBack) {

  // Add new eventListener
  // --------------------------
  if (!oldCallBack) {
    addEventListener(element, eventName, newCallBack);

  // Remove deleted eventListener
  // --------------------------
  } else if (!newCallBack) {
    removeEventListener(element, eventName, oldCallBack);

  // Replace different eventListener callBack
  // --------------------------
  } else if (isDifferentFunction(newCallBack, oldCallBack)) {

    removeEventListener(element, eventName, oldCallBack);
    addEventListener(element, eventName, newCallBack);

  }

}

/**
 * Check if the functions are different
 * @function
 *
 * @param {function} functionA - Function for test
 * @param {function} functionB - Function for test
 *
 * @returns {boolean}
 *
 */

const isDifferentFunction = (functionA, functionB) => {
  return functionA.toString( ) !== functionB.toString( );
};
