import { ButtonIcon } from '@components/ButtonIcon'
import * as Styled from './PlayerCard.styles'

type PlayerCardProps = {
  name: string
  onRemove(): void
}

export function PlayerCard({ name, onRemove }: PlayerCardProps){
  return (
    <Styled.Container>
      <Styled.Icon name="person" />

      <Styled.Name>{name}</Styled.Name>

      <ButtonIcon
        icon="close"
        variant='secondary'
        onPress={onRemove}
      />
    </Styled.Container>
  )
}
