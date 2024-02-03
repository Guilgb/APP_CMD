import {
	colors,
	Countainer,
	ContentBody,
	ContentFooter,
	ButtonLetsGo,
	TextButtonLetsGo,
	Imageback,
	BoxInp,
	TextInp,
	RegisterButton,
	TextRegisterButton,
} from './style';
import { Header } from '../../../components/Header/index';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

const SignUp: React.FC = () => {
	const navigation = useNavigation();
	function goBack() {
		navigation.goBack();
	}

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	function handleRegister(data: any) {
		console.log(data);
	}

	return (
		<Countainer>
			<Imageback source={require('../../../assets/sol.png')}>
				<Header showBackButton={false} />
				<ContentBody>
					<BoxInp>
						<Controller
							control={control}
							name="UserName"
							render={({ field: { onChange, onBlur, value } }) => (
								<TextInp
									placeholder="Nome do Usuário"
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
							name="Email"
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
							name="PassWord"
							render={({ field: { onChange, onBlur, value } }) => (
								<TextInp
									placeholder="Senha"
									placeholderTextColor={'white'}
									onChangeText={onChange}
									value={value}
									onBlur={onBlur}
								/>
							)}
						/>
					</BoxInp>
					<RegisterButton onPressIn={handleSubmit(handleRegister)}>
						<TextRegisterButton>Registar-se</TextRegisterButton>
					</RegisterButton>
				</ContentBody>
				<ContentFooter>
					<LinearGradient colors={colors} style={{ flex: 1 }}>
						<ButtonLetsGo onPress={goBack}>
							<TextButtonLetsGo> Voltar a Tela de Login </TextButtonLetsGo>
						</ButtonLetsGo>
					</LinearGradient>
				</ContentFooter>
			</Imageback>
		</Countainer>
	);
};

export { SignUp };
