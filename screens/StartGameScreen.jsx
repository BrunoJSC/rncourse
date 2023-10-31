import { StyleSheet, TextInput, View } from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";

export function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.box}>
        <TextInput
          style={styles.numberInput}
          keyboardType="number-pad"
          maxLength={2}
          autoCorrect={false}
        />
      </View>

      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: "#4e0329",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 }, // x and y offset
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },

  box: {
    alignItems: "center",
    justifyContent: "center",
  },
});
