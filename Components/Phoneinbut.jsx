import React, { useState, useRef } from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    StatusBar,
    TouchableOpacity,
    Text,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";

const Phoneinbut = () => {


    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef(null);

    return (
        <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="SA"
            layout="first"
            onChangeText={(text) => {
                setValue(text);
            }}
            onChangeFormattedText={(text) => {
                setFormattedValue(text);
            }}
            withDarkTheme
            withShadow
            containerStyle={{borderRadius:10}}
        />

    );
};

export default Phoneinbut;