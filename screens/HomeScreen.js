import React from 'react';
import {Text, View} from 'react-native';
import Styles from '../constants/Styles';

export default function HomeScreen() {
    return (
        <View style={Styles.CenterView}>
            <Text>ویزینس مشتریان</Text>
        </View>
    );
}

HomeScreen.navigationOptions = {
    header: null,
};