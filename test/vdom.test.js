import { expect } from 'chai';
import vdom from '../src/vdom.js';

describe('vdom - Virtual DOM representation', () => {

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
      props: null,
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
      props: null,
      children: [
        'page',
        {
          type: 'h1',
          props: null,
          children: ['Page Title']
        },
        {
          type: 'p',
          props: { className: 'text' },
          children: [
            {
              type: 'b',
              props: null,
              children: ['Hello']
            }
          ]
        }
      ]
    }

    expect(vNode).to.deep.equal(vNodeResult);

  });

});
