import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native';

export const Container = styled(SafeAreaView)`
	flex: 1;
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

export const FormatsInBody = styled.View`
	align-items: center;
`;

export const BoxTextInput = styled.View`
	width: 315px;
	height: 62px;
	align-self: center;
	background-color: ${({ theme }) => theme.COLORS.GREY_BOX};
	border-radius: 16px;
	justify-content: center;
	margin: 10px;
`;

export const TextInputList = styled(TextInput)`
	font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
	color: ${({ theme }) => theme.COLORS.WHITE};
	margin-left: 15px;
`;

export const ButtonListUpdate = styled.TouchableOpacity`
	width: 80px;
	height: 52px;
	background-color: ${({ theme }) => theme.COLORS.BLUE};
	border-radius: 16px;
	justify-content: center;
	margin-top: 10px;
	margin-left: 45px;
`;

export const TextButtonListUpdate = styled.Text`
	color: ${({ theme }) => theme.COLORS.WHITE};
	font-size: 16px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
	align-self: center;
`;
