import { render } from '@testing-library/react';
import ProductsPage from './ProductsPage';
import ProductView from './components/Product';
import Breadcrumbs from './components/Breadcrumbs.tsx';
import { FilterContext } from '../../contexts/FilterContext';
import LoadingContext from '../../contexts/LoadingContext';
import MessageContext from '../../contexts/MessageContext';
import ProductsService from '../../services/ProductsService';
import { MemoryRouter } from 'react-router-dom';
import * as React from 'react';

jest.mock('./components/Product');
jest.mock('./components/Breadcrumbs');
jest.mock('../../services/ProductsService');

describe('ProductsPage', () => {
	it('Rendeziração & Retorno', async () => {
		ProductView.mockImplementation(() => <div>Product</div>);
		Breadcrumbs.mockImplementation(() => <div>Breadcrumbs</div>);
		ProductsService.get.mockResolvedValue({
			products: [
				{
					sku: 666,
					image: 'assets/c12.webp',
					name: 'Camiseta 666',
					price: '666',
				},
				{
					sku: 666,
					image: 'assets/c12.webp',
					name: 'Camiseta 666',
					price: '666',
				},
			],
			filters: [
				{
					id: '666',
					label: '666',
				},
			],
		});

		const filter = 'Camiseta';
		const addRequest = jest.fn(() => {});
		const removeRequest = jest.fn(() => {});
		const setMessage = jest.fn(() => {});

		render(
			<MessageContext.Provider value={setMessage}>
				<LoadingContext.Provider value={{ addRequest, removeRequest }}>
					<FilterContext.Provider value={filter}>
						<MemoryRouter initialEntries={['/']}>
							<ProductsPage />
						</MemoryRouter>
					</FilterContext.Provider>
				</LoadingContext.Provider>
			</MessageContext.Provider>
		);
	});
});
