import {Platform} from "react-native";

const StackConfig = Platform.select({
    web: {headerMode: 'none'},
    default: {},
});

export default StackConfig;