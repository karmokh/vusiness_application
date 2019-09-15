import React from 'react';
import {createStackNavigator} from 'react-navigation';

import StackConfig from './StackConfig';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileIcon from '../assets/icons/profile.png';
import FooterNavigationIcon from '../components/FooterNavigationIcon';

const ProfileStack = createStackNavigator(
    {
        Profile: ProfileScreen,
    },
    StackConfig
);

ProfileStack.navigationOptions = {
    tabBarLabel: ' ',
    tabBarIcon: ({focused}) => (
        <FooterNavigationIcon
            focused={focused}
            image={ProfileIcon}
            mainIcon={false}
        />
    ),
};

ProfileStack.path = '';

export default ProfileStack;
