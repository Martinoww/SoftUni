class ChristmasDinner{
    constructor(budget){
        this.budget = Number(budget);
        this.check = this.budgetChecker();
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

budgetChecker(){
    if(this.budget < 0){
        throw new Error(`The budget cannot be a negative number`)
    }
}

shopping([product, price]){ 
    price = Number(price);
    if(price > this.budget){
        throw new Error(`Not enough money to buy this product`)
    }else {
        this.budget -= price;
        this.products.push(product);
        return `You have successfully bought ${product}!`;
    }
}

recipes(recipeObj){

for(let i = 0; i < recipeObj.productsList.length; i++){
    if(!this.products.includes(recipeObj.productsList[i])){
        throw new Error(`We do not have this product`);
    }
}
this.dishes.push({recipeName: recipeObj.recipeName, 
productsList: recipeObj.productsList});

return `${recipeObj.recipeName} has been successfully cooked!`;

}

inviteGuests(name, dish){
    if(this.dishes.some(e => e.recipeName === dish) === false){
        throw new Error(`We do not have this dish`);
    }else if(Object.keys(this.guests).includes(name)){
        throw new Error(`This guest has already been invited`);
    }else {
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }
}

showAttendance(){
let resultArr = [];

    for(let [key, value] of Object.entries(this.guests)){
        let found = this.dishes.find(e => e.recipeName === value);
        let productsAsArr = found.productsList;
        let resultStr = `${key} will eat ${value}, which consists of ${productsAsArr.join(', ')}`
        resultArr.push(resultStr);
    }
    return resultArr.join('\n')

}

};


let dinner = new ChristmasDinner(300);

console.log(dinner.shopping(['Salt']));
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
console.log(dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
}));

console.log(dinner.inviteGuests('Ivan', 'Oshav'));
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
