import React from 'react';
import {createStackNavigator} from 'react-navigation';

import StackConfig from './StackConfig';
import AboutScreen from '../screens/AboutScreen';
import AboutIcon from '../assets/icons/about.png';
import FooterNavigationIcon from '../components/FooterNavigationIcon';

const AboutStack = createStackNavigator(
    {
        About: AboutScreen,
    },
    StackConfig
);

AboutStack.navigationOptions = {
    tabBarLabel: ' ',
    tabBarIcon: ({focused}) => (
        <FooterNavigationIcon
            focused={focused}
            image={AboutIcon}
            mainIcon={false}
        />
    ),
};

AboutStack.path = '';

export default AboutStack;
