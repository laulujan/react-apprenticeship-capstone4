import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  @media (max-width: 820px) {
    display: block;
  }
  & h2 {
    text-align: center;
  }
`;

export const Box = styled.div`
  text-align: center;
  margin: 3em;
`;
