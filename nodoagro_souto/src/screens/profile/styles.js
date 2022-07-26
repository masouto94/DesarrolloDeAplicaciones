import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes"

export const styles = StyleSheet.create({
    container: {
        flex: 1
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