import styled from 'styled-components/native';
import { theme } from "./colors";

const PageContainer = styled.ScrollView`
    flex:1;
    background-color: ${theme.background5_main};
`;
export default PageContainer;

const Title = styled.Text`
    font-weight: 700;
    color: ${theme.font1_main};
`;

const Content = styled.Text`
    font-weight: 600;
    color: ${theme.font1_main};
`;
