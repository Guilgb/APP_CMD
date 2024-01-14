import { StatusBar, SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import theme from './src/theme';
import { useFonts, Sora_600SemiBold, Sora_400Regular } from '@expo-google-fonts/sora';
import { Loading } from './src/components/Loading/index';
import StackComponent from './src/routes/Stacks';

const STYLES = ['default', 'dark-content', 'light-content'] as const;
const TRANSITIONS = ['fade', 'slide', 'none'] as const;

const App: React.FC = () => {
	const [fontsLoaded] = useFonts({ Sora_400Regular, Sora_600SemiBold });

	return (
		
			<ThemeProvider theme={theme}>
				<StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
				{fontsLoaded ? <StackComponent /> : <Loading />}
			</ThemeProvider>

	);
};

export default App;
