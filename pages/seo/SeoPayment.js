import React, {Component} from 'react';
import * as WebBrowser from 'expo-web-browser';

import View from "../../components/public/MyView";
import Text from "../../components/public/MyText";
import Button from "../../components/public/MyButton";
import colors from "../../constants/Colors";
import axios from "axios";
import strings from "../../constants/Strings";

class SeoPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project_id: this.props.project_id,
            message: '',
            data: null,
        };
    }

    componentWillMount() {
        var that = this;
        console.log(this.state.project_id)
        axios.post(strings.host + 'project/factors', {
            project_id: that.state.project_id,
            user_id: that.props.user_id,
            token: that.props.token,
        }).then(function (response) {
            if (response.data.is_successful) {
                that.setState({
                    data: response.data.data
                })
            } else {
                alert(response.data.message)
            }
        }).catch(function (error) {
            alert(strings.messages.server_error)
        });
    }

    renderItems() {
        let items = []
        let flag = 2
        if (this.state.data != null) {
            this.state.data.items.map((item, key) => {
                flag = flag == 1 ? 2 : 1
                items.push(
                    <View key={key} row p={5} bg={flag == 1 ? colors.light : colors.light_green}>
                        <View flex center>
                            <Text>{item.price}</Text>
                        </View>
                        <View flex center>
                            <Text>{item.title}</Text>
                        </View>
                    </View>
                )
            })
            items.push(
                <View row p={5} bg={flag == 1 ? colors.light : colors.light_green}>
                    <View flex center>
                        <Text>{this.state.data.price}</Text>
                    </View>
                    <View flex center>
                        <Text>مجموع</Text>
                    </View>
                </View>
            )
        }

        return items;
    }

    renderFactors() {
        let factors = []
        let flag = 2
        if (this.state.data != null) {
            this.state.data.factors.map((factor, key) => {
                flag = flag == 1 ? 2 : 1
                factors.push(
                    <View key={key} row p={5} bg={flag == 1 ? colors.light : colors.light_green}>
                        <View flex center>
                            {factor.can_pay ? (
                                <Button ph={3} bg={colors.blue} center bRadius={10} onPress={() => {
                                    WebBrowser.openBrowserAsync(
                                        `https://portal.vistaapp.ir/factor/${factor.id}/pay`
                                    );
                                }}>
                                    <Text color={colors.white}>پرداخت</Text>
                                </Button>
                            ) : <Text
                                color={factor.has_paid ? colors.green : colors.red}>{factor.has_paid ? 'موفق' : 'ناموفق'}</Text>}
                        </View>
                        <View flex center>
                            <Text>{factor.type}</Text>
                        </View>
                        <View flex center>
                            <Text>{factor.price}</Text>
                        </View>
                        <View flex center>
                            <Text>{factor.title}</Text>
                        </View>
                    </View>
                )
            })
        }

        return factors;
    }

    render() {
        return (
            <View p={25}>
                <Text h4>فاکتور پروژه</Text>

                <View mt={30}>
                    <Text>تاریخ قرارداد: {this.state.data != null ? this.state.data.created_at : ''}</Text>
                    <Text>نام مشتری: {this.state.data != null ? this.state.data.customer_name : ''}</Text>
                    <Text>عنوان پروژه: {this.state.data != null ? this.state.data.title : ''}</Text>
                </View>

                <View mt={30} rounded overflow={"hidden"}>
                    <View row p={5} bg={colors.light_green}>
                        <View flex center>
                            <Text>قیمت واحد</Text>
                        </View>
                        <View flex center>
                            <Text>عنوان</Text>
                        </View>
                    </View>

                    {this.renderItems()}
                </View>

                <Text h4 mt={30}>لیست پرداخت پروژه</Text>

                <View mt={30} rounded overflow={"hidden"}>
                    <View row p={5} bg={colors.light_green}>
                        <View flex center>
                            <Text>عملیات</Text>
                        </View>
                        <View flex center>
                            <Text>نحوه پرداخت</Text>
                        </View>
                        <View flex center>
                            <Text>مبلغ</Text>
                        </View>
                        <View flex center>
                            <Text>عنوان</Text>
                        </View>
                    </View>

                    {this.renderFactors()}
                </View>
            </View>
        );
    }
}

SeoPayment.navigationOptions = {
    header: null,
};

export default SeoPayment;