import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export type ButtonStyleClicked = {
	isActive?: boolean;
};

export const CountainerButtonsFormat = styled(TouchableOpacity)<ButtonStyleClicked>`
	${({ theme, isActive }) =>
		(isActive === true &&
			css`
				background-color: ${theme.COLORS.BLUE};
			`) ||
		(isActive === false &&
			css`
				background-color: ${theme.COLORS.WHITE};
			`)};

	height: 40px;
	width: 80px;
	border-radius: 12px;
	margin: 6px;
	align-items: center;
	justify-content: center;
	elevation: 6;
`;

export const TitleButtonFormat = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
		color: ${theme.COLORS.GREY_TEXT};
	`}
`;
