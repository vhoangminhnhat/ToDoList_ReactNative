import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  Pressable
} from "react-native";
import styles from "./styles";
import React, { useState } from "react";

export default function BodyComponent(props) {
  
  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={10}
      >
        <TouchableOpacity onPress={props.openModal}>
          <View style={styles.item}>
            <View style={styles.square}>
              <Text style={styles.number}>{props?.id}</Text>
            </View>
            <Text style={styles.content}>{props?.task}</Text>
          </View>
        </TouchableOpacity>
        {/* {props.modal === true ? (
          <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            key={props.key}
            transparent={true}
            visible={props.modal}
            onRequestClose={props.closeModal()}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>{props.description}</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                >
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
        ) : (<></>)} */}
      </KeyboardAvoidingView>
    </>
  );
}
