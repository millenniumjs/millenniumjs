import jsdom from 'mocha-jsdom';
import { expect } from 'chai';
import makeElements from '../src/diff/makeElements/makeElements';

describe('makeElements() - Make real DOM element ', () => {

  jsdom()

  // --------------------------

  it('Should return a real DOM element', () => {

    const realNode = makeElements({type: 'h1'})
    const realNodeName = realNode.nodeName;

    expect(realNodeName).eql('H1');

  });

  // --------------------------

  it('Should return a real DOM element with prop', () => {

    const realNode = makeElements({
      type: 'h1',
      props: { id: 'heading' }
    })

    const realNodeId = realNode.id;

    expect(realNodeId).eql('heading');

  });

  // --------------------------
  it('Should return a real DOM element with an attached event', () => {

    let state = 'No click event';

    const realNode = makeElements({
      type: 'div',
      props: {onClick: () => state = 'Has click event'}
    });

    realNode.click();

    expect(state).to.be.equal('Has click event');
  });

  // --------------------------

  it('Should return a real DOM element with a text child', () => {

    const realNode = makeElements({
      type: 'h1',
      props: null,
      children: ['text']
    })

    const realNodeTextChild = realNode.childNodes[0].textContent;

    expect(realNodeTextChild).eql('text');

  });

  // --------------------------

  it('Should return a real child element', () => {

    const realNode = makeElements({
      type: 'div',
      props: null,
      children: [
        {type: 'p'}
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
          props: { className: 'paragraph' }
        }
      ]
    })

    const realNodeChildClass = realNode.childNodes[0].className;

    expect(realNodeChildClass).eql('paragraph');

  });

  // --------------------------

  it('Should return a real child with an attached event', () => {

    let state = 'No click event';

    const realNode = makeElements({
      type: 'div',
      props: null,
      children: [
        {
          type: 'p',
          props: {onClick: () => state = 'Has click event'},
          children: ['hello']
        }
      ]
    })

    realNode.childNodes[0].click();

    expect(state).to.be.equal('Has click event');
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

    const realNodeTextChild = realNode.childNodes[0].childNodes[0].textContent;

    expect(realNodeTextChild).eql('hello');

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
