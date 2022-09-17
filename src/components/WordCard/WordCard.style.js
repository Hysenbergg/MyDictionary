import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#2D956A',
        padding: 7,
        borderColor: '#E1E1E1',
        borderRadius: 10,
        margin: 5,
    },
    num_container: {
        flexDirection: 'row',
        marginRight: 5,
    },
    inner_container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        padding: 10,
        borderRadius: 15,
        backgroundColor: 'white',
        borderWidth: 1,
    },
    indexnumber: {
        borderWidth: 1,
        borderRadius: 50,  
        paddingLeft: 2,
        fontSize: 12,  
        marginTop: 25,
        marginBottom: 22,
        backgroundColor: 'white'
    },
    first_text: {
        fontSize: 17,
        fontWeight: 'bold', 
    },
    second_text: {
        fontSize: 15,
    }
})