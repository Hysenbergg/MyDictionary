import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export default StyleSheet.create({
    container: {
        margin: 10,
        paddingLeft: 10,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: colors.primary
    },
    input: {
        color: colors.black,
        fontSize: 15
    }
})