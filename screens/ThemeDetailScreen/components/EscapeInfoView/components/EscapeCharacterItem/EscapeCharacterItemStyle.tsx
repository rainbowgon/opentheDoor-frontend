import styled from 'styled-components/native';
import { theme } from "../../../../../../styles/colors";

export const EscapeCharacterItemContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;

  width: auto;
  position: relative;
  margin: auto;

  justify-content: space-between;

  margin: 5px;
`;

export const EscapeCharacterItemContent = styled.View`
  flex-direction: row;
  align-items: baseline;
`;

export const EscapeCharacterItemTitle = styled.Text`
  color: ${theme.primary3_main};
  font-size: 14px;
  font-weight: 700;
  text-align: center;
`;

export const EscapeCharacterItemText = styled.Text`
  color: ${theme.font1_main};
  font-size: 14px;
  text-align: center;
`;

export const EscapeCharacterItemSubText = styled.Text`
  color: ${theme.font5};
  font-size: 12px;
  font-weight: 700;
  text-align: center;
`;