import { StyleSheet } from "react-native";
import { colors } from "../../../constants/themes"

export const themes = StyleSheet.create({
    itemContainer: {
        flex:1,
        borderRadius: 10,
        margin: 10,
        height: 120
    },
    item: {
        flex: 1,
        borderRadius: 10,
        shadowColor: colors.shadow,
        shadowOpacity: 0.6,
        shadowOffset: 2,
        shadowRadius:8,
        elevation:4,
        justifyContent:"center",
        alignItems:"center",
        padding: 10
        
    },
    title: {
        fontFamily: 'Lato-Bold',
        fontSize:25
    }
})