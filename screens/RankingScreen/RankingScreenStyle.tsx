import styled from 'styled-components/native';
import { theme } from "../../styles/colors";

export const RankingScreenContainer = styled.View`
  flex: 1;
  height: 200px;
  justify-content: center;
  align-items: center;
`;

export const GetImageView = styled.View`
  height: 500px;
`;

export const ThemeDetailScrollView = styled.ScrollView`
  flex: 1;
  `;

export const ThemeDetailContent = styled.View`
  flex: 1;
  background-color: ${theme.background5_main};
  `;

export const ThemeDetailMapView = styled.View`
  position: relative;
`;

export const ThemeDetailTitleView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ThemeDetailReviewTitleButtons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledView = styled.View`
  height: 1px;
  background-color: ${theme.background3};
  margin: 15px 5px;
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
