/**
 * Get all refs in real DOM and set in virtual object
 * @module src/refs/getRefs
 *
 * @param {object} targetObj - Object for receive all references
 * @param {object} element - DOM node for search
 *
 */

export default (targetObj, element = document) => {

  element.querySelectorAll('[ref]').forEach((element) => {

    const refName = element.getAttribute('ref');
    const refValue = element;

    targetObj[refName] = refValue;

  });

};
