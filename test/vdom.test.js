import { expect } from 'chai';
import vdom from '../src/vdom/vdom';

describe('vdom() - Virtual DOM representation', () => {

  // --------------------------

  it('Should return a virtual node', () => {

    const vNode = vdom('h1')

    const vNodeResult = {
      type: 'h1',
      props: {},
      children: []
    }

    expect(vNode).to.deep.equal(vNodeResult);

  });

  // --------------------------

  it('Should return a virtual node with props', () => {

    const vNode = vdom(
      'h1',
      {className: 'heading'}
    )

    const vNodeResult = {
      type: 'h1',
      props: {className: 'heading'},
      children: []
    }

    expect(vNode).to.deep.equal(vNodeResult);

  });

  // --------------------------

  it('Should return a virtual node with one children (text)', () => {

    const vNode = vdom(
      'h1',
      {className: 'heading'},
      'Hello World'
    )

    const vNodeResult = {
      type: 'h1',
      props: { className: 'heading' },
      children: [ 'Hello World' ]
    }

    expect(vNode).to.deep.equal(vNodeResult);

  });

  // --------------------------

  it('Should return a virtual node with one children (other virtual node - Recursion)', () => {

    const vNode = vdom(
      'div',
      null,
      vdom(
        'p',
        { className: 'text' },
        'Big text'
      )
    )

    const vNodeResult = {
      type: 'div',
      props: {},
      children: [
        {
          type: 'p',
          props: { className: 'text' },
          children: ['Big text']
        }
      ]
    }

    expect(vNode).to.deep.equal(vNodeResult);

  });

  // --------------------------

  it('Should return a virtual node with miltiple childrens', () => {

    const vNode = vdom(
      'div',
      null,
      'page',
      vdom('h1',null,'Page Title'),
      vdom(
        'p',
        { className: 'text' },
        vdom(
          'b',
          null,
          'Hello'
        )
      )
    )

    const vNodeResult = {
      type: 'div',
      props: {},
      children: [
        'page',
        {
          type: 'h1',
          props: {},
          children: ['Page Title']
        },
        {
          type: 'p',
          props: { className: 'text' },
          children: [
            {
              type: 'b',
              props: {},
              children: ['Hello']
            }
          ]
        }
      ]
    }

    expect(vNode).to.deep.equal(vNodeResult);

  });

  // --------------------------

  it('Should return a virtual node with function component child', () => {

    // JSX representation
    // const VNodeFunctionComponent = () => {
    //   return (
    //     <button> Show </button>
    //   )
    // }

    // Vanilla JS representation
    const VNodeFunctionComponent = () => {
      return vdom(
        'button',
        null,
        'Show'
      )
    }

    // JSX representation
    // const vNode = <VNodeFunctionComponent />

    // Vanilla JS representation
    const vNode = vdom(
      VNodeFunctionComponent,
      null,
      'Show'
    )

    // result
    const vNodeResult = {
      type: 'button',
      props: {},
      children: ['Show']
    }

    expect(vNode).to.deep.equal(vNodeResult);

  });

  // --------------------------

  it('Should return a virtual node with function component child (with Props)', () => {

    // JSX representation
    // const VNodeFunctionComponent = ({text}) => {
    //   return (
    //     <button> {text} </button>
    //   )
    // }

    // Vanilla JS representation
    const VNodeFunctionComponent = ({text}) => {
      return vdom(
        'button',
        null,
        text + ' Component'
      )
    }

    // JSX representation
    // const vNode = <VNodeFunctionComponent text="Show"/>

    // Vanilla JS representation
    const vNode = vdom(
      VNodeFunctionComponent,
      {text: 'Show'}
    )

    // result
    const vNodeResult = {
      type: 'button',
      props: {},
      children: ['Show Component']
    }

    expect(vNode).to.deep.equal(vNodeResult);

  });

});
