import { TouchableOpacity } from "react-native"
import styled, { css } from "styled-components/native"

export type FilterStyleProps = {
  isActive?: boolean
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  ${({ theme, isActive }) => css`
    border-radius: 4px;
    margin-right: 12px;

    height: 38px;
    width: 70px;

    align-items: center;
    justify-content: center;

    ${isActive && css`
      border: 1px solid ${theme.colors.success[700]};
    `}
  `}
`

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSizes.sm};
    text-transform: uppercase;
  `}
`
