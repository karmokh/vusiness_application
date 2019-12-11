import {AppLoading} from 'expo';
import * as Font from 'expo-font';
import React, {Component, Fragment} from 'react';
import {AsyncStorage, KeyboardAvoidingView, Linking, NetInfo, Platform, StatusBar, StyleSheet} from 'react-native';
import {Feather, Ionicons} from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';
import colors from "./constants/Colors";
import NoInternetModal from "./components/public/NoInternetModal";
import View from "./components/public/MyView";
import Input from "./components/public/MyInput";
import Text from "./components/public/MyText";
import Image from "./components/public/MyImage";
import Button from "./components/public/MyButton";
import axios from "axios";
import strings from "./constants/Strings";
import registerForPushNotificationsAsync from "./functions/RegisterPushNotification"
import start from "./assets/images/start.gif"
import logo from "./assets/images/logo.png"

class App extends Component {
    constructor(props) {
        super(props);
        this.loadResourcesAsync = this.loadResourcesAsync.bind(this);
        this.state = {
            noInternet: false,
            isLoadingComplete: false,
            setLoadingComplete: false,
            loginSelected: true,
            isLogged: false,
            username: null,
            password: null,
            user_id: null,
            token: null
        }
    }

    login() {
        var that = this;
        axios.post(strings.host + 'login', {
            username: this.state.username,
            password: this.state.password
        }).then(function (response) {
            if (response.data.is_successful) {
                that.setUserData(response.data.data)
            } else {
                alert(response.data.message)
            }
        }).catch(function (error) {
            alert(error)
        });
    }

    async setUserData(data) {
        await AsyncStorage.multiSet([['user_id', data.user_id.toString()], ['token', data.token.toString()]]);
        this.setState({
            isLogged: true,
            user_id: data.user_id,
            token: data.token,
        })
    }

    async loadResourcesAsync() {
        await Promise.all([
            // Asset.loadAsync([
            //     require('./assets/images/robot-dev.png'),
            //     require('./assets/images/robot-prod.png'),
            // ]),
            Font.loadAsync({
                // This is the font that we are using for our tab bar
                ...Ionicons.font,
                // remove this if you are not using it in your app
                'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
                // We include SpaceMono because we use it in HomeScreen.js. Feel free to
                'iran-sans': require('./assets/fonts/IRANSansWeb.ttf'),
            }),
        ])

        this.setState({
            setLoadingComplete: true,
            user_id: await AsyncStorage.getItem('user_id'),
            token: await AsyncStorage.getItem('token'),
        })

        NetInfo.isConnected.fetch().then(isConnected => {
            if (isConnected) {
                this.setState({
                    noInternet: false
                })
                this.checkLogin()
            } else {
                this.setState({
                    isLoadingComplete: true,
                    noInternet: true
                })
            }
        })
        NetInfo.isConnected.addEventListener(
            'connectionChange',
            (isConnected) => {
                if (isConnected) {
                    this.setState({
                        noInternet: false
                    })
                    this.checkLogin()
                } else {
                    this.setState({
                        noInternet: true
                    })
                }
            }
        );
    }

    async componentDidMount() {
        await registerForPushNotificationsAsync()
    }

    async logout() {
        this.setState({
            isLoadingComplete: true,
            isLogged: false,
            username: null,
            password: null,
            user_id: null,
            token: null

        })
        await AsyncStorage.clear();
    }

    checkLogin() {
        if (this.state.user_id) {
            var that = this;
            axios.post(strings.host + 'verify_token', {
                user_id: that.state.user_id,
                token: that.state.token,
            }).then(function (response) {
                if (response.data.is_successful) {
                    that.setState({
                        isLogged: true,
                        isLoadingComplete: true
                    })
                } else {
                    that.logout()
                }
            }).catch(function (error) {
                that.setState({
                    isLoadingComplete: true
                })
            });
        } else {
            this.setState({
                isLoadingComplete: true
            })
        }
    }

    handleLoadingError(error) {
        // In this case, you might want to report the error to your error reporting
        // service, for example Sentry
        console.warn(error);
    }

