import { StyleSheet, Text, View, FlatList, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import { Headercontent } from './Chat'
import { data } from './Chat'
import { TouchableOpacity } from 'react-native'
import { AntDesign, MaterialCommunityIcons, FontAwesome, Foundation } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'


export default function Avilabledoc() {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <Headercontent search={true} text={'الأطباء المتوفرون'} />
            </Header>
            <FlatList
                data={data}
                key={(item) => item.id}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('reservation', {
                            name: item.name,
                            image: item.image,
                            type: item.type
                        })
                    }} style={styles.btn}>
                        <View style={{ alignItems: "flex-end", width: "60%", justifyContent: "center" }}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.type}>{item.type}</Text>

                            <View style={{ flexDirection: "row", width: '100%' }}>
                                <View style={[styles.subview, { backgroundColor: "#F6F8FA", borderLeftWidth: 0, borderRadius: 10, width: '55%' }]}>
                                    <Text style={{ fontWeight: '700', color: "#00ADBB", fontSize: 12 }}>25SAR</Text>
                                    <Text style={styles.type}>دق15</Text>
                                    <Foundation name="clock" size={9} color="#2B2B2B" />
                                    <FontAwesome name="video-camera" size={12} color="#643FDB" />
                                </View>
                                <View style={styles.subview}>
                                    <Text style={styles.type}>+10</Text>
                                    <MaterialCommunityIcons name="medical-bag" size={15} color="#00ADBB" />
                                </View>
                                <View style={styles.subview}>
                                    <Text style={styles.type}>5.0</Text>
                                    <AntDesign name="star" size={12} color="#F7BA28" />
                                </View>
                            </View>

                        </View>

                        <View style={{ flexDirection: "row", }}>
                            <Image style={styles.img} source={{ uri: item.image }} />
                            <View style={{
                                width: 12,
                                height: 12,
                                borderRadius: 12,
                                backgroundColor: "#47C272",
                                right: 15,
                                top: 15,
                                borderWidth: 1.5, borderColor: '#fff'
                            }} />
                        </View>
                    </TouchableOpacity>
                }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#fff",
        borderRadius: 10,
        margin: 10,
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "92%",
        height: 125,
        alignItems: "center"
    },
    img: {
        width: 93,
        height: 93,
        borderRadius: 93,
    },
    name: {
        fontSize: 16,
        color: '#2B2B2B',
        fontWeight: "600",
        textAlign: "right",
        margin: 2,
    },
    type: {
        fontSize: 14,
        color: '#717171',
        fontWeight: "400",
        textAlign: "right",
        margin: 2
    },
    subview: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        borderLeftWidth: .5,
        borderColor: "#717171",
        margin: 5
    },
})