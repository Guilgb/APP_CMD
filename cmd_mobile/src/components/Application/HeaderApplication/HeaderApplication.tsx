import { LinearGradient } from 'expo-linear-gradient';
import {ContentHeader, colors } from './style';

export function HeaderApplication() {
	return (
		<ContentHeader>
			<LinearGradient
				colors={colors}
				style={{ flex: 1 }}
				start={{ x: 0, y: 0.5 }}
				end={{ x: 2, y: 0 }}
				locations={[0.1, 0.5, 0.7, 1]}
			></LinearGradient>
		</ContentHeader>
	);
}
