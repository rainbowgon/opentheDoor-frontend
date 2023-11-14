import { theme } from "../../../../styles/colors";
import styled from "styled-components/native";

// export const WeeklyThemeStyle = styled.TouchableOpacity``;

export const Title = styled.Text`
  color: ${theme.primary1};
  font-size: 16px;
  font-weight: bold;
`;

export const Venue = styled.Text`
  color: ${theme.font1_main};
  font-size: 12px;
  margin-top: 5px;
  font-weight: bold;
`;

export const PageContainer = styled.Text`
  flex: 1;
  padding: 20;
`;

export const CardView = styled.View`
  /* shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.3;
  shadow-radius: 4px; */
  /* elevation: 5; // Android 전용 */
  background-color: #000;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 16px;
`;
