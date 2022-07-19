import weatherService from "../services/weatherService.js";

export default function weatherForecast() {
    const divRes = document.querySelector('#result');
    const selCity = document.querySelector('#select-citys');
    
    divRes.innerHTML = `
        <table>
            <tr>
                <td class="title-tab">Data</td>
                <td class="title-tab">Dia</td>
                <td class="title-tab">Período</td>
                <td class="title-tab">Resumo</td>
                <td class="title-tab">Clima</td>
                <td class="title-tab">Máxima</td>
                <td class="title-tab">Mínima</td>
            </tr>            
        </table>
    `;
    
    weatherService(selCity.value)
    .then(data => {
        for (const item of data) {            
            const periods = item.periodo == 'manha' ? 'Manhã' : item.periodo == 'tarde' ? 'Tarde' : item.periodo == 'noite' ? 'Noite' : 'Integral';
           
            document.querySelector('table').innerHTML += `
            <tr>
                <td class="content-tab">${item.dia}</td>
                <td class="content-tab">${item.dia_sem}</td>                               
                <td class="content-tab">${periods}</td>
                <td class="content-tab">${item.resumo}</td>
                <td class="content-tab"><img src="${item.icone}" /></td>
                <td class="content-tab">${item.max}°C</td>
                <td class="content-tab">${item.min}°C</td>                
            </tr>
            `
        }
    })
    .catch((err) => {
        divRes.innerHTML = `[Erro] Erro na requisição: ${err}`;
        return Promise.reject(err);
    });
}
