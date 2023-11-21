import { theme } from "../../../../styles/colors";
import styled from "styled-components/native";

// export const WeeklyThemeStyle = styled.TouchableOpacity``;

export const RenderThemeItemView = styled.TouchableOpacity`
  /* activeOpacity: 0.9; */
  border-radius: 5px;
  overflow: hidden;
  margin: 0 8px;

  flex-direction: column-reverse;
  position: relative;
  `;

export const RenderThemeItemImage = styled.Image`
  height: 203px;
  width: 146
  ''''''px;
  object-fit: cover;
  resizeMode: cover;
  `;

export const RenderThemeItemContent = styled.View`
  width: 100%;
  position: absolute;
`;

export const StarrateView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${theme.primary1};
  font-size: 14px;
  font-weight: bold;
`;

export const Venue = styled.Text`
  color: ${theme.font1_main};
  font-size: 8px;
  font-weight: bold;
`;

export const StarRate = styled.Text`
  color: ${theme.primary3_main};
  font-size: 12px;
  font-weight: bold;
  margin: 0 2px;
`;

export const IconImage = styled.Image`
  height: 15px;
  width: 15px;
  tint-color: ${theme.primary3_main};
`;