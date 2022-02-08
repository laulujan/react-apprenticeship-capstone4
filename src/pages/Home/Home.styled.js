import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: auto;
`;

export const Title = styled.h2`
  font-size: 2em;
  margin-left: 2em;
`;

export const Button = styled.button`
  background-color: #222;
  border-radius: 4px;
  border-style: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 1em;
  font-weight: bold;
  min-height: 44px;
  width: 100%;

  &:hover,
  &:focus {
    opacity: 0.75;
  }
`;
