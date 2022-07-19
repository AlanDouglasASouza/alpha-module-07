export default function weatherService(id) {
    return new Promise(async (resolve, reject) => {
        try {
            const resp = await fetch(`https://apiprevmet3.inmet.gov.br/previsao/${id}`);

            if(!resp.ok) {
                return Promise.reject('Erro ao fazer a requisição');
            }

            const res = await resp.json();            

            const days = [];
            const period = ['manha', 'tarde', 'noite'];
            const response = [];
            const data = res[id];

            for (const day in data) {                
                days.push(day);
            }            

            for (let i = 0; i < 4; i++) {                
                if (i < 2) {
                    for (let inc = 0; inc < period.length; inc++) {
                        const {dia_semana, resumo, icone, temp_max, temp_min} = data[days[i]][period[inc]];
                        response.push({
                            dia_sem: dia_semana,
                            dia: days[i],
                            periodo: period[inc],
                            resumo: resumo,
                            max: temp_max,
                            min: temp_min,
                            icone: icone,
                        })
                    }
                } else {
                    const {dia_semana, resumo, icone, temp_max, temp_min} = data[days[i]];
                    response.push({
                        dia_sem: dia_semana,
                        dia: days[i],
                        periodo: 'Integral',
                        resumo: resumo,
                        max: temp_max,
                        min: temp_min,
                        icone: icone,
                    })
                }                
            }  
                  
            resolve(response);
        }
        catch(err) {
            reject(err);
        }        
    });
}