import {
	Container,
	ContentHeader,
	ContentBody,
	colors,
	Gradient,
	CountainerButtonsFormat,
	TitleButtonFormat
} from './styled';

import { useAuth } from '../../../hooks/useAuth';

type Props = {
	numbersTiers: any;
	textCommander: string;
	winrate: number;
};

function SignOut() {
	const { signOut } = useAuth();
	return (
		<Container>
			<ContentHeader>
				<Gradient colors={colors} style={{ flex: 1 }} locations={[0.1, 0.5, 0.7, 1]}>
					
				</Gradient>
			</ContentHeader>
			<ContentBody>
			</ContentBody>
		</Container>
	);
}

export { SignOut };
