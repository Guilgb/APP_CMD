import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

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
