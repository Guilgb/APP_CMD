import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import {
	colors,
	Countainer,
	ContentBody,
	ContentFooter,
	ContentHeader,
	Tittle,
	ButtonRegister,
	TextButtonRegister,
	Imageback,
} from './style';
import { LinearGradient } from 'expo-linear-gradient';

const Login: React.FC = () => {
	return (
		<Countainer>
			<Imageback  source={require('../../../assets/sol.png')}>
				<ContentHeader></ContentHeader>
				<ContentBody></ContentBody>
				<ContentFooter>
					<LinearGradient colors={colors} style={{ flex: 1 }}>
						<Tittle>Ainda não se</Tittle>
						<Tittle>cadastrou?</Tittle>

						<ButtonRegister>
							<TextButtonRegister> Cadastrar-se </TextButtonRegister>
						</ButtonRegister>
					</LinearGradient>
				</ContentFooter>
			</Imageback>
		</Countainer>
	);
};

export { Login };
