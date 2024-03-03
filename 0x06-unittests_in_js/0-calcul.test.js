const calculateNumber = require("./0-calcul.js");
const assert = require('assert');

describe('calculateNumber', () => {
    it('rounding of a', () => {
        assert.equal(calculateNumber(16.78, 2), 19);
        assert.equal(calculateNumber(1.0, 0), 1);
        assert.equal(calculateNumber(4.2222, 2), 6);
    });

    it('rounding of b', () => {
        assert.equal(calculateNumber(2, 16.111), 18);
        assert.equal(calculateNumber(0, 1.22222), 1);
        assert.equal(calculateNumber(2, 3.53434), 6);
    });

    it('suming of a and b', () => {
        assert.equal(calculateNumber(15.78, 4.5), 21);
        assert.equal(calculateNumber(4.2, 1.2), 5);
        assert.equal(calculateNumber(4.5, 3.7), 9);
    });
})