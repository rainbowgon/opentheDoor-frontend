import styled from 'styled-components/native';
import { theme } from "../../styles/colors";

const handleColor = (props) => {
  if (props.color === "disable") return theme.semantic_disable;
  if (props.color === "error") return theme.semantic_error;
  if (props.color === "info") return theme.semantic_info;
  if (props.color === "warn") return theme.semantic_warn;
  if (props.color === "success") return theme.semantic_success;
  return theme.font2;
}

export const ListItemView = styled.TouchableOpacity`
  margin: 5px;
  padding: 0 25px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.background4};
`;

export const ListItemIcon = styled.Image`
  height: 25px;
  width: 25px;
  margin-right: 10px;
  tint-color: ${theme.font5};
  
`;

export const ListItemItem = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ListItemTitle = styled.Text`
  color: ${handleColor};
  font-size: 16px;
  `;

export const ListItemContent = styled.Text`
  color: ${theme.font5};
`;
