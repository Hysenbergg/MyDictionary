import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export default StyleSheet.create({
    container: {
        paddingTop: 5,
        margin: 7  
    },
    inner_container: {
        paddingLeft: 10,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: colors.primary
    }
})