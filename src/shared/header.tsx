import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const Header: React.FC<{ title: string, navigation: any }> = ({ title, navigation }) => {
    const openMenu = () => {
        navigation.openDrawer()  
    }

    return (
        <View style={styles.header}>
            <MaterialIcons name="menu" onPress={openMenu} style={styles.icon} />
            <View>
                <Text style={styles.headerText}>{ title }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#333',
        letterSpacing: 1
    },
    icon: {
        paddingLeft: 8,
        paddingRight: 16,
        fontSize: 28
    }
})

export default Header