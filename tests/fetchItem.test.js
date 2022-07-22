require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Teste se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('Teste se a função fetch é chamada quando passado algum parâmetro', () => {
    fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  it('Teste se o endpoint contem o parametro que foi passado para a função', async () => {
    const idParam = 'MLB1615760527';
    const url = `https://api.mercadolibre.com/items/${idParam}`;
    await fetchItem(idParam);
    expect(fetch).toHaveBeenCalledWith(url);
  });
  it('Teste se ao ser passado um param, o valor retornado está certo.', async () => {
    const idParam = 'MLB1615760527';
    expect(await fetchItem(idParam)).toEqual(item);
  });
});
