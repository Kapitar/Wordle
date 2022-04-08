import React from 'react';

import Guess from '../components/Guess/Guess.js'
import {Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, TabbarItem} from '@vkontakte/vkui';

const Game = ({ id, go }) => {
	return (
		<Panel id={id}>
			<PanelHeader separator={false}>Wordle</PanelHeader>
			<Guess />
		</Panel>
	)
}

export default Game;
