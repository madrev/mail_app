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
