import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
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

  square: {
    width: 48,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#cf571b",
    alignItems: "center",
    justifyContent: "center",
  },

  number: {
    color: "#fff",
    fontWeight: "bold",
  },

  content: {
    width: "80%",
    fontWeight: "bold",
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
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
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default styles;
