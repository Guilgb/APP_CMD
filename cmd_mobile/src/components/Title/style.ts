import styled from 'styled-components/native';
export const Countainer = styled.View`
	margin-bottom: 16px;
`;

export const Title = styled.Text`
	font-size: 25px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
	color: ${({ theme }) => theme.COLORS.WHITE};
	align-self: center;
	justify-content: center;
`;



