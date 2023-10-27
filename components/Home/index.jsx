import { View, Text, Button } from 'react-native'
import React from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const router = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title='Click me' onPress={() => router.navigate('List')}/>
    </View>
  )
}

export default Home