import React, {Component} from 'react'
import {KeyboardAvoidingView, ScrollView} from 'react-native'

import View from "../components/public/MyView"
import Text from "../components/public/MyText"
import Button from "../components/public/MyButton"
import Input from "../components/public/MyInput"
import Image from "../components/public/MyImage"
import Badge from "../components/public/Badge"
import colors from "../constants/Colors"
import send from '../assets/icons/send.png'
import strings from '../constants/Strings'
import axios from "axios"

class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected_project: null,
            message: null,
            chats: [],
        };
    }

    componentDidMount() {
        var that = this;
        axios.post(strings.host + 'chats', {
            user_id: that.props.screenProps.user_id,
            token: that.props.screenProps.token,
        }).then(function (response) {
            if (response.data.is_successful) {
                that.setState({
                    chats: response.data.data
                })
            }
        }).catch(function (error) {
            alert(strings.messages.server_error)
        });
    }

    renderChats() {
        let chats = []
        this.state.chats.map((chat, index) => {
            chats.push(
                <View mh={20} p={20} key={index}>
                    <Button color={this.state.selected_project == chat.id ? colors.blue : colors.dark} onPress={() => {
                        this.setState({selected_project: chat.id})
                    }}><Text>{chat.title}</Text></Button>
                    {chat.unread_messages > 0 ? <Badge color={colors.red} number={chat.unread_messages}/> : null}
                </View>
            )
        })
        return chats
    }

    renderMessages() {
        let messages = []
        let chat = this.state.chats.filter(chat => {
            return this.state.selected_project === chat.id
        })
        if (this.state.selected_project != null) {
            chat[0].messages.map((message, index) => {
                if (message.user_id === this.props.screenProps.user_id) {
                    messages.push(
                        <View key={index} asFlexEnd w={-200} mv={10} p={10} bg={colors.light_blue} rounded>
                            <Text color={colors.dark}>{message.message}</Text>
                        </View>
                    )
                } else {
                    messages.push(
                        <View key={index} w={-200} mv={10} p={10} bg={colors.light} rounded>
                            <Text color={colors.dark}>{message.message}</Text>
                        </View>
                    )
                }
            })
        }

        return messages;
    }

    sendMessage() {
        var that = this;
        axios.post(strings.host + 'message', {
            user_id: that.props.screenProps.user_id,
            token: that.props.screenProps.token,
            project_id: that.state.selected_project,
            message: that.state.message,
        }).then(function (response) {
            if (response.data.is_successful) {
                const message = {
                    project_id: that.state.selected_project,
                    user_id: this.props.user_id,
                    message: that.state.message
                }
                that.state.chats.map(chat => {
                    if (chat.id == that.state.selected_project) {
                        chat.messages = [...chat.messages, message]
                    }
                });

                that.setState({message: null})
            }
        }).catch(function (error) {
            alert(strings.messages.server_error)
        });
    }

    render() {
        return (
            <KeyboardAvoidingView behavior={'padding'} enabled>
                <ScrollView>
                    <View p={25}>
                        <ScrollView horizontal={true}>
                            {this.renderChats()}
                        </ScrollView>

                        <View pv={25} bt={1} btColor={colors.gray} flex>
                            {this.renderMessages()}
                        </View>

                        {this.state.selected_project != null ? (
                            <View row>
                                <Button flex={1} onPress={() => {
                                    this.sendMessage()
                                }}>
                                    <Image source={send} w={50} h={50} mt={15}/>
                                </Button>
                                <View flex={5}>
                                    <Input onChangeText={(text) => {
                                        this.setState({message: text})
                                    }} value={this.state.message} rtl placeholder={"متن پیام"} h={80}/>
                                </View>
                            </View>
                        ) : null}
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

ChatScreen.navigationOptions = {
    header: null,
};

export default ChatScreen;