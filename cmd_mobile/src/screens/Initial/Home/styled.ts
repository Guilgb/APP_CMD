import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { CaretLeft } from 'phosphor-react-native';

export const Countainer = styled(SafeAreaView)`
	flex: 1;
`;
export const Image = styled.View`
	flex: 1;
`;

export const ContentHeader = styled.View`
	flex: 1;
`;

export const ContentBody = styled.View`
	flex: 1;
`;
export const ContentFooter = styled.View`
	flex: 1;
`;

export const Tittle = styled.Text`
	text-align: center;
	font-size: 34px;
	color: ${({ theme }) => theme.COLORS.WHITE};
	justify-content: center;
	margin-top: -10px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
`;

export const SubTittle = styled.Text`
	text-align: center;
	font-size: 14px;
	color: ${({ theme }) => theme.COLORS.GREY_TEXT};
	justify-content: center;
	font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const ButtonLetsGo = styled.TouchableOpacity`
	width: 315px;
	height: 62px;
	background-color: ${({ theme }) => theme.COLORS.BLUE};
	align-items: center;
	justify-content: center;
	border-radius: 16px;
	margin-top: 20px;
	align-self: center;
`;

export const TextButtonLetsGo = styled.Text`
	font-size: 16px;
	color: ${({ theme }) => theme.COLORS.WHITE};
	font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
`;

export const Imageback = styled.ImageBackground`
	flex: 1;
`;

export const BackIcon = styled(CaretLeft)`
	color: white;
`;

export const colors = [
	'rgba(5, 5, 5, 0.075)',
	'rgba(0, 0, 0, 0.863)',
	'rgb(0, 0, 0)',
	'rgb(0, 0, 0)',
	'rgb(0, 0, 0)',
	'rgb(0, 0, 0)',
	'rgb(0, 0, 0)',
	'rgb(0, 0, 0)',
	'rgb(0, 0, 0)',
];
