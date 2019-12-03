import React, {Component, Fragment} from 'react';

import View from "../../components/public/MyView";
import Text from "../../components/public/MyText";
import colors from "../../constants/Colors";
import Input from "../../components/public/MyInput";

class WebsiteContentPage2 extends Component {
    constructor(props) {
        super(props);
    }

    showFields() {
        let fields = [];
        let field = '';
        for (var i = 0; i < 12; i++) {
            if (this.props.products != null && this.props.products[i]) {
                field = this.props.products[i].title
            } else {
                field = null
            }
            fields.push(
                <View mt={20} key={i}>
                    <Text>محصول شماره {i + 1}</Text>
                    <Input placeholder={"محصول شماره " + (i + 1)} mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                           rounded={25} onChangeText={(value) => {
                        this.props.setProduct(value, i + 1)
                    }}>{field}</Input>
                </View>
            )
        }
        return fields;
    }

    render() {
        return (
            <Fragment>
                <Text h5>محصولات و خدمات :</Text>

                {this.showFields()}
            </Fragment>
        );
    }
}

WebsiteContentPage2.navigationOptions = {
    header: null,
};

export default WebsiteContentPage2;