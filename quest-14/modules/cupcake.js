const app = document.querySelector("#app");

export function cupcake(eventHome, eventBrig, eventCandy) {
  app.innerHTML = `
    <section class="container" id="box-container" data-page="cupcakes">
        <div class="container" id="box-content">
          <div id="box-title">
            <h1>Cupcakes</h1>
          </div>
          <div class="box" id="box-home"><h2>HOME</h2></div>
          <div class="box" id="box-brigadeiro"><h2>BRIGADEIROS</h2></div>
          <div class="box" id="box-candy"><h2>DOCES</h2></div>
        </div>
    </section>
  `;

  cupecakeService([eventHome, eventBrig, eventCandy]);
}

function cupecakeService(evt) {
  const elements = document.querySelectorAll(".box");

  for (let i = 0; i < elements.length; i++) {
    elements[i].onclick = () => {
      window.dispatchEvent(evt[i]);
    };
  }
   document.title = "Cupcakes";
}
