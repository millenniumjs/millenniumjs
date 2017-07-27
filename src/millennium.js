import vdom from './vdom/vdom';
import diff from './diff/diff';

class Millennium  {
  constructor() {
    this.oldVNode = null;
  }

  component(a,b,...c) {
    return vdom(a,b,...c);
  }

  render(newVNode, parent) {
    diff(parent, newVNode, this.oldVNode);
    this.oldVNode = newVNode;
  }

}

export default new Millennium();
