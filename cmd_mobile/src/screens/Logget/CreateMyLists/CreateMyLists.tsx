import { useState } from 'react';
import { FlatList } from 'react-native';
import {
	Container,
	ContentBody,
	ContentFooter,
	ContentHeader,
	Gradient,
	colors,
	FormatsInBody,
	BoxTextInput,
	TextInputList,
	ButtonListSave,
	TextButtonListSave,
} from './style';
import { ButtonsFormat } from '../../../components/ButtonFormat/ButtonsFormat';
import { TextTitle } from '../../../components/Title/Title';

function CreateMyLists() {
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
					<TextTitle title={'Cadastro de Listas'} />
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
				<BoxTextInput>
					<TextInputList placeholder="Nome da Lista" placeholderTextColor={'white'} />
				</BoxTextInput>
				<BoxTextInput>
					<TextInputList placeholder="Comandante" placeholderTextColor={'white'} />
				</BoxTextInput>
				<BoxTextInput>
					<TextInputList
						placeholder="Parceiro ou Antecedente"
						placeholderTextColor={'white'}
					/>
				</BoxTextInput>
				<BoxTextInput>
					<TextInputList placeholder="Link da lista" placeholderTextColor={'white'} />
				</BoxTextInput>

				<ButtonListSave>
					<TextButtonListSave> Save </TextButtonListSave>
				</ButtonListSave>
			</ContentBody>
			<ContentFooter></ContentFooter>
		</Container>
	);
}

export { CreateMyLists };
