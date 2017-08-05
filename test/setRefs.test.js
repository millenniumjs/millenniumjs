import jsdom from 'mocha-jsdom';
import { expect } from 'chai';
import makeElements from '../src/diff/makeElements/makeElements';
import getRefs from '../src/refs/getRefs';

describe('getRefs()', () => {

  jsdom()

  // --------------------------
  it('Should return an element by ref in local DOM', () => {

    const realNode = makeElements({
      type: 'div',
      props: null,
      children: [
        {
          type: 'input',
          props: {ref: 'inputText', value: 'content'},
          children: []
        }
      ]
    })

    const refs = {};

    getRefs(refs, realNode);

    const inputValue = refs.inputText.value;
    expect(inputValue).to.be.equal('content');

  });

  // --------------------------
  it('Should return multiple element by ref in local DOM', () => {

    const realNode = makeElements({
      type: 'div',
      props: null,
      children: [
        {
          type: 'input',
          props: {ref: 'inputText', value: 'content'},
          children: []
        },
        {
          type: 'label',
          props: {ref: 'labelText', className: 'text'},
          children: ['Login']
        }
      ]
    })

    const refs = {};

    getRefs(refs, realNode);

    const inputValue = refs.inputText.value;
    const labelClass = refs.labelText.className;

    expect(inputValue).to.be.equal('content');
    expect(labelClass).to.be.equal('text');

  });

});
