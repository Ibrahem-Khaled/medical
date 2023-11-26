import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bottomtaps from './Screens/Bottomtaps';
import Login from './Screens/authScreens/Login';
import Register from './Screens/authScreens/Register';
import Otp from './Screens/authScreens/Otp';
import Moredata from './Screens/authScreens/Moredata';
import Profiledata from './Screens/authScreens/ProfileData';
import Calllive from './Screens/Calllive';
import Edit from './Screens/Editprfile/Edit';
import Editprofile from './Screens/Editprfile/Editprofile';
import Changepassword from './Screens/Editprfile/Changepassword';
import Userpolce from './Screens/Editprfile/Userpolce';
import Contactus from './Screens/Editprfile/Contactus';
import Message from './Screens/Call/Message';
import Incall from './Screens/Call/Incall';
import Ratecall from './Screens/Call/Ratecall';
import Search from './Screens/Search';
import Reservation from './Screens/Sick/Reservation';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='login'>
        <Stack.Screen options={{ animation: "simple_push" }} name="login" component={Login} />
        <Stack.Screen options={{ animation: "simple_push" }} name="register" component={Register} />
        <Stack.Screen options={{ animation: "simple_push" }} name="otp" component={Otp} />
        <Stack.Screen options={{ animation: "simple_push" }} name="moredata" component={Moredata} />
        <Stack.Screen options={{ animation: "simple_push" }} name="profiledata" component={Profiledata} />

        <Stack.Screen options={{ animation: "simple_push" }} name="bottomtaps" component={Bottomtaps} />
        <Stack.Screen options={{ animation: "simple_push" }} name="calllive" component={Calllive} />
        <Stack.Screen options={{ animation: "simple_push" }} name="edit" component={Edit} />
        <Stack.Screen options={{ animation: "simple_push" }} name="editprofile" component={Editprofile} />
        <Stack.Screen options={{ animation: "simple_push" }} name="editpassword" component={Changepassword} />
        <Stack.Screen options={{ animation: "simple_push" }} name="userpolce" component={Userpolce} />
        <Stack.Screen options={{ animation: "simple_push" }} name="contactus" component={Contactus} />
        <Stack.Screen options={{ animation: "simple_push" }} name="message" component={Message} />
        <Stack.Screen options={{ animation: "simple_push" }} name="incall" component={Incall} />
        <Stack.Screen options={{ animation: "simple_push" }} name="ratecall" component={Ratecall} />
        <Stack.Screen options={{ animation: "simple_push" }} name="search" component={Search} />
        <Stack.Screen options={{ animation: "simple_push" }} name="reservation" component={Reservation} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
