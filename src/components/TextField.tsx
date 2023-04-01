import { TextInput } from "react-native"
import styled, { css } from "styled-components/native"

export const TextField = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.gray[300]
}))`
  ${({ theme }) => css`
    flex: 1;

    min-height: 56px;
    max-height: 56px;

    background: ${theme.colors.gray[700]};
    color: ${theme.colors.white};

    border-radius: 6px;

    font-family: ${theme.fonts.regular};
    font-size: ${theme.fontSizes.md};

    padding: 16px;
  `}
`
