import styled from "styled-components/native"
import { TouchableOpacity } from "react-native"
import { MaterialIcons } from '@expo/vector-icons'

export type ButtonIconVariantStyleProps = 'primary' | 'secondary'

type IconProps = {
  variant: ButtonIconVariantStyleProps
}

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;

  margin-left: 12px;
`

export const Icon =
  styled(MaterialIcons)
  .attrs<IconProps>(({ theme, variant }) => ({
    size: 24,
    color: variant === 'primary' ? theme.colors.success[700] : theme.colors.danger[700]
  })
)``
