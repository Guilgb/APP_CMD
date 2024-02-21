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
import { api } from '../../../service/api'
import axios from 'axios';
import { Alert } from 'react-native';

type FormDataRegister = {
	name: string;
	password: string;
	email: string;
};

const SignUp: React.FC = () => {
	const navigation = useNavigation();
	function goBack() {
		navigation.goBack();
	}

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormDataRegister>();

	async function handleRegister({name, email, password}: FormDataRegister) { 
		try {
			const response = await api.post('/user', {name, password, email})
			console.log(response.data);
		} catch (error) {
			if(axios.isAxiosError(error)){
				Alert.alert(error.response?.data.message);
			}
		}
	}

	return (
		<Countainer>
			<Imageback source={require('../../../assets/sol.png')}>
				<Header showBackButton={false} />
				<ContentBody>
					<BoxInp>
						<Controller
							control={control}
							name="name"
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
							name="password"
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
