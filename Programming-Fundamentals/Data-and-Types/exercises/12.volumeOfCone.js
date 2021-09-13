function volumeOfCone(r, h){
let volume = (1/3) * Math.PI * (r * r) * h
console.log(`volume = ${volume.toFixed(4)}`)
let area = Math.PI * r * (r + Math.sqrt((h * h) + (r * r)))
console.log(`area = ${area.toFixed(4)}`)
}
volumeOfCone(3.3, 7.8)