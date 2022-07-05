import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  Button
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import colors from '../../constants/colors';

export const BasketScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Koszyk" light />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '10%'
        }}>
        <Text style={{ fontSize: 24 }}>Produkty w koszyku: </Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <View
          style={{
            backgroundColor: 'white',
            width: '90%',
            height: '85%',
            borderRadius: 15
          }}></View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-evenly',
          position: 'absolute',
          bottom: 20
        }}>
        <TouchableOpacity
          style={{
            width: 180,
            height: 50,
            backgroundColor: colors.lightGray,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Text style={{ color: 'green', fontSize: 18 }}>Zapisz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 180,
            height: 50,
            backgroundColor: colors.lightGray,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Text style={{ fontSize: 18 }}>Złóż zamówienie</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default BasketScreen;
