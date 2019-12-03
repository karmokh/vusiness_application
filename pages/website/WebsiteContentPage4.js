import React, {Component, Fragment} from 'react';

import View from "../../components/public/MyView";
import Text from "../../components/public/MyText";
import colors from "../../constants/Colors";
import Input from "../../components/public/MyInput";

class WebsiteContentPage4 extends Component {
    constructor(props) {
        super(props);
    }

    showFields() {
        let fields = [];
        let field = '';
        for (var i = 0; i < 12; i++) {
            if (this.props.categories != null && this.props.categories[i]) {
                field = this.props.categories[i].title
            } else {
                field = null
            }

            fields.push(
                <View mt={20} key={i}>
                    <Text>دسته بندی {i + 1}</Text>
                    <Input placeholder={"دسته بندی " + (i + 1)} mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                           rounded={25} onChangeText={(value) => {
                        this.props.setCategory(value, i + 1)
                    }}>{field}</Input>
                </View>
            )
        }
        return fields;
    }

    render() {
        return (
            <Fragment>
                <Text h5>دسته بندی های وبسایت :</Text>

                {this.showFields()}

                <View mt={20}>
                    <Text>توضیحات محصولات و خدمات</Text>
                    <Input h={180} p={15} b={1} bColor={colors.light} rounded multiline={true}
                           placeholder={"توضیحات محصولات و خدمات"} value={this.props.description}
                           onChangeText={(value) => {
                               this.props.setCategoryDescription(value)
                           }}/>
                </View>
            </Fragment>
        );
    }
}

WebsiteContentPage4.navigationOptions = {
    header: null,
};

export default WebsiteContentPage4;