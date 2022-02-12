import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 90%;
  margin: auto;
`;

export const Title = styled.h2`
  font-size: 2em;
  margin-left: 2em;
`;

export const Button = styled.div`
  background-color: #222;
  border-radius: 4px;
  border-style: none;
  cursor: pointer;
  display: inline-block;
  min-height: 44px;
  width: 100%;
  text-align: center;
  &:hover,
  &:focus {
    opacity: 0.75;
  }
`;

export const LinkTo = styled(Link)`
  text-decoration: none;
  font-size: 1em;
  font-weight: bold;
  color: #fff;
  line-height: 2.5em;
`;
