import { View, Text, Button } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const router = useNavigation();
  return (
    <View>
      <Text>Home</Text>
      <Button title='Click me' onPress={() => router.navigate('List')}/>
    </View>
  )
}

export default Home