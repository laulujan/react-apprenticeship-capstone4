import styled from 'styled-components';
import { MdOutlineShoppingCart } from 'react-icons/md';

export const CartButton = styled.button`
  border: none;
  border-radius: 100px;
  margin: 10px;
  position: absolute;
  top: 10;
  right: 0;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  font-size: 2em;
  line-height: 50px;
  height: 50px;
  width: 50px;
  &:hover {
    box-shadow: 0 0 11px rgba(34, 34, 34, 0.4);
  }
  @media (max-width: 767.98px) {
    margin: 6px;
  }
`;

export const CartIcon = styled(MdOutlineShoppingCart)`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 50%;
  transform: translate(-50%, -50%);
  width: 1em;
  height: 1empx;
  display: block;
`;

export const Badge = styled.span`
  position: absolute;
  left: 22px;
  bottom: 30px;
  display: block;
  width: 16px;
  height: 16px;
  font-size: 12px;
  font-weight: light;
  font-family: 'Trebuchet MS', sans-serif;
  text-transform: uppercase;
  text-align: center;
  line-height: 1.4em;
  color: white;
  border: none;
  border-radius: 50%;
  background: #39bda9;
  cursor: pointer;
  box-shadow: 0 0 0 0 rgba(#fff, 0.3);
  z-index: 50;
`;
