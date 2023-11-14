import styled from 'styled-components/native';
import { theme } from "../../styles/colors";

export const HomePageHeadContent = styled.View`
  height: 450px;
  justify-content: center;
  align-items: center;
`;

export const HomeScreenTitleTouch = styled.TouchableHighlight`
  width: 100%;
`;

export const HomeScreenTitle = styled.Text`
  color: ${theme.primary1};
  font-size: 20px;
  font-weight: 800;
  padding: 15px 0px;
`;

export const HomeTitleContent = styled.Text`
  color: ${theme.font5};
  font-size: 12px;
`;