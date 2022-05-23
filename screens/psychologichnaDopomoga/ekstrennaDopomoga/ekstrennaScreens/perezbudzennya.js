import * as React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

import Bullet from '../../../../components/Bullet';
import Header from '../../../../components/Header';
import ListItem from '../../../../components/ListItem'
import styles from '../../../../styles'

import head from '../../../../assets/images/head.png';

export default function Perezbudzennya({ navigation }) {
    const navigateTo = ( destination ) => {
        navigation.push( destination )
    }
    
    return (
        <View>
            <Header backButton navigation={navigation} />
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.header}>Перезбудження </Text>

                    <Text style={styles.header2}>В цій ситуації: </Text>

                    <Bullet symbol="1." style={styles.paragraph}>Використовуйте прийом “захват”: станьте позаду постраждалого,
                        просуньте руки під пахви постраждалого, притисніть його до себе і злегка перекиньте його на себе.
                    </Bullet>

                    <Bullet symbol="2." style={styles.paragraph}>Ізолюйте постраждалого від оточуючих. </Bullet>

                    <Bullet symbol="3." style={styles.paragraph}>Массуйте “позитивні точки” на чолі постраждалого. Спокійним голосом
                        обговорюйте почуття які він відчуває. (“Тобі хочеться щось зробити щоб це припинилось?” Ти хочеш
                        втікти, сховатись від того що відбувається?” ).
                    </Bullet>

                    <View style={{justifyContent: 'center', alignItems: 'center', margin: '1em'}}>
                        <Image source={head} style={{ width: 286, height: 352 }} />
                    </View>

                    <Bullet symbol="4." style={styles.paragraph}>Не сперечайтесь із постраждалим, нічого не питайте, в розмові
                        уникайте частки “не” якщо це стосується небажаних дій (наприклад: “Не біжи”, “Не розмахуй руками”,
                        “Не кричи”). </Bullet>

                    <Bullet symbol="5." style={styles.paragraph}>Пам’ятайте що постраждалий може завдати шкоди собі та
                        оточуючим.</Bullet>

                    <Text style={styles.header2}>Перезбудження зазвичай триває недовго і може перейти у:</Text>

                    <ListItem padded roundTop title="Нервове тремтіння" onPress={()=>navigateTo("NervoveTremtinnya")}/>
                    <ListItem padded title="Плач" onPress={()=>navigateTo("Plach")}/>
                    <ListItem padded roundBottom title="Aгресивну поведінку" onPress={()=>navigateTo("Agresiya")}/>
                    
                    <View style={styles.spacer}/>
                </View>
            </ScrollView>
        </View>
    )
}
