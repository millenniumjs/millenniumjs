import jsdom from 'mocha-jsdom';
import { expect } from 'chai';
import makeElements from '../src/diff/makeElements/makeElements';
import vdom from '../src/vdom/vdom';
import addProp from '../src/diff/diffProps/helpers/addProp';

describe('addProp()', () => {

  jsdom()

  // --------------------------
  it('Should return the same real DOM element with a new class prop', () => {

    const element = makeElements({type: 'div'});
    addProp(element, 'className', 'main');

    expect(element.className).to.be.equal('main');
  });

  // --------------------------
  it('Should return the same real DOM element with a new prop', () => {

    const element = makeElements({
      type: 'input',
      props: {id: 'section'}
    });

    addProp(element, 'type', 'text');

    expect(element.type).to.be.equal('text');
  });

});
