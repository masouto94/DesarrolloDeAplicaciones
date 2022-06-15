import { StyleSheet } from 'react-native';

export const themes = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        color: "#000000"
    },
    containerTask: {
        marginTop: 40,
        paddingHorizontal: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    text: {
        fontSize: 14,
        borderColor: "#8CBCB9",
        borderBottomWidth: 1,
        marginBottom:10,
        height:40,
        width: "45%",
        color: "#212121"
    },
    title: {
        fontSize: 24,
        borderColor: "#8CBCB9",
        borderBottomWidth: 2,
        marginBottom:10,
        color: "red",
        textAlign: 'center'
    },
    button:{
        
        color: "#8CBCB9"
    },
    containerList: {
        marginHorizontal: 20,
      },
    item: {
        fontSize: 14,
        fontWeight: "bold"
    },
    deleteButton: {
        backgroundColor:"#8CBCB9",
        padding: 5
    },
    deleteButtonText: {
        color: "#ffffff",
        fontSize: 14,
        fontWeight: 'bold'
    },
    image: {
        height: "100%",
        width: "100%",
        minHeight: 400,
        minWidth: 400
    }
  });
