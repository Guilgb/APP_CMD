import {
	ItemList,
	Tiers,
	TextCommanders,
	BoxTextCommander,
	NumbersTier,
	Winrate,
	NumbersWinrate,
} from './style';

type Props = {
	numbersTiers: number;
	textCommander: string;
	winrate: number;
};

export function ListTiers({ numbersTiers, textCommander, winrate }: Props) {
	return (
		<ItemList>
			<Tiers>
				<NumbersTier> {numbersTiers} </NumbersTier>
			</Tiers>
			<BoxTextCommander>
				<TextCommanders> {textCommander} </TextCommanders>
			</BoxTextCommander>
			<Winrate>
				<NumbersWinrate>{winrate}%</NumbersWinrate>
			</Winrate>
		</ItemList>
	);
}
