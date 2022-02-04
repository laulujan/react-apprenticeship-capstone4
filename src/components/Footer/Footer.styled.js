import styled from 'styled-components';

export const FooterComponent = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  border-top: 1px solid black;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 30px;
  @media (max-width: 767.98px) {
    line-height: 18px;
    font-size: 14px;
  }
`;
