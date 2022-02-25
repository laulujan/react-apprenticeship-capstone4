import styled from 'styled-components';
export const Container = styled.div``;
export const Title = styled.h3`
  margin: 10px;
`;

export const Label = styled.span`
  display: block;
  margin: 10px;

  &::first-word {
    font-weight: bold;
  }
`;

export const Tag = styled.div`
  background-color: #d1d1d1;
  display: inline-flex;
  flex-wrap: wrap;
  margin: 5px;
  padding: 8px;
  border-radius: 30px;
`;
export const Button = styled.button`
  margin: 0 18px;
  border: none;
  border-radius: 100px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  width: 30px;
  height: 30px;
  &:hover {
    box-shadow: 0 0 11px rgba(34, 34, 34, 0.4);
  }
  @media (max-width: 767.98px) {
    margin: 6px;
  }
`;

export const Text = styled.p`
  margin: 0;
`;

export const ButtonAdd = styled.button`
  background-color: #222;
  border-radius: 4px;
  border-style: none;
  cursor: pointer;
  display: inline-block;
  min-height: 44px;
  width: 100%;
  text-align: center;
  font-size: 1em;
  font-weight: bold;
  color: #fff;
  line-height: 2.5em;
  padding: 10px;
  margin-left: 10px;
  &:hover,
  &:focus {
    opacity: 0.75;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px;
`;
