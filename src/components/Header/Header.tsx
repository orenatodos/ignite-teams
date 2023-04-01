
import { useNavigation } from '@react-navigation/native'

import logoImg from '@assets/logo.png'

import * as Styled from './Header.styles'

type HeaderProps = {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: HeaderProps){
  const navigation = useNavigation()

  function handleGoBack(){
    navigation.navigate('groups')
  }

  return (
    <Styled.Container>
      {showBackButton && (
        <Styled.BackButton onPress={handleGoBack}>
          <Styled.BackIcon />
        </Styled.BackButton>
      )}

      <Styled.Logo source={logoImg} />
    </Styled.Container>
  )
}
