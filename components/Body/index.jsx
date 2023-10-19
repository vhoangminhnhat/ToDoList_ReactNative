import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  Pressable,
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
                <IconOutline
                  name="edit"
                  color="#3d79d9"
                  style={{ fontSize: 22 }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={props.deleteTask}>
                <IconOutline
                  name="delete"
                  color="#990b0b"
                  style={{ fontSize: 22 }}
                />
              </TouchableOpacity>
            </View>
          </View>
      </KeyboardAvoidingView>
    </>
  );
}
