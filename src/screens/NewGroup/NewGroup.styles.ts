import styled, { css } from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context'
import { UsersThree } from "phosphor-react-native";

export const Container = styled(SafeAreaView)`
  ${({ theme }) => css`
    flex: 1;
    background: ${theme.colors.gray[600]};
    padding: 24px;
  `}
`

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 56,
  color: theme.colors.success[700]
}))`
  align-self: center;
`
