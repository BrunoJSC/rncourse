import { StyleSheet, Text } from "react-native";

export function InstructionText({ children }) {
  return <Text style={styles.instruction}>{children}</Text>;
}

const styles = StyleSheet.create({
  instruction: {
    fontSize: 24,
    color: Colors.accent500,
  },
});
