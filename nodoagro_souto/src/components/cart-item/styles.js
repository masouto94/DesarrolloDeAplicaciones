import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";
export const styles = StyleSheet.create({
    cartContainer: {
        flex: 1,
        flexDirection: "row",
        margin: "2%",
        backgroundColor:colors.secondary,
        borderRadius: 25,
    },
    cartItem: {
        flex: 0.8,
        flexDirection: "row",
        justifyContent:"space-around",
        marginVertical: "4%",

    },
    itemDelete: {
        flex:0.2,
        flexDirection: "row",
        justifyContent:"center",
        backgroundColor: colors.gray,
        height: "100%",
        alignItems:"center",
        borderWidth: 1,

        borderRadius: 50
    },
    cartDelete: {

        flexDirection: "row",
        justifyContent:"flex-end",

        alignItems:"center"
    },
    cartDeleteIcon: {

    },
    quantity:{
        flex:0.2,
        justifyContent:"center"
    }
})