import React, {Component} from 'react';

import View from "../../components/public/MyView";
import Text from "../../components/public/MyText";
import Button from "../../components/public/MyButton";
import colors from "../../constants/Colors";
import WebsiteContentPage1 from "./WebsiteContentPage1";
import WebsiteContentPage2 from "./WebsiteContentPage2";
import WebsiteContentPage3 from "./WebsiteContentPage3";
import WebsiteContentPage4 from "./WebsiteContentPage4";
import axios from "axios";
import strings from "../../constants/Strings";

class WebsiteContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form_level: null,
            project_id: this.props.project_id,
            template_selected: false,
            content: null,
            message: null,

            template_id: null,
            product_1: null,
            product_2: null,
            product_3: null,
            product_4: null,
            product_5: null,
            product_6: null,
            product_7: null,
            product_8: null,
            product_9: null,
            product_10: null,
            product_11: null,
            product_12: null,
            menu_1: null,
            menu_2: null,
            menu_3: null,
            menu_4: null,
            menu_5: null,
            menu_6: null,
            menu_7: null,
            menu_8: null,
            menu_9: null,
            category_1: null,
            category_2: null,
            category_3: null,
            category_4: null,
            category_5: null,
            category_6: null,
            category_7: null,
            category_8: null,
            category_9: null,
            category_10: null,
            category_11: null,
            category_12: null,
            template__description: null,
            categories_description: null
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
                    template_selected: response.data.data.template_selected,
                    content: response.data.data,
                    form_level: 1
                })
            } else {
                that.setState({
                    form_level: null,
                    message: response.data.message
                })
            }
        }).catch(function (error) {
            alert(strings.messages.server_error)
        });
    }

    showPage() {
        switch (this.state.form_level) {
            case null:
                return (
                    <Text h4 center color={colors.orange}>{this.state.message}</Text>
                )
            case 1:
                return <WebsiteContentPage1 template={this.state.content.template ?? null}
                                            template_description={this.state.content.template_description ?? null}
                                            templates={this.state.content.templates ?? null}
                                            selectTemplate={(template_id) => {
                                                this.setState({template_id: template_id})
                                            }}
                                            selectTemplateDescription={(template_description) => {
                                                this.setState({template_description: template_description})
                                            }}
                />
            case 2:
                return <WebsiteContentPage2 products={this.state.content.products ?? null}
                                            setProduct={(value, id) => {
                                                switch (id) {
                                                    case 1:
                                                        this.setState({product_1: value})
                                                        break;
                                                    case 2:
                                                        this.setState({product_2: value})
                                                        break;
                                                    case 3:
                                                        this.setState({product_13: value})
                                                        break;
                                                    case 4:
                                                        this.setState({product_4: value})
                                                        break;
                                                    case 5:
                                                        this.setState({product_5: value})
                                                        break;
                                                    case 6:
                                                        this.setState({product_6: value})
                                                        break;
                                                    case 7:
                                                        this.setState({product_7: value})
                                                        break;
                                                    case 8:
                                                        this.setState({product_8: value})
                                                        break;
                                                    case 9:
                                                        this.setState({product_9: value})
                                                        break;
                                                    case 10:
                                                        this.setState({product_10: value})
                                                        break;
                                                    case 11:
                                                        this.setState({product_11: value})
                                                        break;
                                                    case 12:
                                                        this.setState({product_12: value})
                                                        break;
                                                }
                                            }}
                />
            case 3:
                return <WebsiteContentPage3 menus={this.state.content.menus ?? null} setMenu={(value, id) => {
                    switch (id) {
                        case 1:
                            this.setState({menu_1: value})
                            break;
                        case 2:
                            this.setState({menu_2: value})
                            break;
                        case 3:
                            this.setState({menu_13: value})
                            break;
                        case 4:
                            this.setState({menu_4: value})
                            break;
                        case 5:
                            this.setState({menu_5: value})
                            break;
                        case 6:
                            this.setState({menu_6: value})
                            break;
                        case 7:
                            this.setState({menu_7: value})
                            break;
                        case 8:
                            this.setState({menu_8: value})
                            break;
                        case 9:
                            this.setState({menu_9: value})
                            break;
                    }
                }}
                />
            case 4:
                return <WebsiteContentPage4 categories={this.state.content.categories ?? null}
                                            description={this.state.content ? this.state.content.description : this.state.description}
                                            setCategoryDescription={(value) => {
                                                this.setState({category_description: value})
                                            }}
                                            setCategory={(value, id) => {
                                                switch (id) {
                                                    case 1:
                                                        this.setState({category_1: value})
                                                        break;
                                                    case 2:
                                                        this.setState({category_2: value})
                                                        break;
                                                    case 3:
                                                        this.setState({category_13: value})
                                                        break;
                                                    case 4:
                                                        this.setState({category_4: value})
                                                        break;
                                                    case 5:
                                                        this.setState({category_5: value})
                                                        break;
                                                    case 6:
                                                        this.setState({category_6: value})
                                                        break;
                                                    case 7:
                                                        this.setState({category_7: value})
                                                        break;
                                                    case 8:
                                                        this.setState({category_8: value})
                                                        break;
                                                    case 9:
                                                        this.setState({category_9: value})
                                                        break;
                                                    case 10:
                                                        this.setState({category_10: value})
                                                        break;
                                                    case 11:
                                                        this.setState({category_11: value})
                                                        break;
                                                    case 12:
                                                        this.setState({category_12: value})
                                                        break;
                                                }
                                            }}
                />
        }
    }

    submit() {
        if (this.state.template_id == null) {
            alert(strings.messages.website_template_not_selected)
        } else {
            var that = this;
            let products = [this.state.product_1, this.state.product_2, this.state.product_3, this.state.product_4, this.state.product_5, this.state.product_6, this.state.product_7, this.state.product_8, this.state.product_9, this.state.product_10, this.state.product_11, this.state.product_12]
            let menus = [this.state.menu_1, this.state.menu_2, this.state.menu_3, this.state.menu_4, this.state.menu_5, this.state.menu_6, this.state.menu_7, this.state.menu_8, this.state.menu_9]
            let categories = [this.state.category_1, this.state.category_2, this.state.category_3, this.state.category_4, this.state.category_5, this.state.category_6, this.state.category_7, this.state.category_8, this.state.category_9, this.state.category_10, this.state.category_11, this.state.category_12]
            axios.post(strings.host + 'project/content/store', {
                user_id: this.props.user_id,
                token: this.props.token,
                project_id: that.state.project_id,
                template_id: that.state.template_id,
                template_description: that.state.template_description,
                categories_description: that.state.categories_description,
                products: products,
                menus: menus,
                categories: categories
            }).then(function (response) {
                if (response.data.is_successful) {
                    that.setState({
                        template_id: null,
                        product_1: null,
                        product_2: null,
                        product_3: null,
                        product_4: null,
                        product_5: null,
                        product_6: null,
                        product_7: null,
                        product_8: null,
                        product_9: null,
                        product_10: null,
                        product_11: null,
                        product_12: null,
                        menu_1: null,
                        menu_2: null,
                        menu_3: null,
                        menu_4: null,
                        menu_5: null,
                        menu_6: null,
                        menu_7: null,
                        menu_8: null,
                        menu_9: null,
                        category_1: null,
                        category_2: null,
                        category_3: null,
                        category_4: null,
                        category_5: null,
                        category_6: null,
                        category_7: null,
                        category_8: null,
                        category_9: null,
                        category_10: null,
                        category_11: null,
                        category_12: null,
                        template__description: null,
                        categories_description: null
                    })
                    alert(strings.messages.website_content_saved)
                } else {
                    alert(response.data.message)
                }
            }).catch(function (error) {
                alert(error)
            });
        }
    }

    render() {
        return (
            <View p={25}>
                <Text h4>فرم محتوا</Text>

                {this.state.form_level != null
                    ?
                    (
                        <View row mt={15} mh={30} center>
                            <View flex h={25} bg={this.state.form_level >= 4 ? colors.orange : colors.white} circle b={1}
                                  bColor={colors.gray}/>
                            <View flex={3} h={1} circle b={1} bColor={colors.gray}/>
                            <View flex h={25} bg={this.state.form_level >= 3 ? colors.orange : colors.white} circle b={1}
                                  bColor={colors.gray}/>
                            <View flex={3} h={1} circle b={1} bColor={colors.gray}/>
                            <View flex h={25} bg={this.state.form_level >= 2 ? colors.orange : colors.white} circle b={1}
                                  bColor={colors.gray}/>
                            <View flex={3} h={1} circle b={1} bColor={colors.gray}/>
                            <View flex h={25} bg={this.state.form_level >= 1 ? colors.orange : colors.white} circle b={1}
                                  bColor={colors.gray}/>
                        </View>
                    )
                    :
                    null
                }

                <View mt={30}>
                    {this.showPage()}

                    {this.state.form_level != null
                        ?
                        (
                            <View row mv={30} center>
                                <View flex mh={5}>
                                    <Button flex h={40} bg={colors.orange} center bRadius={40} onPress={() => {
                                        if (this.state.form_level == 4) {
                                            this.submit()
                                        } else {
                                            this.setState({
                                                form_level: this.state.form_level + 1
                                            })
                                        }
                                    }}>
                                        <Text color={colors.white}
                                              h5>{this.state.form_level < 4 ? 'گام بعدی' : 'ارسال'}</Text>
                                    </Button>
                                </View>

                                <View flex mh={5} style={{display: this.state.form_level == 1 ? 'none' : 'flex'}}>
                                    <Button flex h={40} bg={colors.blue} center bRadius={40} onPress={() => {
                                        this.setState({
                                            form_level: this.state.form_level - 1
                                        })
                                    }}>
                                        <Text color={colors.white} h5>گام قبلی</Text>
                                    </Button>
                                </View>
                            </View>
                        )
                        :
                        null
                    }
                </View>
            </View>
        );
    }
}

WebsiteContent.navigationOptions = {
    header: null,
};

export default WebsiteContent;