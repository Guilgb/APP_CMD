import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Initial/Home/Home';
import { Login } from '../screens/Initial/Login/Login';

const Stack = createStackNavigator();
declare global {
	namespace ReactNavigation {
		interface RootParamList {
			Home: undefined;
			Login: undefined;
			SignUp: undefined;
			CrudDecks: undefined;
		}
	}
}

export default function StackComponent() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: '#ab7a3d',
					},
					headerTintColor: '#fff',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
					headerShown: false,
				}}
			>
				<Stack.Screen name="Home" component={Home}></Stack.Screen>
				<Stack.Screen name="Login" component={Login}></Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
