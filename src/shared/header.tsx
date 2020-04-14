import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const Header: React.FC<{ title: string, navigation?: any, menu?: boolean }> = ({ title, navigation, menu }) => {
    const openMenu = () => {
        navigation.openDrawer()  
    }

    return (
        <View style={styles.header}>
            {menu && <MaterialIcons name="menu" color="white" onPress={openMenu} style={styles.icon} /> }
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
        fontSize: 20,
        color: 'white',
        letterSpacing: 1
    },
    icon: {
        paddingLeft: 8,
        paddingRight: 16,
        fontSize: 28
    }
})

export default Header