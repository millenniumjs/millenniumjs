/**
 * Generates a virtual DOM representation as a plane Object.
 * @module src/vdom
 *
 * @param {string} type - Element type.
 * @param {(object|null)} props - All Props and values.
 * @param {...(string|vdom)} children -  Child elements (String or vdom (Recursion)
 *
 * @returns {object} Virtual DOM representation as a plane object
 *
 * @example
 * import vdom from './vdom';
 *
 * // Text children
 * vdom(
 *  'h1',
 *  {className: 'foo'},
 *  'text'
 * );
 *
 *
 * // Vdom children (Recursion)
 * vdom(
 *  'div',
 *  {id: 'foo'},
 *  vdom('h1', null, 'text')
 * );
 *
 * // Multiple children
 * vdom(
 *  'form',
 *  null,
 *  'text',
 *  vdom('label', null, 'text'),
 *  vdom('input', {className: 'foo', type: 'text'}, null)
 *);
 */

export default (type, props, ...children) => {
  return { type, props, children };
}
