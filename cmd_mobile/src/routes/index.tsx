import { NavigationContainer } from '@react-navigation/native';
import { AppRoutesMain } from './App.routes';
import { useAuth } from '../hooks/useAuth';
import { AuthRoutes } from './auth.routes';

export function Routes() {
	const { user } = useAuth();
	return (
		<NavigationContainer>
			{user.email ? <AppRoutesMain /> : <AuthRoutes />}
		</NavigationContainer>
	);
}
