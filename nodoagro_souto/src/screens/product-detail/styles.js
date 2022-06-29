import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        justifyContent: 'space-between',
        alignItems:'center'

    },
    cardContainer: {
        flex: 0.5,
        flexDirection:"column",
        justifyContent:"flex-start"
    },
    buttonsStyle: {
        marginVertical:"5%",
        marginHorizontal: "1%",
        flexDirection:"row",
        alignItems: "center"
    },
    image:{
        height: 100,
        width: 100
    }
})