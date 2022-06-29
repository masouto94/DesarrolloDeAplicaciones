import { StyleSheet } from "react-native"
export const themes = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        flex:1,
        marginVertical: "10%"
    },
    title: {
        fontFamily: 'Lato-Regular',
        fontSize: 20
    },
    card: {
        flex:1,
        alignItems: "center",
        padding: "5%",
        borderWidth: 2,
        borderRadius: 25

    },
    description: {
        fontFamily: 'Lato-LightItalic',
        flex:1
    },
    price: {
        flex:1,
        fontFamily: 'Lato-Bold'
    }
})