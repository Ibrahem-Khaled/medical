import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import { Headercontent } from './BottomtapScreens/Chat'
import { FontAwesome, AntDesign } from '@expo/vector-icons';

let idd = 1
const data = [
    {
        id: idd++,
        title: "الطب العام وطب الأسرة",
        description: 'ارتفاع ضغط الدم والكوليسترول ومرض السكري وحالات فقر الدم ومشاكل الربو والتهاب الجهاز التنفسي ومشاكل الغدة الدرقية، تشخيص أولي .ووقاية من مختلف الأمراض الشائعة',
        image: require(`../images/icons/list/1.png`),
    },
    {
        id: idd++,
        title: "الأطفال",
        description: 'التشخيص والتعامل، مشاكل الجهاز التنفسي وأمراض الجهاز الهضمي والأمراض الجلدية ومشاكل الغدد وسكري الأطفال واضطرابات النمو وأمراض القلب وحديثي الولادة عرض المزيد...',
        image: require(`../images/icons/list/2.png`),
    },
    {
        id: idd++,
        title: "الطب النفسي",
        description: 'الطب النفسي هو التخصص الطبي المخصص لتشخيص الاضطرابات النفسية والوقاية منها وعلاجها، يتضمن ذلك العديد من حالات سوء التكيف المتعلقة بالمزاج والسلوك والإدراك والتصورات.',
        image: require(`../images/icons/list/3.png`),
    },
    {
        id: idd++,
        title: "شرح نتائج التحاليل المخبرية",
        description: 'قراءة نتائج التحاليل المخبرية وتفصيلها وشرحها واعطاء نصائح طبية عن حالة المريض من قبل اخصائي متخصص',
        image: require(`../images/icons/list/4.png`),
    },
    {
        id: idd++,
        title: "الباطنة",
        description: 'يتعامل مع الأمراض المزمنة. السكري ، ارتفاع ضغط الدم والكوليسترول . متابعة أمراض كبار السن ، التقييم الصحي الدوري ، أمراض الكلى ، الأمراض المعدية ، الروماتيزم ، أمراض عرض المزيد...',
        image: require(`../images/icons/list/5.png`),
    },
]



export default function Calllive() {
    return (
        <SafeAreaView style={styles.main}>
            <Header>
                <Headercontent text={'العيادات'} />
            </Header>

            <View style={styles.banner}>
                <View style={{ margin: 5 }}>
                    <Text style={[styles.btntitel,]}>الإتصال المباشر</Text>
                    <Text style={[styles.btntitel, { fontSize: 11, fontWeight: "500" }]}>استشارات فورية  بطب الطوارء عن بعد بدون موعد</Text>
                </View>
                <View style={[styles.camview, { backgroundColor: "#fff" }]}>
                    <FontAwesome name="video-camera" size={27} color="#643FDB" />
                </View>
            </View>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <TouchableOpacity style={styles.btn}>
                        <View style={{ width: "9%", margin: 3 }}>
                            <AntDesign name="leftcircleo" size={24} color="#2B2B2B" />
                        </View>
                        <View style={{ width: "70%", height: 100, justifyContent: "space-evenly" }}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.subtitle}>{item.description}</Text>
                        </View>
                        <View style={{
                            width: 48, height: 48, backgroundColor: "#F6F8FA",
                            borderRadius: 96, justifyContent: "center", alignItems: "center", margin: 5
                        }}>
                            <Image source={item.image} style={styles.img} />
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
    banner: {
        width: "100%",
        backgroundColor: "#643FDB",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    camview: {
        width: 56,
        height: 56,
        borderRadius: 56,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F6F8FA",
        margin: 5,
    },
    btntitel: {
        fontWeight: "700",
        fontSize: 14,
        lineHeight: 24,
        textAlign: "right",
        color: "#fff"
    },
    title: {
        fontWeight: "700",
        fontSize: 13,
        lineHeight: 16,
        textAlign: "right",
        color: "#2B2B2B"
    },
    subtitle: {
        fontWeight: "400",
        fontSize: 8,
        lineHeight: 11,
        textAlign: "right",
        color: "#717171",
    },
    btn: {
        width: "92%", height: 100,
        backgroundColor: "#fff",
        borderRadius: 12,
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 8
    },
    img: {
        width: 32,
        height: 32,
    },
})