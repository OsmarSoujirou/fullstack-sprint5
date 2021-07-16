import React from 'react';
import { render, screen } from '@testing-library/react';
import Menu from './Menu';
import CategoriesContext from '../contexts/CategoriesContext';

//jest.mock('./Menu');
//Menu.mockImplementation(() => <div>Menu</div>);

describe('Componete Menu', () => {
  it('Renderização e Retorno', () => {
    let categories = {
      all: [
        {
          id: 1,
          label: 'Sucesooooo',
          link: '#home',
        },
      ],
    };

    render(
      <CategoriesContext.Provider value={{ categories }}>
        <Menu />
      </CategoriesContext.Provider>,
    );

    expect(screen.getByText('Sucesooooo')).toBeInTheDocument();
  });
});
