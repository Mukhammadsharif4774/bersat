import React from 'react';
import {Text, StyleSheet, ImageBackground} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {useNavigation} from '@react-navigation/native';
import BersatHeader from '../components/BersatHeader';
import BersatComponent from '../components/BersatComponent';
import Success from '../assets/reserve_success.png';

export default function () {
  const navigation = useNavigation();

  const handleNavigateHome = () => {
    navigation.navigate('DrawerNavigator', {screen: 'BersatHomeScreen'});
  };

  return (
    <ImageBackground source={Success} style={styles.container}>
      <BersatHeader />

      <Text style={styles.description}>
        Столик забронирован! {'\n'} Спасибо
      </Text>

      <BersatComponent
        text="На главную"
        style={styles.button}
        onPress={handleNavigateHome}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: COLORS.white,
  },
  button: {
    position: 'absolute',
    bottom: 50,
  },
  description: {
    paddingVertical: 15,
    textAlign: 'center',
    color: COLORS.black,
    fontFamily: FONTS.black,
    fontSize: 20,
    paddingHorizontal: 50,
    position: 'absolute',
    bottom: 150,
  },
});
