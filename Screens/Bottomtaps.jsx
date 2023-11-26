import React from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Image,
    View,
} from 'react-native';
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Chat from './BottomtapScreens/Chat';
import Home from './BottomtapScreens/Home';
import Noti from './BottomtapScreens/Noti';
import Avilabledoc from './BottomtapScreens/Avilabledoc';


export default function Bottomtaps() {
    const _renderIcon = (routeName, selectedTab) => {
        let icon = '';

        switch (routeName) {
            case 'home':
                icon = require('../images/icons/home.png');
                break;
            case 'calender':
                icon = require('../images/icons/calender.png');
                break;
            case 'chat':
                icon = require('../images/icons/video.png');
                break;
            case 'bell':
                icon = require('../images/icons/bell.png');
                break;
        }

        return (
            <Image source={icon} style={{
                width: 25,
                height: 25,
                resizeMode: "contain",
                overflow: "hidden",
            }}
            // color={routeName === selectedTab ? 'black' : 'gray'} 
            />);
    };
    const renderTabBar = ({ routeName, selectedTab, navigate }) => {
        return (
            <TouchableOpacity
                onPress={() => navigate(routeName)}
                style={styles.tabbarItem}
            >
                {_renderIcon(routeName, selectedTab)}
            </TouchableOpacity>
        );
    };

    return (
        <CurvedBottomBarExpo.Navigator
            type="DOWN"
            style={styles.bottomBar}
            shadowStyle={styles.shawdow}
            height={60}
            circleWidth={100}
            bgColor="white"
            initialRouteName="home"
            borderTopLeftRight
            screenOptions={{ headerShown: false }}
            renderCircle={({ selectedTab, navigate }) => (
                <TouchableOpacity onPress={() => { alert('s') }}>
                    <LinearGradient
                        start={{ x: 1, y: 0.5 }}
                        colors={['#C2F9F5', '#50D5D0', '#02C9C4']}
                        style={styles.btnCircleUp}>
                        <Image
                            style={{ width: 23, height: 23 }}
                            source={require('../images/icons/heart.png')} />
                    </LinearGradient>
                </TouchableOpacity>
            )}
            tabBar={renderTabBar}
        >
            <CurvedBottomBarExpo.Screen
                name="calender"
                component={() => <Avilabledoc />}
                position="RIGHT"
            />
            <CurvedBottomBarExpo.Screen
                name="home"
                component={() => <Home />}
                position="RIGHT"
            />
            <CurvedBottomBarExpo.Screen
                name="bell"
                component={() => <Noti />}
                position="LEFT"
            />
            <CurvedBottomBarExpo.Screen
                name="chat"
                position="LEFT"
                component={() => <Chat />}
            />
        </CurvedBottomBarExpo.Navigator>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    shawdow: {
        shadowColor: '#DDDDDD',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
    },
    btnCircleUp: {
        width: 60,
        height: 60,
        borderRadius: 50 * 2,
        justifyContent: "center",
        alignItems: "center",
        bottom: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 1,
    },
    tabbarItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 30,
        height: 30,
    },
    screen1: {
        flex: 1,
        backgroundColor: '#BFEFFF',
    },
    screen2: {
        flex: 1,
        backgroundColor: '#FFEBCD',
    },
});