import { useState, useEffect, useCallback } from 'react';
import { FlatList } from 'react-native';
import { ButtonsFormat } from '../../../components/ButtonFormat/ButtonsFormat';
import { Search } from '../../../components/Search/Search';
import { TextTitle } from '../../../components/Title/Title';
import { ContentFooter } from '../Tournments/styled';
import { Container, ContentBody, ContentHeader, Gradient, colors, FormatsInBody } from './style';
import { InfoSideBarMyLists } from '../../../components/InfoBarMyLists/InfoBarMyLists';
import { MyListsComponent } from '../../../components/MyListComponent/MyListComponent';
import { api } from '../../../service/api';
import { useFocusEffect } from '@react-navigation/native';
import { UserDeckDTO } from '../../../dtos/UserDeck';
import { useAuth } from '../../../hooks/useAuth';




function MyLists() {
	const { user, isUserLoadingStorageData } = useAuth();
	const [format, setFormat] = useState('cEDH');
	const [listsCommander, setListCommander] = useState<UserDeckDTO[]>();
	const guardar = [
		[
			{ commander: 'Tevesh Szat ...', partner: ' Rograkh ...', data: '16/01/2024' },
			{ commander: 'Kinnan, Bonder Prodigy', data: '11/02/2023' },
			{ commander: 'Tivit, Seller of Secrets', data: '28/01/2022' },
			{ commander: 'Liesa, Shroud of Dusk', data: '02/01/2022' },
			{ commander: 'Atraxa, Praetors', data: '01/01/2021' },
			{ commander: 'The Ur-Dragon', data: '28/08/2021' },
			{ commander: 'Yuriko, the Tiger', data: '05/05/2021' },
			{ commander: 'Kenrith, the Returned King', data: '04/03/2021' },
			{ commander: 'Shorikai, Genesis Engine', data: '02/03/2020' },
			{ commander: 'Meren of Clan Nel Toth', data: '20/05/2013' },
		]
	]
	
	async function fatchDecksByUser() {
		try {
			const rota = `/user/${user._id}`;
			const response = await api.get(rota);
			setListCommander(response.data);
		} catch (error) {
			const isError = error instanceof Error;
			const title = isError ? error.message : 'Não foi possível carregar os decks';
		}
	}
	// useEffect(() => {
	// 	fatchDecksByUser();
	// }, []);
	useFocusEffect(useCallback(() => {
		fatchDecksByUser();
	}, [listsCommander]));

	return (
		<Container>
			<ContentHeader>
				<Gradient colors={colors} style={{ flex: 1 }} locations={[0.1, 0.5, 0.7, 1]}>
					<Search />
					<TextTitle title={'Minhas Listas'} />
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
					<InfoSideBarMyLists />
				</FormatsInBody>
				<FlatList
					data={listsCommander}
					keyExtractor={(item) => item._id}
					renderItem={({ item }) => (
						<MyListsComponent
							textCommander={item.Commander}
							textPartner={item.Partner}
							dateCreate={'16/01/2024'}
							deckId={item._id}
						/>
					)}
				/>
			</ContentBody>
			<ContentFooter></ContentFooter>
		</Container>
	);
}

export { MyLists };

