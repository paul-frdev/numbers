import { Image, StyleSheet, Text, View } from 'react-native'
import { PrimaryButton } from '../components/ui/PrimaryButton'
import { Title } from '../components/ui/Title'
import { colors } from '../constants/colors'

interface GameOverScreenProps {
  roundsNumber: number;
  userNumber: string;
  onStartNewGame: () => void;
}
export const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }: GameOverScreenProps) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/game-over.png')}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone number <Text style={styles.hightlight}>{roundsNumber}</Text> rounds to guess number{" "}
        <Text style={styles.hightlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: colors.primary800,
    overflow: 'hidden',
    margin: 36
  },
  image: {
    width: "100%",
    height: '100%'
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  hightlight: {
    fontFamily: 'open-sans-bold',
    color: colors.primary500
  }
})