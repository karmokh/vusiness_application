import React, {Component, Fragment} from 'react';
import {ScrollView, Switch, KeyboardAvoidingView} from 'react-native';

import View from "../../components/public/MyView";
import Text from "../../components/public/MyText";
import Input from "../../components/public/MyInput";
import Button from "../../components/public/MyButton";
import Image from "../../components/public/MyImage";
import Header from "../../components/header/Header";
import check from "../../assets/icons/check.png"
import basket from "../../assets/icons/basket.png"

import colors from "../../constants/Colors"
import axios from "axios";
import strings from "../../constants/Strings";

class NewOptions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            package: this.props.navigation.getParam('package'),
            package_options: [],
            options: [],
            selected_options: [],
            exclusive_option: false,
            exclusive_option_text: null,
            about_description: false,
            total_price: this.props.navigation.getParam('package').price
        };
    }

    componentWillMount() {
        var that = this;
        axios.post(strings.host + 'website/options', {
            user_id: that.props.screenProps.user_id,
            token: that.props.screenProps.token,
        }).then(function (response) {
            if (response.data.is_successful) {
                that.setState({
                    options: response.data.data
                })

            }
        }).catch(function (error) {
            alert(strings.messages.server_error)
        });
    }

    renderPackageOptions() {
        let options = []
        this.state.package.options.map((option, index) => {
            this.state.package_options = [...this.state.package_options, option.id]
            options.push(
                <View key={index} row mt={10}>
                    <View flex={5}>
                        <Text>{option.title}</Text>
                    </View>
                    <View flex center>
                        <Image source={check} w={20} h={20}/>
                    </View>
                </View>
            )
        })

        return options;
    }

    renderOptions() {
        let options = []
        this.state.options.filter(option => {
            return (!this.state.package_options.includes(option.id) && option.is_special == this.state.package.is_special)
        }).map((option, index) => {
            options.push(
                <Fragment key={index}>
                    <View row mt={10}>
                        <View flex={2}>
                            <Text textLeft>{option.ui_price} تومان</Text>
                        </View>
                        <View flex={2}>
                            <Text>{option.title}</Text>
                        </View>
                        <View flex>
                            <Switch value={this.state.selected_options.includes(option.id)}
                                    onValueChange={(value) => {
                                        if (value) {
                                            this.setState({
                                                selected_options: [...this.state.selected_options, option.id],
                                                total_price: this.state.total_price + option.price
                                            })
                                        } else {
                                            this.setState({
                                                total_price: this.state.total_price - option.price,
                                                selected_options: this.state.selected_options.filter(option_id => {
                                                    return option_id != option.id
                                                })
                                            })
                                        }
                                    }}/>
                        </View>
                    </View>

                    <View mt={20} style={{display: this.state.selected_options.includes(option.id) ? 'flex' : 'none'}}>
                        <Text>{option.description}</Text>
                    </View>
                </Fragment>
            )
        })

        options.push(
            <Fragment>
                <View row mt={10}>
                    <View flex={2}>
                        <Text textLeft>-</Text>
                    </View>
                    <View flex={2}>
                        <Text>آپشن اختصاصی</Text>
                    </View>
                    <View flex>
                        <Switch value={this.state.exclusive_option} onValueChange={() => {
                            this.setState({
                                exclusive_option: !this.state.exclusive_option
                            })
                        }}/>
                    </View>
                </View>

                <View mt={20} style={{display: this.state.exclusive_option ? 'flex' : 'none'}}>
                    <Input h={120} p={15} b={1} bColor={colors.light} rounded multiline={true}
                           placeholder={"توضیحات خود را در مورد قابلیت مد نظرتان که در میان قابلیت های فوق نیست وارد نمایید"}
                           value={this.state.exclusive_option_text}
                           onChangetext={(value) => {
                               this.setState({
                                   exclusive_option_text: value
                               })
                           }}
                    />
                </View>
            </Fragment>
        )

        return options;
    }

    nextPage() {
        const data = {
            package_id: this.state.package.id,
            options: this.state.selected_options,
            exclusive_option: this.state.exclusive_option,
            exclusive_option_text: this.state.exclusive_option_text,
        }
        this.props.navigation.navigate("WebsiteNewInformation", data)
    }

    render() {
        return (
            <KeyboardAvoidingView behavior={'padding'} enabled>
                <ScrollView>
                    <Header mt={40} title={this.state.package.title}/>
                    <View p={25}>
                        <View overflow={'hidden'} p={10} rounded shadow h={this.state.about_description ? 'auto' : 40}>
                            <Button onPress={() => {
                                this.setState({
                                    about_description: !this.state.about_description
                                })
                            }}>
                                <Text>{this.state.about_description ? '-' : '+'} توضیحات بیشتر
                                    درباره {this.state.package.title}</Text>
                            </Button>
                            <Text mt={20}>{this.state.package.description}</Text>
                        </View>

                        <View mt={30}>
                            <Text h5 color={colors.blue}>آپشن های اختصاصی {this.state.package.title}</Text>

                            {this.renderPackageOptions()}
                        </View>
                    </View>

                    <Header mt={30} mb={10} title={'آپشن های انتخابی'}/>
                    <View ph={25}>
                        <View>
                            {this.renderOptions()}
                        </View>

                        <View mt={30} p={10} center b={1} bColor={colors.gray} rounded>
                            <Image source={basket} w={60} h={60}/>
                            <Text>سبد خرید</Text>
                            <Text mt={10}>هزینه آپشن
                                ها: {this.state.total_price - this.state.package.price} تومان</Text>
                            <Text mt={10}>هزینه کل: {this.state.total_price} تومان</Text>
                        </View>

                        <Button w={-150} h={40} mt={30} mb={30} ml={50} bg={colors.blue} center bRadius={40}
                                onPress={() => {
                                    this.nextPage()
                                }}>
                            <Text color={colors.white} h5>مرحله بعد</Text>
                        </Button>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    };
}

NewOptions.navigationOptions = {
    header: null,
};

export default NewOptions;