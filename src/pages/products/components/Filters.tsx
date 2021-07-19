import React from 'react';
import styled from 'styled-components';
import { ImgBase } from '../../../components/UI';

interface FaceFilter {
  label: string;
}

interface FaceProps {
  filters: FaceFilter[];
}

function FilterItem({ label }: FaceFilter) {
  return (
    <li className="filters__item">
      <span className="filters__label">{label}</span>
      {ImgBase('SetaFiltro')}
    </li>
  );
}

function Filters({ filters }: FaceProps) {
  return (
    <StyledFilter>
      <section className="main__filters filters">
        <ul className="filters__list">
          {filters.map((f: FaceFilter, index: number) => (
            <FilterItem key={index} label={f.label} />
          ))}
        </ul>
      </section>
    </StyledFilter>
  );
}

const StyledFilter = styled.div`
  .main__filters {
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
  }

  @media (max-width: 1200px) {
    .main__filters {
      display: none;
    }
  }

  .main__filters .filters__list {
    display: flex;
  }

  .main__filters .filters__item {
    display: flex;
    align-items: center;
    padding: 12px 14px;
  }

  .main__filters .filters__item:hover {
    cursor: pointer;
    background-color: rgba(38, 30, 30, 0.04);
  }

  .main__filters .filters__label {
    text-transform: uppercase;
    font-size: 0.6875rem;
    font-weight: 400;
    color: #261e1e;
  }

  .main__filters .filters__img {
    height: 20px;
    margin-left: 8px;
  }
`;

export default Filters;
