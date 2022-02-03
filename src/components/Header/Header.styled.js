import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

export const Nav = styled.div`
  background-color: white;
  border-bottom: 1px solid black;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #e1e9fc;
`;

export const NavIcon = styled.div`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;∏
  align-items: center;
  background-color: transparent;
  color: #242423;
`;

export const CartButton = styled.button`
    border: none;
    border-radius: 100px;∏
    outline: none;
    color: white;
    cursor: pointer;
    font-size: 2em;
    height: 52px;
    width: 52px;
    &:hover {
      box-shadow: 0 0 11px rgba(34, 34, 34, 0.4);
    }
`;
export const Input = styled.input`
  width: 300px;
  border: 1px solid black;
  border-radius: 30px;
  outline: none;
  padding-inline-start: 52px;
  height: 32px;
`;

export const InputWrapper = styled.div`
  position: relative;
  color: black;
  margin: 10px;
`;

export const Icon = styled(MdSearch)`
  position: absolute;
  font-size: 1.5rem;
  heigth: 100%;
  color: gray;
  left: 12px;
  top: 4px;
`;
