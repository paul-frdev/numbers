import React, { ReactNode } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../constants/colors';

interface PrimaryButtonProps {
  children: ReactNode;
  onPress?: () => void;
}
export const PrimaryButton = ({ children, onPress }: PrimaryButtonProps) => {
  const pressHandler = () => {2
    onPress?.();
  }
  const confirmInputHandler = () => {

  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
        onPress={pressHandler}
        android_ripple={{ color: colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    shadowColor: 'black', // for ios
    shadowOffset: { width: 0, height: 6 }, // for ios
    shadowRadius: 6, // for ios
    shadowOpacity: 0.5, // for ios
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "500"
  },
  pressed: {
    opacity: 0.75,
  }
})