require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('test se o typeof de  é uma funcao', () => {
    expect(typeof fetchProducts).toEqual('function');
  });
  it('teste se a funcao é chamada quando passado um valor chamado computador', () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  it('teste se a funcao é chamada quando passado um valor chamado computador o link esta correto', async () => {
    const nameProduct = 'computador';
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${nameProduct}`;
    await fetchProducts(nameProduct);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(url);
    });
  it('Teste se o retorno da função: fetchProduts com argumento: computador retorna um objeto com valores iguais do objeto da função: computadorSearch', async () => {
    const nameProduct = 'computador';
    expect(await fetchProducts(nameProduct)).toEqual(computadorSearch);
  });
  it('Teste se ao não ser passado nenhum valor, é retornado um erro', async () => {
    expect(await fetchProducts()).toEqual('Deu erro familia')
  });
});
