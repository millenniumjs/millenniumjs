import jsdom from 'mocha-jsdom';
import { expect } from 'chai';
import makeElements from '../src/diff/makeElements/makeElements';
import diffTextNodes from '../src/diff/diffTextNodes/diffTextNodes';

describe('diffTextNodes()', () => {

  jsdom()

  // --------------------------

  it('Should return the same element with a new text child', () => {

    const $parent = makeElements({
      type: 'DIV',
      props: {}
    });

    const newTextNode = 'Hello World 2';

    diffTextNodes($parent, newTextNode);

    expect($parent.textContent).to.be.equal('Hello World 2');

  });

  // --------------------------

  it('Should return the same element with a removed text child', () => {

    const $parent = makeElements({
      type: 'DIV',
      props: {},
      children: 'Hello World'
    });

    const oldTextNode = 'Hello World';
    const newTextNode = null

    diffTextNodes($parent, newTextNode, oldTextNode);

    expect($parent.textContent).to.be.equal('');

  });

  // --------------------------

  it('Should return the same element with a different text child', () => {

    const $parent = makeElements({
      type: 'DIV',
      props: {},
      children: 'Hello World'
    });

    const oldTextNode = 'Hello World';
    const newTextNode = 'Hello World 2';

    diffTextNodes($parent, newTextNode, oldTextNode);

    expect($parent.textContent).to.be.equal('Hello World 2');

  });

});
