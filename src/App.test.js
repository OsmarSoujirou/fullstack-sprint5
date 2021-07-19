import { render } from '@testing-library/react';
import App from './App';
import CategoriesService from './services/CategoriesService';
import MessageContext from './contexts/MessageContext';
import { CategoriesContext } from './contexts/CategoriesContext';

jest.mock('./services/CategoriesService');

describe('Componete principal', () => {
	it('Testar renderização do componente App e retorno da Promise CategoriesService', () => {
		CategoriesService.get.mockResolvedValue(Promise.resolve({}));
		let categories = null;
		const setCategories = (f) => (categories = f);
		render(
			<CategoriesContext.Provider values={{ categories, setCategories }}>
				<App />
			</CategoriesContext.Provider>
		);
	});

	it('Testar retorno falso da Promise CategoriesService', () => {
		CategoriesService.get.mockResolvedValue(Promise.reject({}));

		let message = null;
		const setMessage = (f) => (message = f);

		render(
			<MessageContext.Provider value={{ message, setMessage }}>
				<App />
			</MessageContext.Provider>
		);
	});
});
