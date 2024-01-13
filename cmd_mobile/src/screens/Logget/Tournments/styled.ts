import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
	flex: 1;
`;

export const ContentHeader = styled.View`
	flex: 3;
`;

export const ContentBody = styled.View`
	flex: 5;
	background-color: rgba(220, 220, 220, 1);
`;
export const ContentFooter = styled.View`
	flex: 1;
	background-color: yellow;
`;

export const Gradient = styled(LinearGradient)``;

export const colors = ['#313131', '#222222', '#1C1C1C', '#1C1C1C'];
