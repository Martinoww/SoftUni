const lookupChar = require('./charLookUp');
const { expect } = require('chai');

describe('Checking function charLockUp', ()=>{
    it('returns undefined of invalid input', ()=>{
        expect(lookupChar(['asd'],4)).to.be.undefined;
        expect(lookupChar(4,4)).to.be.undefined;
        expect(lookupChar({},5)).to.be.undefined;
        expect(lookupChar('asd', [])).to.be.undefined;
        expect(lookupChar('asd', '4')).to.be.undefined;
        expect(lookupChar('asd',3.4)).to.be.undefined;
    });

    it('returns Incorrect index of invalid index input', ()=>{
        expect(lookupChar('asd',4)).to.be.equal(`Incorrect index`);
        expect(lookupChar('asd',-1)).to.be.equal(`Incorrect index`);
        expect(lookupChar('asd',3)).to.be.equal(`Incorrect index`);
    });

    it('returns the specified char of valid input', ()=>{
        expect(lookupChar('asd',0)).to.be.equal(`a`);
        expect(lookupChar('asd',2)).to.be.equal(`d`);
    });

});