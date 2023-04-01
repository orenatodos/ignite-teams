import styled, { css } from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled.View`
  width: 100%;
  height: 56px;

  background-color: ${({ theme }) => theme.colors.gray[500]};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;

  margin-bottom: 16px;
`

export const Name = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[200]};
    flex: 1;
    font-size: ${theme.fontSizes.md};
    font-family: ${theme.fonts.regular};
  `}
`

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  color: theme.colors.gray[200],
  size: 24
}))`
  margin-left: 16px;
  margin-right: 4px;
`
