const app = document.querySelector("#app");

export function candy(eventHome, eventBrig, eventCupcakes) {
  app.innerHTML = `
    <section class="container" id="box-container" data-page="candy">
        <div class="container" id="box-content">
          <div id="box-title">
            <h1>Doces</h1>
          </div>
          <div class="box" id="box-home"><h2>HOME</h2></div>
          <div class="box" id="box-brigadeiro"><h2>BRIGADEIROS</h2></div>
          <div class="box" id="box-cupcakes"><h2>CUPCAKES</h2></div>
        </div>
    </section>
  `;

  cupecakeService([eventHome, eventBrig, eventCupcakes]);
}

function cupecakeService(evt) {
  const elements = document.querySelectorAll(".box");

  for (let i = 0; i < elements.length; i++) {
    elements[i].onclick = () => {
      window.dispatchEvent(evt[i]);
    };
  }
   document.title = "Doces";
}
