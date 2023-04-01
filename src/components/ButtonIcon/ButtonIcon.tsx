import { MaterialIcons } from '@expo/vector-icons'
import type { TouchableOpacityProps } from 'react-native'

import * as Styled from './ButtonIcon.styles'

type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap
  variant?: Styled.ButtonIconVariantStyleProps
}

export function ButtonIcon({ icon, variant = 'primary', ...props }: ButtonIconProps){
  return (
    <Styled.Container {...props}>
      <Styled.Icon
        name={icon}
        variant={variant}
      />
    </Styled.Container>
  )
}
