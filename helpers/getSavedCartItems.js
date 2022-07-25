const getSavedCartItems = (param1) => {
  localStorage.getItem(param1);
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
