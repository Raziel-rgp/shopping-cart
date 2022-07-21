require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('test se o typeof de  é uma funcao', () => {
    expect(typeof fetchProducts).toEqual('function');
  });
  it('teste se a funcao é chamada quando passado um valor chamado computador', () => {
    fetchProducts('computador')
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  it('teste se a funcao é chamada quando passado um valor chamado computador o link esta correto', async () => {
    const nameProduct = 'computador'
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${nameProduct}`
    await fetchProducts(nameProduct)
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(url);
    });
  
});
