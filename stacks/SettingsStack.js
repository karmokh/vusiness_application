import React from 'react';
import {createStackNavigator} from 'react-navigation';

import StackConfig from './StackConfig';
import SettingsScreen from '../screens/SettingsScreen';
import SettingsIcon from '../assets/icons/settings.png';
import FooterNavigationIcon from '../components/FooterNavigationIcon';

const SettingsStack = createStackNavigator(
    {
        Settings: SettingsScreen,
    },
    StackConfig
);

SettingsStack.navigationOptions = {
    tabBarLabel: ' ',
    tabBarIcon: ({focused}) => (
        <FooterNavigationIcon
            focused={focused}
            image={SettingsIcon}
            mainIcon={false}
        />
    ),
};

SettingsStack.path = '';

export default SettingsStack;
