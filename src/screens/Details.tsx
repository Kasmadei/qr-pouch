import React from 'react'
import { View, Text } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack';

const Details: React.FC<{ navigation: NavigationStackProp }> = ({ navigation }) => {
    return (
        <View>
            <Text>Details</Text>
        </View>
    )
}

export default Details