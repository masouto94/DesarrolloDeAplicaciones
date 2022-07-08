import { StyleSheet } from "react-native"
import { colors } from "../../constants/themes/colors"
export const styles = StyleSheet.create({
    container: {
        flex:1
    },
    cartConfirm: {
        flex:0.15,
        flexDirection:"row",
        backgroundColor:colors.primary,
        justifyContent:"space-around",
        alignItems:"center",
        borderRadius: 50,
        margin: "5%",
        color: colors.text
        
    },
    cartConfirmContent: {

        color: colors.text,
        fontFamily: 'Lato-Bold',

    },
    footer: {
        flex: 1,
        flexDirection: "column",
        marginVertical: 15,
        justifyContent: "flex-end"
    }
    
}) 