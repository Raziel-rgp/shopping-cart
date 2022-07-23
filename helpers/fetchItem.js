const fetchItem = async (itemID) => {
  try {
    const linkBao = `https://api.mercadolibre.com/items/${itemID}`;
    const prometaMe = await fetch(linkBao);
    const itens = await prometaMe.json();
    return itens;
  } catch (err) {
    return 'Devo ter feito algo errado...';
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
