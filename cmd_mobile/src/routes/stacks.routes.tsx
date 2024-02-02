import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import stackRoutes from './stack.routes';
import { TabRoutes } from './tab.routes';
import { LogStackRoutes } from './log.stack.routes';

const { Screen, Navigator } = createNativeStackNavigator();

export function StacksRoutesMain() {
	return (
		<Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Screen name="HomeScreen" component={stackRoutes.StackRoutes} />
			<Screen name="TabRoutes" component={TabRoutes} />
			<Screen name="UpdateMyLists" component={LogStackRoutes} />
		</Navigator>
	);
}

export default { StacksRoutesMain };
