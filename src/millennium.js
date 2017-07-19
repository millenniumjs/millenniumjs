import vdom from './vdom';
import makeElements from './makeElements';

class Millennium  {

  component(a,b,...c) {
    return vdom(a,b,...c)
  }

  render(vdom, parent) {
    parent.innerHTML = '';
    const realDom = makeElements(vdom);
    parent.appendChild(realDom);
  }

};

export default new Millennium();
