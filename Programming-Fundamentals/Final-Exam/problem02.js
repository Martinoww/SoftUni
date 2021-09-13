function solve(input){
let pattern = /^(.+)>(?<nums>\d{3})\|(?<lower>[a-z]{3})\|(?<upper>[A-Z]{3})\|(?<symb>[^<>]{3})<(\1)$/
let n = Number(input.shift());

for(let i = 0; i < n; i++){
    let text = input[i];
    let match = pattern.exec(text);
    if(match != null){
    let {nums, lower, upper, symb} = match.groups;
    let result = `${nums}${lower}${upper}${symb}`
    console.log(`Password: ${result}`);
    }else{
        console.log(`Try another password!`);
    }
}

}
solve(["5",
"aa>111|mqu|BAU|mqu<aa",
"()>111!aaa!AAA!^&*<()",
"o>088|abc|AAA|***<o",
"asd>asd|asd|ASD|asd<asd",
"*>088|zzzz|ZzZ|123<*"])

