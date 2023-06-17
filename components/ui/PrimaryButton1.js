import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton1({ children, onPress }) {
  return (
    <View style={styles.btnOutContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{
          color: "#0000008",
        }}
        style={({ pressed }) =>
          pressed
            ? [styles.btnInContainer, styles.pressed]
            : styles.btnInContainer
        }
      >
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton1;

const styles = StyleSheet.create({
  btnOutContainer: {
    borderColor: "black",
    borderWidth: 1,
    margin: 4,
    borderRadius: 28,
    overflow: "hidden",
  },
  btnInContainer: {
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  btnText: {
    textAlign: "center",
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});
