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
    <p onclick="newsClick('${news.category_id}')">${news.category_name}</p>
    `
    newsContainer.appendChild(div)


 

   });
}

const newsClick = (category_id) =>{
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
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
    div.classList.add('cardNews')
    div.innerHTML = `
    <div class=" mb-3 p-3" style="max-width: full; baground-color: white;">
    <div class="row g-0">
      <div class="col-md-4 ">
        <img src="${persone.image_url}" class="img-fluid w-100 h-100 rounded-start" alt="...">
      </div>

      <div class="col-md-8 ps-4">
        <div class="card-body">
          <h5 class="card-title mb-3">${persone.title}</h5>
          <p class="card-text"><small>${persone.details.slice(0, 300)}...</small> </p>

          <div class="footer-container d-flex justify-content-between align-items-center text-center">  
          <div class="d-flex justify-content-between align-items-center"> 
          <img src= "${persone.author.img}" style="width: 40px ; height: 40px; border-radius: 20px;" alt="">
           <p class="ms-2 text-center mt-3" >${persone.author.name}</p>
            </div>
             <div >
              <p class="mt-4" > <i class="fa fa-light fa-eye"></i> <span>${persone.total_view}</span></p> 
              </div> 
              <div>
               <p class="mt-4"><i class ="fa fa-solid fa-arrow-right"></i>
               </p>
                </div> 
                </div> 
                </div>
                 </div>
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