import { expect } from 'chai';
import isDifferentNode from '../src/isDifferentNode.js';

describe('isDifferentNode()', () => {

  // --------------------------

  it('Should return that the nodes are different by element type', () => {

    const vNode1 = {
      type: 'h1',
      props: null,
      children: null
    }

    const vNode2 = {
      type: 'h2',
      props: null,
      children: null
    }

    const result = isDifferentNode(vNode1, vNode2);
    expect(result).to.deep.equal(true);

  });

  // --------------------------

  it('Should return that the nodes are equal by element type', () => {

    const vNode1 = {
      type: 'h1',
      props: null,
      children: null
    }

    const vNode2 = {
      type: 'h1',
      props: null,
      children: null
    }

    const result = isDifferentNode(vNode1, vNode2);
    expect(result).to.deep.equal(false);

  });

  // --------------------------

  it('Should return that the text nodes are different', () => {

    const vNode1 = 'Hello World';
    const vNode2 = 'Hello World 2';

    const result = isDifferentNode(vNode1, vNode2);

    expect(result).to.deep.equal(true);

  });

  it('Should return that the text nodes are equal', () => {

    const vNode1 = 'Hello World';
    const vNode2 = 'Hello World';

    const result = isDifferentNode(vNode1, vNode2);

    expect(result).to.deep.equal(false);

  });

});
