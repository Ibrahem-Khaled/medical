import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import { TextInput, Button, Checkbox } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const type = [
    'النساء و الولادة',
    'الطب النفسي',
    'التغذية و جراحة السمنة',
    'الباطنة',
    'الطب العام و طب الأسرة',
    'الجلدية و التجميل',
    'الأطفال',
    'شرح نتائج التحاليل المخبرية',
]


export default function Profiledata() {

    const [checked, setChecked] = React.useState(false);

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
                <Text style={styles.subtxt}>الرجاء إدخال المعلومات الخاصة بك</Text>

                <LinearGradient
                    start={{ x: 1, y: 0.5 }}
                    colors={['#C2F9F5', '#50D5D0', '#02C9C4']}
                    style={{ width: 100, height: 100, borderRadius: 50 * 2, justifyContent: "center", alignItems: "center", margin: 15 }}>
                    <Image
                        style={{ width: 46, height: 50 }}
                        source={require('../../images/icons/doctor.png')} />
                </LinearGradient>

                <View style={styles.submain}>
                    <Text style={[styles.txt, { fontSize: 16, fontWeight: "500", textAlign: "right" }]}>الجنس</Text>
                    <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
                        <Button style={styles.subbtn}
                            mode="contained"
                            icon='gender-female'
                            onPress={() => { navigation.navigate('bottomtaps') }}>
                            أنثى
                        </Button>
                        <Button style={[styles.subbtn, { backgroundColor: "#fff" }]}
                            mode="contained"
                            icon='gender-male'
                            textColor='gray'
                            onPress={() => { navigation.navigate('bottomtaps') }}>
                            ذكر
                        </Button>
                    </View>
                </View>

                <View style={styles.submain}>
                    <Text style={[styles.txt, { fontSize: 16, fontWeight: "500", textAlign: "right" }]}>الإختصاصات</Text>
                    <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
                        {type.map((item) => (
                            <Button style={[styles.subbtn, { width: "47%" }]}
                                mode="contained"
                                onPress={() => { navigation.navigate('bottomtaps') }}>
                                {item}
                            </Button>
                        ))}
                    </View>
                </View>

                <TextInput
                    contentStyle={{ backgroundColor: "#fff" }}
                    style={{ width: "90%", margin: 15, }}
                    outlineStyle={{ borderWidth: 0, borderRadius: 10 }}
                    label="عدد سنوات الخبرة"
                    mode='outlined'
                />
                <TextInput
                    contentStyle={{ backgroundColor: "#fff" }}
                    style={{ width: "90%", margin: 15, }}
                    outlineStyle={{ borderWidth: 0, borderRadius: 10 }}
                    label="تحديد المستوى الوظيفي"
                    mode='outlined'
                />
                <TextInput
                    contentStyle={{ backgroundColor: "#fff" }}
                    style={{ width: "90%", margin: 15, }}
                    outlineStyle={{ borderWidth: 0, borderRadius: 10 }}
                    label="معلومات عنك بالإنجليزي"
                    multiline
                    mode='outlined'
                />
                <TextInput
                    contentStyle={{ backgroundColor: "#fff" }}
                    style={{ width: "90%", margin: 15, }}
                    outlineStyle={{ borderWidth: 0, borderRadius: 10 }}
                    label="معلومات عنك بالعربية"
                    multiline
                    mode='outlined'
                />

                <View style={[styles.submain, { flexDirection: "row",alignItems:"center" }]}>
                    <Checkbox
                    color='#00ADBB'
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                    />
                    <Text style={[styles.txt, { fontSize: 16, fontWeight: "500", textAlign: "right" }]}> أوافق على العقد الإلكتروني</Text>
                </View>

                <Button style={{ width: "90%", height: 48, borderRadius: 12, margin: 5, backgroundColor: "#00ADBB" }}
                    mode="contained" onPress={() => { navigation.navigate('bottomtaps') }}>
                    تسجيل
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
    subbtn: {
        width: 103,
        height: 41,
        borderRadius: 8,
        margin: 5,
        backgroundColor: "#00ADBB",
    },
    submain: {
        width: "95%",
        alignSelf: "center",
    },
})