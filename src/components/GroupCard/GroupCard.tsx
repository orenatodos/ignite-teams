import type { TouchableOpacityProps } from 'react-native'

import * as Styled from './GroupCard.styles'

type GroupCardProps = TouchableOpacityProps & {
  title: string
}

export function GroupCard({ title, ...props }: GroupCardProps){
  return (
    <Styled.Container {...props}>
      <Styled.Icon />
      <Styled.Title>{title}</Styled.Title>
    </Styled.Container>
  )
}
