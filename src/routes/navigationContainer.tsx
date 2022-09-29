import React from 'react';
import {MainRoute} from './navigation';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const MainNavigator = () => {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator>
        {MainRoute.map((item, index) => {
          return (
            <Stack.Screen
              key={index.toString()}
              name={item.name}
              component={item.component}
              options={item.options}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
