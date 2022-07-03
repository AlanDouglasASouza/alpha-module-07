const app = document.querySelector("#app");

export function home(eventBrig, eventCupe, eventCandy) {
  app.innerHTML = `
    <section class="container" id="box-container" data-page="home">
        <div class="container" id="box-content">
          <div id="box-title">
            <h1>Doceria Alpha</h1>
          </div>
          <div class="box" id="box-brigadeiro"><h2>BRIGADEIROS</h2></div>
          <div class="box" id="box-cupcakes"><h2>CUPCAKES</h2></div>
          <div class="box" id="box-candy"><h2>DOCES</h2></div>
        </div>
    </section>
  `;
  homeService([eventBrig, eventCupe, eventCandy]);
}

function homeService(evt) {
  const elements = document.querySelectorAll(".box");

  for (let i = 0; i < elements.length; i++) {
    elements[i].onclick = () => {
      window.dispatchEvent(evt[i]);
    };
  }
  document.title = "Doceria Alpha";
}
