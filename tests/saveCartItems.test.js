const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('teste se ao executar saveCartItems com o argumento <ol><li>Item</li></lo>, o método localStoage.serItem é chamado')
});
