import homeSelect from "../services/homeSelect.js";

export default function home() {
  const app = document.querySelector("#app");

  const res = (app.innerHTML = `
    <section id="container">      
      <div class="box" id="box-calc">
        <div class="box" id="box-title">
          <h1>Cotação de Moedas</h1>
          <p>
            Escolha uma moeda e o periodo desejado para receber o fechamento de sua cotação!
          </p>
        </div>
         <div class="box" id="inputs-dates">
            <div class="label-dates">
              <label for="initial-date">Data inicial:</label>
              <input class="dates" id="initial-date" type="date">
            </div>
            
            <div class="label-dates">
              <label for="final-date">Data final:</label>
              <input class="dates" id="final-date" type="date">
            </div>            
          </div>
        <div id="form-calc">                  
          <select name="operation" id="select-operation">
            <option value="" disabled selected>Escolha a cotação</option>            
          </select></br>
          <button id="btn-ex">Exibir</button>
        </div>
        <div id="result"></div>
      </div>
    </section>
    `);
  homeSelect();

  return res;
}
