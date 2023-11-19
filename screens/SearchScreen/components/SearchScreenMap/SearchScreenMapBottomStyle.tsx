import styled from 'styled-components/native';
import { theme } from "../../../../styles/colors";


export const MapContainer = styled.View`
  position: relative;
  display: flex;
  margin-bottom: 50px;
  justify-content: center;
  align-items: center;
`;

export const ListViewButton = styled.View`
  position: absolute;
  bottom: 15%;
  width: 90%;
`;

export const SearchTitle = styled.Text` 
  margin-top: 20px;
  color: ${theme.font1_main};
  font-size: 16px;
  font-weight: 600;
`;
