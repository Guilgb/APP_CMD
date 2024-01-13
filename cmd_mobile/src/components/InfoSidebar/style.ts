import styled from 'styled-components/native';

export const InfoSidebar = styled.View`
	flex-direction: row;
	max-width: 325px;
	min-width: 325px;
	max-height: 25px;
	min-height: 25px;
	border-bottom-color: ${({ theme }) => theme.COLORS.BLUE};
	border-bottom-width: 1px;
	align-self: center;
	margin-bottom: 6px;
`;

export const TextTierSideBar = styled.Text`
	flex: 1;
	margin-left: 10px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
	color: ${({ theme }) => theme.COLORS.BLUE};
	font-size: 16px;
	justify-content: center;
`;

export const TextCommanderSideBar = styled.Text`
	flex: 6;
	font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
	color: ${({ theme }) => theme.COLORS.BLUE};
	font-size: 16px;
`;
export const TextWinrateSideBar = styled.Text`
	flex: 1;
	font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
	align-items: flex-start;
	color: ${({ theme }) => theme.COLORS.BLUE};
	font-size: 16px;
`;
