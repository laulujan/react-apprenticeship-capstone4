import styled from 'styled-components';

export const MyCard = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  width: 10rem;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
  }
  @media (max-width: 920px) {
    width: 8rem;
  }
  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const CardContent = styled.div`
  padding: 2px 16px;
  text-align: center;
`;

export const CardImage = styled.img`
  width: 100%;
`;

export const CardTitle = styled.h4`
  color: black;
  margin: 0;
  word-wrap: break-word;
  font-size: 1.2rem;
`;

export const CardDescription = styled.p`
  color: black;
  word-wrap: break-word;
  font-size: 1rem;
`;
