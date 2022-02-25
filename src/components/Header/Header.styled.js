import styled from 'styled-components';
import { Link } from 'react-router-dom';
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

export const NavIcon = styled(Link)`
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
    width: 100px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  color: black;
  margin: 10px;
  display: flex;
  @media (max-width: 767.98px) {
    margin: 6px;
  }
`;

export const Icon = styled(MdSearch)`
  position: absolute;
  top: 50%;
  left: 20px;
  height: 50%;
  transform: translate(-50%, -50%);
  width: 1em;
  height: 1empx;
  display: block;
`;

export const Button = styled.button`
  background-color: #222;
  margin-left: 10px;
  width: auto;
  border-radius: 4px;
  border-style: none;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  font-size: 1em;
  font-weight: bold;
  color: #fff;
  line-height: 2.5em;
  &:hover,
  &:focus {
    opacity: 0.75;
  }
  @media (max-width: 767.98px) {
    font-size: 0.8em;
  }
`;
