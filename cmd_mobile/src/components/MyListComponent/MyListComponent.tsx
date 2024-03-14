import { PopUpMenu } from '../PopUpMenu/PopUpMenu';
import {
	Container,
	CommanderTextsBox,
	DateListCreateBox,
	CommanderText,
	DateText,
} from './style';
type Props = {
	textCommander: string;
	textPartner?: string;
	dateCreate: string;
	deckId: string;
};
function MyListsComponent({ textCommander, textPartner, dateCreate, deckId }: Props) {
	return (
		<Container>
			<CommanderTextsBox>
				<CommanderText> {textCommander} </CommanderText>
				<CommanderText> {textPartner} </CommanderText>
			</CommanderTextsBox>
			<DateListCreateBox>
				<DateText>{dateCreate}</DateText>
			</DateListCreateBox>
			<PopUpMenu deckId={deckId}/>
		</Container>
	);
}

export { MyListsComponent };
