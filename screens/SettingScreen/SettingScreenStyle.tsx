import styled from 'styled-components/native';
import { theme } from "../../styles/colors";

export const SettingHeadTitle = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
  `;

export const SettingIcon = styled.Image`
height: 30px;
width: 30px;
margin: 10px;
tint-color: ${theme.font5};
  `;

export const StyledView = styled.View`
  height: 1px;
  background-color: ${theme.background3};
  margin: 15px 5px;
`;

export const SettingTitle = styled.Text`
  color: ${theme.font1_main};
  font-size: 16px;
`;

export const SettingContext = styled.Text`
  color: ${theme.font5};
`;

export const SubContent = styled.Text`
  color: ${theme.font2};
  font-size: 12px;
  text-align: center;
`;