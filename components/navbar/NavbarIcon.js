import React, {Component, Fragment} from 'react';
import {AsyncStorage, Image, View} from 'react-native';
import Styles from '../../constants/Styles';
import colors from "../../constants/Colors";
import Badge from "../public/Badge";
import axios from "axios";
import strings from "../../constants/Strings";

class NavbarIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: 0,
            user_id: null,
            token: null
        }
    }

    componentWillMount() {
        if (this.props.have_badge) {
            this.getData()
        }
    }

    async getData() {
        this.setState({
            user_id: await AsyncStorage.getItem('user_id'),
            token: await AsyncStorage.getItem('token'),
        })
        this.getNotifications()
    }

    getNotifications() {
        if (this.state.user_id) {
            var that = this;
            axios.post(strings.host + 'unread_notifications', {
                user_id: that.state.user_id,
                token: that.state.token,
            }).then(function (response) {
                if (response.data.is_successful) {
                    that.setState({
                        notifications: response.data.data
                    })
                }
            }).catch(function (error) {
                alert(strings.messages.server_error)
            });
        } else {
            this.getData()
        }
    }

    render() {
        return this.props.mainIcon == true
            ?
            (
                this.props.have_badge ?
                    <View style={Styles.FooterMainIcon}>
                        <Badge color={this.state.notifications > 0 ? colors.red : colors.green}
                               number={this.state.notifications}/>
                        <Image source={this.props.image} style={Styles.FooterMainIconImage}/>
                    </View>
                    :
                    <View style={Styles.FooterMainIcon}>
                        <Image source={this.props.image} style={Styles.FooterMainIconImage}/>
                    </View>
            )
            :
            (
                this.props.have_badge ?
                    <Fragment>
                        <Badge color={this.state.notifications > 0 ? colors.red : colors.green}
                               number={this.state.notifications}/>
                        <Image source={this.props.image} style={Styles.FooterDefaultIconImage}/>
                    </Fragment>
                    :
                    <Image source={this.props.image} style={Styles.FooterDefaultIconImage}/>
            )
    }
}

export default NavbarIcon;