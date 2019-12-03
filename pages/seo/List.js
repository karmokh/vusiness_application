import React, {Component} from 'react';

import View from "../../components/public/MyView";
import Text from "../../components/public/MyText";
import Button from "../../components/public/MyButton";
import Image from "../../components/public/MyImage";
import Header from "../../components/header/Header";
import def from "../../assets/icons/default.png"
import colors from "../../constants/Colors";
import strings from "../../constants/Strings";
import axios from "axios";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seos: []
        }
    }

    componentWillMount() {
        const that = this;
        axios.post(strings.host + 'seos', {
            user_id: that.props.screenProps.user_id,
            token: that.props.screenProps.token,
        }).then(function (response) {
            if (response.data.is_successful) {
                that.setState({
                    seos: response.data.data
                })
            }
        }).catch(function (error) {
            alert(strings.messages.server_error)
        })
    }

    renderSeos() {
        let seos = []
        this.state.seos.map((seo, index) => {
            seos.push(
                <View key={index} flex m={10} p={10} center rounded={10} shadow>
                    <Button center onPress={() => {
                        this.props.navigation.navigate("Seo", {id: seo.id})
                    }}>
                        <Image source={def} w={64} h={64}/>
                        <Text mt={15}>{seo.website}</Text>
                    </Button>
                </View>
            )
        })

        return seos
    }

    render() {
        return (
            <View>
                <Header mt={40} title={'سئوهای شما'}/>
                <View p={25}>
                    <View row>
                        {this.renderSeos()}
                    </View>

                    <View mt={50} center>
                        <Button w={250} h={50} mt={30} bg={colors.blue} center bRadius={50} onPress={() => {
                            this.props.navigation.navigate("SeoNewCategory")
                        }}>
                            <Text color={colors.white} h4>ایجاد پروژه جدید</Text>
                        </Button>
                    </View>
                </View>
            </View>
        );
    }
}

List.navigationOptions = {
    header: null,
};

export default List;