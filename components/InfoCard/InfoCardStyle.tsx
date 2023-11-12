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

export const ContentImage = styled.Image`
  height: 160px;
  width: 120px;
  margin-right: 15px;
  `;

export const ContentInfo = styled.View`
  flex: 1;
  margin: auto 0;
`;

export const ContentButtonList = styled.View`
  height: auto;
  display: flex;
  justify-content: space-between;
  `

export const BookmarkItem = styled.View`
  height: auto;
  display: flex;
  background-color: red;
  justify-content: right;
`

export const TitleText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: ${theme.font1_main};
  `;

export const SubTitleText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${theme.font1_main};
`;

export const ContentText = styled.Text`
  font-weight: lighter;
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
`;