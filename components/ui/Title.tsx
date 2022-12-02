import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { colors } from '../../constants/colors';

interface TitleProps {
  children: string;
}
export const Title = ({ children }: TitleProps) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

const styles = StyleSheet.create({

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor:  colors.yellow,
    padding: 12,
    borderRadius: 5
  }
})