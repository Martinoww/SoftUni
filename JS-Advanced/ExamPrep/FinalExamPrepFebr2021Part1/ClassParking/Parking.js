class Parking{
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
        this.maxCapacity = capacity;
    }

    addCar(carModel, carNumber){
        if(this.capacity == 0){
            throw new Error(`Not enough parking space.`);
        }else {
            this.vehicles.push({
                carModel,
                carNumber,
                payed: false
            });
            this.capacity -= 1;
            return `The ${carModel}, with a registration number ${carNumber}, parked.`;
        }
    };

    removeCar(carNumber){
        let found = this.vehicles.find(e => e.carNumber === carNumber);
        if(found === undefined){
            throw new Error(`The car, you're looking for, is not found.`);
        }else if(found.payed === false){
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }else {
            this.vehicles.splice(this.vehicles.indexOf(found), 1);
            this.capacity += 1
            if(this.capacity > this.maxCapacity){
                this.capacity = this.maxCapacity;
            }
            return `${carNumber} left the parking lot.`;
        }
    };

    pay(carNumber){
        let found = this.vehicles.find(e => e.carNumber === carNumber);
        if(found === undefined){
            throw new Error(`${carNumber} is not in the parking lot.`);
        }else if(found.payed === true){
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }else {
            found.payed = true;
            return `${carNumber}'s driver successfully payed for his stay.`;
        }
    };

    getStatistics(carNumber){
        let resultArr = [];
        if(carNumber === undefined){
            
            resultArr.push(`The Parking Lot has ${this.capacity} empty spots left.`);
            this.vehicles = this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel));
            for(let el of this.vehicles){
                let isPayed = '';
            if(el.payed == false){
                isPayed = `Not payed`
            }else if(el.payed === true){
                isPayed = `Has payed`
            }
                resultArr.push(`${el.carModel} == ${el.carNumber} - ${isPayed}`);
            }
            return resultArr.join('\n')
        }else {
            let found = this.vehicles.find(e => e.carNumber === carNumber);
            let isPayed = '';
            if(found.payed == false){
                isPayed = `Not payed`
            }else if(found.payed === true){
                isPayed = `Has payed`
            }
            return `${found.carModel} == ${found.carNumber} - ${isPayed}`
        }
    }
}

const parking = new Parking(1);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.pay("TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.removeCar("TX3691CA"));
