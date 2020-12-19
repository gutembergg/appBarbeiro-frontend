import styled from 'styled-components/native';

interface IpropsContainer {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.View<IpropsContainer>`
  width: 100%;
  height: 60px;
  background-color: #83d6e3;
  flex-direction: row;
  border-radius: 30px;
  align-items: center;
  padding-left: 15px;
  margin-bottom: 15px;
`;

export const InputText = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #268596;
  margin-left: 10px;
`;
