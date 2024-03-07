import {StyleSheet} from 'react-native';
import { colors } from '../../styles/colors';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: colors.primary,
        borderRadius: 10
    },
    title: {
        marginLeft: 5,
        color: 'white',
        fontSize: 16
    }
})