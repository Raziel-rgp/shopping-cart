const fetchProducts = async (produtoName) => {
  try {
    if (!produtoName) {
      throw new Error('You must provide an url');
    }  
    const linkbrabo = `https://api.mercadolibre.com/sites/MLB/search?q=${produtoName}`;
    const promice = await fetch(linkbrabo);
    const produtos = await promice.json();
    return produtos;
  } catch (err) {
    return 'Deu erro familia';
  }
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
