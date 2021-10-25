function solve(){
class Post{
    constructor(title, content){
        this.title = title;
        this.content = content;
    }
    toString(){
        return `Post: ${this.title}\nContent: ${this.content}`;
    }
}
class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes, ){
        super(title, content);
        this.likes = likes;
        this.dislikes = dislikes;
        this.comments = [];
    }
    addComment(str){
        this.comments.push(str);
    }

    toString(){
        if(this.comments.length <= 0){
        return `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}`;
        }else {
            let result = `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}\nComments:`;
            for(let el of this.comments){
                result += `\n * ${el}`
            }
            return result.trim();
        }
    }

}

class BlogPost extends Post{
    constructor(title, content, views){
        super(title, content);
        this.views = views;
    }
    view(){
        this.views += 1
        return this;
    }
    toString(){
      return  super.toString() + `\nViews: ${this.views}`;
    }
}


return {
    Post,
    SocialMediaPost,
    BlogPost,
}
}

const classes = solve();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);



console.log(scm.toString());

let blgp = new classes.BlogPost('test', 'test2', 0);
console.log(blgp.toString());


