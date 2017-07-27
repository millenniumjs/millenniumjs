import jsdom from 'mocha-jsdom';
import { expect } from 'chai';
import makeElements from '../src/diff/makeElements/makeElements';
import vdom from '../src/vdom/vdom';
import diffProps from '../src/diff/diffProps/diffProps';

describe('diffProps()', () => {

  jsdom()

  describe('New prop', () => {

    // --------------------------
    it('Should return the element (propLess) with a new prop', () => {

      const element = makeElements({type: 'h1'});
      const oldNode = vdom('h1');
      const newNode = vdom('h1', {id:'heading'});

      diffProps(element, newNode.props, oldNode.props);

      expect(element.id).to.be.equal('heading');

    });

    // --------------------------
    it('Should return the element (propLess) with a new class prop', () => {

      const element = makeElements({type: 'h1'});
      const oldNode = vdom('h1');
      const newNode = vdom('h1', {className:'heading'});

      diffProps(element, newNode.props, oldNode.props);

      expect(element.className).to.be.equal('heading');

    });

    // --------------------------
    it('Should return the element with a new class prop', () => {

      const element = makeElements({
        type: 'input',
        props: {type: 'text', className: 'input'}
      });

      const oldNode = vdom(
        'input',
        {type: 'text', className: 'input'}
      );

      const newNode = vdom(
        'input',
        {type: 'text', className: 'input', id: 'inputText'}
      );

      diffProps(element, newNode.props, oldNode.props);

      expect(element.id).to.be.equal('inputText');

    });

  });

  describe('Remove prop', () => {

    // --------------------------
    it('Should return the element with a removed prop', () => {

      const element = makeElements({
        type: 'input',
        props: {type: 'text', className: 'input'}
      });

      const oldNode = vdom(
        'input',
        {type: 'text', className: 'input'}
      );

      const newNode = vdom(
        'input',
        {type: 'text'}
      );

      diffProps(element, newNode.props, oldNode.props);

      expect(element.className).to.be.equal('');

    });

  });

  describe('Replace prop', () => {

    // --------------------------
    it('Should return the element with a different prop value', () => {

      const element = makeElements({
        type: 'input',
        props: {type: 'text', className: 'input'}
      });

      const oldNode = vdom(
        'input',
        {type: 'text', className: 'input'}
      );

      const newNode = vdom(
        'input',
        {type: 'text', className: 'input2'}
      );

      diffProps(element, newNode.props, oldNode.props);

      expect(element.className).to.be.equal('input2');

    });

  });

});
