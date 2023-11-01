import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { Colors } from "./constants/colors";
import { GameOverScreen } from "./screens/GameOverScreen";
import { GameScreen } from "./screens/GameScreen";
import { StartGameScreen } from "./screens/StartGameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(0);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounded, setGuessRounded] = useState(0);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounded(numberOfRounds);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounded(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />;
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={startNewGameHandler}
        onGameOver={gameOverHandler}
      />
    );
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={[Colors.primary700, Colors.accent500]}
    >
      <StatusBar style="auto" />
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    opacity: 0.15,
  },
});
