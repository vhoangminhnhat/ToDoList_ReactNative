import { Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import styles from "./styles";
import React, { useState } from "react";

export default function FooterComponent() {
  return (
    <View style={styles.addList}>
      <TextInput style={styles.input} placeholder="Nhập thêm vào danh sách" />
      <TouchableOpacity>
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
