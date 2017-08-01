import makeElements from './makeElements/makeElements';
import isDifferentNode from './helpers/isDifferentNode';
import diffProps from './diffProps/diffProps';
import diffTextNodes from './diffTextNodes/diffTextNodes';

/**
 * Diff the old and new virtual DOM representations
 * @module src/diff/diff
 *
 * @param {object} parent - parent element
 * @param {object} newNode - virtual DOM representation
 * @param {object} oldNode - virtual DOM representation
 * @param {number} index - Child node index
 *
 */

export default function diffElement(parent, newNode, oldNode, index = 0) {

  // Add new node
  // --------------------------
  if (!oldNode) {

    const newElement = makeElements(newNode);
    parent.appendChild(newElement);

  // Remove deleted node
  // --------------------------
  } else if (!newNode) {

    const oldElement = parent.childNodes[index];
    parent.removeChild(oldElement);

  // Replace different node
  // --------------------------
  } else if (isDifferentNode(newNode, oldNode)) {

    const newElement = makeElements(newNode);
    const oldElement = parent.childNodes[index];
    parent.replaceChild(newElement, oldElement);

  // diff text nodes
  // --------------------------
  } else if (typeof newNode === 'string') {
    diffTextNodes(parent, newNode, oldNode, index);

  // Same element node
  // --------------------------
  } else if (newNode.type) {

    // diff props
    // --------------------------
    diffProps(
      parent.childNodes[index],
      newNode.props,
      oldNode.props
    );

    // Children elements recursion
    // --------------------------
    if (newNode.children) {

      const newLength = newNode.children.length;
      const oldLength = oldNode.children.length;

      for (let i = 0; i < newLength || i < oldLength; i++) {
        diffElement(
          parent.childNodes[index],
          newNode.children[i],
          oldNode.children[i],
          i
        );
      }

    }

  }

}
