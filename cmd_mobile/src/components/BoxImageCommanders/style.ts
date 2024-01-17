import styled from 'styled-components/native';

export const BoxImageCountainer = styled.View`
	width: 315px;
	height: 140px;
	border-radius: 12px;
	background-color: black;
	align-self: center;
`;

export const ImageBox = styled.ImageBackground`
	flex: 1;
`;

export const TextCommander = styled.Text`
	margin-top: 50px;
	margin-left: 10px;
	font-size: 18px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
	color: ${({ theme }) => theme.COLORS.WHITE};
`;
