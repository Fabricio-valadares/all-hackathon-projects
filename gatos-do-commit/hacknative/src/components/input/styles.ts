import styled from "styled-components/native"
import { TextInput } from 'react-native'

export const Container = styled(TextInput)`
	background-color: ${({ theme }) => theme.COLORS.WHITE};
	border-color: 1px red solid;
	color: ${({ theme }) => theme.COLORS.GRAY_600};
	font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
	font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;

	margin: 0 10px 15px 10px;
	border-radius: 6px;
	padding: 16px;

	border-left-width: 1px;
	border-left-color: ${({ theme }) => theme.COLORS.GRAY_200};

	border-top-width: 1px;
	border-top-color: ${({ theme }) => theme.COLORS.GRAY_200};

	border-right-width: 1px;
	border-right-color: ${({ theme }) => theme.COLORS.GRAY_200};

 	border-bottom-width: 1px;
 	border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_200};

`;
