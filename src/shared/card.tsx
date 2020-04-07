import React from 'react'
import { StyleSheet, View } from 'react-native';


const Card = (props: any) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                { props.children }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 2, height: 3 },
        shadowColor: '#333',
        shadowOpacity: 0.2,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    
    },
    cardContent: {
        marginHorizontal: 16,
        marginVertical: 10,
     
    }
})

export default Card