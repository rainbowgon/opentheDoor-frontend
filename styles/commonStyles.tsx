import styled from 'styled-components/native';
import { theme } from "./colors";
import { Dimensions } from 'react-native';

const PageContainer = styled.ScrollView`
    flex:1;
    background-color: ${theme.background5_main};
`;
export default PageContainer;

export const FixedPageContainer = styled.View`
    flex: 1;
    background-color: ${theme.background5_main};
`;

export const Container = styled.View`
    height: ${Dimensions.get("window").height + 60};
    background-color: ${theme.background5_main};
`;

const Title = styled.Text`
    font-weight: 700;
    color: ${theme.font1_main};
`;

const Content = styled.Text`
    font-weight: 600;
    color: ${theme.font1_main};
`;
