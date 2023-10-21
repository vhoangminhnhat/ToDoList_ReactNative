import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  Pressable,
  Image,
} from "react-native";
import styles from "./styles";
import React, { useState } from "react";
import { IconOutline } from "@ant-design/icons-react-native";

export default function BodyComponent(props) {
  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={10}
      >
        <View style={styles.item}>
          <View style={styles.square}>
            <Text style={styles.number}>{props?.id}</Text>
          </View>
          <Text style={styles.content}>{props?.task}</Text>
          <View style={styles.actions}>
            <TouchableOpacity onPress={props.openModal}>
              <Image source={require('../../assets/edit.png')} style={styles.editImage} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity onPress={props.deleteTask}>
              <Image source={require('../../assets/delete.png')} style={styles.deleteImage} resizeMode="contain"/>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
