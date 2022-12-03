import { ReactNode } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
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

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.yellow,
    borderRadius: 8,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    alignItems: "center",
    justifyContent: "center"
  },
  textInput: {
    color: colors.yellow,
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontFamily: 'open-sans-bold'
  }
})