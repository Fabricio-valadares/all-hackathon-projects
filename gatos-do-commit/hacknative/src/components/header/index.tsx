import * as Styled from './styles'
import { StatusBar } from 'react-native';
import { DataHeader } from './types'

const Header = ({ title }: DataHeader) => {
	return (
		<Styled.Container>
			<Styled.Title>{title}</Styled.Title>
			<StatusBar barStyle="light-content" backgroundColor='transparent' translucent />
		</Styled.Container>
	)
}

export default Header;