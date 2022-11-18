import * as Styled from './styles'
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components'

const Input = ({...rest}: TextInputProps | any) => {
	const theme = useTheme();

	return (
		<Styled.Container placeholderTextColor={theme.COLORS.GRAY_300} {...rest} />
	)
}

export default Input;
