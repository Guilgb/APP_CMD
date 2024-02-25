import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthRoutes from './auth.routes';
import { TabRoutes } from './tab.routes';
import { LogStackRoutes } from './log.stack.routes';

const { Screen, Navigator } = createNativeStackNavigator();

export function AppRoutesMain() {
	return (
		<Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			{/* <Screen name="HomeScreen" component={AuthRoutes.AuthRoutes} /> */}
			<Screen name="TabRoutes" component={TabRoutes} />
			<Screen name="UpdateMyLists" component={LogStackRoutes} />
		</Navigator>
	);
}

export default { AppRoutesMain };
