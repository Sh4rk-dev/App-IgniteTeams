import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";

export const  Container = styled.View`
    width: 100%;

    margin-top: 16px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image `
    width: 46px;
    height: 55px;
`;

export const BackButton = styled.TouchableOpacity`
    flex:1;    
`;

export const BackIcon = styled(CaretLeft).attrs(({theme}:any) => ({
    color: theme.COLORS.WHITE,
    size: 32,
}))``;
