class Restaurant{
    constructor(budget){
        this.budgetMoney = Number(budget);
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(arrOfStr){
        // this.history = [];
        for(let line of arrOfStr){
            let [prodName, prodQtity, prodPrice] = line.split(' ');
            prodPrice = Number(prodPrice);
            prodQtity = Number(prodQtity);
            if(this.budgetMoney >= prodPrice){
                this.budgetMoney -= prodPrice;
                if(this.stockProducts[prodName] == undefined){
                    this.stockProducts[prodName] = 0;
                }
                this.stockProducts[prodName] += prodQtity;
                this.history.push(`Successfully loaded ${prodQtity} ${prodName}`);
            }else {
                this.history.push(`There was not enough money to load ${prodQtity} ${prodName}`);
            }
        }
        return this.history.join('\n');
    };

    addToMenu(meal, neededProds, price){
        price = Number(price);
        if(this.menu[meal] == undefined){
            this.menu[meal] = {
                products: {},
                price: price,
            };
            for(let line of neededProds){
                let[prodName, prodQtity] = line.split(' ');
                prodQtity = Number(prodQtity);
                this.menu[meal].products[prodName] = prodQtity;
            };
            if(Object.keys(this.menu).length === 1){
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            }else {
                return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
            }
        }else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
    };

    showTheMenu(){
        if(Object.keys(this.menu).length === 0){
            return `Our menu is not ready yet, please come later...`;
        }else {
        let resultArr = [];

            for(let key in this.menu){
                resultArr.push(`${key} - $ ${this.menu[key].price}`);
            };

        return resultArr.join('\n');
        };
    }

    makeTheOrder(wantedMeal){
        if(this.menu[wantedMeal] === undefined){
            return `There is not ${wantedMeal} yet in our menu, do you want to order something else?`
        }
        for(let key in this.menu[wantedMeal].products){
            if(this.stockProducts[key] < this.menu[wantedMeal].products[key]){
                return `For the time being, we cannot complete your order (${wantedMeal}), we are very sorry...`
            }
        };

        for(let key in this.menu[wantedMeal].products){
            this.stockProducts[key] -= this.menu[wantedMeal].products[key];
        };

        this.budgetMoney += this.menu[wantedMeal].price;
        return `Your order (${wantedMeal}) will be completed in the next 30 minutes and will cost you ${this.menu[wantedMeal].price}.`
    }
}
let kitchen = new Restaurant(1000);
console.log(kitchen.budgetMoney);
console.log(kitchen.stockProducts);
console.log(kitchen.loadProducts(['Banana 10 500', 'Banana 20 50', 'Strawberries 10 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('frozenYogurts', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.budgetMoney);
console.log(kitchen.stockProducts);
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// console.log(`----------`);
console.log(kitchen.showTheMenu());
// console.log(`----------`);
// console.log(kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']));
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 70'], 9.99));
console.log(kitchen.makeTheOrder('frozenYogurt'));
// console.log(kitchen.stockProducts);
// console.log(kitchen.makeTheOrder('frozenYogurt'));
// console.log(`----------`);
console.log(kitchen.budgetMoney);
console.log(kitchen.stockProducts);
console.log(kitchen.makeTheOrder('frozenYogurt'));




