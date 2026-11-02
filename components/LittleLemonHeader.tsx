import { View, Text, StyleSheet } from 'react-native';
import {Palette} from "../theme/palette";
type HeaderProps = {
  colors:Palette,
}
export  default function LittleLemonHeader({colors}:HeaderProps) {
  return (
    <View style={[styles.header,{backgroundColor:colors.surface}]}>
          <Text style={[styles.title,{color:colors.text}]}>Little Lemon</Text>
          <Text style={styles.subtitle}> Mediterranean Restaurant</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#495E57',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    color: '#F4CE14',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 6,
  },
});