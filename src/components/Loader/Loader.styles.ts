import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: ${theme.colors.gray[600]};
  `}
`

export const Indicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.success[700]
}))``
