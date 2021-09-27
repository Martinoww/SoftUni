function createSortedList(){
let object = {
list: [],
add(number) {
    this.list.push(number);
    this.list.sort((a, b) => a - b);
    this.size = this.list.length;
},
remove(index) {
    if(index >= 0 && index < this.list.length){
        this.list.splice(index, 1);
        this.size = this.list.length;

    }
},
get(index) {
    if(index >= 0 && index < this.list.length){
        this.size = this.list.length;
        return this.list[index]
    }
},
size: 0,
}
return object;

}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list.size);
