import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { ThemeContext } from 'ThemeProvider';
import Header from 'components/Header';
import ListItem from "components/ListItem";

var navigateAway = () => {console.log("navigation")}

export default function EkstrennaDopomoga({ navigation }) {

    const { theme } = React.useContext(ThemeContext);
    const styles = resolveLocalStyles(theme);

    return (
        <View>
            <Header backButton navigation={navigation} />
            <ScrollView>
                <View style={styles.container}>
                    <View style={{padding: 20}}>
                        
                        <Text style={styles.title}>Психологічна допомога:</Text>

                        <ListItem roundTop title="Страх" onPress={()=>navigation.push("Strah")}/>
                        <ListItem title="Істерика" onPress={()=>navigation.push("Isteryka")}/>
                        <ListItem title="Плач" onPress={()=>navigation.push("Plach")}/>
                        <ListItem title="Ступор" onPress={()=>navigation.push("Stupor")}/>
                        <ListItem title="Нервове тремтіння" onPress={()=>navigation.push("NervoveTremtinnya")}/>
                        <ListItem title="Агресія" onPress={()=>navigation.push("Agresiya")}/>
                        <ListItem title="Марення і галюцинації" onPress={()=>navigation.push("Marennya")}/>
                        <ListItem roundBottom title="Перезбудження" onPress={()=>navigation.push("Perezbudzennya")}/>
                    </View>
                </View>
            </ScrollView>
        </View>
)};

const resolveLocalStyles = theme => {
    const backgroundColor = theme === 'dark' ? '#18203A' : '#F3F3F3';
    const color = theme === 'dark' ? '#848EB0' : '#666';
    return StyleSheet.create({
        container: {
            paddingTop: 110,
            flex: 1,
            justifyContent: 'center',
            backgroundColor
        },
        title: {
            marginTop:32,
            marginBottom:16,
            fontFamily: 'Ubuntu',
            fontSize: 18,
            lineHeight: 21,
            textAlign: 'left',
            color
        }
    })
};
