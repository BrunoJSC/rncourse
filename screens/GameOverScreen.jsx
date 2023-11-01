import { Button, Image, StyleSheet, View } from "react-native";
import { Title } from "../components/ui/Title";
import { Colors } from "../constants/colors";

export function GameOverScreen({ userNumber, roundedNumber, onStartNewGame }) {
  return (
    <View style={styles.screen}>
      <Title>GAME OVER!</Title>
      <Image
        source={require("../assets/images/success.png")}
        style={styles.image}
      />
      <Button title="NEW GAME" onPress={onRestart} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: 400,
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary800,
    borderRadius: 40,
    margin: 20,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});
