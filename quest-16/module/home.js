export default function () {
  const app = document.querySelector("#app");

  app.innerHTML = `
    <section id="container">
        <div class="box" id="box-title">
            <h1>CEP</h1>
            <p>Digite um CEP no campo a baixo.</p>
        </div>
        <div class="box" id="box-form">
            <div class="box" id="forms" action="">
            <input
                class="inputs"
                type="text"
                id="cep-input"
                placeholder="00000-000"
            />
            <button id="btn-cons" disabled>Consultar</button>
            </div>
      </div>
    </section>
    `;
}
