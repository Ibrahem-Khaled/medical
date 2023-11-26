import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View,SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import Phoneinbut from '../../Components/Phoneinbut'
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function Login() {

    const [secure, setScure] = React.useState(true);

    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.main} >
            <ScrollView contentContainerStyle={{ alignItems: "center" }}>
                <Header />

                <Text style={styles.txt}>تسجيل الدخول</Text>

                <Text style={styles.subtxt}>املأ التفاصيل الخاصة بك أو تابع مع وسائل التواصل الاجتماعي</Text>

                <Phoneinbut />

                <TextInput
                    contentStyle={{ backgroundColor: "#fff" }}
                    style={{ width: "80%", margin: 15, }}
                    outlineStyle={{ borderWidth: 0 }}
                    label="Password"
                    secureTextEntry={secure ? true : false}
                    mode='outlined'
                    right={<TextInput.Icon onPress={() => { setScure(!secure) }} icon={secure ? "eye" : "eye-off"} />}
                />

                <Text style={[styles.subtxt, { textAlign: "right" }]}>نسيت كلمة المرور ? </Text>

                <Button style={{ width: "90%", height: 48, borderRadius: 12, margin: 5, backgroundColor: "#00ADBB" }}
                    mode="contained" onPress={() => { navigation.navigate('bottomtaps') }}>
                    تسجيل الدخول
                </Button>

                <Image style={{ width: "85%", resizeMode: "contain", alignSelf: "center" }} source={require('../../images/icons/orline.png')} />

                <TouchableOpacity style={styles.btn}>
                    <Text style={[styles.subtxt, { margin: 0 }]}>الدخول مع جوجل</Text>
                    <Image
                        style={styles.icons}
                        source={require('../../images/icons/google.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={[styles.subtxt, { margin: 0 }]}>الدخول باستخدام معرف أبل</Text>
                    <Image
                        style={styles.icons}
                        source={require('../../images/icons/apple.png')} />
                </TouchableOpacity>


                <Text onPress={() => { navigation.navigate('register') }} style={[styles.subtxt, { fontWeight: "bold", margin: 40 }]}>ليس لديك حساب؟   سجل الان</Text>

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
    icons: {
        width: 24,
        height: 24,
        resizeMode: "contain"
    },
})