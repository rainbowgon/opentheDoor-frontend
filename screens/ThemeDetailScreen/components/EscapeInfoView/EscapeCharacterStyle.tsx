import styled from 'styled-components/native';
import { theme } from "../../../../styles/colors";

export const EscapeCharacterContainer = styled.View`
  flex: 1;
  position: relative;
  justify-content: center;
  text-align: center;
`;

export const EscapeCharacterContent = styled.View`
  flex: 1;
  flex-direction: row;
  margin: 0px 30px;
`;

export const GenreListView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

export const MainTitle = styled.Text`
  color: ${theme.font1_main};
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;