import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Keyboard
} from "react-native";
import styles from "./styles";
import React, { useState } from "react";
import _, { isEmpty } from 'lodash';

export default function FooterComponent(props) {
  const [inputValue, setInputValue] = useState("");

  const addToList = async () => {
    if(isEmpty(inputValue)){
      alert(`You haven't typed anything yet !`);
      return false
    }
    if(!isEmpty(inputValue)){
      props.addTask(inputValue);
      setInputValue('');
      Keyboard.dismiss();
    }
  };

  return (
    //Component <KeyboardAvoidingView/> giúp cho các trường trong component này khi xuất hiện keyboard từ thiết bị di dộng sẽ không bị keyboard che mất
    <KeyboardAvoidingView
      style={styles.addList}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={10}
    >
      <TextInput
        value={inputValue}
        style={styles.input}
        placeholder="Nhập thêm vào danh sách"
        autoCapitalize="sentences"
        clearButtonMode="always"
        onChangeText={(value) => setInputValue(value)}
      />
      <TouchableOpacity onPress={addToList}>
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
