const { expect } = require('chai');
const { ticketPrice } = require('./cinema');
const cinema = require('./cinema')

describe("Tests", function() {
    describe("showMovie function", function() {
        it("works as expected with valid input", function() {
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.equal('King Kong, The Tomorrow War, Joker')
        });

        it("returns a message if the length of the given arr is 0", function() {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.')
        });
     });

     describe("ticketPrice function", function() {
        it("works as expected with valid input", function() {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00)
            expect(cinema.ticketPrice('Normal')).to.equal(7.50)
            expect(cinema.ticketPrice('Discount')).to.equal(5.50)
        });

        it("throws an error with invalid input", function() {
            expect(()=>cinema.ticketPrice('Gosh')).to.throw(`Invalid projection type.`)
            expect(()=>cinema.ticketPrice('premiere')).to.throw(`Invalid projection type.`)
            expect(()=>cinema.ticketPrice('Premier')).to.throw(`Invalid projection type.`)
            expect(()=>cinema.ticketPrice('normal')).to.throw(`Invalid projection type.`)
            expect(()=>cinema.ticketPrice('Nomal')).to.throw(`Invalid projection type.`)
            expect(()=>cinema.ticketPrice('discount')).to.throw(`Invalid projection type.`)
            expect(()=>cinema.ticketPrice('Discont')).to.throw(`Invalid projection type.`)
            expect(()=>cinema.ticketPrice('Discounts')).to.throw(`Invalid projection type.`)


            
        });
     });

     describe("swapSeatsInHall function", function() {
        it("works as expected with valid input", function() {
            expect(cinema.swapSeatsInHall(1,20)).to.equal("Successful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(3, 5)).to.equal("Successful change of seats in the hall.")
        });

        it("return a message with invalid input", function() {
            expect(cinema.swapSeatsInHall(3,3)).to.equal(`Unsuccessful change of seats in the hall.`)
            expect(cinema.swapSeatsInHall(0,20)).to.equal(`Unsuccessful change of seats in the hall.`)
            expect(cinema.swapSeatsInHall(0,-20)).to.equal(`Unsuccessful change of seats in the hall.`)
            expect(cinema.swapSeatsInHall(-5,4)).to.equal(`Unsuccessful change of seats in the hall.`)
            expect(cinema.swapSeatsInHall(1,21)).to.equal(`Unsuccessful change of seats in the hall.`)
            expect(cinema.swapSeatsInHall(21,3)).to.equal(`Unsuccessful change of seats in the hall.`)
            expect(cinema.swapSeatsInHall("3",4)).to.equal(`Unsuccessful change of seats in the hall.`)
            expect(cinema.swapSeatsInHall(3,'4')).to.equal(`Unsuccessful change of seats in the hall.`)
            expect(cinema.swapSeatsInHall(3, 4.5)).to.equal(`Unsuccessful change of seats in the hall.`)
            expect(cinema.swapSeatsInHall('asd', 4.5)).to.equal(`Unsuccessful change of seats in the hall.`)
            expect(cinema.swapSeatsInHall(5,'asd')).to.equal(`Unsuccessful change of seats in the hall.`)
            expect(cinema.swapSeatsInHall([344], {'a':3})).to.equal(`Unsuccessful change of seats in the hall.`)
        });
     });
    
});
