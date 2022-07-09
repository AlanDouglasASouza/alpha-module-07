const app = document.querySelector("#app");

export function brigadeiro(eventHome, eventCupe, eventCandy) {
  app.innerHTML = `
    <section class="container" id="box-container" data-page="brigadeiro">
        <div class="container" id="box-content">
          <div id="box-title">
            <h1>Brigadeiros</h1>
          </div>
          <div class="box" id="box-home"><h2>HOME</h2></div>
          <div class="box" id="box-cupcakes"><h2>CUPCAKES</h2></div>
          <div class="box" id="box-candy"><h2>DOCES</h2></div>
        </div>
    </section>
  `;

  brigService([eventHome, eventCupe, eventCandy]);
}

function brigService(evt) {
  const elements = document.querySelectorAll(".box");

  for (let i = 0; i < elements.length; i++) {
    elements[i].onclick = () => {
      window.dispatchEvent(evt[i]);
    };
  }
  document.title = "Brigadeiros";
}
