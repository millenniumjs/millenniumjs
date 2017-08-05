import vdom from './vdom/vdom';
import diff from './diff/diff';
import getRefs from './refs/getRefs';

class Millennium  {

  constructor() {
    this.oldVNode = null;
    this.refs = {};
  }

  component(type, props, ...children) {
    return vdom(type, props, ...children);
  }

  render(newVNode, parent) {
    diff(parent, newVNode, this.oldVNode);
    getRefs(this.refs);
    this.oldVNode = newVNode;
  }

}

export default new Millennium();
