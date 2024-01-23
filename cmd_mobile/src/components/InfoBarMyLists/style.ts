import styled, { css } from 'styled-components/native';

export const BoxInfo = styled.View`
	${({ theme }) => css`
		border-bottom-color: ${theme.COLORS.BLUE};
	`}
	flex-direction: row;
	width: 330px;
	height: 30px;
	align-self: center;
	margin: 14px;
	border-bottom-width: 1px;
`;

export const InfoBarNameCommander = styled.Text`
	flex: 2;
	${({ theme }) => css`
		color: rgba(100, 164, 176, 1);
		font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
	`}
	font-size: 16px;
`;

export const InfoBarDateCommander = styled.Text`
	flex: 1;
	${({ theme }) => css`
		color: ${theme.COLORS.BLUE};
		font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
	`}
	font-size: 16px;
`;
