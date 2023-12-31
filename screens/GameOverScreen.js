import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
} from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton1 from "../components/ui/PrimaryButton1";
function GameOverScreen({ roundsNumber, userNumber, onStartNeGame }) {
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={styles.imgContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton1 onPress={onStartNeGame}>Start New Game</PrimaryButton1>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;
const deviceW = Dimensions.get("window").width;
const styles = StyleSheet.create({
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: "#020078",
  },
  imgContainer: {
    width: deviceW < 380 ? 200 : 300,
    height: deviceW < 380 ? 200 : 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});
