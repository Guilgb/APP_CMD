import { useRef, useState } from 'react';
import {
	ButtonMenu,
	ModalOptions,
	OptionButton,
	Options,
	ButtosOptions,
	TextButtonOptions,
	DeleteIcon,
	Container,
	EditeButton,
	DeleteButton,
	TextButtonMod,
	OpenButton,
} from './style';
import { SafeAreaView } from 'react-native';
import { Modalize } from 'react-native-modalize';

function PopUpMenu() {
	const [visible, setVisible] = useState(false);
	const modalizeRef = useRef<Modalize>(null);

	function onOpen() {
		modalizeRef.current?.open();
	}
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
					<EditeButton>
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
