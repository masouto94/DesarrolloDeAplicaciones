import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";
export const styles = StyleSheet.create({
    orderContainer: {
        flex: 1
    },

    orderItem: {
        flex: 1,
        flexDirection: "row",
        margin: "4%",
        justifyContent: "space-around",

        backgroundColor: colors.secondary,
        borderRadius: 25,
    },
    orderSelect: {
        flex: 0.8,
        justifyContent: "space-around",
        marginVertical: "4%",

    },
    orderPiece: {
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center",
        fontFamily: 'Lato-Bold',
        fontSize: "25px",
        
    }
})