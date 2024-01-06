import { ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import theme from './src/theme';
import { useFonts, Sora_600SemiBold, Sora_400Regular } from '@expo-google-fonts/sora';

import StackComponent from './src/routes/Stacks';

const STYLES = ['default', 'dark-content', 'light-content'] as const;
const TRANSITIONS = ['fade', 'slide', 'none'] as const;

const App: React.FC = () => {
	const [fontsLoaded] = useFonts({ Sora_400Regular, Sora_600SemiBold });

	return (
		<ThemeProvider theme={theme}>
			{fontsLoaded ? <StackComponent /> : <ActivityIndicator />}
		</ThemeProvider>
	);
};

export default App;
