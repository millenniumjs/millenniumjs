/*eslint max-len: off*/

/**
 * Diff the old and new virtual text node representations
 * @module src/diff/diffTextNodes/diffTextNodes
 *
 * @param {object} $parent - parent element
 * @param {string} newTextNode - virtual new text representation
 * @param {string} oldTextNode - virtual old text representation
 * @param {number} index - Child node index
*
 */

export default function diffTextNodes($parent, newTextNode, oldTextNode, index = 0) {

  // Add new text node
  // --------------------------
  if (!oldTextNode) {

    const $newTextNode = document.createTextNode(newTextNode);
    $parent.appendChild($newTextNode);

  // Remove deleted text node
  // --------------------------
  } else if (!newTextNode) {

    const $oldTextNode = $parent.childNodes[index];
    $parent.removeChild($oldTextNode);

  // Replace different text nodes
  // --------------------------
  } else if (newTextNode !== oldTextNode) {

    const $newTextNode = document.createTextNode(newTextNode);
    const $oldTextNode = $parent.childNodes[index];
    $parent.replaceChild($newTextNode, $oldTextNode);

  }

}
