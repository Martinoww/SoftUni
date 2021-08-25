function solve(text){
let count = text.toString().split(' ').length;
if(count > 10){
    console.log(`The message is too long to be send! Has ${count} words.`)
}else if(count <= 10){
    console.log(`The message was sent successfully!`)
}

}
solve(["This message has ten words and you can send it!"])