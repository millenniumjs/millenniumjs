import jsdom from 'mocha-jsdom';
import { expect } from 'chai';
import makeElements from '../src/makeElements.js';

describe('makeElements() - Make real DOM element ', () => {

  jsdom()

  // --------------------------

  it('Should return a real DOM element', () => {

    const realNode = makeElements({
      type: 'h1',
      props: null,
      children: null
    })

    const realNodeName = realNode.nodeName;

    expect(realNodeName).eql('H1');

  });

  // --------------------------

  it('Should return a real DOM element with prop', () => {

    const realNode = makeElements({
      type: 'h1',
      props: { id: 'heading' },
      children: null
    })

    const realNodeIdProp = realNode.id;

    expect(realNodeIdProp).eql('heading');

  });

  // --------------------------

  it('Should return a real DOM element with a text child', () => {

    const realNode = makeElements({
      type: 'h1',
      props: null,
      children: ['text']
    })

    const realNodeChildText = realNode.childNodes[0].textContent;

    expect(realNodeChildText).eql('text');

  });

  // --------------------------

  it('Should return a real child element', () => {

    const realNode = makeElements({
      type: 'div',
      props: null,
      children: [
        {
          type: 'p',
          props: null,
          children: null
        }
      ]
    })

    const realNodeChildName = realNode.childNodes[0].nodeName;

    expect(realNodeChildName).eql('P');

  });

  // --------------------------

  it('Should return a real child with prop', () => {

    const realNode = makeElements({
      type: 'div',
      props: null,
      children: [
        {
          type: 'p',
          props: { className: 'paragraph' },
          children: null
        }
      ]
    })

    const realNodeChildClassProp = realNode.childNodes[0].className;

    expect(realNodeChildClassProp).eql('paragraph');

  });

  // --------------------------

  it('Should return a real child with text child', () => {

    const realNode = makeElements({
      type: 'div',
      props: null,
      children: [
        {
          type: 'p',
          props: null,
          children: ['hello']
        }
      ]
    })

    const realNodeChildText = realNode.childNodes[0].childNodes[0].textContent;

    expect(realNodeChildText).eql('hello');

  });

  // --------------------------

  it('Should return a real child with other real child', () => {

    const realNode = makeElements({
      type: 'div',
      props: null,
      children: [
        {
          type: 'p',
          props: null,
          children: [
            {
              type: 'h1',
              props: null,
              children: 'hello'
            }
          ]
        }
      ]
    })

    const realNodeChildOfChildName = realNode.childNodes[0].childNodes[0].nodeName;

    expect(realNodeChildOfChildName).eql('H1');

  });

});
