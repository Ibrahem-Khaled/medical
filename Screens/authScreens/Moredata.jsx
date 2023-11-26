import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function Moredata() {

    const [secure, setScure] = React.useState(true);

    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.main} >
            <ScrollView contentContainerStyle={{ alignItems: "center" }}>
                <Header >
                    <View />
                    <View />
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Image
                            source={require('../../images/icons/arrowBack.png')}
                            style={{ width: 44, height: 44, resizeMode: "contain", margin: 5 }} />
                    </TouchableOpacity>
                </Header>

                <Text style={styles.txt}>تسجيل حساب الطبيب </Text>

                <Text style={styles.subtxt}>املأ التفاصيل الخاصة بك أو تابع معوسائل التواصل الاجتماعي</Text>

                <TextInput
                    contentStyle={{ backgroundColor: "#fff" }}
                    style={{ width: "80%", margin: 10, }}
                    outlineStyle={{ borderWidth: 0 }}
                    label=" الاسم الكامل بالعربي"
                    mode='outlined'
                    right={<TextInput.Icon icon={"account-circle-outline"} />}
                />
                <TextInput
                    contentStyle={{ backgroundColor: "#fff" }}
                    style={{ width: "80%", margin: 10, }}
                    outlineStyle={{ borderWidth: 0 }}
                    label="الاسم الكامل بالإنجليزية"
                    mode='outlined'
                    right={<TextInput.Icon icon={"account-circle-outline"} />}
                />
                <TextInput
                    contentStyle={{ backgroundColor: "#fff" }}
                    style={{ width: "80%", margin: 10, }}
                    outlineStyle={{ borderWidth: 0 }}
                    label="البريد الإلكتروني"
                    mode='outlined'
                    right={<TextInput.Icon icon={"email-outline"} />}
                />
                <TextInput
                    contentStyle={{ backgroundColor: "#fff" }}
                    style={{ width: "80%", margin: 10 }}
                    outlineStyle={{ borderWidth: 0 }}
                    label="ادخل كلمة السر"
                    secureTextEntry={secure ? true : false}
                    mode='outlined'
                    left={<TextInput.Icon onPress={() => { setScure(!secure) }} icon={secure ? "eye" : "eye-off"} />}
                />
                <TextInput
                    contentStyle={{ backgroundColor: "#fff" }}
                    style={{ width: "80%", margin: 10, }}
                    outlineStyle={{ borderWidth: 0 }}
                    label="تأكيد كلمة السر"
                    secureTextEntry={secure ? true : false}
                    mode='outlined'
                    left={<TextInput.Icon onPress={() => { setScure(!secure) }} icon={secure ? "eye" : "eye-off"} />}
                />


                <Button style={{ width: "90%", height: 48, borderRadius: 12, margin: 5, backgroundColor: "#00ADBB" }}
                    mode="contained" onPress={() => { navigation.navigate('profiledata') }}>
                    التالي
                </Button>
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