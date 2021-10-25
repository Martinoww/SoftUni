class Stringer{
    constructor(innerStr, innerLength){
        this.innerStr = innerStr;
        this.innerLength = innerLength;
    }

    increase(num){
        this.innerLength += num;
    };

    decrease(num){
        this.innerLength -= num;
        if(this.innerLength < 0){
            this.innerLength = 0;
        };
    };

    toString(){
        let resultStr = '';
        if(this.innerLength === 0){
            return `...`;
        }else if(this.innerLength < this.innerStr.length){
        resultStr = this.innerStr.slice(0, this.innerLength) + '...';
        }else {
            resultStr = this.innerStr;
        }
        return resultStr;
    }
}


let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
