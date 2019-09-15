import {StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

const Styles = StyleSheet.create({
    CenterView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    FooterDefaultIconImage: {
        width: 45,
        height: 45,
        marginBottom: -12
    },
    FooterMainIconImage: {
        width: 50,
        height: 50,
        marginTop: 10,
        marginLeft: 10,
    },
    FooterMainIcon: {
        width: 70,
        height: 70,
        backgroundColor: '#fff',
        marginBottom: 38,
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
});

export default Styles;