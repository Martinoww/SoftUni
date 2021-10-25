class Hex{
    constructor(value){
        this.value = value;
    };

    valueOf(){
        return this.value;
    };
    
    toString(){
        let resultStr = ``;
        resultStr = '0x' + this.value.toString(16).toUpperCase();
        return resultStr;
    };

    plus(num){
       let result = this.value + num.value
        return new Hex(result);
    };

    minus(num){
        let result = this.value - num.value
        return new Hex(result);
    };

    parse(str){
        return parseInt(str, 16);
    }

}



let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(6);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));

