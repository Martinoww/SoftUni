const {expect} = require('chai');
const library = require('./problem')
describe("Testing library", ()=>{

    describe("Testing calcPriceOfBook ", ()=>{
        it('works with valid input', ()=>{
            expect(library.calcPriceOfBook('HarryPotter', 2002)).to.equal(`Price of HarryPotter is 20.00`);
            expect(library.calcPriceOfBook('DwayneJhonson', 1980)).to.equal(`Price of DwayneJhonson is 10.00`);
            expect(library.calcPriceOfBook('McQuinn', 1979)).to.equal(`Price of McQuinn is 10.00`);
        });

        it('throws an error if one of the given inputs is invalid', ()=>{
            expect(()=> library.calcPriceOfBook(33, 3000)).to.throw("Invalid input");
            expect(()=> library.calcPriceOfBook('DwayneJhonson', 2000.5)).to.throw("Invalid input");
            expect(()=> library.calcPriceOfBook({'book': 'DwayneJhonson'}, 2000.5)).to.throw("Invalid input");
            expect(()=> library.calcPriceOfBook([5,'nameOfBook'], 2000.5)).to.throw("Invalid input");
        });
    });

    describe("Testing findBook", ()=>{
        it('works with valid input', ()=>{
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Troy')).to.equal(`We found the book you want.`)
        });

        it('it returns message if the book we are looking for is not in the array', ()=>{
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Fifa')).to.equal(`The book you are looking for is not here!`)
        });

        it('throws an error if we pass invalid input', ()=>{
            expect(()=> library.findBook([], 'Troy')).to.throw("No books currently available");
        });
    });

    describe("Testing arrangeTheBooks", ()=>{
        it('throws an error with invalid input', ()=>{
            expect(()=> library.arrangeTheBooks(3.5)).to.throw("Invalid input");
            expect(()=> library.arrangeTheBooks(-3)).to.throw("Invalid input");
        });

        it('works with valid input', ()=>{
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
            expect(library.arrangeTheBooks(1)).to.equal("Great job, the books are arranged.");
        });

        it('returns a message if there is no more space on the shelves', ()=>{
            expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.");
        });
    });


});