let { expect } = require(`chai`);
let testNumbers = require('./testNumbers');

describe(`Testing testNumbers functionallity`, ()=>{

    describe(`Testing sumNumber function`, ()=>{
        it('works with valid inputs', ()=>{
            expect(testNumbers.sumNumbers(3, 5)).to.equal('8.00');
            expect(testNumbers.sumNumbers(3, -5)).to.equal('-2.00');
            expect(testNumbers.sumNumbers(-3, 5)).to.equal('2.00');
            expect(testNumbers.sumNumbers(1.55555, 1.33333)).to.equal('2.89');
        });

        it('returns undefined if we try to pass invalid parameters',()=>{
            expect(testNumbers.sumNumbers('asd', 5)).to.be.undefined;
            expect(testNumbers.sumNumbers([1], 5)).to.be.undefined;
            expect(testNumbers.sumNumbers(3, 'as5')).to.be.undefined;
            expect(testNumbers.sumNumbers('3', '5')).to.be.undefined;
            expect(testNumbers.sumNumbers(3, '5')).to.be.undefined;
        });

    });

    describe(`Testing numberChecker function`, ()=>{
        it('works with valid inputs and returns its even', ()=>{
            expect(testNumbers.numberChecker(4)).to.equal(`The number is even!`);
            expect(testNumbers.numberChecker([])).to.equal(`The number is even!`);
            expect(testNumbers.numberChecker('')).to.equal(`The number is even!`);
            expect(testNumbers.numberChecker(0)).to.equal(`The number is even!`);
            expect(testNumbers.numberChecker(-2)).to.equal(`The number is even!`);

        });

        it('works with valid inputs and returns its odd', ()=>{
            expect(testNumbers.numberChecker(1)).to.equal(`The number is odd!`);
            expect(testNumbers.numberChecker(5)).to.equal(`The number is odd!`);
            expect(testNumbers.numberChecker(-3)).to.equal(`The number is odd!`);

        });

        it('does not work with valid inputs and throw an error.', ()=>{
            expect(() => testNumbers.numberChecker([33,'ass'])).to.throw();
            expect(() => testNumbers.numberChecker({})).to.throw();
            expect(() => testNumbers.numberChecker('as')).to.throw();
        });

    });


    describe(`Testing averageSumArray function`, ()=>{
        it('works with valid input as array of numbers', ()=>{
            expect(testNumbers.averageSumArray([1,2,3])).to.equal(2);
            expect(testNumbers.averageSumArray([1.5,2.5,3.5])).to.equal(2.5);
        });

    });

});