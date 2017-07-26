import makeElements from './makeElements.js';
import isDifferentNode from './isDifferentNode.js';
/**
 * Diff the old and new virtual DOM representations
 * @module src/diff
 *
 * @param {object} parent - parent element
 * @param {object} newNode - virtual DOM representation
 * @param {object} oldNode - virtual DOM representation
 * @param {number} index - Child node index
 *
 */

export default function updateElement(parent, newNode, oldNode, index = 0) {

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

  // Children recursion
  // --------------------------
  } else if (newNode.children) {

    const newLength = newNode.children.length;
    const oldLength = oldNode.children.length;

    for (let i = 0; i < newLength || i < oldLength; i++) {
      updateElement(
        parent.childNodes[index],
        newNode.children[i],
        oldNode.children[i],
        i
      );
    }

  }

}
