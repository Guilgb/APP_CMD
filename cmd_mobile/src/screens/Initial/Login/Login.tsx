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
	TextInp,
	BoxInp,
	LoginButton,
	TextLoginButton,
} from './style';
import { LinearGradient } from 'expo-linear-gradient';

const Login: React.FC = () => {
	return (
		<Countainer>
			<Imageback source={require('../../../assets/sol.png')}>
				<ContentHeader></ContentHeader>
				<ContentBody>
					<BoxInp>
						<TextInp placeholder="Email" placeholderTextColor={'white'} />
					</BoxInp>
					<BoxInp>
						<TextInp placeholder="Password" placeholderTextColor={'white'} />
					</BoxInp>

					<LoginButton>
						<TextLoginButton>Entrar</TextLoginButton>
					</LoginButton>
				</ContentBody>
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
