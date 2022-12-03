import { ReactNode } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { colors } from '../../constants/colors';

interface CardProps {
  children: ReactNode;
}
export const Card = ({ children }: CardProps) => {
  return (
    <View style={styles.cardContainer}>{children}</View>
  )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: colors.primary800,
    borderRadius: 9,
    elevation: 4, // for android
    shadowColor: 'black', // for ios
    shadowOffset: { width: 0, height: 6 }, // for ios
    shadowRadius: 6, // for ios
    shadowOpacity: 0.25, // for ios
  },
});