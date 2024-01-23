import styled, { css } from 'styled-components/native';

export const Container = styled.View`
	flex-direction: row;
	width: 330px;
	border-radius: 20px;
	align-self: center;
`;

export const CommanderTextsBox = styled.View`
	flex: 3;
	${({ theme }) => css`
		background-color: ${theme.COLORS.WHITE};
	`};
	font-size: 12px;
	height: 35px;
	border-radius: 20px;
	margin-right: 14px;
	margin-bottom: 10px;
	justify-content: center;
`;

export const DateListCreateBox = styled.View`
	flex: 1;
	${({ theme }) => css`
		background-color: ${theme.COLORS.BLUE};
		font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
	`};
	height: 35px;
	border-radius: 20px;
	justify-content: center;
`;

export const CommanderText = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
		color: ${theme.COLORS.BLACK};
	`};
	font-size: 14px;
	align-content: center;
	margin-left: 10px;
`;

export const DateText = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
	`};

	align-self: center;
	font-size: 14px;
`;
