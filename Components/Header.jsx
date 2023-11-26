import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Header({ children, style }) {
    const navigation = useNavigation()
    return (
        <View style={style == null ? styles.main : style}>
            {children == null ?
                <>
                    <Image
                        source={{ uri: "data:image/png;base64,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" }}
                        style={[styles.icon, { borderRadius: 50 * 2 }]} />
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Image
                            source={require('../images/icons/arrowBack.png')}
                            style={styles.icon} />
                    </TouchableOpacity>
                </>
                :
                children
            }
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: 55,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    icon: {
        width: 44,
        height: 44,
        resizeMode: "contain",
        margin: 5
    },
})