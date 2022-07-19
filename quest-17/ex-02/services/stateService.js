export default function selectUf() {
    return new Promise(async (resolve, reject) => {
      try {
        const resp = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');

        if (!resp.ok) {
          return Promise.reject('Erro interno na requisição' + resp);
        }
                
        const res = await resp.json()
        resolve(res);
      }
      catch(err) {
        reject(err);
      }
    });
  }