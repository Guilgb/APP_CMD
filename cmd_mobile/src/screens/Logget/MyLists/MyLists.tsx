import { useState } from 'react';
import { FlatList } from 'react-native';
import { ButtonsFormat } from '../../../components/ButtonFormat/ButtonsFormat';
import { Search } from '../../../components/Search/Search';
import { TextTitle } from '../../../components/Title/Title';
import { ContentFooter } from '../Tournments/styled';
import { Container, ContentBody, ContentHeader, Gradient, colors, FormatsInBody } from './style';
import { InfoSideBarMyLists } from '../../../components/InfoBarMyLists/InfoBarMyLists';

function MyLists() {
	const [format, setFormat] = useState('cEDH');

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
			</ContentBody>
			<ContentFooter></ContentFooter>
		</Container>
	);
}

export { MyLists };
