import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled(SafeAreaView)`
	background-color: ${({ theme }) => theme.COLORS.WHITE};
	justify-content: center;
	align-items: center;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
	font-size: ${({ theme }) => RFPercentage(theme.FONT_SIZE.XL)};
`;