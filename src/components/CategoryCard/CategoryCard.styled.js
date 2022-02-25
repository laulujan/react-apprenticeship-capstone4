import styled from 'styled-components';

export const MyCard = styled.div`
  width: 18rem;
  cursor: pointer;
  max-height: 300px;
  & img {
    opacity: 0.9;
  }
  &:hover h4 {
    color: #39bda9;
  }
  &:hover img {
    opacity: 1;
  }
  @media (max-width: 920px) {
    width: 13rem;
  }
  @media (max-width: 820px) {
    width: 100%;
  }
`;

export const CardContent = styled.div`
  padding: 2px 16px;
  text-align: center;
`;

export const CardImage = styled.img`
  width: 100%;
  max-height: 180px;
`;

export const CardTitle = styled.h4`
  color: black;
  padding: 0;
  word-wrap: break-word;
  font-size: 1.5rem;
  white-space: nowrap;
`;

export const CardDescription = styled.p`
  color: black;
  word-wrap: break-word;
`;
