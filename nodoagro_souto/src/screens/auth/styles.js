import { StyleSheet } from "react-native";

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
    }
})