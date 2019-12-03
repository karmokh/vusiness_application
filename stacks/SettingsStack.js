import React from 'react';
import {createStackNavigator} from 'react-navigation';

import StackConfig from './StackConfig';
import SettingsScreen from '../screens/SettingsScreen';
import NavbarIcon from '../components/navbar/NavbarIcon';
import settingsIcon from '../assets/icons/settings.png';

const SettingsStack = createStackNavigator(
    {
        Settings: {
            screen: screenProps => <SettingsScreen screenProps={screenProps.screenProps}/>,
            navigationOptions: () => ({
                header: null,
            })
        },
    },
    StackConfig
);

SettingsStack.navigationOptions = {
    tabBarLabel: ' ',
    tabBarIcon: ({focused}) => (
        <NavbarIcon
            focused={focused}
            image={settingsIcon}
            mainIcon={false}
            have_badge={false}
        />
    ),
};

SettingsStack.path = '';

export default SettingsStack;
