import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./styles";
import React from "react";

export default function BodyComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>To Do List</Text>
      <ScrollView>
        <TouchableOpacity>
          <View style={styles.item}>
            <View style={styles.square}>
              <Text style={styles.number}>01</Text>
            </View>
            <Text style={styles.content}>Lau nhà</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.item}>
            <View style={styles.square}>
              <Text style={styles.number}>02</Text>
            </View>
            <Text style={styles.content}>Rửa chén</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.item}>
            <View style={styles.square}>
              <Text style={styles.number}>03</Text>
            </View>
            <Text style={styles.content}>Đi chợ</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.item}>
            <View style={styles.square}>
              <Text style={styles.number}>04</Text>
            </View>
            <Text style={styles.content}>Nấu ăn</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
