import * as Styled from './ListEmpty.styles'

type ListEmptyProps = {
  message: string
}

export function ListEmpty({ message }: ListEmptyProps){
  return (
    <Styled.Container>
      <Styled.Message>{message}</Styled.Message>
    </Styled.Container>
  )
}
