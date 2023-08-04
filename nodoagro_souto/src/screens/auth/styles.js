import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

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
    arrowBackContainer:{
        position: 'absolute',
        left: '5.56%',
        right: '90%',
        top: '6.25%',
        bottom: '91.75%',
        zIndex:1

        
    },
    circleContainer:{
        width:'200%',
        backgroundColor: colors.itemGreen,
        borderStyle: 'solid',
        borderWidth: 'thin',
        borderColor:colors.black,
        borderRadius: 100
        
    },
    arrowBack:{
        width: 16,
        left: 20,
        top: 50,
        borderRadius: 0,
        fontSize: 30,

        color: colors.textHeadersGreen
    }
})