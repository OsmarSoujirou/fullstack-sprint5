import { useContext } from 'react';
import FilterContext from '../contexts/FilterContext';
import Menu from './Menu';
import styled from 'styled-components';
import { ImgBase } from './UI';

const StyledHeader = styled.header`
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;

  @media (max-width: 1200px) {
    .header--floating {
      position: fixed;
      top: 0;
      background-color: #fff;
    }
  }

  .header__container {
    margin: auto;
    width: 95%;
    max-width: 1200px;
  }

  @media (max-width: 1200px) {
    .header__desktop {
      display: none;
    }
  }

  .header__mobile {
    display: none;
    margin-bottom: 25px;
  }

  @media (max-width: 1200px) {
    .header__mobile {
      display: flex;
      align-items: center;
    }
  }

  .header__logo {
    height: 70px;
    line-height: 70px;
    text-align: center;
  }

  @media (max-width: 1200px) {
    .header__logo {
      flex-grow: 1;
    }
  }

  .header__search {
    position: relative;
  }

  .header__input {
    height: 40px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.23);
    padding-left: 40px;
  }

  .header__input:hover {
    border-color: #000;
  }

  .header__input::placeholder {
    font-size: 0.9375rem;
    font-weight: 600;
    font-family: 'Open Sans';
    color: #9b9b9b;
  }

  .header__drawer {
    width: 24px;
    opacity: 54%;
    display: none;
  }

  .header__drawer--active {
    display: block;
  }

  .header__drawer .menu__title,
  .header__drawer .close__title {
    text-transform: lowercase;
    font-size: 0.5625rem;
    font-weight: 400;
    line-height: 0;
  }
`;

function Header() {
  const { setFilter } = useContext(FilterContext);

  return (
    <StyledHeader>
      <div className="header__container">
        <div className="header__mobile">
          <div className="header__drawer menu header__drawer--active">
            {ImgBase('IconMenuOpen')}
            <p className="menu__title">menu</p>
          </div>
          <div className="header__drawer close">
            {ImgBase('IconMenuClose')}
            <p className="close__title">fechar</p>
          </div>
          <h1 className="header__logo">{ImgBase('LogoRchlo')}</h1>
        </div>
        <div className="header__desktop">
          <h1 className="header__logo">{ImgBase('LogoRiachuelo')}</h1>
        </div>
        <div className="header__search">
          {ImgBase('IconLupa')}
          <input
            className="header__input"
            type="search"
            placeholder="O que você está procurando?"
            onChange={(event) => setFilter(event.target.value)}
          />
        </div>

        <Menu />
      </div>
    </StyledHeader>
  );
}

export default Header;
