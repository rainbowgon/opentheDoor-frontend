import styled from 'styled-components/native';
import { theme } from "../../styles/colors";

export const CardView = styled.View`
  display: flex;
  flex-direction: row;

  overflow: hidden;
  height: fit-content;
  width: auto;
  margin: 10px;
  
  border-radius: 10px;
  background-color: ${theme.background4};
  `;

export const ImageGuideView = styled.View`
  position: relative;

  height: 150px;
  width: 110px;
  margin-right: 15px;
  
  overflow: hidden;
  `;

export const ContentImage = styled.Image`
  position: absolute;

  height: 150px;
  width: 110px;
  object-fit: cover;
  resizeMode: cover;
  `;

export const ContentInfo = styled.View`
  flex: 1;
  margin: 5px 0;
  justify-content: space-evenly;
`;

export const ContentButtonList = styled.View`
  height: auto;
  display: flex;
  justify-content: space-between;
  `

export const BookmarkItem = styled.View`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin: 15px 0 0 15px;
  `

export const BookmarkView = styled.View`
  display: flex;
`

export const TitleText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: ${theme.font1_main};
  `;

export const SubTitleText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: ${theme.font3};
`;

export const ContentText = styled.Text`
  font-size: 10px;
  font-weight: 400;
  color: ${theme.font5};
`;

export const ContentInfoList = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IconImage = styled.Image`
  height: 25px;
  width: 25px;
  tint-color: ${theme.background1};
  `;

export const StarImage = styled.Image`
  height: 25px;
  width: 25px;
  tint-color: ${theme.primary3_main};
`;

export const StarText = styled.Text`
font-weight: bold;
font-size: 18px;
color: ${theme.primary3_main};
`;
