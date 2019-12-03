import React, {Component, Fragment} from 'react';

import View from "../../components/public/MyView";
import Text from "../../components/public/MyText";
import colors from "../../constants/Colors";
import Input from "../../components/public/MyInput";

class WebsiteContentPage3 extends Component {
    constructor(props) {
        super(props);
    }

    showFields() {
        let fields = [];
        let field = '';
        for (var i = 1; i <= 9; i++) {
            if (this.props.menus != null && this.props.menus[i]) {
                field = this.props.menus[i].title
            } else {
                field = null
            }
            fields.push(
                <View mt={20} key={i}>
                    <Text>آیتم منوی {i}</Text>
                    <Input placeholder={"آیتم منوی " + i} mt={10} ph={10} pv={5} b={1} bColor={colors.light}
                           rounded={25} onChangeText={(value) => {
                        this.props.setMenu(value, i)
                    }}>{field}</Input>
                </View>
            )
        }
        return fields;
    }

    render() {
        return (
            <Fragment>
                <Text h5>فهرست منوی وبسایت :</Text>

                {this.showFields()}
            </Fragment>
        );
    }
}

WebsiteContentPage3.navigationOptions = {
    header: null,
};

export default WebsiteContentPage3;