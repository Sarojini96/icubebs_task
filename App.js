// App.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from 'react-redux';
import demo from './components/demo';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="demo"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen 
        name="demo" 
        component={demo} 
        options={{ title: 'demo' }}
      />  
      
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    </Provider>
  );
}
