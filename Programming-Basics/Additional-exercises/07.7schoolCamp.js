function solve (input){
const season = input[0];
const typeOfGroup = input[1];
const numOfStudents = Number(input[2]);
const numOfNights = Number(input[3]);
let sport = '';
let price = 0;

if(season === 'Winter'){
if(typeOfGroup === 'boys'){
sport = 'Judo'
if(numOfStudents >= 50){
    price = ((numOfNights * 9.6) * numOfStudents) * 0.5;
}else if(numOfStudents >= 20 && numOfStudents < 50){
    price = ((numOfNights * 9.6) * numOfStudents) * 0.85;
}else if(numOfStudents >= 10 && numOfStudents < 20){
    price = ((numOfNights * 9.6) * numOfStudents) * 0.95;
}else{
    price = (numOfNights * 9.6) * numOfStudents;
}
}else if(typeOfGroup === 'girls'){
    sport = 'Gymnastics'
if(numOfStudents >= 50){
    price = ((numOfNights * 9.6) * numOfStudents) * 0.5;
}else if(numOfStudents >= 20 && numOfStudents < 50){
    price = ((numOfNights * 9.6) * numOfStudents) * 0.85;
}else if(numOfStudents >= 10 && numOfStudents < 20){
    price = ((numOfNights * 9.6) * numOfStudents) * 0.95;
}else{
    price = (numOfNights * 9.6) * numOfStudents;
}
}else if(typeOfGroup === 'mixed'){
    sport = 'Ski'
    if(numOfStudents >= 50){
        price = ((numOfNights * 10) * numOfStudents) * 0.5;
    }else if(numOfStudents >= 20 && numOfStudents < 50){
        price = ((numOfNights * 10) * numOfStudents) * 0.85;
    }else if(numOfStudents >= 10 && numOfStudents < 20){
        price = ((numOfNights * 10) * numOfStudents) * 0.95;
    }else{
        price = (numOfNights * 10) * numOfStudents;
    }
}
}else if(season === 'Spring'){
    if(typeOfGroup === 'boys'){
        sport = 'Tennis'
        if(numOfStudents >= 50){
            price = ((numOfNights * 7.2) * numOfStudents) * 0.5;
        }else if(numOfStudents >= 20 && numOfStudents < 50){
            price = ((numOfNights * 7.2) * numOfStudents) * 0.85;
        }else if(numOfStudents >= 10 && numOfStudents < 20){
            price = ((numOfNights * 7.2) * numOfStudents) * 0.95;
        }else{
            price = (numOfNights * 7.2) * numOfStudents;
        }
    }else if(typeOfGroup === 'girls'){
        sport = 'Athletics'
        if(numOfStudents >= 50){
            price = ((numOfNights * 7.2) * numOfStudents) * 0.5;
        }else if(numOfStudents >= 20 && numOfStudents < 50){
            price = ((numOfNights * 7.2) * numOfStudents) * 0.85;
        }else if(numOfStudents >= 10 && numOfStudents < 20){
            price = ((numOfNights * 7.2) * numOfStudents) * 0.95;
        }else{
            price = (numOfNights * 7.2) * numOfStudents;
        }
    }else if(typeOfGroup === 'mixed'){
        sport = 'Cycling'
        if(numOfStudents >= 50){
            price = ((numOfNights * 9.5) * numOfStudents) * 0.5;
        }else if(numOfStudents >= 20 && numOfStudents < 50){
            price = ((numOfNights * 9.5) * numOfStudents) * 0.85;
        }else if(numOfStudents >= 10 && numOfStudents < 20){
            price = ((numOfNights * 9.5) * numOfStudents) * 0.95;
        }else{
            price = (numOfNights * 9.5) * numOfStudents;
        }
    }
}else if(season === 'Summer'){
    if(typeOfGroup === 'boys'){
        sport = 'Football'
        if(numOfStudents >= 50){
            price = ((numOfNights * 15) * numOfStudents) * 0.5;
        }else if(numOfStudents >= 20 && numOfStudents < 50){
            price = ((numOfNights * 15) * numOfStudents) * 0.85;
        }else if(numOfStudents >= 10 && numOfStudents < 20){
            price = ((numOfNights * 15) * numOfStudents) * 0.95;
        }else{
            price = (numOfNights * 15) * numOfStudents;
        }
        }else if(typeOfGroup === 'girls'){
            sport = 'Volleyball'
        if(numOfStudents >= 50){
            price = ((numOfNights * 15) * numOfStudents) * 0.5;
        }else if(numOfStudents >= 20 && numOfStudents < 50){
            price = ((numOfNights * 15) * numOfStudents) * 0.85;
        }else if(numOfStudents >= 10 && numOfStudents < 20){
            price = ((numOfNights * 15) * numOfStudents) * 0.95;
        }else{
            price = (numOfNights * 15) * numOfStudents;
        }
        }else if( typeOfGroup === 'mixed'){
            sport = 'Swimming'
        if(numOfStudents >= 50){
            price = ((numOfNights * 20) * numOfStudents) * 0.5;
        }else if(numOfStudents >= 20 && numOfStudents < 50){
            price = ((numOfNights * 20) * numOfStudents) * 0.85;
        }else if(numOfStudents >= 10 && numOfStudents < 20){
            price = ((numOfNights * 20) * numOfStudents) * 0.95;
        }else{
            price = (numOfNights * 20) * numOfStudents;
        }
        }
}
console.log(`${sport} ${price.toFixed(2)} lv.`)




}
solve(['Summer', 'boys', '60', '7'])