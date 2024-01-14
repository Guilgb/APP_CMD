import { TouchableOpacityProps } from 'react-native';
import { ButtonStyleClicked, CountainerButtonsFormat, TitleButtonFormat } from './style';

type Props = TouchableOpacityProps &
	ButtonStyleClicked & {
		title: string;
		isActive?: boolean;
	};

export function ButtonsFormat({ title, isActive = true, ...rest }: Props) {
	return (
		<CountainerButtonsFormat isActive={isActive} {...rest}>
			<TitleButtonFormat>{title}</TitleButtonFormat>
		</CountainerButtonsFormat>
	);
}
