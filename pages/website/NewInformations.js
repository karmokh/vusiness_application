import React, {Component, Fragment} from 'react';
import {KeyboardAvoidingView, Modal, ScrollView, Switch} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import {ColorPicker} from 'react-native-color-picker'

import View from "../../components/public/MyView";
import Text from "../../components/public/MyText";
import Input from "../../components/public/MyInput";
import Image from "../../components/public/MyImage";
import Button from "../../components/public/MyButton";
import Header from "../../components/header/Header";

import colors from "../../constants/Colors"
import camera from "../../assets/icons/camera.png"
import strings from "../../constants/Strings";
import axios from "axios";

class NewInformations extends Component {
    constructor(props) {
        super(props);

        this.state = {
            package_id: this.props.navigation.getParam("package_id"),
            options: this.props.navigation.getParam("options"),
            exclusive_option: this.props.navigation.getParam("exclusive_option"),
            exclusive_option_text: this.props.navigation.getParam("exclusive_option_text"),
            image: null,
            title: null,
            phone: null,
            phone_alternate: null,
            telegram: null,
            instagram: null,
            same_website: null,
            color: null,
            description: null,
            preferred_domain: null,
            preferred_domain_alternate: null,
            have_domain: false,
            domain_url: null,
            domain_username: null,
            domain_password: null,
            have_host: false,
            host_url: null,
            host_username: null,
            host_password: null,
            modal_visible: false,
            errors: []
        };
    }

