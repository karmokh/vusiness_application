import React from 'react';
import {Image, View} from 'react-native';
import Styles from '../constants/Styles';

export default function FooterNavigationIcon(props) {
    return props.focused == true
        ?
        <View style={Styles.FooterMainIcon}>
            <Image source={props.image} style={Styles.FooterMainIconImage}/>
        </View>
        :
        <Image source={props.image} style={Styles.FooterDefaultIconImage}/>
}