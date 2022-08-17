function getArticleGenerator(articles) {
    let articlesArray = Array.from(articles);
    console.log(articlesArray);
    let content = document.getElementById('content');
    
    return function() {
        let article = document.createElement('article');
        let sentence = articles.shift();
        if (!sentence) {
            return;
        }
        article.innerText = sentence;
        content.appendChild(article);
    }
}