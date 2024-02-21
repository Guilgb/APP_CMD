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

type FormDataLogin = {
	email: string;
	senha: string;
};
const Login: React.FC = () => {
	const { navigate } = useNavigation();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	function handleLogin(data: any) {
		console.log(data);
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
							render={({ field: { onChange, onBlur, value } }) => (
								<TextInp
									placeholder="Email"
									placeholderTextColor={'white'}
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
							name="senha"
							render={({ field: { onChange, onBlur, value } }) => (
								<TextInp
									placeholder="Senha"
									placeholderTextColor={'white'}
									onChangeText={onChange}
									value={value}
									onBlur={onBlur}
								/>
							)}
						></Controller>
					</BoxInp>

					<LoginButton
						onPressIn={handleSubmit(handleLogin)}
						onPress={() => {
							navigate('TabRoutes');
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
