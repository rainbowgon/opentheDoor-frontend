import styled from 'styled-components/native';
import { theme } from "../../styles/colors";

// size : 'large' | 'medium' | 'small' | 'xsmall'
const getPaddingSize = (props) => {
  if (props.type === "large") return "15px";
  if (props.type === "medium") return "10px";
  if (props.type === "small") return "5px";
  return "10px";
}

const getMarginSize = (props) => {
  // if (props.size === "large") return "5px";
  // if (props.size === "medium") return "20px";
  // if (props.size === "small") return "20px";
  // if (props.size === "xsmall") return "20px";
  return "5px";
}

// border : 'square' | 'round'
const getRadius = (props) => {
  if (props.type === "large") return "25px";
  if (props.type === "medium") return "18px";
  if (props.type === "small") return "12px";
  return "5px";
}

// props.mode : 'text' | 'outlined' | 'static' | 'selected' | 'inactive' | 'error'
const getBackgroundColor = (props) => {
  if (props.mode === "flat") return theme.background4;
  if (props.mode === "elevated") return theme.font2;
  return theme.transparent;
};

const getBorderColor = (props) => {
  if (props.mode === "flat") return theme.transparent;
  if (props.mode === "elevated") return theme.primary3_main;
  return theme.semantic_warn;
};

const getColor = (props) => {
  if (props.mode === "flat") return theme.font1_main;
  if (props.mode === "elevated") return theme.primary3_main;
  return theme.semantic_warn;
};

export const Fab = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: auto;
  width: 50px;
  height: 50px;

  padding: ${getPaddingSize};
  margin: ${getMarginSize};

  border: 1px solid ${getBorderColor};
  border-radius: ${getRadius};
  background-color: ${getBackgroundColor};
`;

export const FabImage = styled.Image`
  width: 30px;
  height: 30px;
  tint-color: ${theme.icons};
`;