import React from 'react';
import {createStackNavigator} from 'react-navigation';

import StackConfig from './StackConfig';
import HomeScreen from '../screens/HomeScreen';
import HomeIcon from '../assets/icons/home.png';
import FooterNavigationIcon from '../components/FooterNavigationIcon';

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
    },
    StackConfig
);

HomeStack.navigationOptions = {
    tabBarLabel: ' ',
    tabBarIcon: ({focused}) => (
        <FooterNavigationIcon
            focused={focused}
            image={HomeIcon}
            mainIcon={true}
        />
    ),
};

HomeStack.path = '';

export default HomeStack;
