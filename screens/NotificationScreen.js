import React, {Component} from 'react'
import {ScrollView} from 'react-native'

import View from "../components/public/MyView"
import Text from "../components/public/MyText"
import Button from "../components/public/MyButton"
import colors from "../constants/Colors"
import strings from '../constants/Strings'
import axios from "axios"
import Header from "../components/header/Header";

class NotificationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: [],
        };
    }

    componentWillMount() {
        var that = this;
        axios.post(strings.host + 'notifications', {
            user_id: that.props.screenProps.user_id,
            token: that.props.screenProps.token,
        }).then(function (response) {
            if (response.data.is_successful) {
                that.setState({
                    notifications: response.data.data
                })
            }
        }).catch(function (error) {
            alert(strings.messages.server_error)
        });
    }

    renderNotifications() {
        let notifications = []
        this.state.notifications.map((notification, index) => {
            notifications.push(
                <View mv={10} p={20}rounded shadow key={index}>
                    {notification.type_id ?
                        <Button color={notification.seen ? colors.blue : colors.dark} onPress={() => {
                            if (notification.type_id) {
                                if (notification.type_id == 1) {
                                    this.props.navigation.navigate("Website", {id: notification.type_data})
                                } else if (notification.type_id == 2) {
                                    this.props.navigation.navigate("Seo", {id: notification.type_data})
                                }
                            }
                        }}><Text textCenter>{notification.message}</Text>
                        </Button>
                        :
                        <View>
                            <Text size={12} color={notification.seen == 0 ? colors.blue : colors.dark}
                                  textCenter>{notification.message}</Text>
                        </View>
                    }
                </View>
            )
        })
        return notifications
    }

    render() {
        return (
            <ScrollView>
                <Header mt={40} title={'اعلانات'}/>
                <View ph={20}>
                    {this.renderNotifications()}
                </View>
            </ScrollView>
        );
    }
}

NotificationScreen.navigationOptions = {
    header: null,
};

export default NotificationScreen;