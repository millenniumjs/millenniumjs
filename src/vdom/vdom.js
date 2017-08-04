/**
 * Generates a virtual DOM representation as a plane Object.
 * @module src/vdom
 *
 * @param {(string|function)} type - Element type.
 * @param {object} props - All Props and values.
 * @param {...(string|vdom)} children -  Child elements (String or vdom)
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
 *  vdom('input', {className: 'foo', type: 'text'})
 *);
 */

export default (type, props, ...children) => {

  // Check if type is a function provided by JSX
  if(typeof type !== 'string') {
    // Run the function with parameters for render internal nodes
    return type(props);
  }

  return {type, props: props || {}, children};

};
