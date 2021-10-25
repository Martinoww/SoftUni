const { expect } = require('chai');
const isSymmetric = require('./checkForSymetry');

describe('is it symetric', ()=>{
    it('returns false for non-symmetric array with even number of elements', ()=>{
        expect(isSymmetric([10, 1, 20, 10])).to.be.false;
    });
    
    it('returns false for non-symmetric array with odd number of elements', ()=>{
        expect(isSymmetric([10, 20, 30])).to.be.false;
    });
    
    it('returns false for symmetric string as input', ()=>{
        expect(isSymmetric('abba')).to.be.false;
    });

    it('returns true for symmetric array with even number of elements', ()=>{
        expect(isSymmetric([10, 20, 20, 10])).to.be.true;
    });

    it('returns false for symmetric odd array with different type of the elements', ()=>{
        expect(isSymmetric([10, 20, '10'])).to.be.false;
    });

    it('returns true for symmetric array with odd number of elements', ()=>{
        expect(isSymmetric([10, 20, 10])).to.be.true;
    });

    it('returns true for symmetric array of strings as input', ()=>{
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
    });
    
});