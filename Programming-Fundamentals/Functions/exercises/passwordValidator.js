function passwordValidator(password){

function isLengthEnough(password){
if(password.length >= 6 && password.length <= 10){
    return true;
}else{
    return false
}
    } 
    
function isConsistsOnlyOfDigitsAndLetters(password){

    for(let char of password){
let charAsCode = char.charCodeAt(0);
if(!(charAsCode >= 48 && charAsCode <= 57) && 
!(charAsCode >= 65 && charAsCode <= 90) && 
!(charAsCode >= 97 && charAsCode <= 122)){
    return false;
}

    }
    return true;
}    

function isContainAtLeastTwoDigits (password){
let counter = 0
for(let element of password){
    let elementAsCode = element.charCodeAt()
if(elementAsCode >= 48 && elementAsCode <= 57){
    counter++
}
}
if(counter >= 2){
    return true;
}else{
    return false;
}

}
let result = ''
if(isLengthEnough(password) && isConsistsOnlyOfDigitsAndLetters(password) && isContainAtLeastTwoDigits(password)){
result = `Password is valid`
 
}

if(!isLengthEnough(password)){
    result += `Password must be between 6 and 10 characters\n`
}
if(!isConsistsOnlyOfDigitsAndLetters(password)){
    result += `Password must consist only of letters and digits\n`
}
if(!isContainAtLeastTwoDigits(password)){
    result += `Password must have at least 2 digits\n`
}


return result;
}
let result = passwordValidator('logIn')
console.log(result);