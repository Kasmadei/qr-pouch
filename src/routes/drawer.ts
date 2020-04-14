import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation';
import { HOME, ABOUT } from './../types';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';


const RootNavigation = createDrawerNavigator({
    [HOME]: {
        screen: HomeStack
    },
    [ABOUT]: {
        screen: AboutStack
    },
})

export default createAppContainer(RootNavigation)