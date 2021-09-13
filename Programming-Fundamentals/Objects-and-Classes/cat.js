function solve(arr) {
  let cats = [];
  class cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (let data of arr) {
    let catData = data.split(" ");
    let [name, age] = [[catData[0]], [catData[1]]];
    cats.push(new cat(name, age));
  }
  for (let currCat of cats) {
    currCat.meow();
  }
}
solve(["Mellow 2", "Tom 5"]);
