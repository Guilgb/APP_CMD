import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UpdateMyLists } from '../screens/Logget/UpdateMyLists/UpdateMyLists';
import TabNavigator from './TabNavigator';
declare global {
	namespace ReactNavigation {
		interface RootParamList {
			UpdateMyLists: undefined;
		}
	}
}
const Stack = createStackNavigator();

const StackComponentLogget = () => {
	return (
		<NavigationContainer independent={true}>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="UpdateMyLists" component={UpdateMyLists} />
				<Stack.Screen name="TabNavigation" component={TabNavigator.TabNavigator} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export { StackComponentLogget };
