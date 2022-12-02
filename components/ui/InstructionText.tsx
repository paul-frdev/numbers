import { StyleSheet, Text } from 'react-native'
import { colors } from '../../constants/colors';

interface InstructionTextProps {
  children: string;
  style?: object;
}
export const InstructionText = ({ children, style }: InstructionTextProps) => {
  return (
    <Text style={[styles.instructionText, style]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: colors.yellow,
    fontSize: 24,
  }
});