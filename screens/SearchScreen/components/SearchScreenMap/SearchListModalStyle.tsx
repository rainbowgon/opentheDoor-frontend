import styled from 'styled-components/native';
import { theme } from "../../../../styles/colors";
import { Dimensions } from "react-native";

export const SearchFilterIconView = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const SearchFilterIcon = styled.Image`
  width: 30px;
  height: 30px;
  margin-right: 15px;
  tint-color: ${theme.background2};
`;