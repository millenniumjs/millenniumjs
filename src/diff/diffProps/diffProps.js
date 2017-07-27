import addProp from './helpers/addProp';
import removeProp from './helpers/removeProp';

/**
 * Diff all props
 * @module src/diff/diffProps/diffProps
 *
 * @param {object} element - Element for diff
 * @param {object} newProps - All props in new Virtual DOM Element
 * @param {object} oldProps - All props in old Virtual DOM Element
 *
 */

export default function diffProps(element, newProps, oldProps = {}) {

  const allProps = Object.assign({}, newProps, oldProps);

  Object.keys(allProps).forEach(propName => {

    diffProp(
      element,
      propName,
      newProps[propName],
      oldProps[propName]
    );

  });

}

/**
 * Diff the a single  prop
 * @function
 *
 * @param {object} element - Element for prop diff
 * @param {string} propName - Prop Name
 * @param {string} newValue - New prop Value
 * @param {string} oldValue - Old prop value
 *
 */

const diffProp = (element, propName, newValue, oldValue) => {

  // Add new prop
  // --------------------------
  if (!oldValue) {
    addProp(element, propName, newValue);

  // Remove deleted prop
  // --------------------------
  } else if (!newValue) {
    removeProp(element, propName);

  // Replace different prop value
  // --------------------------
  } else if (newValue !== oldValue) {
    addProp(element, propName, newValue);
  }

};
