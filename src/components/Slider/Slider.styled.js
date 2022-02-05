import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  line-height: 30px;
`;
export const Img = styled.img`
  width: 100%;
  margin: 2rem 0 2rem 0;
`;

export const TextContent = styled.div`
  & h2 {
    position: absolute;
    bottom: 1rem;
    left: 0;
    width: 100%;
    height: 4rem;
    font-weight: 700;
    color: white;
    padding: 1rem 0 0 1rem;
    background: #000;
    opacity: 0.7;
  }
`;
