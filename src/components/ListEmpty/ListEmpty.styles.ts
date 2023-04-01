import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
  `}
`

export const Message = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[300]};
    font-family: ${theme.fonts.regular};
    font-size: ${theme.fontSizes.sm};
    text-align: center;
  `}
`
