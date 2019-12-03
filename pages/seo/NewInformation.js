import React, {Component} from 'react';
import {KeyboardAvoidingView, ScrollView} from 'react-native';

import View from "../../components/public/MyView";
import Text from "../../components/public/MyText";
import Input from "../../components/public/MyInput";
import Button from "../../components/public/MyButton";
import Picker from "../../components/public/MyPicker";
import Header from "../../components/header/Header";

import colors from "../../constants/Colors"
import strings from "../../constants/Strings"
import axios from "axios";

class NewInformation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isKeyword: this.props.navigation.getParam("isKeyword"),
            keywordRows: 1,
            maxKeywordRows: 10,
            package: this.props.navigation.getParam("package"),
            website: null,
            duration: 1,
            host_url: null,
            host_username: null,
            host_password: null,
            admin_url: null,
            admin_username: null,
            admin_password: null,
            work_type: null,
            description: null,
            keyword_1: null,
            keyword_2: null,
            keyword_3: null,
            keyword_4: null,
            keyword_5: null,
            keyword_6: null,
            keyword_7: null,
            keyword_8: null,
            keyword_9: null,
            keyword_10: null,
            errors: []
        };
    }

    showKeywordRows() {
        let rows = [];
        for (var i = 1; i <= this.state.keywordRows; i++) {
            switch (i) {
                case 1:
                    rows.push(
                        <View mt={20} key={i}>
                            <Input placeholder="کلیدواژه" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                   rounded={25} value={this.state.keyword_1}
                                   onChangeText={(value) => {
                                       this.setState({
                                           keyword_1: value
                                       })
                                   }}
                            />
                        </View>
                    )
                    break;
                case 2:
                    rows.push(
                        <View mt={20} key={i}>
                            <Input placeholder="کلیدواژه" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                   rounded={25} value={this.state.keyword_2}
                                   onChangeText={(value) => {
                                       this.setState({
                                           keyword_2: value
                                       })
                                   }}
                            />
                        </View>
                    )
                    break;
                case 3:
                    rows.push(
                        <View mt={20} key={i}>
                            <Input placeholder="کلیدواژه" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                   rounded={25} value={this.state.keyword_3}
                                   onChangeText={(value) => {
                                       this.setState({
                                           keyword_3: value
                                       })
                                   }}
                            />
                        </View>
                    )
                    break;
                case 4:
                    rows.push(
                        <View mt={20} key={i}>
                            <Input placeholder="کلیدواژه" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                   rounded={25} value={this.state.keyword_4}
                                   onChangeText={(value) => {
                                       this.setState({
                                           keyword_4: value
                                       })
                                   }}
                            />
                        </View>
                    )
                    break;
                case 5:
                    rows.push(
                        <View mt={20} key={i}>
                            <Input placeholder="کلیدواژه" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                   rounded={25} value={this.state.keyword_5}
                                   onChangeText={(value) => {
                                       this.setState({
                                           keyword_5: value
                                       })
                                   }}
                            />
                        </View>
                    )
                    break;
                case 6:
                    rows.push(
                        <View mt={20} key={i}>
                            <Input placeholder="کلیدواژه" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                   rounded={25} value={this.state.keyword_6}
                                   onChangeText={(value) => {
                                       this.setState({
                                           keyword_6: value
                                       })
                                   }}
                            />
                        </View>
                    )
                    break;
                case 7:
                    rows.push(
                        <View mt={20} key={i}>
                            <Input placeholder="کلیدواژه" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                   rounded={25} value={this.state.keyword_7}
                                   onChangeText={(value) => {
                                       this.setState({
                                           keyword_7: value
                                       })
                                   }}
                            />
                        </View>
                    )
                    break;
                case 8:
                    rows.push(
                        <View mt={20} key={i}>
                            <Input placeholder="کلیدواژه" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                   rounded={25} value={this.state.keyword_8}
                                   onChangeText={(value) => {
                                       this.setState({
                                           keyword_8: value
                                       })
                                   }}
                            />
                        </View>
                    )
                    break;
                case 9:
                    rows.push(
                        <View mt={20} key={i}>
                            <Input placeholder="کلیدواژه" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                   rounded={25} value={this.state.keyword_9}
                                   onChangeText={(value) => {
                                       this.setState({
                                           keyword_9: value
                                       })
                                   }}
                            />
                        </View>
                    )
                    break;
                case 10:
                    rows.push(
                        <View mt={20} key={i}>
                            <Input placeholder="کلیدواژه" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                   rounded={25} value={this.state.keyword_10}
                                   onChangeText={(value) => {
                                       this.setState({
                                           keyword_10: value
                                       })
                                   }}
                            />
                        </View>
                    )
                    break;
            }
        }
        return rows;
    }

    submit() {
        let keywords = [
            this.state.keyword_1,
            this.state.keyword_2,
            this.state.keyword_3,
            this.state.keyword_4,
            this.state.keyword_5,
            this.state.keyword_6,
            this.state.keyword_7,
            this.state.keyword_8,
            this.state.keyword_9,
            this.state.keyword_10
        ]
        let errors = [];
        if (this.state.website == null || this.state.website == '') {
            errors.push(strings.messages.website_required)
        }
        if (this.state.work_type == null || this.state.work_type == '') {
            errors.push(strings.messages.work_type_required)
        }
        if (!this.state.isKeyword && (this.state.host_url == null || this.state.host_url == '')) {
            errors.push(strings.messages.host_url_required)
        }
        if (!this.state.isKeyword && (this.state.host_username == null || this.state.host_username == '')) {
            errors.push(strings.messages.host_username_required)
        }
        if (!this.state.isKeyword && (this.state.host_password == null || this.state.host_password == '')) {
            errors.push(strings.messages.host_password_required)
        }
        if (!this.state.isKeyword && (this.state.admin_url == null || this.state.admin_url == '')) {
            errors.push(strings.messages.admin_url_required)
        }
        if (!this.state.isKeyword && (this.state.admin_username == null || this.state.admin_username == '')) {
            errors.push(strings.messages.admin_username_required)
        }
        if (!this.state.isKeyword && (this.state.admin_password == null || this.state.admin_password == '')) {
            errors.push(strings.messages.admin_password_required)
        }
        if (this.state.isKeyword && (this.state.keyword_1 == null || this.state.keyword_1 == '')) {
            errors.push(strings.messages.keywords_required)
        }
        if (this.state.description == null || this.state.description == '') {
            errors.push(strings.messages.description_required)
        }
        if (errors.length == 0) {
            var that = this;
            let keywords = [
                this.state.keyword_1,
                this.state.keyword_2,
                this.state.keyword_3,
                this.state.keyword_4,
                this.state.keyword_5,
                this.state.keyword_6,
                this.state.keyword_7,
                this.state.keyword_8,
                this.state.keyword_9,
                this.state.keyword_10
            ]
            axios.post(strings.host + 'seo/store', {
                user_id: that.props.screenProps.user_id,
                token: that.props.screenProps.token,
                package_id: that.state.isKeyword ? null : that.state.package.id,
                website: that.state.website,
                duration: that.state.duration,
                work_type: that.state.work_type,
                description: that.state.description,
                host_url: that.state.host_url,
                host_username: that.state.host_username,
                host_password: that.state.host_password,
                admin_url: that.state.admin_url,
                admin_username: that.state.admin_username,
                admin_password: that.state.admin_password,
                keywords: keywords
            }).then(function (response) {
                if (response.data.is_successful) {
                    alert(strings.messages.seo_saved)
                    that.props.navigation.navigate("Seo", {id: response.data.data.id})
                } else {
                    alert(response.data.message)
                }
            }).catch(function (error) {
                alert(error)
            });
        } else {
            this.setState({
                errors: errors
            })
        }
    }

    showFields() {
        if (this.state.isKeyword) {
            return (
                <View p={25}>
                    <View>
                        <Text>آدرس وبسایت</Text>
                        <Input placeholder={"آدرس وبسایت"} mt={10} ph={10} pv={5} b={1}
                               bColor={colors.light} rounded={25}
                               value={this.state.website}
                               onChangeText={(value) => {
                                   this.setState({
                                       website: value
                                   })
                               }}
                        />
                    </View>

                    <View mt={20} flex>
                        <Text>مدت قرارداد</Text>
                        <View mt={10} b={1} bColor={colors.light} rounded={25}>
                            <Picker h={40} color={colors.gray}
                                    selectedValue={this.state.duration}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({duration: itemValue})
                                    }
                            >
                                <Picker.Item label="یک ماه" value="1"/>
                                <Picker.Item label="دو ماه" value="2"/>
                                <Picker.Item label="سه ماه" value="3"/>
                                <Picker.Item label="چهار ماه" value="4"/>
                                <Picker.Item label="پنج ماه" value="5"/>
                                <Picker.Item label="شش ماه" value="6"/>
                                <Picker.Item label="هفت ماه" value="7"/>
                                <Picker.Item label="هشت ماه" value="8"/>
                                <Picker.Item label="نه ماه" value="9"/>
                                <Picker.Item label="ده ماه" value="10"/>
                                <Picker.Item label="یازده ماه" value="11"/>
                                <Picker.Item label="یک سال" value="12"/>
                            </Picker>
                        </View>
                    </View>

                    <View mt={20}>
                        <Input h={180} p={15} b={1} bColor={colors.light} rounded multiline={true}
                               placeholder={"درباره ی کسب و کار خود و زمینه فعالیت وبسایتتان توضیح دهید"}
                               value={this.state.work_type}
                               onChangeText={(value) => {
                                   this.setState({
                                       work_type: value
                                   })
                               }}
                        />
                    </View>

                    <View mt={20}>
                        <Input h={180} p={15} b={1} bColor={colors.light} rounded multiline={true}
                               placeholder={"توضیحات و نکات کلیدی در مورد انجام پروژه خود را بنویسید"}
                               value={this.state.description}
                               onChangeText={(value) => {
                                   this.setState({
                                       description: value
                                   })
                               }}
                        />
                    </View>

                    <View mt={20} p={20} b={1} bColor={colors.light} rounded>
                        <Text>کلیدواژه های سئو</Text>

                        {this.showKeywordRows()}

                        <View mt={20} center>
                            <Button w={-220} h={40} bg={colors.blue} center bRadius={40} onPress={() => {
                                if (this.state.keywordRows == this.state.maxKeywordRows) {
                                    alert(strings.messages.max_keywords)
                                } else {
                                    this.setState({
                                        keywordRows: this.state.keywordRows + 1
                                    })
                                }
                            }}>
                                <Text color={colors.white} h5>افزودن کلیدواژه</Text>
                            </Button>
                        </View>
                    </View>

                    <View mt={30} mb={30} center>
                        <Button w={200} h={40} mt={20} bg={colors.green} center bRadius={40} onPress={() => {
                            this.submit()
                        }}>
                            <Text color={colors.white} h5>ثبت پروژه</Text>
                        </Button>
                    </View>
                </View>
            )
        } else {
            return (
                <View p={25}>
                    <View>
                        <Text>آدرس وبسایت</Text>
                        <Input placeholder={"آدرس وبسایت"} mt={10} ph={10} pv={5} b={1}
                               bColor={colors.light} rounded={25}
                               value={this.state.website}
                               onChangeText={(value) => {
                                   this.setState({
                                       website: value
                                   })
                               }}
                        />
                    </View>

                    <View mt={20}>
                        <Text>مدت قرارداد</Text>
                        <View mt={10} b={1} bColor={colors.light} rounded={25}>
                            <Picker h={40} color={colors.gray}
                                    selectedValue={this.state.duration}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({duration: itemValue})
                                    }
                            >
                                <Picker.Item label="یک ماه" value="1"/>
                                <Picker.Item label="دو ماه" value="2"/>
                                <Picker.Item label="سه ماه" value="3"/>
                                <Picker.Item label="چهار ماه" value="4"/>
                                <Picker.Item label="پنج ماه" value="5"/>
                                <Picker.Item label="شش ماه" value="6"/>
                                <Picker.Item label="هفت ماه" value="7"/>
                                <Picker.Item label="هشت ماه" value="8"/>
                                <Picker.Item label="نه ماه" value="9"/>
                                <Picker.Item label="ده ماه" value="10"/>
                                <Picker.Item label="یازده ماه" value="11"/>
                                <Picker.Item label="یک سال" value="12"/>
                            </Picker>
                        </View>
                    </View>

                    <View mt={20}>
                        <Text>آدرس پنل مدیریت هاست</Text>
                        <Input placeholder={"آدرس پنل مدیریت هاست"} mt={10} ph={10} pv={5} b={1}
                               bColor={colors.light} rounded={25}
                               value={this.state.host_url}
                               onChangeText={(value) => {
                                   this.setState({
                                       host_url: value
                                   })
                               }}
                        />
                    </View>

                    <View mt={20}>
                        <Text>نام کاربری پنل مدیریت هاست</Text>
                        <Input placeholder={"نام کاربری پنل مدیریت هاست"} mt={10} ph={10} pv={5} b={1}
                               bColor={colors.light} rounded={25}
                               value={this.state.host_username}
                               onChangeText={(value) => {
                                   this.setState({
                                       host_username: value
                                   })
                               }}/>
                    </View>

                    <View mt={20}>
                        <Text>رمز عبور پنل مدیریت هاست</Text>
                        <Input placeholder={"رمز عبور پنل مدیریت هاست"} mt={10} ph={10} pv={5} b={1}
                               bColor={colors.light} rounded={25}
                               value={this.state.host_password}
                               onChangeText={(value) => {
                                   this.setState({
                                       host_password: value
                                   })
                               }}/>
                    </View>

                    <View mt={20}>
                        <Text>آدرس پیشخوان وبسایت</Text>
                        <Input placeholder={"آدرس پیشخوان وبسایت"} mt={10} ph={10} pv={5} b={1}
                               bColor={colors.light} rounded={25}
                               value={this.state.admin_url}
                               onChangeText={(value) => {
                                   this.setState({
                                       admin_url: value
                                   })
                               }}/>
                    </View>

                    <View mt={20}>
                        <Text>نام کاربری پیشخوان وبسایت</Text>
                        <Input placeholder={"نام کاربری پیشخوان وبسایت"} mt={10} ph={10} pv={5} b={1}
                               bColor={colors.light} rounded={25}
                               value={this.state.admin_username}
                               onChangeText={(value) => {
                                   this.setState({
                                       admin_username: value
                                   })
                               }}/>
                    </View>

                    <View mt={20}>
                        <Text>رمز عبور پیشخوان وبسایت</Text>
                        <Input placeholder={"رمز عبور پیشخوان وبسایت"} mt={10} ph={10} pv={5} b={1}
                               bColor={colors.light} rounded={25}
                               value={this.state.admin_password}
                               onChangeText={(value) => {
                                   this.setState({
                                       admin_password: value
                                   })
                               }}/>
                    </View>

                    <View mt={20}>
                        <Input h={180} p={15} b={1} bColor={colors.light} rounded multiline={true}
                               placeholder={"درباره ی کسب و کار خود و زمینه فعالیت وبسایتتان توضیح دهید"}
                               value={this.state.work_type}
                               onChangeText={(value) => {
                                   this.setState({
                                       work_type: value
                                   })
                               }}/>
                    </View>

                    <View mt={20}>
                        <Input h={180} p={15} b={1} bColor={colors.light} rounded multiline={true}
                               placeholder={"توضیحات و نکات کلیدی در مورد انجام پروژه خود را بنویسید"}
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
                        <Button w={200} h={40} mt={20} bg={colors.green} center bRadius={40} onPress={() => {
                            this.submit()
                        }}>
                            <Text color={colors.white} h5>ثبت پروژه</Text>
                        </Button>
                    </View>
                </View>
            )
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior={'padding'} enabled>
                <ScrollView>
                    <Header mt={40} title={'اطلاعات سئو'}/>

                    {this.showFields()}
                </ScrollView>
            </KeyboardAvoidingView>
        );
    };
}

NewInformation.navigationOptions = {
    header: null,
};

export default NewInformation;