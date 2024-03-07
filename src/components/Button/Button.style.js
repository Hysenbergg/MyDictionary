import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button_container: {
        backgroundColor: colors.primary,
        margin: 10,
        padding: 10,
        alignItems: 'center',
        width: 250,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: colors.white
    },
    button_text: {
        color: colors.white,
        fontSize: 15,
        fontWeight: '600'
    }
})