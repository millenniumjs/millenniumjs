/**
 * Diff the old and new virtual text node representations
 * @module src/diff/diffTextNodes/diffTextNodes
 *
 * @param {object} $parent - parent element
 * @param {string} newTextNode - virtual new text representation
 * @param {string} oldTextNode - virtual old text representation
 *
 */

export default function diffTextNodes($parent, newTextNode, oldTextNode) {

  // Add new text node
  // --------------------------
  if (!oldTextNode) {

    const $newTextNode = document.createTextNode(newTextNode);
    $parent.appendChild($newTextNode);

  // Remove deleted text node
  // --------------------------
  } else if (!newTextNode) {

    const $oldTextNode = $parent.childNodes[0];
    $parent.removeChild($oldTextNode);

  // Replace different text nodes
  // --------------------------
  } else if (newTextNode !== oldTextNode) {

    const $newTextNode = document.createTextNode(newTextNode);
    const $oldTextNode = $parent.childNodes[0];
    $parent.replaceChild($newTextNode, $oldTextNode);

  }

}
