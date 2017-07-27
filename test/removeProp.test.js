import jsdom from 'mocha-jsdom';
import { expect } from 'chai';
import makeElements from '../src/diff/makeElements/makeElements';
import vdom from '../src/vdom/vdom';
import removeProp from '../src/diff/diffProps/helpers/removeProp';

describe('removeProp()', () => {

  jsdom()

  // --------------------------
  it('Should return the same real DOM element with a removed prop', () => {

    const element = makeElements({
      type: 'h1',
      props: {id: 'heading'}
    });

    removeProp(element, 'id');

    expect(element.id).to.be.equal('');
  });

  // --------------------------
  it('Should return the same real DOM element with a removed class prop', () => {

    const element = makeElements({
      type: 'h1',
      props: {className: 'heading'}
    });

    removeProp(element, 'className');

    expect(element.className).to.be.equal('');
  });

});
