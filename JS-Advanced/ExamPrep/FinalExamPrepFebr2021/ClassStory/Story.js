class Story{
    constructor(title, creator){
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
        this._commentIdCounter = 1;
    }
    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`;
        }
 
        return `${this._likes[0]} and ${this._likes.slice(1).length} others like this story!`;
    }
 
    like(username) {
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        }
 
        if (username === this.creator) {
            throw new Error("You can't like your own story!");
        }
 
        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this story!");
        }
 
        this._likes = this._likes.filter(user => user !== username);
 
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id){
        let found = this._comments.find(e => e.id === id);
        if(found === undefined || id === undefined){
            
            let commentObj = {
                id: this._commentIdCounter,
                username,
                content,
                replies: [],
            };
            this._commentIdCounter++;
            this._comments.push(commentObj);
            return `${username} commented on ${this.title}`
        }else if(found != undefined){
         
            let replyObj = {
                id: Number(`${id}.${found.replies.length + 1}`),
                username,
                content,
            }
            found.replies.push(replyObj);
            return `You replied successfully`;
        }
    }

    toString(sortingType){
        if(sortingType === 'desc'){
            this._comments = this._comments.sort((a, b) =>{
             let commentAId = a.id;
             let commentBId = b.id;
             return commentBId - commentAId;
            });
            this._comments.forEach(el => el.replies = el.replies.sort((a, b) => b.id - a.id));
        }

        if(sortingType === 'asc'){
            this._comments = this._comments.sort((a, b) =>{
             let commentAId = a.id;
             let commentBId = b.id;
             return commentAId - commentBId;
            });
            this._comments.forEach(el => el.replies = el.replies.sort((a, b) => a.id - b.id));
        }

        if(sortingType === 'username'){
            this._comments = this._comments.sort((a, b) =>{
                let commentAUser = a.username;
                let commentBUser = b.username;
                return commentAUser.localeCompare(commentBUser);
               });
               this._comments.forEach(el => el.replies = el.replies.sort((a, b) => a.username.localeCompare(b.username)));
        }

        let resultArr = [`Title: ${this.title}`, `Creator: ${this.creator}`, `Likes: ${this._likes.length}`];
        if(this._comments.length == 0){
            resultArr.push(`Comments:`);
        }else {
            resultArr.push(`Comments:`);
            for(let el of this._comments){
                resultArr.push(`-- ${el.id}. ${el.username}: ${el.content}`);
                
                    for(let repl of el.replies){
                        resultArr.push(`--- ${repl.id}. ${repl.username}: ${repl.content}`);
                    }
                
            }
        }
        return resultArr.join('\n');
    }
}


let art = new Story("My Story", "Anny");
art.like("John")
art.likes
// art.dislike("Sally")
art.like("Ivan")
art.like("Steven")
art.likes
art.comment("Anny", "Some Content")
art.comment("Ammy", "New Content", 1)
art.comment("Zane", "Reply", 2)
art.comment("Jessy", "Nice :)")
console.log(art.comment("SAmmy", "Reply@", 2))
console.log(art.toString('asc')); ;


