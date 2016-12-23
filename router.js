class Router {
  constructor(node) {
    this.node = node;
  }

  start() {
    this.render();
    window.addEventListener("hashchange", (e) => this.render(), false);
  }

  render() {
    this.node.innerHTML = "";
    let currentRoute = this.activeRoute();
    let newP = document.createElement('p');
    newP.innerHTML = currentRoute;
    this.node.appendChild(newP);
  }

  activeRoute() {
    let hashString = window.location.hash;
    return hashString.slice(1);
  }
}

module.exports = Router;
