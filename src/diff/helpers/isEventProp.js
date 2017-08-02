/**
 * Check if the Prop is a event (If has the 'on' prefix)
 * @module src/diff/helpers/isEventProp
 *
 * @param {string} propName - Prop name
 *
 * @returns {boolean}
 *
 */

export default function isEventProp(propName) {
  return /^on/.test(propName);
}
