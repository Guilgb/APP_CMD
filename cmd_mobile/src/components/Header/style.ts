import styled from 'styled-components/native';
import { CaretLeft } from 'phosphor-react-native';

export const Container = styled.View`
	flex: 1;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const Logo = styled.Image`
	width: 55px;
	height: 55px;
	justify-content: center;
	align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
	flex: 1;
`;

export const BackIcon = styled(CaretLeft)`
	color: ${({ theme }) => theme.COLORS.WHIE};
`;
