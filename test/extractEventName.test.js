import { expect } from 'chai';
import extractEventName from '../src/diff/helpers/extractEventName';

describe('extractEventName()', () => {

  // --------------------------

  it('Should return the property name without the "on" prefix', () => {

    const eventName = extractEventName('onClick')

    expect(eventName).to.deep.equal('click');

  });

});
