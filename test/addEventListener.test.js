import jsdom from 'mocha-jsdom';
import { expect } from 'chai';
import makeElements from '../src/diff/makeElements/makeElements';
import addEventListener from '../src/diff/helpers/addEventListener';

describe('addEventListener()', () => {

  jsdom()

  // --------------------------
  it('Should return a real DOM element with an attached event', () => {

    let state = 'No click event';

    const element = makeElements({type: 'div'});

    addEventListener(element, 'onClick', () => state = 'Has click event')

    element.click();

    expect(state).to.be.equal('Has click event');
  });

});
