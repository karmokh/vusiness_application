import React, {Component} from 'react';

import View from "../../components/public/MyView";
import Text from "../../components/public/MyText";
import Image from "../../components/public/MyImage";
import coming_soon from "../../assets/images/coming_soon.gif"

class ComingSoon extends Component {
    render() {
        return (
            <View flex flexCenter aiCenter>
                <Image source={coming_soon} w={-10} h={250} center />
                <Text mt={30} mh={20} size={18} lineHeight={40} textCenter>در حال توسعه این بخش هستیم و به زودی فعال خواهد شد</Text>
            </View>
        );
    }
}

ComingSoon.navigationOptions = {
    header: null,
};

export default ComingSoon;