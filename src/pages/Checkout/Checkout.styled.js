import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  margin: 2em;
  @media (max-width: 820px) {
    display: block;
  }
  & h2 {
    text-align: center;
    margin: 1em;
  }
`;

export const Form = styled.form``;

export const FContainer = styled.div`
  margin: auto;
  border-radius: 5px;
  width: 60%;
  @media (max-width: 820px) {
    width: 100%;
  }
`;
export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  margin: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-weight: 300;
  &:focus {
    outline: 0;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  min-width: 500px;
  margin: auto;
  text-align: center;
`;

export const Header = styled.thead`
  font-weight: bold;
`;

export const TD = styled.td`
  border: solid black 1px;
  padding: 0 20px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  & p {
    line-height: 2em;
  }
  @media (max-width: 820px) {
    display: block;
    & p {
      line-height: 1em;
    }
  }
`;
export const Div = styled.div`
  margin: auto;
  text-align: end;
`;

export const Button = styled.button`
  background-color: #222;
  margin-left: 10px;
  width: auto;
  border-radius: 4px;
  border-style: none;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  font-size: 1em;
  font-weight: bold;
  color: #fff;
  line-height: 2.5em;
  &:hover,
  &:focus {
    opacity: 0.75;
  }
  @media (max-width: 767.98px) {
    font-size: 0.8em;
  }
`;

export const Tcontainer = styled.div`
  overflow-x: auto;
`;
