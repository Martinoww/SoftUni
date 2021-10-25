const isOddOrEven = require('./evenOrOdd');
const { expect } = require('chai');

describe('Checking function evenOrOdd', ()=>{
    it('returns odd of valid odd input', ()=>{
        expect(isOddOrEven('asd')).to.be.equal('odd');
    });

    it('returns even of valid even input', ()=>{
        expect(isOddOrEven('asds')).to.be.equal('even');
        expect(isOddOrEven('')).to.be.equal('even');
    });

    it('returns undefined of invalid input', ()=>{
        expect(isOddOrEven(55)).to.be.undefined;
        expect(isOddOrEven(['sdd'])).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
    });
});