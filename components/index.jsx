import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BodyComponent from './Body'
import FooterComponent from './Footer'

export default function MainComponent() {
  return (
    <View style={styles.container}>
        <BodyComponent/>
        <FooterComponent/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5c293'
    }
})