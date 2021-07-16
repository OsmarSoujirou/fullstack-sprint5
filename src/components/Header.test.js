import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import Menu from './Menu';
import FilterContext from '../contexts/FilterContext';

jest.mock('./Menu');

describe('Componete Header', () => {
  it('Teste', () => {
    Menu.mockImplementation(() => <div>Menu</div>);
    let filter = null;
    const setFilter = (f) => (filter = f);

    render(
      <FilterContext.Provider value={{ filter, setFilter }}>
        <Header />
      </FilterContext.Provider>,
    );
  });
});
