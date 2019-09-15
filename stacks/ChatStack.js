import React from 'react';
import {createStackNavigator} from 'react-navigation';

import StackConfig from './StackConfig';
import ChatScreen from '../screens/ChatScreen';
import ChatIcon from '../assets/icons/chat.png';
import FooterNavigationIcon from '../components/FooterNavigationIcon';

const ChatStack = createStackNavigator(
    {
        Chat: ChatScreen,
    },
    StackConfig
);

ChatStack.navigationOptions = {
    tabBarLabel: ' ',
    tabBarIcon: ({focused}) => (
        <FooterNavigationIcon
            focused={focused}
            image={ChatIcon}
            mainIcon={false}
        />
    ),
};

ChatStack.path = '';

export default ChatStack;
