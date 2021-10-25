class Bank{
    constructor(bankName){
        this._bankName = bankName;
        this.allCustomers = [];
        this.deposits = [];
        this.withdraws = [];
    }

newCustomer(customerObj){
    let found = this.allCustomers.find(e => e.personalId === customerObj.personalId);
    if(found){
        throw new Error(`${customerObj.firstName} ${customerObj.lastName} is already our customer!`);
    }else {
        this.allCustomers.push(customerObj);
        return customerObj;
    }
};

depositMoney(personalId, amount){
    let found = this.allCustomers.find(e => e.personalId === personalId);
    if(found === undefined){
        throw new Error(`We have no customer with this ID!`);
    }else {
        if(found.totalMoney === undefined){
            found.totalMoney = 0;
        }
        if(found.transactions === undefined){
            found.transactions = [];
        }
        found.totalMoney += Number(amount);
        found.transactions.push({id: found.transactions.length + 1, name: `${found.firstName} ${found.lastName} made deposit of ${Number(amount)}$!`});
        return `${found.totalMoney}$`;
    }
};

withdrawMoney(personalId, amount){
    let found = this.allCustomers.find(e => e.personalId === personalId);
    if(found === undefined){
        throw new Error(`We have no customer with this ID!`);
    }else {
        if(found.totalMoney - amount < 0){
            throw new Error(`${found.firstName} ${found.lastName} does not have enough money to withdraw that amount!`)
        }
        if(found.transactions === undefined){
            found.transactions = [];
        }
        found.totalMoney -= Number(amount);
        found.transactions.push({id: found.transactions.length + 1, name: `${found.firstName} ${found.lastName} withdrew ${Number(amount)}$!`});
        return `${found.totalMoney}$`;
    }
};

customerInfo(personalId){
    let found = this.allCustomers.find(e => e.personalId === personalId);
    if(found === undefined){
        throw new Error(`We have no customer with this ID!`);
    }else {
        let resultArr = [`Bank name: ${this._bankName}`, `Customer name: ${found.firstName} ${found.lastName}`, `Customer ID: ${found.personalId}`,
    `Total Money: ${found.totalMoney}$`, `Transactions:`];

    found.transactions = found.transactions.sort((a, b) => b.id - a.id);
    for(let el of found.transactions){
        resultArr.push(`${el.id}. ${el.name}`)
    }
    return resultArr.join('\n')
    }
}

}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(4151596));

