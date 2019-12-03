import React from 'react';
import {ScrollView} from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import View from "../components/public/MyView";
import Text from "../components/public/MyText";
import Button from "../components/public/MyButton";
import Image from "../components/public/MyImage";
import Header from "../components/header/Header";
import AboutText from "../components/about/About";
import Support from "../components/about/Support";
import colors from "../constants/Colors";
import moazami from '../assets/images/moazami.jpg';
import shafiei from '../assets/images/shafiei.jpg';

export default function AboutScreen(props) {
    return (
        <ScrollView>
            <Header mt={40} title={'درباره ویستا'}/>
            <View p={25}>
                <Image rounded w={-50} h={160} source={{uri: "https://portal.vistaapp.ir/images/site/company.jpg"}}/>

                <AboutText/>

                <View mt={30} center>
                    <Button w={250} h={40} bg={colors.blue} center bRadius={50} onPress={() => {
                        WebBrowser.openBrowserAsync(
                            'https://vistaapp.ir/%d9%86%d9%85%d9%88%d9%86%d9%87-%da%a9%d8%a7%d8%b1-%d9%88%db%8c%d8%b3%d8%aa%d8%a7/'
                        );
                    }}>
                        <Text color={colors.white} h5>مشاهده نمونه کارها</Text>
                    </Button>
                </View>
            </View>

            <Header title={'پشتیبانی'}/>

            <View row p={30}>
                <Support image={moazami} title={'سارا معظیمی'} phone={'02188551470'}/>
                <Support image={shafiei} title={'پریسا شفیعی'} phone={'02188108937'}/>
            </View>
        </ScrollView>
    );
}

AboutScreen.navigationOptions = {
    header: null,
};