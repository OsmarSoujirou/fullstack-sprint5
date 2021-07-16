import { useContext, useEffect, useState } from 'react';
import FilterContext from '../../contexts/FilterContext';
import LoadingContext from '../../contexts/LoadingContext';
import MessageContext from '../../contexts/MessageContext';
import ProductsService from '../../services/ProductsService';
import Breadcrumbs from './components/Breadcrumbs';
import Filters from './components/Filters';
import ProductView from './components/Product';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const StyledMain = styled.main`
  margin: 0 auto;
  width: 80%;
  max-width: 1100px;
  padding: 16px;

  .main__products {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .main__products .products__row {
    margin: 8px;
  }

  .main__products .products__list {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 1200px) {
    .main__products .products__list {
      flex-wrap: wrap;
    }
  }

  @media (max-width: 1200px) {
    .main__products .products__card {
      flex-basis: 50%;
    }
  }

  @media (min-width: 1201px) {
    .main__products .products__list {
      flex-wrap: wrap;
    }
    .main__products .products__card {
      flex-basis: 25%;
    }
  }

  .main__products .products__card .card {
    cursor: pointer;
    border: 1px solid white;
    padding: 8px;
  }

  .main__products .products__card .card:hover {
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }

  .main__products .products__card .card__img {
    max-width: 100%;
    max-height: 100%;
  }

  .main__products .products__card .card__description {
    font-size: 0.6875rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.87);
    text-transform: uppercase;
    text-align: center;
    margin-top: 8px;
    margin-bottom: 10px;
  }

  .main__products .products__card .card__price {
    font-size: 0.8125rem;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
  }
`;

function Product({ image, name, price, sku }) {
  // console.log(teste);
  return (
    <li className="products__card card">
      <div className="card">
        <Link to={`/product/${sku}`}>
          <img className="card__img" src={image} alt="" />
          <p className="card__description">{name}</p>
          <p className="card__price">R$ {price}</p>
        </Link>
      </div>
    </li>
  );
}

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);
  const { filter } = useContext(FilterContext);
  const { addRequest, removeRequest } = useContext(LoadingContext);
  const { setMessage } = useContext(MessageContext);

  useEffect(() => {
    loadProducts();
    // eslint-disable-next-line
  }, []);

  function loadProducts() {
    addRequest();
    ProductsService.get()
      .then((r) => {
        setProducts([...r.products]);
        setFilters([...r.filters]);
      })
      .catch(() => setMessage('Ocorreu um erro ao carregar os produtos...'))
      .finally(() => removeRequest());
  }

  return (
    <StyledMain>
      <section className="main__products products">
        <Router>
          <Switch>
            <Route exact path="/">
              <Breadcrumbs />
              <Filters filters={filters}></Filters>
              <div className="products__row">
                <ol className="products__list">
                  {products
                    .filter((p) =>
                      filter
                        ? p.name.toUpperCase().indexOf(filter.toUpperCase()) !==
                          -1
                        : true,
                    )
                    .map((p, i) => (
                      <Product
                        key={p.sku}
                        sku={p.sku}
                        image={p.image}
                        name={p.name}
                        price={p.price}
                      />
                    ))}
                </ol>
              </div>
            </Route>
            <Route path="/product/:id">
              {products.length > 0 && (
                <ProductView products={products} msg={setMessage} />
              )}
            </Route>
            <Route>
              <center>
                <br />
                Ops! 404
                <br />
                <br />
                Não conseguimos encontrar a página que você está procurando..
              </center>
            </Route>
          </Switch>
        </Router>
      </section>
    </StyledMain>
  );
}

export default ProductsPage;
