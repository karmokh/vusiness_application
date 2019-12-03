import React, {Component} from 'react';
import {KeyboardAvoidingView, ScrollView} from 'react-native';

import Header from "../../components/header/Header";
import View from "../../components/public/MyView";
import Text from "../../components/public/MyText";
import Input from "../../components/public/MyInput";
import Button from "../../components/public/MyButton";
import colors from "../../constants/Colors";
import strings from "../../constants/Strings";
import axios from "axios";

class SeoContentNewProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project_id: this.props.navigation.getParam("project_id"),
            title: null,
            price: null,
            description: null,
            information: [],
            information_rows: 1,
            info_key_1: null,
            info_value_1: null,
            info_key_2: null,
            info_value_2: null,
            info_key_3: null,
            info_value_3: null,
            info_key_4: null,
            info_value_4: null,
            info_key_5: null,
            info_value_5: null,
            info_key_6: null,
            info_value_6: null,
            info_key_7: null,
            info_value_7: null,
            info_key_8: null,
            info_value_8: null,
            info_key_9: null,
            info_value_9: null,
            info_key_10: null,
            info_value_10: null,
            info_key_11: null,
            info_value_11: null,
            info_key_12: null,
            info_value_12: null,
            info_key_13: null,
            info_value_13: null,
            info_key_14: null,
            info_value_14: null,
            info_key_15: null,
            info_value_15: null,
            info_key_16: null,
            info_value_16: null,
            info_key_17: null,
            info_value_17: null,
            info_key_18: null,
            info_value_18: null,
            info_key_19: null,
            info_value_19: null,
            info_key_20: null,
            info_value_20: null,
        }
    }

    showInformationRows() {
        let rows = [];
        for (var i = 1; i <= this.state.information_rows; i++) {
            switch (i) {
                case 1:
                    rows.push(
                        <View row mt={20} key={i}>
                            <View flex mh={5}>
                                <Input placeholder="عنوان" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_key_1}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_key_1: value
                                           })
                                       }}/>
                            </View>
                            <View flex mh={5}>
                                <Input placeholder="مقدار" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_value_1}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_value_1: value
                                           })
                                       }}/>
                            </View>
                        </View>
                    )
                    break;
                case 2:
                    rows.push(
                        <View row mt={20} key={i}>
                            <View flex mh={5}>
                                <Input placeholder="عنوان" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_key_2}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_key_2: value
                                           })
                                       }}/>
                            </View>
                            <View flex mh={5}>
                                <Input placeholder="مقدار" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_value_2}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_value_2: value
                                           })
                                       }}/>
                            </View>
                        </View>
                    )
                    break;
                case 3:
                    rows.push(
                        <View row mt={20} key={i}>
                            <View flex mh={5}>
                                <Input placeholder="عنوان" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_key_3}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_key_3: value
                                           })
                                       }}/>
                            </View>
                            <View flex mh={5}>
                                <Input placeholder="مقدار" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_value_3}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_value_3: value
                                           })
                                       }}/>
                            </View>
                        </View>
                    )
                    break;
                case 4:
                    rows.push(
                        <View row mt={20} key={i}>
                            <View flex mh={5}>
                                <Input placeholder="عنوان" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_key_4}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_key_4: value
                                           })
                                       }}/>
                            </View>
                            <View flex mh={5}>
                                <Input placeholder="مقدار" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_value_4}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_value_4: value
                                           })
                                       }}/>
                            </View>
                        </View>
                    )
                    break;
                case 5:
                    rows.push(
                        <View row mt={20} key={i}>
                            <View flex mh={5}>
                                <Input placeholder="عنوان" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_key_5}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_key_5: value
                                           })
                                       }}/>
                            </View>
                            <View flex mh={5}>
                                <Input placeholder="مقدار" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_value_5}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_value_5: value
                                           })
                                       }}/>
                            </View>
                        </View>
                    )
                    break;
                case 6:
                    rows.push(
                        <View row mt={20} key={i}>
                            <View flex mh={5}>
                                <Input placeholder="عنوان" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_key_6}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_key_6: value
                                           })
                                       }}/>
                            </View>
                            <View flex mh={5}>
                                <Input placeholder="مقدار" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_value_6}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_value_6: value
                                           })
                                       }}/>
                            </View>
                        </View>
                    )
                    break;
                case 7:
                    rows.push(
                        <View row mt={20} key={i}>
                            <View flex mh={5}>
                                <Input placeholder="عنوان" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_key_7}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_key_7: value
                                           })
                                       }}/>
                            </View>
                            <View flex mh={5}>
                                <Input placeholder="مقدار" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_value_7}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_value_7: value
                                           })
                                       }}/>
                            </View>
                        </View>
                    )
                    break;
                case 8:
                    rows.push(
                        <View row mt={20} key={i}>
                            <View flex mh={5}>
                                <Input placeholder="عنوان" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_key_8}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_key_8: value
                                           })
                                       }}/>
                            </View>
                            <View flex mh={5}>
                                <Input placeholder="مقدار" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_value_8}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_value_8: value
                                           })
                                       }}/>
                            </View>
                        </View>
                    )
                    break;
                case 9:
                    rows.push(
                        <View row mt={20} key={i}>
                            <View flex mh={5}>
                                <Input placeholder="عنوان" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_key_9}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_key_9: value
                                           })
                                       }}/>
                            </View>
                            <View flex mh={5}>
                                <Input placeholder="مقدار" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_value_9}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_value_9: value
                                           })
                                       }}/>
                            </View>
                        </View>
                    )
                    break;
                case 10:
                    rows.push(
                        <View row mt={20} key={i}>
                            <View flex mh={5}>
                                <Input placeholder="عنوان" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_key_10}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_key_10: value
                                           })
                                       }}/>
                            </View>
                            <View flex mh={5}>
                                <Input placeholder="مقدار" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_value_10}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_value_10: value
                                           })
                                       }}/>
                            </View>
                        </View>
                    )
                    break;
                case 11:
                    rows.push(
                        <View row mt={20} key={i}>
                            <View flex mh={5}>
                                <Input placeholder="عنوان" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_key_11}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_key_11: value
                                           })
                                       }}/>
                            </View>
                            <View flex mh={5}>
                                <Input placeholder="مقدار" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_value_11}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_value_11: value
                                           })
                                       }}/>
                            </View>
                        </View>
                    )
                    break;
                case 12:
                    rows.push(
                        <View row mt={20} key={i}>
                            <View flex mh={5}>
                                <Input placeholder="عنوان" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_key_12}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_key_12: value
                                           })
                                       }}/>
                            </View>
                            <View flex mh={5}>
                                <Input placeholder="مقدار" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_value_12}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_value_12: value
                                           })
                                       }}/>
                            </View>
                        </View>
                    )
                    break;
                case 13:
                    rows.push(
                        <View row mt={20} key={i}>
                            <View flex mh={5}>
                                <Input placeholder="عنوان" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_key_13}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_key_13: value
                                           })
                                       }}/>
                            </View>
                            <View flex mh={5}>
                                <Input placeholder="مقدار" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_value_13}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_value_13: value
                                           })
                                       }}/>
                            </View>
                        </View>
                    )
                    break;
                case 14:
                    rows.push(
                        <View row mt={20} key={i}>
                            <View flex mh={5}>
                                <Input placeholder="عنوان" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_key_14}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_key_14: value
                                           })
                                       }}/>
                            </View>
                            <View flex mh={5}>
                                <Input placeholder="مقدار" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_value_14}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_value_14: value
                                           })
                                       }}/>
                            </View>
                        </View>
                    )
                    break;
                case 15:
                    rows.push(
                        <View row mt={20} key={i}>
                            <View flex mh={5}>
                                <Input placeholder="عنوان" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_key_15}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_key_15: value
                                           })
                                       }}/>
                            </View>
                            <View flex mh={5}>
                                <Input placeholder="مقدار" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_value_15}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_value_15: value
                                           })
                                       }}/>
                            </View>
                        </View>
                    )
                    break;
                case 16:
                    rows.push(
                        <View row mt={20} key={i}>
                            <View flex mh={5}>
                                <Input placeholder="عنوان" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_key_16}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_key_16: value
                                           })
                                       }}/>
                            </View>
                            <View flex mh={5}>
                                <Input placeholder="مقدار" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_value_16}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_value_16: value
                                           })
                                       }}/>
                            </View>
                        </View>
                    )
                    break;
                case 17:
                    rows.push(
                        <View row mt={20} key={i}>
                            <View flex mh={5}>
                                <Input placeholder="عنوان" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_key_17}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_key_17: value
                                           })
                                       }}/>
                            </View>
                            <View flex mh={5}>
                                <Input placeholder="مقدار" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_value_17}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_value_17: value
                                           })
                                       }}/>
                            </View>
                        </View>
                    )
                    break;
                case 18:
                    rows.push(
                        <View row mt={20} key={i}>
                            <View flex mh={5}>
                                <Input placeholder="عنوان" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_key_18}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_key_18: value
                                           })
                                       }}/>
                            </View>
                            <View flex mh={5}>
                                <Input placeholder="مقدار" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_value_18}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_value_18: value
                                           })
                                       }}/>
                            </View>
                        </View>
                    )
                    break;
                case 19:
                    rows.push(
                        <View row mt={20} key={i}>
                            <View flex mh={5}>
                                <Input placeholder="عنوان" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_key_19}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_key_19: value
                                           })
                                       }}/>
                            </View>
                            <View flex mh={5}>
                                <Input placeholder="مقدار" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_value_19}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_value_19: value
                                           })
                                       }}/>
                            </View>
                        </View>
                    )
                    break;
                case 20:
                    rows.push(
                        <View row mt={20} key={i}>
                            <View flex mh={5}>
                                <Input placeholder="عنوان" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_key_20}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_key_20: value
                                           })
                                       }}/>
                            </View>
                            <View flex mh={5}>
                                <Input placeholder="مقدار" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                       rounded={25} value={this.state.info_value_20}
                                       onChangeText={(value) => {
                                           this.setState({
                                               info_value_20: value
                                           })
                                       }}/>
                            </View>
                        </View>
                    )
                    break;
            }
        }
        return rows;
    }

    submit() {
        if (this.state.title == null || this.state.title == '') {
            alert(strings.messages.product_title_required)
        } else if (this.state.description == null || this.state.description == '') {
            alert(strings.messages.product_description_required)
        } else if (this.state.price == null || this.state.price == '') {
            alert(strings.messages.product_price_required)
        } else if (isNaN(this.state.price) || parseInt(this.state.price) != this.state.price) {
            alert(strings.messages.product_price_not_valid)
        } else {
            var that = this;
            let information = [
                {
                    key: this.state.info_key_1,
                    value: this.state.info_value_1,
                },
                {
                    key: this.state.info_key_2,
                    value: this.state.info_value_2,
                },
                {
                    key: this.state.info_key_3,
                    value: this.state.info_value_3,
                },
                {
                    key: this.state.info_key_4,
                    value: this.state.info_value_4,
                },
                {
                    key: this.state.info_key_5,
                    value: this.state.info_value_5,
                },
                {
                    key: this.state.info_key_6,
                    value: this.state.info_value_6,
                },
                {
                    key: this.state.info_key_7,
                    value: this.state.info_value_7,
                },
                {
                    key: this.state.info_key_8,
                    value: this.state.info_value_8,
                },
                {
                    key: this.state.info_key_9,
                    value: this.state.info_value_9,
                },
                {
                    key: this.state.info_key_10,
                    value: this.state.info_value_10,
                },
                {
                    key: this.state.info_key_11,
                    value: this.state.info_value_11,
                },
                {
                    key: this.state.info_key_12,
                    value: this.state.info_value_12,
                },
                {
                    key: this.state.info_key_13,
                    value: this.state.info_value_13,
                },
                {
                    key: this.state.info_key_14,
                    value: this.state.info_value_14,
                },
                {
                    key: this.state.info_key_15,
                    value: this.state.info_value_15,
                },
                {
                    key: this.state.info_key_16,
                    value: this.state.info_value_16,
                },
                {
                    key: this.state.info_key_17,
                    value: this.state.info_value_17,
                },
                {
                    key: this.state.info_key_18,
                    value: this.state.info_value_18,
                },
                {
                    key: this.state.info_key_19,
                    value: this.state.info_value_19,
                },
                {
                    key: this.state.info_key_20,
                    value: this.state.info_value_20,
                },
            ]
            axios.post(strings.host + 'project/product/store', {
                user_id: that.props.screenProps.user_id,
                token: that.props.screenProps.token,
                seo_id: that.state.project_id,
                title: that.state.title,
                price: that.state.price,
                description: that.state.description,
                information: information
            }).then(function (response) {
                if (response.data.is_successful) {
                    that.setState({
                        title: null,
                        price: null,
                        description: null,
                        information: [],
                        information_rows: 1,
                        info_key_1: null,
                        info_value_1: null,
                        info_key_2: null,
                        info_value_2: null,
                        info_key_3: null,
                        info_value_3: null,
                        info_key_4: null,
                        info_value_4: null,
                        info_key_5: null,
                        info_value_5: null,
                        info_key_6: null,
                        info_value_6: null,
                        info_key_7: null,
                        info_value_7: null,
                        info_key_8: null,
                        info_value_8: null,
                        info_key_9: null,
                        info_value_9: null,
                        info_key_10: null,
                        info_value_10: null,
                        info_key_11: null,
                        info_value_11: null,
                        info_key_12: null,
                        info_value_12: null,
                        info_key_13: null,
                        info_value_13: null,
                        info_key_14: null,
                        info_value_14: null,
                        info_key_15: null,
                        info_value_15: null,
                        info_key_16: null,
                        info_value_16: null,
                        info_key_17: null,
                        info_value_17: null,
                        info_key_18: null,
                        info_value_18: null,
                        info_key_19: null,
                        info_value_19: null,
                        info_key_20: null,
                        info_value_20: null,
                    })
                    alert(strings.messages.product_saved)
                } else {
                    alert(response.data.message)
                }
            }).catch(function (error) {
                alert(error)
            });
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior={"padding"} enabled>
                <ScrollView>
                    <Header mt={40} title={'افزودن محصول'}/>

                    <View p={25}>
                        <View mt={20}>
                            <Text>عنوان محصول</Text>
                            <Input placeholder="عنوان محصول" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                   rounded={25} value={this.state.title} onChangeText={(value) => {
                                this.setState({title: value})
                            }}/>
                        </View>

                        <View mt={20}>
                            <Text>قیمت</Text>
                            <Input keyboardType={"numeric"} placeholder="قیمت" mt={10} ph={10} pv={5} b={1}
                                   bColor={colors.light}
                                   rounded={25} value={this.state.price} onChangeText={(value) => {
                                this.setState({price: value})
                            }}/>
                        </View>

                        <View mt={20}>
                            <Text>توضیحات محصول</Text>
                            <Input h={180} mt={10} p={15} b={1} bColor={colors.light} rounded multiline={true}
                                   placeholder={"توضیحات محصول"} value={this.state.description}
                                   onChangeText={(value) => {
                                       this.setState({description: value})
                                   }}/>
                        </View>

                        <View mt={20} p={20} b={1} bColor={colors.light} rounded>
                            <Text>مشخصات</Text>

                            {this.showInformationRows()}

                            <View mt={20} center>
                                <Button w={-220} h={40} bg={colors.blue} center bRadius={40} onPress={() => {
                                    if (this.state.information_rows == 20) {
                                        alert(strings.messages.max_information_rows)
                                    } else {
                                        this.setState({
                                            information_rows: this.state.information_rows + 1
                                        })
                                    }
                                }}>
                                    <Text color={colors.white} h5>افزودن مشخصات</Text>
                                </Button>
                            </View>
                        </View>

                        <View mv={30} center>
                            <Button w={-150} h={40} bg={colors.green} center bRadius={40} onPress={() => {
                                this.submit()
                            }}>
                                <Text color={colors.white} h5>ارسال</Text>
                            </Button>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

SeoContentNewProduct.navigationOptions = {
    header: null,
};

export default SeoContentNewProduct;