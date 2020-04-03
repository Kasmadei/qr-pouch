import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation';
import { HOME, ABOUT_AND_FEEDBACK } from './../types';
import HomeStack from './homeStack';
import AboutAndFeedbackStack from './aboutAndFeedbackStack';


const RootNavigation = createDrawerNavigator({
    [`${HOME}`]: {
        screen: HomeStack
    },
    [`${ABOUT_AND_FEEDBACK}`]: {
        screen: AboutAndFeedbackStack
    },
})

export default createAppContainer(RootNavigation)