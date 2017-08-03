import jsdom from 'mocha-jsdom';
import { expect } from 'chai';
import makeElements from '../src/diff/makeElements/makeElements';
import removeEventListener from '../src/diff/helpers/removeEventListener';

describe('removeEventListener()', () => {

  jsdom()

  // --------------------------
  it('Should return a real DOM element without an attached event', () => {

    let state = 'No click event';
    const element = makeElements({type: 'div'});

    const changeState = () => {
      state = 'Has click event';
    }

    element.addEventListener('click', () => changeState)

    removeEventListener(element, 'onClick', () => changeState)

    element.click();

    expect(state).to.be.equal('No click event');

  });

});
