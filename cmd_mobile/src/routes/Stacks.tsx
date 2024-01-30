import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Initial/Home/Home';
import { Login } from '../screens/Initial/Login/Login';
import TabNavigator from './TabNavigator';


const Stack = createStackNavigator();
declare global {
	namespace ReactNavigation {
		interface RootParamList {
			Home: undefined;
			Login: undefined;
			SignUp: undefined;
			CrudDecks: undefined;
			TabNavigator: undefined;
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
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="TabNavigator" component={TabNavigator.TabNavigator} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
