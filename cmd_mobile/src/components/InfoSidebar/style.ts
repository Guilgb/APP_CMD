import styled, { css } from 'styled-components/native';

export const InfoSidebar = styled.View`
	${({ theme }) => css`
		border-bottom-color: ${theme.COLORS.BLUE};
	`}
	flex-direction: row;
	max-width: 325px;
	min-width: 325px;
	max-height: 25px;
	min-height: 25px;

	border-bottom-width: 1px;
	align-self: center;
	margin-top: 18px;
	margin-bottom: 8px;
`;

export const TextTierSideBar = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
		color: ${theme.COLORS.BLUE};
	`}
	flex: 1;
	margin-left: 10px;
	font-size: 16px;
	justify-content: center;
`;

export const TextCommanderSideBar = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
		color: ${theme.COLORS.BLUE};
	`}
	flex: 6;
	font-size: 16px;
`;
export const TextWinrateSideBar = styled.Text`
	flex: 1;
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
		color: ${theme.COLORS.BLUE};
	`}
	align-items: flex-start;
	font-size: 16px;
`;
