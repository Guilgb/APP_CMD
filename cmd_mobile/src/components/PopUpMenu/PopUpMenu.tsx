import { useRef, useState } from 'react';
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
	);
}

export { PopUpMenu };
