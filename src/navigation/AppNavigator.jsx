import React from 'react';
import { BottomTabsNav } from './StackNavigator';
import { MainNavigator } from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTabsNav />
    </NavigationContainer>
  );
};

export default AppNavigator;
