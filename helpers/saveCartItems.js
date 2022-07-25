const saveCartItems = (ItensCar) => {
  const setItem = localStorage.setItem('itensCarrinho', JSON.stringify(ItensCar));
  return setItem;
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
