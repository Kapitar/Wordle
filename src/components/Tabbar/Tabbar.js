import {Tabbar, TabbarItem} from "@vkontakte/vkui";
import {Icon28PlaySpeedOutline, Icon28SettingsOutline, Icon28UserCircleOutline} from "@vkontakte/icons";

export default function TabbarMenu ({activeIcon, go}) {
    return (
        <div style={{padding: "2px 0", position:"absolute", bottom: 0, width: "100%" }}>
            <div style={{ maxWidth: 768, margin: "auto" }}>
                <Tabbar style={{ position: "static", margin: "10px 0 0" }}>
                    <TabbarItem
                        text="Профиль"
                        onClick={() => { go("profile") }}
                        selected={activeIcon === "profile"}
                    >
                        <Icon28UserCircleOutline />
                    </TabbarItem>

                    <TabbarItem
                        text="Играть"
                        onClick={() => { go("game") }}
                        selected={activeIcon === "game"}
                    >
                        <Icon28PlaySpeedOutline />
                    </TabbarItem>

                    <TabbarItem
                        text="Настройки"
                        selected={activeIcon === "settings"}
                    >
                        <Icon28SettingsOutline />
                    </TabbarItem>
                </Tabbar>
            </div>
        </div>
    )
}

