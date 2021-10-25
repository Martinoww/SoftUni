const { expect } = require('chai');
const pizzUni = require('./pizzUni');

describe("pizzUni functionallity", function() {
    describe("testing function makeAnOrder", function() {

        it("works with valid inputs", function() {
            expect(pizzUni.makeAnOrder({orderedPizza:'peperoni'})).to.equal(`You just ordered peperoni`);
            expect(pizzUni.makeAnOrder({orderedPizza:'peperoni', orderedDrink: 'coke'})).to.equal(`You just ordered peperoni and coke.`);
        });

       it("throws an error with invalid inputs", function() {
            expect(() => pizzUni.makeAnOrder({orderedDrink: 'coke'})).to.throw('You must order at least 1 Pizza to finish the order.');
            expect(() => pizzUni.makeAnOrder({})).to.throw('You must order at least 1 Pizza to finish the order.');
        });
     });

     describe("testing function getRemainingWork", function() {

        it("works with valid inputs", function() {
            expect(pizzUni.getRemainingWork([{pizzaName:'peperoni', status: 'ready'}])).to.equal('All orders are complete!');
            expect(pizzUni.getRemainingWork([{pizzaName:'carbonara', status: 'preparing'}])).to.equal('The following pizzas are still preparing: carbonara.');
            expect(pizzUni.getRemainingWork([{pizzaName:'carbonara', status: 'ready'}, {pizzaName:'alCapone', status: 'preparing'}])).to.equal('The following pizzas are still preparing: alCapone.');
        });
     });

     describe("testing function orderType", function() {

        it("works with valid inputs", function() {
            expect(pizzUni.orderType(30, 'Carry Out')).to.equal(27);
            expect(pizzUni.orderType(40, 'Delivery')).to.equal(40);
        });

        
        it("does not work with invalid inputs", function() {
            expect(pizzUni.orderType('asd', 'Carry Out')).to.NaN;
            expect(pizzUni.orderType('40', 'Delivery')).to.equal('40');
        });
     });
});
