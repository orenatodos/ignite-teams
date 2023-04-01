import { TouchableOpacity } from 'react-native'
import styled, { css, DefaultTheme } from 'styled-components/native'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
}

const buttonVariants = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.success[700]};
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.danger[700]};
  `
}

export const Button = styled(TouchableOpacity)<ButtonProps>`
  ${({ theme, variant = 'primary' }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;

    border-radius: 6px;

    min-height: 56px;
    max-height: 56px;

    ${!!variant && buttonVariants[variant](theme)}
  `}
`

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSizes.md};
  `}
`
