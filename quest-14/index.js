import { brigadeiro } from "./modules/brigadeiro.js";
import { candy } from "./modules/candy.js";
import { cupcake } from "./modules/cupcake.js";
import { home } from "./modules/home.js";

const routes = {
  "/": function () {
    home(events("/brigadeiros"), events("/cupcakes"), events("/doces"));
  },
  "/brigadeiros": function () {
    brigadeiro(events("/"), events("/cupcakes"), events("/doces"));
  },
  "/cupcakes": function () {
    cupcake(events("/"), events("/brigadeiros"), events("/doces"));
  },
  "/doces": function () {
    candy(events("/"), events("/brigadeiros"), events("/cupcakes"));
  },
};

function events(prop) {
  return new CustomEvent("onstatechange", {
    detail: {
      name: prop,
    },
  });
}

history.pushState({}, "", "/");

function router() {
  const adress = window.location.href.substring(8);
  const url = adress.substring(adress.indexOf("/"));
  const route = testUrlRoute(url);

  route();
}

function testUrlRoute(route) {
  try {
    return routes[route];
  } catch (e) {
    throw "Not Fund " + e;
  }
}

window.addEventListener("onstatechange", (e) => {
  history.pushState({}, "", e.detail.name);
  router();
});

window.addEventListener("load", router);
//window.addEventListener("hashchange", router);
