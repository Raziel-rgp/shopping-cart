const saveCartItems = (ItensCar) => {
  localStorage.setItem('carItems', JSON.stringify(ItensCar));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
