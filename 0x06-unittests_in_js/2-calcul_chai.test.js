//Import the required files and module
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');
//This script uses describe to describe the test cases
//It then uses assert.equal to test for the cases
describe('#calculateNumber() with type SUM', () => {
  it('add 15 and 10', () => {
    expect(calculateNumber('SUM', 15, 10)).to.equal(25);
  });
  it('add 2 and 2.7223', () => {
    expect(calculateNumber('SUM', 2, 2.7223)).to.equal(5);
  });
  it('add 2.0 and 7.0', () => {
    expect(calculateNumber('SUM', 2.0, 7.0)).to.equal(9);
    
  });
  it('add 2.7 and 3.5', () => {
    expect(calculateNumber('SUM', 2.7, 3.5)).to.equal(7);
  });
  it('should return 0 when adding 0.001 and 0.3', () => {
    expect(calculateNumber('SUM', 0.001, 0.3)).to.equal(0);
  });
  it('add -0.8 and 0.8', () => {
    expect(calculateNumber('SUM', -0.8, 0.8)).to.equal(0);
  });
  it('add -0.8 and -0.7', () => {
    expect(calculateNumber('SUM', -0.8, -0.7)).to.equal(-2);
  });
});

describe('#calculateNumber() with type SUBTRACT', () => {
  it('subtract 1 and 3', () => {
    expect(calculateNumber('SUBTRACT', 2, 3)).to.equal(-1);
  });
  it('subtract 1.4 and 4.5', () => {
    expect(calculateNumber('SUBTRACT', 1.2, 4.8)).to.equal(-4);
  });
  it('subtract 1.2 and 3.7', () => {
    expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
  });
  it('subtract 1.6 and 3.5', () => {
    expect(calculateNumber('SUBTRACT', 1.6, 3.5)).to.equal(-2);
  });
  it('subtract 0.1 and 0.3222', () => {
    expect(calculateNumber('SUBTRACT', 0.4, 0.3222)).to.equal(0);
  });
  it('subtract -0.722 and 0.722', () => {
    expect(calculateNumber('SUBTRACT', -0.722, 0.722)).to.equal(-2);
  });
  it('subtract -0.8111 and -0.7111', () => {
    expect(calculateNumber('SUBTRACT', -0.8111, -0.7111)).to.equal(0);
  });
  it('subtract 0.8333 and -0.4333', () => {
    expect(calculateNumber('SUBTRACT', 0.8333, -0.4333)).to.equal(1);
  });
});

describe('#calculateNumber() with type DIVIDE', () => {
  it('divide 2 and 8', () => {
    expect(calculateNumber('DIVIDE', 2, 8)).to.equal(0.25);
  });
  it('divide 1 and 3.7', () => {
    expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
  });
  it('divide 1.4 and 4.5', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
  it('divide 1.6 and 2.4', () => {
    expect(calculateNumber('DIVIDE', 1.6, 2.4)).to.equal(1);
  });
  it('divide 4.2 and 1.5', () => {
    expect(calculateNumber('DIVIDE', 4.2, 1.5)).to.equal(2);
  });
  it("divide 1.3 and 0.3", () => {
    expect(calculateNumber('DIVIDE', 1.3, 0.3)).to.equal('Error');
  });
  it('divide -0.7 and 0.7', () => {
    expect(calculateNumber('DIVIDE', -0.7, 0.7)).to.equal(-1);
  });
  it('divide -0.8 and -0.7', () => {
    expect(calculateNumber('DIVIDE', -0.8, -0.7)).to.equal(1);
  });
  it('divide -44.5 and 2.4', () => {
    expect(calculateNumber('DIVIDE', -44.5, 2.4)).to.equal(-22);
  });
  it('divide -88.5 and -3.6', () => {
    expect(calculateNumber('DIVIDE', -88.5, -3.6)).to.equal(22);
  });
});