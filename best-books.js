// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists/'
//const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const API_KEY = 'CzgFs866JsEt87jzvQ5K7IgbR7TrLAqR';


const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');
const bookEl = document.getElementById('books-container');

formEl.addEventListener('submit', function (e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

  console.log('the year is ', year);

  // Fetch bestselling books for date and add top 5 to page
  const url = `${BASE_URL}${year}-${month}-${date}/hardcover-fiction.json?api-key=${API_KEY}`;
  console.log('the url is as follows');
  console.log(url);
  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (responseJson) {
      console.log(responseJson);

      let book = responseJson.results.books[0].title;
      let books = responseJson.results.books;
      console.log(books);
      console.log(book);

      //const mainHeadline = article.headline.main;
      //document.getElementById('article-title').innerText = mainHeadline;

     // if (article.multimedia.length > 0) {
      //  const imgUrl = `https://www.nytimes.com/${article.multimedia[0].url}`;
       // document.getElementById('article-img').src = imgUrl;
     // }
     return books;
    })
    .then(function(books) {
      //console.log('did we get here', book);
      bookEl.innerHTML 
        = `<div><h3> ${books[0].title} </h3>  <h5> ${books[0].author} </h5> <p> ${books[0].description} </p> </div>
        <div><h3> ${books[1].title} </h3> <h5> ${books[1].author} </h5> <p> ${books[1].description} </p> </div>
        <div><h3> ${books[2].title} </h3><h5> ${books[2].author} </h5> <p> ${books[2].description} </p></div>
        <div><h3> ${books[3].title} </h3>  <h5> ${books[3].author} </h5> <p> ${books[3].description} </p></div>
        <div><h3> ${books[4].title} </h3> <h5> ${books[4].author} </h5> <p> ${books[4].description} </p></div>`
    });
});


