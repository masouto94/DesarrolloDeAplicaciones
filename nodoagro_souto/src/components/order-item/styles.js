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

        backgroundColor: colors.primary,
        borderRadius: 25,
    },
    orderSelect: {
        flex: 1,
        justifyContent: "space-around",
        flexDirection: "row",
        

    },
    orderPieceLeft: {
        flex:1,
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center",
        padding:"5%",
        backgroundColor: colors.purple,
        borderRadius: 25,

                
    },
    orderPieceRight: {
        flex:0.4,
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center",
        padding: "5%",
        backgroundColor: colors.primary,
        borderRadius: 25,


        

    },
    orderText: {
        fontFamily: 'Lato-Bold',
        fontSize: 25,

    }
})