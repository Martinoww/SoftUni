function solve(arrOfStrings) {
let commentsObj = {
    users: {},
    articles: {},
};

for(let line of arrOfStrings){
    if(line.split(' ')[0] === 'user'){
        let userName = line.split(' ')[1];
        if(!Object.keys(commentsObj.users).includes(userName)){
            commentsObj.users[userName] = undefined;
        }
    }else if(line.split(' ')[0] === 'article'){
        let articleName = line.split(' ')[1];
        if(!Object.keys(commentsObj.articles).includes(articleName)){
            commentsObj.articles[articleName] = {};
            commentsObj.articles[articleName].counter = 0;
        }
    }else if(line.split(' ')[1] === 'posts'){
        let user = line.split(' ')[0];
        let article = line.split(' ')[3];
        let commTitleAndContent = line.split(' ').slice(4).join(' ')
        let fixedArticleName = article.substring(0, article.length - 1);
        if(Object.keys(commentsObj.users).includes(user) &&
         Object.keys(commentsObj.articles).includes(fixedArticleName)){
        let lookingForComa = commTitleAndContent.split('')
        let comaIndex = lookingForComa.indexOf(',');
        let slicedTitle = lookingForComa.slice(0, comaIndex);
        let content = lookingForComa.slice(comaIndex + 1).join('')
        let title = slicedTitle.join('');
        commentsObj.articles[fixedArticleName].counter += 1;
        commentsObj.articles[fixedArticleName][user] = {};
        commentsObj.articles[fixedArticleName][user][title] = content;

        }
       
    }
}
// console.log(commentsObj);
let sorted = Object.entries(commentsObj.articles).sort((a, b) => Object.values(b[1])[0] - Object.values(a[1])[0])
// console.log(sorted);
// let sortedNames = Object.entries(Object.values(commentsObj.articles)).sort((a,b) => Object.values(a[1])[1].localeCompare(Object.values(b[1])))
// console.log(sortedNames);

for(let [topic, obj] of sorted){
    console.log(`Comments on ${topic}`);
    for(let [key, value] of Object.entries(obj)){
        if(key === 'counter'){
            continue;
        }
        let values = Object.values(value);
        let keys = Object.keys(value)
        console.log(`--- From user ${key}: ${keys} -${values}`);

    }
    // let [key, value] = Object.entries(obj);
    // console.log(`${keys}  --- ${values}`);
    // console.log(`--- From user ${value[0]}: ${value[1]}`);
}
}
solve([
  "user aUser123",
  "someUser posts on someArticle: NoTitle, stupidComment",
  "article Books",
  "article Movies",
  "article Shopping",
  "user someUser",
  "user uSeR4",
  "user lastUser",
  "uSeR4 posts on Books: I like books, I do really like them",
  "uSeR4 posts on Movies: I also like movies, I really do",
  "someUser posts on Shopping: title, I go shopping every day",
  "someUser posts on Movies: Like, I also like movies very much",
]);
