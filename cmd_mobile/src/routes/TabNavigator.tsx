import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Foundation, FontAwesome5, AntDesign } from '@expo/vector-icons';
import { Tournments } from '../screens/Logget/Tournments/Tournments';
import { CreateMyLists } from '../screens/Logget/CreateMyLists/CreateMyLists';
import { MyLists } from '../screens/Logget/MyLists/MyLists';

const Tab = createBottomTabNavigator();
const StyleTab = StyleSheet.create({
	tabB: {
		height: 70,
		position: 'absolute',
		backgroundColor: '#ffffff',
		elevation: 0,
		borderTopColor: 'transparent',
		borderTopWidth: 0,
	},
	blurViewStyles: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	},
});

const TabNavigator = () => {
	return (
		<NavigationContainer independent={true}>
			<Tab.Navigator
				screenOptions={{
					headerShown: false,
					tabBarHideOnKeyboard: true,
					tabBarShowLabel: false,
					tabBarStyle: StyleTab.tabB,
				}}
			>
				<Tab.Screen
					name="Tournments"
					component={Tournments}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Foundation name="home" color={color} size={24}></Foundation>
						),
					}}
				/>
				<Tab.Screen
					name="MyLists"
					component={MyLists}
					options={{
						tabBarIcon: ({ color, size }) => (
							<AntDesign name="menu-unfold" color={color} size={24}></AntDesign>
						),
					}}
				/>
				<Tab.Screen
					name="CreateMyLists"
					component={CreateMyLists}
					options={{
						tabBarIcon: ({ color, size }) => (
							<FontAwesome5 name="plus" color={color} size={24}></FontAwesome5>
						),
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default { TabNavigator };
