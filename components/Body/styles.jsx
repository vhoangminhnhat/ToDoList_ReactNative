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
});

export default styles;
