import extractEventName from './extractEventName';

/**
 * Remove event listeners
 * @module src/diff/helpers/removeEventListener
 *
 * @param {object} element - Real DOM Element
 * @param {string} propName - The event name
 * @param {function} callBack - The callback function
 *
 */

export default function removeEventListener(element, propName, callBack) {

  element.removeEventListener(
    extractEventName(propName),
    callBack
  );

}
