import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { NavigationStackProp } from 'react-navigation-stack';
import { HOME, DETAILS, QR_READER, CREATE_BUSINESS } from '../types'
import Home from '../screens/Home'
import Details from '../screens/Details/Details'
import Header from '../shared/header'
import QrReader from '../screens/QrReader';
import CreateBusiness from '../screens/createBusiness/CreateBusiness';


const screens = {
    [HOME]: {
        screen: Home,
        navigationOptions: ({ navigation }: { navigation: NavigationStackProp  }) => {
            return {
                headerTitle: () => <Header title='Home' navigation={navigation} menu />,
            } 
        }
    },
    [DETAILS]: {
        screen: Details,
        navigationOptions: () => {
            return {
                headerTitle: () => <Header title='Details' />,
            } 
        }

    },
    [QR_READER]: {
        screen: QrReader,
        navigationOptions: {
            title: ""
        }
    },
    [CREATE_BUSINESS]: {
        screen: CreateBusiness,
        navigationOptions: {
            title: "Create business"
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: "#678fcc"
        }
    }
});

export default HomeStack