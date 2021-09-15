function calcWalkTime(steps, metersPerStep, kmPerHour) {
    const distance = steps * metersPerStep
    const decimalTime = distance / 1000 / kmPerHour
    const n = new Date(0, 0)
    n.setSeconds(decimalTime * 60 * 60 + 1)
    n.setMinutes(n.getMinutes() + Math.floor(distance / 500))
 
    return console.log(n.toTimeString().slice(0, 8))
}
calcWalkTime(4000, 0.60, 5)