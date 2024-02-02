import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Initial/Home/Home';
import { Login } from '../screens/Initial/Login/Login';
import React from 'react';

const { Screen, Navigator } = createNativeStackNavigator();

type StackParamsList = {
	Home: undefined;
	Login: undefined;
};
type StackProps = NativeStackScreenProps<StackParamsList>;

export function StackRoutes() {
	return (
		<Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Screen name="Home" component={Home} />
			<Screen name="Login" component={Login} />
		</Navigator>
	);
}

export default { StackRoutes };
