import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import FullLogo from 'components/FullLogo'
import NextButton from 'components/NextButton'
import { responsiveHeight} from "react-native-responsive-dimensions";
import { ThemeContext } from 'ThemeProvider';

const topHalfHeight = responsiveHeight(50);

const WelcomeScreen = ({ navigation }) => {
  const toMainMenu = () => {
    navigation.push( "MainMenu" )
  }

  const { theme } = React.useContext(ThemeContext);
  const styles = resolveStyles(theme);

  return (
    <ScrollView>
      <View style={styles.container}>

        <View style={styles.topHalf}>
          <FullLogo/>
        </View>

        <NextButton onPress={toMainMenu}/>

        <View style={{padding: 32, marginTop: 5}}>
          <Text style={styles.paragraph}>👋 Вітаємо вас, любі!</Text>
          <Text style={styles.paragraph}>Промінь - це ваш кишеньковий довідник психологічної допомоги у кризових ситуаціях.</Text>
          <Text style={styles.paragraph}>Тут ви можете знайти поради та перевірені техніки як покращити свій психологічний стан та стан людей навколо вас.</Text>
          <Text style={styles.paragraph}>Тримаймося.</Text>

        </View>

      </View>
    </ScrollView>
)}

const resolveStyles = (theme) => {
  const backgroundColor = theme === 'dark' ? '#18203A' : '#F3F3F3';
  const color = theme === 'dark' ? '#FFF' : '#000';

  return StyleSheet.create({
    topHalf: {
      height: topHalfHeight,
      backgroundColor: '#5177ff'
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor
    },
    paragraph: {
      color,
      marginTop: 15,
      marginBottom: 15,
      textAlign: 'left',
      fontFamily: 'Ubuntu',
      fontStyle: 'normal',
      fontSize: 17,
      lineHeight: 24
    }
  });
};

export default WelcomeScreen