import { render, screen } from '@testing-library/react';
import Breadcrumbs from './Breadcrumbs.tsx';
import { CategoriesContext } from '../../../contexts/CategoriesContext';

describe('Componete Breadcrumbs', () => {
  it('Renderização e Retorno', () => {
    const categories = {
      current: [
        {
          id: 1,
          link: '#home',
          name: '666',
        },
        {
          id: 1,
          link: '',
          name: 'Home',
        },
      ],
    };

    render(
      <CategoriesContext.Provider value={{ categories }}>
        <Breadcrumbs />
      </CategoriesContext.Provider>,
    );
    const Element = screen.getByText(/666/i);
    expect(Element).toBeInTheDocument();
  });
});
