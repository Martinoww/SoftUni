function solve(input){
    let listOfNums = input.shift().split(' ');
    let moves = 0
    for(let line of input){
    if(listOfNums.length == 0){
        console.log(`You have won in ${moves} turns!`);
        return;
    }
    if(line === 'end'){
        console.log(`Sorry you lose :(`);
        console.log(listOfNums.join(' '));
        return;
    }    
    moves++
    let [firstInd, secondInd] = line.split(' ').map(Number);
    
    if(firstInd === secondInd 
        || firstInd < 0 || firstInd > listOfNums.length - 1 
        || secondInd < 0 || secondInd > listOfNums.length - 1){
            let itemToAdd = [`-${moves}a`, `-${moves}a`]
            listOfNums.splice(listOfNums.length / 2, 0, ...itemToAdd)
            console.log(`Invalid input! Adding additional elements to the board`);
            continue;
    }

    if(listOfNums[firstInd] == listOfNums[secondInd]){
         console.log(`Congrats! You have found matching elements - ${listOfNums[firstInd]}!`);
        listOfNums.splice(firstInd, 1);
        if(secondInd - 1 < 0){
            secondInd = 1
        }
        listOfNums.splice(secondInd - 1, 1)
    }else{
    console.log(`Try again!`);
    }
    
    
    
    }
    
    }
    solve([
        "a 2 4 a 2 4", 
        "4 0", 
        "0 2",
        "0 1",
        "0 1", 
        "end"
    ])