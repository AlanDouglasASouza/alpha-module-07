export default function result() {
  const divResult = document.querySelector("#result");
  divResult.innerHTML = "";

  divResult.innerHTML = `
    <table>
            <tr>
              <td class="title-tab" id="tab-day">Dia</td>
              <td class="title-tab">Cotação Atual</td>
              <td class="title-tab">Valor Maximo</td>
              <td class="title-tab">Valor Minimo</td>
              <td class="title-tab">Fechamento</td>
            </tr>            
          </table>
    `;
}
