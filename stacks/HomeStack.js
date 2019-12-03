import React from 'react';
import {createStackNavigator} from 'react-navigation';

import StackConfig from './StackConfig';
import HomeScreen from '../screens/HomeScreen';
import NavbarIcon from '../components/navbar/NavbarIcon';
import homeIcon from '../assets/icons/home.png';
import Website from "../pages/website/Website";
import WebsiteList from "../pages/website/List";
import WebsiteNewCategory from "../pages/website/NewCategory";
import WebsiteNewOptions from "../pages/website/NewOptions";
import WebsiteNewInformation from "../pages/website/NewInformations";
import Seo from "../pages/seo/Seo";
import SeoList from "../pages/seo/List";
import SeoNewCategory from "../pages/seo/NewCategory";
import SeoNewInformation from "../pages/seo/NewInformation";
import SeoContentNewArticle from "../pages/seo/SeoContentNewArticle";
import SeoContentNewProduct from "../pages/seo/SeoContentNewProduct";
import ComingSoon from "../pages/public/ComingSoon";

const HomeStack = createStackNavigator(
    {
        Home: {
            screen: screenProps => <HomeScreen screenProps={screenProps.screenProps}
                                               navigation={screenProps.navigation}/>,
            navigationOptions: () => ({
                header: null,
            })
        },
        ComingSoon: {
            screen: ComingSoon,
            navigationOptions: () => ({
                header: null,
            })
        },
        Website: {
            screen: screenProps => <Website screenProps={screenProps.screenProps} navigation={screenProps.navigation}/>,
            navigationOptions: () => ({
                header: null,
            })
        },
        Websites: {
            screen: screenProps => <WebsiteList screenProps={screenProps.screenProps}
                                                navigation={screenProps.navigation}/>,
            navigationOptions: () => ({
                header: null,
            })
        },
        WebsiteNewCategory: {
            screen: screenProps => <WebsiteNewCategory screenProps={screenProps.screenProps}
                                                       navigation={screenProps.navigation}/>,
            navigationOptions: () => ({
                header: null,
            })
        },
        WebsiteNewOptions: {
            screen: screenProps => <WebsiteNewOptions screenProps={screenProps.screenProps}
                                                      navigation={screenProps.navigation}/>,
            navigationOptions: () => ({
                header: null,
            })
        },
        WebsiteNewInformation: {
            screen: screenProps => <WebsiteNewInformation screenProps={screenProps.screenProps}
                                                          navigation={screenProps.navigation}/>,
            navigationOptions: () => ({
                header: null,
            })
        },
        Seo: {screen: Seo},
        SeoContentNewArticle: {
            screen: screenProps => <SeoContentNewArticle screenProps={screenProps.screenProps}
                                                         navigation={screenProps.navigation}/>,
            navigationOptions: () => ({
                header: null,
            })
        },
        SeoContentNewProduct: {
            screen: screenProps => <SeoContentNewProduct screenProps={screenProps.screenProps}
                                                         navigation={screenProps.navigation}/>,
            navigationOptions: () => ({
                header: null,
            })
        },
        Seos: {
            screen: screenProps => <SeoList screenProps={screenProps.screenProps} navigation={screenProps.navigation}/>,
            navigationOptions: () => ({
                header: null,
            })
        },
        SeoNewCategory: {
            screen: screenProps => <SeoNewCategory screenProps={screenProps.screenProps}
                                                   navigation={screenProps.navigation}/>,
            navigationOptions: () => ({
                header: null,
            })
        },
        SeoNewInformation: {
            screen: screenProps => <SeoNewInformation screenProps={screenProps.screenProps}
                                                      navigation={screenProps.navigation}/>,
            navigationOptions: () => ({
                header: null,
            })
        },
    },
    StackConfig
);

HomeStack.navigationOptions = {
    tabBarLabel: ' ',
    tabBarIcon: ({focused}) => (
        <NavbarIcon
            focused={focused}
            image={homeIcon}
            mainIcon={true}
            have_badge={false}
        />
    ),
};

HomeStack.path = '';

export default HomeStack;
