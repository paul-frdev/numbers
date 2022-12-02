import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { colors } from './constants/colors';
import { GameScreen } from './screens/GameScreen';
import { StartScreenGame } from './screens/StartScreenGame';
import { GameOverScreen } from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userNumber, setUserNumber] = useState('');
  const [gameIsOver, setGameIsOver] = useState(true);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
  if (!fontsLoaded) {
    return <AppLoading />
  }
  const pickedNumberHandler = (pickedNumber: string) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
  const gameOverHandler = () => {
    setGameIsOver(true);
  }

  let screen = <StartScreenGame onPickedNumber={pickedNumberHandler} />
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }
  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />
  }
  return (
    <LinearGradient
      colors={[colors.primary700, colors.yellow]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/cubs.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  }
});
