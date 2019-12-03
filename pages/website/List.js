import React, {Component} from 'react';

import View from "../../components/public/MyView";
import Text from "../../components/public/MyText";
import Button from "../../components/public/MyButton";
import Image from "../../components/public/MyImage";
import Header from "../../components/header/Header";
import vista from "../../assets/icons/vista.png"
import colors from "../../constants/Colors";
import strings from '../../constants/Strings'
import axios from 'axios'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            websites: []
        }
    }

    componentWillMount() {
        const that = this;
        axios.post(strings.host + 'websites', {
            user_id: that.props.screenProps.user_id,
            token: that.props.screenProps.token,
        }).then(function (response) {
            if (response.data.is_successful) {
                that.setState({
                    websites: response.data.data
                })
            }
        }).catch(function (error) {
            alert(strings.messages.server_error)
        })
    }

    renderWebsites() {
        let websites = []
        this.state.websites.map((website, index) => {
            websites.push(
                <View key={index} flex m={10} p={10} center rounded={10} shadow>
                    <Button center onPress={() => {
                        this.props.navigation.navigate("Website", {id: website.id})
                    }}>
                        <Image source={website.logo ? 'https://portal.vistaapp.ir/' + website.logo : vista} w={64}
                               h={64}/>
                        <Text mt={15}>{website.title}</Text>
                    </Button>
                </View>
            )
        })

        return websites
    }

    render() {
        return (
            <View>
                <Header mt={40} title={'وبسایت های شما'}/>
                <View p={25}>
                    <View row>
                        {this.renderWebsites()}
                    </View>

                    <View mt={50} center>
                        <Button w={250} h={50} mt={30} bg={colors.blue} center bRadius={50} onPress={() => {
                            this.props.navigation.navigate("WebsiteNewCategory")
                        }}>
                            <Text color={colors.white} h4>ایجاد وبسایت جدید</Text>
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