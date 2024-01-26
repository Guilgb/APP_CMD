import styled, { css } from 'styled-components/native';
import { Feather, SimpleLineIcons } from '@expo/vector-icons';

export type ButtonIconSearchStyleProps = 'CLICK' | 'NOCLICK';

export type Props = {
	type: ButtonIconSearchStyleProps;
};

export const Container = styled.View`
	flex-direction: row;
	width: 330px;
	border-radius: 20px;
	align-self: center;
`;

export const CommanderTextsBox = styled.TouchableOpacity`
	flex: 12;
	${({ theme }) => css`
		background-color: ${theme.COLORS.WHITE};
	`};
	height: 43px;
	border-radius: 20px;
	margin-right: 14px;
	margin-bottom: 10px;
	justify-content: center;
	elevation: 6;
`;

export const DateListCreateBox = styled.View`
	flex: 5;
	${({ theme }) => css`
		background-color: ${theme.COLORS.BLUE};
		font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
	`};
	height: 43px;
	border-radius: 20px;
	justify-content: center;
	elevation: 6;
`;

export const CommanderText = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
		color: ${theme.COLORS.BLACK};
	`};
	font-size: 14px;
	margin-left: 10px;
`;

export const DateText = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
	`};

	align-self: center;
	font-size: 14px;
`;

export const OptionsBar = styled.TouchableOpacity`
	flex: 1;
`;

export const ImageSearch: any = styled(SimpleLineIcons).attrs<Props>(({ theme, type }) => ({
	size: 20,
	color: '#FFFFFF',
	name: 'options-vertical',
}))`
	align-self: center;
	margin-top: 8px;
`;
