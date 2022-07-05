// packages
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Ionicons,
  Feather,
  AntDesign,
  MaterialCommunityIcons,
  Entypo
} from '@expo/vector-icons';
import colors from '../constants/colors';

import MainScreen from '../views/general/MainScreen';
import BasketScreen from '../views/general/BasketScreen';
import NotificationsScreen from '../views/general/NotificationsScreen';
import ProfileScreen from '../views/general/ProfileScreen';
import { StatusBar } from 'expo-status-bar';
import SettingsScreen from '../views/general/SettingsScreen';

const config = {
  animation: 'timing',
  config: {
    duration: 0
  }
};

const BottomTabNavigator = createBottomTabNavigator();
export const BottomTabsNav = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <BottomTabNavigator.Navigator
        initialRouteName="Home"
        screenOptions={{
          // tabBarStyle: {
          //   backgroundColor: colors.primary
          // },
          tabBarLabelPosition: 'below-icon',
          // tabBarItemStyle: {
          //   paddingTop: 5
          // },
          // tabBarInactiveTintColor: colors.textBlack,
          // tabBarActiveTintColor: colors.red,
          headerShown: false
        }}>
        <BottomTabNavigator.Screen
          name={'Home'}
          component={MainNavigator}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={size} color={color} />
            )
          }}
        />
        <BottomTabNavigator.Screen
          name={'Basket'}
          component={BasketScreen}
          options={{
            tabBarLabel: 'Koszyk',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="basket-outline" size={size} color={color} />
            )
          }}
        />
        <BottomTabNavigator.Screen
          name={'Profile'}
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profil',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="user" size={size} color={color} />
            )
          }}
        />
        <BottomTabNavigator.Screen
          name={'Settings'}
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Ustawienia',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings-sharp" size={size} color={color} />
            )
          }}
        />
      </BottomTabNavigator.Navigator>
    </SafeAreaView>
  );
};

const MainStackNavigator = createStackNavigator();
export const MainNavigator = () => {
  return (
    <MainStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
        transitionSpec: { open: config, close: config }
      }}>
      <MainStackNavigator.Screen name={'Homescreen'} component={MainScreen} />
      <MainStackNavigator.Screen
        name={'Products'}
        component={ProductsNavigator}
      />
      <MainStackNavigator.Screen
        name={'Notifications screen'}
        component={NotificationsScreen}
      />
    </MainStackNavigator.Navigator>
  );
};

const StartupStackNavigator = createStackNavigator();
export const StartupNavigator = () => {
  return (
    <StartupStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
        transitionSpec: { open: config, close: config }
      }}>
      <StartupStackNavigator.Screen
        name={'Login screen'}
        component={LoginScreen}
      />
      <StartupStackNavigator.Screen
        name={'Register screen'}
        component={RegisterScreen}
      />
      <StartupStackNavigator.Screen
        name={'Forgot password'}
        component={ForgotPasswordScreen}
      />
    </StartupStackNavigator.Navigator>
  );
};

const ProductsStackNavigator = createStackNavigator();
export const ProductsNavigator = () => {
  return (
    <ProductsStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
        transitionSpec: { open: config, close: config }
      }}>
      <ProductsStackNavigator.Screen
        name={'Products List'}
        component={ProductsListScreen}
      />
      <ProductsStackNavigator.Screen
        name={'Product information'}
        component={ProductScreen}
      />
    </ProductsStackNavigator.Navigator>
  );
};

const UserStackNavigator = createStackNavigator();
export const UserNavigator = () => {
  return (
    <UserStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
        transitionSpec: { open: config, close: config }
      }}>
      <UserStackNavigator.Screen name={'Profile'} component={ProfileScreen} />
      {/* <UserStackNavigator.Screen name={'Edit'} component={EditScreen} /> */}
    </UserStackNavigator.Navigator>
  );
};

const SettingsStackNavigator = createStackNavigator();
export const SettingsNavigator = () => {
  return (
    <SettingsStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
        transitionSpec: { open: config, close: config }
      }}>
      <SettingsStackNavigator.Screen
        name={'Settings'}
        component={SettingsScreen}
      />
    </SettingsStackNavigator.Navigator>
  );
};
