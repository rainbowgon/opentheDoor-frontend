import styled from 'styled-components/native';
import { theme } from "../../styles/colors";

export const BarGraphView = styled.TouchableOpacity`
margin: 25px;
padding: 15px 10px;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
background-color: ${theme.background4};
border-radius: 14px;
`;