import {
	Container,
	ContentHeader,
	ContentBody,
	ContentFooter,
	colors,
	Gradient,
	FormatsInBody,
} from './styled';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { TextTitle } from '../../../components/Title/Title';
import { ListTiers } from '../../../components/List/List';
import { ButtonsFormat } from '../../../components/ButtonFormat/ButtonsFormat';
import { Search } from '../../../components/Search/Search';
import { InfoSideBar } from '../../../components/InfoSidebar/InfoSidebar';

type Props = {
	numbersTiers: any;
	textCommander: string;
	winrate: number;
};

function Tournments() {
	const [tournments, setTournments] = useState([
		'Tevesh Szat ... / Rograkh ...',
		'Kinnan, Bonder Prodigy',
		'Tivit, Seller of Secrets',
		'Liesa, Shroud of Dusk',
		'Atraxa, Praetors',
		'The Ur-Dragon',
		'Yuriko, the Tiger',
		'Kenrith, the Returned King',
		'Shorikai, Genesis Engine',
		'Meren of Clan Nel Toth',
	]);

	const [format, setFormat] = useState('cEDH');
	return (
		<Container>
			<ContentHeader>
				<Gradient
					colors={colors}
					style={{ flex: 1 }}
					start={{ x: 0, y: 0.5 }}
					end={{ x: 2, y: 0 }}
					locations={[0.1, 0.5, 0.7, 1]}
				>
					<Search />
					<TextTitle title={'Ultimos Torneios'} />
				</Gradient>
			</ContentHeader>
			<ContentBody>
				<FormatsInBody>
					<FlatList
						data={['cEDH', 'c500', 'Conquest', 'Casual']}
						keyExtractor={(item) => item}
						renderItem={({ item }) => (
							<ButtonsFormat
								title={item}
								isActive={item === format}
								onPress={() => setFormat(item)}
							/>
						)}
						horizontal
					/>
				</FormatsInBody>
				<InfoSideBar />
				<FlatList
					data={tournments}
					keyExtractor={(item) => item}
					renderItem={({ item }) => (
						<ListTiers numbersTiers={1} textCommander={item} winrate={50} />
					)}
				/>
			</ContentBody>
			<ContentFooter></ContentFooter>
		</Container>
	);
}

export { Tournments };
