class Restaurant {
  constructor(budget) {
    this.budgetMoney = Number(budget);
    this.menu = {};
    this.stockProducts = {};
    this.history = [];
  }

  loadProducts(arrOfStr) {
    this.history = [];
    for (let line of arrOfStr) {
      let [name, qntity, price] = line.split(" ");
      qntity = Number(qntity);
      price = Number(price);

      if (price <= this.budgetMoney) {
        this.budgetMoney -= price;
        if (this.stockProducts[name] === undefined) {
          this.stockProducts[name] = 0;
        }
        this.stockProducts[name] += qntity;
        this.history.push(`Successfully loaded ${qntity} ${name}`);
      } else {
        this.history.push(
          `There was not enough money to load ${qntity} ${name}`
        );
      }
    }
    return this.history.join("\n");
  }

  addToMenu(meal, neededProducts, price) {
    price = Number(price);

    if (this.menu[meal] === undefined) {
      this.menu[meal] = {
        products: {},
        price,
      };
      for (let line of neededProducts) {
        let [product, qntity] = line.split(" ");
        qntity = Number(qntity);
        if (this.menu[meal].products[product] == undefined) {
          this.menu[meal].products[product] = 0;
        }
        this.menu[meal].products[product] += qntity;
      }

      if (Object.keys(this.menu).length === 1) {
        return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
      } else {
        return `Great idea! Now with the ${meal} we have ${
          Object.keys(this.menu).length
        } meals in the menu, other ideas?`;
      }
    } else {
      return `The ${meal} is already in the our menu, try something different.`;
    }
  }

  showTheMenu() {
    let resultArr = [];
    for (let key in this.menu) {
      resultArr.push(`${key} - $ ${this.menu[key].price}`);
    }
    if (resultArr.length == 0) {
      return `Our menu is not ready yet, please come later...`;
    } else {
      return resultArr.join("\n");
    }
  }

  makeTheOrder(wantedMeal) {
    if (this.menu[wantedMeal] === undefined) {
      return `There is not ${wantedMeal} yet in our menu, do you want to order something else?`;
    } else {
      for (let key in this.menu[wantedMeal].products) {
        if (this.stockProducts[key] == undefined || this.stockProducts[key] - this.menu[wantedMeal].products[key] < 0) {
          return `For the time being, we cannot complete your order (${wantedMeal}), we are very sorry...`;
        }
      }

      for (let key in this.menu[wantedMeal].products) {
        this.stockProducts[key] -= this.menu[wantedMeal].products[key];
      }
      this.budgetMoney += this.menu[wantedMeal].price;
      return `Your order (${wantedMeal}) will be completed in the next 30 minutes and will cost you ${this.menu[wantedMeal].price}.`;
    }
  }
}

let kitchen = new Restaurant(1000);

console.log(
  kitchen.addToMenu(
    "frozenYogurt",
    ["Yogurt 1", "Honey 1", "Banana 1", "Strawberries 10"],
    9.99
  )
);
console.log(
  kitchen.addToMenu(
    "Pizza",
    [
      "Flour 0.5",
      "Oil 0.2",
      "Yeast 0.5",
      "Salt 0.1",
      "Sugar 0.1",
      "Tomato sauce 0.5",
      "Pepperoni 1",
      "Cheese 1.5",
    ],
    15.55
  )
);

console.log(kitchen.showTheMenu());

kitchen.loadProducts([
  "Yogurt 1 3",
  "Honey 1 4",
  "Strawberries 10 10",
  "Banana 1 1",
]);
console.log(kitchen.stockProducts);
console.log(kitchen.budgetMoney);

console.log(kitchen.makeTheOrder("frozenYogurt"));
console.log(kitchen.stockProducts);
console.log(kitchen.budgetMoney);
console.log(kitchen.makeTheOrder("frozenYogurt"));

