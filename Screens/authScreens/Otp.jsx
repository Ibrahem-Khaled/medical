import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View ,SafeAreaView} from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import OtpInputs from 'react-native-otp-inputs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Otp() {


    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.main} >
            <ScrollView contentContainerStyle={{ alignItems: "center" }}>
                <Header >
                    <View/>
                    <View/>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Image
                            source={require('../../images/icons/arrowBack.png')}
                            style={{ width: 44, height: 44, resizeMode: "contain", margin: 5 }} />
                    </TouchableOpacity>
                </Header>

                <Text style={styles.txt}>أدخل OTP الخاص بك</Text>

                <Text style={styles.subtxt}>لقد أرسلنا لك للتو رمزًا مكونًا من 4 أرقام عبر هاتفك</Text>


                <OtpInputs
                    handleChange={(code) => console.log(code)}
                    numberOfInputs={4}
                    autofillFromClipboard={false}
                    style={{ width: "100%", alignItems: "center", flexDirection: "row", justifyContent: "space-around", margin: 10 }}
                    focusStyles={{ borderWidth: 1, borderColor: "#00ADBB", borderRadius: 8 }}
                    inputContainerStyles={{ width: 52, height: 52, alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "#2B2B2B1A", borderRadius: 8 }}
                    placeholder='0'
                />

                <Button style={{ width: "90%", height: 48, borderRadius: 12, margin: 15, backgroundColor: "#00ADBB" }}
                    mode="contained" onPress={() => { navigation.navigate('moredata') }}>
                    تحقق
                </Button>
                <View style={{ flexDirection: "row", width: "95%", justifyContent: "space-around", margin: 50, alignSelf: "center" }}>
                    <View style={{ flexDirection: "row" }}>
                        <MaterialCommunityIcons name="timer-outline" size={24} color="black" />
                        <Text style={[styles.subtxt, { fontWeight: "bold", margin: 0, width: "30%", marginLeft: 10 }]}>00:03</Text>
                    </View>
                    <Text style={[styles.subtxt, { fontWeight: "bold", margin: 0 }]}>لم أتلق رمز?  أعد إرسال الرمز </Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    txt: {
        fontWeight: "500",
        fontSize: 25,
        margin: 15,
        textAlign: "center"

    },
    subtxt: {
        fontWeight: "400",
        fontSize: 15,
        margin: 15,
        textAlign: "center",
        color: "#717171",
        width: "65%"
    },
    btn: {
        width: "85%",
        height: 55,
        borderRadius: 12,
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#fff",
        justifyContent: "space-evenly",
        margin: 5
    },
})