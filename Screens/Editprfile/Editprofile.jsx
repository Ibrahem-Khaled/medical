import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../Components/Header';
import { Headercontent } from '../BottomtapScreens/Chat';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Button, RadioButton } from 'react-native-paper';
import Phoneinbut from '../../Components/Phoneinbut';

export default function Editprofile() {
    const navigation = useNavigation()
    const [checked, setChecked] = React.useState('male');

    return (
        <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
            <Header>
                <Headercontent text={'تعديل الملف الشخصي'} />
            </Header>

            <Image style={styles.img} source={{ uri: "https://images.unsplash.com/photo-1682686581797-21ec383ead02?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D" }} />

            <TextInput
                contentStyle={{ backgroundColor: "#fff" }}
                style={{ width: "90%", margin: 15, }}
                outlineStyle={{ borderWidth: 0 }}
                label="الاسم الكامل"
                mode='outlined'
            />
            <TextInput
                contentStyle={{ backgroundColor: "#fff" }}
                style={{ width: "90%", margin: 15, }}
                outlineStyle={{ borderWidth: 0 }}
                label="البريد الإلكتروني"
                mode='outlined'
            />
            <TextInput
                contentStyle={{ backgroundColor: "#fff" }}
                style={{ width: "90%", margin: 15, }}
                outlineStyle={{ borderWidth: 0 }}
                label="تاريخ الميلاد"
                mode='outlined'
            />

            <Phoneinbut />

            <View style={{ alignSelf: "flex-end", margin: 10, alignItems: "center" }} >
                <Text style={[styles.txt]}>نوع الجنس</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.txtgender}>ذكر</Text>
                    <RadioButton
                        value="male"
                        color='#00ADBB'
                        status={checked === 'male' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('male')}
                    />

                    <Text style={styles.txtgender}>أنثى</Text>
                    <RadioButton
                        value="female"
                        color='#00ADBB'
                        status={checked === 'female' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('female')}
                    />
                </View>
            </View>

            <TextInput
                contentStyle={{ backgroundColor: "#fff" }}
                style={{ width: "90%", margin: 15, }}
                outlineStyle={{ borderWidth: 0 }}
                label="رقم الاقامة"
                mode='outlined'
            />

            <Button style={{ width: "90%", height: 48, borderRadius: 12, margin: 25, backgroundColor: "#00ADBB" }}
                mode="contained" onPress={() => { navigation.navigate('bottomtaps') }}>
                حفظ
            </Button>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 100, height: 100,
        borderRadius: 100
    },
    txt: {
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 20,
        color: "#2B2B2B",
        margin: 5
    },
    txtgender: {
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 24,
        color: "#717171",
        margin: 5
    },
})