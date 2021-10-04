function solve(arrOfStr){
let resultCollection = [];
let commandObj = {
    add(str){
        resultCollection.push(str);
    },
    remove(str){
       resultCollection = resultCollection.filter(el => el !== str);
    },
    print(){console.log(resultCollection.join(','));}
}

for(let line of arrOfStr){
    let [command, str] = line.split(' ');
    commandObj[command](str);
}

}
solve(['add pesho', 'add george', 'add peter', 'remove peter','print'])