import ServiceUtils from './ServiceUtils';
//jest.mock('./ServiceUtils');

global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve({ rates: { CAD: 0 } }),
	})
);

beforeEach(() => {
	fetch.mockClear();
});

describe('ServiceUtils', () => {
	it('Retorno', async () => {
		const ttSuce = jest.fn(() =>
			Promise.resolve({
				ok: true,
				status: 200,
				json: () => Promise.resolve({ teste: 666 }),
			})
		);
		const ttErro = jest.fn(() =>
			Promise.resolve({
				ok: false,
			})
		);
		const result1 = await ServiceUtils.handleResponse(ttSuce());

		expect(result1).toEqual({ teste: 666 });
		await expect(
			async () => await ServiceUtils.handleResponse(ttErro())
		).rejects.toThrow();
	});
});
