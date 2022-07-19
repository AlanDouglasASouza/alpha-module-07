export default function cityService(id) {
    return new Promise((resolve, reject) => {        

        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`)
        .then((resp) => {
            if(resp.ok) {
                return resp.json()
            }
            Promise.reject("Erro interno na requisição");
        })
        .then((res) => {            
            const data = [];

            res.forEach(element => {
                data.push({
                    id: element.id,
                    nome: element.nome,
                });
            });
            
            resolve(data);          
        })
        .catch((err) => {
            reject(err);
        });            
    });   
}