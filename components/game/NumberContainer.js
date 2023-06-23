import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceW = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "#00576b",
    padding: deviceW < 380 ? 12 : 24,
    margin: deviceW < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: "#00576b",
    fontSize: deviceW < 380 ? 28 : 36,
    fontFamily: "open-sans-bold",
  },
});
