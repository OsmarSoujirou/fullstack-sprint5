import { fireEvent, render, screen } from '@testing-library/react';
import ProductView from './Product';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Componete Product', () => {
	it('Renderização e Retorno', () => {
		const products = [
			{
				sku: 1,
				image: 'assets/c1.webp',
				name: 'Jaqueta Puffer Juvenil Com Capuz Super Mario Branco Tam 10 a 18',
				price: '199,90',
			},
		];

		const setMessage = (f) => {
			f;
		};
		render(
			<MemoryRouter initialEntries={['/product/1']}>
				<Route path="/product/:id">
					<ProductView products={products} msg={setMessage} />
				</Route>
			</MemoryRouter>
		);
		const Element = screen.getByText(/Jaqueta/i);
		expect(Element).toBeInTheDocument();

		fireEvent.click(screen.getByText('ADICIONAR Á SACOLA'));
		fireEvent.click(screen.getByText('10'));
		fireEvent.click(screen.getByText('ADICIONAR Á SACOLA'));
	});
});
