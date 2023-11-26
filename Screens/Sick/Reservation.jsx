import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import { Headercontent } from '../BottomtapScreens/Chat'
import { AntDesign, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';

let idd = 0
const data = [
    {
        id: idd++,
        day: 21,
        name: 'Sat',
        date: '12:00 AM',
        status: true,
    },
    {
        id: idd++,
        day: 22,
        name: 'Sun',
        date: '1:00 AM',
        status: false,
    },
    {
        id: idd++,
        day: 23,
        name: 'Man',
        date: '5:00 AM',
        status: false,
    },
    {
        id: idd++,
        day: 24,
        name: 'Tue',
        date: '7:00 AM',
        status: false,
    },
]




export default function Reservation({ route }) {
    const { name, image, type } = route.params
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <Headercontent text={'التفاصيل'} />
            </Header>
            <ScrollView>
                <View style={{ flexDirection: "row", width: "100%", alignItems: "center", justifyContent: "space-around", marginTop: 10 }}>
                    <View style={{ width: "60%", alignItems: "flex-end" }}>
                        <Text style={styles.txtname}>{name}</Text>
                        <Text style={styles.txttype}>{type}</Text>

                        <TouchableOpacity style={{ flexDirection: "row", margin: 3 }}>
                            <View>
                                <Text style={[styles.txttype, { fontSize: 10 }]}>التقييم</Text>
                                <Text style={[styles.txtname, { fontSize: 12 }]}>4.5</Text>
                            </View>
                            <AntDesign style={{ padding: 8, backgroundColor: "#fff", borderRadius: 10 }} name="star" size={12} color="#FFD855" />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <View>
                                <Text style={[styles.txttype, { fontSize: 10 }]}>الخبرة</Text>
                                <Text style={[styles.txtname, { fontSize: 12 }]}>10+</Text>
                            </View>
                            <MaterialCommunityIcons style={{ padding: 7, backgroundColor: "#fff", borderRadius: 10 }} name="medical-bag" size={15} color="#00ADBB" />
                        </TouchableOpacity>

                    </View>

                    <Image style={styles.img} source={{ uri: image }} />
                </View>

                <View style={styles.mainview}>
                    <Ionicons name="videocam-outline" size={19} color="#2B2B2B" />
                    <Text style={[styles.txtname, { fontWeight: "500" }]}> سعر مكالمة الفيديو</Text>
                </View>

                <View style={[styles.mainview, { backgroundColor: "#fff", borderRadius: 10, height: 70 }]}>
                    <Text style={{ fontSize: 22, fontWeight: '700', color: "#00ADBB", margin: 5 }}>250 رس</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={styles.txttype}>15 دقيقة</Text>
                        <AntDesign style={{ padding: 7 }} name="clockcircleo" size={21} color="#2B2B2B" />
                    </View>
                </View>

                <View style={styles.mainview}>
                    <MaterialCommunityIcons name="calendar-month-outline" size={19} color="#2B2B2B" />
                    <Text style={[styles.txtname, { fontWeight: "500" }]}>الجدول الزمني</Text>
                </View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity style={[styles.btn, { backgroundColor: item.status == true ? '#00ADBB' : '#fff' }]}>
                            <Text style={{ fontSize: 16, fontWeight: "500", color: item.status == true ? '#fff' : '#000' }}>{item.day}</Text>
                            <Text style={{ fontSize: 12, fontWeight: "400", color: item.status == true ? '#fff' : '#000' }}>{item.name}</Text>
                        </TouchableOpacity>
                    }
                />
                <View style={styles.mainview}>
                    <AntDesign name="clockcircleo" size={19} color="#2B2B2B" />
                    <Text style={[styles.txtname, { fontWeight: "500" }]}>توقيت الموعد</Text>
                </View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: "500",
                            color: item.status == true ? '#fff' : '#372378',
                            backgroundColor: item.status == true ? '#00ADBB' : '#fff',
                            padding: 10,
                            height: 40,
                            margin: 5, borderRadius: 10
                        }}>{item.date}</Text>
                    }
                />
                <View style={styles.mainview}>
                    <AntDesign name="infocirlceo" size={19} color="#2B2B2B" />
                    <Text style={[styles.txtname, { fontWeight: "500" }]}>عن الطبيب</Text>
                </View>
                <Text style={[styles.txttype, { width: '85%', alignSelf: "center" }]}>
                    قراءة نتائج التحاليل المخبرية وتفصيلها وشرحها واعطاء نصائح طبية عن حالة المريض من قبل اخصائي متخصص
                </Text>

                <View style={{ width: "100%", backgroundColor: "#fff" }}>
                    <Button style={{
                        width: "90%", height: 48, borderRadius: 12, margin: 20,
                        backgroundColor: "#00ADBB", alignSelf: "center"
                    }}
                        mode="contained" onPress={() => { navigation.navigate('bottomtaps') }}>
                        250 رس       إحجز موعدك الآن
                    </Button>
                </View>

            </ScrollView>

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    img: {
        width: 129,
        height: 148,
        borderRadius: 10,
    },
    txtname: {
        fontWeight: "700",
        color: "#2B2B2B",
        margin: 3,
        fontSize: 20,
        textAlign: "right"
    },
    txttype: {
        fontWeight: "400",
        color: "#2B2B2B80",
        margin: 3,
        fontSize: 16,
        textAlign: "right"
    },
    mainview: {
        width: "90%",
        alignSelf: "center",
        alignItems: "center",
        margin: 12,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    btn: {
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 10,
        width: 56,
        height: 72,
        margin: 5
    },
})