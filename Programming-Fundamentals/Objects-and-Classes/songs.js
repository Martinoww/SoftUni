function songs(input){
let songs = []
let numOfSongs = input.shift();
let typeOfSongs = input.pop()

class Song {
constructor(type, name, time){
    this.type = type;
    this.name = name;
    this.time = time;
}
}

for(let currData of input){
let [type, name, time] = currData.split('_');
songs.push(new Song(type, name, time));
}

if(typeOfSongs === 'all'){
    songs.forEach((i) => console.log(i.name))
}else {
    let filtered = songs.filter((i) => i.type === typeOfSongs);
    filtered.forEach((i) => console.log(i.name));
}
}
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    
    )