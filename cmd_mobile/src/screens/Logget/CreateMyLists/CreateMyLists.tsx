import { useState } from 'react';
import { FlatList } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
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
import { api } from '../../../service/api'
import axios from 'axios';
import { Alert } from 'react-native';
import { useAuth } from '../../../hooks/useAuth';


type FormDataDeck = {
	name_deck: string;
	format: string;
	Commander: string;
	Partner: string;
	Link: string;
};

function CreateMyLists() {
	const { user, isUserLoadingStorageData } = useAuth();
	const [Stateformat, setFormat] = useState('cEDH');
	const [textFormat, setTextFormat] = useState('cEDH');
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormDataDeck>();
	
	async function handleList({name_deck: name_deck, Commander: Commander, Partner: Partner, Link: Link}: FormDataDeck) {
		try {
			const format = Stateformat
			const response = await api.post(`/deck/${user._id}`, {name_deck, format, Commander, Partner, Link})
			return response.data;
		} catch (error) {
			if(axios.isAxiosError(error)){
				Alert.alert(error.response?.data.message);
			}
		}
	}
	
	
	return (
		<Container>
			<ContentHeader>
				<Gradient colors={colors} style={{ flex: 1 }} locations={[0.1, 0.5, 0.7, 1]}>
					<TextTitle title={'Cadastro de Listas'} />
				</Gradient>
			</ContentHeader>
			<ContentBody>
				<Controller
					control={control}
					name="format"
					render={({ field: { onChange, onBlur, value } }) => (
						<FormatsInBody>
							<FlatList
								data={['cEDH', 'c500', 'Conquest', 'Casual']}
								keyExtractor={(item) => item}
								renderItem={({ item }) => (
									<ButtonsFormat
										title={item}
										isActive={item === Stateformat}
										onPressIn={() => onChange(item)}
										onPress={() => {
											setFormat(item);
										}}
										onBlur={onBlur}
									/>
								)}
								horizontal
							/>
						</FormatsInBody>
					)}
				/>
				<BoxTextInput>
					<Controller
						control={control}
						name="name_deck"
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInputList
								placeholder="Nome da Lista"
								placeholderTextColor={'white'}
								onChangeText={onChange}
								onBlur={onBlur}
								value={value}
							/>
						)}
					/>
				</BoxTextInput>
				<BoxTextInput>
					<Controller
						control={control}
						name="Commander"
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInputList
								placeholder="Comandante"
								placeholderTextColor={'white'}
								onChangeText={onChange}
								onBlur={onBlur}
								value={value}
							/>
						)}
					/>
				</BoxTextInput>
				<BoxTextInput>
					<Controller
						control={control}
						name="Partner"
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInputList
								placeholder="Parceiro ou Antecedente"
								placeholderTextColor={'white'}
								onChangeText={onChange}
								onBlur={onBlur}
								value={value}
							/>
						)}
					/>
				</BoxTextInput>
				<BoxTextInput>
					<Controller
						control={control}
						name="Link"
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInputList
								placeholder="Link da lista"
								placeholderTextColor={'white'}
								onChangeText={onChange}
								onBlur={onBlur}
								value={value}
							/>
						)}
					/>
				</BoxTextInput>

				<ButtonListSave
					onPressIn={handleSubmit(handleList)}
					// onPress={}
				>
					<TextButtonListSave> Save </TextButtonListSave>
				</ButtonListSave>
			</ContentBody>
			<ContentFooter></ContentFooter>
		</Container>
	);
}

export { CreateMyLists };
