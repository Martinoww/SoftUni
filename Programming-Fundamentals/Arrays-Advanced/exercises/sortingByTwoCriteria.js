function sortingByTwoCriteria(arrOfStrings){
arrOfStrings.sort((a, b) => {
    let firstCriteria = a.length - b.length
    let secondCriteria = a.localeCompare(b)
    return firstCriteria || secondCriteria
})
console.log(arrOfStrings.join('\n'));
}
sortingByTwoCriteria(["coco", "alex", "beti"])