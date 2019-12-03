import React, {Component} from 'react';

import View from "../../components/public/MyView";
import Text from "../../components/public/MyText";
import Button from "../../components/public/MyButton";
import Image from "../../components/public/MyImage";
import Header from "../../components/header/Header";

import colors from "../../constants/Colors"
import {ScrollView} from "react-native";
import axios from "axios";
import strings from "../../constants/Strings";

class NewCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            special_package: false,
            packages: [],
            render_packages: [],
        };
    }

    componentWillMount() {
        var that = this;
        axios.post(strings.host + 'website/packages', {
            user_id: that.props.screenProps.user_id,
            token: that.props.screenProps.token,
        }).then(function (response) {
            if (response.data.is_successful) {
                that.setState({
                    packages: response.data.data,
                    render_packages: response.data.data.filter(p => {
                        return p.is_special == 0
                    })
                })
            }
        }).catch(function (error) {
            alert(strings.messages.server_error)
        });
    }

    renderPackages() {
        let packages = []

        this.state.render_packages.map((p, index) => {
            packages.push(
                <View key={index} flex m={10} p={5} center rounded={10} shadow>
                    <Button row center onPress={() => {
                        this.props.navigation.navigate("WebsiteNewOptions", {package: p})
                    }}>
                        <View flex={3} p={5} center>
                            <Text>{p.title}</Text>
                            <View mt={8} pv={5} ph={15} bg={colors.light_green} center rounded={12}>
                                <Text>{p.ui_price} تومان</Text>
                            </View>
                        </View>
                        <View flex>
                            <Image source={{uri: strings.index + p.image_url}} w={64} h={64} rounded/>
                        </View>
                    </Button>
                </View>
            )
        })

        return packages;
    }

    render() {
        return (
            <ScrollView>
                <Header mt={40} title={'پکیج های وبسایت'}/>
                <View p={25} flex center>
                    <View row mh={25} mb={20} p={5} bg={colors.green} rounded={50}>
                        <Button flex center p={10} rounded={50}
                                bg={this.state.special_package ? colors.white : colors.green}
                                onPress={() => {
                                    this.setState({
                                        special_package: true,
                                        render_packages: this.state.packages.filter(p => {
                                            return p.is_special == 1
                                        })
                                    })
                                }}>
                            <Text color={this.state.special_package ? colors.green : colors.white}>پکیج های سفارشی</Text>
                        </Button>
                        <Button flex center p={10} rounded={50}
                                bg={this.state.special_package ? colors.green : colors.white}
                                onPress={() => {
                                    this.setState({
                                        special_package: false,
                                        render_packages: this.state.packages.filter(p => {
                                            return p.is_special == 0
                                        })
                                    })
                                }}>
                            <Text color={this.state.special_package ? colors.white : colors.green}>پکیج های ویژه</Text>
                        </Button>
                    </View>

                    {this.renderPackages()}
                </View>
            </ScrollView>
        );
    };
}

NewCategory.navigationOptions = {
    header: null,
};

export default NewCategory;