import { SafeAreaView, StyleSheet, Text, TextInput, Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../Components/Header';
import { Headercontent } from '../BottomtapScreens/Chat';
import { Button } from 'react-native-paper';
import { Feather,FontAwesome } from '@expo/vector-icons';


export default function Contactus() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <Headercontent text={'اتصل بنا'} />
            </Header>
            <Text style={styles.txt}>حدد السبب</Text>
            <TextInput
                placeholder='أكتب هنا'
                style={styles.inbt}
            />

            <Text style={styles.txt}>رسالة</Text>
            <TextInput
                placeholder='أكتب هنا'
                multiline
                style={[styles.inbt, { height: 178 }]}
            />

            <Button style={{ width: "90%", height: 48, borderRadius: 12, margin: 15, backgroundColor: "#00ADBB", alignSelf: "center" }}
                mode="contained" onPress={() => { navigation.navigate('bottomtaps') }}>
                إرسال
            </Button>

            <Image
                source={require('../../images/icons/orcall.png')}
                style={{ width: "90%", alignSelf: "center", resizeMode: "contain", height: 40 }}
            />

            <TouchableOpacity style={styles.btn}>
                <View>
                    <Text style={{ fontWeight: "700", margin: 5, fontSize: 15, lineHeight: 24, color: "#2B2B2B" }}>مركز الإتصال</Text>
                    <Text style={{ fontWeight: "500", fontSize: 15, lineHeight: 24, color: "#555555" }}>+9668005000200</Text>
                </View>
                <Feather name="phone-call" size={35} color="#00ADBB" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
                <View>
                    <Text style={{ fontWeight: "700", margin: 5, fontSize: 15, lineHeight: 24, color: "#2B2B2B" }}>واتس اب</Text>
                    <Text style={{ fontWeight: "500", fontSize: 15, lineHeight: 24, color: "#555555" }}>+9668005000200</Text>
                </View>
                <FontAwesome name="whatsapp" size={35} color="#47C272" />
            </TouchableOpacity>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    txt: {
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 19,
        margin: 5,
        textAlign: "right",
        color: "#2B2B2B",
        width: "90%",
        alignSelf: "center"
    },
    inbt: {
        fontWeight: "500",
        fontSize: 16,
        margin: 10,
        textAlign: "right",
        color: "#000",
        width: "90%",
        alignSelf: "center",
        backgroundColor: "#fff",
        borderRadius: 12,
        height: 48,
    },
    btn: {
        margin: 5,
        width: "90%",
        alignSelf: "center",
        backgroundColor: "#fff",
        borderRadius: 12,
        height: 75,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
})