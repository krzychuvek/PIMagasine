import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Header from '../../components/Header';
import colors from '../../constants/colors';

const MainScreen = () => {
  const DATA = [
    {
      id: 1,
      name: 'Karta graficzna',
      manufacturer: 'nVidia',
      model: 'RTX3060'
    },
    {
      id: 2,
      name: 'Procesor',
      manufacturer: 'Ryzen',
      model: '5 5600X'
    },
    {
      id: 3,
      name: 'Zasilacz',
      manufacturer: 'SilentiumPC',
      model: 'Supremo L2'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Main screen" light />
      <KeyboardAvoidingView style={styles.container}>
        <View style={[styles.container]}>
          <Text
            style={{
              fontSize: 22,
              paddingLeft: 20,
              paddingTop: 20,
              textAlign: 'center'
            }}>
            Ostatnio zamawiane
          </Text>
          <View
            style={{
              width: '90%',
              height: '30%',
              backgroundColor: 'white',
              marginHorizontal: '5%',
              borderRadius: 15,
              marginTop: 15,
              paddingHorizontal: 20,
              paddingVertical: 20
            }}>
            <FlatList
              data={DATA}
              ListEmptyComponent={() => (
                <View style={{}}>
                  <Text style={{ color: 'black' }}>Lista jest pusta</Text>
                </View>
              )}
              renderItem={(item) => (
                <TouchableOpacity
                  style={{
                    width: 150,
                    backgroundColor: colors.gray,
                    borderRadius: 15,
                    paddingHorizontal: 10,
                    // paddingTop: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      textTransform: 'uppercase',
                      fontSize: 18
                    }}>
                    {item.item.name}
                  </Text>
                  <Text style={{ color: 'white', fontSize: 14, marginTop: 10 }}>
                    {`${item.item.manufacturer} ${item.item.model}`}
                  </Text>
                  {/* <Text style={{ color: 'white' }}>{item.item.model}</Text> */}
                </TouchableOpacity>
              )}
              keyExtractor={(i) => i?.id?.toString()}
              horizontal={true}
              ItemSeparatorComponent={() => (
                <View style={{ width: 10, height: '100%' }} />
              )}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
    // paddingHorizontal: 5
  }
});
