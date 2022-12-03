import React, { useState } from 'react'
import { Alert, StyleSheet, TextInput, useWindowDimensions, View, KeyboardAvoidingView, ScrollView } from 'react-native'
import { Card } from '../components/ui/Card';
import { InstructionText } from '../components/ui/InstructionText';
import { PrimaryButton } from '../components/ui/PrimaryButton'
import { Title } from '../components/ui/Title';
import { colors } from '../constants/colors';

interface StartScreenGameProps {
  onPickedNumber?: (text: string) => void;
}
export const StartScreenGame = ({ onPickedNumber }: StartScreenGameProps) => {
  const [enteredNumber, setEnteredNumber] = useState('');
  const { width, height } = useWindowDimensions()

  const marginTopDistance = height < 380 ? 30 : 100;
  const inputNumberHandler = (enteredText: string) => {
    setEnteredNumber(enteredText);
  }

  const resetInput = () => {
    setEnteredNumber('');
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number', 'Number has be a number between 1 and 99', [{ text: 'Okay', style: 'destructive', onPress: resetInput }])
    }
    onPickedNumber?.(enteredNumber);
  }
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior='position'>
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess my number</Title>
          <Card>
            <InstructionText>Enter a number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={enteredNumber}
              onChangeText={inputNumberHandler}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    // marginTop: deviceHeight < 400 ? 30 : 100,
    alignItems: "center"
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: colors.yellow,
    borderBottomWidth: 2,
    color: colors.yellow,
    marginVertical: 8,
    fontWeight: "700",
    width: 50,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});