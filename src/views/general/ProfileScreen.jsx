import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  Button
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import colors from '../../constants/colors';

export const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Profil" light />
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: colors.lightGray,
          borderRadius: 75,
          alignSelf: 'center',
          marginTop: 50,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <AntDesign name="user" size={78} color="black" />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingVertical: 50,
          flexDirection: 'column',
          justifyContent: 'space-around'
        }}>
        <Text>Nazwa uzytkownika: </Text>
        <Text>Imie i nazwisko: </Text>
        <Text>Status: </Text>
        <Text>Role: </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ProfileScreen;
