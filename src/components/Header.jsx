import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import {
  Entypo,
  AntDesign,
  Ionicons,
  SimpleLineIcons,
  MaterialIcons
} from 'react-native-vector-icons';

import colors from '../constants/colors';

const Header = ({ title, isLoading, light, back, style, children }) => {
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.container,
        style,
        {
          backgroundColor: light ? 'white' : '#01001F',
          borderBottomColor: light ? '#F3F3F3' : 'transparent',
          borderBottomWidth: 1
        }
      ]}>
      <TouchableOpacity
        style={[styles.touchableMenu]}
        onPress={() => {
          navigation.goBack();
        }}>
        {back && (
          <Ionicons
            name={'arrow-back'}
            size={26}
            color={light ? 'black' : 'white'}
          />
        )}
      </TouchableOpacity>
      <View
        style={[
          styles.flex,
          {
            position: 'absolute',
            top: '22.5%',
            left: '25%',
            width: '50%',
            alignItems: 'center'
          }
        ]}>
        <Text style={[styles.title, { color: light ? 'black' : 'white' }]}>
          {isLoading ? (
            'Loading...'
          ) : title ? (
            title
          ) : (
            <Text
              style={[
                globalStyles.header,
                {
                  color: light ? '#01001F' : colors.white,
                  fontSize: 22
                }
              ]}>
              Spot
              <Text
                style={{
                  fontWeight: '600',
                  color: '#1BAD8F'
                }}>
                Browser
              </Text>
            </Text>
          )}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    // color: 'white',
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '25%'
    // left: '35%'
    // right: '50%'
  },
  titleLight: {
    color: colors.lightGray
  },
  left: {
    flex: 1
  },
  menu: {
    alignItems: 'flex-start'
    // marginRight: 5
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  touchableMenu: {
    marginLeft: 15,
    // position: 'absolute',
    // left: 10,
    top: '25%'
  },
  touchableWithoutMargin: {
    paddingVertical: 5
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  container: {
    height: '7%'
  },
  containerMargin: {
    paddingHorizontal: 20
  }
});

export default Header;
