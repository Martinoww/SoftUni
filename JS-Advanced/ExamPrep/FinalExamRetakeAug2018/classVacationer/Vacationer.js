class Vacationer{
    constructor(fullName, creditCard = [1111, "", 111]){
        this.fullName = fullName;
        this.idNumber = this.generateIDNumber();
        if(typeof creditCard[0] !== "number" || typeof creditCard[2] !== "number"){
            throw new Error("Invalid credit card details")
        }
 
        if (creditCard.length < 3) {
            throw new Error("Missing credit card information");
        }
 
        this.creditCard = { cardNumber: creditCard[0], expirationDate: creditCard[1], securityNumber: creditCard[2] };
        this.wishList = [];
    }

    get fullName(){
        return this._fullName;
    }

    set fullName(personInf){
        if(personInf.length < 3){
            throw new Error(`Name must include first name, middle name and last name`);
        }else if(personInf.length >= 3){
            let namePattern = /^[A-Z][a-z]+ [A-Z][a-z]+ [A-Z][a-z]+$/gm;
                if(namePattern.test(personInf.join(' ')) == false){
                    throw new Error(`Invalid full name`);
                }
            return this._fullName = {firstName: personInf[0], middleName: personInf[1], lastName: personInf[2]};
        }
    }

generateIDNumber(){
let id = 231 * this._fullName.firstName.charCodeAt(0) + 139 * this._fullName.middleName.length;
let lastNameLastLetter = this._fullName.lastName[this._fullName.lastName.length - 1];
if(lastNameLastLetter == 'a' || lastNameLastLetter == 'e' || lastNameLastLetter == 'o' || lastNameLastLetter == 'i' || lastNameLastLetter == 'u'){
    id = id.toString() + '8';
}else {
    id = id.toString() + '7';

}
return id;
}

addCreditCardInfo(arr){
if(arr.length < 3){
    throw new Error(`Missing credit card information`);
}else {
    if(typeof arr[0] != 'number' || typeof arr[2] != 'number'){
        throw new Error(`Invalid credit card details`);
    }else {
        this.creditCard.cardNumber = arr[0];
        this.creditCard.expirationDate = arr[1];
        this.creditCard.securityNumber = arr[2];
        }
    }
};

addDestinationToWishList(destination){
    if(this.wishList.includes(destination)){
        throw new Error(`Destination already exists in wishlist`);
    }else {
        this.wishList.push(destination);
        this.wishList = this.wishList.sort((a, b) => a.length - b.length);
    }
};

getVacationerInfo(){
let resultArr = [`Name: ${this._fullName.firstName} ${this._fullName.middleName} ${this._fullName.lastName}`,
`ID Number: ${this.idNumber}`, `Wishlist:`];
    if(this.wishList.length == 0){
        resultArr.push(`empty`);
    }else {
        let resultStr = ``
        for(let el of this.wishList){
            resultStr += `${el} `
        }
        resultStr = resultStr.trim().split(' ').join(', ')
        resultArr.push(resultStr)
    }
    resultArr.push(`Credit Card:`, `Card Number: ${this.creditCard.cardNumber}`, 
    `Expiration Date: ${this.creditCard.expirationDate}`, 
    `Security Number: ${this.creditCard.securityNumber}`);
    return resultArr.join('\n')
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

