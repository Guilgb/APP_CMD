import { NavigationContainer } from '@react-navigation/native';
import { AppRoutesMain } from './App.routes';
import { useAuth } from '../hooks/useAuth';
import { AuthRoutes } from './auth.routes';
import { Loading } from '../components/Loading';

export function Routes() {
	const { user, isUserLoadingStorageData } = useAuth();
	if(isUserLoadingStorageData){
		return <Loading />
	}
	
	return (
		<NavigationContainer>
			{user._id ? <AppRoutesMain /> : <AuthRoutes />}
		</NavigationContainer>
	);
}