    componentWillMount() {
        this.getPermissionAsync();
        console.log(this.state)
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({image: result.uri});
        }
    };

    submit() {
        let errors = [];
        if (this.state.title == null || this.state.title == '') {
            errors.push(strings.messages.website_title_required)
        }
        if (this.state.phone == null || this.state.phone == '') {
            errors.push(strings.messages.phone_required)
        } else if (this.state.phone.length < 7 || this.state.phone.length > 12 || isNaN(this.state.phone) || parseInt(this.state.phone) != this.state.phone) {
            errors.push(strings.messages.phone_not_valid)
        }
        if (this.state.phone_alternate != null && (this.state.phone_alternate.length < 7 || this.state.phone_alternate.length > 12 || isNaN(this.state.phone_alternate) || parseInt(this.state.phone_alternate) != this.state.phone_alternate)) {
            errors.push(strings.messages.phone_not_valid)
        }
        if (!this.state.have_domain && (this.state.preferred_domain == null || this.state.preferred_domain == '')) {
            errors.push(strings.messages.preferred_domain_required)
        }
        if (!this.state.have_domain && (this.state.preferred_domain_alternate == null || this.state.preferred_domain_alternate == '')) {
            errors.push(strings.messages.preferred_domain_alternate_required)
        }
        if (this.state.have_domain && (this.state.domain_url == null || this.state.domain_url == '')) {
            errors.push(strings.messages.domain_url_required)
        }
        if (this.state.have_domain && (this.state.domain_username == null || this.state.domain_username == '')) {
            errors.push(strings.messages.domain_username_required)
        }
        if (this.state.have_domain && (this.state.domain_password == null || this.state.domain_password == '')) {
            errors.push(strings.messages.domain_password_required)
        }
        if (this.state.have_host && (this.state.host_url == null || this.state.host_url == '')) {
            errors.push(strings.messages.host_url_required)
        }
        if (this.state.have_host && (this.state.host_username == null || this.state.host_username == '')) {
            errors.push(strings.messages.host_username_required)
        }
        if (this.state.have_host && (this.state.host_password == null || this.state.host_password == '')) {
            errors.push(strings.messages.host_password_required)
        }
        if (this.state.description == null || this.state.description == '') {
            errors.push(strings.messages.description_required)
        }
        if (errors.length == 0) {
            var that = this;

            // let body = new FormData();
            // body.append('logo', this.state.image ? {uri: this.state.image, name: 'logo.jpg', type: 'image/jpeg'} : null);
            // body.append('user_id', this.props.screenProps.user_id);
            // body.append('token', this.props.screenProps.token);
            // body.append('title', this.state.title);
            // body.append('description', this.state.description);
            // body.append('package_id', this.state.title);
            // body.append('options', this.state.options);
            // body.append('phone', this.state.phone);
            // body.append('phone_alternate', this.state.phone_alternate);
            // body.append('telegram', this.state.telegram);
            // body.append('instagram', this.state.instagram);
            // body.append('same_website', this.state.same_website);
            // body.append('color', this.state.color);
            // body.append('prefered_domain', this.state.preferred_domain);
            // body.append('alternate_domain', this.state.preferred_domain_alternate);
            // body.append('have_domain', this.state.have_domain);
            // body.append('domain_url', this.state.domain_url);
            // body.append('domain_username', this.state.domain_username);
            // body.append('domain_password', this.state.domain_password);
            // body.append('have_host', this.state.have_host);
            // body.append('host_url', this.state.host_url);
            // body.append('host_username', this.state.host_username);
            // body.append('host_password', this.state.host_password);
            // body.append('exclusive_options', this.state.exclusive_option);
            // body.append('exclusive_options_description', this.state.exclusive_option_text);

            axios.post(strings.host + 'website/store', {
                logo: that.state.image ? {uri: this.state.image, name: 'logo.jpg', type: 'image/jpeg'} : null,
                user_id: that.props.screenProps.user_id,
                token: that.props.screenProps.token,
                title: that.state.title,
                description: that.state.description,
                package_id: that.state.package_id,
                options: that.state.options,
                phone: that.state.phone,
                phone_alternate: that.state.phone_alternate,
                telegram: that.state.telegram,
                instagram: that.state.instagram,
                same_website: that.state.same_website,
                color: that.state.color,
                prefered_domain: that.state.preferred_domain,
                alternate_domain: that.state.preferred_domain_alternate,
                have_domain: that.state.have_domain,
                domain_url: that.state.domain_url,
                domain_username: that.state.domain_username,
                domain_password: that.state.domain_password,
                have_host: that.state.have_host,
                host_url: that.state.host_url,
                host_username: that.state.host_username,
                host_password: that.state.host_password,
                exclusive_options: that.state.exclusive_option,
                exclusive_options_description: that.state.exclusive_option_text
            }).then(function (response) {
                if (response.data.is_successful) {
                    alert(strings.messages.website_saved)
                    that.props.navigation.navigate("Website", {id: response.data.data.id})
                } else {
                    alert(response.data.message)
                }
            }).catch(function (error) {
                alert(error)
                console.log(121212)
            });
        } else {
            this.setState({
                errors: errors
            })
        }
    }

    selectColor(color) {
        this.setState({
            color: color,
            modal_visible: false
        })
    }

    render() {
        return (
            <Fragment>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modal_visible}
                    onRequestClose={() => {
                        this.setState({
                            modal_visible: false
                        })
                    }}>
                    <View flex p={30}>
                        <ColorPicker
                            onColorSelected={color => this.selectColor(color)}
                            style={{flex: 1}}
                        />
                    </View>
                </Modal>

                <KeyboardAvoidingView behavior={'padding'} enabled>
                    <ScrollView>
                        <Header mt={40} title={'اطلاعات وبسایت'}/>
                        <View p={25}>
                            <Button center onPress={this._pickImage}>
                                <Text>لوگوی وبسایت</Text>
                                <View mt={15} b={1} bColor={colors.light} circle overflow={"hidden"}>
                                    <Image source={this.state.image ? {uri: this.state.image} : camera} w={120}
                                           h={120}/>
                                </View>
                            </Button>

                            <View mt={20}>
                                <Text>عنوان وبسایت</Text>
                                <Input placeholder={"عنوان وبسایت"} mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.title}
                                       onChangeText={(value) => {
                                           this.setState({
                                               title: value
                                           })
                                       }}
                                />
                            </View>

                            <View mt={20}>
                                <Text>شماره تلفن 1</Text>
                                <Input keyboardType={'phone-pad'} placeholder={"شماره تلفن 1"} mt={10} ph={10} pv={5}
                                       b={1}
                                       bColor={colors.light}
                                       rounded={25} value={this.state.phone}
                                       onChangeText={(value) => {
                                           this.setState({
                                               phone: value
                                           })
                                       }}
                                />
                            </View>

                            <View mt={20}>
                                <Text>شماره تلفن 2</Text>
                                <Input keyboardType={'phone-pad'} placeholder={"شماره تلفن 2"} mt={10} ph={10} pv={5}
                                       b={1}
                                       bColor={colors.light}
                                       rounded={25} value={this.state.phone_alternate}
                                       onChangeText={(value) => {
                                           this.setState({
                                               phone_alternate: value
                                           })
                                       }}
                                />
                            </View>

                            <View mt={20}>
                                <Text>آدرس تلگرام</Text>
                                <Input placeholder={"آدرس تلگرام"} mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.telegram}
                                       onChangeText={(value) => {
                                           this.setState({
                                               telegram: value
                                           })
                                       }}
                                />
                            </View>

                            <View mt={20}>
                                <Text>آدرس اینستاگرام</Text>
                                <Input placeholder={"آدرس اینستاگرام"} mt={10} ph={10} pv={5} b={1}
                                       bColor={colors.light}
                                       rounded={25} value={this.state.instagram}
                                       onChangeText={(value) => {
                                           this.setState({
                                               instagram: value
                                           })
                                       }}
                                />
                            </View>

                            <View mt={20}>
                                <Text>وبسایت مشابه</Text>
                                <Input placeholder={"وبسایت مشابه"} mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.same_website}
                                       onChangeText={(value) => {
                                           this.setState({
                                               same_website: value
                                           })
                                       }}
                                />
                            </View>

                            <View mt={20}>
                                <Text>رنگ پیشنهادی</Text>
                                <Input placeholder={"رنگ پیشنهادی"} mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.color}
                                       onFocus={() => {
                                           this.setState({
                                               modal_visible: true
                                           })
                                       }}
                                />
                            </View>

                            <View row mt={20}>
                                <View flex={2} size={12}>
                                    <Text textLeft>50,000- تومان</Text>
                                </View>
                                <View flex={2}>
                                    <Text size={12}>دامنه خریداری کرده اید؟</Text>
                                </View>
                                <View flex>
                                    <Switch value={this.state.have_domain} onValueChange={() => {
                                        this.setState({
                                            have_domain: !this.state.have_domain
                                        })
                                    }}/>
                                </View>
                            </View>

                            <View style={{display: this.state.have_domain ? 'none' : 'flex'}}>
                                <View mt={20}>
                                    <Text>دامنه اولویت اول</Text>
                                    <Input placeholder={"دامنه اولویت اول"} mt={10} ph={10} pv={5} b={1}
                                           bColor={colors.light}
                                           rounded={25} value={this.state.preferred_domain}
                                           onChangeText={(value) => {
                                               this.setState({
                                                   preferred_domain: value
                                               })
                                           }}
                                    />
                                </View>

                                <View mt={20}>
                                    <Text>دامنه اولویت دوم</Text>
                                    <Input placeholder={"دامنه اولویت دوم"} mt={10} ph={10} pv={5} b={1}
                                           bColor={colors.light}
                                           rounded={25} value={this.state.preferred_domain_alternate}
                                           onChangeText={(value) => {
                                               this.setState({
                                                   preferred_domain_alternate: value
                                               })
                                           }}
                                    />
                                </View>
                            </View>

                            <View style={{display: this.state.have_domain ? 'flex' : 'none'}}>
                                <View mt={20}>
                                    <Text>آدرس وبسایت کارگزار دامنه</Text>
                                    <Input placeholder={"آدرس وبسایت کارگزار دامنه"} mt={10} ph={10} pv={5} b={1}
                                           bColor={colors.light}
                                           rounded={25} value={this.state.domain_url}
                                           onChangeText={(value) => {
                                               this.setState({
                                                   title: value
                                               })
                                           }}
                                    />
                                </View>

                                <View mt={20}>
                                    <Text>نام کاربری کارگزار دامنه</Text>
                                    <Input placeholder={"نام کاربری کارگزار دامنه"} mt={10} ph={10} pv={5} b={1}
                                           bColor={colors.light}
                                           rounded={25} value={this.state.domain_username}
                                           onChangeText={(value) => {
                                               this.setState({
                                                   domain_username: value
                                               })
                                           }}
                                    />
                                </View>

                                <View mt={20}>
                                    <Text>رمز عبور کارگزار دامنه</Text>
                                    <Input placeholder={"رمز عبور کارگزار دامنه"} mt={10} ph={10} pv={5} b={1}
                                           bColor={colors.light}
                                           rounded={25} value={this.state.domain_password}
                                           onChangeText={(value) => {
                                               this.setState({
                                                   domain_password: value
                                               })
                                           }}
                                    />
                                </View>
                            </View>

                            <View row mt={10}>
                                <View flex={2}>
                                    <Text textLeft size={12}>150,000- تومان</Text>
                                </View>
                                <View flex={2}>
                                    <Text size={12}>هاست خریداری کرده اید؟</Text>
                                </View>
                                <View flex>
                                    <Switch value={this.state.have_host} onValueChange={() => {
                                        this.setState({
                                            have_host: !this.state.have_host
                                        })
                                    }}/>
                                </View>
                            </View>

                            <View style={{display: this.state.have_host ? 'flex' : 'none'}}>
                                <View mt={20}>
                                    <Text>آدرس وبسایت کارگزار هاست</Text>
                                    <Input placeholder={"آدرس وبسایت کارگزار هاست"} mt={10} ph={10} pv={5} b={1}
                                           bColor={colors.light}
                                           rounded={25} value={this.state.host_url}
                                           onChangeText={(value) => {
                                               this.setState({
                                                   host_url: value
                                               })
                                           }}
                                    />
                                </View>

                                <View mt={20}>
                                    <Text>نام کاربری کارگزار هاست</Text>
                                    <Input placeholder={"نام کاربری کارگزار هاست"} mt={10} ph={10} pv={5} b={1}
                                           bColor={colors.light}
                                           rounded={25} value={this.state.host_username}
                                           onChangeText={(value) => {
                                               this.setState({
                                                   host_username: value
                                               })
                                           }}
                                    />
                                </View>

                                <View mt={20}>
                                    <Text>رمز عبور کارگزار هاست</Text>
                                    <Input placeholder={"رمز عبور کارگزار هاست"} mt={10} ph={10} pv={5} b={1}
                                           bColor={colors.light}
                                           rounded={25} value={this.state.host_password}
                                           onChangeText={(value) => {
                                               this.setState({
                                                   host_password: value
                                               })
                                           }}
                                    />
                                </View>
                            </View>

                            <View mt={20}>
                                <Input h={180} p={20} b={1} bColor={colors.light} rounded multiline={true}
                                       placeholder={"توضیحات خود را در مورد قابلیت مد نظرتان که در میان قابلیت های فوق نیست وارد نمایید"}
                                       value={this.state.description}
                                       onChangeText={(value) => {
                                           this.setState({
                                               description: value
                                           })
                                       }}
                                />
                            </View>

                            {this.state.errors.length > 0 ?
                                (
                                    <View mt={40} p={15} rounded b={1} bColor={colors.light}>
                                        {this.state.errors.map((error, i) => {
                                            return <Text key={i} color={colors.red}>{error}</Text>
                                        })}
                                    </View>
                                )
                                :
                                null
                            }

                            <View mt={30} mb={30} center>
                                <Button w={200} h={40} mt={20} bg={colors.blue} center bRadius={40} onPress={() => {
                                    this.submit()
                                }}>
                                    <Text color={colors.white} h5>ثبت پروژه</Text>
                                </Button>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </Fragment>
        );
    };
}

NewInformations.navigationOptions = {
    header: null,
};

export default NewInformations;