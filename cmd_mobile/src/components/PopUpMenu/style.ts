import styled, { css } from 'styled-components/native';
import { SimpleLineIcons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { Modal } from 'react-native';
import { Modalize } from 'react-native-modalize';

export type ButtonIconSearchStyleProps = 'CLICK' | 'NOCLICK';

export type Props = {
	type: ButtonIconSearchStyleProps;
};

export const Container = styled.View`
	flex: 1;
`;
export const ButtonMenu = styled.TouchableOpacity``;
export const ModalOptions = styled(Modalize)``;
export const Options = styled.View`
	flex-direction: row;
	flex: 1;
	border-radius: 12px;
	border-color: '#64A4B0';
	justify-content: space-around;
`;
export const ButtosOptions = styled.TouchableOpacity``;
export const TextButtonOptions = styled.Text`
	font-size: 12px;
`;

export const OpenButton = styled.TouchableOpacity`
	width: 90px;
	height: 45px;
	border-radius: 12px;
	background-color: ${({ theme }) => theme.COLORS.BLUE};
	justify-content: center;
	align-items: center;
	margin: 20px;
`;
export const EditeButton = styled.TouchableOpacity`
	width: 90px;
	height: 45px;
	border-radius: 12px;
	background-color: ${({ theme }) => theme.COLORS.ORANGE};
	justify-content: center;
	align-items: center;
	margin: 20px;
`;
export const DeleteButton = styled.TouchableOpacity`
	width: 90px;
	height: 45px;
	border-radius: 12px;
	background-color: ${({ theme }) => theme.COLORS.RED};
	justify-content: center;
	align-items: center;
	margin: 20px;
`;
export const TextButtonMod = styled.Text`
	font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
	color: ${({ theme }) => theme.COLORS.WHITE};
	font-size: 10px;
`;

export const DeleteIcon: any = styled(AntDesign).attrs<Props>(({ theme, type }) => ({
	size: 20,
	color: '#FFFFFF',
	name: 'delete',
}));
``;

export const OptionButton: any = styled(SimpleLineIcons).attrs<Props>(({ theme, type }) => ({
	size: 20,
	color: '#FFFFFF',
	name: 'options-vertical',
}))`
	align-self: center;
	margin-top: 8px;
`;
