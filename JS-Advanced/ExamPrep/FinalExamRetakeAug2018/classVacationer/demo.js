class Vacationer {
    constructor(fullName, creditCard = [1111, "", 111]) {
        this.fullName = fullName;
 
        if(typeof creditCard[0] !== "number" || typeof creditCard[2] !== "number"){
            throw new Error("Invalid credit card details")
        }
 
        if (creditCard.length < 3) {
            throw new Error("Missing credit card information");
        }
 
        this.creditCard = { cardNumber: creditCard[0], expirationDate: creditCard[1], securityNumber: creditCard[2] };
        this.wishList = [];
        this.idNumber = this.generateIDNumber()
    }
 
    get fullName() {
        return this._fullName;
    }
 
    set fullName(value) {
        if (value.length !== 3) {
            throw new Error("Name must include first name, middle name and last name");
        }
 
        let pattern = /^[A-Z][a-z]+ [A-Z][a-z]+ [A-Z][a-z]+$/g
        if (!pattern.test(value.join(" "))) {
            throw new Error("Invalid full name");
        }
        return this._fullName = {firstName: value[0], middleName: value[1], lastName: value[2]};
    }
 
 
    generateIDNumber() {
        let numberId = 0;
        numberId += 231 * Number(this.fullName.firstName.charCodeAt(0)) + 139 * Number(this.fullName.middleName.length);
 
        if (this.fullName.lastName.endsWith("a") || this.fullName.lastName.endsWith("e") || this.fullName.lastName.endsWith("o") ||
        this.fullName.lastName.endsWith("i") || this.fullName.lastName.endsWith("u")) {
            numberId += "8";
        } else {
            numberId += "7";
        }
        return numberId;
    }
 
    addCreditCardInfo(input) {
        let [cardNumber, expirationDate, securityNumber] = input;
 
        if (input.length < 3) {
            throw new Error("Missing credit card information");
        }
 
        if (typeof cardNumber !== "number" || typeof securityNumber !== "number") {
            throw new Error("Invalid credit card details");
        }
 
        this.creditCard = { cardNumber, expirationDate, securityNumber };
    }
 
    addDestinationToWishList(destination) {
        if (this.wishList.includes(destination)) {
            throw new Error("Destination already exists in wishlist");
        }
 
        this.wishList.push(destination);
        this.wishList = this.wishList.sort((a, b) => a.length - b.length);
    }
 
    getVacationerInfo() {
        let output = "";
        output += `Name: ${Object.values(this.fullName).join(' ')}\nID Number: ${this.idNumber}\nWishlist:\n`;
 
        if (this.wishList.length == 0) {
            output += "empty\n";
        } else {
            output += `${this.wishList.join(", ")}\n`
        }
 
        output += `Credit Card:\nCard Number: ${this.creditCard.cardNumber}\nExpiration Date: ${this.creditCard.expirationDate}\nSecurity Number: ${this.creditCard.securityNumber}`;
        return output;
    }
}


// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"], 
[123456789, "10/01/2018", 777]);

// Should throw an error (Invalid full name)
try {
    let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
} catch (err) {
    console.log("Error: " + err.message);
}

// Should throw an error (Missing credit card information)
try {
    let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
    vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
} catch (err) {
    console.log("Error: " + err.message);
}

vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Bali');

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());

