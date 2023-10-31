import { StyleSheet } from "react-native";

export function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.buttonText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0782F9",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
