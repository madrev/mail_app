const Router = require('./router.js');
const Inbox = require('./inbox.js');

const routes = {
  inbox: Inbox
};

document.addEventListener("DOMContentLoaded" , (e) => {
  let content = document.querySelector(".content");
  let router = new Router(content, routes);
  router.start();

  let clickObjects = document.querySelectorAll('.sidebar-nav li');
  clickObjects.forEach( clickObj => {
    clickObj.addEventListener("click", e2 => {
      window.location.hash = clickObj.innerText.toLowerCase();
      console.log("Added listener");
    });
  });
});
