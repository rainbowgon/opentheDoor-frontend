import styled from 'styled-components/native';
import { theme } from "../../styles/colors";
import { Dimensions } from "react-native";

export const HomePageHeadContent = styled.View`
  height: ${(Dimensions.get("window").height) / 5 * 2}px;
  justify-content: center;
  align-items: center;
`;

export const HomeScreenTitleView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 20px 0 20px;
`;

export const HomeScreenTitleTouch = styled.TouchableHighlight`
  width: 100%;
  display: flex;
`;

export const HomeScreenIcon = styled.Image`
  width: 26px;
  height: 26px;
  tint-color: ${theme.background1};
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