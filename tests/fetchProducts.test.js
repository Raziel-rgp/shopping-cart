require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('test se o typeof de  é uma funcao', () => {
    expect(typeof(fetchProducts)).toEqual('function');
  })
});
