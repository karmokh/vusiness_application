import React, {Component} from 'react';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";

import View from "../components/public/MyView";
import Text from "../components/public/MyText";
import Input from "../components/public/MyInput";
import Button from "../components/public/MyButton";
import Header from "../components/header/Header";
import colors from "../constants/Colors";
import strings from "../constants/Strings";
import axios from 'axios';

class SettingsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: null,
            last_name: null,
            phone: null,
            mobile: null,
            email: null,
            address: null,
            username: null,
            national_code: null,
            password: null,
            password_repeat: null,
            errors: []
        }
    }

    componentWillMount() {
        const that = this
        axios.post(strings.host + 'user', {
            user_id: that.props.screenProps.user_id,
            token: that.props.screenProps.token,
        }).then(function (response) {
            if (response.data.is_successful) {
                that.setState({
                    first_name: response.data.data.first_name,
                    last_name: response.data.data.last_name,
                    username: response.data.data.username,
                    national_code: response.data.data.national_code,
                    phone: response.data.data.phone,
                    mobile: response.data.data.mobile,
                    email: response.data.data.email,
                    address: response.data.data.address,
                })
            }
        }).catch(function (error) {
            alert(strings.messages.server_error)
        });
    }

    updateUser() {
        const phone = this.state.phone;
        const mobile = this.state.mobile;
        const email = this.state.email;
        const address = this.state.address;
        const password = this.state.password;
        const password_repeat = this.state.password_repeat;
        const email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/;
        let errors = [];

        if (phone == null || phone == '') {
            errors.push(strings.messages.phone_required)
        }
        if (phone.length < 7 || phone.length > 12 || isNaN(phone) || parseInt(phone) != phone) {
            errors.push(strings.messages.phone_not_valid)
        }
        if (mobile == null || mobile == '') {
            errors.push(strings.messages.mobile_required)
        }
        if (mobile.length != 11 || mobile.substr(0, 2) != "09" || isNaN(mobile) || parseInt(mobile) != mobile) {
            errors.push(strings.messages.mobile_not_valid)
        }
        if (email != null && !email.match(email_pattern)) {
            errors.push(strings.messages.email_not_valid)
        }
        if (address == null || address == '') {
            errors.push(strings.messages.address_required)
        }
        if (address.length < 10) {
            errors.push(strings.messages.address_short)
        }
        if (password != null && password.length < 6) {
            errors.push(strings.messages.password_short)
        }
        if (password != null && password != password_repeat) {
            errors.push(strings.messages.password_not_match)
        }
        if (errors.length == 0) {
            axios.post(strings.host + 'user/update', {
                user_id: this.props.user_id,
                token: this.props.token,
                phone: phone,
                mobile: mobile,
                email: email,
                address: address,
                password: password,
            }).then(function (response) {
                alert(strings.messages.user_updated)
            }).catch(function (error) {
                alert(strings.messages.server_error)
            })
        } else {
            this.setState({
                errors: errors
            })
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior={'padding'} enabled>
                <ScrollView>
                    <Header mt={40} title={'پروفایل'}/>
                    <Button row asFlexStart m={10} onPress={this.props.screenProps.logout}>
                        <Text mr={5} ml={20} color={colors.red}>خروج</Text>
                        <MaterialCommunityIcons name="logout" size={20} color={colors.red} />
                    </Button>

                    <View p={25}>
                        <Text asFlexEnd>نام</Text>
                        <Input placeholder={"نام"} value={this.state.first_name} mt={10} p={10} b={1}
                               bColor={colors.light} bRadius={20} disabled={true} editable={false}
                               selectTextOnFocus={false}/>

                        <Text asFlexEnd mt={30}>نام خانوادگی</Text>
                        <Input placeholder={"نام خانوادگی"} value={this.state.last_name} mt={10} p={10} b={1}
                               bColor={colors.light} bRadius={20} disabled={true} editable={false}
                               selectTextOnFocus={false}/>

                        <Text asFlexEnd mt={30}>کد ملی</Text>
                        <Input placeholder={"کد ملی"} value={this.state.national_code} mt={10} p={10} b={1}
                               bColor={colors.light} bRadius={20} disabled={true}
                               editable={false} selectTextOnFocus={false}/>

                        <Text asFlexEnd mt={30}>تلفن</Text>
                        <Input keyboardType='phone-pad' maxLength={12} placeholder={"تلفن"} value={this.state.phone}
                               mt={10} p={10} b={1}
                               bColor={colors.light} bRadius={20}
                               onChangeText={(value) => {
                                   this.setState({phone: value})
                               }}/>

                        <Text asFlexEnd mt={30}>موبایل</Text>
                        <Input keyboardType='phone-pad' maxLength={11} placeholder={"موبایل"} value={this.state.mobile}
                               mt={10} p={10}
                               b={1}
                               bColor={colors.light} bRadius={20}
                               onChangeText={(value) => {
                                   this.setState({mobile: value})
                               }}/>

                        <Text asFlexEnd mt={30}>ایمیل</Text>
                        <Input placeholder={"ایمیل"} value={this.state.email} mt={10} p={10} b={1}
                               bColor={colors.light} bRadius={20}
                               onChangeText={(value) => {
                                   this.setState({email: value})
                               }}/>

                        <Text asFlexEnd mt={30}>آدرس</Text>
                        <Input multiline={true} numberOfLines={5} placeholder={"آدرس"} value={this.state.address}
                               mt={10} p={10} b={1}
                               bColor={colors.light} bRadius={20}
                               onChangeText={(value) => {
                                   this.setState({address: value})
                               }}/>

                        <Text asFlexEnd mt={30}>نام کاربری</Text>
                        <Input placeholder={"نام کاربری"} value={this.state.username} mt={10} p={10} b={1}
                               bColor={colors.light} bRadius={20}
                               disabled={true} editable={false} selectTextOnFocus={false}/>

                        <Text asFlexEnd mt={30}>رمز عبور</Text>
                        <Input textContentType={'password'} placeholder={"رمز عبور"} mt={10} p={10} b={1}
                               bColor={colors.light} bRadius={20} shadow
                               onChangeText={(value) => {
                                   this.setState({password: value})
                               }}/>

                        <Text asFlexEnd mt={30}>تکرار رمز عبور</Text>
                        <Input textContentType={'password'} placeholder={"تکرار رمز عبور"} mt={10} p={10} b={1}
                               bColor={colors.light} bRadius={20} shadow
                               onChangeText={(value) => {
                                   this.setState({password_repeat: value})
                               }}/>

                        {this.state.errors.length > 0 ?
                            (
                                <View mt={40} p={10} rounded shadow>
                                    {this.state.errors.map((error) => {
                                        return <Text color={colors.red} textCenter>{error}</Text>
                                    })}
                                </View>
                            )
                            :
                            null
                        }

                        <View center>
                            <Button w={-50} h={40} mt={30} mb={20} bg={colors.blue} center bRadius={50} onPress={() => {
                                this.updateUser()
                            }}>
                                <Text color={colors.white} h5>ذخیره تغییرات</Text>
                            </Button>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

SettingsScreen.navigationOptions = {
    header: null,
};

export default SettingsScreen;