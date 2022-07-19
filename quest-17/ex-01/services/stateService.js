export default function selectUf() {
    return new Promise((resolve, reject) => {
      fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
    .then((resp) => {
      if (resp.ok) {
        return resp.json()
      }
      Promise.reject('Erro interno na requisição' + resp)
    })
    .then((res) => {    
      resolve(res);
    })
    .catch((err) => {
      reject(err);
    });
    });  
  }