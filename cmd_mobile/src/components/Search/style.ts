import styled from 'styled-components/native';
import { TextInput, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import { IStyledComponent } from 'styled-components/dist/types';

export type ButtonIconSearchStyleProps = 'CLICK' | 'NOCLICK';

export type Props = {
	type: ButtonIconSearchStyleProps;
};

export const CoutainerSearch = styled.View`
	flex-direction: row;
	min-height: 52px;
	max-height: 52px;
	background-color: ${({ theme }) => theme.COLORS.GREY_BOX};
	margin-top: 18px;
	margin-bottom: 5px;
	margin-left: 32px;
	margin-right: 32px;
	border-radius: 16px;
	elevation: 6;
`;

export const TextSearchInput = styled(TextInput)`
	flex: 1;
	color: ${({ theme }) => theme.COLORS.GREY_TEXT};
	font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const ButtonSearch = styled(TouchableOpacity)`
	min-height: 44px;
	max-height: 44px;
	min-width: 44px;
	max-width: 44px;
	background-color: ${({ theme }) => theme.COLORS.BLUE};
	border-radius: 12px;
	align-self: center;
	margin-right: 10px;
`;

export const IconSearch: any = styled(AntDesign).attrs<Props>(({ theme, type }) => ({
	size: 25,
	color: '#FFFFFF',
	name: 'rightcircleo',
}));
`
	align-self: center;
	padding: 10px;
`;

export const ImageSearch: any = styled(Feather).attrs<Props>(({ theme, type }) => ({
	size: 20,
	color: '#FFFFFF',
	name: 'search',
}))`
	align-self: center;
	padding: 10px;
`;
