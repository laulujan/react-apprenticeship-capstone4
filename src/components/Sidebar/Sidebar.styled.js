import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  justify-content: center;
  border-right: 1px solid black;
  @media (max-width: 820px) {
    border-right: none;
    display: flex;
  }
`;

export const Fieldset = styled.fieldset`
  width: 180px;
  border: none;
  margin: 1rem;
  @media (max-width: 920px) {
    width: 150px;
  }
  @media (max-width: 820px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const Legend = styled.legend`
  font-size: 1.3rem;
  font-weight: bold;
`;

export const Input = styled.input`
  cursor: pointer;
  :checked + label {
    color: #39bda9;
    font-weight: bold;
  }
`;
