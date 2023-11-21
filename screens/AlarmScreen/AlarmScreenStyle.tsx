import styled from 'styled-components/native';
import { theme } from "../../styles/colors";

export const RankingScreenContainer = styled.View`
  flex: 1;
  height: 100px;
  margin-bottom: 50px;
  justify-content: center;
  align-items: center;
`;

export const NoAlarmView = styled.View`
  height: 500px;
`;

export const NoAlarmText = styled.Text`
  height: 30px;
  justify-content: center;
  align-items: center;
  text-align: center;

  font-size: 14px;
  color: ${theme.font4};
  margin: 15px 15px;
`;

export const RankingScreenTitle = styled.Text`
  color: ${theme.primary1};
  font-size: 40px;
  font-weight: 800;
`;

export const RankingScreenSubTitle = styled.Text`
  color: ${theme.font4};
  font-size: 18px;
  font-weight: 800;
`;
