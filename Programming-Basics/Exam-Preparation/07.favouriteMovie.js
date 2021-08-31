function myFunction(input) {
    let index = 0;
    var str = input[index];
    var lg = str.length;
    let score = 0;
    let bestMovie = Number.MIN_SAFE_INTEGER;
    let movies = 0;
    let bestMovieName = '';
    let letter = ''
    let check = Number;
    while(str !== 'STOP'){
    str = input[index];
    lg = str.length;
    for(let i = 0; i < lg; i++){
      letter = str.charAt(i)
      score += str.charCodeAt(i);
      if(letter == 2 || letter == ' '){
        continue;
      }
      if(letter === letter.toLowerCase()){
        score -= 2 * lg;
      }else if(letter === letter.toUpperCase()){
        score -= lg;
      } 
  }
    if(score > bestMovie){
      bestMovie = score;
      bestMovieName = str;
    }
    movies++
    if(movies >= 7){
      console.log(`The limit is reached.`)
      console.log(`The best movie for you is ${bestMovieName} with ${bestMovie} ASCII sum.`)
      break;
    }
    
    score = 0;
    index++
    str = input[index];
  }
  if(str == 'STOP'){
    console.log(`The best movie for you is ${bestMovieName} with ${bestMovie} ASCII sum.`)
  }
  
  
  
  
  }
  myFunction(['The maze',
    'School story 2',
    'Shrek 2',
    'Ice age',
    'STOP'])
  // score = str.charCodeAt(index)
  // let letter = str.charAt(index)