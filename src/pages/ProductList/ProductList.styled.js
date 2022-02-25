import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  @media (max-width: 820px) {
    display: block;
  }
  & h2 {
    text-align: center;
  }
`;
