import { useState } from 'react';
import { FlatList } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import {
	Container,
	ContentBody,
	ContentFooter,
	FormatsInBody,
	BoxTextInput,
	TextInputList,
	ButtonListUpdate,
	TextButtonListUpdate,
} from './style';
import { ButtonsFormat } from '../../../components/ButtonFormat/ButtonsFormat';
import { Title } from '../../../components/Title/style';

function handleList(data: any) {
	console.log(data);
}

function UpdateMyLists() {
	const [format, setFormat] = useState('cEDH');
	const [textFormat, setTextFormat] = useState('cEDH');
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();
	return (
		<Container>
			<ContentBody>
				<Title> Editar Lista</Title>
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
										isActive={item === format}
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
						name="nameList"
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
						name="commander"
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
						name="partner"
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
						name="linkList"
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

				<ButtonListUpdate onPress={handleSubmit(handleList)}>
					<TextButtonListUpdate> Update </TextButtonListUpdate>
				</ButtonListUpdate>
			</ContentBody>
			<ContentFooter></ContentFooter>
		</Container>
	);
}

export default { UpdateMyLists };
