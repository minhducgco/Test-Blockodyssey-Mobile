/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
/*-----------------------------   News    -------------------------------------------- */
import ListScreen from '../pages/news/list';
// import DetailScreen from '../pages/news/details';

function Container() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ListScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="ListScreen" component={ListScreen} />
        {/* <Stack.Screen name="DetailScreen" component={DetailScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function NoFooterStack() {
  return <Container />;
}
