import styled from 'styled-components/native';
import { theme } from "../../../../styles/colors";

const getPercent = (props) => {
  return props.percent;
};

export const BarGraphItemView = styled.TouchableOpacity`
  padding: 5px 0;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${theme.background4};
`;

export const BarGraphIcon = styled.Image`
  width: 30px;
  height: 30px;
  margin-right: 15px;
  tint-color: ${theme.primary3_main};
`;

export const ProgressBar = styled.View`
  width: 80%;
  height: 6px;
  background-color: ${theme.background3};
`;
export const ProgressBarFill = styled.View`
  width: ${getPercent}%;
  height: 6px;
  background-color: ${theme.primary3_main};
`;