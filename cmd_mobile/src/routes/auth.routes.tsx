import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Initial/Home/Home';
import { Login } from '../screens/Initial/Login/Login';
import { SignUp } from '../screens/Initial/SignUp/SignUp';
import React from 'react';

export type AuthRoutesProps = {
	Home: undefined;
	Login: undefined;
	SignUp: undefined;
};

export type AuthNavigateProps = NativeStackScreenProps<AuthRoutesProps>;
const { Screen, Navigator } = createNativeStackNavigator<AuthRoutesProps>();

export function AuthRoutes() {
	return (
		<Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Screen name="Home" component={Home} />
			<Screen name="Login" component={Login} />
			<Screen name="SignUp" component={SignUp} />
		</Navigator>
	);
}

export default { AuthRoutes };
