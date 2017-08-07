import vdom from './vdom/vdom';
import diff from './diff/diff';
import getRefs from './refs/getRefs';

class Millennium  {

  /**
   * Generates a virtual DOM representation as a plane Object
   *
   * @param {(string|function)} type - Element type
   * @param {object} props - All Props and values
   * @param {...(string|vdom|array)} children -  Child elements
   *
   * @returns {object} Virtual DOM representation as a plane object
   *
   */

  component(type, props, ...children) {
    return vdom(type, props, ...children);
  }

  /**
   * Diff the virtual representations and render the changes in real DOM
   * Get all references and set in Refs object
   *
   * @param {object} newVNode - New virtual node for diff
   * @param {object} parent -  The root element for render
   *
   */

  render(newVNode, parent) {
    diff(parent, newVNode, this.oldVNode);
    getRefs(this.refs);
    this.oldVNode = newVNode;
  }

}

export default new Millennium();
