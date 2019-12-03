import {Dimensions, StyleSheet} from 'react-native';
import {carima} from './Carima';

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
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
    header: {
        marginTop: 40,
        height: 60
    },
    header_title: {
        textAlign: 'center',
        paddingBottom: 10,
        fontSize: 20,
        color: '#555',
    },
    Text: {
        fontFamily: 'iran-sans',
        textAlign: 'right',
        lineHeight: 30
    },
    container_image: {
        borderRadius: 10,
        width: width - 50,
        height: 160
    },
    mt: {
        marginTop: 30
    },
    h1: {
        fontSize: 30
    }

});

export default styles;