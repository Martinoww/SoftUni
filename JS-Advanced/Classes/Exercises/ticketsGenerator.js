function ticketsGenerator(arrOfStr, sortingCriteria){
class Ticket {
    constructor(destination, price, status){
        this.destination = destination;
        this.price = price;
        this.status = status;
    }


}
let tickets = [];

for(let line of arrOfStr){
    let [destination, price, status] = line.split('|');
    let newTicket = new Ticket(destination, Number(price), status);
    tickets.push(newTicket);
}

if(sortingCriteria === 'destination' || sortingCriteria === 'status'){
    tickets.sort((a, b) => {
        return a[sortingCriteria].localeCompare(b[sortingCriteria]);
    });
}else if(sortingCriteria === 'price'){
    tickets.sort((a, b) => {
        return a[sortingCriteria] - b[sortingCriteria];
    });
}
return tickets;

}
console.log(ticketsGenerator(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
));