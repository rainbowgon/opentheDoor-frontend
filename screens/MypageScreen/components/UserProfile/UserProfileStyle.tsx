import { theme } from "../../../../styles/colors";
import styled from "styled-components/native";

// export const WeeklyThemeStyle = styled.TouchableOpacity``;

export const UserProfileContainer = styled.View`
  padding: 20px;

  background-color: ${theme.background4};
  border-radius: 10px;
  overflow: hidden;
`;

export const ProfileImageView = styled.View`
  height: 40px;
  border-radius: 100px;
  overflow: hidden;
`;

export const UserProfileInfo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  margin: 0 15px;
  border-radius: 100px;
  overflow: hidden;
`;

export const UserId = styled.Text`
  color: ${theme.font1_main};
  font-size: 18px;
  font-weight: bold;
`;

export const UserDate = styled.Text`
  color: ${theme.font3};
  font-size: 12px;
  font-weight: bold;
`;

export const PageContainer = styled.Text`
  flex: 1;
  padding: 20;
`;
