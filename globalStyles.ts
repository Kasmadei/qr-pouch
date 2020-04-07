import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    titleText: {
        fontSize: 20,
        marginBottom: 12,
        color: "black",
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#E0E0E0',
        padding:10,
        fontSize: 18,
        borderRadius: 6,
        marginBottom: 12,
    },
    errorText: {
        color: 'red',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center'
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffa3",
        height: 40,
        borderRadius: 6,
        marginBottom: 12
      },
})