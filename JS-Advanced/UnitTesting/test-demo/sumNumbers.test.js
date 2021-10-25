const { expect } = require('chai');
const sum = require( './sumNumbers');

describe('Validity checker', ()=>{
    it('returns sum of 8 from integers 5 and 3', ()=>{
        expect(sum([5,3])).to.equal(8);
    });

    it('returns the right sum of two elements even if one of them is given as a string number', ()=>{
        expect(sum([5,'5'])).to.equal(10);
    });

    it('returns NaN when we try to take a sum from integer and string', ()=>{
        expect(sum([3, 'ste'])).to.be.NaN;
    });

    it('returns 0 if we give an empty array', ()=>{
        expect(sum([])).to.equal(0);
    });
});