import styled from 'styled-components/native';
import { theme } from "../../styles/colors";

// size : 'large' | 'medium' | 'small' | 'xsmall'
const getPaddingSize = (props) => {
  if (props.size === "large") return "10px";
  if (props.size === "medium") return "10px 20px";
  if (props.size === "small") return "5px";
  if (props.size === "xsmall") return "2px";
  return "10px";
}

const getMarginSize = (props) => {
  // if (props.size === "large") return "5px";
  // if (props.size === "medium") return "20px";
  // if (props.size === "small") return "20px";
  // if (props.size === "xsmall") return "20px";
  return "5px";
}

const getFontSize = (props) => {
  if (props.size === "large") return "16px";
  if (props.size === "medium") return "14px";
  if (props.size === "small") return "12px";
  if (props.size === "xsmall") return "10px";
  return "16px";
}

// border : 'square' | 'round'
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
  if (props.mode === "selected") return theme.primary3_main;
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
  width: auto;

  padding: ${getPaddingSize};
  margin: ${getMarginSize};

  border: 1px solid ${getBorderColor};
  border-radius: ${getRadius};
  background-color: ${getBackgroundColor};
`;

export const ButtonText = styled.Text`
  color: ${getColor};
  font-size: ${getFontSize};
  font-weight: 600;
`;
