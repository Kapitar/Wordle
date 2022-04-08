import React from 'react';

import {
    Panel,
    PanelHeader,
    Header,
    Button,
    Group,
    Cell,
    Div,
    Avatar,
    TabbarItem,
    Counter, Badge
} from '@vkontakte/vkui';

const Profile = ({ id, go }) => {
    return (
        <Panel id={id}>
            <PanelHeader separator={false}>Home</PanelHeader>
        </Panel>
    )
}

export default Profile
