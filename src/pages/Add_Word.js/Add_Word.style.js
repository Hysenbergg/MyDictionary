import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        color: 'black',
        textAlign: 'center',
        margin: 24,
        fontWeight: 'bold'
    },
    input_container: {
        margin: 10,
    },
    radioButton_group_container: {
        margin: 10
    },
    radioButton_group_inner_container: {
        padding: 10,
        borderWidth: 1,
        margin: 10,
        borderRadius: 15,
        borderColor: 'orange',
    },
    radioButton_container: {flexDirection: 'row', alignItems: 'center'},
    radioButton_category_name: {color: 'black', fontSize: 15}
})