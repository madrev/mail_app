const Router = require('./router.js');

document.addEventListener("DOMContentLoaded" , (e) => {
  let content = document.querySelector(".content");
  let router = new Router(content);
  router.start();


  let clickObjects = document.querySelectorAll('.sidebar-nav li');
  clickObjects.forEach( clickObj => {
    clickObj.addEventListener("click", e2 => {
      window.location.hash = clickObj.innerText.toLowerCase();
    });
  });
});
