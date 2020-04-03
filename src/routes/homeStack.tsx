import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { NavigationStackProp } from 'react-navigation-stack';
import { HOME, DETAILS,ADD_BUSINESS } from '../types'
import Home from '../screens/Home'
import Details from '../screens/Details'
import AddBusiness from '../screens/AddBusiness'
import Header from '../shared/header'


const screens = {
    [`${HOME}`]: {
        screen: Home,
        navigationOptions: ({ navigation }: { navigation: NavigationStackProp  }) => {
            return {
                headerTitle: () => <Header title='Home' navigation={navigation} />,
            } 
        }
    },
    [`${DETAILS}`]: {
        screen: Details,
        navigationOptions: {
            title: "Details"
        }
    },
    [`${ADD_BUSINESS}`]: {
        screen: AddBusiness,
        navigationOptions: {
            title: "Add Business"
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {
            backgroundColor: "#57A0D3"
        }
    }
});

export default HomeStack