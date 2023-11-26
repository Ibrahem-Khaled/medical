import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import Header from '../../Components/Header';
import { Headercontent } from '../BottomtapScreens/Chat';
import { useNavigation } from '@react-navigation/native';


let idd = 0
const data = [
    {
        id: idd++,
        name: 'تعديل الملف الشخصي',
        icon: 'user-o',
        navigate: 'editprofile',
    },
    {
        id: idd++,
        name: 'تغيير كلمة المرور',
        icon: 'lock',
        navigate: 'editpassword',
    },
    {
        id: idd++,
        name: 'تعديل البيانات البنكية',
        icon: 'bank',
        navigate: 'editbank',
    },
    {
        id: idd++,
        name: 'تغيير اللغة',
        icon: 'language',
        navigate: 'changelanguage',
    },
    {
        id: idd++,
        name: 'سياسة الخصوصية',
        icon: 'shield',
        navigate: 'userpolce',
    },
    {
        id: idd++,
        name: 'اتصل بنا',
        icon: 'check-circle-o',
        navigate: 'contactus',
    },
    {
        id: idd++,
        name: 'تسجيل الخروج',
        icon: 'sign-out',
        navigate: 'login',
    },
]
export default function Edit() {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <Headercontent text={'الملف الشخصي'} />
            </Header>
            <Image style={styles.img} source={{ uri: "https://images.unsplash.com/photo-1682686581797-21ec383ead02?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D" }} />

            <Text style={[styles.txt, { textAlign: "center" }]}>Any name</Text>

            {data.map((item, index) => {
                return (
                    <TouchableOpacity onPress={() => { navigation.navigate(item.navigate) }} key={index} style={styles.btn}>
                        <Text style={styles.txt}>{item.name}</Text>
                        <FontAwesome style={{ margin: 10 }} size={24} color={'#2B2B2B'} name={item.icon} />
                    </TouchableOpacity>
                )
            })}
            <Image style={{ width: 147, height: 52, alignSelf: "center", margin: 10, resizeMode: "contain" }} source={require('../../images/logo.png')} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: "95%", height: 56,
        alignSelf: "center",
        borderRadius: 8,
        margin: 5,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    img: {
        width: 80, height: 80,
        alignSelf: "center",
        borderRadius: 80,
        margin: 5,
    },
    txt: {
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 20,
        color: "#2B2B2B",
        margin: 5
    },
})