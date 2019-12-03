import React, {Component, Fragment} from 'react';
import {Modal, ScrollView} from 'react-native';

import View from "../../components/public/MyView";
import Text from "../../components/public/MyText";
import Button from "../../components/public/MyButton";
import colors from "../../constants/Colors";
import axios from "axios";
import strings from "../../constants/Strings";

class SeoContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project_id: this.props.project_id,
            modalVisible: false,
            modalVisible2: false,
            articles: [],
            products: [],
            article: {
                id: '',
                title: '',
                body: '',
            },
            product: {
                id: '',
                title: '',
                description: '',
                details: [],
            }
        };
    }

    componentWillMount() {
        var that = this;
        axios.post(strings.host + 'project/content', {
            project_id: that.state.project_id,
            user_id: that.props.user_id,
            token: that.props.token,
        }).then(function (response) {
            if (response.data.is_successful) {
                that.setState({
                    articles: response.data.data.articles,
                    products: response.data.data.products,
                })
            } else {
                alert(response.data.message)
            }
        }).catch(function (error) {
            alert(strings.messages.server_error)
        });
    }

    renderArticles() {
        let articles = []
        this.state.articles.map((article, key) => {
            articles.push(
                <Button key={key} w={-50} mt={20} p={10} b={1} rounded shadow center onPress={() => {
                    this.setState({
                        modalVisible: !this.state.modalVisible,
                        article: article
                    })
                }}>
                    <Text color={colors.blue}>{article.title}</Text>
                </Button>
            )
        })

        return articles
    }

    renderProducts() {
        let products = []
        this.state.products.map((product, key) => {
            products.push(
                <Button key={key} w={-50} mt={20} p={10} b={1} rounded shadow center onPress={() => {
                    this.setState({
                        modalVisible2: !this.state.modal_visible2,
                        product: product
                    })
                }}>
                    <Text color={colors.blue}>{product.title}</Text>
                </Button>
            )
        })

        return products
    }

    renderProductDetails() {
        let details = []
        this.state.product.details.map((detail, key) => {
            details.push(
                <View key={key} row p={5} bg={colors.light_green}>
                    <View flex row center>
                        <Text>{detail.title}</Text>
                    </View>
                    <View flex center>
                        <Text>{detail.value}</Text>
                    </View>
                </View>
            )
        })

        return details
    }

    render() {
        return (
            <Fragment>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setState({
                            modalVisible: false
                        })
                    }}>
                    <ScrollView>
                        <View h='full' p={30}>
                            <Text>
                                {this.state.article.body}
                            </Text>

                            <Button absolute w={-50} mh={25} bottom={30} p={5} bg={colors.red} center rounded={30} onPress={() => {
                                this.setState({
                                    modalVisible: false
                                })
                            }}>
                                <Text color={colors.white}>بستن</Text>
                            </Button>
                        </View>
                    </ScrollView>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible2}
                    onRequestClose={() => {
                        this.setState({
                            modalVisible2: false
                        })
                    }}>
                    <ScrollView>
                        <View h='full' p={30}>
                            <View row p={5} bg={colors.light_green}>
                                <View flex row center>
                                    <Text>{this.state.product.price}</Text>
                                </View>
                                <View flex center>
                                    <Text bold>قیمت :</Text>
                                </View>
                            </View>

                            <Text mt={30}>{this.state.product.description}</Text>

                            <View mt={30} rounded overflow={"hidden"}>
                                {this.renderProductDetails()}
                            </View>

                            <Button absolute w={-50} mh={25} bottom={30} p={5} bg={colors.red} center rounded={30} onPress={() => {
                                this.setState({modalVisible2: false});
                            }}>
                                <Text color={colors.white}>بستن</Text>
                            </Button>
                        </View>
                    </ScrollView>
                </Modal>

                <View p={25}>
                    <Text h4>ارسال محتوا</Text>

                    <View row mt={30} center>
                        <View flex mh={5}>
                            <Button flex h={40} bg={colors.blue} center bRadius={40} onPress={() => {
                                this.props.navigation.navigate("SeoContentNewProduct", {project_id: this.state.project_id})
                            }}>
                                <Text color={colors.white} h5>افزودن محصول</Text>
                            </Button>
                        </View>

                        <View flex mh={5}>
                            <Button flex h={40} bg={colors.blue} center bRadius={40} onPress={() => {
                                this.props.navigation.navigate("SeoContentNewArticle", {project_id: this.state.project_id})
                            }}>
                                <Text color={colors.white} h5>افزودن مقاله</Text>
                            </Button>
                        </View>
                    </View>

                    {this.state.articles.length > 0 ? (
                            <View mt={30} center>
                                <Text h5>مقالات ارسال شده</Text>
                                {this.renderArticles()}
                            </View>
                        )
                        :
                        null
                    }

                    {this.state.products.length > 0 ? (
                            <View mv={30} center>
                                <Text h5>محصولات ارسال شده</Text>
                                {this.renderProducts()}
                            </View>
                        )
                        :
                        null
                    }
                </View>
            </Fragment>
        );
    }
}

SeoContent.navigationOptions = {
    header: null,
};

export default SeoContent;