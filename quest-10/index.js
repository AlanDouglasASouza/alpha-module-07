const title = document.querySelector("h1");
const titleDesc = document.querySelector("p");
const productName = document.querySelector("#ipt-name");
const productPrice = document.querySelector("#ipt-price");
const productDesc = document.querySelector("#text-description");
const response = document.querySelector("#response");
const btnCreate = document.querySelector("#btn-create");
const btnBack = document.querySelector("#btn-create-back");
const btnList = document.querySelector("#btn-list");
const divForm = document.querySelector("#box-form");
const divList = document.querySelector("#product-list");
const tableList = document.querySelector("#table-list");
const resultId = document.querySelector("#modal-id");
const resultName = document.querySelector("#result-name");
const resultPrice = document.querySelector("#result-price");
const resultDate = document.querySelector("#result-date");
const resultDesc = document.querySelector("#result-desc");
const divEdit = document.querySelector("#edit");
const modal = document.querySelector("#modal");
const container = document.querySelector("#container");
const btnModal = document.querySelector("#btn-modal");
const btnModalEdit = document.querySelector("#btn-modal-edit");
let count = 0;
let active = true;
let products = [];

btnCreate.addEventListener("click", (e) => {
  e.preventDefault();
  if (!validate()) {
    return;
  }
  createProduct();
  clear();

  console.log(products);
});

btnBack.onclick = () => {
  let i = 0;

  active = true;
  divForm.style.display = "flex";
  divList.style.display = "none";
  btnCreate.style.display = "block";
  btnBack.style.display = "none";
  response.textContent = "";
  title.textContent = "Cadastrar Produtos";
  titleDesc.style.display = "block";

  while (i < products.length) {
    deleteProduct(products[i].id);
    i++;
  }
};

btnModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "none";
  container.style.display = "flex";
});

btnModalEdit.addEventListener("click", (e) => {
  let i = 0;
  e.preventDefault();

  const product = findOne(parseInt(resultId.textContent));

  modal.style.display = "none";
  container.style.display = "flex";

  product.nome = resultName.value;
  /**
   * Hum... esse substring(2) pode ser quebrado facilmente pelo usuário.
   * 
   * Sugestão: exibir o símbolo da moeda ("R$") numa span separada do input,
   * e usar CSS pra fazer parecer que é parte do input (i.e. manter a
   * aparência atual)
   */
  product.valor = parseFloat(resultPrice.value.substring(2));
  product.descricao = resultDesc.value;

  while (i < products.length) {
    deleteProduct(products[i].id);
    i++;
  }
  listProduct();
});

/**
 * A validação está parcial. Alguns "casos omissos":
 * 
 * Caso 1: usuário digita " " no nome e descrição: o código aceita...
 * Solução possível: productName.value.trim()
 * 
 * Caso 2: valor 0 ou negativa: código aceita
 * Solução possível: if (parseFloat(productPrice.value) <= 0) return false;
 * 
 */
const validate = () => {
  try {
    if (!productName.value || !productPrice.value || !productDesc.value) {
      /**
       * Até onde entendo, não é boa prática dar throw numa string.
       * 
       * O esperado é que você dê throw num objeto do tipo Error, ou seja:
       * 
       * throw new Error("Preencha todos os campos antes de cadastrar!");
       */
      throw "Preencha todos os campos antes de cadastrar!";
    }
  } catch (err) {
    response.textContent = `Falha no cadastro do produto: ${err}`;
    return false;
  }
  return true;
};

const clear = () => {
  productName.value = "";
  productDesc.value = "";
  productPrice.value = "";
  productName.focus();
};

const ident = () => {
  count++;
  return count;
};

const createProduct = () => {
  products.push({
    id: ident(),
    nome: productName.value,
    descricao: productDesc.value,
    valor: productPrice.value,
    incluidoEm: Date.now(),
  });
  response.textContent = `Produto '${productName.value.toUpperCase()}' incluído com sucesso!`;
};

const listProduct = () => {
  let i = 0;

  try {
    if (products.length == 0) throw "Ops, nenhum produto foi cadastrado!  :(";
  } catch (e) {
    return (response.textContent = e);
  }

  title.textContent = "Lista de Produtos";
  titleDesc.style.display = "none";
  divForm.style.display = "none";
  divList.style.display = "flex";
  btnCreate.style.display = "none";
  btnBack.style.display = "block";

  if (active) {
    while (i < products.length) {
      const classLine = "list-black";

      createTable(products[i], classLine);
      i++;
    }
    active = false;
  }
};

const findOne = (id) => {
  let i = 0;

  while (i < products.length) {
    if (products[i].id === id) {
      return products[i];
    }
    i++;
  }
  throw "Id não encontrado";
};

const print = (id) => {
  const product = findOne(id);

  container.style.display = "none";
  modal.style.display = "flex";

  resultId.textContent = product.id;
  resultName.value = product.nome;
  resultDesc.value = product.descricao;
  resultPrice.value = `R$ ${parseFloat(product.valor).toFixed(2)}`;
  resultDate.textContent = new Date(product.incluidoEm).toLocaleString();
};

const editProduct = (id) => {
  print(id);
  active = true;

  btnModal.style.display = "none";
  btnModalEdit.style.display = "block";

  resultName.disabled = false;
  resultPrice.disabled = false;
  resultDesc.disabled = false;
};

const deleteProduct = (id) => {
  const line = document.querySelector(`#line-${id}`);
  line.outerHTML = "";
};

const remove = (id) => {
  let i = 0;
  const newsProducts = [];

  while (i < products.length) {
    if (products[i].id != id) {
      newsProducts.push(products[i]);
    }
    i++;
  }
  products = newsProducts;
};

/**
 * O parâmetro "classLine" parece ter sido uma generalidade desnecessária.
 * Ou seja, o código foi escrito para aceitar qualquer "classLine",
 * mas na prática a função createTable só é invocada em um lugar, mais 
 * ou menos assim:
 * createTable(products[i], "list-black");
 * 
 */
const createTable = (productInf, classLine) => {
  const line = createNode("tr");
  const name = createNode("td");
  const price = createNode("td");
  const edit = createNode("td");
  const delet = createNode("td");
  const iconEdit = createNode("span");
  const iconDelete = createNode("span");

  append(tableList, line);
  append(line, name);
  append(line, price);
  append(line, edit);
  append(line, delet);
  append(edit, iconEdit);
  append(delet, iconDelete);

  line.className = classLine;
  line.id = `line-${productInf.id}`;
  name.style = "cursor: pointer";
  name.className = "table-product";
  name.textContent = `#0${productInf.id}  ${productInf.nome}`;

  name.addEventListener("click", (e) => {
    e.preventDefault();
    print(productInf.id);
  });

  price.textContent = `R$ ${parseFloat(productInf.valor).toFixed(2)}`;

  iconEdit.className = "material-icons";
  iconDelete.className = "material-icons";
  iconEdit.textContent = "edit";
  iconEdit.addEventListener("click", (e) => {
    e.preventDefault();

    editProduct(productInf.id);
  });

  iconDelete.textContent = "delete";
  iconDelete.addEventListener("click", (e) => {
    e.preventDefault();

    deleteProduct(productInf.id);
    remove(productInf.id);
    console.log(`esta assim o remove: ${products}`);
  });
};

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

btnList.addEventListener("click", listProduct);
