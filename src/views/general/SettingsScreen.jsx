import React, { useState } from 'react';
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
import Switch from 'expo-dark-mode-switch';

export const SettingsScreen = () => {
  const [value, setValue] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Ustawienia" light />
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 20,
          paddingVertical: 20
        }}>
        <Text style={{ fontSize: 22, marginRight: 30 }}>Motyw: </Text>
        <Switch value={value} onChange={(value) => setValue(value)} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default SettingsScreen;
