import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes"

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputs:{
        padding: "5%",
        marginVertical:"5%",
        borderWidth:1
    },
    inputBox: {
        flex: 0.2,
        flexDirection: "column",
        justifyContent:"space-between"
    },
    button: {
        flex: 0.8,
        flexDirection: "column",
        justifyContent: "flex-end",
        marginBottom:"5%"
    },
    placeHolder: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center"
    },
    placeHolderText: {
        fontFamily: 'Lato-BoldItalic',
        fontSize: 20,
        color: colors.secondary
    }
})