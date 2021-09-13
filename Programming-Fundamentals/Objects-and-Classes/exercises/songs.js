function solve(arr){
let numOfSongs = arr.shift();
let typeOfSongs = arr.pop();
let songs = [];

class Songs {
    constructor(type, name, time) {
        this.type = type;
        this.name = name;
        this.time = time;
    }
}

for(let token of arr){
let splitedToken = token.split('_');
let [type, name, time] = splitedToken;
let song = new Songs(type, name, time);
songs.push(song)
}

if(typeOfSongs === 'all'){
    songs.forEach((i) => console.log(i.name))
}else {
    let filtered = songs.filter((i) => i.type === typeOfSongs);
    filtered.forEach((i) => console.log(i.name))
}

}
solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    
    )