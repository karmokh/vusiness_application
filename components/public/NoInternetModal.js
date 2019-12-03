import React from "react";
import {Modal} from "react-native";
import View from "./MyView";
import Text from "./MyText";
import Image from "./MyImage";
import colors from "../../constants/Colors";
import wifi from "../../assets/icons/wifi.png";

export default function NoInternetModal(props) {
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.noInternet}
            onRequestClose={() => {

            }}>
            <View flex p={30} center>
                <Image source={wifi} w={150} h={150}/>
                <Text mt={50} mh={20} textCenter color={colors.dark} size={20}>دسترسی به اینترنت امکان پذیر نمی باشد...</Text>
            </View>
        </Modal>
    );
}