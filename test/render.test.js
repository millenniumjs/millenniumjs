import jsdom from 'mocha-jsdom';
import { expect } from 'chai';
import render from '../src/render.js';

describe('render() - Make real DOM element ', () => {

  jsdom()

  // --------------------------

  it('Should return real DOM element', () => {

    const realNode = render({
      type: 'h1',
      props: null,
      children: null
    })

    const realNodeName = realNode.nodeName;

    expect(realNodeName).eql('H1');

  });

  // --------------------------

  it('Should return real DOM element with prop', () => {

    const realNode = render({
      type: 'h1',
      props: { id: 'heading' },
      children: null
    })

    const realNodeIdProp = realNode.id;

    expect(realNodeIdProp).eql('heading');

  });

  // --------------------------

  it('Should return real DOM element with a text child', () => {

    const realNode = render({
      type: 'h1',
      props: null,
      children: ['text']
    })

    const realNodeChildText = realNode.childNodes[0].textContent;

    expect(realNodeChildText).eql('text');

  });

  // --------------------------

  it('Should return real DOM element with child', () => {

    const realNode = render({
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

});
