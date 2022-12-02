import { useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { NumberContainer } from '../components/game/NumberContainer';
import { Card } from '../components/ui/Card';
import { InstructionText } from '../components/ui/InstructionText';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { Title } from '../components/ui/Title';
import { generateRandomBetween } from '../helpers';
import { Ionicons } from '@expo/vector-icons'

interface GameScreenProps {
  userNumber: string;
  onGameOver: () => void;
}
let minBoundary = 1;
let maxBoundary = 100;

export const GameScreen = ({ userNumber, onGameOver }: GameScreenProps) => {
  const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  const nextGuessHandler = (direction: any) => {
    if ((direction === "lower" && currentGuess < Number(userNumber)) ||
      (direction === "higher" && currentGuess > Number(userNumber))) {
      Alert.alert("Don't lie", "You know that this is wrong!!!", [{ text: "Sorry", style: "cancel" }])
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(1, 100, currentGuess);
    setCurrentGuess(newRndNumber);
  }
  useEffect(() => {
    if (currentGuess === Number(userNumber)) {
      onGameOver?.();
    }
  }, [currentGuess, userNumber, onGameOver]);

  return (
    <View style={styles.screen}>
      <Title>Opponent's guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher of lower</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="md-add" size={24} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View>
        <Text>Log</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
})