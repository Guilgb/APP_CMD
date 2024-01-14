import { TouchableOpacityProps } from 'react-native-gesture-handler';
import { TextSearchInput, CoutainerSearch, ButtonSearch, ImageSearch, IconSearch } from './style';

type Props = TouchableOpacityProps & {};

export function Search({}: Props) {
	return (
		<CoutainerSearch>
			<ImageSearch />
			<TextSearchInput placeholder="Pesquisar Torneios ..." placeholderTextColor={'#FFF'} />
			<ButtonSearch></ButtonSearch>
		</CoutainerSearch>
	);
}
