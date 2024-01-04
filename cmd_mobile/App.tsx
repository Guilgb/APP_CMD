import { StatusBar } from 'react-native';
import React from 'react';

import StackComponent from './src/routes/Stacks';

const STYLES = ['default', 'dark-content', 'light-content'] as const;
const TRANSITIONS = ['fade', 'slide', 'none'] as const;

const App: React.FC = () => {
	return <StackComponent />;
};

export default App;
