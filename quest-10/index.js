const productName = document.querySelector("#ipt-name");
const productPrice = document.querySelector("#ipt-price");
const productDesc = document.querySelector("#text-description");
const response = document.querySelector("#response");
const btnCreate = document.querySelector("#btn-create");
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

let count = 0;
let active = true;

const products = [];

btnCreate.addEventListener("click", (e) => {
  e.preventDefault();
  if (!validate()) {
    return;
  }
  createProduct();

  clear();

  console.log(products);
});

btnModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "none";
  container.style.display = "flex";
});

const validate = () => {
  try {
    if (!productName.value || !productPrice.value || !productDesc.value) {
      throw "Por favor, preencha todos os campos antes de cadastrar!";
    }
  } catch (err) {
    response.textContent = err;
    return false;
  }
  return true;
};

const clear = () => {
  productName.value = "";
  productDesc.value = "";
  productPrice.value = "";
  response.textContent = "";
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
};

const listProduct = () => {
  let i = 0;

  divForm.style.display = "none";
  divList.style.display = "flex";

  if (active) {
    while (i < products.length) {
      const classLine = i % 2 === 0 ? "list-black" : "list-white";

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
  resultPrice.value = product.valor;
  resultDate.textContent = new Date(product.incluidoEm).toLocaleString();
};

const editProduct = (id) => {
  const product = findOne(id);
  const tdName = document.querySelector(`#name-${id}`);
  const tdPrice = document.querySelector(`#price-${id}`);

  print(id);

  resultName.disabled = false;
  resultPrice.disabled = false;
  resultDesc.disabled = false;

  product.nome = resultName.value;
  product.valor = resultPrice.value;
  product.descricao = resultDesc.value;

  tdName.textContent = resultName.value;
  tdPrice.textContent = resultPrice.value;
};

const deleteProduct = (id) => {
  const line = document.querySelector(`#line-${id}`);
  line.style.display = "none";
};

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
  name.id = `name-${productInf.id}`;
  name.className = "table-product";
  name.textContent = productInf.nome;

  name.addEventListener("click", (e) => {
    e.preventDefault();
    print(productInf.id);
  });

  price.id = `price-${productInf.id}`;
  price.textContent = productInf.valor;

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
  });
};

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

btnList.addEventListener("click", listProduct);
