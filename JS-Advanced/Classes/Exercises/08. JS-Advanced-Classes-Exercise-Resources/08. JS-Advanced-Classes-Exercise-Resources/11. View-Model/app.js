class Textbox {
   constructor(selector, pattern){
       this.selector = selector;
       this._invalidSymbols = pattern;
       this._value = ()=>{
        let resultArr = [];
        let inputFields = Array.from(document.getElementsByClassName(this.selector));      
        inputFields.forEach(v => resultArr.push(v));
        return resultArr;
       }
       this._elements = new Set();

   };

   get value(){
       return this._value;
   }

   get elements(){
       return this._elements;
   }

//    isValid(){

//    }

}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = Array.from(document.getElementsByClassName('textbox'));

inputs.forEach(e =>{
e.addEventListener('change', ()=>{
    console.log(textbox.value);
})
});

