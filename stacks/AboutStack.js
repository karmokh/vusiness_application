import React from 'react';
import {createStackNavigator} from 'react-navigation';

import StackConfig from './StackConfig';
import AboutScreen from '../screens/AboutScreen';
import NavbarIcon from '../components/navbar/NavbarIcon';
import aboutIcon from '../assets/icons/about.png';

const AboutStack = createStackNavigator(
    {
        About: {
            screen: screenProps => <AboutScreen screenProps={screenProps.screenProps}/>,
            navigationOptions: () => ({
                header: null,
            })
        },
    },
    StackConfig
);

AboutStack.navigationOptions = {
    tabBarLabel: ' ',
    tabBarIcon: ({focused}) => (
        <NavbarIcon
            focused={focused}
            image={aboutIcon}
            mainIcon={false}
            have_badge={false}
        />
    ),
};

AboutStack.path = '';

export default AboutStack;
