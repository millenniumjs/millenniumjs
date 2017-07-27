/**
 * Check if the virtual nodes are different
 * @module src/isDifferentNode
 *
 * @param {object} vNode - virtual DOM representation
 * @param {object} vNode - virtual DOM representation
 *
 * @returns {boolean}
 *
 */

export default function isDifferentNode(VNode1, VNode2) {

  const isDifferentType = typeof VNode1 !== typeof VNode2;
  const isDifferentTextNode = typeof VNode1 === 'string' && VNode1 !== VNode2;
  const isDifferentElement = VNode1.type !== VNode2.type;

  return isDifferentType || isDifferentTextNode || isDifferentElement;

}
