import {
	Container,
	CommanderTextsBox,
	DateListCreateBox,
	CommanderText,
	DateText,
	OptionsBar,
	ImageSearch,
} from './style';
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
			<OptionsBar> 
			<ImageSearch />
			</OptionsBar>
		</Container>
	);
}

export { MyListsComponent };
