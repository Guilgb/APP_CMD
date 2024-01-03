import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { style, colors } from './style';
import { LinearGradient } from 'expo-linear-gradient';

const Login: React.FC = () => {
	return (
		<View style={style.Countainer}>
			<ImageBackground source={require('../../../assets/sol.png')} style={style.Image}>
				<View style={style.ContentHeader}></View>
				<View style={style.ContentBody}></View>
				<View style={style.ContentFooter}>
					<LinearGradient colors={colors} style={{ flex: 1 }}>
						<Text style={style.Tittle}>Ainda não se</Text>
						<Text style={style.Tittle}>cadastrou?</Text>

						<TouchableOpacity style={style.ButtonSignUp}>
							<Text style={style.TextButton}> Vamos lá </Text>
						</TouchableOpacity>
					</LinearGradient>
				</View>
			</ImageBackground>
		</View>
	);
};

export { Login };
