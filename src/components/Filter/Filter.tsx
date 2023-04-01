import { TouchableOpacityProps } from "react-native"

import * as Styled from './Filter.styles'
import type { FilterStyleProps } from './Filter.styles'

type FilterProps = TouchableOpacityProps & FilterStyleProps & {
  label: string
}

export function Filter({ label, isActive = false, ...props }: FilterProps ){
  return (
    <Styled.Container isActive={isActive} {...props}>
      <Styled.Label>{label}</Styled.Label>
    </Styled.Container>
  )
}
