function subSum(arr, start, end){
if(!Array.isArray(arr)){
    return NaN;
}
start = Number(start);
end = Number(end);
let sum = 0;
if(start < 0){
    start = 0;
};
if(end > arr.length -1){
    end = arr.length - 1;
};

for(let i = start; i <= end; i++){
    sum += Number(arr[i]);
};
return sum;

}
subSum([1,2,2,1],0,2)
// module.exports = subSum;