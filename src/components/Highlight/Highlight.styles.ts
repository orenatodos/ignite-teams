import styled, { css } from "styled-components/native"

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    margin: 32px 0;
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.xl};
    font-family: ${theme.fonts.bold};
    text-align: center;
  `}
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[300]};
    font-size: ${theme.fontSizes.md};
    font-family: ${theme.fonts.regular};
    text-align: center;
  `}
`
