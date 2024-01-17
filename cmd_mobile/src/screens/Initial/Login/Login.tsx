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
	ForgotThePassword,
	ForgotThePasswordtext,
} from './style';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const Login: React.FC = () => {
	const { navigate } = useNavigation();
	const [userLogin, setUserLogin] = useState('');
	return (
		<Countainer>
			<Imageback source={require('../../../assets/sol.png')}>
				<ContentHeader></ContentHeader>
				<ContentBody>
					<BoxInp>
						<TextInp
							placeholder="Email"
							placeholderTextColor={'white'}
							onChangeText={setUserLogin}
						/>
					</BoxInp>
					<BoxInp>
						<TextInp
							placeholder="Password"
							placeholderTextColor={'white'}
							onChangeText={setUserLogin}
						/>
					</BoxInp>

					<LoginButton
						onPress={() => {
							navigate('TabNavigator');
						}}
					>
						<TextLoginButton>Entrar</TextLoginButton>
					</LoginButton>

					<ForgotThePassword>
						<ForgotThePasswordtext>Esqueci minha senha</ForgotThePasswordtext>
					</ForgotThePassword>
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
