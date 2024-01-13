import { InfoSidebar, TextTierSideBar, TextCommanderSideBar, TextWinrateSideBar } from './style';

export function InfoSideBar() {
	return (
		<InfoSidebar>
			<TextTierSideBar>#</TextTierSideBar>
			<TextCommanderSideBar>Commander</TextCommanderSideBar>
			<TextWinrateSideBar>%</TextWinrateSideBar>
		</InfoSidebar>
	);
}
