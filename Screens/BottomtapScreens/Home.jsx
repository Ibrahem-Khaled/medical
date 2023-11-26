import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import { Ionicons } from '@expo/vector-icons';
import Slide from '../../Components/Slide';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export const Headerhome = ({ rs }) => {
    return (
        <>
            <View style={{ flexDirection: "row", alignItems: "center", borderRadius: 50, borderWidth: 1, borderColor: "#2B2B221A" }}>
                <Text style={{ fontWeight: "600", fontSize: 12, color: "#000000", margin: 5 }}>{rs}رس</Text>
                <View style={{
                    backgroundColor: "#555555",
                    width: 24, height: 24,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 50,
                    margin: 5
                }}>
                    <Ionicons name="wallet-outline" size={15} color="black" />
                </View>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", }}>
                <View style={{
                    justifyContent: "center",
                    alignItems: "flex-end",
                    margin: 5
                }}>
                    <Text style={{ fontWeight: "700", fontSize: 16, color: "#000000", margin: 5 }}>مرحبًا </Text>
                    <Text style={{ fontWeight: "400", fontSize: 12, color: "#2B2B2BB2", margin: 5 }}>كيف تشعر اليوم؟ </Text>
                </View>

                <Image
                    source={{ uri: "https://plus.unsplash.com/premium_photo-1682724602143-a77d75d273b1?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
                    style={{ width: 48, height: 48, borderRadius: 48 * 2, margin: 5 }}
                    resizeMode='contain'
                />
            </View>

        </>
    )
}

const images = [
    "https://source.unsplash.com/1024x768/?doctors",
    "https://source.unsplash.com/1024x768/?medicine",
    "https://source.unsplash.com/1024x768/?pharmacy",
    "https://source.unsplash.com/1024x768/?pills", // Network image
]
let idd = 0
const data = [
    {
        id: idd++,
        name: "التحاليل الطبية",
        image: require('../../images/icons/list/1.png'),
        status: true,
    },
    {
        id: idd++,
        name: "زيارة الطبيب",
        image: require('../../images/icons/list/2.png'),
        status: false,
    },
    {
        id: idd++,
        name: " زيارة ممرض",
        image: require('../../images/icons/list/3.png'),
        status: false,
    },
    {
        id: idd++,
        name: " المرافقة الصحية",
        image: require('../../images/icons/list/4.png'),
        status: false,
    },
    {
        id: idd++,
        name: " العلاج الطبيعي",
        image: require('../../images/icons/list/5.png'),
        status: false,
    },
    {
        id: idd++,
        name: "التطعيمات",
        image: require('../../images/icons/list/6.png'),
        status: false,
    },
    {
        id: idd++,
        name: "الأشعة",
        image: require('../../images/icons/list/7.png'),
        status: false,
    },
    {
        id: idd++,
        name: " المحاليل الفيتامينية",
        image: require('../../images/icons/list/8.png'),
        status: false,
    },
]


export default function Home() {

    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.main}>
            <ScrollView>
                <Header>
                    <Headerhome
                        rs={1500}
                    />
                </Header>

                <Slide images={images} />

                <View style={styles.subview}>
                    <TouchableOpacity style={[styles.callbtn, { backgroundColor: "#fff" }]}>
                        <View style={styles.camview}>
                            <FontAwesome name="video-camera" size={27} color="#00ADBB" />
                        </View>
                        <Text style={[styles.btntitel, { color: "#000" }]}>الاستشارات الافتراضية</Text>
                        <Text style={[styles.btntitel, { fontSize: 11, fontWeight: "500", color: "#000" }]}>استشارات فورية عن بعد في أكثر من عيادة</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { navigation.navigate('calllive') }}
                        style={[styles.callbtn, {}]}>
                        <View style={[styles.camview, { backgroundColor: "#fff" }]}>
                            <FontAwesome name="video-camera" size={27} color="#643FDB" />
                        </View>
                        <Text style={[styles.btntitel, {}]}>الإتصال المباشر</Text>
                        <Text style={[styles.btntitel, { fontSize: 11, fontWeight: "500" }]}>استشارات فورية  بطب الطوارء عن بعد بدون موعد</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.subview, { margin: 10 }]}>
                    <Text style={{ fontWeight: "500", fontSize: 9, lineHeight: 16, color: "#7164F0" }}>إظهار الكل</Text>
                    <Text style={{ fontWeight: "700", fontSize: 14, lineHeight: 24, color: "#2B2B2B" }}> الخدمات الطبية المنزلية</Text>
                </View>

                <View style={[styles.subview, {}]}>
                    {data.map((item, index) => {
                        return (
                            <TouchableOpacity style={{ width: "22%", alignItems: "center", justifyContent: "center" }} key={index}>
                                <View style={{
                                    width: "100%",
                                    backgroundColor: item.status !== true ? "#fff" : '#00ADBB',
                                    borderRadius: 15,
                                    height: 75,
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    <Image style={{ width: 35, height: 35, resizeMode: "contain" }} source={item.image} />
                                </View>
                                <Text style={{ fontWeight: "400", fontSize: 11, lineHeight: 16, color: "#2B2B2BCC", margin: 5 }}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>

                <View style={[styles.subview, { margin: 10, }]}>
                    <Text style={{ fontWeight: "500", fontSize: 9, lineHeight: 16, color: "#7164F0" }}>إظهار الكل</Text>
                    <Text style={{ fontWeight: "700", fontSize: 14, lineHeight: 24, color: "#2B2B2B" }}> عروض</Text>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {data.map((item, index) => {
                        return (
                            <TouchableOpacity
                                style={{
                                    width: 242, height: 116, backgroundColor: "#fff",
                                    borderRadius: 15, alignItems: "center",
                                    justifyContent: "center",
                                    margin: 5,
                                    flexDirection: "row"
                                }} key={index}>

                                <View style={{ justifyContent: "center", alignItems: "center", }}>
                                    <Text style={{ fontWeight: "700", fontSize: 11, lineHeight: 16, color: "#2B2B2BCC", margin: 5 }}>{item.name}</Text>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <Text style={{ fontWeight: "700", fontSize: 13, lineHeight: 16, color: "#2B2B2B", margin: 5, textDecorationLine: "line-through" }}>950 ريال</Text>
                                        <Text style={{ fontWeight: "700", fontSize: 10, lineHeight: 16, color: "#00ADBB", margin: 5 }}>450 ريال</Text>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <Text style={{
                                            width: 23, height: 23,
                                            borderRadius: 46,
                                            backgroundColor: "#FF8D8D",
                                            textAlign: "center",
                                            fontSize: 9,
                                            fontWeight: "400",
                                            color: "#FFFFFF",
                                            verticalAlign: "middle"
                                        }}>50%</Text>
                                        <Text style={{ fontWeight: "400", fontSize: 10, lineHeight: 16, color: "#62627B", margin: 5 }}>10 تحليل</Text>
                                        <Image style={{ width: 14, height: 14, resizeMode: "contain" }} source={require('../../images/icons/t7alel.png')} />
                                    </View>
                                </View>

                                <View style={{
                                    width: 96, height: 84,
                                    backgroundColor: "#EAEAEA",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: 10
                                }}>
                                    <Image style={{ width: 35, height: 35, resizeMode: "contain" }} source={item.image} />
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>


                <View style={{ height: 70 }} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    subview: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        flexWrap: "wrap"
    },
    callbtn: {
        width: "45%",
        backgroundColor: "#643FDB",
        borderRadius: 12,
        height: 139,
        alignItems: "center",
        justifyContent: "center"
    },
    camview: {
        width: 56,
        height: 56,
        borderRadius: 56,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F6F8FA",
        margin: 3
    },
    btntitel: {
        fontWeight: "700",
        fontSize: 14,
        lineHeight: 24,
        textAlign: "center",
        color: "#fff",
        width: "90%"
    },
})