import React from 'react';
import { useNavigate } from 'react-router-dom';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import {
  Nav,
  NavIcon,
  Title,
  Input,
  InputWrapper,
  Icon,
  Button,
} from './Header.styled';
import { useProducts } from '../../provider/Provider';

const Header = () => {
  const { setTerm, term } = useProducts();
  const navigate = useNavigate();

  const handleClick = () => {
    setTerm(document.getElementById('search').value);
    navigate({
      pathname: '/search',
      search: `?=${term}`,
    });
    document.getElementById('search').value = '';
  };

  return (
    <header>
      <Nav>
        <NavIcon to="/home">
          <img src="/logo.png" alt="logo" />
        </NavIcon>
        <Title>My Shop</Title>
        <InputWrapper>
          <label htmlFor="search-input">
            <Icon />
            <Input type="text" placeholder="Search" id="search" />
          </label>
        </InputWrapper>
        <Button onClick={handleClick}>Search</Button>
        <ShoppingCart />
      </Nav>
    </header>
  );
};

export default Header;
