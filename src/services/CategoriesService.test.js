import CategoriesService from './CategoriesService';
import ServiceUtils from './ServiceUtils';
jest.mock('./ServiceUtils');

describe('Service CategoriesService', () => {
	it('Retorno', () => {
		ServiceUtils.handleResponse.mockReturnValue('teste');
		const teste = CategoriesService.get();

		expect(teste).toBe('teste');
	});
});
