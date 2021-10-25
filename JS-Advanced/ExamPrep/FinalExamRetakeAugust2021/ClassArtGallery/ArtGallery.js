class ArtGallery{
    constructor(creator){
        this.creator = creator;
        this.possibleArticles = {"picture":200, "photo":50, "item":250};
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, qntity){
        qntity = Number(qntity);
        articleModel = articleModel.toLowerCase();
        if(this.possibleArticles[articleModel] == undefined){
            throw new Error(`This article model is not included in this gallery!`);
        }else if (this.listOfArticles.some(e => e.articleName == articleName && e.articleModel == articleModel)){
            let foundEl = this.listOfArticles.find(e => e.articleModel === articleModel && e.articleName == articleName)
            if(foundEl){
               foundEl.qntity += qntity;
            }
        }else {
            this.listOfArticles.push({articleModel,
                 articleName, 
                 qntity})
        }
        return `Successfully added article ${articleName} with a new quantity- ${qntity}.`
    }

    inviteGuest(guestName, personality){
        if(this.guests.some(g => g.guestName == guestName)){
            throw new Error(`${guestName} has already been invited.`);
        }else {
            let guestObj = {
                guestName,
                points: 0,
                purchaseArticle: 0,
            }
            if(personality === 'Vip'){
                guestObj.points = 500;
            }else if(personality === 'Middle'){
                guestObj.points = 250;
            }else {
                guestObj.points = 50;
            }
            this.guests.push(guestObj);
            return `You have successfully invited ${guestName}!`
        }
    };

    buyArticle(articleModel, articleName, guestName){
        articleModel = articleModel.toLowerCase();
        let foundArticleMatch = this.listOfArticles.find(e => e.articleModel === articleModel && e.articleName == articleName);
        if(foundArticleMatch === undefined){
            throw new Error(`This article is not found.`);
        }
        if(foundArticleMatch.qntity === 0){
            return `The ${articleName} is not available.`;
        }
        let foundGuest = this.guests.find(e=> e.guestName == guestName)
        if(foundGuest === undefined){
            return `This guest is not invited.`;
        }else {
            if(foundGuest.points >= this.possibleArticles[articleModel]){
                foundGuest.points -= this.possibleArticles[articleModel];
                foundGuest.purchaseArticle += 1;
                foundArticleMatch.qntity -= 1;
                return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
            }else {
                return `You need to more points to purchase the article.`
            }
        }

    }

    showGalleryInfo(criteria){
        if(criteria === 'article'){
            let resultArr = [`Articles information:`];
            for(let key in this.listOfArticles){
                resultArr.push(`${this.listOfArticles[key].articleModel} - ${this.listOfArticles[key].articleName} - ${this.listOfArticles[key].qntity}`)
            }
            return resultArr.join('\n');
        }else if(criteria === 'guest'){
            let resultArr = [`Guests information:`];
            for(let key in this.guests){
                resultArr.push(`${this.guests[key].guestName} - ${this.guests[key].purchaseArticle}`)
            }
            return resultArr.join('\n');
        }
    }
}


const artGallery = new ArtGallery('Curtis Mayfield'); 
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('picture', 'Mona Liza', 1));
console.log(artGallery.inviteGuest('John', 'Vip'));
console.log(artGallery.inviteGuest('Peter', 'Middle'));
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));


