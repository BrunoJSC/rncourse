import { StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/colors";

export function InstructionText({ children }) {
  return <Text style={styles.instruction}>{children}</Text>;
}

const styles = StyleSheet.create({
  instruction: {
    fontSize: 24,
    color: Colors.accent500,
    fontFamily: "open-sans",
  },
});
