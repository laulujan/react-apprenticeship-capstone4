import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
`;

export const LeftSide = styled.div`
  width: 60%;
  @media (max-width: 920px) {
    width: 50%;
  }
  @media (max-width: 820px) {
    width: 100%;
  }
`;

export const RightSide = styled.div`
  width: 40%;
  @media (max-width: 920px) {
    width: 50%;
  }
  @media (max-width: 820px) {
    width: 100%;
  }
`;
