import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import {
	colors,
	Countainer,
	ContentHeader,
	ContentBody,
	ContentFooter,
	Tittle,
	SubTittle,
	ButtonLetsGo,
	TextButtonLetsGo,
	Imageback,
} from './styled';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../../components/Header/index';

const Home: React.FC = () => {
	const { navigate } = useNavigation();
	return (
		<Countainer>
			<Imageback source={require('../../../assets/sol.png')}>
				<Header showBackButton />
				<ContentBody></ContentBody>
				<ContentFooter>
					<LinearGradient colors={colors} style={{ flex: 1 }}>
						<Tittle>Descubra mais</Tittle>
						<Tittle>estratégias em</Tittle>
						<Tittle>nosso aplicativo.</Tittle>
						<SubTittle>Esse o seu portal para desvendar segredos,</SubTittle>
						<SubTittle>e triunfar sobre desafios místicos.</SubTittle>
						<ButtonLetsGo
							onPress={() => {
								navigate('Login');
							}}
						>
							<TextButtonLetsGo> Vamos lá </TextButtonLetsGo>
						</ButtonLetsGo>
					</LinearGradient>
				</ContentFooter>
			</Imageback>
		</Countainer>
	);
};

export { Home };
