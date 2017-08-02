/**
 * Add event listeners
 * @module src/diff/helpers/addEventListener
 *
 * @param {object} element - Real DOM Element
 * @param {string} propName - The event name
 * @param {function} callBack - The callback function
 *
 */

export default function addEventListener(element, propName, callBack) {

  element.addEventListener(
    extractEventName(propName),
    callBack
  );

}


/**
 * Extract the real event name (Remove the 'on' Prefix)
 * @function
 *
 * @param {string} propName - The event name
 *
 */

const extractEventName = propName => {
  return propName.slice(2).toLowerCase();
};
