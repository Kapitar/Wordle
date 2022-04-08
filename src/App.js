import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import {View, ScreenSpinner, AdaptivityProvider, AppRoot, Epic, Root} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Game from './views/Game';
import Profile from "./views/Profile";
import TabbarMenu from "./components/Tabbar/Tabbar";

const App = () => {
	const [activeView, setActiveView] = useState('profile');

	const go = e => {
		console.log(e)
		setActiveView(e)
	};

	return (
		<AdaptivityProvider>
			<AppRoot>
				<Epic tabbar={<TabbarMenu activeIcon={activeView} go={go} />} />
				<Root activeView={activeView}>
					<Profile id='profile' go={go} />
					<Game id='game' go={go} />
				</Root>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;
