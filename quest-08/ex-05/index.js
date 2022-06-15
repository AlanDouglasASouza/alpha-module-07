// Nome de propiedades com espaços
const myObject = {};
myObject["Um atributo com espaços"] = 1;
const { "Um atributo com espaços": atributoEspaco } = myObject;

//Usando colchetes
console.log(myObject["Um atributo com espaços"]);

//Retorno usando desestruturação de objeto
console.log(atributoEspaco);
