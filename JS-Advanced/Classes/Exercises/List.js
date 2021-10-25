class List{
    constructor(){
        this.numbers = [];
        this.size = 0;
    }

    add(element){
        this.numbers.push(element);
        this.size++;
        this.numbers.sort((a, b) => a - b);
    };

    remove(index){
        if(this.indexChecker(index)){
            this.numbers.splice(index, 1);
            this.size--;
        }
    }

    get(index){
        if(this.indexChecker(index)){
            return this.numbers[index];
        }
    }


    indexChecker(index){
        if(index < 0 || index >= this.numbers.length){
            throw new Error('Passed index is outside the length !')
        }else {
            return true;
        };
    };
}


let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));

