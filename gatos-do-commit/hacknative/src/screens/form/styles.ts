import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet, TouchableHighlight } from 'react-native'

export const Container = styled(SafeAreaView)`
	flex: 1;
	background-color: ${({ theme }) => theme.COLORS.WHITE};
	justify-content: center;
`;

export const Title = styled.Text`
	font-size: 30px;
	text-align: left;
	margin: 40px 0 0 10px;
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

export const FormContainer = styled.View`
	flex: 1;
	justify-content: space-between;
`;

export const BodyForm = styled.View`
	justify-content: flex-end;
	align-items: center;
	height: 17% ;
`;

export const ContainerPrimary = styled.View`
	flex: 1;
	justify-content: space-between;
	padding-top: 20%;
`;

export const ContainerPicker = styled.View`
	background-color: #FFFFFF;
	color: #202024;
	font-family: 'Roboto_400Regular';
	font-size: 16;
	margin-left: 10;
	padding: 4px;
	margin-bottom: 15;
	margin-right: 10;
	border-radius: 6;
	border-left-width: 1;
	border-left-color: #C4C4CC;
	border-top-width: 1;
	border-top-color: #C4C4CC;
	border-right-width: 1;
	border-right-color: #C4C4CC;
	border-bottom-width: 1;
	border-bottom-color: #C4C4CC;
`;

export const styles = StyleSheet.create({
	input: {
		padding: 16,
		backgroundColor: '#FFFFFF',
		color: '#202024',
		fontFamily: 'Roboto_400Regular',
		fontSize: 16,
		marginLeft: 10,
		marginBottom: 15,
		marginRight: 10,
		borderRadius: 6,
		borderLeftWidth: 1,
		borderLeftColor: '#C4C4CC',
		borderTopWidth: 1,
		borderTopColor: '#C4C4CC',
		borderRightWidth: 1,
		borderRightColor: '#C4C4CC',
		borderBottomWidth: 1,
		borderBottomColor: '#C4C4CC',
	},
  });
