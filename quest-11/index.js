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
const titleNameTab = document.querySelector("#title-name-tab");
const titlePriceTab = document.querySelector("#title-price-tab");
const btnSearch = document.querySelector("#btn-search");
const iptSearch = document.querySelector("#ipt-search");
const responseSearch = document.querySelector("#response-search");
let count = 0;
let active = true;
let products = [];
let searchObj = [];

btnCreate.addEventListener("click", (e) => {
  e.preventDefault();

  if (!validate()) {
    return;
  }

  createProduct();
  clear();
});

btnList.addEventListener("click", (e) => {
  e.preventDefault();
  listProduct(products);
});

btnBack.onclick = () => {
  divForm.style.display = "flex";
  divList.style.display = "none";
  btnCreate.style.display = "block";
  btnBack.style.display = "none";
  response.textContent = "";
  title.textContent = "Cadastrar Produtos";
  titleDesc.style.display = "block";
  tableList.style.display = "block";
  responseSearch.style.display = "none";

  if (searchObj.length > 0) {
    clearTable(searchObj);
    return;
  }
  clearTable(products);
};

btnModal.addEventListener("click", (e) => {
  e.preventDefault();

  modal.style.display = "none";
  container.style.display = "flex";
});

btnModalEdit.addEventListener("click", (e) => {
  e.preventDefault();
  const product = findOne(parseInt(resultId.textContent));

  modal.style.display = "none";
  container.style.display = "flex";

  product.nome = resultName.value.toUpperCase();
  product.valor = parseFloat(resultPrice.value.substring(2));
  product.descricao = resultDesc.value.toUpperCase();
  clearTable(products);
  listProduct(products);
});

titleNameTab.addEventListener("click", (e) => {
  e.preventDefault();
  clearTable(products);

  products = orderByName(products);
  listProduct(products);
});

titlePriceTab.addEventListener("click", (e) => {
  e.preventDefault();

  clearTable(products);
  products = orderByPrice(products);
  listProduct(products);
});

btnSearch.addEventListener("click", (e) => {
  e.preventDefault();
  const compare = iptSearch.value.toUpperCase();
  tableList.style.display = "block";

  if (!compare) {
    tableList.style.display = "block";
    responseSearch.style.display = "none";
    if (searchObj.length > 0) {
      clearTable(searchObj);
    }
    searchObj = [];
    listProduct(products);
    return;
  }

  if (typeof searchObj != "string") {
    searchObj.length > 0 ? clearTable(searchObj) : clearTable(products);
  }

  try {
    if (typeof search(products, compare) === "string")
      throw search(products, compare);
  } catch (e) {
    alert("Entrou no err");
    tableList.style.display = "none";
    responseSearch.style.display = "block";
    responseSearch.textContent = e;
    return;
  }

  responseSearch.style.display = "block";
  responseSearch.textContent = `Foram encontrado(s) ${searchObj.length} produto(s)`;

  listProduct(search(products, compare));
});

// Fim dos listeners, inicios das funções
const search = (obj, compare) => {
  const searchResult = obj.filter((value) => {
    return (
      value.nome.indexOf(compare) != -1 ||
      value.descricao.indexOf(compare) != -1
    );
  });
  try {
    if (searchResult.length == 0)
      throw `Não foram encontrados produtos conforme chave de pesquisa!`;
  } catch (e) {
    searchObj = e;
    return e;
  }

  searchObj = searchResult;
  return searchResult;
};

const orderByName = (names) => {
  let orderNames = [];
  let order = names
    .map((object) => {
      return object.nome;
    })
    .sort();

  for (i = 0; i < order.length; i++) {
    names.forEach((element) => {
      if (element.nome === order[i]) {
        orderNames.push(element);
      }
    });
  }
  return orderNames;
};

const orderByPrice = (prices) => {
  let orderPrices = [];
  let order = prices
    .map((object) => {
      return object.valor;
    })
    .sort(function (val1, val2) {
      return val1 - val2;
    });

  for (i = 0; i < order.length; i++) {
    prices.forEach((element) => {
      if (element.valor === order[i]) {
        orderPrices.push(element);
      }
    });
  }
  return orderPrices;
};

const validate = () => {
  try {
    if (!productName.value || !productPrice.value || !productDesc.value) {
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

const clearTable = (prod) => {
  active = true;

  for (i = 0; i < prod.length; i++) {
    deleteProduct(prod[i].id);
  }
};

const ident = () => {
  count++;
  return count;
};

const createProduct = () => {
  products.push({
    id: ident(),
    nome: productName.value.toUpperCase(),
    descricao: productDesc.value.toUpperCase(),
    valor: productPrice.value,
    incluidoEm: Date.now(),
  });
  response.textContent = `Produto '${productName.value}' incluído com sucesso!`;
};

const listProduct = (prod) => {
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
    for (i = 0; i < prod.length; i++) {
      createTable(prod[i], "list-black");
    }
    active = false;
  }
};

const findOne = (id) => {
  for (i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      return products[i];
    }
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

  resultName.disabled = true;
  resultPrice.disabled = true;
  resultDesc.disabled = true;
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
  let del;
  products.forEach((element) => {
    if (element.id == id) {
      del = products.indexOf(element);
    }
    products.splice(del, 1);
  });
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
  });
};

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}
