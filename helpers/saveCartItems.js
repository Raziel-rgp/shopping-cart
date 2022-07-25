const saveCartItems = (ItensCar) => {
  localStorage.setItem('itensCarrinho', ItensCar);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
