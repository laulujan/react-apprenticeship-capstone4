import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

export const Nav = styled.nav`
  background-color: white;
  border-bottom: 1px solid black;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

export const NavIcon = styled.div`
  font-size: 1rem;
  margin-left: 1rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;∏
  align-items: center;
  background-color: transparent;
  color: #242423;
  cursor: pointer;
  & img {
    margin: 6px;
  }
  @media (max-width: 767.98px) {
    margin: 1px;
  }
`;
export const Title = styled.h3`
  margin: 6px;
  @media (max-width: 767.98px) {
    display: none;
  }
`;

export const Cartdiv = styled.div`
  margin: 2rem;
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

export const Input = styled.input`
  width: 300px;
  border: 1px solid black;
  border-radius: 30px;
  outline: none;
  padding-inline-start: 52px;
  height: 32px;
  @media (max-width: 991.98px) {
    width: 200px;
  }
  @media (max-width: 767.98px) {
    width: 150px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  color: black;
  margin: 10px;
  @media (max-width: 767.98px) {
    margin: 6px;
  }
`;

export const Icon = styled(MdSearch)`
  position: absolute;
  font-size: 1.5rem;
  heigth: 100%;
  left: 12px;
  top: 4px;
`;
