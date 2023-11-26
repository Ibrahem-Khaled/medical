import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'

export const Headercontent = ({ text, search }) => {

    const navigation = useNavigation()
    return (
        <>
            {search !== true ?
                < TouchableOpacity onPress={() => { navigation.navigate('edit') }}>
                    <Image
                        source={require('../../images/icons/filter.png')}
                        style={{ width: 44, height: 44, resizeMode: "contain", margin: 5 }} />
                </TouchableOpacity >
                :
                <TouchableOpacity style={{ width: 44, height: 44, margin: 5, justifyContent: "center",alignItems:"center" }}
                    onPress={() => { navigation.navigate('search') }}>
                   <AntDesign name="search1" size={24} color="black" />
                </TouchableOpacity >
            }

            <Text style={{ fontWeight: "500", fontSize: 18, textAlign: "center" }}>{text}</Text>

            <TouchableOpacity onPress={() => { navigation.goBack() }}>
                <Image
                    source={require('../../images/icons/arrowBack.png')}
                    style={{ width: 44, height: 44, resizeMode: "contain", margin: 5 }} />
            </TouchableOpacity>
        </>
    )
}

let idd = 0
export const data = [
    {
        id: idd++,
        day: 27,
        mnthYear: "2023 JUL",
        time: "10:5 PM",
        name: 'ابراهيم خالد',
        type: "خدمات عيادات الطب النفسي",
        image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww"
    },
    {
        id: idd++,
        day: 27,
        mnthYear: "2023 JUL",
        time: "10:5 PM",
        name: 'ادهم الشرقاوي',
        type: "خدمات طب اسنان",
        image: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww"
    },
    {
        id: idd++,
        day: 27,
        mnthYear: "2023 JUL",
        time: "10:5 PM",
        name: 'ايمان فوزي',
        type: "خدمات الطب البشري",
        image: "https://images.unsplash.com/photo-1574297500578-afae55026ff3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBtdXNsaW18ZW58MHx8MHx8fDA%3D"
    },
    {
        id: idd++,
        day: 27,
        mnthYear: "2023 JUL",
        time: "10:5 PM",
        name: 'ابراهيم خالد',
        type: "خدمات عيادات الطب النفسي",
        image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww"
    },
    {
        id: idd++,
        day: 27,
        mnthYear: "2023 JUL",
        time: "10:5 PM",
        name: 'ابراهيم خالد',
        type: "خدمات عيادات الطب النفسي",
        image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww"
    },
]


export default function Chat() {

    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.main}>
            <Header>
                <Headercontent
                    text={'دردشة / مكالمة فيديو'}
                />
            </Header>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('message', {
                                name: item.name,
                                type: item.type,
                                image: item.image,
                            })
                        }}
                        style={styles.btn}>
                        <View style={[styles.subview, { borderLeftWidth: 0, marginLeft: 5, justifyContent: "space-evenly", height: 100 }]}>
                            <Image style={{ width: 30, height: 30 }} source={require('../../images/icons/chaticon/chat.png')} />
                            <Image style={{ width: 30, height: 30 }} source={require('../../images/icons/chaticon/video.png')} />
                        </View>

                        <View style={[styles.subview, { borderLeftWidth: 0 }]}>
                            <Text style={[styles.txtdate, { fontWeight: "500", fontSize: 10 }]}> {item.time}</Text>
                            <Text style={[styles.txtdate, { fontSize: 13, color: "#2B2B2B" }]}> {item.name}</Text>
                            <Text style={[styles.txtdate, { fontWeight: "500", fontSize: 10 }]}> {item.type}</Text>
                        </View>

                        <Image style={styles.img} source={{ uri: item.image }} />


                        <View style={styles.subview}>
                            <Text style={styles.txtdate}> {item.day}</Text>
                            <Text style={[styles.txtdate, { fontSize: 10, }]}> {item.mnthYear}</Text>
                        </View>

                    </TouchableOpacity>
                }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    btn: {
        width: "90%",
        alignSelf: "center",
        backgroundColor: "#fff",
        borderRadius: 15,
        margin: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    txtdate: {
        fontWeight: "700",
        fontSize: 24,
        color: "#717171",
        textAlign: "center",
        margin: 10
    },
    img: {
        width: 59,
        height: 59,
        borderRadius: 59 * 2
    },
    subview: {
        alignItems: "center",
        justifyContent: "center",
        borderLeftWidth: 1,
        borderColor: "#BDBDBD33"
    },
})