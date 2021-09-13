function comments(input) {
    const blog = {};
    const userList=[];
    const articleList=[];
     
    for (let line of input) {
        if (line.includes("user")) {
            let user = line.split(" ")[1];
            userList.push(user);
        } else if (line.includes("posts")) {
            let [user,command]= line.split(" posts on ");
            let [article,titleAndComments] = command.split(": ");
                titleAndComments = titleAndComments.split(", ").join(" - ");
     
            if (userList.includes(user) && articleList.includes(article)) {
                if (!blog.hasOwnProperty(user)) {
                    blog[user]= [];
                } 
                    blog[user].push({ [article] : titleAndComments });
     
            }
        } else if (line.includes("article")) {
            let article = line.split(" ")[1];
            articleList.push(article);
        }
     
    }
    if ((Object.keys(blog).length===1)) {
        Object.keys(blog).forEach(user => {
            blog[user].forEach(art=> { 
                console.log(`Comments on ${Object.keys(art)}`);
                let comment= Object.values(art);
                console.log(`--- From user ${user}: ${comment}`); 
            });
        });
    }
     
    Object.keys(blog).sort ((a,b) => {
        let res=[];
        let obj = {};
        blog[b].forEach (x => {
            res.push(Object.keys(x));
     
        });
        blog[a].forEach (x => {
            res.push(Object.keys(x));
     
        });
     
        res.forEach (el => {
            if (!obj.hasOwnProperty(el)) {
                obj[el]=0;
            }
            obj[el]+=1;
        });
     
       Object.keys(obj).sort((a,b) => {
            return obj[b] - obj[a];  
        }).forEach(art => {
            console.log(`Comments on ${art}`);
            Object.keys(blog).sort ((a,b) => a.localeCompare(b))
            .forEach(user => {
                let comment;
                blog[user].forEach(x=> {
                    comment= x[art]; 
                    if (comment) {
                        console.log(`--- From user ${user}: ${comment}`);
                    }
     
                });
     
            });
     
        });
     
    });
     
    }
    comments([
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