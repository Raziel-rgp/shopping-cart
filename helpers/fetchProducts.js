const fetchProducts = async (produtoName) => {
  const linkbrabo = `https://api.mercadolibre.com/sites/MLB/search?q=${produtoName}`;
  const promice = await fetch(linkbrabo);
  const produtos = await promice.json();
  return produtos;
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
