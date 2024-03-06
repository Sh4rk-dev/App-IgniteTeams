import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  text-align: center;

  font-size: ${({ theme }: any) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }: any) => theme.COLORS.GRAY_300};
`;
