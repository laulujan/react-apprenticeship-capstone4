import React from 'react';

import ShoppingCart from '../ShoppingCart/ShoppingCart';
import {
  Nav,
  NavIcon,
  Title,
  Input,
  InputWrapper,
  Icon,
} from './Header.styled';

const Header = ({ onClick }) => {
  return (
    <header>
      <Nav>
        <NavIcon onClick={onClick}>
          <img src="/logo.png" alt="logo" />
        </NavIcon>
        <Title>My Shop</Title>
        <InputWrapper>
          <label htmlFor="search-input">
            <Icon />
            <Input type="text" placeholder="Search" />
          </label>
        </InputWrapper>
        <ShoppingCart />
      </Nav>
    </header>
  );
};

export default Header;
