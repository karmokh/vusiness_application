import React from 'react';
import {createStackNavigator} from 'react-navigation';

import StackConfig from './StackConfig';
import NotificationScreen from '../screens/NotificationScreen';
import chatIcon from '../assets/icons/notification.png';
import NavbarIcon from '../components/navbar/NavbarIcon';
import Website from "../pages/website/Website";

const NotificationStack = createStackNavigator(
    {
        Notification: {
            screen: screenProps => <NotificationScreen screenProps={screenProps.screenProps} navigation={screenProps.navigation}/>,
            navigationOptions: () => ({
                header: null,
            })
        },
    },
    StackConfig
    )
;

NotificationStack.navigationOptions =  {
    tabBarLabel: ' ',
    tabBarIcon: ({focused}) => (
        <NavbarIcon
            focused={focused}
            image={chatIcon}
            mainIcon={false}
            have_badge={true}
        />
    ),
};

NotificationStack.path = '';

export default NotificationStack;
