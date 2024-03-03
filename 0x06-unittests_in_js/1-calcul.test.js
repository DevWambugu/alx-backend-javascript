//Import the required files and module
const assert = require('assert');
const calculateNumber = require('./1-calcul');
//This script uses describe to describe the test cases
//It then uses assert.equal to test for the cases
describe('#calculateNumber() with type SUM', () => {
  it('add 15 and 10', () => {
    assert.equal(calculateNumber('SUM', 15, 10), 25);
  });
  it('add 2 and 2.7223', () => {
    assert.equal(calculateNumber('SUM', 2, 2.7223), 5);
  });
  it('add 2.0 and 7.0', () => {
    assert.equal(calculateNumber('SUM', 2.0, 7.0), 9);
  });
  it('add 2.7 and 3.5', () => {
    assert.equal(calculateNumber('SUM', 2.7, 3.5), 7);
  });
  it('should return 0 when adding 0.001 and 0.3', () => {
    assert.equal(calculateNumber('SUM', 0.001, 0.3), 0);
  });
  it('add -0.8 and 0.8', () => {
    assert.equal(calculateNumber('SUM', -0.8, 0.8), 0);
  });
  it('add -0.8 and -0.7', () => {
    assert.equal(calculateNumber('SUM', -0.8, -0.7), -2);
  });
});

describe('#calculateNumber() with type SUBTRACT', () => {
  it('subtract 1 and 3', () => {
    assert.equal(calculateNumber('SUBTRACT', 2, 3), -1);
  });
  it('subtract 1.4 and 4.5', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.2, 4.8), -4);
  });
  it('subtract 1.2 and 3.7', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
  });
  it('subtract 1.6 and 3.5', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.6, 3.5), -2);
  });
  it('subtract 0.1 and 0.3222', () => {
    assert.equal(calculateNumber('SUBTRACT', 0.4, 0.3222), 0);
  });
  it('subtract -0.722 and 0.722', () => {
    assert.equal(calculateNumber('SUBTRACT', -0.722, 0.722), -2);
  });
  it('subtract -0.8111 and -0.7111', () => {
    assert.equal(calculateNumber('SUBTRACT', -0.8111, -0.7111), 0);
  });
  it('subtract 0.8333 and -0.4333', () => {
    assert.equal(calculateNumber('SUBTRACT', 0.8333, -0.4333), 1);
  });
});

describe('#calculateNumber() with type DIVIDE', () => {
  it('divide 2 and 8', () => {
    assert.equal(calculateNumber('DIVIDE', 2, 8), 0.25);
  });
  it('divide 1 and 3.7', () => {
    assert.equal(calculateNumber('DIVIDE', 1, 3.7), 0.25);
  });
  it('divide 1.4 and 4.5', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('divide 1.6 and 2.4', () => {
    assert.equal(calculateNumber('DIVIDE', 1.6, 2.4), 1);
  });
  it('divide 4.2 and 1.5', () => {
    assert.equal(calculateNumber('DIVIDE', 4.2, 1.5), 2);
  });
  it("divide 1.3 and 0.3", () => {
    assert.equal(calculateNumber('DIVIDE', 1.3, 0.3), 'Error');
  });
  it('divide -0.7 and 0.7', () => {
    assert.equal(calculateNumber('DIVIDE', -0.7, 0.7), -1);
  });
  it('divide -0.8 and -0.7', () => {
    assert.equal(calculateNumber('DIVIDE', -0.8, -0.7), 1);
  });
  it('divide -44.5 and 2.4', () => {
    assert.equal(calculateNumber('DIVIDE', -44.5, 2.4), -22);
  });
  it('divide -88.5 and -3.6', () => {
    assert.equal(calculateNumber('DIVIDE', -88.5, -3.6), 22);
  });
});