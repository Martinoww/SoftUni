function condenseArrayToNumber(nums){
let condensed = []
if(nums.length > 1){
    while(nums.length > 1){
        condensed = nums
        for(let i = 0; i < nums.length - 1; i++){
    condensed[i] = nums[i] + nums[i + 1]
        }
        condensed.pop()
        nums = condensed
    }
    console.log(condensed.toString())
}else{
    console.log(nums.toString())
}

}
condenseArrayToNumber([1])
console.log('--------');
condenseArrayToNumber([2,10,3])
console.log('--------');
condenseArrayToNumber([5,0,4,1,2])
