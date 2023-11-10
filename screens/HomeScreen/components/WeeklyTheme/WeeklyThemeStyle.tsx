import { theme } from "../../../../styles/colors";
import styled from "styled-components/native";

// export const WeeklyThemeStyle = styled.TouchableOpacity``;

export const Header = styled.Text`
  color: ${theme.primary3_main};
  font-size: 20px;
  font-weight: bold;
  padding: 15px 0px;
`;

export const Title = styled.Text`
  color: ${theme.primary3_main};
  font-size: 16px;
`;

export const Venue = styled.Text`
  color: ${theme.primary3_main};
  font-size: 12px;
  margin-top: 5px;
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
