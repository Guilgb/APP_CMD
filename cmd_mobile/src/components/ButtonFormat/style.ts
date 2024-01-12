import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export type ButtonStyleClicked = 'CLICK' | 'NOCLICK';
type Props = {
	type: ButtonStyleClicked;
};

export const BoxButtonsFormat = styled.View`
	flex-direction: row;
	width: 350px;
	justify-content: center;
	align-self: center;
`;

export const ButtonFormat = styled(TouchableOpacity)<Props>`
	flex: 1;
	height: 38px;
	background-color: ${({ theme, type }) =>
		type === 'NOCLICK' ? theme.COLORS.WHITE : theme.COLORS.BLUE};
	margin: 4px;
	color: ${({ theme, type }) => (type === 'CLICK' ? theme.COLORS.WHITE : theme.COLORS.BLACK)};
	border-radius: 15px;
	justify-content: center;
	align-items: center;
`;

export const TextButtonFormat = styled.Text<Props>`
	font-size: 14px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
	color: ${({ theme, type }) => (type === 'CLICK' ? theme.COLORS.BLACK : theme.COLORS.WHITE)};
	margin: 2px;
`;
