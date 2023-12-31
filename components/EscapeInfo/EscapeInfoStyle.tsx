import styled from 'styled-components/native';
import { theme } from "../../styles/colors";

export const EscapeInfoView = styled.View`
  display: flex;

  overflow: hidden;
  height: fit-content;
  width: auto;
  margin: 10px 30px;
  padding: 15px;

  border-radius: 5px;
  background-color: ${theme.background4};

  color: ${theme.font1_main};
  `;
export const EscapeInfoViewRow = styled.View`
  flex-direction: row;
  margin: 2px;
`;

export const EscapeInfoTitle = styled.Text`
  font-size: 12px;
  border-radius: 10px;
  font-weight: 700;
  color: ${theme.font1_main};

  width: 50px;
`;

export const EscapeInfoContent = styled.Text`
  font-size: 12px;
  border-radius: 10px;
  color: ${theme.font1_main};
`;
