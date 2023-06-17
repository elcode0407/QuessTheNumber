import { Text, StyleSheet } from "react-native";
function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "black",
    textAlign: "center",
    padding: 12,
    borderWidth: 2,
    borderColor: "black",
  },
});
