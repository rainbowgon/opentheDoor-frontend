import styled from 'styled-components/native';
import { theme } from "../../../../styles/colors";

export const ThemeStarRateViewContent = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px auto;
`;

export const ThemeStarRateIcon = styled.Image`
  width: 26px;
  height: 26px;
  tint-color: ${theme.primary3_main};
`;

export const ThemeStarRateTitle = styled.Text`
  color: ${theme.primary3_main};
  font-size: 22px;
  font-weight: 700;
`;

export const ThemeStarRateContent = styled.Text`
  color: ${theme.font5};
  font-size: 12px;
`;