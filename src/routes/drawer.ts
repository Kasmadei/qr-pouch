import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation';
import { HOME, ABOUT } from './../types';
import HomeStack from './homeStack';
import AboutAndFeedbackStack from './aboutAndFeedbackStack';


const RootNavigation = createDrawerNavigator({
    [`${HOME}`]: {
        screen: HomeStack
    },
    [`${ABOUT}`]: {
        screen: AboutAndFeedbackStack
    },
})

export default createAppContainer(RootNavigation)