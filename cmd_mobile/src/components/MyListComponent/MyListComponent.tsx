import { Container, CommanderTextsBox, DateListCreateBox, CommanderText, DateText } from './style';
type Props = {
	textCommander: string;
	dateCreate: string;
};
function MyListsComponent({ textCommander, dateCreate }: Props) {
	return (
		<Container>
			<CommanderTextsBox>
				<CommanderText> {textCommander}</CommanderText>
			</CommanderTextsBox>
			<DateListCreateBox>
				<DateText>{dateCreate}</DateText>
			</DateListCreateBox>
		</Container>
	);
}

export { MyListsComponent };
