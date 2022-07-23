const fetchProducts = async (produtoName) => {
  try {
    const linkbrabo = `https://api.mercadolibre.com/sites/MLB/search?q=${produtoName}`;
    const promice = await fetch(linkbrabo);
    const produtos = await promice.json();
    return produtos;
  } catch (err) {
    return 'Deu erro familia';
  }
};
console.log(fetchProducts());
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
