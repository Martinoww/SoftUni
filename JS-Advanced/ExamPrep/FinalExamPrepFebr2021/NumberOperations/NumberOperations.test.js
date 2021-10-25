const { expect } = require("chai");
const numberOperations = require('./03. Number Operations_Resources');

describe(`Testing function numberOperations`, ()=>{

    describe(`Testing powNumber functionality`, ()=>{
        it(`works with correct input`, ()=>{
            expect(numberOperations.powNumber(2)).to.be.equal(4);
            expect(numberOperations.powNumber(2.5)).to.be.equal(6.25);
        });
    });

    describe(`Testing numberChecker functionality`, ()=>{
        it(`works with correct input`, ()=>{
            expect(numberOperations.numberChecker(2)).to.be.equal(`The number is lower than 100!`);
            expect(numberOperations.numberChecker(-101)).to.be.equal(`The number is lower than 100!`);
            expect(numberOperations.numberChecker(99.99)).to.be.equal(`The number is lower than 100!`);
            expect(numberOperations.numberChecker(100)).to.be.equal(`The number is greater or equal to 100!`);
            expect(numberOperations.numberChecker(101)).to.be.equal(`The number is greater or equal to 100!`);
        });

        it(`works with correct input as string`, ()=>{
            expect(numberOperations.numberChecker('')).to.be.equal(`The number is lower than 100!`);
            expect(numberOperations.numberChecker('2')).to.be.equal(`The number is lower than 100!`);
            expect(numberOperations.numberChecker('99.99')).to.be.equal(`The number is lower than 100!`);
            expect(numberOperations.numberChecker('100')).to.be.equal(`The number is greater or equal to 100!`);
            expect(numberOperations.numberChecker('101')).to.be.equal(`The number is greater or equal to 100!`);
        });

        it(`works with correct input as array of string`, ()=>{
            expect(numberOperations.numberChecker(['2'])).to.be.equal(`The number is lower than 100!`);
            expect(numberOperations.numberChecker(['99.99'])).to.be.equal(`The number is lower than 100!`);
            expect(numberOperations.numberChecker(['100'])).to.be.equal(`The number is greater or equal to 100!`);
            expect(numberOperations.numberChecker(['101'])).to.be.equal(`The number is greater or equal to 100!`);
        });

        it(`does not work with incorrect input`, ()=>{
            expect(() => numberOperations.numberChecker(['asd'])).to.throw('The input is not a number!');
            expect(() => numberOperations.numberChecker('123d')).to.throw('The input is not a number!');
            expect(() => numberOperations.numberChecker(['100.AAA'])).to.throw('The input is not a number!');
            expect(() => numberOperations.numberChecker(['1as1'])).to.throw('The input is not a number!');
        });
    });

    describe(`Testing sumArrays functionality`, ()=>{
        it(`works with correct input`, ()=>{
            expect(numberOperations.sumArrays([1, 2, 3], [3, 2, 1])).to.eql([4, 4, 4]);
            expect(numberOperations.sumArrays([1], [1, 3])).to.eql([2, 3]);
            expect(numberOperations.sumArrays([2], [1, 2])).to.eql([3, 2]);
        });
        it(`does not return the right output with string numbers as an input`, ()=>{
            expect(numberOperations.sumArrays(['1', '2', '3'], ['3', '2', '1'])).to.eql(['13', '22', '31']);
            expect(numberOperations.sumArrays(['1'], ['1'])).to.eql(['11']);
            expect(numberOperations.sumArrays(['2', '1'], ['1', '2'])).to.eql(['21', '12']);
            expect(numberOperations.sumArrays(['-3', '4.5', '0.2'], ['1', '3.2', '1.4'])).to.eql(['-31', '4.53.2', '0.21.4']);
        });
    });
});