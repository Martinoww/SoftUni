function extensibleObject() { 

return {
    extend: function (templ){
        let objProto = Object.getPrototypeOf(this);
        let tempEntries = Object.entries(templ);
        for(let [key, value] of tempEntries){
            if(typeof value == 'function'){
                objProto[key] = value;
            }else {
                this[key] = value;
            }
        }
       
    }
}



} 
    const myObj = extensibleObject(); 
     
    const template = { 
      extensionMethod: function () {}, 
      extensionProperty: 'someString' 
    } 
   console.log(myObj.extend(template)); 