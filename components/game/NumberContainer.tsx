import { ReactNode } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../constants/colors';

interface NumberContainerProps {
  children: ReactNode;
}
export const NumberContainer = ({ children }: NumberContainerProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textInput}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.yellow,
    padding: 24,
    borderRadius: 8,
    margin: 8,
    alignItems: "center",
    justifyContent: "center"
  },
  textInput: {
    color: colors.yellow,
    fontSize: 36,
    fontWeight: "700"
  }
})