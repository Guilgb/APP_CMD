import { TouchableOpacityProps } from 'react-native';
import { CountainerButtonsFormat, TitleButtonFormat } from './style';

type Props = {
	title: string;
};

export function SignOutButton({ title }: Props) {
	return (
		<CountainerButtonsFormat >
			<TitleButtonFormat>{title}</TitleButtonFormat>
		</CountainerButtonsFormat>
	);
}
