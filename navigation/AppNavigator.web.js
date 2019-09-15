import {createBrowserApp} from '@react-navigation/web';
import {createSwitchNavigator} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

const SwitchNavigator = createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
});

SwitchNavigator.path = '';

export default createBrowserApp(SwitchNavigator, {history: 'hash'});
