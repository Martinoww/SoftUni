const mathEnforcer = require('./mathEnforcer');
const { expect } = require('chai');

describe('Checking function mathEnforcer', ()=>{
    describe('Checking method addFive', ()=>{
        it('returns undefined if we give invalid input', ()=>{
            expect(mathEnforcer.addFive('asd')).to.be.undefined;
            expect(mathEnforcer.addFive([123])).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
            expect(mathEnforcer.addFive('4')).to.be.undefined;
        });

        it('returns the right sum if we give valid input', ()=>{
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
            expect(mathEnforcer.addFive(0)).to.be.equal(5);
            expect(mathEnforcer.addFive(-3)).to.be.equal(2);
            expect(mathEnforcer.addFive(5.051111)).to.be.closeTo(10.05, 0.01);
            expect(mathEnforcer.addFive(-6.95)).to.be.closeTo(-1.95, 0.01);
        });
    });

    describe('Checking method subtractTen', ()=>{
        it('returns undefined if we give invalid input', ()=>{
            expect(mathEnforcer.subtractTen('asd')).to.be.undefined;
            expect(mathEnforcer.subtractTen([123])).to.be.undefined;
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
            expect(mathEnforcer.subtractTen('4')).to.be.undefined;
        });

        it('returns the right sum if we give valid input', ()=>{
            expect(mathEnforcer.subtractTen(5)).to.be.equal(-5);
            expect(mathEnforcer.subtractTen(0)).to.be.equal(-10);
            expect(mathEnforcer.subtractTen(20)).to.be.equal(10);
            expect(mathEnforcer.subtractTen(20.0012)).to.be.closeTo(10.0012, 0.01);
            expect(mathEnforcer.subtractTen(5.05)).to.be.closeTo(-4.95, 0.01);
        });
    });

    describe('Checking method sum', ()=>{
        it('returns undefined if we give invalid input', ()=>{
            expect(mathEnforcer.sum('asd',3)).to.be.undefined;
            expect(mathEnforcer.sum(4,[123])).to.be.undefined;
            expect(mathEnforcer.sum('2','44')).to.be.undefined;
            expect(mathEnforcer.sum({},[])).to.be.undefined;
        });

        it('returns the right sum if we give valid input', ()=>{
            expect(mathEnforcer.sum(5, -10)).to.be.equal(-5);
            expect(mathEnforcer.sum(0, -12)).to.be.equal(-12);
            expect(mathEnforcer.sum(20, 3)).to.be.equal(23);
            expect(mathEnforcer.sum(-20, 3.55)).to.be.closeTo(-16.45, 0.01);
            expect(mathEnforcer.sum(5.05, 11.5)).to.be.closeTo(16.55, 0.01);
        });
    });
});