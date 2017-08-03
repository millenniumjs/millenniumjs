/**
 * Extract the real event name (Remove the 'on' Prefix)
 * @function
 *
 * @param {string} propName - The event name
 *
 */

export default function extractEventName(propName) {
  return propName.slice(2).toLowerCase();
}
