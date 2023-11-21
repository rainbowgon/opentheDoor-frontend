import styled from 'styled-components/native';
import { theme } from "../../styles/colors";

export const ThemeDetailContainer = styled.View`
  flex: 1;
  position: relative;
  `;

export const ThemeDetailImage = styled.Image`
  position: absolute;
  width: 100%;
  object-fit: cover;
  height: 500px;
  resizeMode: cover;
  `;

export const GetImageView = styled.View`
  height: 420px;
  `;

export const NoReviewView = styled.View`
    height: 100px;
    justify-content: center;
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

export const ThemeDetailMapFab = styled.View`
  position: absolute;
  width: 100%;
  flex-direction: column-reverse;
  justify-content: end;
  margin: auto 0;
  margin-left: 80%;
`;

export const ThemeDetailTitleView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 20px;
`;

export const ThemeReviewTitle = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ThemeDetailReviewView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 15px;
`;

export const ThemeStarRateIcon = styled.Image`
  width: 26px;
  height: 26px;
  tint-color: ${theme.primary3_main};
`;

export const ThemeDetailReviewTitleButtons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ThemeDetailBottomButtons = styled.View`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 14px;
  width: auto;
  background-color: ${theme.background4};
  top: 85%;
`;

export const ThemeDetailBottomButton = styled.View`
width: 50%;
`;

export const StyledView = styled.View`
  height: 1px;
  background-color: ${theme.background3};
  margin: 15px 5px;
`;

export const Title = styled.Text`
  color: ${theme.font1_main};
  font-size: 16px;
  font-weight: 600;
  margin: 10px 5px;
`;

export const ThemeStarRateText = styled.Text`
  color: ${theme.primary3_main};
  font-size: 16px;
  font-weight: 600;
  margin: 10px 5px;
`;

export const Content = styled.Text`
  color: ${theme.font1_main};
`;

export const SubContent = styled.Text`
  color: ${theme.font2};
  font-size: 12px;
  text-align: center;
`;

export const Explanation = styled.Text`
  color: ${theme.font2};
  font-size: 12px;
  text-align: center;
  margin: 12px 24px;
`;