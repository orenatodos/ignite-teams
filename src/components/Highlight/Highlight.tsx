import * as Styled from './Highlight.styles'

type HighlightProps = {
  title: string
  subtitle: string
}

export function Highlight({ title, subtitle }: HighlightProps){
  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Subtitle>{subtitle}</Styled.Subtitle>
    </Styled.Container>
  )
}
