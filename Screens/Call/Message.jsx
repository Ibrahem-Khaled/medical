import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TextInput } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import { Headercontent } from '../BottomtapScreens/Chat'
import { TouchableOpacity } from 'react-native'
import { Ionicons, FontAwesome, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

let idd = 0
const data = [
    {
        id: idd++,
        message: "مرحبا لي! تنفير هنا!",
        date: '3:30 AM',
        user: true,
    },
    {
        id: idd++,
        message: "مرحبا تنفير",
        date: '3:31 AM',
        user: false,
    },
    {
        id: idd++,
        message: "كيف حالك؟ جيد؟",
        date: '3:31 AM',
        user: true,
    },
    {
        id: idd++,
        message: "أنا رائع!",
        date: '3:32 AM',
        user: false,
    },
    {
        id: idd++,
        message: "ما زلت أعاني من الألم",
        date: '3:33 AM',
        user: true,
    },
    {
        id: idd++,
        message: "آسف لسماع ذلك ، لا تحزن",
        date: '3:40 AM',
        user: false,
    },
    {
        id: idd++,
        message: " لا تحزن",
        date: '3:41 AM',
        user: false,
    },
    {
        id: idd++,
        message: "لا اعلم يا دكتور بدون هذه الكلمة كيف كنت ساعيش",
        date: '3:42 AM',
        user: true,
    },
    {
        id: idd++,
        message: "ههههههههه.. لقد حجزت لك حتي اعرف سبب مرضك",
        date: '3:44 AM',
        user: false,
    },
    {
        id: idd++,
        message: "ادعو الله ان يخفف عنك الالم",
        date: '3:44 AM',
        user: false,
    },
    {
        id: idd++,
        message: "اشكرك اوعدك",
        date: '3:49 AM',
        user: true,
    },
]

export default function Message({ route }) {
    const { name, type, image } = route.params
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <Headercontent text={'الدردشة'} />
            </Header>
            <View style={styles.head}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('incall', {
                            name: name,
                            type: type,
                            image: image
                        })
                    }}
                    style={[styles.img, { borderRadius: 10 }]}>
                    <Ionicons name="ios-videocam-outline" size={24} color="#2B2B2B" />
                </TouchableOpacity>

                <View style={[styles.head, { width: "65%" }]}>
                    <View>
                        <Text style={{ fontWeight: '700', fontSize: 16, color: '#2B2B2B' }}>{name}</Text>
                        <Text style={{ fontWeight: '400', fontSize: 12, color: '#555555' }}>{type}</Text>
                    </View>
                    <Image style={styles.img} source={{ uri: image }} />
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {data.map((item, index) => {
                        return (
                            <View style={item.user == true ? styles.current : styles.uncurrent} key={index}>
                                <Text style={[styles.txt, {}]}>{item.message}</Text>
                                <Text style={{ fontWeight: "400", color: "gray", margin: 3 }}>{item.date}</Text>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
            <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                <TouchableOpacity style={styles.btnicon}>
                    <AntDesign name="filetext1" size={24} color="#555555" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnicon}>
                    <FontAwesome5 name="images" size={24} color="#555555" />
                </TouchableOpacity>
                <View style={{
                    width: "70%",
                    backgroundColor: "#fff",
                    height: 48,
                    borderRadius: 10,
                    alignSelf: "flex-end",
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-around"
                }}>
                    <FontAwesome name="send-o" size={24} color="#555555" />
                    <TextInput
                        placeholder='اكتب رسالة'
                        textAlign='right'
                        style={styles.inbt}
                    />
                </View>

            </View>

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    head: {
        width: "95%",
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-around"
    },
    img: {
        width: 48,
        height: 48,
        borderRadius: 50,
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    txt: {
        fontWeight: "700",
        color: '#000',
        padding: 10,
        maxWidth: '90%'
    },
    current: {
        backgroundColor: "#00ADBB",
        borderRadius: 10,
        borderTopLeftRadius: 0,
        maxWidth: "47%",
        margin: 5,
        alignSelf: "flex-start",
        alignItems: "center"
    },
    uncurrent: {
        backgroundColor: "#fff",
        borderRadius: 10,
        borderTopRightRadius: 0,
        maxWidth: "47%",
        margin: 5,
        alignSelf: "flex-end",
        alignItems: "center"
    },
    inbt: {
        width: "78%",
        height: "100%"
    },
    btnicon: {
        width: 48,
        height: 48,
        backgroundColor: "#fff",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
})