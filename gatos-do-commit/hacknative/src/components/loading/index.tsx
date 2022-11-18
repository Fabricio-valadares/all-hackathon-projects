import * as Styled from './styles'
import { StatusBar } from 'react-native';

const Loading = () => {
	return (
		<Styled.Container>
			<Styled.LoadIndicator />
			<StatusBar barStyle="light-content" backgroundColor='transparent' translucent />
		</Styled.Container>
	)
}

export default Loading;