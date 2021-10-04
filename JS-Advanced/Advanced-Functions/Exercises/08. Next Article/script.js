function getArticleGenerator(articles) {
let divContent = document.querySelector('#content');   
    let arr = articles
    
    return () => {
       if(arr.length != 0){
            let line  = arr.shift();
            let article = document.createElement('article');
            article.textContent = line
            divContent.appendChild(article)
        }
    }
}
