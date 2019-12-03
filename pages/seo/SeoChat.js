import React, {Component} from 'react';
import {KeyboardAvoidingView, ScrollView} from 'react-native';

import View from "../../components/public/MyView";
import Text from "../../components/public/MyText";
import Input from "../../components/public/MyInput";
import Image from "../../components/public/MyImage";
import colors from "../../constants/Colors";
import send from "../../assets/icons/send.png";
import axios from "axios";
import strings from "../../constants/Strings";
import Button from "../../components/public/MyButton";

class SeoChat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project_id: this.props.project_id,
            messages: [],
            message: null,
        };
    }

    componentWillMount() {
        var that = this;
        axios.post(strings.host + 'project/chat', {
            project_id: that.state.project_id,
            user_id: that.props.user_id,
            token: that.props.token,
        }).then(function (response) {
            if (response.data.is_successful) {
                that.setState({
                    messages: response.data.data
                })
            }
        }).catch(function (error) {
            alert(strings.messages.server_error)
        });
    }

    componentDidMount() {
        this.messageInput.focus()
    }


    renderMessages() {
        let messages = []
        this.state.messages.map((message, index) => {
            if (message.user_id == this.props.user_id) {
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

        return messages;
    }

    sendMessage() {
        var that = this;
        axios.post(strings.host + 'message', {
            user_id: that.props.user_id,
            token: that.props.token,
            project_id: that.state.project_id,
            message: that.state.message,
        }).then(function (response) {
            if (response.data.is_successful) {
                const message = {
                    project_id: that.state.project_id,
                    user_id: that.props.user_id,
                    message: that.state.message
                }
                that.setState({messages: [...that.state.messages, message], message: null})
                that.messageInput.focus()
            }
        }).catch(function (error) {
            alert(error)
        });
    }

    render() {
        return (
            <View pv={15} ph={25}>
                <View>
                    <Text h4>گفتگو</Text>
                </View>

                <View>
                    <View h={-355} pv={10}>
                        <ScrollView ref={ref => this.scrollView = ref}
                                    onContentSizeChange={(contentWidth, contentHeight)=>{
                                        this.scrollView.scrollToEnd({animated: true});
                                    }}>
                            {this.renderMessages()}
                        </ScrollView>
                    </View>

                    <View row bt={1} bColor={colors.gray}>
                        <Button flex={1} onPress={() => {
                            this.sendMessage()
                        }}>
                            <Image source={send} w={50} h={50} mt={15}/>
                        </Button>
                        <View flex={5}>
                            <Input ref={(ref) => {
                                        this.messageInput = ref;
                                    }}
                                   onSubmitEditing={() => {
                                       this.sendMessage()
                                   }}
                                   onChangeText={(text) => {
                                       this.setState({message: text})
                                   }} value={this.state.message} rtl placeholder={"متن پیام"} h={70}/>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

SeoChat.navigationOptions = {
    header: null,
};

export default SeoChat;