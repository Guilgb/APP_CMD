import { Title, Countainer } from './style';

type Props = {
	title: string;
};
export function TextTitle({ title }: Props) {
	return (
		<Countainer>
			<Title>{title}</Title>
		</Countainer>
	);
}