    render() {
        if (!this.state.setLoadingComplete) {
            return (
                <AppLoading
                    startAsync={
                        this.loadResourcesAsync
                    }
                    onError={() => {
                        this.handleLoadingError()
                    }}
                    onFinish={() => {
                        this.setState({
                            isLoadingComplete: true,
                            setLoadingComplete: true
                        })
                    }}
                />
            );
        } else if (!this.state.isLoadingComplete) {
            return (
                <View flex center>
                    <NoInternetModal noInternet={this.state.noInternet}/>
                    <Text textCenter size={18} color={colors.dark}>به اپلیکیشن شرکت ویستا خوش آمدید</Text>
                    <Image mt={80} source={start} w={-40} h={250}/>
                    <Text mt={50} center color={colors.gray}>در حال دریافت اطلاعات</Text>
                </View>
            )
        } else if (!this.state.isLogged) {
            return (
                <KeyboardAvoidingView style={{flex: 1}} behavior={"padding"} enabled>
                    <NoInternetModal noInternet={this.state.noInternet}/>
                    <View style={styles.login}>
                        <View row center>
                            <Text h4 mr={10} color={colors.dark}>پرتال شرکت ویستا</Text>
                            <Image source={logo} w={40} h={40}/>
                        </View>

                        <View row mt={30} mb={20} p={5} bg={colors.blue} rounded={50}>
                            <Button flex center p={10} rounded={50}
                                    bg={this.state.loginSelected ? colors.white : colors.blue}
                                    onPress={() => {
                                        this.setState({
                                            loginSelected: true
                                        })
                                    }}>
                                <Text color={this.state.loginSelected ? colors.blue : colors.white}>ورود</Text>
                            </Button>
                            <Button flex center p={10} rounded={50}
                                    bg={this.state.loginSelected ? colors.blue : colors.white}
                                    onPress={() => {
                                        this.setState({
                                            loginSelected: false
                                        })
                                    }}>
                                <Text color={this.state.loginSelected ? colors.white : colors.blue}>ثبت نام</Text>
                            </Button>
                        </View>

                        {this.state.loginSelected ? (
                            <Fragment>
                                <View>
                                    <Text h5 color={colors.gray} m={10}>نام کاربری</Text>
                                    <View row aiCenter ph={10} pv={5} b={1} bColor={colors.light}
                                          bg={colors.white} textRight rounded={25}>
                                        <Input flex={10} mr={10} placeholder={"نام کاربری خود را وارد نمایید"}
                                               value={this.state.username}
                                               onChangeText={(value) => {
                                                   this.setState({
                                                       username: value
                                                   })
                                               }}
                                        />
                                        <Feather flex={1} name="user-plus" size={20} color={colors.gray}/>
                                    </View>

                                    <Text h5 color={colors.gray} mt={30} mh={10} mb={10}>رمز عبور</Text>
                                    <View row aiCenter ph={10} pv={5} b={1} bColor={colors.light}
                                          bg={colors.white} textRight rounded={25}>
                                        <Input flex={10} mr={10} secureTextEntry={true}
                                               placeholder={"رمز عبور خود را وارد نمایید"}
                                               value={this.state.password}
                                               onChangeText={(value) => {
                                                   this.setState({
                                                       password: value
                                                   })
                                               }}
                                        />
                                        <Feather flex={1} name="lock" size={20} color={colors.gray}/>
                                    </View>
                                </View>

                                <View mv={20} center>
                                    <Button row w={250} h={50} mt={20} bg={colors.blue} center bRadius={40}
                                            onPress={() => {
                                                this.login()
                                            }}>
                                        <Text color={colors.white} h5 mr={8}>ورود</Text>
                                        <Feather flex={1} name="log-in" size={28} color={colors.white}/>
                                    </Button>
                                </View>
                            </Fragment>
                        ) : (
                            <View mv={50}>
                                <Text color={colors.gray} h5 textCenter>جهت ایجاد حساب کاربری در اپلیکیشن شرکت
                                    ویستا، با
                                    کارشناسان شرکت تماس حاصل نمایید</Text>
                                <Button row w={250} h={50} mt={80} bg={colors.blue} center bRadius={40}
                                        onPress={() => {
                                            Linking.openURL("tel:02188551470")
                                        }}>
                                    <Text color={colors.white} h5 mr={8}>تماس با کارشناس</Text>
                                    <Feather flex={1} name="phone-call" size={28} color={colors.white}/>
                                </Button>
                            </View>
                        )}
                    </View>
                </KeyboardAvoidingView>
            )
        } else {
            return (
                <View style={styles.container}>
                    {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
                    <NoInternetModal noInternet={this.state.noInternet}/>
                    <AppNavigator screenProps={{
                        user_id: this.state.user_id, token: this.state.token, logout: () => {
                            this.logout()
                        }
                    }}/>
                </View>
            );
        }
    }
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    login: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 50
    },
});
