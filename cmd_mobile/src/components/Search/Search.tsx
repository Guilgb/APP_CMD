import { TextSearchInput, CoutainerSearch, ButtonSearch, ImageSearch } from './style';
import { TextInputProps } from 'react-native';

export function Search() {
	return (
		<CoutainerSearch>
			<ImageSearch source={require('../../assets/lupa.png')} />
			<TextSearchInput placeholder="Pesquisar Torneios ..." placeholderTextColor={'#FFF'} />
			<ButtonSearch />
		</CoutainerSearch>
	);
}
