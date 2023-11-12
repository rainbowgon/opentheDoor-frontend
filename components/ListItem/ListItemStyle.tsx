import styled from 'styled-components/native';
import { theme } from "../../styles/colors";

export const ListItemView = styled.TouchableOpacity`
  margin: 5px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.background4};
`;

export const ListItemIcon = styled.Image`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  tint-color: ${theme.font5};
`;

export const ListItemItem = styled.View`
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ListItemTitle = styled.Text`
  color: ${theme.font2};
  font-weight: 700;
  `;

export const ListItemContent = styled.Text`
  color: ${theme.font3};
`;
