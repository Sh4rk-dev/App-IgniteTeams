import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    margin: 32px 0;
`;

export const Title = styled.Text`
    text-align: center;

    font-size: ${({ theme }: any) => theme.FONT_SIZE.XL}px;
    font-family: ${({ theme }: any) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }: any) => theme.COLORS.WHITE}

`;

export const Subtitle = styled.Text`
    text-align: center;

    font-size: ${({ theme }: any) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }: any) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }: any) => theme.COLORS.GRAY_300}
`;