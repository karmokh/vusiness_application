import React, {Component} from 'react';
import {ActivityIndicator, BackHandler} from "react-native"

import View from "../../components/public/MyView";
import Text from "../../components/public/MyText";
import Image from "../../components/public/MyImage";
import colors from "../../constants/Colors";
import {FontAwesome} from "@expo/vector-icons";
import Button from "../../components/public/MyButton";
import * as WebBrowser from "expo-web-browser";
import axios from "axios";
import strings from "../../constants/Strings";

class SeoReportDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            report_id: this.props.report_id,
            report: null
        }
    }

    componentWillMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.props.backPressed)
        var that = this;
        axios.post(strings.host + 'project/report', {
            report_id: that.state.report_id,
            user_id: that.props.user_id,
            token: that.props.token,
        }).then(function (response) {
            if (response.data.is_successful) {
                that.setState({
                    report: response.data.data,
                })
            } else {
                alert(response.data.message)
            }
        }).catch(function (error) {
            alert(strings.messages.server_error)
        });
    }
    componentWillUnmount() {
        this.backHandler.remove()
    }

    renderKeywords() {
        let keywords = []
        this.state.report.keywords.map((keyword, key) => {
            keywords.push(
                <View key={key} row p={5} bg={colors.light}>
                    <View flex row center>
                        <FontAwesome name={keyword.rank > 0 ? "caret-up" : "caret-daown"}
                                     color={keyword.rank > 0 ? colors.green : colors.red}/>
                        <Text color={colors.green}>{keyword.rank}</Text>
                    </View>
                    <View flex center>
                        <Text>{keyword.keyword}</Text>
                    </View>
                </View>
            )
        })

        return keywords
    }

    renderArticles() {
        let articles = []
        this.state.report.articles.map((article, key) => {
            articles.push(
                <Button key={key} mt={20} center center onPress={() => {
                    WebBrowser.openBrowserAsync(
                        article.link
                    );
                }}>
                    <Text color={colors.blue}>{article.link}</Text>
                </Button>
            )
        })

        return articles
    }

    renderProducts() {
        let products = []
        this.state.report.products.map((product, key) => {
            products.push(
                <Button key={key} mt={20} center center onPress={() => {
                    WebBrowser.openBrowserAsync(
                        product.link
                    );
                }}>
                    <Text color={colors.blue}>{product.link}</Text>
                </Button>
            )
        })

        return products
    }

    render() {
        if (this.state.report == null) {
            return <ActivityIndicator/>
        } else {
            return (
                <View p={25}>
                    <Text h4 center textCenter>گزارش تاریخ {this.state.report.date}</Text>

                    <View mt={30} center>
                        <Image source={{uri: this.state.report.chart_image_url}} w={-80} h={150}
                               rounded/>

                        <View row mt={20}>
                            <Text flex color={colors.blue}>{this.state.report.alexa_world_rank}</Text>
                            <Text flex>رتبه جهانی الکسا :</Text>
                        </View>

                        <View row mt={20}>
                            <Text flex color={colors.blue}>{this.state.report.alexa_iran_rank}</Text>
                            <Text flex>رتبه داخلی الکسا :</Text>
                        </View>

                        <View row mt={20}>
                            <Text flex color={colors.blue}>{this.state.report.google_clicks}</Text>
                            <Text flex>کلیک های سایت (گوگل) :</Text>
                        </View>

                        <View row mt={20}>
                            <Text flex color={colors.blue}>{this.state.report.total_clicks}</Text>
                            <Text flex>کلیک های سایت (مجموع):</Text>
                        </View>

                        <View row mt={20}>
                            <Text flex color={colors.blue}>{this.state.report.created_links}</Text>
                            <Text flex>لینک های ایجاد شده :</Text>
                        </View>
                    </View>

                    <View mt={30}>
                        <Text h5>گزارش کلیدواژه ها</Text>

                        <View mt={30} rounded overflow={"hidden"}>
                            <View row p={5} bg={colors.light_green}>
                                <View flex row center>
                                    <Text>وضعیت</Text>
                                </View>
                                <View flex center>
                                    <Text>کلیدواژه</Text>
                                </View>
                            </View>

                            {this.renderKeywords()}
                        </View>
                    </View>

                    <View mt={30}>
                        <Text h5>مقالات ایجاد شده</Text>
                        {this.renderArticles()}
                    </View>

                    <View mt={30}>
                        <Text h5>محصولات ایجاد شده</Text>
                        {this.renderProducts()}
                    </View>

                    <View mt={30}>
                        <Text flex>توضیحات :</Text>
                        <Text mt={10} mb={10} flex color={colors.dark}>{this.state.report.description}</Text>
                    </View>
                </View>
            );
        }
    }
}

SeoReportDetails.navigationOptions = {
    header: null,
};

export default SeoReportDetails;