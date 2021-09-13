function solve(){
class Storage {
    constructor(capacity){
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }
    addProduct (product) {
        this.storage.push(product)
      this.totalCost += product.price * product.quantity;
      this.capacity -= product.quantity
    }
    getProducts () {
        let result = [];
        for(let line of this.storage){
            result.push(JSON.stringify(line))
        }
        return result.join('\n');
    }
}

// const Storage = result

let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};

let storage = new Storage(50);

storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
// storage.getProducts();
// console.log(storage.capacity);
// console.log(storage.totalCost);


let output = storage.getProducts();
expect(output).to.equal('{"name":"Cucamber","price":1.5,"quantity":15}\n{"name":"Tomato","price":0.9,"quantity":25}\n{"name":"Bread","price":1.1,"quantity":8}');
expect(storage.capacity).to.equal(2);
expect(storage.totalCost).to.equal(53.8);

}
solve()
// let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
// let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
// let productThree = {name: 'Bread', price: 1.10, quantity: 8};
// let storage = new Storage(50);
// storage.addProduct(productOne);
// storage.addProduct(productTwo);
// storage.addProduct(productThree);