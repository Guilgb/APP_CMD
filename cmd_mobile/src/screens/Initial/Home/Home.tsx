import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { style, colors } from './styled';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
	const { navigate } = useNavigation();
	return (
		<View style={style.Countainer}>
			<ImageBackground source={require('../../../assets/sol.png')} style={style.Image}>
				<View style={style.ContentHeader}></View>
				<View style={style.ContentBody}></View>
				<View style={style.ContentFooter}>
					<LinearGradient colors={colors} style={{ flex: 1 }}>
						<Text style={style.Tittle}>Descubra mais</Text>
						<Text style={style.Tittle}>estratégias em.</Text>
						<Text style={style.Tittle}>nosso aplicativo.</Text>
						<Text style={style.SubTittle}>
							Esse o seu portal para desvendar segredos,
						</Text>
						<Text style={style.SubTittle}>e triunfar sobre desafios místicos.</Text>
						<TouchableOpacity
							style={style.ButtonLetsGo}
							onPress={() => {
								navigate('Login');
							}}
						>
							<Text style={style.TextButton}> Vamos lá </Text>
						</TouchableOpacity>
					</LinearGradient>
				</View>
			</ImageBackground>
		</View>
	);
};

export { Home };
