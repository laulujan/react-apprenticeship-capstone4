import styled from 'styled-components';

export const Spinner = styled.div`
  position: absolute;
  left: 60%;
  top: 50%;
  z-index: 1;
  width: 50px;
  height: 50px;
  margin: -76px 0 0 -76px;
  border: 10px solid #f3f3f3;
  border-radius: 50%;
  border-top: 10px solid #39bda9;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
