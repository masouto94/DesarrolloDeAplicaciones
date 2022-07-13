import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";
export const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
      },
      preview: {
        width: "100%",
        height: 200,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        borderColor: colors.primary,
        borderWidth: 1,
      },
      image: {
        width: "100%",
        height: "100%",
      },
})