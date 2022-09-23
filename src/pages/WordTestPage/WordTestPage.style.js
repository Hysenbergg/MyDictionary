import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{flex:1},
    title:{
        padding: 10,
        marginTop: 10,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    word_container:{
        alignItems: 'center',
        marginLeft: 50,
        marginRight: 50,
        paddingTop: 20,
        marginBottom: 10,
    },
    word:{
        fontSize: 20,
        fontWeight: 'bold',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#2D956A',
        padding: 10,
    },
    buton_container:{ 
        flex: 0.2,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
})