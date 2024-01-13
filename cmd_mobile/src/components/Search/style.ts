import styled from 'styled-components/native';
import { TextInput, TouchableOpacity } from 'react-native';

export const CoutainerSearch = styled.View`
	flex-direction: row;
	min-height: 52px;
	max-height: 52px;
	background-color: rgba(125, 124, 124, 1);
	margin-left: 32px;
	margin-right: 32px;
	border-radius: 16px;
`;

export const ImageSearch = styled.Image`
	min-height: 30px;
	max-height: 30px;
	min-width: 30px;
	max-width: 30px;
	align-self: center;
	margin-left: 10px;
`;

export const TextSearchInput = styled(TextInput)`
	flex: 1;
	color: ${({ theme }) => theme.COLORS.WHITE};
	font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
	margin-left: 10px;
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
