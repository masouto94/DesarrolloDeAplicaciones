import { StyleSheet } from "react-native";
import { colors } from "../../../constants/themes/colors";
export const styles = StyleSheet.create({
    clientTypeList: {
        flex: 1,
        flexDirection: "row",
        margin: "2%",
        backgroundColor:colors.itemGreen,
        borderRadius: 25,
        alignItems: "center",
        justifyContent:'center',
        paddingVertical: 8,
        paddingHorizontal: 127,
        gap: 10
    },

    textMenu:{
        fontfamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 16,
        lineHeight: 24,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: 0.16,
        color: colors.white,
    }
})