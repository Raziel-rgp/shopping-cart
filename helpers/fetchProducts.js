const fetchProducts = async (produtoName) => {
  const linkbrabo = `https://api.mercadolibre.com/sites/MLB/search?q=${produtoName}`;
  const fetch2 = await fetch(linkbrabo);
  const slaOq = await fetch2.json();
  return slaOq;
};
fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
