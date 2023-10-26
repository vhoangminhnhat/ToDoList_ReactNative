import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainComponent from '../components';
import Home from '../components/Home';

//Create Navigators
const Routes = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Routes.Navigator>
        <Routes.Screen name='Home' component={Home} options={() => ({
            headerShown: false
        })}/>
        <Routes.Screen name='List' component={MainComponent} options={() => ({
            headerShown: false
        })}/>
    </Routes.Navigator>
  )
}

export default StackNavigation