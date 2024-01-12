import { TouchableOpacityProps } from 'react-native';
import { BoxButtonsFormat, ButtonFormat, TextButtonFormat, ButtonStyleClicked } from './style';

type Props = TouchableOpacityProps & {
	formatName: string;
	type?: ButtonStyleClicked;
};
export function ButtonsFormat(formatName: Props, type: any, ...rest: any[]) {
	type = 'CLICk';
	return (
		<BoxButtonsFormat>
			<ButtonFormat type={type} {...rest}>
				<TextButtonFormat type={type}>cEDH</TextButtonFormat>
			</ButtonFormat>
			<ButtonFormat type={'NOCLICK'}>
				<TextButtonFormat type={'NOCLICK'}>c500</TextButtonFormat>
			</ButtonFormat>

			<ButtonFormat type={'NOCLICK'}>
				<TextButtonFormat type={'NOCLICK'}>Conquest</TextButtonFormat>
			</ButtonFormat>

			<ButtonFormat type={'NOCLICK'}>
				<TextButtonFormat type={'NOCLICK'}>Casual</TextButtonFormat>
			</ButtonFormat>
		</BoxButtonsFormat>
	);
}
