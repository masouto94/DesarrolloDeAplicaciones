import { StyleSheet } from "react-native";
import { colors } from "../../../constants/themes/colors";
export const styles = StyleSheet.create({
    container: {
        flex:1
    },
    background:{
        flex:1,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center'
    },
    imageContainer:{
        height:'50%',
        width:'100%'
    },
    image:{
        height:'100%',
        width:'100%',
        zIndex:1
    },
    inputHeader:{
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 15,
        lineHeight: 18,
        color: colors.textHeadersGreen
    },
    inputBar:{
        paddingVertical: 8,
        fontSize: 30,
        color: colors.black
    },
    button:{
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