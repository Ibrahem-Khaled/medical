import { StyleSheet, Text, View, Image, SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import { Headercontent } from '../BottomtapScreens/Chat'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function Ratecall({ route }) {

    const { name, type, image } = route.params
    const navigation = useNavigation()

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <Headercontent text={'تقييم  مكالمة الفيديو'} />
            </Header>
            <View style={{ alignSelf: "center",alignItems:"center" }}>
                <Image style={styles.img} source={{ uri: image }} />
                <Text style={{ fontSize: 16, fontWeight: "400", color: '#2B2B2B99', margin: 5, textAlign: "center" }}>{type}</Text>
                <Text style={styles.title}>{name}</Text>
            </View>
            <TextInput
                style={styles.inbt}
                placeholder='كتابة ملاحظاتك'
                multiline
            />
            <Image style={{ width: "90%", alignSelf: "center", height: 100 }} resizeMode='contain' source={require('../../images/icons/Stars.png')} />
            <Button style={{ width: "90%", height: 48, borderRadius: 12, margin: 5, backgroundColor: "#00ADBB", alignSelf: "center" }}
                mode="contained" onPress={() => { navigation.navigate('bottomtaps') }}>
                إرسال
            </Button>
            <Text style={{ fontSize: 16, fontWeight: "400", color: '#2B2B2B99', margin: 15, textAlign: "center" }}>تقييمك يهمنا لتحسين خدمة التطبيق العرب كير</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 104,
        height: 104,
        borderRadius: 104,
        margin: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        color: '#2B2B2B',
        margin: 5,
        textAlign: "center"
    },
    inbt: {
        width: "90%",
        height: 160,
        backgroundColor: "#fff",
        alignSelf: "center",
        borderRadius: 10,
        margin: 10
    },
})