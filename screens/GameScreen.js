import {
  Text,
  View,
  StyleSheet,
  Alert,
  FlatList,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton1 from "../components/ui/PrimaryButton1";
import Card from "../components/card";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const { width, height } = useWindowDimensions();
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);
  function nextGuessHandler(direction) {
    //direction => 'lower', higher''
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don`t lie!", "You know this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  }
  const guessRoundsListLenght = guessRounds.length;

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Text style={styles.instrText}>Higher or lower?</Text>
        <View style={styles.btnsContainer}>
          <View style={styles.btnContainer}>
            <PrimaryButton1 onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color={"black"} />
            </PrimaryButton1>
          </View>
          <View style={styles.btnContainer}>
            <PrimaryButton1 onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color={"black"} />
            </PrimaryButton1>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.btnsContainerWide}>
          <View style={styles.btnContainer}>
            <PrimaryButton1 onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color={"black"} />
            </PrimaryButton1>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.btnContainer}>
            <PrimaryButton1 onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color={"black"} />
            </PrimaryButton1>
          </View>
        </View>
      </>
    );
  }
  return (
    <View style={styles.screen}>
      <Title style={styles.title}>Opponent`s Guess</Title>
      {content}
      <View style={styles.listContainer}>
        {/* {guessRounds.map((guessRounds) => (
          <Text key={guessRounds}>{guessRounds}</Text>
        ))} */}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLenght - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  btnsContainerWide: {
    flexDirection: "row",
    alignItems: "center",
  },
  instrText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    width: 200,
    color: "white",
    marginBottom: 12,
    fontFamily: "open-sans",
  },
  screen: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1598b5",
    textAlign: "center",
    padding: 12,
    borderWidth: 2,
    borderColor: "#1598b5",
  },
  btnsContainer: {
    flexDirection: "row",
  },
  btnContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
