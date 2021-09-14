function solve(n){
if(n === 1){
    console.log('*');
    return
}else {
    if(typeof n === 'undefined'){
    n = 5
    }
    for(let i = 1; i <= n; i++){
        console.log('* '.repeat(n));
    }
}
}
solve(1)
solve(2)
solve(5)
solve()