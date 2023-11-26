import { SafeAreaView, } from 'react-native'
import React from 'react'
import Header from '../../Components/Header';
import { Headercontent } from '../BottomtapScreens/Chat';
import { Text } from 'react-native-paper';


export default function Userpolce() {

    return (
        <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
            <Header>
                <Headercontent text={'سياسة  خاصة'} />
            </Header>
            <Text style={{ color: "#2B2B2B", margin: 10 }} variant="titleMedium">للمتابعة ، يرجى قبول شروط الخدمة الخاصة بنا</Text>

            <Text style={{ color: "#717171", margin: 1,textAlign:"right" }} variant="titleSmall">إذا لم تكن تبلغ من العمر ما يكفي لإدارة حسابك الخاص على Google ، فأنت بحاجة إلى إذن من والديك أو الوصي القانوني لاستخدام واحد. نطلب من والديك أو الوصي القانوني قراءة هذه الشروط معك.</Text>
            <Text style={{ color: "#717171", margin: 1,textAlign:"right" }} variant="titleSmall">إذا كنت والدًا أو وصيًا قانونيًا وقمت بمنح الإذن لطفلك لاستخدام خدماتنا ، فإن هذه الشروط تنطبق عليك. أنت مسؤول عن نشاط طفلك في خدماتنا.</Text>
            <Text style={{ color: "#717171", marginBottom: 10,textAlign:"right" }} variant="titleSmall">يرجى ملاحظة أن بعض خدمات Google قد يكون لها متطلبات عمرية إضافية موضحة في الشروط والسياسات الإضافية الخاصة بالخدمة.</Text>

            <Text style={{ color: "#717171", margin: 1,textAlign:"right" }} variant="titleSmall">إذا لم تكن تبلغ من العمر ما يكفي لإدارة حسابك الخاص على Google ، فأنت بحاجة إلى إذن من والديك أو الوصي القانوني لاستخدام واحد. نطلب من والديك أو الوصي القانوني قراءة هذه الشروط معك.</Text>
            <Text style={{ color: "#717171", margin: 1,textAlign:"right" }} variant="titleSmall">إذا كنت والدًا أو وصيًا قانونيًا وقمت بمنح الإذن لطفلك لاستخدام خدماتنا ، فإن هذه الشروط تنطبق عليك. أنت مسؤول عن نشاط طفلك في خدماتنا.</Text>
            <Text style={{ color: "#717171", marginBottom: 10,textAlign:"right" }} variant="titleSmall">يرجى ملاحظة أن بعض خدمات Google قد يكون لها متطلبات عمرية إضافية موضحة في الشروط والسياسات الإضافية الخاصة بالخدمة.</Text>

        </SafeAreaView>
    )
}
