import React, {Component} from 'react';

import View from "../../components/public/MyView";
import Text from "../../components/public/MyText";
import colors from "../../constants/Colors";
import Header from "../../components/header/Header";
import Button from "../../components/public/MyButton";
import axios from "axios";
import * as WebBrowser from "expo-web-browser";
import strings from "../../constants/Strings";

class WebsiteContract extends Component {
    constructor(props) {
        super(props);

        this.state = {
            project_id: this.props.project_id,
            name: '',
            national_code: '',
            phone: '',
            address: '',
            date: ''
        }
    }

    componentWillMount() {
        var that = this;
        axios.post(strings.host + 'project/contract', {
            project_id: that.state.project_id,
            user_id: that.props.user_id,
            token: that.props.token,
        }).then(function (response) {
            if (response.data.is_successful) {
                that.setState({
                    name: response.data.data.name,
                    national_code: response.data.data.national_code,
                    phone: response.data.data.phone,
                    address: response.data.data.address,
                    date: response.data.data.date
                })
            }
        }).catch(function (error) {
            alert(strings.messages.server_error)
        });
    }


    render() {
        return (
            <View p={25}>
                <Text h4>قرارداد طراحی وبسایت</Text>

                <View mt={25} p={20} rounded={15} shadow>
                    <Text>قرارداد طراحی سایت و اپلیکیشن همگام</Text>
                    <Text size={10} textLeft>تاریخ: {this.state.date}</Text>

                    <View mt={20}>
                        <Header w={-80} h={40} borderHeight={3} size={14} title={"ماده 1) طرفین قرارداد"}/>
                        <Text p={10}>
                            اين قرارداد فی مابین بين شرکت نرم افزاری ویستا (جوانفکران داده گستر) با شماره تماس 88550411
                            و آدرس "تهران، خیابان شهید مطهری، تقاطع میرزای شیرازی، پلاک ، 299 واحد 3" که در اين قرارداد
                            مجری
                            طرح ناميده ميشود از یک طرف، و آقای /خانم : "{this.state.name}" با کد ملی :
                            "{this.state.national_code}" و شماره تماس
                            "{this.state.phone} " و آدرس "{this.state.address}" که از این پس کارفرما نامیده می شود، از
                            طرف دیگر با شرایط "
                            .ذیل منعقد می گردد
                        </Text>
                    </View>
                </View>

                <View row mv={30}>
                    {/*<View flex mh={5}>*/}
                    {/*    <Button flex h={40} bg={colors.blue} center bRadius={40} onPress={() => {*/}

                    {/*    }}>*/}
                    {/*        <Text color={colors.white} h5>افزودن آپشن جدید</Text>*/}
                    {/*    </Button>*/}
                    {/*</View>*/}
                    <View flex mh={5}>
                        <Button flex h={40} bg={colors.orange} center bRadius={40} onPress={() => {
                            WebBrowser.openBrowserAsync(
                                'https://portal.vistaapp.ir/website/' + this.props.project_id + '/pdf'
                            )
                        }}>
                            <Text color={colors.white} h5>(PDF) دریافت فایل قرارداد</Text>
                        </Button>
                    </View>
                </View>
            </View>
        );
    }
}

WebsiteContract.navigationOptions = {
    header: null,
};

export default WebsiteContract;