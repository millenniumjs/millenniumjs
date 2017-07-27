import jsdom from 'mocha-jsdom';
import { expect, should } from 'chai';
import makeElements from '../src/diff/makeElements/makeElements';
import vdom from '../src/vdom/vdom';
import diff from '../src/diff/diff';

describe('diff()', () => {

  describe('First render', () => {

    jsdom()

    // First render
    // --------------------------
    it('Should return a first render: parent element', () => {

      const parent = makeElements({type: 'div'})
      const firstNode = vdom('h1')

      diff(parent, firstNode)

      const parentNodeName = parent.nodeName;
      expect(parentNodeName).to.deep.equal('DIV');

    });

    // --------------------------
    it('Should return a first render: One child element', () => {

      const parent = makeElements({type: 'div',})
      const firstNode = vdom('h1')

      diff(parent, firstNode)

      const childNodeName = parent.childNodes[0].nodeName;
      expect(childNodeName).to.deep.equal('H1');

    });

    // --------------------------
    it('Should return a first render: One child element with props', () => {

      const parent = makeElements({type: 'div',})
      const firstNode = vdom('h1', {className: 'heading'})

      diff(parent, firstNode)

      const childNodeClassName = parent.childNodes[0].className;
      expect(childNodeClassName).to.deep.equal('heading');

    });

    // --------------------------
    it('Should return a first render: One child element with text node', () => {

      const parent = makeElements({type: 'div',})
      const firstNode = vdom('h1', null, 'hello')

      diff(parent, firstNode)

      const childNodeTextNode = parent.childNodes[0].textContent;
      expect(childNodeTextNode).to.deep.equal('hello');

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

      const deepChildNoneName = parent.childNodes[0].childNodes[0].nodeName;
      expect(deepChildNoneName).to.deep.equal('H1');

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

      const deepChildNodeId = parent.childNodes[0].childNodes[0].id;
      expect(deepChildNodeId).to.deep.equal('heading1');

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

      const deepChildNoneTextNone = parent.childNodes[0].childNodes[0].textContent;
      expect(deepChildNoneTextNone).to.deep.equal('hello');

    });

  });

  describe('New elements', () => {

    jsdom()

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

      const newDeepChildNoneName = parent.childNodes[0].childNodes[1].nodeName;
      expect(newDeepChildNoneName).to.deep.equal('LI');

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

      const newDeepChildNoneId = parent.childNodes[0].childNodes[1].id;
      expect(newDeepChildNoneId).to.deep.equal('list-item');

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

      const newDeepChildNoneTextNone = parent.childNodes[0].childNodes[1].textContent;
      expect(newDeepChildNoneTextNone).to.deep.equal('hello');

    });

  });

  describe('New props', () => {

    jsdom()

    // Add new node
    // --------------------------
    it('Should return the same element (propless) with new prop', () => {

      const parent = makeElements({type: 'div'})

      const oldNode = vdom('div')

      const newNode = vdom(
        'div',
        {id: 'main'}
      )

      diff(parent, oldNode)
      diff(parent, newNode, oldNode)

      const newChildNoneId = parent.childNodes[0].id;
      expect(newChildNoneId).to.deep.equal('main');

    });

    // --------------------------
    it('Should return the same element with new prop', () => {

      const parent = makeElements({type: 'div'})

      const oldNode = vdom(
        'div',
        {
          id: 'main'
        }
      )

      const newNode = vdom(
        'div',
        {
          id: 'main',
          className: 'main'
        }
      )

      diff(parent, oldNode)
      diff(parent, newNode, oldNode)

      const newChildNoneClassName = parent.childNodes[0].className;
      expect(newChildNoneClassName).to.deep.equal('main');

    });

    // --------------------------
    it('Should return the same child element (propless) with new prop', () => {

      const parent = makeElements({type: 'div'})

      const oldNode = vdom(
      'div',
      null,
      vdom('h1')
      )

      const newNode = vdom(
      'div',
      null,
      vdom('h1', {id:'main'})
      )

      diff(parent, oldNode)
      diff(parent, newNode, oldNode)

      const newDeepChildNoneId = parent.childNodes[0].childNodes[0].id;
      expect(newDeepChildNoneId).to.deep.equal('main');

    });

    // --------------------------
    it('Should return the same child element with new prop', () => {

      const parent = makeElements({type: 'div'})

      const oldNode = vdom(
      'div',
      null,
      vdom('h1', {id:'main'})
      )

      const newNode = vdom(
      'div',
      null,
      vdom('h1', {id:'main', className:'main'})
      )

      diff(parent, oldNode)
      diff(parent, newNode, oldNode)

      const newDeepChildNoneClassName = parent.childNodes[0].childNodes[0].className;
      expect(newDeepChildNoneClassName).to.deep.equal('main');

    });

  });

  describe(' New text node', () => {

    jsdom()

    // --------------------------
    it('Should return the same element with new text node', () => {

      const parent = makeElements({type: 'div'})

      const oldNode = vdom('div')
      const newNode = vdom('div', null, 'hello')

      diff(parent, oldNode)
      diff(parent, newNode, oldNode)

      const newNodeTextContent = parent.childNodes[0].textContent;
      expect(newNodeTextContent).to.deep.equal('hello');

    });

    // --------------------------
    it('Should return the same element child with new text node', () => {

      const parent = makeElements({type: 'div'})

      const oldNode = vdom(
      'div',
      null,
      vdom('h1')
      )

      const newNode = vdom(
      'div',
      null,
      vdom('h1', null, 'hello')
      )

      diff(parent, oldNode)
      diff(parent, newNode, oldNode)

      const newNodeTextContent = parent.childNodes[0].childNodes[0].textContent;
      expect(newNodeTextContent).to.deep.equal('hello');

    });

  });

  describe('Remove elements', () => {

    jsdom()

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

      const deepNodeTextNode = parent.childNodes[0].childNodes[1].textContent;
      expect(deepNodeTextNode).to.deep.equal('item 3');

    });

  });

  describe('Remove props', () => {

    jsdom()

    it('Should return the same element with removed prop', () => {

      const parent = makeElements({type: 'div'})

      const oldNode = vdom(
        'div',
        {id: 'main'}
      )

      const newNode = vdom('div')

      diff(parent, oldNode)
      diff(parent, newNode, oldNode)

      const childNoneId = parent.childNodes[0].id;
      expect(childNoneId).to.deep.equal('');

    });

    it('Should return the same child element with removed prop', () => {

      const parent = makeElements({type: 'div'})

      const oldNode = vdom(
        'div',
        null,
        vdom(
          'h1',
          {
            id: 'heading',
            className: 'heading'
          }
        )
      )

      const newNode = vdom(
        'div',
        null,
        vdom(
          'h1',
          {
            id: 'heading'
          }
        )
      )

      diff(parent, oldNode)
      diff(parent, newNode, oldNode)

      const deepChildNodeClassName = parent.childNodes[0].childNodes[0].className;
      expect(deepChildNodeClassName).to.deep.equal('');

    });

  });

  describe('Remove text nodes', () => {

    jsdom()

    it('Should return the same element with removed text node', () => {

      const parent = makeElements({type: 'div'})

      const oldNode = vdom(
        'div',
        null,
        'hello'
      )

      const newNode = vdom('div')

      diff(parent, oldNode)
      diff(parent, newNode, oldNode)

      const childNoneTextNode = parent.childNodes[0].textContent;
      expect(childNoneTextNode).to.deep.equal('');

    });

    it('Should return the same child element with removed text node', () => {

      const parent = makeElements({type: 'div'})

      const oldNode = vdom(
        'div',
        null,
        vdom(
          'h1',
          null,
          'hello'
        )
      )

      const newNode = vdom(
        'div',
        null,
        vdom(
          'h1'
        )
      )

      diff(parent, oldNode)
      diff(parent, newNode, oldNode)

      const deepChildNodeTextNode = parent.childNodes[0].childNodes[0].textContent;
      expect(deepChildNodeTextNode).to.deep.equal('');

    });

  });

  describe('Replace elements', () => {

    jsdom()

    // Replace different node
    // --------------------------

    it('Should return a different element', () => {

      const parent = makeElements({type: 'div'})

      const oldNode = vdom('h1')
      const newNode = vdom('h2')

      diff(parent, oldNode)
      diff(parent, newNode, oldNode)

      const childNodeName = parent.childNodes[0].nodeName;
      expect(childNodeName).to.deep.equal('H2');

    });

    // --------------------------

    it('Should return the same element with a different text node', () => {

      const parent = makeElements({type: 'div'})

      const oldNode = vdom('h1', null, 'text')
      const newNode = vdom('h1', null, 'changed text')

      diff(parent, oldNode)
      diff(parent, newNode, oldNode)

      const childNodeTextNode = parent.childNodes[0].textContent;
      expect(childNodeTextNode).to.deep.equal('changed text');

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

      const childNoneName = parent.childNodes[0].nodeName;
      expect(childNoneName).to.deep.equal('H1');

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

      const childNoneTextNode = parent.childNodes[0].textContent;
      expect(childNoneTextNode).to.deep.equal('changed text');

    });

  });

  describe('Replace props', () => {

    jsdom()

    // --------------------------
    it('Should return the same element with a different prop value', () => {

      const parent = makeElements({type: 'div'})

      const oldNode = vdom(
        'div',
        {id: 'main'}
      )

      const newNode = vdom(
        'div',
        {id: 'main2'}
      )

      diff(parent, oldNode)
      diff(parent, newNode, oldNode)

      const childNodeId = parent.childNodes[0].id;
      expect(childNodeId).to.deep.equal('main2');

    });

    // --------------------------
    it('Should return the same child element with a different prop value', () => {

      const parent = makeElements({type: 'div'})

      const oldNode = vdom(
        'div',
        null,
        vdom(
        'h1',
        {id: 'main'}
      )
      )

      const newNode = vdom(
        'div',
        null,
        vdom(
        'h1',
        {id: 'main2'}
      )
      )

      diff(parent, oldNode)
      diff(parent, newNode, oldNode)

      const deepChildNodeId = parent.childNodes[0].childNodes[0].id;
      expect(deepChildNodeId).to.deep.equal('main2');

    });

  });

  describe('Replace text nodes', () => {

    jsdom()

    // --------------------------
    it('Should return the same element with a different text node', () => {

      const parent = makeElements({type: 'div'})

      const oldNode = vdom(
        'div',
        null,
        'Hello'
      )

      const newNode = vdom(
        'div',
        null,
        'Hello 2'
      )

      diff(parent, oldNode)
      diff(parent, newNode, oldNode)

      const childNodeTextNode = parent.childNodes[0].textContent;
      expect(childNodeTextNode).to.deep.equal('Hello 2');

    });

    // --------------------------
    it('Should return the same child element with a different text node', () => {

      const parent = makeElements({type: 'div'})

      const oldNode = vdom(
        'div',
        null,
        vdom(
          'h1',
          null,
          'Hello'
        )
      )

      const newNode = vdom(
        'div',
        null,
        vdom(
          'h1',
          null,
          'Hello 2'
        )
      )

      diff(parent, oldNode)
      diff(parent, newNode, oldNode)

      const deepChildNoneTextNode = parent.childNodes[0].childNodes[0].textContent;
      expect(deepChildNoneTextNode).to.deep.equal('Hello 2');

    });

  });

});
