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
