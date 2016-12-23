/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const Router = __webpack_require__(1);
	const Inbox = __webpack_require__(2);

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


/***/ },
/* 1 */
/***/ function(module, exports) {

	class Router {
	  constructor(node, routes) {
	    this.node = node;
	    this.routes = routes;
	  }

	  start() {
	    this.render();
	    window.addEventListener("hashchange", (e) => this.render(), false);
	  }

	  render() {
	    this.node.innerHTML = "";
	    if(this.activeRoute()) {
	      let component = this.activeRoute();
	      let newNode = component.render();
	      this.node.appendChild(newNode);
	    }
	  }

	  activeRoute() {
	    let hashString = window.location.hash;
	    let routeName = hashString.slice(1);
	    return this.routes[routeName];
	  }
	}

	module.exports = Router;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	const MessageStore = __webpack_require__(3);

	const Inbox =  {
	  render: function() {
	    let node = document.createElement("ul");
	    node.className = "messages";
	    let messages = MessageStore.getInboxMessages();
	    messages.forEach(msg => {
	      let rendered = this.renderMessage(msg);
	      node.appendChild(rendered);
	    });

	    return node;
	  },

	  renderMessage: function(msg) {
	    let liNode = document.createElement("li");
	    liNode.className = "message";
	    liNode.innerHTML = `<span class="from">${msg.from}</span><span class="subject">${msg.subject}</span><span class="body">${msg.body}</span>`;
	    return liNode;
	  }
	};

	module.exports = Inbox;


/***/ },
/* 3 */
/***/ function(module, exports) {

	let messages = {
	  sent: [
	    {to: "friend@mail.com", subject: "Check this out", body: "It's so cool"},
	    {to: "person@mail.com", subject: "zzz", body: "so booring"}
	  ],
	  inbox: [
	    {from: "grandma@mail.com", subject: "Fwd: Fwd: Fwd: Check this out", body:
	"Stay at home mom discovers cure for leg cramps. Doctors hate her"},
	  {from: "person@mail.com", subject: "Questionnaire", body: "Take this free quiz win $1000 dollars"}
	]
	};

	const MessageStore = {
	  getInboxMessages: function() { return messages.inbox; },
	  getSentMessages: function() { return messages.sent; }
	};

	module.exports = MessageStore;


/***/ }
/******/ ]);