class Movie{
    constructor(movieName, ticketPrice){
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];
        this.profit = 0;
        this.totalSoldTickets = 0;
        this.allTimeProfits = 0;
    }

newScreening(date, hall, description){
this.screenings.forEach((e)=>{
    if(e.date === date && e.hall === hall){
        throw new Error(`Sorry, ${hall} hall is not available on ${e.date}`);
    };
});

    this.screenings.push({
        date, 
        hall,
        description,
    });
return `New screening of ${this.movieName} is added.`;

}

endScreening(date, hall, soldTickets){
 let matches = this.screenings.filter((e)=> e.date == date && e.hall == hall);
 if(matches.length == 0){
     throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`)
    }else {
    this.screenings.splice(this.screenings.indexOf(matches[0]), 1)
    this.profit = soldTickets * this.ticketPrice;
    this.allTimeProfits += this.profit;
    this.totalSoldTickets += soldTickets;
    return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${this.profit}`
 }
}

toString(){
let resultLines = [
`${this.movieName} full information:`,
`Total profit: ${this.allTimeProfits.toFixed(0)}$` ,
`Sold Tickets: ${this.totalSoldTickets.toFixed(0)}`];

if(this.screenings.length != 0){
    resultLines.push(`Remaining film screenings:`)
    this.screenings.sort((a, b) => a.hall.localeCompare(b.hall)).forEach(e => resultLines.push(`${e.hall} - ${e.date} - ${e.description}`))
}else {
    resultLines.push(`No more screenings!`);
}

return resultLines.join('\n')


}

}


let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());
