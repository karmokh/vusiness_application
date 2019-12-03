import React, {Component} from 'react';
import {KeyboardAvoidingView, ScrollView} from 'react-native';

import Header from "../../components/header/Header";
import View from "../../components/public/MyView";
import Text from "../../components/public/MyText";
import Input from "../../components/public/MyInput";
import colors from "../../constants/Colors";
import Button from "../../components/public/MyButton";
import axios from "axios";
import strings from "../../constants/Strings";

class SeoContentNewArticle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            project_id: this.props.navigation.getParam("project_id"),
            title: null,
            body: null
        }
    }

    submit() {
        if (this.state.title == null || this.state.title == '') {
            alert(strings.messages.article_title_required)
        } else if (this.state.body == null || this.state.body == '') {
            alert(strings.messages.article_body_required)
        } else {
            var that = this;
            axios.post(strings.host + 'project/article/store', {
                user_id: that.props.screenProps.user_id,
                token: that.props.screenProps.token,
                seo_id: that.state.project_id,
                title: that.state.title,
                body: that.state.body,
            }).then(function (response) {
                if (response.data.is_successful) {
                    that.setState({
                        title: null,
                        body: null,
                    })
                    alert(strings.messages.article_saved)
                } else {
                    alert(response.data.message)
                }
            }).catch(function (error) {
                alert(strings.messages.server_error)
            });
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior={"padding"} enabled>
                <ScrollView>
                    <Header mt={40} title={'افزودن مقاله'}/>

                    <View p={25}>
                        <View mt={20}>
                            <Text>عنوان مقاله</Text>
                            <Input placeholder="عنوان مقاله" mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                                   rounded={25} value={this.state.title} onChangeText={(value) => {
                                this.setState({title: value})
                            }}/>
                        </View>

                        <View mt={20}>
                            <Text>توضیحات مقاله</Text>
                            <Input h={180} mt={10} p={15} b={1} bColor={colors.light} rounded multiline={true}
                                   placeholder={"توضیحات مقاله"} value={this.state.body} onChangeText={(value) => {
                                this.setState({body: value})
                            }}/>
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

SeoContentNewArticle.navigationOptions = {
    header: null,
};

export default SeoContentNewArticle;