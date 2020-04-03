import React from 'react'
import { View, Text } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'

const Home: React.FC<{ navigation: NavigationInjectedProps }> = ({ navigation }) => {
    return (
        <View>
            <Text>home</Text>
        </View>
    )
}

export default Home