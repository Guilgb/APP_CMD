import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import UpdateMyLists from '../screens/Logget/UpdateMyLists/UpdateMyLists';

const { Screen, Navigator } = createNativeStackNavigator();

export function LogStackRoutes() {
	return (
		<Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Screen name="UpdateMyList" component={UpdateMyLists.UpdateMyLists} />
		</Navigator>
	);
}

export default { LogStackRoutes };
