import React, {Component, Fragment} from 'react';
import {Clipboard, ToastAndroid} from 'react-native';

import View from "../../components/public/MyView";
import Text from "../../components/public/MyText";
import Button from "../../components/public/MyButton";
import colors from "../../constants/Colors";
import axios from "axios";
import strings from "../../constants/Strings";

class WebsiteInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project_id: this.props.project_id,
            show_data: false,
            message: '',
            data: null
        };
    }

    componentWillMount() {
        var that = this;
        axios.post(strings.host + 'project/information', {
            project_id: that.state.project_id,
            user_id: that.props.user_id,
            token: that.props.token,
        }).then(function (response) {
            if (response.data.is_successful) {
                that.setState({
                    show_data: true,
                    data: response.data.data
                })
            } else {
                that.setState({
                    show_data: false,
                    message: response.data.message
                })
            }
        }).catch(function (error) {
            alert(strings.messages.server_error)
        });
    }

    render() {
        return (
            <View p={25}>
                <Text h4>اطلاعات وبسایت</Text>

                {this.state.show_data ? (
                    <Fragment>
                        <View mt={30}>
                            <Text h5>آدرس پیشخوان وبسایت :</Text>
                            <View row mt={20}>
                                <Text textRight>{this.state.data.domain.url}</Text>
                                <Button w={75} ml={20} p={3} bg={colors.blue} center rounded={25} onPress={() => {
                                    Clipboard.setString(this.state.data.domain.url)
                                    ToastAndroid.show("متن کپی شد", ToastAndroid.SHORT)
                                }}>
                                    <Text color={colors.white}>کپی</Text>
                                </Button>
                            </View>
                        </View>

                        <View mt={30}>
                            <Text h5>نام کاربری پیشخوان :</Text>
                            <View row mt={20}>
                                <Text textRight>{this.state.data.domain.username}</Text>
                                <Button w={75} ml={20} p={3} bg={colors.blue} center rounded={25} onPress={() => {
                                    Clipboard.setString(this.state.data.domain.username)
                                    ToastAndroid.show("متن کپی شد", ToastAndroid.SHORT)
                                }}>
                                    <Text color={colors.white}>کپی</Text>
                                </Button>
                            </View>
                        </View>

                        <View mt={30}>
                            <Text h5>رمز عبور پیشخوان :</Text>
                            <View row mt={20}>
                                <Text textRight>{this.state.data.domain.password}</Text>
                                <Button w={75} ml={20} p={3} bg={colors.blue} center rounded={25} onPress={() => {
                                    Clipboard.setString(this.state.data.domain.password)
                                    ToastAndroid.show("متن کپی شد", ToastAndroid.SHORT)
                                }}>
                                    <Text color={colors.white}>کپی</Text>
                                </Button>
                            </View>
                        </View>

                        <View mt={30}>
                            <Text h5>آدرس هاست :</Text>
                            <View row mt={20}>
                                <Text textRight>{this.state.data.host.url}</Text>
                                <Button w={75} ml={20} p={3} bg={colors.blue} center rounded={25} onPress={() => {
                                    Clipboard.setString(this.state.data.host.url)
                                    ToastAndroid.show("متن کپی شد", ToastAndroid.SHORT)
                                }}>
                                    <Text color={colors.white}>کپی</Text>
                                </Button>
                            </View>
                        </View>

                        <View mt={30}>
                            <Text h5>نام کاربری هاست :</Text>
                            <View row mt={20}>
                                <Text textRight>{this.state.data.host.username}</Text>
                                <Button w={75} ml={20} p={3} bg={colors.blue} center rounded={25} onPress={() => {
                                    Clipboard.setString(this.state.data.host.username)
                                    ToastAndroid.show("متن کپی شد", ToastAndroid.SHORT)
                                }}>
                                    <Text color={colors.white}>کپی</Text>
                                </Button>
                            </View>
                        </View>

                        <View mt={30}>
                            <Text h5>رمز عبور هاست :</Text>
                            <View row mt={20}>
                                <Text textRight>{this.state.data.host.password}</Text>
                                <Button w={75} ml={20} p={3} bg={colors.blue} center rounded={25} onPress={() => {
                                    Clipboard.setString(this.state.data.host.password)
                                    ToastAndroid.show("متن کپی شد", ToastAndroid.SHORT)
                                }}>
                                    <Text color={colors.white}>کپی</Text>
                                </Button>
                            </View>
                        </View>

                        <View mt={30}>
                            <Text h5>آدرس ftp :</Text>
                            <View row mt={20}>
                                <Text textRight>{this.state.data.ftp.url}</Text>
                                <Button w={75} ml={20} p={3} bg={colors.blue} center rounded={25} onPress={() => {
                                    Clipboard.setString(this.state.data.ftp.url)
                                    ToastAndroid.show("متن کپی شد", ToastAndroid.SHORT)
                                }}>
                                    <Text color={colors.white}>کپی</Text>
                                </Button>
                            </View>
                        </View>

                        <View mt={30}>
                            <Text h5>نام کاربری ftp :</Text>
                            <View row mt={20}>
                                <Text textRight>{this.state.data.ftp.username}</Text>
                                <Button w={75} ml={20} p={3} bg={colors.blue} center rounded={25} onPress={() => {
                                    Clipboard.setString(this.state.data.ftp.username)
                                    ToastAndroid.show("متن کپی شد", ToastAndroid.SHORT)
                                }}>
                                    <Text color={colors.white}>کپی</Text>
                                </Button>
                            </View>
                        </View>

                        <View mt={30}>
                            <Text h5>رمز عبور ftp :</Text>
                            <View row mt={20}>
                                <Text textRight>{this.state.data.ftp.password}</Text>
                                <Button w={75} ml={20} p={3} bg={colors.blue} center rounded={25} onPress={() => {
                                    Clipboard.setString(this.state.data.ftp.password)
                                    ToastAndroid.show("متن کپی شد", ToastAndroid.SHORT)
                                }}>
                                    <Text color={colors.white}>کپی</Text>
                                </Button>
                            </View>
                        </View>
                    </Fragment>
                ) : (
                    <View mt={50}>
                        <Text h4 center color={colors.orange}>{this.state.message}</Text>
                    </View>
                )}

            </View>
        );
    }
}

WebsiteInformation.navigationOptions = {
    header: null,
};

export default WebsiteInformation;