import styled, { css } from "styled-components/native"
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.gray[600]};

    padding: 24px;
  `}
`

export const Form = styled.View`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.gray[700]};

    flex-direction: row;
    justify-content: center;

    border-radius: 6px;
  `}
`

export const HeaderList = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;

  margin: 32px 0 12px;
`

export const NumberOfPlayers = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[300]};
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSizes.sm};
  `}
`
