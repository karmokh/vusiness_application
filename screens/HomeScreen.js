import React, {Component} from 'react'
import {Modal, ScrollView, NetInfo} from 'react-native'
import * as WebBrowser from 'expo-web-browser';

import View from "../components/public/MyView"
import Text from "../components/public/MyText"
import Button from "../components/public/MyButton"
import Image from "../components/public/MyImage"
import Header from "../components/header/Header"
import analytics from "../assets/icons/analytics.png"
import website from "../assets/icons/website.png"
import mobile from "../assets/icons/mobile-web.png"
import paint from "../assets/icons/paint-brush.png"
import coding from "../assets/icons/coding.png"
import megaphone from "../assets/icons/megaphone.png"
import loading from "../assets/images/coming_soon.gif"
import colors from "../constants/Colors";
import axios from "axios";
import strings from "../constants/Strings";

class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            version: "1.0",
            updateAvailable: false,
        }
    }

    componentWillMount() {
        var that = this;

        axios.get(strings.host + 'version')
            .then(function (response) {
                if (response.data.version !== that.state.version) {
                    that.setState({
                        updateAvailable: true
                    })
                }
            })
            .catch(function (error) {
                alert(strings.messages.server_error)
            });
    }

    render() {
        return (
            <ScrollView>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.updateAvailable}
                    onRequestClose={() => {

                    }}>
                    <View flex p={30} center>
                        <Image source={loading} w={-50} h={200}/>
                        <Text mt={50} textCenter color={colors.dark}>ورژن جدید اپلیکیشن منتشر شد، لطفا جهت ادامه
                            اپلیکیشن خود را به روز نمایید</Text>
                        <Button w={200} h={40} mt={50} bg={colors.green} center bRadius={40} onPress={() => {
                            WebBrowser.openBrowserAsync(
                                'https://portal.vistaapp.ir/vusiness.apk'
                            )
                        }}>
                            <Text color={colors.white} h5>به روزرسانی</Text>
                        </Button>
                    </View>
                </Modal>
                <Header mt={40} title={'خدمات ویستا'}/>
                <View p={25}>
                    <View row>

                        <View flex m={10} p={10} center rounded={10} shadow>
                            <Button center onPress={() => {
                                this.props.navigation.navigate("Seos")
                            }}>
                                <Image source={analytics} w={55} h={55} mt={15}/>
                                <Text mt={15}>سئو و بهینه سازی</Text>
                            </Button>
                        </View>

                        <View flex m={10} p={10} center rounded={10} shadow>
                            <Button center onPress={() => {
                                this.props.navigation.navigate("Websites")
                            }}>
                                <Image source={website} w={55} h={55} mt={15}/>
                                <Text mt={15}>طراحی وبسایت</Text>
                            </Button>
                        </View>
                    </View>

                    <View row>
                        <View flex m={10} p={10} center rounded={10} shadow>
                            <Button center onPress={() => {
                                this.props.navigation.navigate("ComingSoon")
                            }}>
                                <Image source={mobile} w={55} h={55} mt={15}/>
                                <Text mt={15}>طراحی اپلیکیشن</Text>
                            </Button>
                        </View>

                        <View flex m={10} p={10} center rounded={10} shadow>
                            <Button center onPress={() => {
                                this.props.navigation.navigate("ComingSoon")
                            }}>
                                <Image source={paint} w={55} h={55} mt={15}/>
                                <Text mt={15}>طراحی گرافیک</Text>
                            </Button>
                        </View>
                    </View>

                    <View row>
                        <View flex m={10} p={10} center rounded={10} shadow>
                            <Button center onPress={() => {
                                this.props.navigation.navigate("ComingSoon")
                            }}>
                                <Image source={coding} w={55} h={55} mt={15}/>
                                <Text mt={15}>نرم افزار تحت وب</Text>
                            </Button>
                        </View>

                        <View flex m={10} p={10} center rounded={10} shadow>
                            <Button center onPress={() => {
                                this.props.navigation.navigate("ComingSoon")
                            }}>
                                <Image source={megaphone} w={55} h={55} mt={15}/>
                                <Text mt={15}>تبلیغات آنلاین</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    };
}

HomeScreen.navigationOptions = {
    header: null,
};

export default HomeScreen;