const cinema = {
    showMovies: function (movieArr) {

        if (movieArr.length == 0) {
            return 'There are currently no movies to show.';
        } else {
            let result = movieArr.join(', ');
            return result;
        }

    },
    ticketPrice: function (projectionType) {

        const schedule = {
            "Premiere": 12.00,
            "Normal": 7.50,
            "Discount": 5.50
        }
        if (schedule.hasOwnProperty(projectionType)) {
            let price = schedule[projectionType];
            return price;
        } else {
            throw new Error('Invalid projection type.')
        }

    },
    swapSeatsInHall: function (firstPlace, secondPlace) {
        if (!Number.isInteger(firstPlace) || firstPlace <= 0 || firstPlace > 20 ||
            !Number.isInteger(secondPlace) || secondPlace <= 0 || secondPlace > 20 ||
            firstPlace === secondPlace) {
            return "Unsuccessful change of seats in the hall.";
        } else {
            return "Successful change of seats in the hall.";
        }

    }
};


let { expect } = require('chai');

describe('Tests', ()=>{

    describe('Testing function showMovies', ()=>{
        it('works with valid inputs',()=>{
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.be.equal(`King Kong, The Tomorrow War, Joker`);
            expect(cinema.showMovies(['King Kong'])).to.be.equal(`King Kong`);
        });

        it('does not work with invalid inputs',()=>{
            expect(cinema.showMovies([])).to.be.equal(`There are currently no movies to show.`);
        });
    });

    describe('Testing function ticketPrice', ()=>{
        it('works with valid inputs',()=>{
            expect(cinema.ticketPrice('Premiere')).to.be.equal(12.00);
            expect(cinema.ticketPrice('Normal')).to.be.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.be.equal(5.50);
        });

        it('does not work with invalid inputs',()=>{
            expect(() => cinema.ticketPrice([])).to.throw('Invalid projection type.');
            expect(() => cinema.ticketPrice(`normal`)).to.throw('Invalid projection type.');
            expect(() => cinema.ticketPrice(5)).to.throw('Invalid projection type.');
            expect(() => cinema.ticketPrice('Grand')).to.throw('Invalid projection type.');
            expect(() => cinema.ticketPrice(['GrandPremiere'])).to.throw('Invalid projection type.');
            expect(() => cinema.ticketPrice({})).to.throw('Invalid projection type.');
        });
    });

    describe('Testing function swapSeats', ()=>{
        it('works with valid inputs',()=>{
            expect(cinema.swapSeatsInHall(3,5)).to.be.equal(`Successful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall(1,20)).to.be.equal(`Successful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall(20,1)).to.be.equal(`Successful change of seats in the hall.`);

        });

        it('does not work with invalid inputs',()=>{
            expect(cinema.swapSeatsInHall(1, 21)).to.be.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall(2, 2)).to.be.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall(0, 20)).to.be.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall(2.5, 20)).to.be.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall(2, 20.05)).to.be.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall(22, 3)).to.be.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall(4, 33)).to.be.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall(0, -3)).to.be.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall(-3, 0)).to.be.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall('asd',3)).to.be.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall(4,'asd3')).to.be.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall(4,['asd3', 3])).to.be.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall(['asd3', 3], 6)).to.be.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall({n:3}, ['456a'])).to.be.equal(`Unsuccessful change of seats in the hall.`);
        });
    });

});