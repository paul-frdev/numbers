import { useEffect, useState } from 'react'
import { Alert, FlatList, StyleSheet, useWindowDimensions, View } from 'react-native'
import { NumberContainer } from '../components/game/NumberContainer';
import { Card } from '../components/ui/Card';
import { InstructionText } from '../components/ui/InstructionText';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { Title } from '../components/ui/Title';
import { generateRandomBetween } from '../helpers';
import { Ionicons } from '@expo/vector-icons'
import { GuessRoundItem } from '../components/game/GuessRoundItem';

interface GameScreenProps {
  userNumber: string;
  onGameOver: (data: number) => void;
}
let minBoundary = 1;
let maxBoundary = 100;

export const GameScreen = ({ userNumber, onGameOver }: GameScreenProps) => {
  const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const { width, height } = useWindowDimensions();

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
    setGuessRounds(prvGuessRounds => [newRndNumber, ...prvGuessRounds])
  }
  const guessRoundsList = guessRounds.length;
  let content = (
    <>
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
    </>
  )
  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="md-add" size={24} />
            </PrimaryButton>
          </View>
        </View>
      </>
    )
  }
  useEffect(() => {
    if (currentGuess === Number(userNumber)) {
      onGameOver?.(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, [])

  return (
    <View style={styles.screen}>
      <Title>Opponent's guess</Title>
      {content}
      <View style={styles.listContainer}>
        {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
        <FlatList
          data={guessRounds}
          renderItem={itemRounds => {
            return (
              <GuessRoundItem
                guessRound={guessRoundsList - itemRounds.index}
                guass={itemRounds.item}
              />
            )
          }}
          keyExtractor={(item, index) => index.toString()}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
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
  buttonsContainerWide: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  listContainer: {
    flex: 1,
    padding: 16,

  }
})