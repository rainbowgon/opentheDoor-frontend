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

export const Title = styled.Text`
  color: ${theme.font1_main};
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