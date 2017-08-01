/**
 * Add a new prop in any real DOM element
 * * @module src/diff/helpers/addProp
 *
 * @param {object} element - Real DOM element
 * @param {string} propName - New prop name
 * @param {string} propValue - New prop value
 *
 */

export default function addProp(element, propName, propValue) {
  if (propName === 'className') {
    element.setAttribute('class', propValue);
  } else {
    element.setAttribute(propName, propValue);
  }
}
