import React, {Component} from 'react';

import View from "../../components/public/MyView";
import Text from "../../components/public/MyText";
import Button from "../../components/public/MyButton";
import colors from "../../constants/Colors";
import SeoReportDetails from "./SeoReportDetails";
import axios from "axios";
import strings from "../../constants/Strings";

class SeoReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project_id: this.props.project_id,
            report_id: null,
            reports: []
        }
    }

    componentWillMount() {
        var that = this;
        axios.post(strings.host + 'project/reports', {
            project_id: that.state.project_id,
            user_id: that.props.user_id,
            token: that.props.token,
        }).then(function (response) {
            if (response.data.is_successful) {
                that.setState({
                    reports: response.data.data,
                })
            } else {
                alert(response.data.message)
            }
        }).catch(function (error) {
            alert(strings.messages.server_error)
        });
    }

    renderReports() {
        let reports = []
        this.state.reports.map((report, key) => {
            reports.push(
                <View key={key} mt={20} p={10} center rounded={10} shadow>
                    <Button center onPress={() => {
                        this.setState({
                            report_id: report.id
                        })
                    }}>
                        <Text color={colors.dark}>گزارش {report.date}</Text>
                    </Button>
                </View>
            )
        })

        return reports
    }

    backPressed() {
        this.setState({
            report_id: null
        })
        return true;
    }

    render() {
        if (this.state.report_id) {
            return <SeoReportDetails backPressed={() => this.backPressed()} user_id={this.props.user_id} token={this.props.token} report_id={this.state.report_id}/>
        } else {
            if(this.state.reports.length > 0) {
                return (
                    <View p={25}>
                        <Text h4>گزارش ماهانه</Text>
                        {this.renderReports()}
                    </View>
                );
            } else {
                return (
                    <View mt={50} p={25}>
                        <Text h5 center>گزارشی برای پروژه شما به ثبت نرسیده است</Text>
                    </View>
                );
            }
        }
    }
}

SeoReport.navigationOptions = {
    header: null,
};

export default SeoReport;