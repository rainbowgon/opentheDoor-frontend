import { theme } from "../../../../styles/colors";
import styled from "styled-components/native";

export const HomeTitleView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  `;

export const HomeScreenMainTitle = styled.Text`
  color: ${theme.primary3_main};
  font-size: 24px;
  font-weight: 800;
  `;

export const HomeScreenSubTitle = styled.Text`
color: ${theme.font2};
font-size: 14px;
font-weight: 700;
`;
