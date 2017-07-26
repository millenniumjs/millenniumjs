import jsdom from 'mocha-jsdom';
import {expect} from 'chai';
import makeElements from '../src/makeElements';
import vdom from '../src/vdom.js';
import removeProp from '../src/removeProp.js';

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
