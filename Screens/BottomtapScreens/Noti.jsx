import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import { Headercontent } from './Chat'


export default function Noti() {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: "center", backgroundColor: "#fff" }}>
            <Header>
                <Headercontent text={'إشعارات'} />
            </Header>
            <View style={styles.subview}>
                <Image
                    style={styles.bell}
                    source={require('../../images/icons/nonebell.png')} />
                <Text style={{ fontWeight: "500", fontSize: 26, lineHeight: 35, textAlign: "center" }}>ليس لديك أية إشعارات</Text>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    subview: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    bell: {
        width: 246,
        height: 246
    },
})