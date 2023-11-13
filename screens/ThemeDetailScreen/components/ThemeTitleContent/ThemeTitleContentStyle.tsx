import styled from 'styled-components/native';
import { theme } from "../../../../styles/colors";

export const ThemeTitleView = styled.View`
  flex: 1;
  position: relative;
  justify-content: center;
  text-align: center;
`;

export const ThemeDetailContent = styled.View`
  flex: 1;
  background-color: ${theme.background5_main};
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