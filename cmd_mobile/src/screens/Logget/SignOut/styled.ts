import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
	flex: 1;
	background-color: white;
`;

export const ContentHeader = styled.View`
	flex: 3;
`;

export const ContentBody = styled.View`
	flex: 6;
	background-color: rgba(220, 220, 220, 1);
`;
export const ContentFooter = styled.View``;

export const Gradient = styled(LinearGradient)``;

export const colors = ['#313131', '#222222', '#1C1C1C', '#1C1C1C'];

export const CountainerButtonsFormat = styled.TouchableOpacity`
	${({ theme }) => css`
		background-color: ${theme.COLORS.RED};
	`}
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


