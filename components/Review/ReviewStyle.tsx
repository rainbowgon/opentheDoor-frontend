import styled from 'styled-components/native';
import { theme } from "../../styles/colors";

export const ReviewContainer = styled.View`
  justify-content: center;
  width: auto;
  margin: 5px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${theme.background4};
  `;

export const ReviewUserContainer = styled.View`
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  `;


export const ReviewUserInfo = styled.View`
  width: 90%;
  padding: 0 10px;
`;

export const ReviewUserInfoItem = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: auto;
  `;

export const ReviewUserPrivacy = styled.View`
  justify-content: space-between;
  `;

export const ReviewUserPrivacyInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  `;

export const ReviewUserImage = styled.Image`
  width: 30px;
  height: 30px;
  overflow: hidden;
  border-radius: 100px;
`;

export const ReviewIcon = styled.Image`
  width: 25px;
  height: 25px;
  tint-color: ${theme.primary3_main};
`;

export const ReviewTitle = styled.Text`
  color: ${theme.font1_main};
  font-size:14px;
  font-weight: 600;
  margin-right: 10px;
`;

export const ReviewContent = styled.Text`
  color: ${theme.font1_main};
  font-size:14px;
  font-weight: 600;
`;

export const ReviewContentDisabled = styled.Text`
  color: #79747E44;
  font-size:14px;
  font-weight: 700;
  
  text-shadow: 0px 0px 15px rgba(255, 255, 255, 1);
`;

export const ReviewSubContent = styled.Text`
  color: ${theme.font5};
  font-size:10px;
  font-weight: 600;
`;
