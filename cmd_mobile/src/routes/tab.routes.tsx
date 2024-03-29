import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { Foundation, FontAwesome5, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { Tournments } from '../screens/Logget/Tournments/Tournments';
import { CreateMyLists } from '../screens/Logget/CreateMyLists/CreateMyLists';
import { MyLists } from '../screens/Logget/MyLists/MyLists';
import { SignOut } from '../screens/Logget/SignOut/SignOut';
import { useAuth } from '../hooks/useAuth';

type TabRoutes = {
	Tournments: undefined;
	MyLists: undefined;
	CreateMyLists: undefined;
	SignOut: undefined;
};

export type TabNavigationRoutesProps = BottomTabNavigationProp<TabRoutes>;

const { Screen, Navigator } = createBottomTabNavigator<TabRoutes>();

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

export function TabRoutes() {
	const { signOut } = useAuth();
	return (
		<Navigator
			screenOptions={{
				headerShown: false,
				tabBarHideOnKeyboard: true,
				tabBarShowLabel: false,
				tabBarStyle: StyleTab.tabB,
			}}
		>
			<Screen
				name="Tournments"
				component={Tournments}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Foundation name="home" color={color} size={24}></Foundation>
					),
				}}
			/>
			<Screen
				name="MyLists"
				component={MyLists}
				options={{
					tabBarIcon: ({ color, size }) => (
						<AntDesign name="menu-unfold" color={color} size={24}></AntDesign>
					),
				}}
			/>
			<Screen
				name="CreateMyLists"
				component={CreateMyLists}
				options={{
					tabBarIcon: ({ color, size }) => (
						<FontAwesome5 name="plus" color={color} size={24}></FontAwesome5>
					),
				}}
			/>
			<Screen 
				name="SignOut"
				component={SignOut}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialIcons name="exit-to-app" color={color} size={24} onPress={signOut}></MaterialIcons>
					),
				}}
			/>
		</Navigator>
	);
}
