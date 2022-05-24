// Red: failing test
const assert = require('chai').assert;

const factorialize = require('../factorial');
// Green: Update multiply for a passing test
const multiply = require('../factorial');

describe('Testing our Factorial', () => {
  it('should factorilize 1 and return 1', () => {
    assert.equal(factorialize(1), 1);
  });

  it('should factorilize 0 and return 1', () => {
    assert.equal(factorialize(0), 1);
  });
  
  // first factorial test
  // 4 - 4 * 3 * 2 * 1
  it('should factorilize 4 and return 24', () => {
    assert.equal(factorialize(4), 24);
  });
  // second factorial test
  // 5 - 5 * 4 * 3 * 2 * 1
  it('should factorilize 5 and return 120', () => {
      assert.equal(factorialize(5), 120);
  });

  // third factorial test
  // 6 - 6 * 5 * 4 * 3 * 2 * 1
  it('should factorilize 6 and return 720', () => {
      assert.equal(factorialize(6), 720);
  });

});