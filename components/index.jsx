import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import BodyComponent from "./Body";
import FooterComponent from "./Footer";
import ModalComponent from "./components/modal";
import { isEmpty } from "lodash";

const data = [
  {
    id: "1",
    name: "Lau nhà",
    description: "Phải lau nhà, không về vợ nó đấm !",
  },
  {
    id: "2",
    name: "Rửa chén",
    description: "Phải rửa chén, không vợ nó đấm !",
  },
  {
    id: "3",
    name: "Đi chợ",
    description: "Phải đi chợ, không vợ nó đấm !",
  },
  {
    id: "4",
    name: "Nấu ăn",
    description: "Phải nấu ăn, không vợ nó đấm !",
  },
];

export default function MainComponent() {
  const [taskList, setTaskList] = useState(data);
  const [modal, setModal] = useState(false);

  // const openModal = async (index, description) => {
  //   setModal(true);
  //   await handleDetail(index, description);
  //   // setModal(true);
  // };

  const handleDetail = async (description) => {
    Alert.alert("Chi tiết", `${isEmpty(description) ? 'Không có thông tin' : description}`, [
      {
        text: "Quay lại",
        onPress: () => {},
      },
    ]);
  };

  const addMoreTasks = (task) => {
    setTaskList([
      ...taskList,
      {
        id: (index) => index + 1,
        name: task,
      },
    ]);
  };
  useEffect(() => {
    setTaskList(data);
  }, [data]);
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>To Do List</Text>
        <ScrollView>
          {taskList.map((item, index) => {
            return (
              <BodyComponent
                id={index + 1}
                key={item.id}
                task={item?.name}
                openModal={() => handleDetail(item?.description)}
              />
            );
          })}
        </ScrollView>
      </View>
      <FooterComponent addTask={addMoreTasks} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5c293",
  },

  body: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  header: {
    fontSize: 22,
    color: "#226ae6",
    fontWeight: "bold",
  },

  item: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginTop: 12,
    marginBottom: 13,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: "15%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
