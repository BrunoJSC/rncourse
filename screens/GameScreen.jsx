import { useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { NumberContainer } from "../components/game/NumberContainer";
import { Title } from "../components/ui/Title";

function generateRandomBetween(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
}

export function GameScreen({ userNumber }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Guess a Number</Title>
      <NumberContainer>{currentGuess}</NumberContainer>

      <View>
        <Text>Higher or Lower</Text>
      </View>

      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: Platform.OS === "android" ? 60 : 10,
  },
});
