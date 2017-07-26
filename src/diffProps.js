import addProp from './addProp';
import removeProp from './removeProp';

/**
 * Diff all props
 * @module src/diffProps
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
 * @param {object} propName - Prop Name
 * @param {object} newValue - New prop Value
 * @param {object} oldValue - Old prop value
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

}
