import React, {Component, Fragment} from 'react';
import {Switch} from "react-native";
import * as WebBrowser from 'expo-web-browser';

import View from "../../components/public/MyView";
import Text from "../../components/public/MyText";
import Image from "../../components/public/MyImage";
import Button from "../../components/public/MyButton";
import colors from "../../constants/Colors";
import strings from "../../constants/Strings"
import Input from "../../components/public/MyInput";

class WebsiteContentPage1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            template_id: null
        }
    }

    chunk(array, chunk) {
        let temp = [];
        for (var i = 0, j = array.length; i < j; i += chunk) {
            temp.push(array.slice(i, i + chunk));
        }
        return temp;
    }

    renderTemplates() {
        let templates = [];
        if (this.props.templates != null) {
            const temp = this.chunk(this.props.templates, 2);
            temp.map((chunk, i) => {
                templates.push(
                    <View key={i} row mt={20}>
                        {this.renderInnerTemplates(chunk)}
                    </View>
                )
            })
        }
        return templates;
    }

    renderInnerTemplates(templates) {
        let temp = [];
        templates.map((t, i) => {
            temp.push(
                <View key={i} flex center overflow={"hidden"} mh={5} p={10} rounded={10} shadow>
                    <Image source={{url: strings.index + t.image_url}} rounded w={150} h={100} resizeMode="stretch"/>
                    <Button mt={15} ph={5} bg={colors.blue} center bRadius={10} onPress={() => {
                        WebBrowser.openBrowserAsync(t.demo_url)
                    }}>{console.log("f")}
                        <Text color={colors.white}>{t.title}</Text>
                    </Button>
                    <View row mt={15}>
                        <Switch value={this.state.template_id == t.id ? true : false} onValueChange={(value) => {
                            if (value) {
                                this.setState({template_id: t.id})
                                this.props.selectTemplate(t.id)
                            } else {
                                this.setState({template_id: null})
                                this.props.selectTemplate(null)
                            }
                        }}/>
                        <Text>انتخاب</Text>
                    </View>
                </View>
            )
        })
        return temp;
    }

    render() {
        return (
            <Fragment>
                <Text h5>انتخاب قالب :</Text>

                {this.renderTemplates()}

                <View mt={20}>
                    <Text>توضیحات قالب</Text>
                    <Input h={180} p={15} b={1} bColor={colors.light} rounded multiline={true}
                           placeholder={"توضیحات قالب"} value={this.props.template_description}
                           onChangeText={(value) => {
                               this.props.setTemplateDescription(value)
                           }}/>
                </View>
            </Fragment>
        );
    }
}

WebsiteContentPage1.navigationOptions = {
    header: null,
};

export default WebsiteContentPage1;