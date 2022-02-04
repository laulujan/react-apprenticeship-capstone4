import styled from 'styled-components';

export const MyCard = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 2px;
  width: 20rem;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
  @media (max-width: 920px) {
    width: 15rem;
  }
  @media (max-width: 820px) {
    width: 100%;
  }
`;

export const CardContent = styled.div`
  padding: 2px 16px;
`;

export const CardImage = styled.img`
  width: 100%;
`;

export const CardTitle = styled.h4`
  color: black;
`;

export const CardDescription = styled.p`
  color: black;
  word-wrap: break-word;
`;
