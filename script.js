const items = document.querySelector('.items');
  const elemento = document.querySelector('.cart__items');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const products = async () => {
  const busca = await fetchProducts('computador');
  const { results } = busca;
  results.forEach((result) => {
    items.appendChild(createProductItemElement(result));
  });
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartCleaner = async () => {
  while (elemento.firstChild) {
  elemento.removeChild(elemento.firstChild);
}
};

const cartItemCleaner = async () => {
  const no = document.querySelector('.cart__item');
  if (no.parentNode) {
    no.parentNode.removeChild(no);
}
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemCleaner);
  return li;
};
const searchItemById = async (event) => {  
  const itemId = getSkuFromProductItem(event.target.parentNode);
  const produtoInfo = await fetchItem(itemId);
  const cartItens = document.querySelector('.cart__items');
  cartItens.append(createCartItemElement(produtoInfo));
  saveCartItems(produtoInfo);
};
const getItem = async () => {
  const procurador = document.querySelectorAll('.item__add');
  procurador.forEach((item) => item.addEventListener('click', searchItemById));
  const botaoCart = document.querySelector('.empty-cart');
  botaoCart.addEventListener('click', cartCleaner);
};

window.onload = async () => {
  await products();
  await getItem();
};
