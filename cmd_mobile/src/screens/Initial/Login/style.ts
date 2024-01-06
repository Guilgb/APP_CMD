import styled from 'styled-components/native';

export const Countainer = styled.View`
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
	font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
	justify-content: center;
	margin-top: -10px;
`;

export const ButtonRegister = styled.TouchableOpacity`
	width: 315px;
	height: 62px;
	background-color: ${({ theme }) => theme.COLORS.BLUE};
	align-items: center;
	justify-content: center;
	border-radius: 16px;
	margin-top: 20px;
	align-self: center;
`;

export const TextButtonRegister = styled.Text`
	font-size: 16px;
	color: white;
	font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
`;

export const Imageback = styled.ImageBackground`
	flex: 1;
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
export const BoxInp = styled.View`
	width: 315px;
	height: 52px;
	background-color: ${({ theme }) => theme.COLORS.GREY_BOX};
	align-self: center;
	border-radius: 16px;
	justify-content: center;
	margin-top: 15px;
`;
export const TextInp = styled.TextInput`
	color: ${({ theme }) => theme.COLORS.WHITE};
	padding-left: 20px;
	justify-content: center;
	font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const LoginButton = styled.TouchableOpacity`
	width: 230px;
	height: 45px;
	background-color: ${({ theme }) => theme.COLORS.BLUE};
	border-radius: 16px;
	align-self: center;
	margin-top: 15px;
	justify-content: center;
`;
export const TextLoginButton = styled.Text`
	font-size: 16px;
	color: white;
	align-self: center;
	font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
`;
