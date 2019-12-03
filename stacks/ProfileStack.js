import React from 'react';
import {createStackNavigator} from 'react-navigation';

import StackConfig from './StackConfig';
import ProfileScreen from '../screens/ProfileScreen';
import NavbarIcon from '../components/navbar/NavbarIcon';
import profileIcon from '../assets/icons/profile.png';
import ComingSoon from "../pages/public/ComingSoon";

const ProfileStack = createStackNavigator(
    {
        Profile: {
            // screen: screenProps => <ProfileScreen screenProps={screenProps.screenProps}/>,
            screen: ComingSoon,
            navigationOptions: () => ({
                header: null,
            })
        },
    },
    StackConfig
);

ProfileStack.navigationOptions = {
    tabBarLabel: ' ',
    tabBarIcon: ({focused}) => (
        <NavbarIcon
            focused={focused}
            image={profileIcon}
            mainIcon={false}
            have_badge={false}
        />
    ),
};

ProfileStack.path = '';

export default ProfileStack;
