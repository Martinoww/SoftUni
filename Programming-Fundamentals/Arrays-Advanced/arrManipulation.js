function arrManipulation(arr){
    let arrForManipulation = arr.shift();
    let separatedArr = arrForManipulation.split(' ').map(Number)
    
    
    for(let i = 0; i < arr.length; i++){ 
        let newCommand = arr[i];
        let separatedCommands = newCommand.split(' ')
        let firstNum = Number(separatedCommands[1])
        let secondNum = Number(separatedCommands[2])

        if(separatedCommands[0] == 'Add'){
            separatedArr.push(firstNum)
        }else if(separatedCommands[0] == 'Remove'){
          separatedArr = separatedArr.filter(x => x !== firstNum)
        }else if(separatedCommands[0] == 'RemoveAt'){
            separatedArr.splice(firstNum, 1)
        }else if(separatedCommands[0] == 'Insert'){
            separatedArr.splice(secondNum, 0, firstNum)
        }
    }
        console.log(separatedArr.join(' '));
    }
    arrManipulation(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
    )