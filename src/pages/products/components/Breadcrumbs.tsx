import { useContext } from 'react';
import {
  CategoriesContext,
  FaceCategoriesContext,
  FaceBreadcrumb,
} from '../../../contexts/CategoriesContext';
import styled from 'styled-components';

const StyledBreadcumbs = styled.div`
  .main__breadcrumbs {
    margin-bottom: 16px;
  }

  .main__breadcrumbs .breadcrumbs__list {
    display: flex;
  }

  @media (max-width: 1200px) {
    .main__breadcrumbs .breadcrumbs__list {
      justify-content: center;
    }
  }

  .main__breadcrumbs .breadcrumbs__item {
    font-size: 0.8125rem;
    font-weight: 600;
    color: #585858;
  }

  @media (max-width: 1200px) {
    .main__breadcrumbs .breadcrumbs__item {
      display: none;
    }
  }

  .main__breadcrumbs .breadcrumbs__item:not(:last-child):hover {
    text-decoration: underline;
  }

  .main__breadcrumbs .breadcrumbs__item--active {
    color: #261e1e;
  }

  @media (max-width: 1200px) {
    .main__breadcrumbs .breadcrumbs__item--active {
      display: block;
      text-align: center;
      font-size: 1.4375rem;
      font-weight: 400;
      text-transform: uppercase;
    }
  }

  .main__breadcrumbs .breadcrumbs__separator {
    margin-left: 8px;
    margin-right: 8px;
    user-select: none;
  }
`;

function BreadcrumbItem({ link, name }: FaceBreadcrumb): JSX.Element {
  return (
    <li className="breadcrumbs__item">
      {link ? (
        <>
          <a className="breadcrumbs__link" href={link}>
            {name}
          </a>
          <span className="breadcrumbs__item  breadcrumbs__separator">/</span>
        </>
      ) : (
        <span className="breadcrumbs__link">{name}</span>
      )}
    </li>
  );
}

function Breadcrumbs(): JSX.Element {
  const { categories } = useContext<FaceCategoriesContext>(CategoriesContext);

  return (
    <StyledBreadcumbs>
      <section className="main__breadcrumbs breadcrumbs">
        <nav>
          <ol className="breadcrumbs__list">
            {categories.current &&
              categories.current.map((c, index) => (
                <BreadcrumbItem
                  key={index}
                  link={c.link}
                  name={c.name}
                  id={c.id}
                />
              ))}
          </ol>
        </nav>
      </section>
    </StyledBreadcumbs>
  );
}

export default Breadcrumbs;
