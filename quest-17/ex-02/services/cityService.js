export default function cityService(id) {
    return new Promise(async (resolve, reject) => {        
        try {
            const data = [];
            const resp = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`);
            if(!resp.ok) {
                return Promise.reject("Erro interno na requisição");
            }
            const res = await resp.json();            

            res.forEach(element => {
                data.push({
                    id: element.id,
                    nome: element.nome,
                });
            });
            
            resolve(data);

        }
        catch(err) {
            reject(err);
        }
    });   
}