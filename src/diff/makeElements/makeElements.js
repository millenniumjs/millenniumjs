/**
 * Generate real DOM elements.
 * @module src/diff/makeElements/makeElements
 *
 * @param {object} vNode - virtual DOM representation
 *
 * @returns Real DOM elements.
 *
 */

export default function makeElements(vNode) {

  // Only text node
  // --------------------------
  if (typeof vNode === 'string') {
    return document.createTextNode(vNode);
  }

  // Element node
  // --------------------------
  const element = document.createElement(vNode.type);

  // props
  // --------------------------
  if(vNode.props) {
    Object.keys(vNode.props).forEach(propName => {
      element[propName] = vNode.props[propName];
    });
  }

  // children
  // --------------------------

  // text node
  if(typeof vNode.children === 'string') {

    const textNode = document.createTextNode(vNode);
    element.appendChild(textNode);

  } else {

    // Elements nodes
    if(vNode.children) {
      const appendElement = element.appendChild.bind(element);
      vNode.children.map(makeElements).forEach(appendElement);
    }

  }

  return element;

}
