import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Powiadomienia</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default NotificationsScreen;
