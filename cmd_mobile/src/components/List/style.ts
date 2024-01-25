import styled from 'styled-components/native';

export const ItemList = styled.View`
	flex-direction: row;
	width: 325px;
	align-self: center;
	padding-top: 6px;
	padding-bottom: 6px;
`;

export const Tiers = styled.View`
	width: 35px;
	height: 35px;
	background-color: ${({ theme }) => theme.COLORS.BLUE};
	border-radius: 20px;
	justify-content: center;
	align-items: center;
`;

export const NumbersTier = styled.Text`
	font-size: 16px;
	color: ${({ theme }) => theme.COLORS.WHITE};
	font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
`;

export const BoxTextCommander = styled.TouchableOpacity`
	flex: 1;
	height: 35px;
	background-color: white;
	border-color: rgba(47, 45, 44, 0.1);
	border-radius: 14px;
	margin-left: 4px;
	margin-right: 4px;
	justify-items: center;
	elevation: 6;
`;

export const TextCommanders = styled.Text`
	flex: 8;
	font-size: 13px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
	margin-left: 7px;
	padding-top: 8px;
	color: black;
`;

export const Winrate = styled.View`
	width: 57px;
	height: 35px;
	border-radius: 20px;
	background-color: ${({ theme }) => theme.COLORS.BLUE};
	justify-content: center;
	align-items: center;
`;

export const NumbersWinrate = styled.Text`
	font-size: 15px;
	color: ${({ theme }) => theme.COLORS.WHITE};
	font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
`;
