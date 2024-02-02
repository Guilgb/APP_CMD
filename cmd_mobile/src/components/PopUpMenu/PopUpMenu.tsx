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

function PopUpMenu() {
	const [visible, setVisible] = useState(false);
	const modalizeRef = useRef<Modalize>(null);

	function onOpen() {
		modalizeRef.current?.open();
	}
	const { navigate } = useNavigation();
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
						<DeleteButton>
							<TextButtonMod>Apagar</TextButtonMod>
						</DeleteButton>
					</Options>
				</ModalOptions>
			</Container>
		</GestureHandlerRootView>
	);
}

export { PopUpMenu };
