import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet, TouchableHighlight } from 'react-native'

interface CardProps {
	$color: string;
}

export const Container = styled(SafeAreaView)`
	flex: 1;
	background-color: ${({ theme }) => theme.COLORS.WHITE};
	justify-content: center;
	background-color: #5b3165;
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
	width: 30%;
`;

//---------------------------------------------

export const BodyHome = styled.View`
	background-color: #f5f5f5;
	flex: 1;

	border-top-left-radius: 23px;
	border-top-right-radius: 23px;
`;

export const HeaderHome = styled.View`
	justify-content: center;
	background-color: #5b3165;
	height: 13%;
`;

export const TitleHeader = styled(Title)`
	text-align: center;
	color: white;
`;

export const TitleContainerPrimary = styled(Title)`
	font-size: 23px;
	font-weight: 800;
	color: #45254D;
`;

export const ContainerPrimary = styled.View`
	height: 15%;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	padding: 10px;

`;

export const ButtonContainerPrimary = styled(TouchableHighlight)`
	width: auto;
	height: auto;

	background-color: #433273;
	color: ${({ theme }) => theme.COLORS.WHITE};
	justify-content: center;
	align-items: center;
	padding: 10px;
	border-radius: 5px;
`;

export const ContainerSecondary = styled.View`
	height: 25%;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	padding:  10px;
	background-color: #f1f1f7;
`;

export const CardOne = styled.View`
	width: 49%;
	height: 80%;
	background-color: #63ac84;
	border-radius: 10px;
	padding-bottom: 20px;
`;

export const CardTwo = styled.View`
	width: 49%;
	height: 80%;
	background-color: #45254D;
	border-radius: 10px;
	padding-bottom: 20px;
`;

export const TextCard = styled.Text`
	font-size: 22px;
	font-weight: 500;
	color: #fff;
`;

export const ConatinerIcon = styled.View`
	padding-top: 20;
	padding-left: 20;
`;

export const ContainerCardSecondary = styled.View`
	height: 50%;
	width: 100%;
	align-items: center;
	justify-content: center;
`;

//--------------------------------------------------

export const ContainerThird = styled.View`
	flex-direction: column;
	width: 100%;
	height: 65%;
`;

export const BodyContainerThird = styled.View`
	flex-direction: column;
	width: 100%;
	padding: 10px;
`;

export const TitleContainerThird = styled.Text`
	font-size: 23px;
	font-weight: 800;
	color: #45254D;
`;

export const Card = styled.View<CardProps>`
	width: 100%;
	background-color: ${({ $color }) => $color};
	flex-direction: row;
	align-items: center;
	padding: 3%;
	border-radius: 10px;
	margin-bottom: 20px;
`;

export const BodyData = styled.View`
	margin-left: 10px;
	flex-direction: row;
	width: 90%;
	justify-content: space-between;
`;

export const TitleCard = styled.Text`
	font-size: 16px;
	font-weight: 700;
	color: #fff;
`;

export const ValueCard = styled.Text`
	color: #fff;
`;

export const DateCard = styled.Text`
	color: #fff;
`;

export const ContainerTitle = styled.View`
	height: 60px;
	padding: 20px 10px 0 10px;
	margin-bottom: 10px;
`;

export const styles = StyleSheet.create({
	shadow: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.18,
		shadowRadius: 1.00,
		elevation: 12,
	},
  });
