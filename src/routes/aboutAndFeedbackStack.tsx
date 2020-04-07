import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationStackProp } from 'react-navigation-stack'
import Header from '../shared/header';
import AboutAndFeedback from '../screens/AboutAndFeedback';
import { ABOUT } from '../types'

const screens = {
    [`${ABOUT}`]: {
        screen: AboutAndFeedback,
        navigationOptions: ({ navigation }: { navigation: NavigationStackProp }) => {
            return {
                headerTitle: () => <Header title='About' navigation={navigation} />,
            }
        }
    }
}

const AboutAndFeedbackStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {
            backgroundColor: "#bebebe"
        }
    }
});

export default AboutAndFeedbackStack;