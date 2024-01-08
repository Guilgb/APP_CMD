import { Container, Logo, BackButton, BackIcon } from './style';

type Props = {
	showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
	return (
		<Container>
			{showBackButton && (
				<BackButton>
					<BackIcon />
				</BackButton>
			)}

			<Logo source={require('../../assets/logo.png')} />
		</Container>
	);
}
