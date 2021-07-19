import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Message from './components/Message';
import Spinner from './components/Spinner';
import {
	CategoriesContext,
	FaceCategoriesState,
} from './contexts/CategoriesContext';
import { FilterContext } from './contexts/FilterContext';
import LoadingContext from './contexts/LoadingContext';
import MessageContext from './contexts/MessageContext';
import useLoading from './hooks/useLoading';
import ProductsPage from './pages/products/ProductsPage';
import CategoriesService from './services/CategoriesService';
import { GlobalStyle } from './components/GlobalStyle';

function App() {
	const [filter, setFilter] = useState('');
	const [message, setMessage] = useState('');
	const [categories, setCategories] = useState<FaceCategoriesState>(
		{} as FaceCategoriesState
	);
	const [addRequest, removeRequest, isLoading] = useLoading();

	// eslint-disable-next-line
	useEffect(() => loadCategories(), []);

	function loadCategories() {
		addRequest();
		CategoriesService.get()
			.then((c: FaceCategoriesState) => setCategories(c))
			.catch(() => setMessage('Ocorreu um erro ao carregar as categorias...'))
			.finally(() => removeRequest());
	}

	return (
		<FilterContext.Provider value={{ filter, setFilter }}>
			<LoadingContext.Provider value={{ addRequest, removeRequest, isLoading }}>
				<MessageContext.Provider value={{ message, setMessage }}>
					<CategoriesContext.Provider value={{ categories }}>
						<Spinner />
						<div className="page-container">
							<GlobalStyle />
							<Message />
							<Header></Header>
							<ProductsPage />
						</div>
						<Footer />
					</CategoriesContext.Provider>
				</MessageContext.Provider>
			</LoadingContext.Provider>
		</FilterContext.Provider>
	);
}

export default App;
