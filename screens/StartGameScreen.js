import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  Text,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton1 from "../components/ui/PrimaryButton1";
import { useState } from "react";
import Title from "../components/ui/Title";
import Card from "../components/card";
function StartGameScreen(props) {
  const [enteredNumber, setEnteredNumber] = useState("");
  const { width, height } = useWindowDimensions();

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    props.onPickNumber(chosenNumber);
  }
  const marginTop = height < 380 ? 30 : 100;
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTop }]}>
          <Title>Guess My Number</Title>
          <Card>
            <View style={styles.textHolder}>
              <Text style={styles.instrText}>Enter a number</Text>
            </View>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={numberInputHandler}
              value={enteredNumber}
            />
            <View style={styles.btnsContainer}>
              <View style={styles.btnContainer}>
                <PrimaryButton1 onPress={resetInputHandler}>
                  Reset
                </PrimaryButton1>
              </View>
              <View style={styles.btnContainer}>
                <PrimaryButton1 onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton1>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  instrText: {
    fontFamily: "open-sans",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    width: 200,
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  btnsContainer: {
    flexDirection: "row",
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
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
  numberInput: {
    height: 50,
    fontSize: 32,
    width: 50,
    borderBottomColor: "#ffffff",
    borderBottomWidth: 2,
    color: "#ffffff",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  btnContainer: {
    flex: 1,
  },
});
