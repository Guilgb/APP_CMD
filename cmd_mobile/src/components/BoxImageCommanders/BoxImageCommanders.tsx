import { ButtonsFormat } from '../ButtonFormat/ButtonsFormat';
import { BoxImageCountainer, ImageBox, TextCommander } from './style';

type Props = {
	title: string;
};

function BoxImageCommander({ title }: Props) {
	return (
		<BoxImageCountainer>
			<ImageBox source={require('../../assets/tevesh.png')}>
				<ButtonsFormat title="cEDH" />
				<TextCommander>{title}</TextCommander>
			</ImageBox>
		</BoxImageCountainer>
	);
}

export { BoxImageCommander };
