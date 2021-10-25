const { expect } = require('chai');
const dealership = require('./dealerShip');

describe("Testing dealership functionallity", function() {
    describe("Testing newCarCost function", function() {
        it("works as expected with correct inputs", function() {
            expect(dealership.newCarCost('Audi A4 B8', 30000)).to.equal(15000);
            expect(dealership.newCarCost('Audi A6 4K', 30000)).to.equal(10000);
            expect(dealership.newCarCost('Audi A8 D5', 30000)).to.equal(5000);
            expect(dealership.newCarCost('Audi TT 8J', 30000)).to.equal(16000);
        });

        it("returns my car price without discounts", function() {
            expect(dealership.newCarCost('Audi A4 B7', 30000)).to.equal(30000);
            expect(dealership.newCarCost('Audi A5 4K', 30000)).to.equal(30000);
            expect(dealership.newCarCost('Audi A3 D5', 30000)).to.equal(30000);
            expect(dealership.newCarCost('BMW 330 445', 30000)).to.equal(30000);
        });

     });

     describe("Testing carEquipment function", function() {
        it("works as expected with correct inputs", function() {
            expect(dealership.carEquipment(['automatic start', 'automatic gearbox', 'sport susspension'], [1, 0])).to.eql(['automatic gearbox', 'automatic start']);
            expect(dealership.carEquipment(['automatic start', 'automatic gearbox', 'sport susspension'], [2])).to.eql(['sport susspension']);
            expect(dealership.carEquipment([ 'automatic gearbox'], [0])).to.eql([ 'automatic gearbox']);
        });

        it("returns undefined if there is incorrect index", function() {
            expect(dealership.carEquipment([ 'automatic gearbox'], [3])).to.eql([undefined]);
            expect(dealership.carEquipment(['automatic start', 'automatic gearbox', 'sport susspension'], [-3])).to.eql([undefined]);
            expect(dealership.carEquipment([], [3])).to.eql([undefined]);
        });

     });

     describe("Testing euroCategory function", function() {
        it("works as expected with correct inputs", function() {
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`);
            expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: 14250.`);
        });

        it("returns  if there is incorrect inputs", function() {
            expect(dealership.euroCategory(3)).to.equal(`Your euro category is low, so there is no discount from the final price!`);
            expect(dealership.euroCategory(-3)).to.equal(`Your euro category is low, so there is no discount from the final price!`);
            expect(dealership.euroCategory('asd')).to.equal(`Your euro category is low, so there is no discount from the final price!`);
            expect(dealership.euroCategory('3')).to.equal(`Your euro category is low, so there is no discount from the final price!`);
            expect(dealership.euroCategory(undefined)).to.equal(`Your euro category is low, so there is no discount from the final price!`);

        });

     });

     
});
