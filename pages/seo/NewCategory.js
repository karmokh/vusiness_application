import React, {Component} from 'react';

import View from "../../components/public/MyView";
import Text from "../../components/public/MyText";
import Button from "../../components/public/MyButton";
import Image from "../../components/public/MyImage";
import Header from "../../components/header/Header";
import seo from "../../assets/icons/seo.png"
import keyword from "../../assets/icons/keyword.png"

import colors from "../../constants/Colors"
import {ScrollView} from "react-native";
import axios from "axios";
import strings from "../../constants/Strings";

class NewCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            packages: [],
        };
    }

    componentWillMount() {
        var that = this;
        axios.post(strings.host + 'seo/packages', {
            user_id: that.props.screenProps.user_id,
            token: that.props.screenProps.token,
        }).then(function (response) {
            if (response.data.is_successful) {
                that.setState({
                    packages: response.data.data
                })
            }
        }).catch(function (error) {
            alert(strings.messages.server_error)
        });
    }

    renderPackages() {
        let packages = []
        this.state.packages.map((p, index) => {
            packages.push(
                <View key={index} mv={10} mh={20} p={5} center rounded={10} shadow>
                    <Button row center onPress={() => {
                        this.props.navigation.navigate("SeoNewInformation", {"isKeyword": false, package: p})
                    }}>
                        <View flex={3} p={5} center>
                            <Text>{p.title}</Text>

                            <View mt={10} rounded overflow={"hidden"}>
                                {this.renderOptions(p.options)}
                            </View>

                            <View mt={10} pv={5} ph={15} bg={colors.blue} center rounded={12}>
                                <Text color={colors.white}>{p.ui_price} تومان / ماهانه</Text>
                            </View>
                        </View>
                        <View flex>
                            <Image source={seo} w={64} h={64} rounded/>
                        </View>
                    </Button>
                </View>
            )
        })

        return packages;
    }

    renderOptions(items) {
        let options = []
        let i = 1;
        items.map((item, index) => {
            options.push(
                <View key={index} p={5} bg={i == 1 ? colors.light_green : colors.light} center>
                    <Text>{item.title}</Text>
                </View>
            )
            i = i == 1 ? 2 : 1
        })

        return options;
    }

    render() {
        return (
            <ScrollView>
                <Header mt={40} title={'پکیج های سئو'}/>
                {this.renderPackages()}

                <View mv={10} mh={20} p={5} center rounded={10} shadow>
                    <Button row center onPress={() => {
                        this.props.navigation.navigate("SeoNewInformation", {"isKeyword": true, package: {}})
                    }}>
                        <View flex={3} p={5} center>
                            <Text>سئوی کلیدواژه ای</Text>

                            <View mt={10} rounded overflow={"hidden"}>
                                <View p={5} bg={colors.light_green} center>
                                    <Text>مشاوره در انتخاب کلیدواژه ها</Text>
                                </View>
                            </View>

                            <View mt={10} pv={5} ph={15} bg={colors.blue} center rounded={12}>
                                <Text color={colors.white}>توافقی</Text>
                            </View>
                        </View>
                        <View flex>
                            <Image source={keyword} w={64} h={64} rounded/>
                        </View>
                    </Button>
                </View>
            </ScrollView>
        );
    };
}

NewCategory.navigationOptions = {
    header: null,
};

export default NewCategory;