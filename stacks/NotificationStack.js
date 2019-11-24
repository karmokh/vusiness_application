import React from 'react';
import {createStackNavigator} from 'react-navigation';

import StackConfig from './StackConfig';
import ChatScreen from '../screens/ChatScreen';
import chatIcon from '../assets/icons/notification.png';
import NavbarIcon from '../components/navbar/NavbarIcon';

const ChatStack = createStackNavigator(
    {
        Chat: {
            screen: screenProps => <ChatScreen screenProps={screenProps.screenProps}/>,
            navigationOptions: () => ({
                header: null,
            })
        },
    },
    StackConfig
    )
;

ChatStack.navigationOptions = {
    tabBarLabel: ' ',
    tabBarIcon: ({focused}) => (
        <NavbarIcon
            focused={focused}
            image={chatIcon}
            mainIcon={false}
        />
    ),
};

ChatStack.path = '';

export default ChatStack;
