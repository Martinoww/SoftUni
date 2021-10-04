function solution(){
let str = '';
return {
    append(s) {str += s;},
    removeStart(num) {str = str.slice(num);},
    removeEnd(n) {str = str.slice(0, -n);},
    print() {console.log(str);}
}
}
let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

