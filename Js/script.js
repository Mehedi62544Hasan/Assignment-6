const url = 'https://openapi.programming-hero.com/api/news/categories'
fetch(url)
.then(res => res.json())
.then(data => nowsHeadline(data.data.news_category))

nowsHeadline = (newsList) =>{
    // console.log(newsList)
    const newsContainer = document.getElementById('news-container');
   newsList.forEach(news => {
    // console.log(news)
    const div = document.createElement('div');
    
    div.innerHTML = `
    <p onclick="newsClick(${news.category_id})">${news.category_name}</p>
    `
    newsContainer.appendChild(div)


 

   });
}

const newsClick = (newsId) =>{
    const url = 'https://openapi.programming-hero.com/api/news/category/01'
    fetch(url)
    .then(res => res.json())
    .then(data => authorId(data.data))

    const authorId = (persones) =>{
        // console.log(persones)
    const personeContainer = document.getElementById('persone-container');
    personeContainer.innerText = '';
    persones.forEach(persone =>{
        console.log(persone)
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="card mb-3" style="max-width: full;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="..." class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
    `
personeContainer.appendChild(div)


    })
        


    }
}
 













// const url1 = 'https://openapi.programming-hero.com/api/news/category/01'
// fetch(url1)
// .then(res => res.json())
// .then(data => console.log(data))