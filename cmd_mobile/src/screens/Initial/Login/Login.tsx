import { useForm, Controller } from 'react-hook-form';
import {
	ButtonRegister,
	BoxInp,
	colors,
	Countainer,
	ContentBody,
	ContentFooter,
	ContentHeader,
	ForgotThePassword,
	Imageback,
	ForgotThePasswordtext,
	LoginButton,
	Tittle,
	TextButtonRegister,
	TextInp,
	TextLoginButton,
} from './style';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup';
import { useAuth } from '../../../hooks/useAuth';
import { Alert } from 'react-native';
import { useState } from 'react';

type FormDataLogin = {
	email: string;
	password: string;
};

const Login: React.FC = () => {
	const {signIn} = useAuth();
	const { navigate } = useNavigation();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormDataLogin>();

	async function handleLogin({email, password}: FormDataLogin) {
		try {
			await signIn(email, password);

		} catch (error) {
			Alert.alert('Erro ao fazer login', 'Email ou senha inválidos');

		}
	}
	return (
		<Countainer>
			<Imageback source={require('../../../assets/sol.png')}>
				<ContentHeader></ContentHeader>
				<ContentBody>
					<BoxInp>
						<Controller
							control={control}
							name="email"
							rules={{ required: 'Informe seu email'}}
							render={({ field: { onChange, onBlur, value } }) => (
								<TextInp
									placeholder="Email"
									placeholderTextColor={'white'}
									keyboardType="email-address"
									onChangeText={onChange}
									value={value}
									onBlur={onBlur}
								/>
							)}
						/>
					</BoxInp>
					<BoxInp>
						<Controller
							control={control}
							rules={{ required: 'Informe sua senha'}}
							name="password"
							render={({ field: { onChange, onBlur, value } }) => (
								<TextInp
									placeholder="Senha"
									placeholderTextColor={'white'}
									onChangeText={onChange}
									secureTextEntry={true}
									value={value}
									onBlur={onBlur}
								/>
							)}
						></Controller>
					</BoxInp>

					<LoginButton
						
						onPress={handleSubmit(handleLogin)}
						
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

						<ButtonRegister
							onPress={() => {
								navigate('SignUp');
							}}
						>
							<TextButtonRegister> Cadastrar-se </TextButtonRegister>
						</ButtonRegister>
					</LinearGradient>
				</ContentFooter>
			</Imageback>
		</Countainer>
	);
};

export { Login };
