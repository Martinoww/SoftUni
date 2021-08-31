function solve(input) {
let nameOfAirCompany = input[0];
let numOfTicketsForAdults = Number(input[1]);
let numOfTicketsForChildren = Number(input[2]);
let netPriceOfTicketForOneAdult = Number(input[3]);
let taxForService = Number(input[4]);
let netPriceOfTicketForOneChild = netPriceOfTicketForOneAdult * 0.3;
let netPriceOfTicketForOneAdultWithService = netPriceOfTicketForOneAdult + taxForService;
let netPriceOfTicketForOneChildWithService = netPriceOfTicketForOneChild + taxForService;
let totalPriceOfTickets = (netPriceOfTicketForOneChildWithService * numOfTicketsForChildren) + (netPriceOfTicketForOneAdultWithService * numOfTicketsForAdults)
let profit = totalPriceOfTickets * 0.2
console.log(`The profit of your agency from ${nameOfAirCompany} tickets is ${profit.toFixed(2)} lv.`)

}
solve(["WizzAir", "15", "5", "120", "40"]);
