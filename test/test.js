import { expect } from 'chai';
import { millennium } from '../src/millennium.js';

describe('Millennium', () => {

  it('Should return a Millennium string', () => {
    const mString = millennium()
    expect(mString).to.equal('millennium');
  });

});
