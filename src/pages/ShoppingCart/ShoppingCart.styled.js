import styled from 'styled-components';
import { MdOutlineClose } from 'react-icons/md';

export const Table = styled.table`
  border-collapse: collapse;
  width: 90%;
  min-width: 500px;
  margin: auto;
  text-align: center;
`;

export const Header = styled.thead`
  font-weight: bold;
`;

export const Row = styled.tr``;

export const TD = styled.td`
  border: solid black 1px;
  padding: 0 20px;
`;

export const Body = styled.tbody``;

export const Img = styled.img`
  width: 100px;
  margin: 10px;
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  & p {
    line-height: 2em;
  }
  @media (max-width: 820px) {
    display: block;
    & p {
      line-height: 1em;
    }
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  margin: 2em;
  @media (max-width: 820px) {
    display: block;
  }
  & h2 {
    text-align: center;
    margin: 1em;
  }
`;

export const CircleButton = styled.button`
  border: none;
  border-radius: 100px;
  margin: 10px;
  background-color: transparent;
  position: relative;
  outline: none;
  cursor: pointer;
  font-size: 2em;
  line-height: 50px;
  height: 50px;
  width: 50px;
  &:hover {
    box-shadow: 0 0 11px rgba(34, 34, 34, 0.4);
  }
   @media (max-width: 820px) {
    width: 30px;
  height: 30px;
`;

export const Icon = styled(MdOutlineClose)`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 50%;
  transform: translate(-50%, -50%);
  width: 1em;
  height: 1empx;
  display: block;
  @media (max-width: 820px) {
    width: .6em;
  height: .6empx;
`;

export const Tcontainer = styled.div`
  overflow-x: auto;
`;

export const Div = styled.div`
  width: 90%;
  text-align: end;
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
