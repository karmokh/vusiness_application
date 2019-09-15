import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';

import HomeStack from '../stacks/HomeStack';
import AboutStack from '../stacks/AboutStack';
import ChatStack from '../stacks/ChatStack';
import SettingsStack from '../stacks/SettingsStack';
import ProfileStack from '../stacks/ProfileStack';

const TabNavigator = createBottomTabNavigator({
    AboutStack,
    ChatStack,
    HomeStack,
    SettingsStack,
    ProfileStack,
}, {
    initialRouteName: 'HomeStack',
    tabBarOptions: {
        style: {
            height: 64,
        },
    }
});

TabNavigator.path = '';

export default TabNavigator;
