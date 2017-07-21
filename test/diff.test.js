import jsdom from 'mocha-jsdom';
import { expect } from 'chai';
import makeElements from '../src/makeElements.js';
import vdom from '../src/vdom.js';
import diff from '../src/diff.js';

describe('diff() - Diff virtual DOM and render changes in real DOM', () => {

  jsdom()

  // First render
  // --------------------------
  it('Should return a first render: parent element', () => {

    const parent = makeElements({type: 'div'})
    const firstNode = vdom('h1')

    diff(parent, firstNode)

    const newNodeTextContent = parent.nodeName;
    expect(newNodeTextContent).to.deep.equal('DIV');

  });

  // --------------------------
  it('Should return a first render: One child element', () => {

    const parent = makeElements({type: 'div',})
    const firstNode = vdom('h1')

    diff(parent, firstNode)

    const newNodeTextContent = parent.childNodes[0].nodeName;
    expect(newNodeTextContent).to.deep.equal('H1');

  });

  // --------------------------
  it('Should return a first render: One child element with props', () => {

    const parent = makeElements({type: 'div',})
    const firstNode = vdom('h1', {className: 'heading'})

    diff(parent, firstNode)

    const newNodeTextContent = parent.childNodes[0].className;
    expect(newNodeTextContent).to.deep.equal('heading');

  });

  // --------------------------
  it('Should return a first render: One child element with text node', () => {

    const parent = makeElements({type: 'div',})
    const firstNode = vdom('h1', null, 'hello')

    diff(parent, firstNode)

    const newNodeTextContent = parent.childNodes[0].textContent;
    expect(newNodeTextContent).to.deep.equal('hello');

  });

  // --------------------------
  it('Should return a first render: One child element with deep child element', () => {

    const parent = makeElements({type: 'div',})
    const firstNode = vdom(
      'p',
      null,
      vdom('h1')
    )

    diff(parent, firstNode)

    const newNodeTextContent = parent.childNodes[0].childNodes[0].nodeName;
    expect(newNodeTextContent).to.deep.equal('H1');

  });

  // --------------------------
  it('Should return a first render: One child element with deep child props', () => {

    const parent = makeElements({type: 'div',})
    const firstNode = vdom(
      'p',
      null,
      vdom('h1', {id: 'heading1'})
    )

    diff(parent, firstNode)

    const newNodeTextContent = parent.childNodes[0].childNodes[0].id;
    expect(newNodeTextContent).to.deep.equal('heading1');

  });

  // --------------------------
  it('Should return a first render: One child element with deep child text node', () => {

    const parent = makeElements({type: 'div',})
    const firstNode = vdom(
      'p',
      null,
      vdom('h1', null, 'hello')
    )

    diff(parent, firstNode)

    const newNodeTextContent = parent.childNodes[0].childNodes[0].textContent;
    expect(newNodeTextContent).to.deep.equal('hello');

  });

  // Add new node
  // --------------------------

  it('Should return a new element', () => {

    const parent = makeElements({type: 'div'})

    const oldNode = vdom(
      'ul',
      null,
      vdom('li')
    )
    const newNode = vdom(
      'ul',
      null,
      vdom('li'),
      vdom('li')
    )

    diff(parent, oldNode)
    diff(parent, newNode, oldNode)

    const newNodeTextContent = parent.childNodes[0].childNodes[1].nodeName;
    expect(newNodeTextContent).to.deep.equal('LI');

  });

  // --------------------------

  it('Should return a new element with props', () => {

    const parent = makeElements({type: 'div'})

    const oldNode = vdom(
      'ul',
      null,
      vdom('li')
    )
    const newNode = vdom(
      'ul',
      null,
      vdom('li'),
      vdom('li', {id: 'list-item'})
    )

    diff(parent, oldNode)
    diff(parent, newNode, oldNode)

    const newNodeTextContent = parent.childNodes[0].childNodes[1].id;
    expect(newNodeTextContent).to.deep.equal('list-item');

  });

  // --------------------------

  it('Should return a new element with text node', () => {

    const parent = makeElements({type: 'div'})

    const oldNode = vdom(
      'ul',
      null,
      vdom('li')
    )
    const newNode = vdom(
      'ul',
      null,
      vdom('li'),
      vdom('li', null, 'hello')
    )

    diff(parent, oldNode)
    diff(parent, newNode, oldNode)

    const newNodeTextContent = parent.childNodes[0].childNodes[1].textContent;
    expect(newNodeTextContent).to.deep.equal('hello');

  });

  // Remove deleted node
  // --------------------------

  it('Should return a list of elements with a randon removed element', () => {

    const parent = makeElements({type: 'div'})

    const oldNode = vdom(
      'ul',
      null,
      vdom('li'),
      vdom('li'),
      vdom('li')
    )
    const newNode = vdom(
      'ul',
      null,
      vdom('li'),
      vdom('li')
    )

    diff(parent, oldNode)
    diff(parent, newNode, oldNode)

    const newNodeTextContent = parent.childNodes[0].childNodes.length;
    expect(newNodeTextContent).to.deep.equal(2);

  });

  it('Should return a list of elements with a specific removed element', () => {

    const parent = makeElements({type: 'div'})

    const oldNode = vdom(
      'ul',
      null,
      vdom('li', null, 'item 1'),
      vdom('li', null, 'item 2'),
      vdom('li', null, 'item 3')
    )
    const newNode = vdom(
      'ul',
      null,
      vdom('li', null, 'item 1'),
      vdom('li', null, 'item 3')
    )

    diff(parent, oldNode)
    diff(parent, newNode, oldNode)

    const newNodeTextContent = parent.childNodes[0].childNodes[1].textContent;
    expect(newNodeTextContent).to.deep.equal('item 3');

  });

  // Replace different node
  // --------------------------

  it('Should return a different element', () => {

    const parent = makeElements({type: 'div'})

    const oldNode = vdom('h1')
    const newNode = vdom('h2')

    diff(parent, oldNode)
    diff(parent, newNode, oldNode)

    const newNodeTextContent = parent.childNodes[0].nodeName;
    expect(newNodeTextContent).to.deep.equal('H2');

  });

  // --------------------------

  it('Should return the same element with a different text node', () => {

    const parent = makeElements({type: 'div'})

    const oldNode = vdom('h1', null, 'text')
    const newNode = vdom('h1', null, 'changed text')

    diff(parent, oldNode)
    diff(parent, newNode, oldNode)

    const newNodeTextContent = parent.childNodes[0].textContent;
    expect(newNodeTextContent).to.deep.equal('changed text');

  });

  // --------------------------

  it('Should return the same element with a different child element', () => {

    const parent = makeElements({type: 'div'})

    const oldChildNode = vdom('div')
    const oldNode = vdom('p', null, oldChildNode)

    const newChildNode = vdom('div')
    const newNode = vdom('h1', null, newChildNode)

    diff(parent, oldNode)
    diff(parent, newNode, oldNode)

    const newNodeTextContent = parent.childNodes[0].nodeName;
    expect(newNodeTextContent).to.deep.equal('H1');

  });

  // --------------------------

  it('Should return the same child element with a different text node', () => {

    const parent = makeElements({type: 'div'})

    const oldChildNode = vdom('div', null, 'text')
    const oldNode = vdom('p', null, oldChildNode)

    const newChildNode = vdom('div', null, 'changed text')
    const newNode = vdom('p', null, newChildNode)

    diff(parent, oldNode)
    diff(parent, newNode, oldNode)

    const newNodeTextContent = parent.childNodes[0].textContent;
    expect(newNodeTextContent).to.deep.equal('changed text');

  });

});
