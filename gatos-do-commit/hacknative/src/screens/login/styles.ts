import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"
import { TouchableHighlight } from 'react-native'

export const Container = styled(SafeAreaView)`
	flex: 1;
	background-color: ${({ theme }) => theme.COLORS.WHITE};
	justify-content: center;
`;

export const Title = styled.Text`
	font-size: 30px;
	text-align: left;
	margin: 0 10px 15px 10px;
	font-weight: 700;
`;

export const SubTitle = styled.Text`
	font-size: 17px;
	text-align: left;
	padding-bottom: 40px;
	margin: 0 10px 15px 10px;
`;

export const ButtonSubmit = styled(TouchableHighlight)`
	background-color: ${({ theme }) => theme.COLORS.PURPLE};
	color: ${({ theme }) => theme.COLORS.WHITE};
	justify-content: center;
	align-items: center;
	height: 56px;
	margin: 0 10px 15px 10px;
	border-radius: 5px;
`;

export const TextButton = styled.Text`
	color: ${({ theme }) => theme.COLORS.WHITE};
	font-size: 18px;
`;

export const TextRedirect= styled.Text`
	color: ${({ theme }) => theme.COLORS.GRAY_600};
	font-size: 18px;
	text-align: center;
	text-decoration: underline;
`;
