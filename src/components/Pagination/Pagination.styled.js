import styled from 'styled-components';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export const Button = styled.button`
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
`;
export const LeftIcon = styled(MdChevronLeft)`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 50%;
  transform: translate(-50%, -50%);
  width: 1em;
  height: 1empx;
  display: block;
`;

export const RightIcon = styled(MdChevronRight)`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 50%;
  transform: translate(-50%, -50%);
  width: 1em;
  height: 1empx;
  display: block;
`;

export const Text = styled.p`
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
