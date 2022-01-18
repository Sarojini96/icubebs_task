// App.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from 'react-redux';
import Login from './components/login';
import Register from './components/registration';
import Profile from './components/profile';
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
      <Stack.Screen 
        name="register" 
        component={Register} 
        options={{ title: 'Register' }}
      />       
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'Login'},
          {headerLeft: null} 
        }
      />
      <Stack.Screen 
       name="Profile" 
       component={Profile} 
       options={
         { title: 'Profile' },
         {headerLeft: null} 
       }
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