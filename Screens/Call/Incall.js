import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ImageBackground } from 'react-native'
import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';

export default function Incall({ route }) {

    const { name, type, image } = route.params
    const navigation = useNavigation()

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground resizeMode='cover' style={styles.bg} source={{ uri: image }}>
                <View style={{ flex: 1 }} />
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <Text style={styles.txt}>{name}</Text>
                    <Text style={[styles.txt, { backgroundColor: "#74CE7D", fontSize: 16 }]}>الوقت المتبقي 09 : 10</Text>
                </View>
                <View style={styles.main}>
                    <TouchableOpacity style={styles.btn}>
                        <Ionicons name="videocam" size={16} color="#2B2B2B" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        navigation.navigate('ratecall', {
                            name: name,
                            image: image,
                            type: type
                        })
                    }} style={[styles.btn, { width: 59, height: 59, backgroundColor: "red" }]}>
                        <MaterialIcons name="call-end" size={24} color="#F6F8FA" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn}>
                        <FontAwesome5 name="microphone-alt-slash" size={16} color="#2B2B2B" />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        justifyContent: "space-between"
    },
    main: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        marginBottom: 10,
        alignItems: "center"
    },
    btn: {
        width: 40,
        height: 40,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    txt: {
        width: '100%',
        textAlign: "center",
        color: "#fff",
        fontWeight: "900",
        fontSize: 20,
    },
})