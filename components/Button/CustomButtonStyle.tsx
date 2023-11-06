import styled from 'styled-components/native';
import { theme } from "../../styles/colors";

export const ButtonContainer = styled.View`
    flex: 1;
    justify-content: 'center';
    align-items: 'center';
    background-color: ${theme.background5_main};
    `;

// 'square' | 'round'
const getRadius = (props) => {
  if (props.border === "square") return "5px";
  if (props.border === "round") return "20px";
  return "5px";
}

// props.mode : 'text' | 'outlined' | 'static' | 'selected' | 'inactive' | 'error'
const getBackgroundColor = (props) => {
  if (
    props.mode === "text"
    || props.mode === "outlined"
  ) return theme.transparent;
  if (props.mode === "static") return theme.font2;
  if (props.mode === "selected") return theme.primary4;
  if (props.mode === "inactive") return theme.background3;
  if (props.mode === "error") return theme.semantic_error;
  return theme.transparent;
};

const getBorderColor = (props) => {
  if (props.mode === "text") return theme.transparent;
  if (props.mode === "static") return theme.transparent;
  if (props.mode === "outlined") return theme.primary3_main;
  if (props.mode === "selected") return theme.primary5;
  if (props.mode === "inactive") return theme.background1;
  if (props.mode === "error") return theme.semantic_error;
  return theme.semantic_warn;
};

const getColor = (props) => {
  if (props.mode === "text") return theme.primary3_main;
  if (props.mode === "static") return theme.background4;
  if (props.mode === "outlined") return theme.primary3_main;
  if (props.mode === "selected") return theme.font1_main;
  if (props.mode === "inactive") return theme.background1;
  if (props.mode === "error") return theme.font1_main;
  return theme.semantic_warn;
};

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  padding: 10px;
  margin: 5px;

  border: 2px solid ${getBorderColor};
  border-radius: ${getRadius};
  background-color: ${getBackgroundColor};
`;

export const ButtonText = styled.Text`
  color: ${getColor};
  font-size: 16px;
  font-weight: 600;
`;
