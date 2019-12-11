import React, {Component} from 'react';
import {KeyboardAvoidingView, ScrollView, ViewPagerAndroid} from "react-native";

import View from "../../components/public/MyView";
import Button from "../../components/public/MyButton";
import Image from "../../components/public/MyImage";
import Header from "../../components/header/Header";
import payment from "../../assets/icons/payment.png";
import report from "../../assets/icons/report.png";
import messages from "../../assets/icons/messages.png";
import content from "../../assets/icons/content.png";
import contract from "../../assets/icons/contract.png";
import colors from "../../constants/Colors";

import SeoContract from "./SeoContract";
import SeoContent from "./SeoContent";
import SeoChat from "./SeoChat";
import SeoReport from "./SeoReport";
import SeoPayment from "./SeoPayment";

class Seo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.navigation.getParam("id"),
            page: 4
        }
    }

    changePage(position) {
        const page = position.nativeEvent.position;
        this.setState({
            page: page
        })
    }

    render() {
        return (
            <KeyboardAvoidingView style={{flex: 1}} behavior={"padding"} enabled>
                <View flex>
                    <Header mt={40} title={'مدیریت سئو'}/>

                    <View row mt={10}>
                        <View flex m={15} center bb={3}
                              bbColor={this.state.page == 0 ? colors.orange : colors.gray}>
                            <Button onPress={() => {
                                this.setState({
                                    page: 0
                                })
                                this.viewPager.setPage(0)
                            }}>
                                <Image source={payment} w={40} h={40}/>
                            </Button>
                        </View>

                        <View flex m={15} center bb={3}
                              bbColor={this.state.page == 1 ? colors.orange : colors.gray}>
                            <Button onPress={() => {
                                this.setState({
                                    page: 1
                                })
                                this.viewPager.setPage(1)
                            }}>
                                <Image source={messages} w={40} h={40}/>
                            </Button>
                        </View>

                        <View flex m={15} center bb={3}
                              bbColor={this.state.page == 2 ? colors.orange : colors.gray}>
                            <Button onPress={() => {
                                this.setState({
                                    page: 2
                                })
                                this.viewPager.setPage(2)
                            }}>
                                <Image source={report} w={40} h={40}/>
                            </Button>
                        </View>

                        <View flex m={15} center bb={3}
                              bbColor={this.state.page == 3 ? colors.orange : colors.gray}>
                            <Button onPress={() => {
                                this.setState({
                                    page: 3
                                })
                                this.viewPager.setPage(3)
                            }}>
                                <Image source={content} w={40} h={40}/>
                            </Button>
                        </View>

                        <View flex m={15} center bb={3}
                              bbColor={this.state.page == 4 ? colors.orange : colors.gray}>
                            <Button onPress={() => {
                                this.setState({
                                    page: 4
                                })
                                this.viewPager.setPage(4)
                            }}>
                                <Image source={contract} w={40} h={40}/>
                            </Button>
                        </View>
                    </View>

                    <ViewPagerAndroid
                        ref={(ref) => {
                            this.viewPager = ref
                        }}
                        initialPage={this.state.page}
                        style={{flex: 1}}
                        onPageSelected={(position) => {
                            this.changePage(position)
                        }}
                    >
                        <View flex key={4}>
                            <ScrollView>
                                <SeoPayment user_id={this.props.screenProps.user_id}
                                            token={this.props.screenProps.token}
                                            project_id={this.state.id}/>
                            </ScrollView>
                        </View>
                        <View flex key={3}>
                            <SeoChat user_id={this.props.screenProps.user_id} token={this.props.screenProps.token}
                                     project_id={this.state.id}/>
                        </View>
                        <View flex key={2}>
                            <ScrollView>
                                <SeoReport user_id={this.props.screenProps.user_id} token={this.props.screenProps.token}
                                           project_id={this.state.id}/>
                            </ScrollView>
                        </View>
                        <View flex key={1}>
                            <ScrollView>
                                <SeoContent navigation={this.props.navigation} user_id={this.props.screenProps.user_id}
                                            token={this.props.screenProps.token} project_id={this.state.id}/>
                            </ScrollView>
                        </View>
                        <View flex key={0}>
                            <ScrollView>
                                <SeoContract user_id={this.props.screenProps.user_id}
                                             token={this.props.screenProps.token}
                                             project_id={this.state.id}/>
                            </ScrollView>
                        </View>
                    </ViewPagerAndroid>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

Seo.navigationOptions = {
    header: null,
};

export default Seo;