import React, { useState } from 'react';
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
  const { searchProducts, apiMetadata } = useProducts();
  const [term, setTerm] = useState('');
  const { ref: apiRef } = apiMetadata;
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(term);
    searchProducts(apiRef, term);
    navigate({
      pathname: '/search',
      search: `?=${term}`,
    });
  };
  const handleChange = (e) => {
    setTerm(e.target.value);
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
            <Input type="text" placeholder="Search" onChange={handleChange} />
          </label>
        </InputWrapper>
        <Button onClick={handleClick}>Search</Button>
        <ShoppingCart />
      </Nav>
    </header>
  );
};

export default Header;
