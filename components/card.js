import { StyleSheet, View, Dimensions } from "react-native";
function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;
const deviceW = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceW < 380 ? 18 : 36,
    marginHorizontal: 24,
    borderRadius: 6,
    padding: 16,
    backgroundColor: "#30b4d2",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
  },
});
