import styled from 'styled-components/native';
import { theme } from "../../styles/colors";

// size : 'large' | 'medium' | 'small' | 'xsmall'
const getPaddingSize = (props) => {
  if (props.size === "large") return "10px";
  if (props.size === "medium") return "10px 20px";
  if (props.size === "small") return "5px";
  if (props.size === "xsmall") return "2px 10px";
  return "10px";
}

const getMarginSize = (props) => {
  // if (props.size === "large") return "5px";
  // if (props.size === "medium") return "20px";
  // if (props.size === "small") return "20px";
  // if (props.size === "xsmall") return "20px";
  return "5px";
}

const handleSize = (props) => {
  return props.size + 4;
}

const handleColor = (props) => {
  if (props.mode === "main") return theme.primary3_main;
  if (props.mode === "warn") return theme.semantic_warn;
  if (props.mode === "success") return theme.semantic_success;
  if (props.mode === "info") return theme.semantic_info;
  if (props.mode === "error") return theme.semantic_error;
  if (props.mode === "disable") return theme.semantic_disable;

  return theme.primary3_main;
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
  if (props.mode === "kakao") return "#FEE500";
  return theme.transparent;
};

const getBorderColor = (props) => {
  if (props.mode === "text") return theme.transparent;
  if (props.mode === "static") return theme.transparent;
  if (props.mode === "outlined") return theme.primary3_main;
  if (props.mode === "selected") return theme.primary5;
  if (props.mode === "inactive") return theme.background1;
  if (props.mode === "error") return theme.semantic_error;
  if (props.mode === "kakao") return "#FEE500";
  return theme.semantic_warn;
};

const getValue = (props) => {
  if (props.value) {
    return props.value * props.size;
  }
  return props.size * 5;
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

export const StarRatingContainer = styled.View`
  position: relative;
  height: ${handleSize}px;
  justify-content: center;
  /* align-items: center; */
  width: ${getValue}px;
`;

export const StarRatingIconList = styled.View`
  position: absolute;
  display: flex;
  flex-direction: row;
  width: ${getValue}px;
  overflow: hidden;
`;

export const StarRatingEnactiveIcon = styled.Image`
  width: ${handleSize}px;
  height: ${handleSize}px;
  margin: -2px;
  tint-color: ${theme.background3};
`;

export const StarRatingActiveIcon = styled.Image`
  width: ${handleSize}px;
  height: ${handleSize}px;
  margin: -2px;
  tint-color: ${handleColor};
`;
