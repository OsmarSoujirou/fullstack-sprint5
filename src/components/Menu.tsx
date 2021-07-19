import { useContext } from 'react';
import { CategoriesContext } from '../contexts/CategoriesContext';
import styled from 'styled-components';

const StyledMenu = styled.nav`
  @media (max-width: 1200px) {
    display: none;
  }

  .menu__list {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .menu__link {
    font-size: 0.8125rem;
    font-weight: 600;
    color: #000;
    text-transform: uppercase;
    padding-bottom: 5px;
    vertical-align: baseline;
  }

  .menu__link:hover {
    border-bottom: 2px solid #000;
  }
`;

interface MenuItemData {
  label: string;
  id?: number;
  link: string;
}

function MenuItem({ label, link }: MenuItemData): JSX.Element {
  return (
    <li className="menu__item">
      <a className="menu__link" href={link}>
        <span>{label}</span>
      </a>
    </li>
  );
}

function Menu(): JSX.Element {
  const { categories } = useContext(CategoriesContext);

  return (
    <StyledMenu>
      <ul className="menu__list">
        {categories.all &&
          categories.all.map(
            (m: MenuItemData): JSX.Element => (
              <MenuItem key={m.id} label={m.label} link={m.link} />
            ),
          )}
      </ul>
    </StyledMenu>
  );
}

export default Menu;
