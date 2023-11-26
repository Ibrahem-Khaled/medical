import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../Components/Header';
import { Headercontent } from '../BottomtapScreens/Chat';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Button } from 'react-native-paper';



export default function Changepassword() {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
            <Header>
                <Headercontent text={'تغيير كلمة المرور'} />
            </Header>

            <TextInput
                contentStyle={{ backgroundColor: "#fff" }}
                style={{ width: "90%", margin: 15, }}
                outlineStyle={{ borderWidth: 0 }}
                label="كلمة المرور القديمة"
                mode='outlined'
                secureTextEntry
                right={<TextInput.Icon icon="lock" />}
            />
            <TextInput
                contentStyle={{ backgroundColor: "#fff" }}
                style={{ width: "90%", margin: 15, }}
                outlineStyle={{ borderWidth: 0 }}
                label="كلمة المرور الجديدة"
                mode='outlined'
                secureTextEntry
                right={<TextInput.Icon icon="lock" />}
            />
            <TextInput
                contentStyle={{ backgroundColor: "#fff" }}
                style={{ width: "90%", margin: 15, }}
                outlineStyle={{ borderWidth: 0 }}
                label="كلمة المرور الجديدة"
                mode='outlined'
                secureTextEntry
                right={<TextInput.Icon icon="lock" />}
            />


            <Button style={{ width: "90%", height: 48, borderRadius: 12, margin: 100, backgroundColor: "#00ADBB" }}
                mode="contained" onPress={() => { navigation.navigate('bottomtaps') }}>
                حفظ
            </Button>

        </SafeAreaView>
    )
}