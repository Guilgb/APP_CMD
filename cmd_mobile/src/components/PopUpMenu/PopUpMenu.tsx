import { useRef, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
	ButtonMenu,
	ModalOptions,
	OptionButton,
	Options,
	Container,
	EditeButton,
	DeleteButton,
	TextButtonMod,
	OpenButton,
} from './style';
import { Modalize } from 'react-native-modalize';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/useAuth';
import axios from 'axios';
import { api } from '../../service/api';
import { Alert } from 'react-native';

type Props = {
	deckId: string;
};


function PopUpMenu({deckId}: Props) {
	const { navigate } = useNavigation();
	const { user, isUserLoadingStorageData } = useAuth();
	const [visible, setVisible] = useState(false);
	const modalizeRef = useRef<Modalize>(null);

	function onOpen() {
		modalizeRef.current?.open();
	}

	async function handleDelete() {
		try {
			const response = await api.delete(`/deck/${deckId}/user/${user._id}`)
			return response.data;
		} catch (error) {
			if(axios.isAxiosError(error)){
				Alert.alert(error.response?.data.message);
			}
		}
	}

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Container>
				<ButtonMenu onPress={onOpen}>
					<OptionButton></OptionButton>
				</ButtonMenu>
				<ModalOptions ref={modalizeRef} withReactModal snapPoint={100}>
					<Options>
						<OpenButton>
							<TextButtonMod>Abrir</TextButtonMod>
						</OpenButton>
						<EditeButton
							onPress={() => {
								navigate('UpdateMyLists');
							}}
						>
							<TextButtonMod>Editar</TextButtonMod>
						</EditeButton>
						<DeleteButton onPress={() =>{
							handleDelete();
							modalizeRef.current?.close();
						}}>
							<TextButtonMod>Apagar</TextButtonMod>
						</DeleteButton>
					</Options>
				</ModalOptions>
			</Container>
		</GestureHandlerRootView>
	);
}

export { PopUpMenu };
