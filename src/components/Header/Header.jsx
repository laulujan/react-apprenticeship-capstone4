import React from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import {
  Nav,
  NavIcon,
  CartButton,
  Input,
  InputWrapper,
  Icon,
} from './Header.styled';

const Header = () => {
  return (
    <header>
      <Nav>
        <NavIcon to="#">
          <img src="/logo.png" alt="logo" />
        </NavIcon>
        <InputWrapper>
          <label htmlFor="search-input">
            <Icon />
            <Input type="text" placeholder="Search" />
          </label>
        </InputWrapper>
        <CartButton>
          <MdOutlineShoppingCart />
        </CartButton>
      </Nav>
    </header>
  );
};

export default Header;
